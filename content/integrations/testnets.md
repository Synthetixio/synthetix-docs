# Working with Testnets

!!! Tip "Getting help with testnets"

    If you notice anything wrong with the testnets, please ask in the [`#dev-portal`](https://discord.gg/DSgQRHG) channel of our Discord.

The Synthetix protocol is available on the following testnets:

1. `sepolia`
2. `sepolia-ovm`

All of the latest addresses can be found via [our addresses](../addresses.md) section.

We strive to ensure our testing environments is as close as possible to mainnet. All testnets use both the centralized Synthetix oracle and decentralized Chainlink aggregators. These oracles are supplied with testnet ETH and run consistently.

You can use the `synthetix` npm module with the `network` above to get targets (addresses), sources (ABIs) and synths.

In the interests of dogfooding our own tools, if you require testnet SNX or sUSD, please use our `Depot` contract.

For `sepolia` it's https://contracts.synthetix.io/sepolia/Depot

To get testnet `SNX`, simply invoke the function `Depot.exchangeEtherForSNX()` with some testnet `ETH`. To get testnet `sUSD`, either stake some testnet `SNX` using [mintr](//mintr.synthetix.io), or you can use `Depot.exchangeEtherForSynths()` if any is available.

To get testnet `ETH`, search for your friendly testnet faucet.

<img src="/img/misc/sepolia-depot.gif" />

> For example on sepolia, navigate to https://contracts.synthetix.io/sepolia/Depot#writeContract and execute `exchangeEtherForSNX()` with some amount of testnet ETH.

## Optimism

For `sepolia-ovm` please use the Depot above for layer 1 and then use the staking dapp to deposit sepolia `SNX` to L2. Likewise you can use https://gateway.optimism.io to deposit sepolia ETH to L2.
