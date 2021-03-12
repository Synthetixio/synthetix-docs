# StakingRewards

## Description

**Source:** [contracts/StakingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol)

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L27)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L24)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L28)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L25)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L31)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L26)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L22)</sub>

**Type:** `contract IERC20`

### `stakingToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L23)</sub>

**Type:** `contract IERC20`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L30)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L38)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _rewardsDistribution, address _rewardsToken, address _stakingToken)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L115)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Provided reward too high")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L129)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `recoverERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L142)</sub>

??? example "Details"

    **Signature**

    `recoverERC20(address tokenAddress, uint256 tokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot withdraw the staking token")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L143)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [Recovered](#recovered)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L148)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Previous rewards period must be complete before changing the duration for the new period")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L149)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

### `updatePeriodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L137)</sub>

??? example "Details"

    **Signature**

    `updatePeriodFinish(uint256 timestamp)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [updateReward](#updatereward)

## External Functions

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L55)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L73)</sub>

??? example "Details"

    **Signature**

    `earned(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L108)</sub>

??? example "Details"

    **Signature**

    `exit()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getReward()`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L77)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L59)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L63)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `stake`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L83)</sub>

??? example "Details"

    **Signature**

    `stake(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot stake 0")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L84)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Staked](#staked)

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L51)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L91)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot withdraw 0")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L92)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Modifiers

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L159)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Recovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L176)</sub>

**Signature**: `Recovered(address token, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L171)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L174)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L175)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Staked`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L172)</sub>

**Signature**: `Staked(address user, uint256 amount)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/StakingRewards.sol#L173)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
