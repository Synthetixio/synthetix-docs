# Litepaper

**Version**: 1.5 (March 2022)

## Abstract

Synthetix is a decentralized synthetic asset issuance protocol built on Ethereum and Optimistic Ethereum (a layer two scaling solution built on Ethereum). These synthetic assets are collateralized by the Synthetix Network Token (SNX) which when locked in the contract enables the issuance of synthetic assets (Synths). This pooled collateral model allows users to perform conversions between Synths directly with the smart contract, avoiding the need for counterparties. This mechanism solves the liquidity and slippage issues experienced by DEX’s. Synthetix currently supports synthetic fiat currencies, cryptocurrencies (long and short) and commodities. SNX holders are incentivized to stake their tokens as they are paid a pro-rata portion of the fees generated through activity on Synthetix from integrators (Kwenta, Lyra, Curve, dHEDGE, and many others). It is the right to participate in the network and capture fees generated from Synth exchanges, from which the value of the SNX token is derived. Trading on the Synthetix infrastructure does not require the trader to hold SNX.

Many protocols have built ontop of the Synthetix infrastructure. These include but are not limited to, Kwenta which offers perpetual futures and spot exchanges, Lyra which offers options trading, Curve which offers cross asset swaps, and dHEDGE which allows traders to pool capital and offer a decentralized hedge fund service.

## SNX as collateral

**How SNX backs Synths**

All Synths are backed by SNX tokens. Synths are minted when SNX holders stake their SNX as collateral using the Synthetix Staking application, a decentralized application for interacting with the Synthetix contracts. Synths are currently backed by a 400% collateralization ratio , although this may be raised or lowered in the future through community governance mechanisms. SNX stakers incur debt when they mint Synths, and to exit the system (i.e. unlock their SNX), they must pay back this debt by burning Synths.

Synthetix also currently uses Ether as an alternative form of collateral. This means traders can borrow Synths against their ETH and begin trading immediately, rather than needing to sell their ETH. Staking ETH requires a collateralization ratio of 150% and creates a debt denominated in ETH, so ETH stakers mint sETH rather than sUSD and do not participate in the ‘pooled debt’ aspect of the system. In this model, ETH stakers do not receive fees or rewards as they take no risk for the debt pool.

**Why SNX holders stake**

SNX holders are incentivized to stake their SNX tokens in many ways. Firstly, there are exchange rewards. These are generated whenever someone exchanges one Synth to another (i.e. on Kwenta Perpetual Futures). Each trade generates an exchange fee that is sent to a fee pool, available for SNX stakers to claim their proportion each week. This fee is between 10-60 bps (0.1% - .6%, though typically 0.3%), and will be displayed during any trade. The other incentive for SNX holders to stake/mint is SNX staking rewards, which comes from the protocol’s inflationary monetary policy. As of February of 2022, the Synthetix inflationary system is derived from a target staking ratio. This change introduces a target ratio for staking of 85%. It then adjusts the inflation weekly up or down by 10% depending on whether the staking ratio is below or above the target ratio to incentivize stakers to hit this target. If it is between 80-90%, then inflation is decreased by 5%. These SNX tokens are distributed to SNX stakers weekly on a pro-rata basis provided their collateralization ratio does not fall below the target threshold.

**Minting, burning, and the C-Ratio**

The mechanisms above ensure SNX stakers are incentivized to maintain their Collateralisation Ratio (C-Ratio) at the optimal rate (currently 400%). This ensures Synths are backed by sufficient collateral to absorb large price shocks. If the value of SNX or Synths fluctuates, each staker’s C Ratio will fluctuate. If it falls below 400% (although there is a small buffer allowing for minor fluctuations), they will be unable to claim fees until they restore their ratio. They adjust their ratio by either minting Synths if their ratio is above 400%, or burning Synths if their ratio is below 400%.

**Stakers, debt, and pooled counterparties**

SNX stakers incur a ‘debt’ when they mint Synths. This debt can increase or decrease independent of their original minted value, based on the exchange rates and supply of Synths within the network.

For example, if 100% of the Synths in the system were synthetic Bitcoin (sBTC), which halved in price, the debt in the system would halve, and each staker’s debt would also halve. This means in another scenario, where only half the Synths across the system were sBTC, and BTC doubled in price, the system’s total debt—and each staker’s debt—would increase by one quarter.

In this way, SNX stakers act as a pooled counterparty to all Synth exchanges; stakers take on the risk of the overall debt in the system. They have the option of hedging this risk by taking positions external to the system. By incurring this risk and enabling trading on Synthetix stakers earn a right to fees generated by the system.

Interested in learning some of the basics about staking? Read our new guide - https://blog.synthetix.io/basics-of-staking-snx-2022/

**Liquidation Risk**

