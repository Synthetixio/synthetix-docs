![Synthetix](img/logos/synthetix_text_logo.png)

# System Documentation

[![Build Status](https://travis-ci.org/Synthetixio/synthetix.svg?branch=master)](https://travis-ci.org/Synthetixio/synthetix)
[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix)
[![npm version](https://badge.fury.io/js/synthetix.svg)](https://badge.fury.io/js/synthetix)
[![Discord](https://img.shields.io/discord/413890591840272394.svg?color=768AD4&label=discord&logo=https%3A%2F%2Fdiscordapp.com%2Fassets%2F8c9701b98ad4372b58f13fd9f65f966e.svg)](https://discordapp.com/channels/413890591840272394/)
[![Twitter Follow](https://img.shields.io/twitter/follow/synthetix_io.svg?label=synthetix_io&style=social)](https://twitter.com/synthetix_io)

## Introduction

Welcome to the Synthetix system documentation. These pages contain a description of how Synthetix operates; provided are high-level discussions of the system mechanics, as well as thorough technical specifications of the smart contract architecture and API. We hope this assists users and developers to understand the system, and to build on top of it.

## Resources

- **Litepaper:** The [Synthetix Litepaper](https://www.synthetix.io/uploads/synthetix_litepaper.pdf) has a detailed overview of how the Synthetix protocol functions.
- **Community Page:** The online community has built an [excellent site](https://synthetix.community/docs/resources) with a large backlog of resources, explanations, and links that is perfect for any newcomers. 
- **Official Blog:** Stay up-to-date with all official news from the team at the [Synthetix blog](https://blog.synthetix.io). 
- **SIPs (Synthetix Improvement Proposals):** The Synthetix ecosystem is managed by a core team, with suggestions and improvements from the community in the form of Synthetix Improvement Proposals (SIPs) and Synthetix Configuration Change Proposal (SCCPs). Past and present SIPs and SCCPs are hosted on https://sips.synthetix.io. To suggest a new SIPs, create an issue on the [SIPs repo](https://github.com/synthetixio/SIPs/issues). 

## Developer Resources

- **Code:** Open source repositories are available @synthetixio; the main Synthetix repo is @synthetixio/synthetix.
- **Smart Contracts:** The latest list of deployed addresses and ABIs can be found via [addresses](addresses)
- **Smart Contract API:** Descriptions of all Synthetix smart contracts, their APIs, and a listing of deployed instances can be found [here](contracts).
- **Libraries:** For various methods to connect to Synthetix to read the current state from, transact onto or query for historical data, look at our [libraries section](libraries/index.md).

## dApps

- **Synthetix.Exchange:** [Synthetix Exchange](https://www.synthetix.io/products/exchange) allows users to trade synths, and to buy sUSD with ether. Synthetix.Exchange has also played host to [trading competitions](https://blog.synthetix.io/synthetix-exchange-trading-competition-v3/) offering SNX prizes to the most successful participants. The source code for Synthetix.Exchange can be found at @synthetixio/synthetix-exchange. A twitter bot that reports statistics for the exchange posts daily at @twitter:SynthXBot.
- **Mintr:** [Mintr](https://www.synthetix.io/products/mintr) is a dApp for SNX holders to participate in the Synthetix Network. Using Mintr, users can mint and burn Synths, monitor their collateralisation levels, buy and sell sUSD through the [Depot](contracts/Depot.md), claim their staking rewards, and vest any SNX they have accrued from the token sale or by staking.
- **Synthetix Dashboard:** Provides an overview of the status of the Synthetix system including price, token supply, exchange volume, fee pool size, open interest, and current collateralisation levels. The dashboard also provides listings of exchanges where [SNX](https://dashboard.synthetix.io/buy-snx) and [sUSD](https://dashboard.synthetix.io/buy-susd) are traded. The dashboard is available at [https://dashboard.synthetix.io](https://dashboard.synthetix.io).

## Integrations

- **The Graph**: [The Graph](http://thegraph.com/) is a decentralised indexer and GraphQL query engine of blockchain events and function calls. Synthetix has a number of subgraphs tracking a number of events and key metrics within the system historically. For more information on how to query or subscribe to events in real time see [Historical Data](historical.md).
- **UniSwap:** [Uniswap](https://uniswap.io/) is a decentralised exchange for exchanging ETH and ERC20 tokens. Synthetix integrates with it to deepen the Synthetix ecosystem's liquidity, and it acts as an on-ramp/off-ramp for the Synth market. Users who provide liquidity to the [ETH/sETH pool](https://uniswap.exchange/swap/0x42456D7084eacF4083f1140d3229471bbA2949A8) are provided with staking rewards as [part of the Synthetix protocol](https://sips.synthetix.io/sips/sip-8). This is discussed further [here](https://blog.synthetix.io/uniswap-seth-pool-incentives/), [here](https://blog.synthetix.io/snx-arbitrage-pool/), and [here](https://blog.synthetix.io/new-uniswap-seth-lp-reward-system/). 
- **KyberSwap:** Liquidity is further deepened by the integration of SNX and sUSD with [KyberSwap](https://kyberswap.com/swap/eth-snx), which is built on the [Kyber Network Protocol](https://kyber.network/). An example use case is described [here](https://blog.synthetix.io/snx-liquidity-has-been-added-to-kyberswap/).

## Get In Touch

- **Chat:** If you’re looking for somewhere to talk with the Synthetix team or with other developers about Synthetix, please visit our [Discord](https://discordapp.com/invite/AEdUHzt) or [/r/synthetix_io](https://reddit.com/r/synthetix_io) on reddit.
- **Read:** For updates, announcements, and information, check out our blog at [https://blog.synthetix.io/](https://blog.synthetix.io/), @twitter:synthetix_io on Twitter, or our [Telegram channel](https://t.me/havven_news).
- **Email:** Otherwise you can [contact us by email](https://www.synthetix.io/contact-us).
