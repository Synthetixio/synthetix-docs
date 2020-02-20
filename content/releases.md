!!! info "Notice"
		Imported from https://github.com/Synthetixio/synthetix/releases

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
- [SCCP-11](https://sips.synthetix.io/sips/sccp-11): Reduce trading fee to 0.3% — As part of the fee reclamation release, we’ll be reducing the trading fee back down to 30bps.
- [SCCP-12](https://sips.synthetix.io/sips/sccp-12): Reactivate previously deactivated Synths — s/iXTZ, s/iBNB, and s/iLTC were all previously deactivated as they were being targeted by frontrunners, but we're reinstating them in the Achernar release.
- [SCCP-13](https://sips.synthetix.io/sips/sccp-13): Reinstate fee claim buffer to 750% from 500% — The requirement to claim fees was reduced from 750% to 500% to allow stakers to not get hit by the temporary fee increase.

-----

# Procyon (v2.17.6)

**Published**: Dec 18, 2019

**Codebase**: [v2.17.6](https://github.com/Synthetixio/synthetix/tree/v2.17.6)

> The Procyon release: https://blog.synthetix.io/the-procyon-release/

- [SIP-30](https://sips.synthetix.io/sips/sip-30)
- [SIP-32](https://sips.synthetix.io/sips/sip-32)
- [SCCP-9](https://sips.synthetix.io/sccp/sccp-9)

-----

# Capella (v2.16.4)

**Published**: Dec 12, 2019

**Codebase**: [v2.16.4](https://github.com/Synthetixio/synthetix/tree/v2.16.4)

> The Capella release: https://blog.synthetix.io/the-capella-release/ 

- [SIP-23](https://sips.synthetix.io/sips/sip-23)
- [SIP-24](https://sips.synthetix.io/sips/sip-24)


-----

# Arcturus (v2.13.1)

**Published**: Dec 9, 2019

**Codebase**: [v2.13.1](https://github.com/Synthetixio/synthetix/tree/v2.13.1)

> https://blog.synthetix.io/the-arcturus-release/

-----

# DappMaintenance contract (v2.15.0)

**Published**: Dec 9, 2019

**Codebase**: [v2.15.0](https://github.com/Synthetixio/synthetix/tree/v2.15.0)

> The `DappMaintenance` contract is here to keep a state of the dApps (Mintr and Synthetix Exchange) in order to check if they are supposed to be up or down.

-----

# Vega (v2.14.0)

**Published**: Dec 5, 2019

**Codebase**: [v2.14.0](https://github.com/Synthetixio/synthetix/tree/v2.14.0)

> https://blog.synthetix.io/the-vega-release/

- https://sips.synthetix.io/sips/sip-29 

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

**Published**: Dec 7, 2018

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
