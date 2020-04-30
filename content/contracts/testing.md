# Automated Testing

!!! Tip "Development branch"

    All of our latest updates are from our `develop` branch

The Synthetix ecosystem relies on automated testing as much as possible to enable a high-frequency of updates while maintaining security and reliability.

## Continuous Integration

[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix) [![Travis Build Status](https://travis-ci.org/Synthetixio/synthetix.svg?branch=master)](https://travis-ci.org/Synthetixio/synthetix)

We rely primarily on CircleCI for our builds.

<a href="https://circleci.com/gh/Synthetixio/synthetix"><img src="/img/misc/circleci.png" width="450px" /></a>

However we use Travis additionally for coverage and gas reports.

<a href="https://travis-ci.org/Synthetixio/synthetix"><img src="/img/misc/travis.png" width="450px" /></a>

## Contract Tests

We currently have over 1000 individual test specs for all contracts under `/contracts` running on `buidler` and `buidlerevm`. The tests are hosted under the `test/contracts` folder, and the setup is under `test/contracts/setup.js`. The tests make use of EVM snapshot and restores to quickly restore state between tests.

## Legacy Tests

We also run this entire contract test suite with legacy contracts injected. So for every test target, any dependent contracts that can be found under `legacy/contracts` will be replaced and injected at test runtime.

## Code Coverage

[![codecov](https://codecov.io/gh/Synthetixio/synthetix/branch/develop/graph/badge.svg)](https://codecov.io/gh/Synthetixio/synthetix)

For the contract tests, we have code coverage configured to instrument our sources. So, whenever changes are detected in PRs, coverage reports are compiled and appended to PRs. The default branch for coverage reports is `develop`.

<a href="https://codecov.io/gh/Synthetixio/synthetix"><img src="https://codecov.io/gh/Synthetixio/synthetix/commit/7ed457c34026a6a6cf78b57b3523bc159265760c/graphs/sunburst.svg" /></a>

> Our current sunburst graph for contract line coverage from our `develop` branch.

## Publisher Integration Tests

Our custom publisher scripts do all the heavy lifting in deployment. As such, we've got a slew of integration tests that build, deploy and test various scenarios. These are hosted under `test/publish`

## Deployment Live Tests

Every time we deploy updates to Synthetix, we mutate our `deployment.json` files under `publish/deploys`. This means that all contract addresses, ABI and synths can be loaded without needing any internet connection at all. In order to ensure that our JSON files match the deployed reality on-chain, we run the tests under `test/deployments` to verify, in particular, that our ABIs match those on-chain.

## Testnet E2E Tests

Finally, under the `test/testnet` folder is a script that when run, will execute a basic PVT of our system. Because it's live testnet ETH and SNX, the script uses tiny amounts of the tokens in its execution. This script is used after each deployment to a testnet to ensure health of the system. We also run Etherscan ABI tests to assert what's been verified in Etherscan matches that in our `deployment.json`.
