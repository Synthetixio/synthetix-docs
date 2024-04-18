# MixinSystemSettings

## Description

**Source:** [contracts/MixinSystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol)

## Structs

### `DynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L65)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `threshold`   | `uint256` | TBA         |
| `weightDecay` | `uint256` | TBA         |
| `rounds`      | `uint256` | TBA         |
| `maxFee`      | `uint256` | TBA         |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L72)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L74)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_getGasLimitSetting`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L83)</sub>

??? example "Details"

    **Signature**

    `_getGasLimitSetting(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L79)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L195)</sub>

??? example "Details"

    **Signature**

    `getAggregatorWarningFlags() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L263)</sub>

??? example "Details"

    **Signature**

    `getAtomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L271)</sub>

??? example "Details"

    **Signature**

    `getAtomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L255)</sub>

??? example "Details"

    **Signature**

    `getAtomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L259)</sub>

??? example "Details"

    **Signature**

    `getAtomicTwapWindow() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L279)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L287)</sub>

??? example "Details"

    **Signature**

    `getAtomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L247)</sub>

??? example "Details"

    **Signature**

    `getCollapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossChainSynthTransferEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L303)</sub>

??? example "Details"

    **Signature**

    `getCrossChainSynthTransferEnabled(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `getCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L199)</sub>

??? example "Details"

    **Signature**

    `getDebtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L211)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L203)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L207)</sub>

??? example "Details"

    **Signature**

    `getEtherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeConfig`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L179)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeConfig() view returns (struct MixinSystemSettings.DynamicFeeConfig)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L315)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeRounds() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L319)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeDynamicFeeWeightDecay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L323)</sub>

??? example "Details"

    **Signature**

    `getExchangeDynamicFeeWeightDecay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L169)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getExchangeMaxDynamicFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L311)</sub>

??? example "Details"

    **Signature**

    `getExchangeMaxDynamicFee() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L122)</sub>

??? example "Details"

    **Signature**

    `getFeePeriodDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFlagReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `getFlagReward() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L239)</sub>

??? example "Details"

    **Signature**

    `getInteractionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L117)</sub>

??? example "Details"

    **Signature**

    `getIssuanceRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L160)</sub>

??? example "Details"

    **Signature**

    `getLiquidateReward() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDelay() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `getLiquidationEscrowDuration() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L144)</sub>

??? example "Details"

    **Signature**

    `getLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L136)</sub>

??? example "Details"

    **Signature**

    `getLiquidationRatio() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L191)</sub>

??? example "Details"

    **Signature**

    `getMinimumStakeTime() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L113)</sub>

??? example "Details"

    **Signature**

    `getPriceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPureChainlinkPriceForAtomicSwapsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L295)</sub>

??? example "Details"

    **Signature**

    `getPureChainlinkPriceForAtomicSwapsEnabled(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `getRateStalePeriod() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getSelfLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L152)</sub>

??? example "Details"

    **Signature**

    `getSelfLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getSnxLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L148)</sub>

??? example "Details"

    **Signature**

    `getSnxLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L127)</sub>

??? example "Details"

    **Signature**

    `getTargetThreshold() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L105)</sub>

??? example "Details"

    **Signature**

    `getTradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L109)</sub>

??? example "Details"

    **Signature**

    `getWaitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L231)</sub>

??? example "Details"

    **Signature**

    `getWrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L215)</sub>

??? example "Details"

    **Signature**

    `getWrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinSystemSettings.sol#L223)</sub>

??? example "Details"

    **Signature**

    `getWrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
