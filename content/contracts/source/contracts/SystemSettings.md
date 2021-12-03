# SystemSettings

## Description

**Source:** [contracts/SystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L17)</sub>

**Type:** `bytes32`

### `MAX_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L54)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L58)</sub>

**Type:** `uint256`

### `MAX_ATOMIC_VOLUME_PER_BLOCK`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L50)</sub>

**Type:** `uint256`

### `MAX_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L43)</sub>

**Type:** `uint256`

### `MAX_EXCHANGE_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L38)</sub>

**Type:** `uint256`

### `MAX_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L24)</sub>

**Type:** `uint256`

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L20)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L34)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_PENALTY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L30)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L28)</sub>

**Type:** `uint256`

### `MAX_MINIMUM_STAKE_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L41)</sub>

**Type:** `uint256`

### `MAX_TARGET_THRESHOLD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L26)</sub>

**Type:** `uint256`

### `MAX_WRAPPER_BURN_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L47)</sub>

**Type:** `int256`

### `MAX_WRAPPER_MINT_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L46)</sub>

**Type:** `int256`

### `MIN_ATOMIC_TWAP_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L53)</sub>

**Type:** `uint256`

### `MIN_ATOMIC_VOLATILITY_CONSIDERATION_WINDOW`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L57)</sub>

**Type:** `uint256`

### `MIN_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L44)</sub>

**Type:** `uint256`

### `MIN_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L23)</sub>

**Type:** `uint256`

### `MIN_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L35)</sub>

**Type:** `uint256`

### `RATIO_FROM_TARGET_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L32)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L60)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L133)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L213)</sub>

??? example "Details"

    **Signature**

    `atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L219)</sub>

??? example "Details"

    **Signature**

    `atomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L201)</sub>

??? example "Details"

    **Signature**

    `atomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L225)</sub>

??? example "Details"

    **Signature**

    `atomicPriceBuffer(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L207)</sub>

??? example "Details"

    **Signature**

    `atomicTwapWindow() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L231)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L237)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L195)</sub>

??? example "Details"

    **Signature**

    `collapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L187)</sub>

??? example "Details"

    **Signature**

    `collateralManager(address collateral) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `crossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `crossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L129)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L161)</sub>

??? example "Details"

    **Signature**

    `etherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L149)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L155)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L121)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L88)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L191)</sub>

??? example "Details"

    **Signature**

    `interactionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L99)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L112)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L106)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L183)</sub>

??? example "Details"

    **Signature**

    `minCratio(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L125)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L74)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L117)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L93)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L139)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L67)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L179)</sub>

??? example "Details"

    **Signature**

    `wrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L167)</sub>

??? example "Details"

    **Signature**

    `wrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L173)</sub>

??? example "Details"

    **Signature**

    `wrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L372)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Valid address must be given")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L373)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorWarningFlagsUpdated](#aggregatorwarningflagsupdated)

### `setAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L491)</sub>

??? example "Details"

    **Signature**

    `setAtomicEquivalentForDexPricing(bytes32 _currencyKey, address _equivalent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic equivalent is 0 address")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L492)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicEquivalentForDexPricingUpdated](#atomicequivalentfordexpricingupdated)

### `setAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L501)</sub>

??? example "Details"

    **Signature**

    `setAtomicExchangeFeeRate(bytes32 _currencyKey, uint256 _exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "MAX_EXCHANGE_FEE_RATE exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L502)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicExchangeFeeUpdated](#atomicexchangefeeupdated)

### `setAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L478)</sub>

??? example "Details"

    **Signature**

    `setAtomicMaxVolumePerBlock(uint256 _maxVolume)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic max volume exceed maximum uint192")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L479)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicMaxVolumePerBlockUpdated](#atomicmaxvolumeperblockupdated)

### `setAtomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L511)</sub>

??? example "Details"

    **Signature**

    `setAtomicPriceBuffer(bytes32 _currencyKey, uint256 _buffer)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicPriceBufferUpdated](#atomicpricebufferupdated)

### `setAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L484)</sub>

