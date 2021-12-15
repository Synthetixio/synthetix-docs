# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L53)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L55)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L64)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L60)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L139)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L223)</sub>

??? example "Details"

    **Signature**

    `getAtomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L231)</sub>

??? example "Details"

    **Signature**

    `getAtomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L215)</sub>

??? example "Details"

    **Signature**

    `getAtomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L239)</sub>

??? example "Details"

    **Signature**

    `getAtomicPriceBuffer(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L219)</sub>

??? example "Details"

    **Signature**

    `getAtomicTwapWindow() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L247)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L255)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L207)</sub>

??? example "Details"

    **Signature**

    `getCollapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L155)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L147)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L151)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L127)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L199)</sub>

??? example "Details"

    **Signature**

    `getInteractionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L96)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L115)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L183)</sub>

??? example "Details"

    **Signature**

    `getMinCratio(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L135)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getNewCollateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L191)</sub>

??? example "Details"

    **Signature**

    `getNewCollateralManager(address collateral) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L92)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L123)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L84)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L88)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L175)</sub>

??? example "Details"

    **Signature**

    `getWrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L159)</sub>

??? example "Details"

    **Signature**

    `getWrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.56.1-alpha/contracts/MixinSystemSettings.sol#L167)</sub>

??? example "Details"

    **Signature**

    `getWrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
