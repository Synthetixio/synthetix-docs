# Historical Data

??? tip "Tip: The Synthetix Dashboard"

    Synthetix has a custom dashboard app - https://dashboard.synthetix.io - which shows a number of key metrics within the system. Some of the dashboard is powered by the subgraphs below and some by an internal metrics gathering system (closed source). We are in the process of migrating towards the Graph for our entire dashboard: https://github.com/Synthetixio/synthetix/issues/254

There are a number a ways to access Synthetix's historical data.

- Query Synthetix event log history and calls using The Graph subgraphs
- Fetch state at some block in the past using an Archive Node
- Query event logs directly via the EVM
- Use a third party service like Google BigQuery or DuneAnalytics

### The Graph

Synthetix has indexed protocol data on the [Graph](https://thegraph.com/), a decentralized network for querying Ethereum data. The Graph allows for the creation of custom data sets, aka "subgraphs", which are easily queryable. Synthetix currently has four separate subgraphs for retrieving information specific to Synthetix smart contracts. A subgraph is an entity-based data source which replays all transactions since the genesis block and uses custom code to create queryable entities as each block is processed.

Since dealing with the Graph directly can be time consuming, we've written a custom JavaScript library to help users obtain Synthetix data and abstract away the complexity of dealing with these subgraphs. It's called [synthetix-data](/libraries/synthetix-data), and it's an `npm` module to query historical or subscribe to these events in real time.

Alternatively, each of these subgraphs can be queried using GraphQL - follow the links below to query the subgraphs using GraphQL in the data explorer UIs provided.

<a href="//thegraph.com/explorer/subgraph/synthetixio-team/synthetix"><img class="rounded-image" src="/img/misc/subgraph.png" /></a> <a href="//thegraph.com/explorer/subgraph/synthetixio-team/synthetix-exchanges"><img class="rounded-image" src="/img/misc/subgraph-exchanges.png" /></a> <a href="//thegraph.com/explorer/subgraph/synthetixio-team/synthetix-rates"><img class="rounded-image" src="/img/misc/subgraph-rates.png" /></a> <a href="//thegraph.com/explorer/subgraph/synthetixio-team/synthetix-depot"><img class="rounded-image"  src="/img/misc/subgraph-depot.png" /></a>

> The code for these subgraphs is up at: @Synthetixio/synthetix-subgraph

### Query event logs directly on the EVM

Instead of using the subgraphs provided, you could directly query the EVM via most free providers (such as Infura or Etherscan).

!!! example "E.g. Get all `Synthetix.SynthExchange` events"

    ```javascript
    const synthetix = require('synthetix');
    const ethers = require('ethers');

    const network = 'kovan';

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

### Using an Archive Node

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

### Third Party Services

There are a number of third parties services that provide queryable datasources for generic smart contract usage:

- [Altheio](https://aleth.io/)
- [Dune Analytics](https://www.duneanalytics.com)
- [Google BigQuery](https://medium.com/google-cloud/live-ethereum-and-bitcoin-data-in-google-bigquery-and-pub-sub-765b71cd57b5)
