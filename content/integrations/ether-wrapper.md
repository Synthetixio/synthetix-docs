# Ether Wrapper: Minting sETH with Ether directly

The EtherWrapper, introduced with [SIP-112](https://sips.synthetix.io/sips/sip-112), brings with it the ability to mint `sETH` directly using either `ETH` in the `NativeEtherWrapper` or `WETH` in the `EtherWrapper` itself.

!!! tip "Tip: Native Ether"

    As the `EtherWrapper` has been designed for both L1 and L2 Optimism, it supports WETH (wrapped ether) by default. Thus when using the `NativeEtherWrapper` contract on L1, the Ether is simply wrapped on it's way and as such to see the total amount of Ether in both wrappers, simply look at the WETH holdings of https://contracts.synthetix.io/EtherWrapper.

## Mint sETH with ETH

### Contract

**Destination contract (address & ABI):** [`NativeEtherWrapper`](https://contracts.synthetix.io/NativeEtherWrapper)

### Methods

- [`mint(uint amount)`](/contracts/source/contracts/NativeEtherWrapper/#mint)

### Events Emitted

For each mint, among other events, two will be emitted

| name                                                         | emitted on     | `address account` | `uint principal`                                                                                                                                                        | `uint fee`                                                                                                        | `uint amountIn`      |
| ------------------------------------------------------------ | -------------- | ----------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | -------------------- |
| [`Minted`](/contracts/source/contracts/EtherWrapper/#minted) | `EtherWrapper` | `msg.sender`      | The `amount` minus the `fee` (or the remaining [`capacity`](/contracts/source/contracts/EtherWrapper/#capacity) of the EtherWrapper if `amount` would reach the limit.) | the fee in `sETH` that is deducted via the [`mintFeeRate`](/contracts/source/contracts/EtherWrapper/#mintfeerate) | the total `amountIn` |

| name                                                               | emitted on           | `address account` | `uint amountIn`      |
| ------------------------------------------------------------------ | -------------------- | ----------------- | -------------------- |
| [`Minted`](/contracts/source/contracts/NativeEtherWrapper/#minted) | `NativeEtherWrapper` | `msg.sender`      | the total `amountIn` |

### Example Transactions on Mainnet

- `NativeEtherWrapper.mint(1e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x4602c526f6e7602af0e91719e96bcd073256e18acc1aea8e0fa03bfb578d4e54/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x4602c526f6e7602af0e91719e96bcd073256e18acc1aea8e0fa03bfb578d4e54#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a single deposit accessed)

---

### Code Snippets

!!! example "Exchanging ETH for sUSD"

    === "Synthetix JavaScript"
        ```javascript hl_lines="12 13 14"
        // npm install @synthetix/contracts-interface

        /** Determine your import...

        // For node environments:
        const { synthetix } = require('@synthetixio/contracts-interface');

        // For single page applications:
        import { synthetix } from '@synthetixio/contracts-interface';

        // For Typescript
        import { synthetix, Network } from '@synthetixio/contracts-interface';

        // For browsers <script src="https://cdn.jsdelivr.net/npm/@synthetixio/contracts-interface/build/index.min.js"></script>
        const { synthetix } = window;

        **/

        // Initialize the project
        const snxjs = synthetix({ network: 'mainnet' });

        // or for typescript applications:
        // const snxjs = synthetix({ network: Network.Mainnet });

        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

        const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
        const snxjs = new SynthetixJs({ signer, networkId });

        (async () => {
          try {
            // send transaction
            const txn = await snxjs.Depot.exchangeEtherForSynths({
              value: snxjs.utils.parseEther('0.01'), // Send 0.01 ETH
            });

            console.log('hash is mining', txn.hash);

            // wait for mining
            await txn.wait();

            // fetch logs of transaction
            const { logs } = await signer.provider.getTransactionReceipt(txn.hash);

            // show them
            console.log(JSON.stringify(logs, null, '\t'));
          } catch (err) {
            console.log('Error', err);
          }
        })();
        ```

    === "Solidity"
        ```solidity hl_lines="18:21"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/IEtherWrapper.sol";

        contract MyContract {

          // This should be instantiated with our ReadProxyAddressResolver
          // it's a ReadProxy that won't change, so safe to code it here without a setter
          // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
          IAddressResolver public synthetixResolver;

          constructor(IAddressResolver _snxResolver) public {
              synthetixResolver = _snxResolver;
          }

          function mintsETH() payable external {
            IEtherWrapper nativeEtherWrapper = synthetixResolver.getAddress("NativeEtherWrapper");
            require(nativeEtherWrapper != address(0), "nativeEtherWrapper is missing from Synthetix resolver");

            nativeEtherWrapper.mint(msg.value);
          }

        }
        ```
