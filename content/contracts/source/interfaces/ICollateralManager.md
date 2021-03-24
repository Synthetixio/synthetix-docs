# ICollateralManager

## Description

**Source:** [contracts/interfaces/ICollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol)

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L59)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L67)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L63)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L45)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L43)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L56)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L23)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L6)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L77)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L81)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L61)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L70)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L65)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L73)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/ICollateralManager.sol#L75)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
