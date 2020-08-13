# Working with Testnets

!!! Tip "Getting help with testnets"

    If you notice anything wrong with the testnets, please ask in the [`#dev-portal`](https://discord.gg/DSgQRHG) channel of our Discord.

The Synthetix protocol is available on the following testnets:

1. `kovan`
2. `rinkeby`
3. `ropsten`

All of the latest addresses can be found via [our addresses](../addresses.md) section.

We strive to ensure all three testing environments are as close as possible to mainnet. All testnets use both the centralized Synthetix oracle and decentralized Chainlink aggregators. These oracles are supplied with testnet ETH and run consistently.

You can use the `synthetix` npm module with the `network` above to get targets (addresses), sources (ABIs) and synths.

In the interests of dogfooding our own tools, if you require testnet SNX or sUSD, please use our `Depot` contract.

- For `kovan` it's https://contracts.synthetix.io/kovan/Depot
- For `rinkeby` it's https://contracts.synthetix.io/rinkeby/Depot
- For `ropsten` it's https://contracts.synthetix.io/ropsten/Depot

To get testnet `SNX`, simply invoke the function `Depot.exchangeEtherForSNX()` with some testnet `ETH`. To get testnet `sUSD`, either stake some testnet `SNX` using [mintr](//mintr.synthetix.io), or you can use `Depot.exchangeEtherForSynths()` if any is available.

To get testnet `ETH`, search for your friendly testnet faucet.

<img src="/img/misc/kovan-depot.gif" />

> For example on Kovan, navigate to https://contracts.synthetix.io/kovan/Depot#writeContract and execute `exchangeEtherForSNX()` with some amount of testnet ETH.
