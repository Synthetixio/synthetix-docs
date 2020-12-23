# CollateralManager

## Description

**Source:** [contracts/CollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`
- [AddressSetLib](/contracts/source/libraries/AddressSetLib) for `AddressSetLib.AddressSet`
- [Bytes32SetLib](/contracts/source/libraries/Bytes32SetLib) for `Bytes32SetLib.Bytes32Set`

### Inheritance Graph

```mermaid
graph TD
    CollateralManager[CollateralManager] --> Pausable[Pausable]
    CollateralManager[CollateralManager] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]

```

## Constants

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L38)</sub>

**Type:** `bytes32`

## Variables

### `baseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L67)</sub>

**Type:** `uint256`

### `baseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L70)</sub>

**Type:** `uint256`

### `maxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L64)</sub>

**Type:** `uint256`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L44)</sub>

**Type:** `contract CollateralManagerState`

### `synthToInverseSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L58)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L53)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `utilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L61)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L81)</sub>

??? example "Details"

    **Signature**

    `(contract CollateralManagerState _state, address _owner, address _resolver, uint256 _maxDebt, uint256 _baseBorrowRate, uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L434)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Input array length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L439)

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L366)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L287)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) returns (bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L213)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L261)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L235)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L274)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasAllCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L158)</sub>

??? example "Details"

    **Signature**

    `hasAllCollaterals(address[] collaterals) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L154)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L130)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L169)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L173)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L177)</sub>

??? example "Details"

    **Signature**

    `totalLong() returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L197)</sub>

??? example "Details"

    **Signature**

    `totalShort() returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L331)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L403)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input array length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L409)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L353)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L497)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L505)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L325)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L493)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L501)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L342)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L463)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L387)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setBaseBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L313)</sub>

??? example "Details"

    **Signature**

    `setBaseBorrowRate(uint256 _baseBorrowRate)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseBorrowRateUpdated](#baseborrowrateupdated)

### `setBaseShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L318)</sub>

??? example "Details"

    **Signature**

    `setBaseShortRate(uint256 _baseShortRate)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [BaseShortRateUpdated](#baseshortrateupdated)

### `setMaxDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L307)</sub>

??? example "Details"

    **Signature**

    `setMaxDebt(uint256 _maxDebt)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L308)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxDebtUpdated](#maxdebtupdated)

### `setUtilisationMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L302)</sub>

??? example "Details"

    **Signature**

    `setUtilisationMultiplier(uint256 _utilisationMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L303)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L485)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L489)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyCollateral](#onlycollateral)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L144)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L140)</sub>

??? example "Details"

    **Signature**

    `_issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L511)</sub>

## Events

### `BaseBorrowRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L521)</sub>

**Signature**: `BaseBorrowRateUpdated(uint256 baseBorrowRate)`

### `BaseShortRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L522)</sub>

**Signature**: `BaseShortRateUpdated(uint256 baseShortRate)`

### `CollateralAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L524)</sub>

**Signature**: `CollateralAdded(address collateral)`

### `CollateralRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L525)</sub>

**Signature**: `CollateralRemoved(address collateral)`

### `LiquidationPenaltyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L520)</sub>

**Signature**: `LiquidationPenaltyUpdated(uint256 liquidationPenalty)`

### `MaxDebtUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L519)</sub>

**Signature**: `MaxDebtUpdated(uint256 maxDebt)`

### `ShortableSynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L530)</sub>

**Signature**: `ShortableSynthAdded(bytes32 synth)`

### `ShortableSynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L531)</sub>

**Signature**: `ShortableSynthRemoved(bytes32 synth)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L527)</sub>

**Signature**: `SynthAdded(bytes32 synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/CollateralManager.sol#L528)</sub>

**Signature**: `SynthRemoved(bytes32 synth)`
