# Trading: Settlement

[SIP-37](https://sips.synthetix.io/sips/sip-37) in the Achernar release introduced Fee Reclamation into Synthetix. This means, following all exchanges into a synth, a waiting period must expire before subsequent exchanges out of that synth can be processed.

Once the waiting period expires, settlement is performed automatically during subsequent exchanges. **However, subsequent `transfer` attempts will always fail if there is not sufficient balance after settlement, hence `transferAndSettle` must be used.**

!!! tip "Transfer and settle"

    It was decided during SIP-37 to not automatically settle within transfers. The reason being is that to settle within a transfer may break ERC20 conventions because the amount provided as a parameter might not be the amount emitted via `Transfer` due to fees owing or owed.

## Settlement API

There are a number of different ways to settle synths explicitly:

1. via `Synthetix.settle(bytes32 synth)` where the user is `msg.sender`
2. via `Exchanger.settle(address user, bytes32 synth)` where the `user` is provided (and `msg.sender` pays the gas)
3. via `Synth<key>.transferAndSettle(address to, uint value)` where the user `msg.sender`
4. via `Synth<key>.transferFromAndSettle()` where the `user` is provided (and `msg.sender` has been ERC20 approved to `transferFrom`)

### 1. User settles for themselves

!!! warning "Use the Proxies"

    Note: The transaction's `to` parameter can be to either the proxy or the underlying, however two things are worth noting:

    1. the underlying is subject to change (and does most releases); and
    2. the events will always be emitted on the proxy, regardless of the `to` parameter in the transaction.

    For best results, always interact with the proxy using the ABI of the underlying.

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integrations/guide/#proxy-deprecation))

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

#### Methods

- [`settle(bytes32 currencyKey)`](../../Synthetix#settle)

#### Examples on Mainnet

- `Synthetix.settle(iETH)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x9948f2248b2aabf0f35dd526b19ab65091356e7771718a2e9f0c2f3308c9dd53/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x9948f2248b2aabf0f35dd526b19ab65091356e7771718a2e9f0c2f3308c9dd53#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### 2. Anyone can settle on behalf of a user

**Contract (address & ABI):** [`Exchanger`](https://contracts.synthetix.io/Exchanger) (_this address is subject to change in subsequent releases_)

#### Methods

- [`settle(bytes32 currencyKey)`](../../Exchanger#settle)

#### Examples on Mainnet

- `Exchanger.settle(iETH)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x547b45c81e151c98b4ab23fd451e02271325ec91ad896952a9cc05fc2331b237/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x547b45c81e151c98b4ab23fd451e02271325ec91ad896952a9cc05fc2331b237#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### 3. User transfers and settles

**Destination contract (address):** `Proxy<key>` where `key` is the synth key (e.g. `sUSD`, `iETH`, etc)

**Target contract (ABI):** `Synth<key`

#### Methods

- [`transferAndSettle(address to, uint value)`](../../Synth#transferAndsettle)

#### Examples on Mainnet

- `ProxysUSD.transferAndSettle(0xb5532ce, 2056e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xc8465034a7b9e3220f40b9a6dcbe8e8f15b69aa45140616396033888968329ec/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xc8465034a7b9e3220f40b9a6dcbe8e8f15b69aa45140616396033888968329ec#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### 4. Approved contract transfers and settles for a user

**Destination contract (address):** `Proxy<key>` where `key` is the synth key (e.g. `sUSD`, `iETH`, etc)

**Target contract (ABI):** `Synth<key`

#### Methods

- [`transferFromAndSettle(address from, address to, uint value)`](../../Synth#transferfromandsettle)

### Events Emitted

#### If fees owing on `src` (fee reclamation)

| name                                          | emitted on   | `address from`           | `address to` | `uint value` |
| --------------------------------------------- | ------------ | ------------------------ | ------------ | ------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `Proxy<src>` | `msg.sender` (or `user`) | `0x0`        | `feesOwing`  |

| name                           | emitted on   | `address account`        | `uint value` |
| ------------------------------ | ------------ | ------------------------ | ------------ |
| [`Burned`](../../Synth#burned) | `Proxy<src>` | `msg.sender` (or `user`) | `feesOwing`  |

| name                                                 | emitted on       | `address account`             | `bytes32 currencyKey` | `uint value` |
| ---------------------------------------------------- | ---------------- | ----------------------------- | --------------------- | ------------ |
| [`ExchangeReclaim`](../../Synthetix#exchangereclaim) | `ProxySynthetix` | `msg.sender`<br />(or `user`) | `src`                 | `feesOwing`  |

#### Else if fees owed on `src` (fee rebate)

| name                                          | emitted on   | `address from` | `address to`             | `uint value` |
| --------------------------------------------- | ------------ | -------------- | ------------------------ | ------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `Proxy<src>` | `0x0`          | `msg.sender` (or `user`) | `feesOwed`   |

| name                           | emitted on   | `address account`        | `uint value` |
| ------------------------------ | ------------ | ------------------------ | ------------ |
| [`Issued`](../../Synth#issued) | `Proxy<src>` | `msg.sender` (or `user`) | `feesOwed`   |

| name                                               | emitted on       | `address account`             | `bytes32 currencyKey` | `uint value` |
| -------------------------------------------------- | ---------------- | ----------------------------- | --------------------- | ------------ |
| [`ExchangeRebate`](../../Synthetix#exchangerebate) | `ProxySynthetix` | `msg.sender`<br />(or `user`) | `src`                 | `feesOwed`   |

---

### Code Snippets

!!! example "Settlement"

    === "SynthetixJs"
        ```javascript hl_lines="14"
        const { SynthetixJs } = require('synthetix-js');
        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

        // parameters: default provider, default networkId, private key as a string
        const networkId = 3; // ropsten, (use 1 for mainnet)
        const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
        const snxjs = new SynthetixJs({ signer, networkId });

        const { toUtf8Bytes32, parseEther } = snxjs.utils;

        (async () => {
          try {
            // send transaction
            const txn = await snxjs.Synthetix.settle(toUtf8Bytes32('iETH'));

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
        ```javascript hl_lines="23"
        const synthetix = require('synthetix'); // nodejs
        const ethers = require('ethers'); // nodejs
        // or using ES modules:
        // import synthetix from 'synthetix';
        // import ethers from 'ethers';

        const network = 'ropsten';
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
            // send transaction
            const txn = await Synthetix.settle(toBytes32('iETH'));

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
        ```solidity hl_lines="27 39 47 57"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/ISynthetix.sol";
        import "synthetix/contracts/interfaces/IExchanger.sol";


        contract MyContract {

            // This should be instantiated with our ReadProxyAddressResolver
            // it's a ReadProxy that won't change, so safe to code it here without a setter
            // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
            IAddressResolver public synthetixResolver;

            constructor(IAddressResolver _snxResolver) public {
                synthetixResolver = _snxResolver;
            }

            function synthetixSettle(bytes32 synthKey) external {)
              ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
              require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

              // This check is what synthetix.exchange() will perform, added here for explicitness
              require(!synthetix.isWaitingPeriod(synthKey), "Cannot settle during the waiting period");

              // Settle for msg.sender = address(MyContract)
              synthetix.settle(synthKey);

            }

            function synthetixSettleOnBehalf(address user, bytes32 synthKey) external {
                IExchanger exchanger = synthetixResolver.getAddress("Exchanger");
                require(exchanger != address(0), "Exchanger is missing from Synthetix resolver");

                // This check is what exchanger.settle() will perform, added here for explicitness
                require(exchanger.maxSecsLeftInWaitingPeriod(user, synthKey) == 0, "Cannot settle during the waiting period");

                // This function has no msg.sender restriction - any address can call it (they'll just have to pay the gas on behalf of the user)
                exchanger.settle(user, synthKey)
            }

            function synthetixTransferAndSettle(bytes32 synthKey, address to, uint value) extenrnal {
                // Note ⚠️: IAddressResolver.getSynth will not work until the Altair release (v2.22) of Synthetix
                ISynth synth = synthetixResolver.getSynth(synthKey);
                require(synth != address(0), "Synth is missing from Synthetix");

                synth.transferAndSettle(to, value);
            }


            function synthetixTransferFromAndSettle(bytes32 synthKey, address from, address to, uint value) extenrnal {
                // Note ⚠️: IAddressResolver.getSynth will not work until the Altair release (v2.22) of Synthetix
                ISynth synth = synthetixResolver.getSynth(synthKey);
                require(synth != address(0), "Synth is missing from Synthetix");

                // Note: only works if user has invoked ERC20.approve(address(MyContract)) on the given synth
                synth.transferFromAndSettle(from, to, value);
            }
        }
        ```
