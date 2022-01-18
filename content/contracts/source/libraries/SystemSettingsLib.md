# SystemSettingsLib

## Description

**Source:** [contracts/SystemSettingsLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol)

## Variables

### `MAX_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L52)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L56)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLUME_PER_BLOCK`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L48)</sub>

**Type:** `uint256`

### `MAX_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L40)</sub>

**Type:** `uint256`

### `MAX_EXCHANGE_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L35)</sub>

**Type:** `uint256`

### `MAX_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L22)</sub>

**Type:** `uint256`

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L18)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L31)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_PENALTY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L29)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L26)</sub>

**Type:** `uint256`

### `MAX_MINIMUM_STAKE_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L38)</sub>

**Type:** `uint256`

### `MAX_TARGET_THRESHOLD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L24)</sub>

**Type:** `uint256`

### `MAX_WRAPPER_BURN_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L45)</sub>

**Type:** `int256`

### `MAX_WRAPPER_MINT_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L43)</sub>

**Type:** `int256`

### `MIN_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L51)</sub>

**Type:** `uint256`

### `MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L55)</sub>

**Type:** `uint256`

### `MIN_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L41)</sub>

**Type:** `uint256`

### `MIN_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L21)</sub>

**Type:** `uint256`

### `MIN_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L32)</sub>

**Type:** `uint256`

### `RATIO_FROM_TARGET_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L27)</sub>

**Type:** `uint256`

### `SETTINGS_CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L15)</sub>

**Type:** `bytes32`

## Views

### `contractName`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L59)</sub>

??? example "Details"

    **Signature**

    `contractName() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L214)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Valid address must be given")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L219)

### `setAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L346)</sub>

??? example "Details"

    **Signature**

    `setAtomicEquivalentForDexPricing(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, address _equivalent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic equivalent is 0 address")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L352)

### `setAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L360)</sub>

??? example "Details"

    **Signature**

    `setAtomicExchangeFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "MAX_EXCHANGE_FEE_RATE exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L366)

### `setAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L327)</sub>

??? example "Details"

    **Signature**

    `setAtomicMaxVolumePerBlock(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _maxVolume)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic max volume exceed maximum uint192")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L332)

### `setAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L374)</sub>

??? example "Details"

    **Signature**

    `setAtomicPriceBuffer(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _buffer)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L336)</sub>

??? example "Details"

    **Signature**

    `setAtomicTwapWindow(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic twap window under minimum 1 min")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L341)

    * [require(..., "Atomic twap window exceed maximum 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L342)

### `setAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L387)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityConsiderationWindow(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L410)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityUpdateThreshold(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bytes32 _currencyKey, uint256 _threshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L314)</sub>

??? example "Details"

    **Signature**

    `setCollapseFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _collateral, uint256 _collapseFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L63)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(contract IFlexibleStorage flexibleStorage, bytes32 gasLimitSettings, uint256 crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Out of range xDomain gasLimit")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L68)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L206)</sub>

??? example "Details"

    **Signature**

    `setDebtSnapshotStaleTime(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L240)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperBurnFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L245)

### `setEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L223)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMaxETH(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _maxETH)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L231)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMintFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L236)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L180)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(contract IFlexibleStorage flexibleStorage, bytes32 settingExchangeFeeRate, bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array lengths dont match")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L186)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L109)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "value < MIN_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L114)

    * [require(..., "value > MAX_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L115)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L300)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _collateral, uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L306)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L76)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 issuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "New issuance ratio cannot exceed MAX_ISSUANCE_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L81)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L131)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be less than 30 days")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L136)

    * [require(..., "Must be greater than 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L137)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L162)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "penalty > MAX_LIQUIDATION_PENALTY")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L167)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L142)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _liquidationRatio, uint256 getLiquidationPenalty, uint256 getIssuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "liquidationRatio > MAX_LIQUIDATION_RATIO / (1 + penalty)")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L149)

    * [require(..., "liquidationRatio < MIN_LIQUIDATION_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L157)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L197)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "stake time exceed maximum 1 week")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L202)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L101)</sub>

??? example "Details"

    **Signature**

    `setPriceDeviationThresholdFactor(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _priceDeviationThresholdFactor)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L172)</sub>

??? example "Details"

    **Signature**

    `setRateStalePeriod(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 period)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L120)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _percent) returns (uint256 targetThreshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Threshold too high")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L125)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L85)</sub>

??? example "Details"

    **Signature**

    `setTradingRewardsEnabled(contract IFlexibleStorage flexibleStorage, bytes32 settingName, bool _tradingRewardsEnabled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L93)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(contract IFlexibleStorage flexibleStorage, bytes32 settingName, uint256 _waitingPeriodSecs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L281)</sub>

??? example "Details"

    **Signature**

    `setWrapperBurnFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, int256 _rate, int256 getWrapperMintFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L288)

    * [require(..., "rate < -MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L289)

### `setWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L249)</sub>

??? example "Details"

    **Signature**

    `setWrapperMaxTokenAmount(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, uint256 _maxTokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L262)</sub>

??? example "Details"

    **Signature**

    `setWrapperMintFeeRate(contract IFlexibleStorage flexibleStorage, bytes32 settingName, address _wrapper, int256 _rate, int256 getWrapperBurnFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L269)

    * [require(..., "rate < -MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/SystemSettingsLib.sol#L270)
