# ITradingRewards

## Description

**Source:** [contracts/interfaces/ITradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol)

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L39)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L41)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L47)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L30)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L32)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) view returns (uint256 totalRewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L16)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L26)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L14)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L20)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L22)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L24)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L12)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L10)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L45)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L53)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L49)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L51)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/interfaces/ITradingRewards.sol#L55)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
