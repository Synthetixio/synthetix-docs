# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L52)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L54)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L63)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L59)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L136)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L220)</sub>

??? example "Details"

    **Signature**

    `getAtomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L228)</sub>

??? example "Details"

    **Signature**

    `getAtomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L212)</sub>

??? example "Details"

    **Signature**

    `getAtomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L236)</sub>

??? example "Details"

    **Signature**

    `getAtomicPriceBuffer(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L216)</sub>

??? example "Details"

    **Signature**

    `getAtomicTwapWindow() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L244)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L252)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L204)</sub>

??? example "Details"

    **Signature**

    `getCollapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L152)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L144)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L148)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L196)</sub>

??? example "Details"

    **Signature**

    `getInteractionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L108)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L112)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L180)</sub>

??? example "Details"

    **Signature**

    `getMinCratio(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getNewCollateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L188)</sub>

??? example "Details"

    **Signature**

    `getNewCollateralManager(address collateral) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L89)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L103)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L81)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L85)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L172)</sub>

??? example "Details"

    **Signature**

    `getWrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `getWrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/MixinSystemSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `getWrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
