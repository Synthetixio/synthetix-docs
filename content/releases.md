!!! tip "Notice"
		Imported from https://github.com/Synthetixio/synthetix/releases

# Hadar (v2.21.6)

**Published**: Mar 31, 2020

**Codebase**: [v2.21.6](https://github.com/Synthetixio/synthetix/tree/v2.21.6)

> https://blog.synthetix.io/the-hadar-release/

- [SIP-9](https://sips.synthetix.io/sips/sip-9) One week claim window 

- [SIP-10](https://sips.synthetix.io/sips/sip-10) Improved Delegation Powers

- [SIP-21](https://sips.synthetix.io/sips/sip-21) Deprecate swing fee

- [SIP-44](https://sips.synthetix.io/sips/sip-44) System & Synth Disabling

- [SIP-46](https://sips.synthetix.io/sips/sip-46) Address resolver gas optimizations

- [SIP-47](https://sips.synthetix.io/sips/sip-47) Prevent empty exchanges

-----

# Betelgeuse (v2.20.0)

**Published**: Feb 28, 2020

**Codebase**: [v2.20.0](https://github.com/Synthetixio/synthetix/tree/v2.20.0)

> https://blog.synthetix.io/the-betelgeuse-release/

- [SIP-40](https://sips.synthetix.io/sips/sip-40): Frontminting prevention ([read IOSIRO's audit report here](https://iosiro.com/audits/synthetix-pr-435-smart-contract-audit))
- [SIP-41](https://sips.synthetix.io/sips/sip-41): ProtocolDAO phase zero
- [SIP-42](https://sips.synthetix.io/sips/sip-42): Gas optimisations

-----

# Achernar (v2.19.6)

**Published**: Feb 20, 2020

**Codebase**: [v2.19.6](https://github.com/Synthetixio/synthetix/tree/v2.19.6)

> https://blog.synthetix.io/the-achernar-release/

- [SIP-31](https://sips.synthetix.io/sips/sip-31): sETH pool automatic rewards — SNX rewards for providing sETH/ETH liquidity on Uniswap are currently paid out manually using a multisig. Using an automated system will be far more efficient and reduce the possibility of human error. Liquidity providers will now have to claim their rewards from a smart contract (no timeframe requirement).
- [SIP-33](https://sips.synthetix.io/sips/sip-33): Removal of XDRs — The XDR Synth was originally used as the base unit of account, but sUSD now fills that role. Taking out XDR will simplify several functions for users, particularly the payment of trading fees.
- [SIP-35](https://sips.synthetix.io/sips/sip-35): Skinny Ether collateral — There has been significant demand from the crypto community for ETH to be enabled as collateral in Synthetix. The three-month trial will reduce friction for new traders.
- [SIP-37](https://sips.synthetix.io/sips/sip-37): Fee reclamations and rebates — This SIP implements anti-frontrunning measures, ensuring that traders cannot profit from Oracle latency.
- [SIP-38](https://sips.synthetix.io/sips/sip-38): Charge fees during purge — This SIP adds a trading fee to when a Synth holder gets purged out of a Synth, to prevent users from camping out in these Synths without paying their fair share of fees.
Synthetix.Exchange v2 — We are launching a new version of Synthetix.Exchange. V2 will move to production from beta as part of the Achernar release.
- [SIP-43](https://sips.synthetix.io/sips/sip-43): Adding an `AddressResolver` contract for better inter-contract communication within Synthetix
- [SCCP-11](https://sips.synthetix.io/sips/sccp-11): Reduce trading fee to 0.3% — As part of the fee reclamation release, we’ll be reducing the trading fee back down to 30bps.
- [SCCP-12](https://sips.synthetix.io/sips/sccp-12): Reactivate previously deactivated Synths — s/iXTZ, s/iBNB, and s/iLTC were all previously deactivated as they were being targeted by frontrunners, but we're reinstating them in the Achernar release.
- [SCCP-13](https://sips.synthetix.io/sips/sccp-13): Reinstate fee claim buffer to 750% from 500% — The requirement to claim fees was reduced from 750% to 500% to allow stakers to not get hit by the temporary fee increase.

-----

# Procyon (v2.17.6)

**Published**: Dec 18, 2019

**Codebase**: [v2.17.6](https://github.com/Synthetixio/synthetix/tree/v2.17.6)

> https://blog.synthetix.io/the-procyon-release/

- [SIP-30](https://sips.synthetix.io/sips/sip-30)
- [SIP-32](https://sips.synthetix.io/sips/sip-32)
- [SCCP-9](https://sips.synthetix.io/sccp/sccp-9)

-----

# Capella (v2.16.4)

**Published**: Dec 12, 2019

**Codebase**: [v2.16.4](https://github.com/Synthetixio/synthetix/tree/v2.16.4)

> https://blog.synthetix.io/the-capella-release/ 

- [SIP-23](https://sips.synthetix.io/sips/sip-23)
- [SIP-24](https://sips.synthetix.io/sips/sip-24)


-----

# DappMaintenance contract (v2.15.0)

**Published**: Dec 9, 2019

**Codebase**: [v2.15.0](https://github.com/Synthetixio/synthetix/tree/v2.15.0)

> The `DappMaintenance` contract is here to keep a state of the dApps (Mintr and Synthetix Exchange) in order to check if they are supposed to be up or down.

-----

# Vega (v2.14.0)

**Published**: Nov 27, 2019

**Codebase**: [v2.14.0](https://github.com/Synthetixio/synthetix/tree/v2.14.0)

> https://blog.synthetix.io/the-vega-release/

- https://sips.synthetix.io/sips/sip-29 

-----

# Arcturus (v2.13.1)

**Published**: Nov 21, 2019

**Codebase**: [v2.13.1](https://github.com/Synthetixio/synthetix/tree/v2.13.1)

> https://blog.synthetix.io/the-arcturus-release/

-----

# Rigil (v2.12.2)

**Published**: Nov 8, 2019

**Codebase**: [v2.12.2](https://github.com/Synthetixio/synthetix/tree/v2.12.2)

> https://blog.synthetix.io/the-rigil-release/

- [SIP-21](https://sips.synthetix.io/sips/sip-21): This will double the exchange fee when changing between an s-Synth and an i-Synth, or vice versa, e.g. sTRX <> iBTC; or iTRX <> sBTC. The only Synth excluded is sUSD.
There is already a leveraged benefit on the inverse Synths and currently being able to trade short <> long in a volatile market is a continuous advantage to front runners. The normal exchange fee rate is 30 bips (0.3%). However, it is currently 50 bips, which would make the swing trade 100 bips. When it is restored to 30 bips it would then only be 60 bips on a swing trade.
- [SIP-25](https://sips.synthetix.io/sips/sip-25): This SIP will decouple the gas limiter from the oracle. Currently, any invocation of the setGasPriceLimit() function has to be mined before a price update can be mined on-chain. This creates an unnecessary delay in serving timely oracle updates. This proposal is to change this access to setting the gasPriceLimit to a separate address, controlled by a setter only callable by the owner.
- [SIP-26](https://sips.synthetix.io/sips/sip-26): This is a bug fix that would reduce the gas estimation of trading SNX via Uniswap down from 900K to 100K.
- [SCCP-5](https://sips.synthetix.io/sccp/sccp-5): This change will divert 5% of the weekly SNX inflation into the arb pool — an increase from 2%. This is intended to provide a tighter sETH peg.
- [SCCP-6](https://sips.synthetix.io/sccp/sccp-6): This SCCP will reduce the C-Ratio buffer to 1% from 10%. The buffer was originally implemented as a protection mechanism for slashing of fees, as fee slashing is no longer implemented there is no need for such a high buffer, as it only needs to protect from minor price fluctuations. The previous 10% buffer meant a C-Ratio of ~682% was required to claim fees, while the new 1% buffer means a C-Ratio of ~742.6% is required.

-----

# Canopus (v2.11.2)

**Published**: Oct 4, 2019

**Codebase**: [v2.11.2](https://github.com/Synthetixio/synthetix/tree/v2.11.2)

> https://blog.synthetix.io/the-canopus-release/

- [SIP-8](http://sips.synthetix.io/sips/sip-8): This SIP formalises the sETH liquidity provider reward trial at the protocol level, diverting a portion of the SNX weekly inflation into a pool to incentivise liquidity providers of the sETH/ETH pair in Uniswap. The trial has been successful, but in order for this mechanism to work long term it must be formalised into the protocol.
- [SIP-12](http://sips.synthetix.io/sips/sip-12): This SIP proposes to prevent front running of the price oracle by introducing max gas price for transactions on Synthetix exchanges. Front running occurs when a user or bot reads an incoming oracle update from the mempool and transmits an exchange with higher GWEI, taking advantage of a known price movement. Front running can jeopardise the debts of SNX stakers by enabling better odds at making profitable trades, and several accounts have used front running methods already. This first phase of SIP-12 will determine a max GWEI setting based on the current Ethereum congestion (somewhere between 'standard' and 'fast'), and traders will not be able to push a trade with more GWEI than that. Synthetix.Exchange will not allow traders to use a 'fast' GWEI setting, but if someone attempts a trade using the contacts directly, if they use a higher GWEI then the transaction will fail.

-----

# Sirius (v2.10.5)

**Published**: Sep 26, 2019

**Codebase**: [v2.10.5](https://github.com/Synthetixio/synthetix/tree/v2.10.5)

> https://blog.synthetix.io/release-scheduled-thursday-september-26/

- [SIP 16](http://sips.synthetix.io/sips/sip-16): Synthetix upgrades currently take longer than needed as the owner account makes up to 60 calls to configure the system. Most of these calls are setSynthetix and setFeePool on all of the Synths. We propose to point the Synths to the Synthetix Proxy and FeePool Proxy. This would reduce the amount of time the system is offline. Making upgrades a lot faster, cheaper (gas) and minimize the impact on users with reduced downtime.
- [SIP 17](http://sips.synthetix.io/sips/sip-16): This update will upgrade the currencyKeys from Bytes4 to Bytes32. This will enable Synthetix to create new Synths with symbols longer than 4 characters. e.g. sATOM, sDEFI, which is not currently possible with currencyKeys type defined as Bytes4.
- [SIP 18](http://sips.synthetix.io/sips/sip-16): This will recover the $2.9k sUSD that is currently unclaimable by minters in the SNX fee address. This sUSD is from the period in which there was a transfer fee for sending sUSD.
- [SIP 19](http://sips.synthetix.io/sips/sip-16): The Synthetix contracts still have transfer fees written into them, from before we disabled transfer fees in February 2018. Removing that code will optimise reclaim bytecode size required for new features.

-----

# Synthetix npm module (v2.1.9)

**Published**: Apr 4, 2019

**Codebase**: [v2.1.9](https://github.com/Synthetixio/synthetix/tree/v2.1.9)

> We added support for synthetix as an npm module. With it, you can load the ABIs, bytecode, and target addresses for `synthetix` on mainnet and all available testnets (`kovan`, `rinkeby` and `ropsten`). Please see our [README.md](https://github.com/Synthetixio/synthetix#usage-and-requirements) documentation for more details. 

-----

# 10 new Synths and Synthetix upgrade (v2.1.0)

**Published**: Feb 26, 2019

**Codebase**: [v2.1.0](https://github.com/Synthetixio/synthetix/tree/v2.1.0)

> Updates include;
- Gas optimisation for Synth minting and burning
- Transfer Fee Fix to allow it to be set to zero
- SynthExchange event for DApps when exchanging between synths


-----

# Synthetix crypto-backed synthetic asset platform (v2.0.0)

**Published**: Dec 18, 2018

**Codebase**: [v2.0.0](https://github.com/Synthetixio/synthetix/tree/v2.0.0)

> The Synthetix Platform enables the creation of on-chain synthetic assets (Synths) that track the value of assets in the real world. Some examples of assets that the platform supports now or will support in the future are synthetic fiat currencies (sUSD, sAUD, sKRW etc), synthetic commodities such as gold (sXAU), as well as more complex assets such as equity indices.

-----

# nUSD System A - Maintenance Patch 1 (v1.0.1)

**Published**: Aug 7, 2018

**Codebase**: [v1.0.1](https://github.com/Synthetixio/synthetix/tree/v1.0.1)

> Adds some convenience functions and minor optimisations and fixes.

-----

# nUSD System A - Foundation Static Issuance (v1.0.0)

**Published**: Aug 7, 2018

**Codebase**: [v1.0.0](https://github.com/Synthetixio/synthetix/tree/v1.0.0)

> In this version of the nUSD system, nomins are havven-backed, and only the foundation may issue, up to an issuance ratio it sets.

-----

# Ether-Backed USD Nomins (v0.1.0)

**Published**: Aug 7, 2018

**Codebase**: [v0.1.0](https://github.com/Synthetixio/synthetix/tree/v0.1.0)



-----
