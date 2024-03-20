# Historical Data

!!! tip "Synthetix Stats"

    For current metrics from the Synthetix system, visit https://stats.synthetix.io

There are multiple ways to access Synthetix’s historical data:

- **The Graph** - Use [The Graph](https://thegraph.com/) to retrieve data from a GraphQL API.
- **Event Logs** - Query event logs directly via the EVM.
- **Archive Nodes** - Fetch state at a specific block using an archive node.
- **Third-party Services** - Use a third-party service like Google BigQuery or Dune Analytics.

### The Graph

[The Graph](https://thegraph.com/) is a decentralized protocol for indexing and querying data. Subgraphs define which data The Graph will index and how it will be stored. This data is then provided via a GraphQL API. The Graph currently consists of a hosted service and a decentralized network. In the future, the hosted service will be gradually sunset after the decentralized network achieves feature parity.

#### Hosted Service

The hosted service can be used to query data from the Synthetix subgraphs. All of Synthetix’s subgraphs are maintained in [this repository](https://github.com/Synthetixio/synthetix-subgraph).

Each subgraph can be inspected in The Graph’s web application. For instance, you can find the API endpoint, statistics, and a "playground" for the Exchanges subgraph [here](https://thegraph.com/hosted-service/subgraph/synthetixio-team/synthetix-exchanges). Links for each of the subgraphs can be found in [the README of the subgraph repository](https://github.com/Synthetixio/synthetix-subgraph/blob/main/README.md).

!!! warning "Using subgraphs with the hosted service may introduce breaking changes"

    The Synthetix subgraphs are under active development. Because The Graph does not currently support pinning subgraph versions on the hosted service, these subgraphs should be used with caution.

To abstract interacting with The Graph’s hosted service directly, Synthetix maintains a JavaScript library: [synthetix-data](/libraries/synthetix-data). The library provides TypeScript support for the returned data and allows you to subscribe to real-time updates.

#### The Graph Network

Synthetix’s data can also be queried on the decentralized network. Information about the "mega" subgraph (which aggregates the individual subgraphs on the hosted service) can be found [here in the Graph Explorer](https://thegraph.com/explorer/subgraph?id=0xde910777c787903f78c89e7a0bf7f4c435cbb1fe-0&view=Overview).

### Event Logs

Instead of using the subgraphs, you can directly query the EVM via most free providers (such as Infura or Etherscan).

!!! example "E.g. Get all `Synthetix.SynthExchange` events"

    ```javascript
    const synthetix = require('synthetix');
    const ethers = require('ethers');

    const network = 'sepolia';

    const provider = ethers.getDefaultProvider(network);

    const { abi } = synthetix.getSource({
      network,
      contract: 'Synthetix',
    });

    const { address } = synthetix.getTarget({
      network,
      // Note: for contracts with proxies, events are always emitted on the Proxy,
      // so we need to use this address here
      contract: 'ProxyERC20',
    });

    const { inputs, signature } = abi.find(
      ({ type, name }) => type === 'event' && name === 'SynthExchange'
    );

    (async () => {
      const exchanges = await provider.getLogs({
        topics: [signature],
        address,
        fromBlock: 0,
        toBlock: 1e10, // note the upper bound here may need to be changed in the future
      });

      const iface = new ethers.utils.Interface(abi);

      for (const exchange of exchanges) {
        console.log('Found SynthExchange event:');

        const { values } = iface.parseLog(exchange);

        console.log(
          '\t',
          values.account,
          ethers.utils.parseBytes32String(values.fromCurrencyKey),
          ethers.utils.formatEther(values.fromAmount),
          ethers.utils.parseBytes32String(values.toCurrencyKey),
          ethers.utils.formatEther(values.toAmount)
        );
      }
    }
    ```

### Archive Nodes

You can also use an Ethereum node with full historical state (an archive node) to read the blockchain state at some block in the past.

Query using the `{ blockTag: <Number> }` option to get state at a previous block (note the call will fail if the contract was not deployed at the block). Note: usage of this feature of `ethers` and `web3` requires a provider that is a full archive node. [Infura](https://infura.io) and [QuikNode](https://quicknode.io) both provide access to archive nodes for monthly costs. This is supported in [SynthetixJs](/libraries/synthetix-js) via the underlying `.contract` property in every contract target.

!!! example "E.g. fetch `Synthetix.totalIssuedSynths()` from a block in the past"

    ```javascript
    import ethers from 'ethers';
    import synthetix from 'synthetix';

    // assuming INFURA_PROJECT_ID is from a paid, archive node
    const provider = ethers.providers.InfuraProvider(
      'homestead',
      'Some Infura PROJECT_ID from an archive node'
    );

    const network = 'mainnet';
    const { abi } = synthetix.getSource({
      network,
      contract: 'Synthetix'
    });
    const { address } = synthetix.getTarget({
      network,
      contract: 'ProxySynthetix'
    });

    // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
    const Synthetix = new ethers.Contract(address, abi, provider);

    (async () => {
      const totalIssuedSynths = await Synthetix.totalIssuedSynths(
        synthetix.toBytes32('sUSD'),
        {
          blockTag: 9000000
        }
      );
      console.log(ethers.utils.formatEther(totalIssuedSynths));
    })();
    ```

### Third-Party Services

There are a number of third parties services that provide queryable datasources for generic smart contract usage:

- [Altheio](https://aleth.io/)
- [Dune Analytics](https://www.duneanalytics.com)
- [Google BigQuery](https://medium.com/google-cloud/live-ethereum-and-bitcoin-data-in-google-bigquery-and-pub-sub-765b71cd57b5)
