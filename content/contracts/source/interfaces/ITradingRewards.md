# ITradingRewards

## Description

**Source:** [contracts/interfaces/ITradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol)

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L38)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L40)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L46)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L7)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L29)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L31)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) view returns (uint256 totalRewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L15)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L25)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L13)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L17)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L21)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L23)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L11)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L27)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L9)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L44)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L52)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L48)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L50)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ITradingRewards.sol#L54)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
