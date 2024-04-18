# LiquidatorRewards

## Description

**Source:** [contracts/LiquidatorRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol)

## Structs

### `AccountRewardsEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L29)</sub>

| Field                     | Type      | Description |
| ------------------------- | --------- | ----------- |
| `claimable`               | `uint128` | TBA         |
| `entryAccumulatedRewards` | `uint128` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L41)</sub>

**Type:** `bytes32`

### `accumulatedRewardsPerShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L36)</sub>

**Type:** `uint256`

### `entries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L38)</sub>

**Type:** `mapping(address => struct LiquidatorRewards.AccountRewardsEntry)`

### `initiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L39)</sub>

**Type:** `mapping(address => bool)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L52)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `earned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L82)</sub>

??? example "Details"

    **Signature**

    `earned(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L56)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L120)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

## Internal Functions

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L70)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L74)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L78)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L66)</sub>

??? example "Details"

    **Signature**

    `synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getReward(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [nonReentrant](#nonreentrant)

### `updateEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L107)</sub>

??? example "Details"

    **Signature**

    `updateEntry(address account)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L130)</sub>

## Events

### `RewardPaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/LiquidatorRewards.sol#L138)</sub>

**Signature**: `RewardPaid(address user, uint256 reward)`
