# Virtual Synths (vSynths)

[SIP-89](https://sips.synthetix.io/sips/sip-89) introduced the concept of virtual synths. That is, upon exchanging a new ERC20 contract is created with virtual synths issued 1:1 representing a claim on those underlying synths. These virtual synths can be split up and transferred to any other wallet. Once the fee reclamation waiting period has expired (via [`SystemSettings.waitingPeriodSecs`](/contracts/source/contracts/SystemSettings/#waitingperiodsecs)), anyone can settle the virtual synths, burning them and transferring the holder their proportion of the synths from the settled trade.

!!! tip "Alternative Implementations"

    The `exchangeWithVirtual` function creates and returns an ERC20 of Virtual Synths but strictly this is not necessary. Smart contract authors can simply exchange with Synthetix as a contract and manage the underlying synth distribution themsevles. Curve for instance with their [Cross Asset Swaps](https://twitter.com/CurveFinance/status/1350815884521185280) did just this, using an NFT to hold the underlying synths instead of an ERC20 (see https://github.com/curvefi/curve-cross-asset-swaps/tree/master/contracts)

## Virtual Synth API

There are two steps to Virtual Synths

1. Create the virtual synth contract via [`Synthetix.exchangeWithVirtual()`](/contracts/source/contracts/Synthetix/#exchangewithvirtual) - this function outputs the new `VirtualSynth` contract address for the next step
2. Once [`VirtualSynth.secsLeftInWaitingPeriod`](/contracts/source/contracts/VirtualSynth/#secsleftinwaitingperiod) is `0` (and it's `readyToSettle`), invoke [`VirtualSynth.settle(address)`](/contracts/source/contracts/VirtualSynth/#settle) to burn the virtual synths and transfer the proportion of underlying synths to the `address`.

### 1. Creation of Virtual Synth Contract

#### Contract

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20)

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

> **Note:** Synthetix uses a proxy system. The ABI of the underlying Synthetix `ProxyERC20` contract you need is [`Synthetix`](https://contracts.synthetix.io/Synthetix). Learn more about how proxies work by visiting the [overview page](/integrations/#proxies)

#### Methods

- [`exchangeWithVirtual(bytes32 src, uint sourceAmount, bytes32 dest, bytes32 trackingCode)`](/contracts/source/contracts/Synthetix/#exchangewithvirtual)

#### Events Emitted

On a successful transaction, the following events occur:

> If any fees are owing or owed, these events will come first. See [trade settlement](../settlement/#events-emitted) for information.

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

| name                                                                                               | emitted on  | `address synth` | `address recipient`      | `address virtualSynth`                  | `bytes32 currencyKey`                   | `uint amount`       |
| -------------------------------------------------------------------------------------------------- | ----------- | --------------- | ------------------------ | --------------------------------------- | --------------------------------------- | ------------------- |
| [`VirtualSynthCreated`](/contracts/source/contracts/ExchangerWithVirtualSynth#virtualsynthcreated) | `Exchanger` | `Proxy<dest>`   | `msg.sender` (or `user`) | the new `VirtualSynth` contract address | the synth key that is being virtualized | the `amount` issued |

| name                                                                | emitted on  | `address from` | `address to`                                                      | `uint value` |
| ------------------------------------------------------------------- | ----------- | -------------- | ----------------------------------------------------------------- | ------------ |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `ProxysUSD` | `0x0`          | [`FEE_ADDRESS`](/contracts/source/contracts/FeePool/#fee_address) | `fee`        |

| name                                                 | emitted on  | `address account`                           | `uint value` |
| ---------------------------------------------------- | ----------- | ------------------------------------------- | ------------ |
| [`Issued`](/contracts/source/contracts/Synth#issued) | `ProxysUSD` | [`FEE_ADDRESS`](../../FeePool/#fee_address) | `fee`        |

| name                                                                         | emitted on  | `uint cachedDebt`                                                                    |
| ---------------------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------ |
| [`DebtCacheUpdated`](/contracts/source/contracts/DebtCache#debtcacheupdated) | `DebtCache` | New `cachedDebt` in the system (see [SIP-91](https://sips.synthetix.io/sips/sip-91)) |

| name                                                                   | emitted on       | `address account`             | `bytes32 src` | `uint fromAmount` | `bytes32 dest` | `uint toAmount`  | `address toAddress`           |
| ---------------------------------------------------------------------- | ---------------- | ----------------------------- | ------------- | ----------------- | -------------- | ---------------- | ----------------------------- |
| [`SynthExchange`](/contracts/source/contracts/Synthetix#synthexchange) | `ProxySynthetix` | `msg.sender`<br />(or `user`) | `src`         | `fromAmount`      | `dest`         | `toAmount - fee` | `msg.sender`<br />(or `user`) |

| name                                                                                   | emitted on  | `address account`             | `bytes32 src` | `uint amount` | `bytes32 dest` | `uint amountReceived` | `uint exchangeFeeRate`     | `uint roundIdForSrc`                  | `uint roundIdForDest`                  |
| -------------------------------------------------------------------------------------- | ----------- | ----------------------------- | ------------- | ------------- | -------------- | --------------------- | -------------------------- | ------------------------------------- | -------------------------------------- |
| [`ExchangeEntryAppended`](/contracts/source/contracts/Exchanger#exchangeentryappended) | `Exchanger` | `msg.sender`<br />(or `user`) | `src`         | `fromAmount`  | `dest`         | `toAmount - fee`      | the `exchangeFeeRate` paid | the `roundId` for rate of `src` synth | the `roundId` for rate of `dest` synth |

#### Example Transactions on Mainnet

- `Synthetix.exchangeWithVirtual(sUSD, 101e18, sBTC, 0x0)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xd77dd1b41d88d02c9b8d0cf23582af4cc05dff1a2760fdd93f3eed03e5772c9f/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xd77dd1b41d88d02c9b8d0cf23582af4cc05dff1a2760fdd93f3eed03e5772c9f#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

### 2. Settlement

#### Contract

**VirtualSynth:** This address is unique to each exchange. It is returned as the second part of the tuple returned from `exchangeWithVirtual():(uint amountReceived, address vSynth)`. It is also emitted in the [`VirtualSynthCreated`](/contracts/source/contracts/ExchangerWithVirtualSynth#virtualsynthcreated) event from the transaction above (see `address vSynth`).

**Target contract (ABI):** [`VirtualSynth`](https://contracts.synthetix.io/VirtualSynth)

#### Methods

- [`settle(address account)`](/contracts/source/contracts/VirtualSynth/#settle)

!!! tip "Multiple Invocations"

    Because Virtual Synths are an ERC20, they can be distributed to any number of other accounts. However, the ERC20 contract itself must be settled once for all holders. This is done on the first invocation of `VirtualSynth.settle(address account)`. Thus more gas is paid for the first invocation that subsequent ones.

#### Events Emitted

On a successful transaction, the following events occur:

**For the first settlement of the entire `VirtualSynth` contract:**

| name                                                                                 | emitted on  | `address account`             | `bytes32 src` | `uint amount` | `bytes32 dest` | `uint reclaim`           | `uint rebate`         | `uint srcRoundIdAtPeriodEnd`                                   | `uint destRoundIdAtPeriodEnd`                                   | `uint exchangeTimestamp`      |
| ------------------------------------------------------------------------------------ | ----------- | ----------------------------- | ------------- | ------------- | -------------- | ------------------------ | --------------------- | -------------------------------------------------------------- | --------------------------------------------------------------- | ----------------------------- |
| [`ExchangeEntrySettled`](/contracts/source/contracts/Exchanger#exchangeentrysettled) | `Exchanger` | `msg.sender`<br />(or `user`) | `src`         | `fromAmount`  | `dest`         | `reclaimedAmount` if any | `rebateAmount` if any | the `roundId` for rate of `src` synth at waiting period expiry | the `roundId` for rate of `dest` synth at waiting period expiry | the timestamp of the exchange |

| name                                                          | emitted on     | `uint totalSupply`                   | `uint amountAfterSettled`                                                                    |
| ------------------------------------------------------------- | -------------- | ------------------------------------ | -------------------------------------------------------------------------------------------- |
| [`Settled`](/contracts/source/contracts/VirtualSynth#settled) | `VirtualSynth` | The totalSupply of the virtual synth | The amount of the synth remaining after settlement (after reclaims removed or rebates added) |

**Once the Virtual contract is settled, individual `account` holders see the following events**:

| name                                                                | emitted on   | `address from` | `address to` | `uint value`                                            |
| ------------------------------------------------------------------- | ------------ | -------------- | ------------ | ------------------------------------------------------- |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `Proxy<src>` | `VirtualSynth` | `account`    | The user is sent their proportionate `amount` of synths |

| name                                                                | emitted on     | `address from` | `address to` | `uint value`                  |
| ------------------------------------------------------------------- | -------------- | -------------- | ------------ | ----------------------------- |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `VirtualSynth` | `account`      | `0x0`        | The user's vSynths are burned |

#### Example Transactions on Mainnet

- `VirtualSynth.settle(0xee34e8)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x729e02b4700f9e2558f062e1406460635248fffd6334808acbad442d1e5ce9ef/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x729e02b4700f9e2558f062e1406460635248fffd6334808acbad442d1e5ce9ef#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

### Code Snippets

!!! example "Exchanging sUSD for sBTC using vSynths"

    === "Solidity"
        ```solidity hl_lines="22"
        pragma solidity 0.5.16;

        import "openzeppelin-solidity-2.3.0/contracts/token/ERC20/IERC20.sol";

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

          function synthetixExchangeVirtual() external {
              ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");

              require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

              // exchange 100 sUSD for sBTC using virtual synths
              (uint amountReceived, IVirtualSynth vSynth) = synthetix.exchangeWithVirtual("sUSD", 100e18, "sBTC", bytes32(0));

              // This contract now has 100% of the vSynth supply.
              IERC20 vSynthAsERC20 = IERC20(address(vSynth));

              // And send all to the address that invoked this function
              vSynthAsERC20.transfer(msg.sender, amountReceived);
          }

        }
        ```