??? example "Details"

    **Signature**

    `setAtomicTwapWindow(uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Atomic twap window under minimum 1 min")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L485)

    * [require(..., "Atomic twap window exceed maximum 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L486)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicTwapWindowUpdated](#atomictwapwindowupdated)

### `setAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L520)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityConsiderationWindow(bytes32 _currencyKey, uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicVolatilityConsiderationWindowUpdated](#atomicvolatilityconsiderationwindowupdated)

### `setAtomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L539)</sub>

??? example "Details"

    **Signature**

    `setAtomicVolatilityUpdateThreshold(bytes32 _currencyKey, uint256 _threshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicVolatilityUpdateThresholdUpdated](#atomicvolatilityupdatethresholdupdated)

### `setCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L469)</sub>

??? example "Details"

    **Signature**

    `setCollapseFeeRate(address _collateral, uint256 _collapseFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollapseFeeRateUpdated](#collapsefeerateupdated)

### `setCollateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L450)</sub>

??? example "Details"

    **Signature**

    `setCollateralManager(address _collateral, address _newCollateralManager)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralManagerUpdated](#collateralmanagerupdated)

### `setCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L243)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits _gasLimitType, uint256 _crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Out of range xDomain gasLimit")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L247)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CrossDomainMessageGasLimitChanged](#crossdomainmessagegaslimitchanged)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L367)</sub>

??? example "Details"

    **Signature**

    `setDebtSnapshotStaleTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [DebtSnapshotStaleTimeUpdated](#debtsnapshotstaletimeupdated)

### `setEtherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L389)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperBurnFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L390)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperBurnFeeRateUpdated](#etherwrapperburnfeerateupdated)

### `setEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L378)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMaxETH(uint256 _maxETH)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperMaxETHUpdated](#etherwrappermaxethupdated)

### `setEtherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L383)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMintFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L384)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperMintFeeRateUpdated](#etherwrappermintfeerateupdated)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L345)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array lengths dont match")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L349)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L285)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "value < MIN_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L286)

    * [require(..., "value > MAX_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L287)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePeriodDurationUpdated](#feeperioddurationupdated)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L459)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(address _collateral, uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L460)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L279)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 _issuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "New issuance ratio cannot exceed MAX_ISSUANCE_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L280)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L304)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be less than 30 days")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L305)

    * [require(..., "Must be greater than 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L306)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationDelayUpdated](#liquidationdelayupdated)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L331)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "penalty > MAX_LIQUIDATION_PENALTY")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L332)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationPenaltyUpdated](#liquidationpenaltyupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L315)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "liquidationRatio > MAX_LIQUIDATION_RATIO / (1 + penalty)")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L316)

    * [require(..., "liquidationRatio < MIN_LIQUIDATION_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L324)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L440)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(address _collateral, uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cratio must be above 1")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L441)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L361)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "stake time exceed maximum 1 week")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L362)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L270)</sub>

??? example "Details"

    **Signature**

    `setPriceDeviationThresholdFactor(uint256 _priceDeviationThresholdFactor)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PriceDeviationThresholdUpdated](#pricedeviationthresholdupdated)

### `setRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L339)</sub>

??? example "Details"

    **Signature**

    `setRateStalePeriod(uint256 period)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RateStalePeriodUpdated](#ratestaleperiodupdated)

### `setTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L294)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(uint256 _percent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Threshold too high")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L295)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetThresholdUpdated](#targetthresholdupdated)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L260)</sub>

??? example "Details"

    **Signature**

    `setTradingRewardsEnabled(bool _tradingRewardsEnabled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TradingRewardsEnabled](#tradingrewardsenabled)

### `setWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L265)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(uint256 _waitingPeriodSecs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WaitingPeriodSecsUpdated](#waitingperiodsecsupdated)

### `setWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L422)</sub>

??? example "Details"

    **Signature**

    `setWrapperBurnFeeRate(address _wrapper, int256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L423)

    * [require(..., "rate < -MAX_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L424)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperBurnFeeRateUpdated](#wrapperburnfeerateupdated)

### `setWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L395)</sub>

??? example "Details"

    **Signature**

    `setWrapperMaxTokenAmount(address _wrapper, uint256 _maxTokenAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperMaxTokenAmountUpdated](#wrappermaxtokenamountupdated)

### `setWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L404)</sub>

