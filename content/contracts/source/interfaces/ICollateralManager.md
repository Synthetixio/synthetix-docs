# ICollateralManager

## Description

**Source:** [contracts/interfaces/ICollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol)

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L58)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L66)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] requiredSynthAndInverseNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L62)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synthNamesInResolver, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L49)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L44)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] requiredSynthNamesInResolver, bytes32[] synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L78)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L82)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L42)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L22)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L20)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L32)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L5)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L76)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L80)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L7)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L10)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L60)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L69)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L64)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths, bytes32[] synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L12)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L16)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L72)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/ICollateralManager.sol#L74)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
