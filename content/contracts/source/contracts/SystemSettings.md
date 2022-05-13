# SystemSettings

## Description

**Source:** [contracts/SystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "read and write keys not equal")](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L18)

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L25)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L154)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L226)</sub>

??? example "Details"

    **Signature**

    `atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L232)</sub>

??? example "Details"

    **Signature**

    `atomicExchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L214)</sub>

??? example "Details"

    **Signature**

    `atomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L220)</sub>

??? example "Details"

    **Signature**

    `atomicTwapWindow() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L238)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L244)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L208)</sub>

??? example "Details"

    **Signature**

    `collapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `crossChainSynthTransferEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L256)</sub>

??? example "Details"

    **Signature**

    `crossChainSynthTransferEnabled(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `crossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `crossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L150)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L182)</sub>

??? example "Details"

    **Signature**

    `etherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L170)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L176)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeDynamicFeeRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L134)</sub>

??? example "Details"

    **Signature**

    `exchangeDynamicFeeRounds() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeDynamicFeeThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L122)</sub>

??? example "Details"

    **Signature**

    `exchangeDynamicFeeThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeDynamicFeeWeightDecay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L128)</sub>

??? example "Details"

    **Signature**

    `exchangeDynamicFeeWeightDecay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L115)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeMaxDynamicFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `exchangeMaxDynamicFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L53)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `flagReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L97)</sub>

??? example "Details"

    **Signature**

    `flagReward() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L204)</sub>

??? example "Details"

    **Signature**

    `interactionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L103)</sub>

??? example "Details"

    **Signature**

    `liquidateReward() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L64)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L85)</sub>

??? example "Details"

    **Signature**

    `liquidationEscrowDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L71)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L146)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L39)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pureChainlinkPriceForAtomicSwapsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L250)</sub>

??? example "Details"

    **Signature**

    `pureChainlinkPriceForAtomicSwapsEnabled(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L110)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `selfLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L91)</sub>

??? example "Details"

    **Signature**

    `selfLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L58)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L160)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L32)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L200)</sub>

??? example "Details"

    **Signature**

    `wrapperBurnFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L188)</sub>

??? example "Details"

    **Signature**

    `wrapperMaxTokenAmount(address wrapper) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `wrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L194)</sub>

??? example "Details"

    **Signature**

    `wrapperMintFeeRate(address wrapper) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L410)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorWarningFlagsUpdated](#aggregatorwarningflagsupdated)

### `setAtomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L475)</sub>

??? example "Details"

    **Signature**

    `setAtomicEquivalentForDexPricing(bytes32 _currencyKey, address _equivalent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicEquivalentForDexPricingUpdated](#atomicequivalentfordexpricingupdated)

### `setAtomicExchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L484)</sub>

??? example "Details"

    **Signature**

    `setAtomicExchangeFeeRate(bytes32 _currencyKey, uint256 _exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicExchangeFeeUpdated](#atomicexchangefeeupdated)

### `setAtomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L465)</sub>

??? example "Details"

    **Signature**

    `setAtomicMaxVolumePerBlock(uint256 _maxVolume)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicMaxVolumePerBlockUpdated](#atomicmaxvolumeperblockupdated)

### `setAtomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L470)</sub>

??? example "Details"

    **Signature**

    `setAtomicTwapWindow(uint256 _window)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AtomicTwapWindowUpdated](#atomictwapwindowupdated)

### `setAtomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L489)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L498)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L460)</sub>

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

### `setCrossChainSynthTransferEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L516)</sub>

??? example "Details"

    **Signature**

    `setCrossChainSynthTransferEnabled(bytes32 _currencyKey, uint256 _value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CrossChainSynthTransferEnabledUpdated](#crosschainsynthtransferenabledupdated)

### `setCrossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L262)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits _gasLimitType, uint256 _crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CrossDomainMessageGasLimitChanged](#crossdomainmessagegaslimitchanged)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L405)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L425)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperBurnFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperBurnFeeRateUpdated](#etherwrapperburnfeerateupdated)

### `setEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L415)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L420)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMintFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperMintFeeRateUpdated](#etherwrappermintfeerateupdated)

### `setExchangeDynamicFeeRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L386)</sub>

??? example "Details"

    **Signature**

    `setExchangeDynamicFeeRounds(uint256 rounds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExchangeDynamicFeeRoundsUpdated](#exchangedynamicfeeroundsupdated)

### `setExchangeDynamicFeeThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L364)</sub>

