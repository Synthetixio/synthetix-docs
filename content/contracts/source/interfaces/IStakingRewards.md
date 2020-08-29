# IStakingRewards

## Description

**Source:** [contracts/interfaces/IStakingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L16)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L10)</sub>

??? example "Details"

    **Signature**

    `earned(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L12)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L6)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L8)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L26)</sub>

??? example "Details"

    **Signature**

    `exit()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L24)</sub>

??? example "Details"

    **Signature**

    `getReward()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `stake`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L20)</sub>

??? example "Details"

    **Signature**

    `stake(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.2-beta/contracts/interfaces/IStakingRewards.sol#L22)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
