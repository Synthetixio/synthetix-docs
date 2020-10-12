# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L29)</sub>

??? example "Details"

    **Signature**

    `()`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L33)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L92)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L96)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L49)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L64)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L72)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L88)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L59)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L37)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/MixinSystemSettings.sol#L41)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
