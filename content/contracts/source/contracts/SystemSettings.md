# SystemSettings

## Description

**Source:** [contracts/SystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol)

## Variables

### `MAX_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L41)</sub>

**Type:** `uint256`

### `MAX_ETHER_WRAPPER_BURN_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L47)</sub>

**Type:** `uint256`

### `MAX_ETHER_WRAPPER_MINT_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L46)</sub>

**Type:** `uint256`

### `MAX_EXCHANGE_FEE_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L36)</sub>

**Type:** `uint256`

### `MAX_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L22)</sub>

**Type:** `uint256`

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L18)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L32)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_PENALTY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L28)</sub>

**Type:** `uint256`

### `MAX_LIQUIDATION_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L26)</sub>

**Type:** `uint256`

### `MAX_MINIMUM_STAKE_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L39)</sub>

**Type:** `uint256`

### `MAX_TARGET_THRESHOLD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L24)</sub>

**Type:** `uint256`

### `MIN_CROSS_DOMAIN_GAS_LIMIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L42)</sub>

**Type:** `uint256`

### `MIN_FEE_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L21)</sub>

**Type:** `uint256`

### `MIN_LIQUIDATION_DELAY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L33)</sub>

**Type:** `uint256`

### `RATIO_FROM_TARGET_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L30)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L122)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L166)</sub>

??? example "Details"

    **Signature**

    `canOpenLoans(address collateral) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L174)</sub>

??? example "Details"

    **Signature**

    `collapseFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L162)</sub>

??? example "Details"

    **Signature**

    `collateralManager(address collateral) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `crossDomainMessageGasLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `crossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L118)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L150)</sub>

??? example "Details"

    **Signature**

    `etherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L138)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L144)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L110)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L170)</sub>

??? example "Details"

    **Signature**

    `interactionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L69)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L158)</sub>

??? example "Details"

    **Signature**

    `issueFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L88)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L95)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L154)</sub>

??? example "Details"

    **Signature**

    `minCratio(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L114)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L63)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L106)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L82)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L128)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L56)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setAggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L309)</sub>

??? example "Details"

    **Signature**

    `setAggregatorWarningFlags(address _flags)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Valid address must be given")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L310)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorWarningFlagsUpdated](#aggregatorwarningflagsupdated)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L360)</sub>

??? example "Details"

    **Signature**

    `setCanOpenLoans(address _collateral, bool _canOpenLoans)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CanOpenLoansUpdated](#canopenloansupdated)

### `setCollapseFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L379)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L351)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L180)</sub>

??? example "Details"

    **Signature**

    `setCrossDomainMessageGasLimit(enum MixinSystemSettings.CrossDomainMessageGasLimits _gasLimitType, uint256 _crossDomainMessageGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Out of range xDomain gasLimit")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L184)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CrossDomainMessageGasLimitChanged](#crossdomainmessagegaslimitchanged)

### `setDebtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L304)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L326)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperBurnFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_ETHER_WRAPPER_BURN_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L327)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperBurnFeeRateUpdated](#etherwrapperburnfeerateupdated)

### `setEtherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L315)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L320)</sub>

??? example "Details"

    **Signature**

    `setEtherWrapperMintFeeRate(uint256 _rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "rate > MAX_ETHER_WRAPPER_MINT_FEE_RATE")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L321)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherWrapperMintFeeRateUpdated](#etherwrappermintfeerateupdated)

### `setExchangeFeeRateForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L282)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRateForSynths(bytes32[] synthKeys, uint256[] exchangeFeeRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array lengths dont match")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L286)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setFeePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L222)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(uint256 _feePeriodDuration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "value < MIN_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L223)

    * [require(..., "value > MAX_FEE_PERIOD_DURATION")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L224)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePeriodDurationUpdated](#feeperioddurationupdated)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L369)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(address _collateral, uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L370)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L216)</sub>

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 _issuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "New issuance ratio cannot exceed MAX_ISSUANCE_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L217)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L342)</sub>

??? example "Details"

    **Signature**

    `setIssueFeeRate(address _collateral, uint256 _issueFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)

### `setLiquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L241)</sub>

