# ShortingRewards

## Description

**Source:** [contracts/ShortingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol)

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L29)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L26)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L30)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L27)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L33)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L28)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L25)</sub>

**Type:** `contract IERC20`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L32)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L44)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, address _rewardsDistribution, address _rewardsToken)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L69)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L87)</sub>

??? example "Details"

    **Signature**

    `earned(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L91)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L73)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L54)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L77)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L65)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L98)</sub>

??? example "Details"

    **Signature**

    `enrol(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot stake 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L99)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Enrol](#enrol)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L125)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Provided reward too high")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L139)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L146)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Previous rewards period must be complete before changing the duration for the new period")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L147)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L106)</sub>

??? example "Details"

    **Signature**

    `withdraw(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot withdraw 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L107)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Internal Functions

### `_short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L59)</sub>

??? example "Details"

    **Signature**

    `_short() view returns (contract ICollateralErc20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L114)</sub>

??? example "Details"

    **Signature**

    `getReward(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

## Modifiers

### `onlyShortContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L167)</sub>

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L157)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L176)</sub>

**Signature**: `Enrol(address user, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L175)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L178)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L179)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ShortingRewards.sol#L177)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
