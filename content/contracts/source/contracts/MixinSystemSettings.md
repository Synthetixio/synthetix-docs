# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L31)</sub>

??? example "Details"

    **Signature**

    `(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L33)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L38)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L105)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L89)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L63)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L58)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L81)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L97)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L85)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L46)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/MixinSystemSettings.sol#L50)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
