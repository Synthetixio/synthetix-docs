# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L27)</sub>

??? example "Details"

    **Signature**

    `()`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L31)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L86)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L74)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L48)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L43)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L58)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L66)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L62)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L82)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L39)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L70)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L53)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/MixinSystemSettings.sol#L35)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