??? example "Details"

    **Signature**

    `setExchangeDynamicFeeThreshold(uint256 threshold)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Threshold cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L365)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExchangeDynamicFeeThresholdUpdated](#exchangedynamicfeethresholdupdated)

### `setExchangeDynamicFeeWeightDecay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L375)</sub>

??? example "Details"

    **Signature**

    `setExchangeDynamicFeeWeightDecay(uint256 weightDecay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Weight decay cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L376)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExchangeDynamicFeeWeightDecayUpdated](#exchangedynamicfeeweightdecayupdated)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L351)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setExchangeMaxDynamicFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L395)</sub>

??? example "Details"

    **Signature**

    `setExchangeMaxDynamicFee(uint256 maxFee)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExchangeMaxDynamicFeeUpdated](#exchangemaxdynamicfeeupdated)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L293)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePeriodDurationUpdated](#feeperioddurationupdated)

### `setFlagReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L335)</sub>

??? example "Details"

    **Signature**

    `setFlagReward(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FlagRewardUpdated](#flagrewardupdated)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L455)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(address _collateral, uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L270)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

### `setLiquidateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L340)</sub>

??? example "Details"

    **Signature**

    `setLiquidateReward(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidateRewardUpdated](#liquidaterewardupdated)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L303)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationDelayUpdated](#liquidationdelayupdated)

### `setLiquidationEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L320)</sub>

??? example "Details"

    **Signature**

    `setLiquidationEscrowDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationEscrowDurationUpdated](#liquidationescrowdurationupdated)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L325)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationPenaltyUpdated](#liquidationpenaltyupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L310)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L400)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L285)</sub>

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

### `setPureChainlinkPriceForAtomicSwapsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L507)</sub>

??? example "Details"

    **Signature**

    `setPureChainlinkPriceForAtomicSwapsEnabled(bytes32 _currencyKey, bool _enabled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PureChainlinkPriceForAtomicSwapsEnabledUpdated](#purechainlinkpriceforatomicswapsenabledupdated)

### `setRateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L345)</sub>

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

### `setSelfLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L330)</sub>

??? example "Details"

    **Signature**

    `setSelfLiquidationPenalty(uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SelfLiquidationPenaltyUpdated](#selfliquidationpenaltyupdated)

### `setTargetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L298)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(uint256 percent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetThresholdUpdated](#targetthresholdupdated)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L275)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L280)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L445)</sub>

??? example "Details"

    **Signature**

    `setWrapperBurnFeeRate(address _wrapper, int256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperBurnFeeRateUpdated](#wrapperburnfeerateupdated)

### `setWrapperMaxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L430)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L435)</sub>

??? example "Details"

    **Signature**

    `setWrapperMintFeeRate(address _wrapper, int256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperMintFeeRateUpdated](#wrappermintfeerateupdated)

## Events

### `AggregatorWarningFlagsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L546)</sub>

**Signature**: `AggregatorWarningFlagsUpdated(address flags)`

### `AtomicEquivalentForDexPricingUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L557)</sub>

**Signature**: `AtomicEquivalentForDexPricingUpdated(bytes32 synthKey, address equivalent)`

### `AtomicExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L558)</sub>

**Signature**: `AtomicExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `AtomicMaxVolumePerBlockUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L555)</sub>

**Signature**: `AtomicMaxVolumePerBlockUpdated(uint256 newMaxVolume)`

### `AtomicTwapWindowUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L556)</sub>

**Signature**: `AtomicTwapWindowUpdated(uint256 newWindow)`

### `AtomicVolatilityConsiderationWindowUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L559)</sub>

**Signature**: `AtomicVolatilityConsiderationWindowUpdated(bytes32 synthKey, uint256 newVolatilityConsiderationWindow)`

### `AtomicVolatilityUpdateThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L560)</sub>

**Signature**: `AtomicVolatilityUpdateThresholdUpdated(bytes32 synthKey, uint256 newVolatilityUpdateThreshold)`

