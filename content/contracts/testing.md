# Automated Testing

!!! Tip "Development branch"

    All of our latest updates are from our `develop` branch

The Synthetix ecosystem relies on automated testing as much as possible to enable a high-frequency of updates while maintaining security and reliability.

## Getting Started

Check out a copy of the `synthetix` repo and run `npm install` to install dependencies.

Even though our project uses hardhat, the integration and deploy tests require `anvil`. `anvil` is used because it provides superior performance and has earliest support for certain commands within `cannon`

Foundry/anvil can be installed with the following command sequence:
```
curl -L https://foundry.paradigm.xyz | bash
foundryup
source ~/.*rc
```

For more information about Foundry, see [their book](https://book.getfoundry.sh/getting-started/installation.html).

### Continuous Integration

[![CircleCI](https://circleci.com/gh/Synthetixio/synthetix.svg?style=svg)](https://circleci.com/gh/Synthetixio/synthetix)

We rely primarily on CircleCI for our builds.

<a href="https://circleci.com/gh/Synthetixio/synthetix"><img src="/img/misc/circleci.png" width="450px" /></a>

## Test Suites

### Contract Tests

We currently have over 3000 individual test specs for all contracts under `/contracts` running on `hardhat` and `hardhat-network`. The tests are hosted under the `test/contracts` folder, and the setup is under `test/contracts/setup.js`. The tests make use of EVM snapshot and restores to quickly restore state between tests.

To run the contract/unit tests on a local machine:

```
npm run test
```

To run a subset of the tests, use `--grep <filter>`.

#### Code Coverage

[![codecov](https://codecov.io/gh/Synthetixio/synthetix/branch/develop/graph/badge.svg)](https://codecov.io/gh/Synthetixio/synthetix)

For the contract tests, we have code coverage configured to instrument our sources. So, whenever changes are detected in PRs, coverage reports are compiled and appended to PRs. The default branch for coverage reports is `develop`.

<a href="https://codecov.io/gh/Synthetixio/synthetix"><img src="https://codecov.io/gh/Synthetixio/synthetix/commit/7ed457c34026a6a6cf78b57b3523bc159265760c/graphs/sunburst.svg" /></a>

> Our current sunburst graph for contract line coverage from our `develop` branch.

## Publisher Integration Tests

Our custom publisher scripts do all the heavy lifting in deployment. As such, we've got a slew of integration tests that build, deploy and test various scenarios. These are hosted under `test/publish`.

To run the publish tests, ensure you have `anvil` installed and run:

```
npm run test:publish
```

## Deployment Live Tests

Every time we deploy updates to Synthetix, we mutate our `deployment.json` files under `publish/deploys`. This means that all contract addresses, ABI and synths can be loaded without needing any internet connection at all. In order to ensure that our JSON files match the deployed reality on-chain, we run the tests under `test/deployments` to verify, in particular, that our ABIs match those on-chain.

## Fork/Integration Tests

Finally, under the `test/integration` folder are tests which verify integrity of important flows within the system. These tests can be run in either standalone or forked mode--the latter useful in verifying that features will work with existing system settings after a release .This script is used after each deployment to a testnet to ensure health of the system. We also run Etherscan ABI tests to assert what's been verified in Etherscan matches that in our `deployment.json`.

To run the integration tests, ensure you have `anvil` installed and run:

```
npx hardhat test:integration:l1 --build --deploy

# or, for L2 contracts

npx hardhat test:integration:l2 --build --deploy
```

For fork mode, you will need to set your provider URL in `.env`. Then run:
```
npm run fork:mainnet
# In a separate terminal
npx hardhat test:integration:l1 --build --deploy --use-fork

# or, for L2 contracts

npm run fork:ovm
# In a separate terminal
npx hardhat test:integration:l2 --build --deploy --use-fork
```
