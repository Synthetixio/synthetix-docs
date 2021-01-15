# IShortingRewards

## Description

**Source:** [contracts/interfaces/IShortingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L17)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L11)</sub>

??? example "Details"

    **Signature**

    `earned(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L13)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L7)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L9)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L21)</sub>

??? example "Details"

    **Signature**

    `enrol(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L27)</sub>

??? example "Details"

    **Signature**

    `exit(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L25)</sub>

??? example "Details"

    **Signature**

    `getReward(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IShortingRewards.sol#L23)</sub>

??? example "Details"

    **Signature**

    `withdraw(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
