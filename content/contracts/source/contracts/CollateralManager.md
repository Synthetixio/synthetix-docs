# CollateralManager

## Description

**Source:** [contracts/CollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L36)</sub>

**Type:** `bytes32`

### `baseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L65)</sub>

**Type:** `uint256`

### `baseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L68)</sub>

**Type:** `uint256`

### `maxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L62)</sub>

**Type:** `uint256`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L42)</sub>

**Type:** `contract CollateralManagerState`

### `synthToInverseSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L56)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L51)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `utilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L59)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L78)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralManagerState _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _baseBorrowRate, uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L323)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L387)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L391)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L341)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L477)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L485)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L317)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L473)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L481)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L332)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L445)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L373)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setBaseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L305)</sub>

??? example "Details"

    **Signature**

    `setBaseBorrowRate(uint256 _baseBorrowRate)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseBorrowRateUpdated](#baseborrowrateupdated)

### `setBaseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L310)</sub>

??? example "Details"

    **Signature**

    `setBaseShortRate(uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseShortRateUpdated](#baseshortrateupdated)

### `setMaxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L299)</sub>

??? example "Details"

    **Signature**

    `setMaxDebt(uint256 _maxDebt)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L300)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxDebtUpdated](#maxdebtupdated)

### `setUtilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L294)</sub>

??? example "Details"

    **Signature**

    `setUtilisationMultiplier(uint256 _utilisationMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L295)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L465)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L469)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L132)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L140)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L416)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L421)

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L352)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L279)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L205)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L253)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L227)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L266)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasAllCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L150)</sub>

??? example "Details"

    **Signature**

    `hasAllCollaterals(address[] collaterals) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L146)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L126)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L161)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L165)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L169)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L189)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L491)</sub>

## Events

### `BaseBorrowRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L501)</sub>

**Signature**: `BaseBorrowRateUpdated(uint256 baseBorrowRate)`

### `BaseShortRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L502)</sub>

**Signature**: `BaseShortRateUpdated(uint256 baseShortRate)`

### `CollateralAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L504)</sub>

**Signature**: `CollateralAdded(address collateral)`

### `CollateralRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L505)</sub>

**Signature**: `CollateralRemoved(address collateral)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L500)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 liquidationPenalty)`

### `MaxDebtUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L499)</sub>

**Signature**: `MaxDebtUpdated(uint256 maxDebt)`

### `ShortableSynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L510)</sub>

**Signature**: `ShortableSynthAdded(bytes32 synth)`

### `ShortableSynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L511)</sub>

**Signature**: `ShortableSynthRemoved(bytes32 synth)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L507)</sub>

**Signature**: `SynthAdded(bytes32 synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/CollateralManager.sol#L508)</sub>

**Signature**: `SynthRemoved(bytes32 synth)`