### `CollapseFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L554)</sub>

**Signature**: `CollapseFeeRateUpdated(uint256 collapseFeeRate)`

### `CrossChainSynthTransferEnabledUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L562)</sub>

**Signature**: `CrossChainSynthTransferEnabledUpdated(bytes32 synthKey, uint256 value)`

### `CrossDomainMessageGasLimitChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L522)</sub>

**Signature**: `CrossDomainMessageGasLimitChanged(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType, uint256 newLimit)`

### `DebtSnapshotStaleTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L545)</sub>

**Signature**: `DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)`

### `EtherWrapperBurnFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L549)</sub>

**Signature**: `EtherWrapperBurnFeeRateUpdated(uint256 rate)`

### `EtherWrapperMaxETHUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L547)</sub>

**Signature**: `EtherWrapperMaxETHUpdated(uint256 maxETH)`

### `EtherWrapperMintFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L548)</sub>

**Signature**: `EtherWrapperMintFeeRateUpdated(uint256 rate)`

### `ExchangeDynamicFeeRoundsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L541)</sub>

**Signature**: `ExchangeDynamicFeeRoundsUpdated(uint256 dynamicFeeRounds)`

### `ExchangeDynamicFeeThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L539)</sub>

**Signature**: `ExchangeDynamicFeeThresholdUpdated(uint256 dynamicFeeThreshold)`

### `ExchangeDynamicFeeWeightDecayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L540)</sub>

**Signature**: `ExchangeDynamicFeeWeightDecayUpdated(uint256 dynamicFeeWeightDecay)`

### `ExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L538)</sub>

**Signature**: `ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `ExchangeMaxDynamicFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L542)</sub>

**Signature**: `ExchangeMaxDynamicFeeUpdated(uint256 maxDynamicFee)`

### `FeePeriodDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L527)</sub>

**Signature**: `FeePeriodDurationUpdated(uint256 newFeePeriodDuration)`

### `FlagRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L534)</sub>

**Signature**: `FlagRewardUpdated(uint256 newReward)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L553)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssuanceRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L523)</sub>

**Signature**: `IssuanceRatioUpdated(uint256 newRatio)`

### `LiquidateRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L535)</sub>

**Signature**: `LiquidateRewardUpdated(uint256 newReward)`

### `LiquidationDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L529)</sub>

**Signature**: `LiquidationDelayUpdated(uint256 newDelay)`

### `LiquidationEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L531)</sub>

**Signature**: `LiquidationEscrowDurationUpdated(uint256 newDuration)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L532)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 newPenalty)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L530)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 newRatio)`

### `MinimumStakeTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L544)</sub>

**Signature**: `MinimumStakeTimeUpdated(uint256 minimumStakeTime)`

### `PriceDeviationThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L526)</sub>

**Signature**: `PriceDeviationThresholdUpdated(uint256 threshold)`

### `PureChainlinkPriceForAtomicSwapsEnabledUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L561)</sub>

**Signature**: `PureChainlinkPriceForAtomicSwapsEnabledUpdated(bytes32 synthKey, bool enabled)`

### `RateStalePeriodUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L536)</sub>

**Signature**: `RateStalePeriodUpdated(uint256 rateStalePeriod)`

### `SelfLiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L533)</sub>

**Signature**: `SelfLiquidationPenaltyUpdated(uint256 newPenalty)`

### `TargetThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L528)</sub>

**Signature**: `TargetThresholdUpdated(uint256 newTargetThreshold)`

### `TradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L524)</sub>

**Signature**: `TradingRewardsEnabled(bool enabled)`

### `WaitingPeriodSecsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L525)</sub>

**Signature**: `WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)`

### `WrapperBurnFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L552)</sub>

**Signature**: `WrapperBurnFeeRateUpdated(address wrapper, int256 rate)`

### `WrapperMaxTokenAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L550)</sub>

**Signature**: `WrapperMaxTokenAmountUpdated(address wrapper, uint256 maxTokenAmount)`

### `WrapperMintFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/SystemSettings.sol#L551)</sub>

**Signature**: `WrapperMintFeeRateUpdated(address wrapper, int256 rate)`
