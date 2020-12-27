# ITradingRewards

## Description

**Source:** [contracts/interfaces/ITradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol)

## Views

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L30)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L32)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L16)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L26)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L14)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L20)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L22)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L24)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L12)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L10)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L39)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L41)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L47)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L45)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L53)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L49)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L51)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/ITradingRewards.sol#L55)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