??? example "Details"

    **Signature**

    `setLiquidationDelay(uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be less than 30 days")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L242)

    * [require(..., "Must be greater than 1 day")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L243)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationDelayUpdated](#liquidationdelayupdated)

### `setLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L268)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPenalty(uint256 penalty)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "penalty > MAX_LIQUIDATION_PENALTY")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L269)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationPenaltyUpdated](#liquidationpenaltyupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L252)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "liquidationRatio > MAX_LIQUIDATION_RATIO / (1 + penalty)")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L253)

    * [require(..., "liquidationRatio < MIN_LIQUIDATION_RATIO")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L261)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L332)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(address _collateral, uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cratio must be above 1")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L333)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L298)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "stake time exceed maximum 1 week")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L299)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

### `setPriceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L207)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L276)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L231)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(uint256 _percent)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Threshold too high")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L232)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetThresholdUpdated](#targetthresholdupdated)

### `setTradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L197)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L202)</sub>

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

## Events

### `AggregatorWarningFlagsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L403)</sub>

**Signature**: `AggregatorWarningFlagsUpdated(address flags)`

### `CanOpenLoansUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L410)</sub>

**Signature**: `CanOpenLoansUpdated(bool canOpenLoans)`

### `CollapseFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L412)</sub>

**Signature**: `CollapseFeeRateUpdated(uint256 collapseFeeRate)`

### `CollateralManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L409)</sub>

**Signature**: `CollateralManagerUpdated(address newCollateralManager)`

### `CrossDomainMessageGasLimitChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L389)</sub>

**Signature**: `CrossDomainMessageGasLimitChanged(enum MixinSystemSettings.CrossDomainMessageGasLimits gasLimitType, uint256 newLimit)`

### `DebtSnapshotStaleTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L402)</sub>

**Signature**: `DebtSnapshotStaleTimeUpdated(uint256 debtSnapshotStaleTime)`

### `EtherWrapperBurnFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L406)</sub>

**Signature**: `EtherWrapperBurnFeeRateUpdated(uint256 rate)`

### `EtherWrapperMaxETHUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L404)</sub>

**Signature**: `EtherWrapperMaxETHUpdated(uint256 maxETH)`

### `EtherWrapperMintFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L405)</sub>

**Signature**: `EtherWrapperMintFeeRateUpdated(uint256 rate)`

### `ExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L400)</sub>

**Signature**: `ExchangeFeeUpdated(bytes32 synthKey, uint256 newExchangeFeeRate)`

### `FeePeriodDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L394)</sub>

**Signature**: `FeePeriodDurationUpdated(uint256 newFeePeriodDuration)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L411)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssuanceRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L393)</sub>

**Signature**: `IssuanceRatioUpdated(uint256 newRatio)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L408)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LiquidationDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L396)</sub>

**Signature**: `LiquidationDelayUpdated(uint256 newDelay)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L398)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 newPenalty)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L397)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 newRatio)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L407)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`

### `MinimumStakeTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L401)</sub>

**Signature**: `MinimumStakeTimeUpdated(uint256 minimumStakeTime)`

### `PriceDeviationThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L392)</sub>

**Signature**: `PriceDeviationThresholdUpdated(uint256 threshold)`

### `RateStalePeriodUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L399)</sub>

**Signature**: `RateStalePeriodUpdated(uint256 rateStalePeriod)`

### `TargetThresholdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L395)</sub>

**Signature**: `TargetThresholdUpdated(uint256 newTargetThreshold)`

### `TradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L390)</sub>

**Signature**: `TradingRewardsEnabled(bool enabled)`

### `WaitingPeriodSecsUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/SystemSettings.sol#L391)</sub>

**Signature**: `WaitingPeriodSecsUpdated(uint256 waitingPeriodSecs)`
