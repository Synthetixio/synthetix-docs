# ICollateralManager

## Description

**Source:** [contracts/interfaces/ICollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol)

## Views

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L45)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L43)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) returns (bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L23)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L6)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalLong() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `totalShort() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L59)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L67)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L63)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L56)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L77)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L81)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L61)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L70)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L65)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L73)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/interfaces/ICollateralManager.sol#L75)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
