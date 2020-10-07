# StakingRewards

## Description

**Source:** [contracts/StakingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint256`
- [SafeERC20](/contracts/source/libraries/SafeERC20) for `IERC20`

### Inheritance Graph

```mermaid
graph TD
    StakingRewards[StakingRewards] --> RewardsDistributionRecipient[RewardsDistributionRecipient]
    StakingRewards[StakingRewards] --> Pausable[Pausable]
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]
    Pausable[Pausable] --> Owned[Owned]

```

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L26)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L23)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L27)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L24)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L30)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L25)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L21)</sub>

**Type:** `contract IERC20`

### `stakingToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L22)</sub>

**Type:** `contract IERC20`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L29)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L37)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _rewardsDistribution, address _rewardsToken, address _stakingToken)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L54)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L72)</sub>

??? example "Details"

    **Signature**

    `earned(address account) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L58)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L62)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L50)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L114)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Provided reward too high)](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L128)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `recoverERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L136)</sub>

??? example "Details"

    **Signature**

    `recoverERC20(address tokenAddress, uint256 tokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot withdraw the staking or rewards tokens)](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L140)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [Recovered](#recovered)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L148)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Previous rewards period must be complete before changing the duration for the new period)](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L149)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

## External Functions

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L107)</sub>

??? example "Details"

    **Signature**

    `exit()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getReward()`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

### `stake`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L82)</sub>

??? example "Details"

    **Signature**

    `stake(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot stake 0)](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L83)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Staked](#staked)

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L90)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot withdraw 0)](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L91)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Modifiers

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L158)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Recovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L175)</sub>

**Signature**: `Recovered(address token, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L170)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L173)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L174)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Staked`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L171)</sub>

**Signature**: `Staked(address user, uint256 amount)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/StakingRewards.sol#L172)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
