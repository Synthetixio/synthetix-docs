# Integration Guide

!!! Tip "Who this guide is for"

    This is a guide for smart contract developers looking into integrate one or more of Synthetix's contracts into their own contracts. Please read the below thoroughly and ask for help in the `#dev-portal` channel of our [Discord](https://discordapp.com/channels/413890591840272394/).

    If instead you're looking to integrate Synthetix into your dApps and scripts, please see our [libraries section](/libraries/).

## Address Resolver

In our Achernar release, we introduced a new feature called the `AddressResolver` contract.

In short, the `AddressResolver` allows any referencing contract to have access to a number of key contract - in particular the underlying `Synthetix`, `FeePool`, `SynthsUSD` and `SynthsETH` contracts. There are plans in the near future to add our proxies as well.

The `ReadProxyAddressResolver` is our readable `AddressResolver` behind a proxy that won't change, so it's safe to use in your code (it only allows calls that do not mutate state). We have one for each testnet and mainnet up on the [addresses](../addresses.md) page.

For guides on how to use the `AddressResolver` in Solidity, see our [walkthrus](/contracts/walkthrus/trading/#exchanging-in-solidity).

## Proxies

Synthetix makes extensive use of the proxy pattern. This allows users and integrated systems to refer to immutable proxy addresses while the underlying functionality is passed through to the target or _underlying_ contracts which can be updated by an `owner` function. This allows for fast iteration of the Synthetix ecosystem at the cost of trust in the protocol.

!!! Info "Decentralize All the Things"

    In order for Synthetix to become a fully decentralized protocol, these upgradable proxy contracts need more oversight and constraint. Please read our blogpost for the path towards full decentralization and how the Proxy architecture is impacted: https://blog.synthetix.io/transition-to-decentralised-governance/ (see *Protocol Changes*)

As of this moment, the following contracts are behind proxies:

- `FeePool` is behind `ProxyFeePool`
- `Synthetix` is behind both `ProxyERC20` and `ProxySynthetix` (deprecated, see notice below).
- `SynthsUSD` is behind both `ProxyERC20sUSD` and `ProxysUSD` (deprecated)
- All remaining synths are also behind a Proxy, all of which are the newer `ProxyERC20` pattern. e.g. `ProxysETH`, `ProxyiBTC`, etc.

## Proxy Deprecation

??? Info "Why are we deprecating proxies?"

    The current proxies have been marked deprecated:

    - [Synthetix](https://contracts.synthetix.io/ProxySynthetix) (aka `ProxySynthetix` at `0xC011A72400E58ecD99Ee497CF89E3775d4bd732F`) and
    - [sUSD](https://contracts.synthetix.io/ProxysUSD) (aka `ProxysUSD` at `0x57Ab1E02fEE23774580C119740129eAC7081e9D3`)

    The Synthetix proxies use the `CALL` pattern and set `messageSender` on the target for any request (see [here](https://github.com/Synthetixio/synthetix/blob/v2.21.6/contracts/Proxy.sol#L75)). This mutation inside functions that are marked `view` - such as `balanceOf`, break ERC20 interface conventions, and thus fail.

    In their stead we have new _integration_ proxies in place, used by both Uniswap and Kyber. The new integration proxies are fully ERC20 compliant and explictly call through to the target for all ERC20 functions (see [ProxyERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.6/contracts/ProxyERC20.sol)).

    If you are planning any integration with Synthetix, it is recommended that you use the newer proxies:

    - [Synthetix](https://contracts.synthetix.io/ProxyERC20) (aka `ProxyERC20` at `0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F`) and
    - [sUSD](https://contracts.synthetix.io/ProxyERC20sUSD) (aka `ProxyERC20sUSD` at `0x57Ab1ec28D129707052df4dF418D58a2D46d5f51`)

    That said however, both are functioning side by side while we transition over.

    One note of caution: the events from the underlying contracts - `Synthetix` and `Synth` are still emitted on the currently deprecated proxy contracts. Indeed, SynthetixJs still use the deprecated proxies for this reason (see [Synthetix.js](https://github.com/Synthetixio/synthetix-js/blob/v2.21.6/src/contracts/mainnet/Synthetix.js#L12)). Once we migrate to the new proxies, the events will be emitted on the integration proxies and the deprecated ones will be removed entirely.

1.  **Phase 1**

    Prior to May 10, 2020, both proxies for `Synthetix` and `SynthsUSD` will function. Our dApps and integrations will call and transact using the deprecated proxies, and all events emitted will be on the deprecated proxy.

2.  **Phase 2 (Current)**

    <span class="wtb-ew-v1" style="width: 560px; display:inline-block"><script src="https://www.worldtimebuddy.com/event_widget.js?h=100&md=5/10/2020&mt=23.00&ml=0.50&sts=0&sln=0&wt=ew-ltc"></script><i><a target="_blank" href="https://www.worldtimebuddy.com/">Time converter</a> at worldtimebuddy.com</i><noscript><a href="https://www.worldtimebuddy.com/">Time converter</a> at worldtimebuddy.com</noscript><script>window[wtb_event_widgets.pop()].init()</script></span>

    On `May 10, 2020 11pm UTC`, we will switch the `proxy` and `integrationProxy` properties of `Synthetix` and our `SynthsUSD` contracts. We will then update our dApps and integrations (including `synthetix-js`) to use the addresses of the new proxies for all calls and transactions. **All events emitted will now be on the new ERC20 proxies.** However, the deprecated proxies will continue to work until Phase 3.

3.  **Phase 3**

    <span class="wtb-ew-v1" style="width: 560px; display:inline-block"><script src="https://www.worldtimebuddy.com/event_widget.js?h=100&md=5/30/2020&mt=23.00&ml=0.50&sts=0&sln=0&wt=ew-ltc"></script><i><a target="_blank" href="https://www.worldtimebuddy.com/">Time converter</a> at worldtimebuddy.com</i><noscript><a href="https://www.worldtimebuddy.com/">Time converter</a> at worldtimebuddy.com</noscript><script>window[wtb_event_widgets.pop()].init()</script></span>

    On `May 30, 2020 11pm UTC`, we will set the `integrationProxy` property from `Synthetix` and `SynthsUSD` to `0x0`, meaning that no more incoming transactions on `0xC011A72400E58ecD99Ee497CF89E3775d4bd732F` (`ProxySynthetix`) or `0x57Ab1E02fEE23774580C119740129eAC7081e9D3` (`ProxysUSD`) will work. These will fail as the target contracts they use will no longer accept incoming requests from them. We will update our `ProxySynthetix` and `ProxysUSD` labels to point to the new ERC20 proxies (in our docs and in our contract-linker utility).

4.  **Phase 4**: We will remove the `ProxyERC20` and `ProxyERC20sUSD` names altogether.

### Example Scenarios:

#### Exchanging via Synthetix

Let's say you want to exchange `100` `sUSD` for `sETH`:

1.  **Phase 1 (prior to May 10, 2020):**

    - You can invoke `exchange(sUSD, 100e18, sETH)` on either `ProxySynthetix` (`0xC011a72`) or `ProxyERC20` (`0xC011a73`).
    - On success, `SynthExchange` will be emitted on `ProxySynthetix` (`0xC011a72`) regardless of which proxy you used to transact.

2.  **Phase 2 (between May 10 - May 30, 2020):**

    - You can still invoke `exchange(sUSD, 100e18, sETH)` on either `ProxySynthetix` (`0xC011a72`) or `ProxyERC20` (`0xC011a73`), _however you are strongly recommended to migrate to using `ProxyERC20`_.
    - On success, `SynthExchange` will be emitted on `ProxyERC20` (`0xC011a73`) regardless of which proxy you used to transact.

3.  **Phase 3 (From May 30, 2020):**

    - You can only invoke `exchange(sUSD, 100e18, sETH)` on `ProxyERC20` (`0xC011a73`), _the old proxy address will fail_.
    - On success, `SynthExchange` will be emitted on `ProxyERC20` (`0xC011a73`).

#### Transferring sUSD

Or say you want to transfer `5` `sUSD` to `user`

1.  **Phase 1 (prior to May 10, 2020):**

    - You can invoke `transfer(user, 5e18)` on either `ProxysUSD` (`0x57Ab1E0`) or `ProxyERC20sUSD` (`0x57Ab1ec`).
    - On success, `Transfer` will be emitted on `ProxysUSD` (`0x57Ab1E0`) regardless of which proxy you used to transact.

2.  **Phase 2 (between May 10 - May 30, 2020):**

    - You can still invoke `transfer(user, 5e18)` on either `ProxysUSD` (`0x57Ab1E0`) or `ProxyERC20sUSD` (`0x57Ab1ec`), _however you are strongly recommended to migrate to using `ProxyERC20sUSD`_.
    - On success, `Transfer` will be emitted on `ProxysUSD` (`0x57Ab1E0`) regardless of which proxy you used to transact.

3.  **Phase 3 (From May 30, 2020):**

    - You can only invoke `transfer(user, 5e18)` on `ProxyERC20sUSD` (`0x57Ab1ec`), _the old proxy will fail_.
    - On success, `Transfer` will be emitted on `ProxyERC20sUSD` (`0x57Ab1ec`).

## Fee Reclamation and Atomicity of Exchanges

In our Achernar release, we introduced Fee Reclamation ([SIP-37](https://sips.synthetix.io/sips/sip-37)). The major implication here is that if you invoke `exchange(src, amount, dest)` in your smart contracts, you cannot atomically invoke `dest.transfer()` or `exchange(dest, ..., ...)` - both will fail until a waiting period expires.

You can use [`Exchanger.maxSecsLeftInWaitingPeriod()`](/contracts/exchanger/#maxsecsleftinwaitingperiod) to check how many seconds are left in the waiting period for that `dest` synth. Once it's `0`, exchanges of the `dest` synth will automatically settle any rebates or reclaims. However after the waiting period expires, `dest.transfer()` will fail regardless if there are any exchanges awaiting settlement. To circumvent this, integrators are encouraged to use [`transferAndSettle`](/contracts/synth/#transferandsettle) or [`transferFromAndSettle`](/contracts/synth/#transferfromandsettle). Alternatively, [`Exchanger.settle()`](/contracts/exchanger#settle) can be invoked directly prior to a `transfer` or `transferFrom`.
