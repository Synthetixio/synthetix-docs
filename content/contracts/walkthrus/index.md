# Walkthrus

Here are guides for programmatically achieving actions within the Synthetix protocol, along with examples in both JavaScript (for off-chain scripting) and Solidity (for on-chain contract interactions).

## Claiming

For `SNX` stakers, claim weekly rewards.

[<img src="/img/misc/events-claim.png" width=300 />](claiming.md)

## Delegating

Delegating key actions - issue, burn, exchange and claim to other wallets, including third party contracts.

[<img src="/img/misc/events-delegate.png" width=400 />](delegating.md)

## Depot: ETH/sUSD

Using the Depot to deposit excess `sUSD` (primarily for stakers) and to exchange `ETH` for that `sUSD`.

[<img src="/img/misc/events-depot.png" width=300 />](depot.md)

## Staking (Minting, Issuing)

Staking (aka locking) `SNX` in Synthetix to issue (aka mint, issue) `sUSD` in the form of debt and start earning rewards.

[<img src="/img/misc/events-mint.png" width=300 />](staking.md)

## Trading (Exchanging)

Trading (aka exchanging) one synth for another.

[<img src="/img/misc/events-exchange.png" width=300 />](trading.md)

## Trading Settlement

[Settling any fees owed or owing due](settlement.md) to Fee Reclamation ([SIP-37](https://sips.synthetix.io/sips/sip-37)).

> Note: Settlement has no direct UI component, settlement happens as part of subsequent exchanges or transfers via Mintr. However, it can be explictly invoked - [see our walkthru](settlement.md).

## Unstaking (Burn)

Unstaking (aka unlocking) `SNX` in Synthetix by burning `sUSD` debt.

[<img src="/img/misc/events-burn.png" width=300 />](unstaking.md)
