# CollateralManager

## Description

**Source:** [contracts/CollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L35)</sub>

**Type:** `bytes32`

### `baseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L70)</sub>

**Type:** `uint256`

### `baseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L73)</sub>

**Type:** `uint256`

### `maxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L64)</sub>

**Type:** `uint256`

### `maxSkewRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L67)</sub>

**Type:** `uint256`

### `shortableSynthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L58)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L41)</sub>

**Type:** `contract CollateralManagerState`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L53)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `utilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L61)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralManagerState _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _maxSkewRate, uint256 _baseBorrowRate, uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L441)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L446)

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L380)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L299)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L226)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L273)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L248)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synthKey) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L286)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `hasAllCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L155)</sub>

??? example "Details"

    **Signature**

    `hasAllCollaterals(address[] collaterals) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L151)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L131)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L166)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L105)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L170)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L174)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalLongAndShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L210)</sub>

??? example "Details"

    **Signature**

    `totalLongAndShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L194)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L513)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(uint256 interestIndex, bytes32 currency, bool isShort) returns (uint256 difference, uint256 index)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L525)

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L346)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L416)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L420)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L364)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L365)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L501)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L509)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L340)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L497)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L505)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L355)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L462)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L401)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L402)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setBaseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L328)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L333)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L317)</sub>

??? example "Details"

    **Signature**

    `setMaxDebt(uint256 _maxDebt)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L318)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxDebtUpdated](#maxdebtupdated)

### `setMaxSkewRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L323)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L311)</sub>

??? example "Details"

    **Signature**

    `setUtilisationMultiplier(uint256 _utilisationMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L312)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [UtilisationMultiplierUpdated](#utilisationmultiplierupdated)

### `updateBorrowRatesCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L489)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L493)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L481)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L485)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L544)</sub>

## Events

### `BaseBorrowRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L555)</sub>

**Signature**: `BaseBorrowRateUpdated(uint256 baseBorrowRate)`

### `BaseShortRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L556)</sub>

**Signature**: `BaseShortRateUpdated(uint256 baseShortRate)`

### `CollateralAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L559)</sub>

**Signature**: `CollateralAdded(address collateral)`

### `CollateralRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L560)</sub>

**Signature**: `CollateralRemoved(address collateral)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L554)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 liquidationPenalty)`

### `MaxDebtUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L552)</sub>

**Signature**: `MaxDebtUpdated(uint256 maxDebt)`

### `MaxSkewRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L553)</sub>

**Signature**: `MaxSkewRateUpdated(uint256 maxSkewRate)`

### `ShortableSynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L565)</sub>

**Signature**: `ShortableSynthAdded(bytes32 synth)`

### `ShortableSynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L566)</sub>

**Signature**: `ShortableSynthRemoved(bytes32 synth)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L562)</sub>

**Signature**: `SynthAdded(bytes32 synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L563)</sub>

**Signature**: `SynthRemoved(bytes32 synth)`

### `UtilisationMultiplierUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManager.sol#L557)</sub>

**Signature**: `UtilisationMultiplierUpdated(uint256 utilisationMultiplier)`
