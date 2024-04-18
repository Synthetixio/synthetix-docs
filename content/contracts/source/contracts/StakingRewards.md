# StakingRewards

## Description

**Source:** [contracts/StakingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol)

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L25)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L22)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L26)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L23)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L29)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L24)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L20)</sub>

**Type:** `contract IERC20`

### `stakingToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L21)</sub>

**Type:** `contract IERC20`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L28)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _rewardsDistribution, address _rewardsToken, address _stakingToken)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L53)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L71)</sub>

??? example "Details"

    **Signature**

    `earned(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L75)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L57)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L61)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L49)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L113)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Provided reward too high")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L127)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `recoverERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L135)</sub>

??? example "Details"

    **Signature**

    `recoverERC20(address tokenAddress, uint256 tokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot withdraw the staking token")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L136)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [Recovered](#recovered)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L141)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Previous rewards period must be complete before changing the duration for the new period")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L142)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

## External Functions

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L106)</sub>

??? example "Details"

    **Signature**

    `exit()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L97)</sub>

??? example "Details"

    **Signature**

    `getReward()`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

### `stake`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L81)</sub>

??? example "Details"

    **Signature**

    `stake(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot stake 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L82)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Staked](#staked)

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L89)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot withdraw 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L90)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Modifiers

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L152)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Recovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L169)</sub>

**Signature**: `Recovered(address token, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L164)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L167)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L168)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Staked`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L165)</sub>

**Signature**: `Staked(address user, uint256 amount)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/StakingRewards.sol#L166)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
