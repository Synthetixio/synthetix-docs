# Incentives

Here is an overview of the incentives and token flow in the Synthetix system. It is built around incentives; users who benefit from a service pay other users who enable that service. This section will explain each category of rewards as well as each acting party within the system.

## Sources of Value

### Exchange Fees

Exchange fees are generated whenever a user exchanges one synthetic asset (Synth) for another through [Synthetix.Exchange](https://synthetix.exchange). Fees are typically between 10-100 bps (0.1%-1%), though usually 30 bps, and when generated are sent to the fee pool, where it is available to be claimed proportionally by SNX stakers each week.

### SNX Staking Rewards

SNX staking rewards are generated through the inflationary monetary policy implemented in March 2018. At the same time as they claim their exchange fees stakers can claim their staking rewards, which are escrowed for a year. The SNX staking rewards enabled by the inflationary supply are set to decrease gradually until September 2023, where it will become a 2.5% annual terminal inflation rate.

### Liquidity Rewards

5% of the aforementioned inflationary SNX supply is distributed to people providing sETH/ETH liquidity on Uniswap. This is to ensure there is a clear way for traders to enter the system and start trading for the first time (if they hold ETH).

## Value Recipients

### SNX Stakers

SNX stakers stake their SNX and receive two kinds of rewards: exchange fees and SNX staking rewards. But by staking, they also take on the risk of 'debt.' When someone stakes their SNX, to then immediately unstake it they need to burn as much sUSD as they just minted — this sUSD figure is their debt, and all SNX stakers' debt is pooled together (with each staker holding a proportion of it). But this pooled debt is also where profits and losses from people trading on Synthetix.Exchange is represented, so a staker's debt can change over time depending on traders' overall profits and losses. This is the risk they assume when staking their SNX.

### ETH stakers

It is also possible to mint Synths by staking ETH. However, ETH stakers' debt is denominated in ETH rather than sUSD. It does not get added to the system's pooled debt, and thus does not fluctuate depending on traders' outcomes. However, there is a 5% APR to stake ETH, as well as a small minting fee.

### Traders

Traders on Synthetix.Exchange can take advantage of the system enabled by SNX stakers, namely trading a wide variety of assets with infinite liquidity and no slippage. They do not need to stake or even hold SNX.

### Liquidity Providers

Liquidity providers are providing depth to the [sETH/ETH Uniswap liquidity pool](https://etherscan.io/address/0xe9cf7887b93150d4f2da7dfc6d502b216438f244/#tokentxns). The deeper this pool, the less slippage traders pay when entering or exiting the system. Liquidity providers do not need to stake or hold SNX, only ETH and sETH. To receive rewards they must [stake their Uniswap LP tokens](https://blog.synthetix.io/new-uniswap-seth-lp-reward-system/) into a purpose-built smart contract.

### Arbitrageurs

The primary opportunity for arbitrage in Synthetix is taking advantage of underpriced assets on the secondary market. If sETH or sUSD are ever trading below the price of ETH or USD respectively, then stakers can profit by purchasing them cheaply and using them within the Synthetix system, where their values do not take the market rate into consideration.

## Additional Crypto-economic Discussions

For more information and discussions on incentives, please see the lateset entries in our blog: [blog.synthetix.io](https://blog.synthetix.io).
