# Integrations

Here is a list of Synthetix Integrations both on and offchain. For projects wishing to integate with Synthetix please see the technical [Integration guide](/integration/guide/)

## The Graph

[The Graph](http://thegraph.com/) is a decentralised indexer and GraphQL query engine of blockchain events and function calls. Synthetix has a number of subgraphs tracking a number of events and key metrics within the system historically. For more information on how to query or subscribe to events in real time see [Historical Data](../historical-data.md).

## UniSwap

[Uniswap](https://uniswap.io/) is a decentralised exchange for exchanging ETH and ERC20 tokens. Synthetix integrates with it to deepen the Synthetix ecosystem's liquidity, and it acts as an on-ramp/off-ramp for the Synth market. Users who provide liquidity to the [ETH/sETH pool](https://uniswap.exchange/swap/0x42456D7084eacF4083f1140d3229471bbA2949A8) are provided with staking rewards as [part of the Synthetix protocol](https://sips.synthetix.io/sips/sip-8). This is discussed further [here](https://blog.synthetix.io/uniswap-seth-pool-incentives/), [here](https://blog.synthetix.io/snx-arbitrage-pool/), and [here](https://blog.synthetix.io/new-uniswap-seth-lp-reward-system/).

## KyberSwap

Liquidity is further deepened by the integration of SNX and sUSD with [KyberSwap](https://kyberswap.com/swap/eth-snx), which is built on the [Kyber Network Protocol](https://kyber.network/). An example use case is described [here](https://blog.synthetix.io/snx-liquidity-has-been-added-to-kyberswap/).

## Curve

Curve is an exchange liquidity pool on Ethereum (like [Uniswap](https://uniswap.exchange/swap)) designed for (1) extremely efficient stablecoin trading (2) low risk, supplemental fee income for liquidity providers, without an opportunity cost.
Curve allows users (and smart contracts like [1inch](https://1inch.exchange/), [Paraswap](https://paraswap.io/), Totle and [Dex.ag](http://dex.ag)) to trade between DAI and USDC with a bespoke low slippage, low fee algorithm designed specifically for stablecoins and earn fees.

<table><tr><th>Name</th><th>Homepage</th><th>Dapp</th><th>Blogpost</th><th>Contract</th><th>Source</th><th>Audits</th><th>Disclosures</th><th>Security Contact</th></tr>
              <tr>
                <td>Curve Pool</td>
                <td><a target="_blank" href="https://www.curve.fi/">curve.fi</a></td>
                <td><a target="_blank" href="https://beta.curve.fi/">beta.curve.fi</a></td>
                <td>N/A</td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/0xA5407eAE9Ba41422680e2e00537571bcC53efBfD">Curve Pool</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/curvefi/curve-contract/blob/pool_susd_plain/vyper/stableswap.vy">Curve sUSD Pool Contract</a>
                </td>
                <td>
                    <a target="_blank" href="https://www.curve.fi/audits/01-ToB.pdf">Curve Audit Report</a>
                <td><a target="_blank" href="https://blog.curve.fi/vulnerability-disclosure/">Disclosures</a>
                <td>
                    <a target="_blank" href="mailto:security@curve.fi">security@curve.fi</a>
                </td>
              </tr>
   <tr>
                <td>Curve Incentives</td>
                <td><a target="_blank" href="https://synthetix.io">synthetix.io</a></td>
                <td><a target="_blank" href="https://mintr.synthetix.io">mintr.synthetix.io</a></td>
                <td><a target="_blank" href="https://blog.synthetix.io/susd-liquidity-trial-with-curve-iearn/">sUSD Liquidity with Curve</a></td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/0xdcb6a51ea3ca5d3fd898fd6564757c7aaec3ca92#code">Curve Rewards</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/Synthetixio/Unipool/compare/53df522...4675db3d">SNX Liquidity Rewards Contract</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/sigp/public-audits/blob/master/synthetix/unipool/review.pdf">SNX Liquidity Rewards Audit Report</a>
                <td>
                    <a target="_blank" href="https://blog.synthetix.io/synthetix-bug-bounties/">Bug Bounty</a>
                <td>
                    <a target="_blank" href="mailto:security@synthetix.io">security@synthetix.io</a>
                </td>
              </tr>
             </tr></table>