An internal liquidation contract exists that is peer to peer in nature and allows an account to be flagged for liquidation as soon as the account’s c-ratio drops below 200%. After an account has been flagged, a liquidation timer of 72 hours begins on the account to give a window of opportunity to the flagged staker to fix their c-ratio and stop the liquidation countdown. To halt the liquidation timer and remove the flag the staker must reach the target c-ratio (and not just get above 200% again). The flagging of an account does not designate a liquidator. A liquidator is the first participant on-chain that provides the sUSD required to liquidate the proportionate SNX as soon as the liquidation timer has gone to zero.

Essentially this is an on-chain ‘free-for-all’ to anyone that knows how to interact with the liquidation contract properly and is happy to pay the associated gas costs.

When an account is liquidated, the liquidated SNX amount is 10% above the required sUSD put forward to burn. This is a bonus purposely put into the liquidation mechanics to incentivize liquidators and a punishment deterrent to stakers for neglecting their obligations. The liquidation smart contract governs the process so that the liquidated will only have the 10% penalty removed and no more, and can only be liquidated to target c-ratio.

## Synthetix and Partner Protocols

**Why trade synthetic assets?**

Synthetic assets provide exposure to an asset without holding the underlying resource. This has a range of advantages, including reducing the friction when switching between different assets, expanding the accessibility of certain assets, and censorship resistance.

**Advantages of Synthetix Infrastructure **

Trading on Synthetix infrastructure provides many advantages over centralized exchanges and order book based DEX’s. The lack of an order book means all trades are executed against the contract, known as P2C (peer-to-contract) trading. Assets are assigned an exchange rate through price feeds supplied by an oracle, and can be converted using the Kwenta.io dApp. This provides infinite liquidity up to the total amount of collateral in the system, zero slippage, and permissionless on-chain trading.

**Synthetic futures**

Synthetix has recently launched Perpetual Futures Beta. Anyone with access to the internet can leverage Synthetix’s infrastructure to access up to 10x leverage on an evergrowing list of Synthetic assets.

Kwenta, a fully decentralized and composable protocol with an easy-to-use trading UI, is the first partner to integrate Synthetix’s perps. Synthetix perps markets are accessible through a dedicated Kwenta UI.

Synthetix's perpetual futures enable a much expanded and capital-efficient trading experience by allowing both leveraged longs and shorts on a large selection of assets.

For SNX stakers, futures provide an additional revenue stream due to exchange and funding rate fees and reduce the need to hedge the additional debt due to inherent self-hedging and controlled exposure through market size limits.

Another useful property of Synthetix’s perps markets is that support for new assets can be expanded more readily for futures than for spot assets. This is because perpetual markets don’t share some of the limitations and risks of spot synths, allowing for more assets to be safely added. This means that the Synthetix protocol may soon offer a broader range of perpetual futures pairs than many competitors.

**How Synths work**

Synths are synthetic assets that track the price of the underlying asset. They allow holders to gain exposure on Ethereum to various asset classes without holding the underlying assets themselves or trusting a custodian. Synths are backed by the Synthetix Network Token (SNX), which is staked as collateral at a ratio of 400%.

**The current Synths**

For a current and continually updated list of synthetic assets and perpetual markets, please refer to https://kwenta.io/dashboard and https://v2.beta.kwenta.io/dashboard/overview on Ethereum and Optimistic Ethereum (seperatetly)

## System Architecture

**Minting Synths**

An SNX holder can mint sUSD by locking their SNX as collateral via the Synthetix smart contract. The steps involved when an SNX holder mints are:

- The Synthetix contract checks that the SNX staker can mint Synths against their SNX, which requires their Collateralisation Ratio to be below 400%.
- Debt shares are issues to a staker to track stakers issued debt amount when minting or burning sUSD
- With the debt assigned to the staker, the Synthetix contract instructs the sUSD contract to issue the new amount. It adds it to its total supply and assigns the newly minted sUSD to the user’s wallet.

If the price of SNX increases, an equivalent portion of a staker’s SNX is automatically unlocked as collateral. For example, if a user locks $100 of SNX as collateral, and the value of SNX doubles, then half of their SNX (total value: $200) is locked and the other half is unlocked. If they wish, that extra unlocked SNX can then be staked to mint more sUSD.

**Exchanges**

The steps involved for the smart contracts to process a Synth exchange (from sUSD to sBTC in this example) are below:

- Burn the source Synth (sUSD), which involves reducing that wallet address’s sUSD balance and updating the total supply of sUSD.
- Establish the conversion amount (i.e. the exchange rate, based on the price of each currency).
- Charge an exchange fee, which is currently 0.3% of the converted amount, and send the fee as sUSD to the fee pool, where it can be claimed by SNX stakers.
- The remaining 99.7% is issued by the destination Synth (sBTC) contract and the wallet address balance is updated
- The sBTC total supply is updated.

No counterparty is required to exchange, as the system converts the debt from one Synth to another. Hence no order books or order matching is required, resulting in infinite liquidity between Synths. No debt change is required to be recorded against the debt pool either, as the same value is burned from the source Synth and minted from the destination Synth.

**Claiming Fees**

