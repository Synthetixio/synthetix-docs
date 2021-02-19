# CollateralManager

## Description

**Source:** [contracts/CollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L37)</sub>

**Type:** `bytes32`

### `baseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L66)</sub>

**Type:** `uint256`

### `baseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L69)</sub>

**Type:** `uint256`

### `maxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L63)</sub>

**Type:** `uint256`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L43)</sub>

**Type:** `contract CollateralManagerState`

### `synthToInverseSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L57)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L52)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `utilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L60)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralManagerState _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _baseBorrowRate, uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L324)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L388)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L392)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L342)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L478)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L486)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L318)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L474)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L482)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L333)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L446)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L374)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L306)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L311)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L300)</sub>

??? example "Details"

    **Signature**

    `setMaxDebt(uint256 _maxDebt)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L301)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxDebtUpdated](#maxdebtupdated)

### `setUtilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L295)</sub>

??? example "Details"

    **Signature**

    `setUtilisationMultiplier(uint256 _utilisationMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L296)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L466)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L470)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L133)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L417)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L422)

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L353)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L280)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L206)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L254)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L228)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L267)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasAllCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L151)</sub>

??? example "Details"

    **Signature**

    `hasAllCollaterals(address[] collaterals) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L147)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L127)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L162)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L99)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L166)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L170)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L190)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L492)</sub>

## Events

### `BaseBorrowRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L502)</sub>

**Signature**: `BaseBorrowRateUpdated(uint256 baseBorrowRate)`

### `BaseShortRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L503)</sub>

**Signature**: `BaseShortRateUpdated(uint256 baseShortRate)`

### `CollateralAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L505)</sub>

**Signature**: `CollateralAdded(address collateral)`

### `CollateralRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L506)</sub>

**Signature**: `CollateralRemoved(address collateral)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L501)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 liquidationPenalty)`

### `MaxDebtUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L500)</sub>

**Signature**: `MaxDebtUpdated(uint256 maxDebt)`

### `ShortableSynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L511)</sub>

**Signature**: `ShortableSynthAdded(bytes32 synth)`

### `ShortableSynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L512)</sub>

**Signature**: `ShortableSynthRemoved(bytes32 synth)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L508)</sub>

**Signature**: `SynthAdded(bytes32 synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/CollateralManager.sol#L509)</sub>

**Signature**: `SynthRemoved(bytes32 synth)`
