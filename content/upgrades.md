# Upgrades

Synthetix makes extensive use of the proxy pattern. This allows users and integrated systems to refer to immutable proxy addresses while the underlying functionality is passed through to the target or _underlying_ contracts which can be updated by an `owner` function. This allows for fast iteration of the Synthetix ecosystem at the cost of trust in the protocol.

!!! Info "Decentralize All the Things"

    In order for Synthetix to become a fully decentralized protocol, these upgradable proxy contracts need more oversight and constraint. Please read our blogpost for the path towards full decentralization and how the Proxy architecture is impacted: https://blog.synthetix.io/transition-to-decentralised-governance/ (see *Protocol Changes*)

As of this moment, the following contracts are behind proxies:

- `FeePool` is behind `ProxyFeePool`
- `Synthetix` is behind both `ProxySynthetix` (deprecated, see notice below) and `ProxyERC20`
- `SynthsUSD` is behind both `ProxysUSD` (deprecated) and `ProxyERC20sUSD`
- All remaining synths are also behind a Proxy, all of which are the newer ProxyERC20 pattern. e.g. `ProxysETH`, `ProxyiBTC`, etc.

!!! Warning "Deprecation Notice"

    The current proxies have been marked deprecated:

    - [Synthetix](https://contracts.synthetix.io/ProxySynthetix) (aka `ProxySynthetix` at `0xC011A72400E58ecD99Ee497CF89E3775d4bd732F`) and
    - [sUSD](https://contracts.synthetix.io/ProxysUSD) (aka `ProxysUSD` at `0x57Ab1E02fEE23774580C119740129eAC7081e9D3`)

    The current proxies use the CALL pattern and set `messageSender` on the target for any request (see [here](https://github.com/Synthetixio/synthetix/blob/master/contracts/Proxy.sol#L118)). This mutation inside functions that are marked `view` - such as `balanceOf`, break ERC20 interface conventions, and thus fail.

    In their stead we have new *integration* proxies in place, used by both Uniswap and Kyber. The new integration proxies are fully ERC20 compliant and explictly call through to the target for all ERC20 functions (see [ProxyERC20.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol)).

    If you are planning any integration with Synthetix, it is recommended that you use the newer proxies:

    - [Synthetix](https://contracts.synthetix.io/ProxyERC20) (aka `ProxyERC20` at `0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F`) and
    - [sUSD](https://contracts.synthetix.io/ProxyERC20sUSD) (aka `ProxyERC20sUSD` at `0x57Ab1ec28D129707052df4dF418D58a2D46d5f51`)

    That said however, both are functioning side by side while we transition over.

    One note of caution: the events from the underlying contracts - `Synthetix` and `Synth` are still emitted on the currently deprecated proxy contracts. Indeed, SynthetixJs still use the deprecated proxies for this reason (see [Synthetix.js](https://github.com/Synthetixio/synthetix-js/blob/master/src/contracts/mainnet/Synthetix.js#L12)). Once we migrate to the new proxies, the events will be emitted on the integration proxies and the deprecated ones will be removed entirely.