When Synths are exchanged through the Synthetix contract, a fee is extracted and sent to the fee pool to be claimed by SNX stakers. When claiming fees (also called Synth exchange rewards) a staker also claims their SNX staking rewards, which reward them with extra SNX for staking the SNX they currently have. The smart contracts’ process once a staker requests to claim their fees is as follows:

- The fee pool checks whether there are fees currently available and whether the staker is eligible to receive fees.
- The amount of fees in sUSD is sent to the staker’s wallet address and the balance of the fee pool is updated.
- Additionally, a pro-rata amount of escrowed (inflationary)SNX is assigned to the wallet address from the SNX staking rewards contract.

Fees are allocated based on the proportion of debt each staker has issued. For example, if a staker has issued 1,000 sUSD in debt, the debt pool is 10,000 sUSD, and 100 in fees are generated in a fee period, this staker is entitled to 10 sUSD because their debt represents 10% of the debt pool. The same proportional distribution mechanism is used for SNX staking rewards.

**Burning debt**

When an SNX staker wants to exit the system or reduce their debt and unlock staked SNX, they must pay back their debt. At its simplest: a staker mints 10 sUSD by locking SNX as collateral, and must burn 10 sUSD to unlock it. But if the debt pool fluctuates (and therefore their individual debt fluctuates) while they are staked, they may need to burn more or less debt than they minted. The process for reducing debt to zero is as follows:

- The Synthetix contract determines their debt balance and removes them from the Debt Register.
- The required amount of sUSD is burned, and total supply of sUSD is updated along with the sUSD balance in the user’s wallet.
- Their SNX balance becomes transferrable.

**The debt pool**

The system tracks the debt pool by issuing debt shares (a token) to stakers when they mint or burn sUSD. A staker’s debt percentage would be their balance of tokens divided by the total supply of debt shares.

Example:

Alice mints 100 sUSD, gets issued with 100 debt shares
Bob mints 100 sUSD, gets issued with 100 debt shares
Both Alice and Bob each have 50% of the debt shares (100 / 200 shares)

When the total debt pool value fluctuates, the shares will be used to calculate how much debt the minter owes. For example, if the debt pool now doubles to 400 sUSD, based on the above scenario:

Alice who has 50% (100 shares), will have 200 sUSD debt <br />
Bob who has 50% (100 shares), will have 200 sUSD debt

Burning sUSD reduces the number of debt shares issued against a staker and the number of shares burnt is calculated with the total debt pool value. Continuing with the example above,

Example:

Alice now burns 100 sUSD, which burns (100 / 400) _ 200 shares = 50 shares
Alice would have 50 shares after her burn, ⅓ of the debt pool.
Alice’s remaining debt will be (50 / 150 shares) _ 300 = 100 sUSD

**The oracle**

The value of all synthetic assets in the Synthetix system is determined by oracles that push price feeds on-chain. It uses an algorithm with a variety of sources to form an aggregate value for each asset. The price feeds are currently supplied by Chainlink’s independent node operators.

## Current Risks and Risk Mitigation Strategies

**Current risks**

There are several risks in the current architecture, as Synthetix is still an experimental system and complex systems require both empirical observations and theoretical analysis. Empirical observation and theoretical analysis ensure the mechanism design aligns incentives for all players.

One risk involves the debt SNX holders issue when they stake their SNX and mint Synths. As previously explained, this debt can fluctuate due to exchange rate shifts within the system. This means that to exit the system and unlock their staked SNX, they may need to burn more Synths than they originally minted.

Most people in the cryptocurrency space are aware of this risk, but the prices of most crypto assets are highly correlated to Bitcoin and/or Ethereum. This means it’s possible for major price fluctuations in the SNX token to occur for reasons that have little to do with SNX or the Synthetix system.

Finally, there are a number of aspects of the system that are currently centralized. This decision has been made to ensure the efficient implementation of the project. One example of centralization is the use of proxy contracts across much of the architecture. This is to ensure the system can be upgraded easily but confers a level of control to the engineering team which requires trust from users. While these aspects will be phased out over time, it is important to understand the risks inherent in the current system architecture.

**Risk mitigation strategies**

As a decentralized protocol, the Synthetix team is committed to decentralization and censorship resistance — this will be a gradual process as the system matures. This includes crucial areas such as our price feeds. Chainlink, reputable a provider of decentralized oracle solutions, supplies all oracles, and Synthetix does not rely on a centralized solution.

Another important area is governance, Synthetic has a system of councils that helps to oversee and govern the protocol. The Spartan Council, the key governing council of Synthetix, is elected by the community and decides which changes to the protocol are approved.

## Future Functionality

**Additional Synths**

There are many different kinds of Synths that can be added to the system to provide greater utility to Synthetix. These include commodities, long tail crypto assets, and others..

## Conclusion

Synthetix has already delivered one of the most complex and useful protocols built on Ethereum to date. But the potential for censorship-resistant synthetic assets is still largely untapped. Further improvements to the mechanism as well as functional upgrades and new Synths will vastly increase the utility of the platform.
