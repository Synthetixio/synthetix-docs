# SystemSettingsLib

## Description

**Source:** [contracts/SystemSettingsLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol)

## Variables

### `MAX_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L54)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L58)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLUME_PER_BLOCK`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L50)</sub>

**Type:** `uint256`

### `MAX_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L42)</sub>

**Type:** `uint256`

### `MAX_EXCHANGE_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L37)</sub>

**Type:** `uint256`

### `MAX_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L24)</sub>

**Type:** `uint256`

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L20)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L33)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_PENALTY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L31)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L28)</sub>

**Type:** `uint256`

### `MAX_MINIMUM_STAKE_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L40)</sub>

**Type:** `uint256`

### `MAX_TARGET_THRESHOLD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L26)</sub>

**Type:** `uint256`

### `MAX_WRAPPER_BURN_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L47)</sub>

**Type:** `int256`

### `MAX_WRAPPER_MINT_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L45)</sub>

**Type:** `int256`

### `MIN_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L53)</sub>

**Type:** `uint256`

### `MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L57)</sub>

**Type:** `uint256`

### `MIN_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L43)</sub>

**Type:** `uint256`

### `MIN_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L23)</sub>

**Type:** `uint256`

### `MIN_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L34)</sub>

**Type:** `uint256`

### `RATIO_FROM_TARGET_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L29)</sub>

**Type:** `uint256`

### `SETTINGS_CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L17)</sub>

**Type:** `bytes32`

## Views

### `contractName`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L61)</sub>

??? example "Details"

    **Signature**

    `contractName() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L216)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Valid address must be given")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L221)

### `setAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L348)</sub>

??? example "Details"

    **Signature**

    `setAtomicEquivalentForDexPricing(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, address _equivalent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic equivalent is 0 address")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L354)

### `setAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L362)</sub>

??? example "Details"

    **Signature**

    `setAtomicExchangeFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "MAX_EXCHANGE_FEE_RATE exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L368)

### `setAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L329)</sub>

??? example "Details"

    **Signature**

    `setAtomicMaxVolumePerBlock(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _maxVolume)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic max volume exceed maximum uint192")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L334)

### `setAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L376)</sub>

??? example "Details"

    **Signature**

    `setAtomicPriceBuffer(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _buffer)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L338)</sub>

??? example "Details"

    **Signature**

    `setAtomicTwapWindow(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic twap window under minimum 1 min")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L343)

    * [require(..., "Atomic twap window exceed maximum 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L344)

### `setAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L389)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityConsiderationWindow(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L412)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityUpdateThreshold(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _threshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L316)</sub>

??? example "Details"

    **Signature**

    `setCollapseFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _collateral, uint256 _collapseFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L65)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(contract IFlexibleStorage flexibleStorage, bytes32 gasLimitSettings, uint256 crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Out of range xDomain gasLimit")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L70)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L208)</sub>

??? example "Details"

    **Signature**

    `setDebtSnapshotStaleTime(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L242)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperBurnFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L247)

### `setEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L225)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMaxETH(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _maxETH)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L233)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMintFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L238)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L182)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(contract IFlexibleStorage flexibleStorage, bytes32 settingExchangeFeeRate, bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array lengths dont match")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L188)

### `setExchangeMaxDynamicFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L425)</sub>

??? example "Details"

    **Signature**

    `setExchangeMaxDynamicFee(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 maxFee)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max dynamic fee cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L430)

    * [require(..., "MAX_EXCHANGE_FEE_RATE exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L431)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L111)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "value < MIN_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L116)

    * [require(..., "value > MAX_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L117)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L302)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _collateral, uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L308)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L78)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "New issuance ratio cannot exceed MAX_ISSUANCE_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L83)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L133)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be less than 30 days")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L138)

    * [require(..., "Must be greater than 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L139)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L164)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "penalty > MAX_LIQUIDATION_PENALTY")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L169)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L144)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _liquidationRatio, uint256 getLiquidationPenalty, uint256 getIssuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "liquidationRatio > MAX_LIQUIDATION_RATIO / (1 + penalty)")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L151)

    * [require(..., "liquidationRatio < MIN_LIQUIDATION_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L159)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L199)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "stake time exceed maximum 1 week")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L204)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L103)</sub>

??? example "Details"

    **Signature**

    `setPriceDeviationThresholdFactor(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _priceDeviationThresholdFactor)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L174)</sub>

??? example "Details"

    **Signature**

    `setRateStalePeriod(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 period)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L122)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 percent) returns (uint256 threshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Threshold too high")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L127)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L87)</sub>

??? example "Details"

    **Signature**

    `setTradingRewardsEnabled(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bool _tradingRewardsEnabled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L95)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _waitingPeriodSecs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L283)</sub>

??? example "Details"

    **Signature**

    `setWrapperBurnFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, int256 _rate, int256 getWrapperMintFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L290)

    * [require(..., "rate < -MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L291)

### `setWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L251)</sub>

??? example "Details"

    **Signature**

    `setWrapperMaxTokenAmount(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, uint256 _maxTokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L264)</sub>

??? example "Details"

    **Signature**

    `setWrapperMintFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, int256 _rate, int256 getWrapperBurnFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L271)

    * [require(..., "rate < -MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/SystemSettingsLib.sol#L272)
