# Incentives

Here is an overview of the incentives and token flow in the Synthetix system. It is built around incentives; users who benefit from a service pay other users who enable that service. This section will explain each category of rewards as well as each acting party within the system.

## Sources of Value

### Exchange Fees

Exchange fees are generated whenever a user exchanges one synthetic asset (Synth) for another through [Synthetix.Exchange](https://synthetix.exchange). Fees are typically between 10-100 bps (0.1%-1%), though usually 30 bps, and when generated are sent to the fee pool, where it is available to be claimed proportionally by SNX stakers each week.

### SNX Staking Rewards

SNX staking rewards are generated through the inflationary monetary policy implemented in March 2018. At the same time as they claim their exchange fees stakers can claim their staking rewards, which are escrowed for a year. The SNX staking rewards enabled by the inflationary supply are set to decrease gradually until September 2023, where it will become a 2.5% annual terminal inflation rate.

### Staking Requirements

The information below presents collateralization ratio (CR) requirements that will help stakers earn SNX rewards and avoid liquidations, as well as other relevant information. 

### L1 Requirements

- Initial CR required for staking: 500% 

- CR Under 200%: Staker can get flagged for liquidation, has 3 days to fix CR ratio to 500% 

- Claiming Period: stakers need to claim rewards on a weekly basis 

- Minimums: No minimum amount, recommend to do above10,000 SNX because of L1 fees

- Rewards Escrow: 1 year

### L2 Requirements

- Initial CR required for staking: 1000% 

- CR Under 200% : Staker can get flagged for liquidation, has 3 days to fix CR ratio to 1000%

- Claiming Period: stakers need to claim rewards on a weekly basis 

- Minimums: No minimum amount

- Rewards Escrow: 1 year

## Secondary incentives

In addition to the two primary forms of incentives, Synthetix also runs various incentives to create on-ramps, balance out particular dynamics, or trial different behaviour. These are either paid with a portion of the weekly inflationary SNX when implemented at the protocol level, or with SNX from the synthetixDAO treasury if they are just trials.

### sUSD/DAI-USDC-USDT liquidity on Curve

Amount: `48,000 SNX` per week

Supplied by: SNX inflationary supply

Duration: Mar 13, 2020 — ongoing

Pool: [`Curve sBTC/renBTC/wBTC`](https://pools.fyi/#/returns/0xa5407eae9ba41422680e2e00537571bcc53efbfd)

Staking Contract: [`StakingRewardssUSDCurve`](https://contracts.synthetix.io/StakingRewardssUSDCurve)

Source: [`Curvepool` (via `Unipool`)](https://github.com/Synthetixio/Unipool/blob/curverewards/contracts/Unipool.sol)

Aim: This incentive aims to provide an on-ramp into trading on [Kwenta](https://kwenta.io) for traders with stablecoins.

### iETH holders

Amount: `16,000 SNX` per week

Supplied by: SNX inflationary supply

Duration: Apr 24, 2020 — ongoing

Pool: None (`iETH` is staked directly)

Staking Contract: [`StakingRewardsiETH`](https://contracts.synthetix.io/StakingRewardsiETH)

Source: [`iETHRewards`](https://github.com/Synthetixio/synthetix/blob/master/contracts/StakingRewards.sol)

> Note: the source file above was [modified on L13](https://github.com/Synthetixio/Unipool/blob/curverewards/contracts/Unipool.sol#L13) before deployment to use the [iETH proxy address](https://contracts.synthetix.io/ProxyiETH)

Aim: This incentive aims to help reduce the impact of sETH holdings on the SNX stakers' debt pool by incentivising people to hold iETH.

### Shorting rewards

Amount: `8000 SNX` per week for each asset (sBTC and sETH)

Supplied by: synthetixDAO

Duration: Feb 5, 2021 — Apr 20, 2021

Pool: None

Staking Contract: [`ShortingRewardsETH`](https://etherscan.io/address/0x12DC1273915A16ab8BD47bA7866B240c253e4c12#code) & [`ShortingRewardsBTC`](https://etherscan.io/address/0xCed4055b47cfD0421f3727a35F69CE659c8bAF7a#code)

Source: [`ShortingRewards`)](https://github.com/synthetixio/synthetix/blob/develop/contracts/ShortingRewards.sol)

Aim: This incentive aims to balance out the global debt pool, which has recently been heavily skewed toward sBTC and sETH, and in the context of a bull market this skew represents a significant risk to SNX stakers.

### sTSLA and sUSD liquidity pool on Balancer

Amount: `4000 SNX` per week for 5 weeks

Supplied by: synthetixDAO

Duration: Feb 12, 2021 — Mar 19, 2021

Pool: [`Balancer sTSLA/sUSD`](https://pools.balancer.exchange/#/pool/0x055db9aff4311788264798356bbf3a733ae181c6/)

Staking Contract: [`StakingRewardssTSLABalancer`](https://etherscan.io/address/0xF0de877F2F9E7A60767f9BA662F10751566AD01c)

Source: [`StakingRewards`](https://github.com/dhedge/synthetix/blob/develop/contracts/StakingRewards.sol)

Aim: This incentive aims to provide a secondary market for sTSLA tokens outside of traditional market hours, as during these periods one cannot trade into sTSLA using the Synthetix smart contracts.

### sUSD and DHT (dHedge) liquidity pool on Uniswap

Amount: `3000 SNX` per week for 10 weeks

Supplied by: synthetixDAO

Duration: Mar 11, 2021 — May 20, 2021

Pool: [`Uniswap sUSD/DHT`](https://etherscan.io/address/0x303ffcd201831db88422b76f633458e94e05c33e)

Staking Contract: [`StakingDualRewards`](https://etherscan.io/address/0xb59e8d8ad40d06571dc0cf9936e727846dfae93f#code)

Source: [`StakingDualRewards`)](https://github.com/dhedge/synthetix/blob/develop/contracts/StakingDualRewards.sol)

Aim: This incentive aims to provide liquidity for DHT, the governance token of dHedge protocol, which supports Synthetix through generating trading volume.

## Deprecated incentives

### iBTC holders

Amount: `16,000 SNX` per week

Supplied by: synthetixDAO

Duration: Oct 27, 2020 - Mar 9, 2021

Pool: None (`iBTC` is staked directly)

Staking Contract: [`StakingRewardsiBTC`](https://contracts.synthetix.io/StakingRewardsiBTC)

Source: [`iBTCRewards`](https://github.com/Synthetixio/synthetix/blob/master/contracts/StakingRewards.sol)

Aim: This trial aims to help reduce the impact of iBTC holdings on the SNX stakers' debt pool by incentivising people to hold iBTC.

### sETH/ETH liquidity on Uniswap v1

Amount: Initially `5%` of the weekly inflationary SNX, then `64,000 SNX` per week, then progressively less.

Supplied by: SNX inflationary supply

Duration: Jul 12, 2019 - Jun 26, 2020

Pool: [`Uniswap sETH:ETH V1`](https://pools.fyi/#/returns/0xe9cf7887b93150d4f2da7dfc6d502b216438f244)

Staking Contract: [`StakingRewardssETHUniswapV1`](https://contracts.synthetix.io/StakingRewardssETHUniswapV1)

Source: [`Unipool`](https://github.com/Synthetixio/Unipool/blob/master/contracts/Unipool.sol)

Aim: This incentive aimed to provide an on-ramp into trading on [Synthetix.Exchange](https://synthetix.exchange) for traders with ETH. sETH was chosen over sUSD because these two assets should always trade at parity, and shifts in the price of ETH against USD do not require arbitrage.

### sBTC/renBTC-wBTC liquidity on Curve

Amount: `10,000 SNX` and `25,000 REN` per week, distributed via Balancer `BPT` tokens in [a shared Balancer pool](http://contracts.synthetix.io/BalancerSNXREN)

Supplied by: synthetixDAO

Duration: Jun 19, 2020 - Aug 28, 2020

Pool: [`Curve sBTC/renBTC/wBTC`](https://pools.fyi/#/returns/0x7fc77b5c7614e1533320ea6ddc2eb61fa00a9714)

Staking Contract: [`StakingRewardssBTCCurve`](https://contracts.synthetix.io/StakingRewardssBTCCurve)

Source: [`Staking Rewards` (via `Unipool`)](https://github.com/Synthetixio/synthetix/blob/db6265313b6742b1c3483978b1baa00814990d57/contracts/StakingRewards.sol)

> Note: this deployment was based off a PR ([#523](https://github.com/Synthetixio/synthetix/pull/523)) in @Synthetixio/synthetix to do a minor change to the `Unipool` contract to make it re-usable.

Aim: This trial is providing the `SNX` component of a `SNX/REN` liquidity pool (along with Ren Protocol) to help generate rewards for the `sBTC/renBTC/WBTC` liquidity providers on Curve.

### sXAU/USDC liquidity on Uniswap v2

Amount: `8,000 SNX` per week

Supplied by: synthetixDAO

Duration: May 30, 2020 - Jun 27, 2020

Pool: [`Uniswap sXAU:USDC V2`](https://pools.fyi/#/returns/0x34a0216c5057bc18e5d34d4405284564efd759b2)

Staking Contract: [`StakingRewardssXAUUniswapV2`](https://contracts.synthetix.io/StakingRewardssXAUUniswapV2)

Source: [`Staking Rewards` (via `Unipool`)](https://github.com/Synthetixio/synthetix/blob/5bde3ac2c4fa6b81819ae427c89d71024ddd6dcc/contracts/StakingRewards.sol)

> Note: this deployment was based off a PR ([#523](https://github.com/Synthetixio/synthetix/pull/523)) in @Synthetixio/synthetix to do a minor change to the `Unipool` contract to make it re-usable.

Aim: This trial aimed to test demand for sXAU (synthetic gold) and trial Uniswap v2, which was recently released.

### SNX/USDC liquidity on Balancer

Amount: `8,000 SNX` per week

Supplied by: synthetixDAO

Duration: Jun 5, 2020 - Jul 3, 2020

Pool: [`SNX 90%/USDC 10%`](https://pools.fyi/#/returns/0x815f8ef4863451f4faf34fbc860034812e7377d9)

Staking Contract: [`StakingRewardsSNXBalancer`](https://contracts.synthetix.io/StakingRewardsSNXBalancer)

Source: [`Staking Rewards` (via `Unipool`)](https://github.com/Synthetixio/synthetix/blob/5bde3ac2c4fa6b81819ae427c89d71024ddd6dcc/contracts/StakingRewards.sol)

> Note: this deployment was based off a PR ([#523](https://github.com/Synthetixio/synthetix/pull/523)) in @Synthetixio/synthetix to do a minor change to the `Unipool` contract to make it re-usable.

Aim: This trial aimed to test Balancer as a means for providing extra SNX liquidity, as well as trialling the recently released Balancer protocol.

## Value Recipients

### SNX Stakers

SNX stakers stake their SNX and receive two kinds of rewards: exchange fees and SNX staking rewards. But by staking, they also take on the risk of 'debt.' When someone stakes their SNX, to then immediately unstake it they need to burn as much sUSD as they just minted — this sUSD figure is their debt, and all SNX stakers' debt is pooled together (with each staker holding a proportion of it). But this pooled debt is also where profits and losses from people trading on Synthetix.Exchange is represented, so a staker's debt can change over time depending on traders' overall profits and losses. This is the risk they assume when staking their SNX.

### ETH stakers

It is also possible to mint Synths by staking ETH. However, ETH stakers' debt is denominated in ETH rather than sUSD. It does not get added to the system's pooled debt, and thus does not fluctuate depending on traders' outcomes. However, there is a 5% APR to stake ETH, as well as a small minting fee.

### Traders

Traders on Synthetix.Exchange can take advantage of the system enabled by SNX stakers, namely trading a wide variety of assets with infinite liquidity and no slippage. They do not need to stake or even hold SNX.

### Arbitrageurs

The primary opportunity for arbitrage in Synthetix is taking advantage of underpriced assets on the secondary market. If sETH or sUSD are ever trading below the price of ETH or USD respectively, then stakers can profit by purchasing them cheaply and using them within the Synthetix system, where their values do not take the market rate into consideration.

## Bug Bounty

Synthetix offers bug bounties for its [smart contracts](https://docs.synthetix.io/addresses/) (not minor issues relating to UI/UX or website domains).

Please see our Immunefi site for details [immunefi.com/bounty/synthetix/](https://immunefi.com/bounty/synthetix/).

## Additional Crypto-economic Discussions

For more information and discussions on incentives, please see the lateset entries in our blog: [blog.synthetix.io](https://blog.synthetix.io).
