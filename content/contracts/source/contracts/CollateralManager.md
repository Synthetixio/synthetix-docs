# CollateralManager

## Description

**Source:** [contracts/CollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L35)</sub>

**Type:** `bytes32`

### `baseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L67)</sub>

**Type:** `uint256`

### `baseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L70)</sub>

**Type:** `uint256`

### `maxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L61)</sub>

**Type:** `uint256`

### `maxSkewRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L64)</sub>

**Type:** `uint256`

### `shortableSynthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L55)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L41)</sub>

**Type:** `contract CollateralManagerState`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L50)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `utilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L58)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L80)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralManagerState _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _maxSkewRate, uint256 _baseBorrowRate, uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L419)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L424)

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L361)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L282)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L207)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L254)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L229)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synthKey) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L267)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `hasAllCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L152)</sub>

??? example "Details"

    **Signature**

    `hasAllCollaterals(address[] collaterals) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L148)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L128)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L163)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L102)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L167)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L171)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L191)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L491)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(uint256 interestIndex, bytes32 currency, bool isShort) returns (uint256 difference, uint256 index)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L503)

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L332)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L394)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L398)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L350)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L479)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L487)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L326)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L475)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L483)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L341)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L440)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L382)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setBaseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L314)</sub>

??? example "Details"

    **Signature**

    `setBaseBorrowRate(uint256 _baseBorrowRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseBorrowRateUpdated](#baseborrowrateupdated)

### `setBaseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L319)</sub>

??? example "Details"

    **Signature**

    `setBaseShortRate(uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseShortRateUpdated](#baseshortrateupdated)

### `setMaxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L303)</sub>

??? example "Details"

    **Signature**

    `setMaxDebt(uint256 _maxDebt)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L304)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxDebtUpdated](#maxdebtupdated)

### `setMaxSkewRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L309)</sub>

??? example "Details"

    **Signature**

    `setMaxSkewRate(uint256 _maxSkewRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxSkewRateUpdated](#maxskewrateupdated)

### `setUtilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L297)</sub>

??? example "Details"

    **Signature**

    `setUtilisationMultiplier(uint256 _utilisationMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L298)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [UtilisationMultiplierUpdated](#utilisationmultiplierupdated)

### `updateBorrowRatesCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L467)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRatesCollateral(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `updateShortRatesCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L471)</sub>

??? example "Details"

    **Signature**

    `updateShortRatesCollateral(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L138)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L134)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L142)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L459)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L463)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L522)</sub>

## Events

### `BaseBorrowRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L533)</sub>

**Signature**: `BaseBorrowRateUpdated(uint256 baseBorrowRate)`

### `BaseShortRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L534)</sub>

**Signature**: `BaseShortRateUpdated(uint256 baseShortRate)`

### `CollateralAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L537)</sub>

**Signature**: `CollateralAdded(address collateral)`

### `CollateralRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L538)</sub>

**Signature**: `CollateralRemoved(address collateral)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L532)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 liquidationPenalty)`

### `MaxDebtUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L530)</sub>

**Signature**: `MaxDebtUpdated(uint256 maxDebt)`

### `MaxSkewRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L531)</sub>

**Signature**: `MaxSkewRateUpdated(uint256 maxSkewRate)`

### `ShortableSynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L543)</sub>

**Signature**: `ShortableSynthAdded(bytes32 synth)`

### `ShortableSynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L544)</sub>

**Signature**: `ShortableSynthRemoved(bytes32 synth)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L540)</sub>

**Signature**: `SynthAdded(bytes32 synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L541)</sub>

**Signature**: `SynthRemoved(bytes32 synth)`

### `UtilisationMultiplierUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/CollateralManager.sol#L535)</sub>

**Signature**: `UtilisationMultiplierUpdated(uint256 utilisationMultiplier)`
