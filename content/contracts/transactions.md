# Transactions

!!! Tip "Decode transactions with eth-reveal"

    Our team have written a utility to better decode any transaction in Ethereum, which handles proxies where possible - it works on mainnet and all major testnets and fetches:
    - the decoded input method and params (the transaction `data`)
    - any revert reasons or out of gas (OOG) errors
    - the output and decoded logs (via the transaction receipt)

    It's available in nodejs and as a CLI tool via `npm`: https://github.com/justinjmoses/eth-reveal

    And you can use it live via https://codepen.io/justinjmoses/pen/vwexLj (append `?txn=0x123456...` to the URL using the transaction hash to auto-load)

This is a list of the most common user-facing transactions possible in the Synthetix ecosystem, and the events they emit on success.

## Staking (Minting/Issuing) sUSD

!!! tip "More info"

    Check out our [staking walkthru](walkthrus/staking.md) for more information

**Called contract:** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integration-guide#proxies))

**Target (underlying) contract:** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

**Methods:**

- `issueSynths(uint256 amount)`
- `issueSynthsOnBehalf(address user, uint256)`
- `issueMaxSynths()`
- `issueMaxSynthsOnBehalf(address user)`

**Events Emitted:**

On a successful transaction, the following events occur:

1. [`Transfer`](../ExternStateToken/#transfer) from `0x0` to `account` for `amount` emitted on `ProxysUSD`
2. [`Issued`](../Synth/#issued) `amount` to `account` emitted on `ProxysUSD`
3. [`IssuanceDebtRatioEntry`](../FeePool/#issuancedebtratioentry) emitted on `ProxyFeePool`

**Examples**:

- `ProxySynthetix.issueSynths(1e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x5df667fa499772621745a3af169fed477f78e11434fed227588de928a5793f30/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x5df667fa499772621745a3af169fed477f78e11434fed227588de928a5793f30#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>
- `ProxySynthetix.issueMaxSynths()` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x40672a3965d1028891011c672118d99de21b709189b00c60e09c3561d604e571/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x40672a3965d1028891011c672118d99de21b709189b00c60e09c3561d604e571#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

## Unstaking (Burning) sUSD

!!! tip "More info"

    Check out our [unstaking walkthru](walkthrus/unstaking.md) for more information

**Called contract:** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integration-guide#proxies))

**Target (underlying) contract:** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

**Methods:**

- `burnSynths(uint256 amount)`
- `burnSynthsOnBehalf(address user, uint256 amount)`
- `burnSynthsToTarget()`
- `burnSynthsToTargetOnBehalf(address user)`

**Events Emitted:**

On a successful transaction, the following events occur:

1. [`Transfer`](../ExternStateToken/#transfer) from `account` to `0x0` for `amount` emitted on `ProxysUSD`
2. [`Burned`](../Synth/#burned) `amount` from `account` emitted on `ProxysUSD`
3. [`IssuanceDebtRatioEntry`](../FeePool/#issuancedebtratioentry) emitted on `ProxyFeePool`

**Examples**:

- `ProxySynthetix.burnSynths(3e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xc781ddb16ca1e3fed5cf2acb1749e26a1b125057b6f9bfd23235c71381749843/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xc781ddb16ca1e3fed5cf2acb1749e26a1b125057b6f9bfd23235c71381749843#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

- `ProxySynthetix.burnSynthsToTargetOnBehalf(0x3bf10de)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x53eb0cc3509726b02ba53fe869583d964b6ccdc48099c6fbab62d46b4774a01f/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x53eb0cc3509726b02ba53fe869583d964b6ccdc48099c6fbab62d46b4774a01f#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

## Claiming Fees

!!! tip "More info"

    Check out our [claiming walkthru](walkthrus/claiming.md) for more information

**Called contract:** [`ProxyFeePool`](https://contracts.synthetix.io/ProxyFeePool)

**Target (underlying) contract:** [`FeePool`](https://contracts.synthetix.io/FeePool)

**Methods:**

- `claimFees()`
- `claimOnBehalf(address user)`

**Events Emitted:**

On a successful transaction, the following events occur:

1. [`Transfer`](../ExternStateToken#transfer) from [`FEE_ADDRESS`](../FeePool/#fee_address) to `0x0` for `amount` emitted on `ProxysUSD`
2. [`Burned`](../Synth/#burned) `amount` from [`FEE_ADDRESS`](../FeePool/#fee_address) emitted on `ProxysUSD`
3. [`Transfer`](../ExternStateToken/#transfer) from `0x0` to `account` for `amount` emitted on `ProxysUSD`
4. [`Issued`](../Synth/#issued) `amount` to `account` emitted on `ProxysUSD`
5. [`VestingEntryCreated`](../RewardEscrow#vestingentrycreated) emitted on `RewardEscrow`
6. [`FeesClaimed`](../FeePool#feesclaimed) emitted on `ProxyFeePool`

**Examples**:

- `ProxyFeePool.claimFees()` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

- `ProxyFeePool.claimOnBehalf(0xa16de11)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

## Trading (Exchanging) synths

!!! tip "More info"

    Check out our [trading walkthru](walkthrus/trading.md) for more information

**Called contract:** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integration-guide#proxies))

**Target (underlying) contract:** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

**Methods:**

- `exchange(bytes32 src, uint256 fromAmount, bytes32 dest)`
- `exchangeOnBehalf(address user, bytes32 src, uint256 fromAmount, bytes32 dest)`

**Events Emitted:**

On a successful transaction, the following events occur:

!!! tip "Fee Reclamation (SIP-37)"

    If fees are owing on the `src` synth, these events come first:

    1. [`Transfer`](../ExternStateToken#transfer) from `account` to `0x0` for `feesOwing` emitted on `Proxy<synth>` for the `src` synth.
    2. [`Burned`](../Synth/#burned) `feesOwing` from `account` emitted on `Proxy<synth>` for the `src` synth.
    3. [`ExchangeReclaim`](../Synthetix#exchangereclaim) from `account` for `feesOwing` on `src` synth emitted on `ProxySynthetix`.

    Else if fees are owed on the `src` synth, then these events come first:

    1. [`Transfer`](../ExternStateToken#transfer) from `0x0` to `account` for `feesOwed` emitted on `Proxy<synth>` for the `src` synth.
    2. [`Issued`](../Synth/#issued) `feesOwed` to `account` emitted on `Proxy<synth>` for the `src` synth.
    3. [`ExchangeRebate`](../Synthetix#exchangerebate) from `account` for `feesOwed` on `src` synth emitted on `ProxySynthetix`

    > Read [SIP-37](https://sips.synthetix.io/sips/sip-37) for more information on Fee Reclamation & Rebates.

For every exchange, the following events then occur:

3. [`Transfer`](../ExternStateToken/#transfer) from `account` to `0x0` for `fromAmount` emitted on `Proxy<synth>` for the `src` synth.
4. [`Burned`](../Synth/#burned) `fromAmount` from `account` emitted on `Proxy<synth>` for the `src` synth.
5. [`Transfer`](../ExternStateToken/#transfer) from `0x0` to `account` for `toAmount - fee` emitted on on `Proxy<synth>` for the `dest` synth.
6. [`Issued`](../Synth/#issued) `toAmount - fee` to `account` emitted on `Proxy<synth>` for the `dest` synth.
7. [`Transfer`](../ExternStateToken/#transfer) from `0x0` to [`FEE_ADDRESS`](../FeePool/#fee_address) for `fee` emitted on `ProxysUSD`
8. [`Issued`](../Synth/#issued) `amount` to [`FEE_ADDRESS`](../FeePool/#fee_address) emitted on `ProxysUSD`
9. [`SynthExchange`](../Synthetix/#synthexchange) for `account` emitted on `ProxySynthetix`

**Examples:**

- `ProxySynthetix.exchange(sETH, 100e18, iETH)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xe85969d5c65e68968f4a55721ffa30b4da564f74f73af6a0ed1470cbd3935877/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xe85969d5c65e68968f4a55721ffa30b4da564f74f73af6a0ed1470cbd3935877#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>
- `ProxySynthetix.exchange(iETH, 0.22e18, sUSD)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x2e0b807336fcd7aed23adfac923eb19a6fdfc73eae41335a229681c10e615c56/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x2e0b807336fcd7aed23adfac923eb19a6fdfc73eae41335a229681c10e615c56#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a Reclaim)
- `ProxySynthetix.exchange(sETH, 5e18, sUSD)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x0d7ac5ca424b3a7dcd0a641e1ed614158426d6229445a079dd0f21b8b0876919/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x0d7ac5ca424b3a7dcd0a641e1ed614158426d6229445a079dd0f21b8b0876919#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a Rebate)
