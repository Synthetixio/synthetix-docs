# ShortingRewards

## Description

**Source:** [contracts/ShortingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol)

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L31)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L28)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L32)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L29)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L35)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L30)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L27)</sub>

**Type:** `contract IERC20`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L34)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L46)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, address _rewardsDistribution, address _rewardsToken)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L100)</sub>

??? example "Details"

    **Signature**

    `enrol(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot stake 0")](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L101)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Enrol](#enrol)

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getReward(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L127)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Provided reward too high")](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L141)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L148)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Previous rewards period must be complete before changing the duration for the new period")](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L149)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L108)</sub>

??? example "Details"

    **Signature**

    `withdraw(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot withdraw 0")](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L109)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Internal Functions

### `_short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L61)</sub>

??? example "Details"

    **Signature**

    `_short() view returns (contract ICollateralErc20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L71)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L89)</sub>

??? example "Details"

    **Signature**

    `earned(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L75)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L56)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L79)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L67)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyShortContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L169)</sub>

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L159)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L178)</sub>

**Signature**: `Enrol(address user, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L177)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L180)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L181)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/ShortingRewards.sol#L179)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
