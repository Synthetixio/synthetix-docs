# ShortingRewards

## Description

**Source:** [contracts/ShortingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint256`
- [SafeERC20](/contracts/source/libraries/SafeERC20) for `IERC20`

### Inheritance Graph

```mermaid
graph TD
    ShortingRewards[ShortingRewards] --> RewardsDistributionRecipient[RewardsDistributionRecipient]
    ShortingRewards[ShortingRewards] --> Pausable[Pausable]
    ShortingRewards[ShortingRewards] --> MixinResolver[MixinResolver]
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]
    Pausable[Pausable] --> Owned[Owned]

```

## Variables

### `lastUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L33)</sub>

**Type:** `uint256`

### `periodFinish`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L30)</sub>

**Type:** `uint256`

### `rewardPerTokenStored`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L34)</sub>

**Type:** `uint256`

### `rewardRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L31)</sub>

**Type:** `uint256`

### `rewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L37)</sub>

**Type:** `mapping(address => uint256)`

### `rewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L32)</sub>

**Type:** `uint256`

### `rewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L27)</sub>

**Type:** `contract IERC20`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L28)</sub>

**Type:** `contract ICollateralErc20`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L29)</sub>

**Type:** `bytes32`

### `userRewardPerTokenPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L36)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L48)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver, address _rewardsDistribution, address _rewardsToken, address _short, bytes32 _synth)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L77)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L95)</sub>

??? example "Details"

    **Signature**

    `earned(address account) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRewardForDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getRewardForDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastTimeRewardApplicable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L81)</sub>

??? example "Details"

    **Signature**

    `lastTimeRewardApplicable() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L62)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `rewardPerToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L85)</sub>

??? example "Details"

    **Signature**

    `rewardPerToken() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L73)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L106)</sub>

??? example "Details"

    **Signature**

    `enrol(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot stake 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L107)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

    * [updateReward](#updatereward)

    **Emits**

    * [Enrol](#enrol)

### `exit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L129)</sub>

??? example "Details"

    **Signature**

    `exit(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L136)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Provided reward too high)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L150)

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    * [updateReward](#updatereward)

    **Emits**

    * [RewardAdded](#rewardadded)

### `setRewardsDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L157)</sub>

??? example "Details"

    **Signature**

    `setRewardsDuration(uint256 _rewardsDuration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Previous rewards period must be complete before changing the duration for the new period)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L158)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardsDurationUpdated](#rewardsdurationupdated)

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L113)</sub>

??? example "Details"

    **Signature**

    `withdraw(address account, uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot withdraw 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L114)

    **Modifiers**

    * [onlyShortContract](#onlyshortcontract)

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

    **Emits**

    * [Withdrawn](#withdrawn)

## Internal Functions

### `_short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L67)</sub>

??? example "Details"

    **Signature**

    `_short() returns (contract ICollateralErc20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getReward(address account)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [updateReward](#updatereward)

## Modifiers

### `onlyShortContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L178)</sub>

### `updateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L168)</sub>

**Signature**: `updateReward(address account)`

## Events

### `Enrol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L186)</sub>

**Signature**: `Enrol(address user, uint256 amount)`

### `Recovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L190)</sub>

**Signature**: `Recovered(address token, uint256 amount)`

### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L185)</sub>

**Signature**: `RewardAdded(uint256 reward)`

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L188)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`

### `RewardsDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L189)</sub>

**Signature**: `RewardsDurationUpdated(uint256 newDuration)`

### `Withdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/ShortingRewards.sol#L187)</sub>

**Signature**: `Withdrawn(address user, uint256 amount)`
