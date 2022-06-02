# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol)

## Structs

### `DynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L64)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `threshold`   | `uint256` | TBA         |
| `weightDecay` | `uint256` | TBA         |
| `rounds`      | `uint256` | TBA         |
| `maxFee`      | `uint256` | TBA         |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L71)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L82)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L78)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L190)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L258)</sub>

??? example "Details"

    **Signature**

    `getAtomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L266)</sub>

??? example "Details"

    **Signature**

    `getAtomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L250)</sub>

??? example "Details"

    **Signature**

    `getAtomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L254)</sub>

??? example "Details"

    **Signature**

    `getAtomicTwapWindow() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L274)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L282)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L242)</sub>

??? example "Details"

    **Signature**

    `getCollapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossChainSynthTransferEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L298)</sub>

??? example "Details"

    **Signature**

    `getCrossChainSynthTransferEnabled(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L100)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L194)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L206)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L198)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L202)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L174)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeConfig() view returns (struct MixinSystemSettings.DynamicFeeConfig)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L121)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFlagReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L151)</sub>

??? example "Details"

    **Signature**

    `getFlagReward() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L234)</sub>

??? example "Details"

    **Signature**

    `getInteractionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L155)</sub>

??? example "Details"

    **Signature**

    `getLiquidateReward() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L131)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L139)</sub>

??? example "Details"

    **Signature**

    `getLiquidationEscrowDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L135)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L186)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L112)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPureChainlinkPriceForAtomicSwapsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L290)</sub>

??? example "Details"

    **Signature**

    `getPureChainlinkPriceForAtomicSwapsEnabled(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L159)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getSelfLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L147)</sub>

??? example "Details"

    **Signature**

    `getSelfLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L126)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L104)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L108)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L226)</sub>

??? example "Details"

    **Signature**

    `getWrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L210)</sub>

??? example "Details"

    **Signature**

    `getWrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/MixinSystemSettings.sol#L218)</sub>

??? example "Details"

    **Signature**

    `getWrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
