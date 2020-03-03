# Libraries

!!! Tip "Who this guide is for"

    This is a guide for script writers, dApp developers, analytics platforms and those looking to build software that can interact with Sythetix

### Fetch deployment information

If you're looking to get the addresses and ABIs of any Synthetix contract, or maybe the list of synths and their parameters, the best way is to use our [`synthetix` `npm` module](synthetix.md#usage-and-requirements) (written for nodejs). Instead of looking it up online, the module contains all the details available to fetch locally (we manage this during our deployment processes).

If you'd rather than functionality in the browser, you'll need to use our [`synthetix-js` JavaScript library on `npm`](synthetix-js.md).

### Read and write state

To interact with Synthetix in your dApps and scripts, you have a few options:

1.  Use our [synthetix-js](synthetix-js.md) library, which is updated each synthetix release with the same version number. It uses `ethers.js` under the hood.

2.  Write a custom JS script using our [synthetix npm module](synthetix.md) to help load the ABIs and addresses as need be.

    ??? example "E.g. fetch `Synthetix.totalIssuedSynths()`"

        ```javascript
        // With Ethers
        import ethers from "ethers"; // es modules
        import synthetix from "synthetix";

        const provider = ethers.getDefaultProvider();

        const network = "mainnet";
        const { abi } = synthetix.getSource({
            network,
            contract: "Synthetix"
        });
        const { address } = synthetix.getTarget({
            network,
            contract: "ProxySynthetix"
        });

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const Synthetix = new ethers.Contract(address, abi, provider);

        (async () => {
            const totalIssuedSynths = await Synthetix.totalIssuedSynths(
                synthetix.toBytes32("sUSD")
            );
            console.log(ethers.utils.formatEther(totalIssuedSynths));
        })();
        ```

3.  Write code to connect to the contracts generically using the addresses and ABIs from the [addresses](../addresses.md) section, downloading the ABIs either directly or via Etherscan's ABI.

### Lookup on-chain historical data

To query data historically, a few options are available:

1.  Use our [synthetix-data](synthetix-data.md) library, which abstracts away the various subgraphs Synthetix uses, exposing query and subscription endpoints for a variety of use-case.

2.  Query our subgraphs directly via our various subgraphs which are listed [here](../historical-data.md#subgraphs).

3.  Query using the `{ blockTag: <Number> }` option to get state at a previous block (note the call will fail if the contract was not deployed at the block). Note: usage of this feature of `ethers` and `web3` requires a provider that is a full archive node. [Infura](https://infura.io) and [QuikNode](https://quicknode.io) both provide access to archive nodes for monthly costs. This is supported in [SynthetixJs](synthetix-js.md) via the underlying `.contract` property in every contract target.

    ??? example "E.g. fetch `Synthetix.totalIssuedSynths()` from a block in the past"

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

4.  Query for logs using filter topics.

    ??? example "E.g. Get all `FeePool.FeesClaimed` events"

        ```javascript
        import synthetix from 'synthetix';
        const provider = ethers.getDefaultProvider();

        const network = 'mainnet';
        const { abi } = synthetix.getSource({
          network,
          contract: 'FeePool'
        });
        const { address } = synthetix.getTarget({
          network,
          // Note: for contracts with proxies, events are always emitted on the Proxy,
          // so we need to use this address here
          contract: 'ProxyFeePool'
        });

        const { signature } = abi.find(
          ({ type, name }) => type === 'event' && name === 'FeesClaimed'
        );

        (async () => {
          const feesClaimedEvents = await provider.getLogs({
            topics: [signature],
            address,
            fromBlock: 9000000,
            toBlock: 9015000
          });
          // show last three if any
          console.log(JSON.stringify(feesClaimedEvents.slice(0, 3), null, '\t'));
        })();
        ```
