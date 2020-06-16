# Integrations

Here is a list of Synthetix Integrations both on and offchain. For projects wishing to integate with Synthetix please see the technical [Integration guide](/integration/guide/)

## The Graph

[The Graph](http://thegraph.com/) is a decentralised indexer and GraphQL query engine of blockchain events and function calls. Synthetix has a number of subgraphs tracking a number of events and key metrics within the system historically. For more information on how to query or subscribe to events in real time see [Historical Data](../historical-data.md).

## KyberSwap

Liquidity is further deepened by the integration of SNX and sUSD with [KyberSwap](https://kyberswap.com/swap/eth-snx), which is built on the [Kyber Network Protocol](https://kyber.network/). An example use case is described [here](https://blog.synthetix.io/snx-liquidity-has-been-added-to-kyberswap/).

## UniSwap

[Uniswap](https://uniswap.io/) is a decentralised exchange for exchanging ETH and ERC20 tokens. Synthetix integrates with it to deepen the Synthetix ecosystem's liquidity, and it acts as an on-ramp/off-ramp for the Synth market. Users who provide liquidity to the [ETH/sETH pool](https://uniswap.exchange/swap/0x42456D7084eacF4083f1140d3229471bbA2949A8) are provided with staking rewards as [part of the Synthetix protocol](https://sips.synthetix.io/sips/sip-8). This is discussed further [here](https://blog.synthetix.io/uniswap-seth-pool-incentives/), [here](https://blog.synthetix.io/snx-arbitrage-pool/), and [here](https://blog.synthetix.io/new-uniswap-seth-lp-reward-system/).

<table><tr><th>Name</th><th>Homepage</th><th>Dapp</th><th>Blogpost</th><th>Contract</th><th>Source</th><th>Audits</th><th>Disclosures</th><th>Security Contact</th></tr>
              <tr>
                <td>UNI-V1 sETH/ETH exchange</td>
                <td><a target="_blank" href="https://uniswap.org">uniswap.org</a></td>
                <td><a target="_blank" href="https://uniswap.exchange/swap?use=v1&outputCurrency=0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb">uniswap.exchange</a></td>
                <td>
                    <a target="_blank" href="https://defirate.com/synthetix-liquidity-incentive-tutorial/">Uniswap LP tutorial</a>
                </td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/">sETH/ETH exchange contract</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/Uniswap/uniswap-v1">uniswap-v1</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/ConsenSys/Uniswap-audit-report-2018-12">Uniswap V1 Audit Report</a>
                <td><a target="_blank" href="https://uniswap.org/bug-bounty/">Bug Bounty</a>
                <td>
                    <a target="_blank" href="mailto:contact@uniswap.org">contact@uniswap.org</a>
                </td>
              </tr>
              <tr>
                <td>UNI-V2 sXAU/USDC exchange</td>
                <td><a target="_blank" href="https://uniswap.org">uniswap.org</a></td>
                <td><a target="_blank" href="https://uniswap.exchange/swap?outputCurrency=0x261efcdd24cea98652b9700800a13dfbca4103ff">uniswap.exchange</a></td>
                <td>
                    <a target="_blank" href="https://blog.synthetix.io/uniswap-v2-sxau-trial/">Uniswap v2 sXAU Trial</a>
                </td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/0x34a0216c5057bc18e5d34d4405284564efd759b2">sXAU/USDC exchange</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/Uniswap/uniswap-v2-core">uniswap-v2-core</a>
                </td>
                <td>
                    <a target="_blank" href="https://uniswap.org/audit.html">Uniswap V2 Audit Report</a>
                <td><a target="_blank" href="https://uniswap.org/bug-bounty/">Bug Bounty</a>
                <td>
                    <a target="_blank" href="mailto:contact@uniswap.org">contact@uniswap.org</a>
                </td>
              </tr>
</table>

## Curve

Curve is an exchange liquidity pool on Ethereum (like [Uniswap](https://uniswap.exchange/swap)) designed for (1) extremely efficient stablecoin trading (2) low risk, supplemental fee income for liquidity providers, without an opportunity cost.
Curve allows users (and smart contracts like [1inch](https://1inch.exchange/), [Paraswap](https://paraswap.io/), Totle and [Dex.ag](http://dex.ag)) to trade between DAI and USDC with a bespoke low slippage, low fee algorithm designed specifically for stablecoins and earn fees.

<table><tr><th>Name</th><th>Homepage</th><th>Dapp</th><th>Blogpost</th><th>Contract</th><th>Source</th><th>Audits</th><th>Disclosures</th><th>Security Contact</th></tr>
              <tr>
                <td>Curve sUSD Pool</td>
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

## Balancer

A Balancer Pool is an automated market maker with certain key properties that cause it to function as a self-balancing weighted portfolio and price sensor.

Balancer turns the concept of an index fund on its head: instead of paying fees to portfolio managers to rebalance your portfolio, you collect fees from traders, who rebalance your portfolio by following arbitrage opportunities.

Balancer is based on a particular N-dimensional surface which defines a cost function for the exchange of any pair of tokens held in a Balancer Pool. This approach was first described by V. Buterin[0], generalized by Alan Lu[1], and proven viable for market making by the popular [Uniswap](https://uniswap.exchange/swap) dapp.

<table><tr><th>Name</th><th>Homepage</th><th>Dapp</th><th>Blogpost</th><th>Contract</th><th>Source</th><th>Audits</th><th>Disclosures</th><th>Security Contact</th></tr>
              <tr>
                <td>Balancer SNX Pool</td>
                <td><a target="_blank" href="https://balancer.finance/">balancer.finance</a></td>
                <td><a target="_blank" href="https://balancer.exchange/#/swap">balancer.exchange</a></td>
                <td>N/A</td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/0x815f8ef4863451f4faf34fbc860034812e7377d9">Balancer SNX Pool</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/balancer-labs/">Balancer code</a>
                </td>
                <td>
                    <a target="_blank" href="https://docs.balancer.finance/protocol/security/audits">Balancer Audit Reports</a>
                <td><a target="_blank" href="">N/A</a>
                <td>
                    <a target="_blank" href="mailto:contact@balancer.finance">contact@balancer.finance</a>
                </td>
              </tr>
   <tr>
                <td>Balancer Incentives</td>
                <td><a target="_blank" href="https://synthetix.io">synthetix.io</a></td>
                <td><a target="_blank" href="https://mintr.synthetix.io">mintr.synthetix.io</a></td>
                <td><a target="_blank" href="https://blog.synthetix.io/balancer-snx-usdc-liquidity-trial/">SNX/USDC Liquidity Trial</a></td>
                <td>
                    <a target="_blank" href="https://etherscan.io/address/0xFBaEdde70732540cE2B11A8AC58Eb2dC0D69dE10#code">Balancer SNX Rewards</a>
                </td>
                <td>
                    <a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/a8d0ea24cc6c726ee29fcdfba90ae84915efdbee/contracts/StakingRewards.sol">SNX Liquidity Rewards Contract</a>
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

## More Integrations to Document

- DeFi Zap
- DefiSnap
- SNX LINK
- Staked