??? example "Details"

    **Signature**

    `setWrapperMintFeeRate(address _wrapper, int256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L405)

    * [require(..., "rate < -MAX_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L406)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperMintFeeRateUpdated](#wrappermintfeerateupdated)

## Events

### `AggregatorWarningFlagsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L563)</sub>

**Signature**: `AggregatorWarningFlagsUpdated(address flags)`

### `AtomicEquivalentForDexPricingUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L576)</sub>

**Signature**: `AtomicEquivalentForDexPricingUpdated(bytes32 synthKey, address equivalent)`

### `AtomicExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L577)</sub>

**Signature**: `AtomicExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `AtomicMaxVolumePerBlockUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L574)</sub>

**Signature**: `AtomicMaxVolumePerBlockUpdated(uint256 newMaxVolume)`

### `AtomicPriceBufferUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L578)</sub>

**Signature**: `AtomicPriceBufferUpdated(bytes32 synthKey, uint256 newBuffer)`

### `AtomicTwapWindowUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L575)</sub>

**Signature**: `AtomicTwapWindowUpdated(uint256 newWindow)`

### `AtomicVolatilityConsiderationWindowUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L579)</sub>

**Signature**: `AtomicVolatilityConsiderationWindowUpdated(bytes32 synthKey, uint256 newVolatilityConsiderationWindow)`

### `AtomicVolatilityUpdateThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L580)</sub>

**Signature**: `AtomicVolatilityUpdateThresholdUpdated(bytes32 synthKey, uint256 newVolatilityUpdateThreshold)`

### `CollapseFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L573)</sub>

**Signature**: `CollapseFeeRateUpdated(uint256 collapseFeeRate)`

### `CollateralManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L571)</sub>

**Signature**: `CollateralManagerUpdated(address newCollateralManager)`

### `CrossDomainMessageGasLimitChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L549)</sub>

**Signature**: `CrossDomainMessageGasLimitChanged(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType, uint256 newLimit)`

### `DebtSnapshotStaleTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L562)</sub>

**Signature**: `DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)`

### `EtherWrapperBurnFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L566)</sub>

**Signature**: `EtherWrapperBurnFeeRateUpdated(uint256 rate)`

### `EtherWrapperMaxETHUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L564)</sub>

**Signature**: `EtherWrapperMaxETHUpdated(uint256 maxETH)`

### `EtherWrapperMintFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L565)</sub>

**Signature**: `EtherWrapperMintFeeRateUpdated(uint256 rate)`

### `ExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L560)</sub>

**Signature**: `ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `FeePeriodDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L554)</sub>

**Signature**: `FeePeriodDurationUpdated(uint256 newFeePeriodDuration)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L572)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssuanceRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L553)</sub>

**Signature**: `IssuanceRatioUpdated(uint256 newRatio)`

### `LiquidationDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L556)</sub>

**Signature**: `LiquidationDelayUpdated(uint256 newDelay)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L558)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 newPenalty)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L557)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 newRatio)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L570)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`

### `MinimumStakeTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L561)</sub>

**Signature**: `MinimumStakeTimeUpdated(uint256 minimumStakeTime)`

### `PriceDeviationThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L552)</sub>

**Signature**: `PriceDeviationThresholdUpdated(uint256 threshold)`

### `RateStalePeriodUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L559)</sub>

**Signature**: `RateStalePeriodUpdated(uint256 rateStalePeriod)`

### `TargetThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L555)</sub>

**Signature**: `TargetThresholdUpdated(uint256 newTargetThreshold)`

### `TradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L550)</sub>

**Signature**: `TradingRewardsEnabled(bool enabled)`

### `WaitingPeriodSecsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L551)</sub>

**Signature**: `WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)`

### `WrapperBurnFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L569)</sub>

**Signature**: `WrapperBurnFeeRateUpdated(address wrapper, int256 rate)`

### `WrapperMaxTokenAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L567)</sub>

**Signature**: `WrapperMaxTokenAmountUpdated(address wrapper, uint256 maxTokenAmount)`

### `WrapperMintFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0/contracts/SystemSettings.sol#L568)</sub>

**Signature**: `WrapperMintFeeRateUpdated(address wrapper, int256 rate)`
