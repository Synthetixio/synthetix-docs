# Testing

[![Travis Build Status](https://travis-ci.org/Synthetixio/synthetix.svg?branch=master)](https://travis-ci.org/Synthetixio/synthetix)
[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix)
[![codecov](https://codecov.io/gh/Synthetixio/synthetix/branch/develop/graph/badge.svg)](https://codecov.io/gh/Synthetixio/synthetix)

The Synthetix ecosystem relies on automated testing as much as possible to enable a high-frequency of updates while maintaining security and reliability.

<img src="/img/misc/testing.png" width="450px" />

## Truffle Integration Tests

We currently have thousands of individual integration tests running on `truffle` and `ganache`. The tests are hosted under the `test/contracts` folder, and the setup is under `migrations`. The tests make use of EVM snapshot and restores to quickly restore state between tests.

!!! Info "Upgrade in the works"

    - While we currently use truffle for testing we are looking to move away from it and use our publish script directly. Having two systems - one for test and one for deploy is error-prone
    - We are also looking to move to ethers.js for over web3 once we migrate away from truffle

## Publisher Integration Tests

Our custom publisher scripts do all the heavy lifting in deployment. As such, we've got a slew of integration tests that build, deploy and test various scenarios. These are hosted under `test/publish`

## Deployment Live Tests

Every time we deploy updates to Synthetix, we mutate our `deployment.json` files under `publish/deploys`. This means that all contract addresses, ABI and synths can be loaded without needing any internet connection at all. In order to ensure that our JSON files match the deployed reality on-chain, we run the tests under `test/deployments` to verify, in particular, that our ABIs match those on-chain.

## Testnet E2E Tests

Finally, under the `test/testnet` folder is a script that when run, will execute a basic PVT of our system. Because it's live testnet ETH and SNX, the script uses tiny amounts of the tokens in its execution.Tthis script is used after each deployment to a testnet to ensure health of the system.
