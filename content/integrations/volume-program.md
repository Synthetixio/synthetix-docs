# Volume Program

Projects that join the Synthetix Volume Program earn a 25% rebate on fees generated from synth swaps. To apply for the Volume Program, fill out our [application form](https://synthetixio.typeform.com/to/Eft91ZFC).

Once accepted to the Volume Program, you can use the code functions below to track your volume and earn fees. For more information, check out [SIP 63](https://sips.synthetix.io/sips/sip-63).

## Volume Program Integration

### Contract

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20)

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

> **Note:** Synthetix uses a proxy system. The ABI of the underlying Synthetix `ProxyERC20` contract you need is [`Synthetix`](https://contracts.synthetix.io/Synthetix). Learn more about how proxies work by visiting the [overview page](/integrations/#proxies).

#### Methods

- [`exchangeWithTracking(bytes32 sourceCurrencyKey, uint sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode)`](/contracts/source/contracts/Synthetix/#exchangewithtracking)
- [`exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode)`](/contracts/source/contracts/Synthetix/#exchangeonbehalfwithtracking)

### Events Emitted

On a successful transaction, the following events occur:

**If any fees are owing or owed, these events will come first. See [trade settlement](../settlement/#events-emitted) for information.**

Following any reclaims or rebates, the following events then occur:

| name                                                                | emitted on   | `address from`           | `address to` | `uint value` |
| ------------------------------------------------------------------- | ------------ | ------------------------ | ------------ | ------------ |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `Proxy<src>` | `msg.sender` (or `user`) | `0x0`        | `fromAmount` |

| name                                                 | emitted on   | `address account`        | `uint value` |
| ---------------------------------------------------- | ------------ | ------------------------ | ------------ |
| [`Burned`](/contracts/source/contracts/Synth#burned) | `Proxy<src>` | `msg.sender` (or `user`) | `fromAmount` |

| name                                                                | emitted on    | `address from` | `address to`             | `uint value`     |
| ------------------------------------------------------------------- | ------------- | -------------- | ------------------------ | ---------------- |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `Proxy<dest>` | `0x0`          | `msg.sender` (or `user`) | `toAmount - fee` |

| name                                                 | emitted on    | `address account`        | `uint value`     |
| ---------------------------------------------------- | ------------- | ------------------------ | ---------------- |
| [`Issued`](/contracts/source/contracts/Synth#issued) | `Proxy<dest>` | `msg.sender` (or `user`) | `toAmount - fee` |

| name                                                                | emitted on  | `address from` | `address to`                                                      | `uint value` |
| ------------------------------------------------------------------- | ----------- | -------------- | ----------------------------------------------------------------- | ------------ |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `ProxysUSD` | `0x0`          | [`FEE_ADDRESS`](/contracts/source/contracts/FeePool/#fee_address) | `fee`        |

| name                                                 | emitted on  | `address account`                           | `uint value` |
| ---------------------------------------------------- | ----------- | ------------------------------------------- | ------------ |
| [`Issued`](/contracts/source/contracts/Synth#issued) | `ProxysUSD` | [`FEE_ADDRESS`](../../FeePool/#fee_address) | `fee`        |

| name                                                                   | emitted on       | `address account`             | `bytes32 src` | `uint fromAmount` | `bytes32 dest` | `uint toAmount`  | `address toAddress`           |
| ---------------------------------------------------------------------- | ---------------- | ----------------------------- | ------------- | ----------------- | -------------- | ---------------- | ----------------------------- |
| [`SynthExchange`](/contracts/source/contracts/Synthetix#synthexchange) | `ProxySynthetix` | `msg.sender`<br />(or `user`) | `src`         | `fromAmount`      | `dest`         | `toAmount - fee` | `msg.sender`<br />(or `user`) |

| name                                                                         | emitted on       | `bytes32 trackingCode` | `bytes32 toCurrencyKey` | `uint amount` |
| ---------------------------------------------------------------------------- | ---------------- | ---------------------- | ----------------------- | ------------- |
| [`ExchangeTracking`](/contracts/source/contracts/Synthetix#exchangetracking) | `ProxySynthetix` | `1inch`                | `dest`                  | `toAmount`    |

### Examples from Mainnet

No examples yet.

---

### Code Snippets

!!! example "Exchanging (Trading)"

    === "SynthetixJs"
        ```javascript hl_lines="16"
        const { SynthetixJs } = require('synthetix-js');
        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

        // parameters: default provider, default networkId, private key as a string
        const networkId = 11155111; // sepolia, (use 1 for mainnet)
        const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
        const snxjs = new SynthetixJs({ signer, networkId });

        const { toUtf8Bytes32, parseEther } = snxjs.utils;

        (async () => {
          try {
         	const userAddress = '0x0000000000000000000000000000000000000001';

            // send transaction
            const txn = await snxjs.Synthetix.exchangeWithTracking(toUtf8Bytes32('sUSD'), parseEther('0.001'), toUtf8Bytes32('iETH'), userAddress, toUtf8Bytes32('1inch'));

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

    === "Vanilla JavaScript"
        ```javascript hl_lines="25"
        const synthetix = require('synthetix'); // nodejs
        const ethers = require('ethers'); // nodejs
        // or using ES modules:
        // import synthetix from 'synthetix';
        // import ethers from 'ethers';

        const network = 'sepolia';
        const provider = ethers.getDefaultProvider(network === 'mainnet' ? 'homestead' : network);

        const { address } = synthetix.getTarget({ network, contract: 'ProxyERC20' });
        const { abi } = synthetix.getSource({ network, contract: 'Synthetix' });

        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
        const signer = new ethers.Wallet(privateKey).connect(provider);

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const Synthetix = new ethers.Contract(address, abi, signer);
        const { toBytes32 } = synthetix;

        (async () => {
          try {
         	const userAddress = '0x0000000000000000000000000000000000000001';

            // send transaction
            const txn = await Synthetix.exchangeWithTracking(toBytes32('sUSD'), ethers.utils.parseEther('0.001'), toBytes32('iETH'), userAddress, toBytes32('1inch'));

            // wait for mining
            await txn.wait();
            // fetch logs of transaction
            const { logs } = await provider.getTransactionReceipt(txn.hash);
            // display
            console.log(JSON.stringify(logs, null, '\t'));
          } catch (err) {
            console.log('Error', err);
          }
        })();
        ```

    === "Solidity"
        ```solidity hl_lines="26 44"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/ISynthetix.sol";


        contract MyContract {

            // This should be instantiated with our ReadProxyAddressResolver
            // it's a ReadProxy that won't change, so safe to code it here without a setter
            // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
            IAddressResolver public synthetixResolver;

            constructor(IAddressResolver _snxResolver) public {
                synthetixResolver = _snxResolver;
            }

            function synthetixExchange(bytes32 src, uint amount, bytes32 dest, address originator, bytes32 trackingCode) external {)
              ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
              require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

              // This check is what synthetix.exchange() will perform, added here for explicitness
              require(!synthetix.isWaitingPeriod(src), "Cannot exchange during the waiting period");

              // Exchange for msg.sender = address(MyContract)
              synthetix.exchangeWithTracking(src, amount, dest, originator, trackingCode);

              // Note: due to Fee Reclamation in SIP-37, the following actions will fail if attempted in the
              // same block (the waiting period for the "to" synth must first expire)
                // synthetixResolver.getSynth(dest).transfer(address(0), 1e12)
                // synthetix.exchange(dest, 1e12, "sBTC");
                // synthetix.settle(dest);
            }

            function synthetixExchangeOnBehalf(address user, bytes32 src, uint amount, bytes32 dest, address originator, bytes32 trackingCode) external {
                ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
                require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

                // This check is what synthetix.exchange() will perform, added here for explicitness
                require(!synthetix.isWaitingPeriod(src), "Cannot exchange during the waiting period");

                // Note: this will fail if `DelegateApprovals.approveExchangeOnBehalf(address(MyContract))` has
                // not yet been invoked by the user
                synthetix.exchangeOnBehalfWithTracking(user, src, amount, dest, originator, trackingCode);

                // Note: due to Fee Reclamation in SIP-37, the following actions will fail if attempted in the
                // same block (the waiting period for dest must first expire)
                  // synthetixResolver.getSynth(dest).transferFrom(user, address(0), 1e12)
                  // synthetix.exchangeOnBehalf(user, dest, 1e12, "sBTC");
                  // synthetixResolver.getAddress("Exchanger").settle(user, dest)
            }
        }
        ```
