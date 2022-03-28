# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol)

## Structs

### `DynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L59)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `threshold`   | `uint256` | TBA         |
| `weightDecay` | `uint256` | TBA         |
| `rounds`      | `uint256` | TBA         |
| `maxFee`      | `uint256` | TBA         |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L66)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L68)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L169)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L237)</sub>

??? example "Details"

    **Signature**

    `getAtomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L245)</sub>

??? example "Details"

    **Signature**

    `getAtomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L229)</sub>

??? example "Details"

    **Signature**

    `getAtomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L253)</sub>

??? example "Details"

    **Signature**

    `getAtomicPriceBuffer(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L233)</sub>

??? example "Details"

    **Signature**

    `getAtomicTwapWindow() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L261)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L269)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L221)</sub>

??? example "Details"

    **Signature**

    `getCollapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L95)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L173)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L185)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L177)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L181)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L153)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeConfig() view returns (struct MixinSystemSettings.DynamicFeeConfig)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L213)</sub>

??? example "Details"

    **Signature**

    `getInteractionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L126)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L134)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L130)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L165)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L107)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L138)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L121)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L103)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L205)</sub>

??? example "Details"

    **Signature**

    `getWrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L189)</sub>

??? example "Details"

    **Signature**

    `getWrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/MixinSystemSettings.sol#L197)</sub>

??? example "Details"

    **Signature**

    `getWrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
