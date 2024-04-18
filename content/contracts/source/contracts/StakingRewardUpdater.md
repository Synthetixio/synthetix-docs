# StakingRewardUpdater

## Description

**Source:** [contracts/migrations/StakingRewardUpdater.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol)

## Variables

### `deployer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol#L6)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol#L8)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## External Functions

### `execute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol#L15)</sub>

??? example "Details"

    **Signature**

    `execute(contract StakingRewards[] rewardContracts, uint256 rewardsPerContract, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the deployer can invoke this")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol#L20)

### `returnFunds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/StakingRewardUpdater.sol#L51)</sub>

??? example "Details"

    **Signature**

    `returnFunds(contract IERC20 token)`

    **Visibility**

    `external`

    **State Mutability**

    ``
