# SystemSettings

## Description

**Source:** [contracts/SystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol)

## Variables

### `MAX_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L42)</sub>

**Type:** `uint256`

### `MAX_EXCHANGE_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L37)</sub>

**Type:** `uint256`

### `MAX_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L23)</sub>

**Type:** `uint256`

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L19)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L33)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_PENALTY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L29)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L27)</sub>

**Type:** `uint256`

### `MAX_MINIMUM_STAKE_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L40)</sub>

**Type:** `uint256`

### `MAX_TARGET_THRESHOLD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L25)</sub>

**Type:** `uint256`

### `MIN_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L43)</sub>

**Type:** `uint256`

### `MIN_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L22)</sub>

**Type:** `uint256`

### `MIN_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L34)</sub>

**Type:** `uint256`

### `RATIO_FROM_TARGET_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L31)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L263)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Valid address must be given")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L264)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorWarningFlagsUpdated](#aggregatorwarningflagsupdated)

### `setCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L134)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits _gasLimitType, uint256 _crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Out of range xDomain gasLimit")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L138)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CrossDomainMessageGasLimitChanged](#crossdomainmessagegaslimitchanged)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L258)</sub>

??? example "Details"

    **Signature**

    `setDebtSnapshotStaleTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [DebtSnapshotStaleTimeUpdated](#debtsnapshotstaletimeupdated)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L236)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Array lengths dont match")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L240)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L176)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "value < MIN_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L177)

    * [require(..., "value > MAX_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L178)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePeriodDurationUpdated](#feeperioddurationupdated)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L170)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 _issuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "New issuance ratio cannot exceed MAX_ISSUANCE_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L171)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L195)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be less than 30 days")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L196)

    * [require(..., "Must be greater than 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L197)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationDelayUpdated](#liquidationdelayupdated)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L222)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "penalty > MAX_LIQUIDATION_PENALTY")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L223)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationPenaltyUpdated](#liquidationpenaltyupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L206)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "liquidationRatio > MAX_LIQUIDATION_RATIO / (1 + penalty)")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L207)

    * [require(..., "liquidationRatio < MIN_LIQUIDATION_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L215)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L252)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "stake time exceed maximum 1 week")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L253)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L161)</sub>

??? example "Details"

    **Signature**

    `setPriceDeviationThresholdFactor(uint256 _priceDeviationThresholdFactor)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PriceDeviationThresholdUpdated](#pricedeviationthresholdupdated)

### `setRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L230)</sub>

??? example "Details"

    **Signature**

    `setRateStalePeriod(uint256 period)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RateStalePeriodUpdated](#ratestaleperiodupdated)

### `setTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L185)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(uint256 _percent)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Threshold too high")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L186)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetThresholdUpdated](#targetthresholdupdated)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L151)</sub>

??? example "Details"

    **Signature**

    `setTradingRewardsEnabled(bool _tradingRewardsEnabled)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TradingRewardsEnabled](#tradingrewardsenabled)

### `setWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(uint256 _waitingPeriodSecs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WaitingPeriodSecsUpdated](#waitingperiodsecsupdated)

## External Functions

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L118)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `crossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L128)</sub>

??? example "Details"

    **Signature**

    `crossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L114)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L106)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L65)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L84)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L97)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L91)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L110)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L59)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L102)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L78)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L124)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L52)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Events

### `AggregatorWarningFlagsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L284)</sub>

**Signature**: `AggregatorWarningFlagsUpdated(address flags)`

### `CrossDomainMessageGasLimitChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L270)</sub>

**Signature**: `CrossDomainMessageGasLimitChanged(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType, uint256 newLimit)`

### `DebtSnapshotStaleTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L283)</sub>

**Signature**: `DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)`

### `ExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L281)</sub>

**Signature**: `ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `FeePeriodDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L275)</sub>

**Signature**: `FeePeriodDurationUpdated(uint256 newFeePeriodDuration)`

### `IssuanceRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L274)</sub>

**Signature**: `IssuanceRatioUpdated(uint256 newRatio)`

### `LiquidationDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L277)</sub>

**Signature**: `LiquidationDelayUpdated(uint256 newDelay)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L279)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 newPenalty)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L278)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 newRatio)`

### `MinimumStakeTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L282)</sub>

**Signature**: `MinimumStakeTimeUpdated(uint256 minimumStakeTime)`

### `PriceDeviationThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L273)</sub>

**Signature**: `PriceDeviationThresholdUpdated(uint256 threshold)`

### `RateStalePeriodUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L280)</sub>

**Signature**: `RateStalePeriodUpdated(uint256 rateStalePeriod)`

### `TargetThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L276)</sub>

**Signature**: `TargetThresholdUpdated(uint256 newTargetThreshold)`

### `TradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L271)</sub>

**Signature**: `TradingRewardsEnabled(bool enabled)`

### `WaitingPeriodSecsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SystemSettings.sol#L272)</sub>

**Signature**: `WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)`
