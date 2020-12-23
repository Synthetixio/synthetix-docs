# ICollateralManager

## Description

**Source:** [contracts/interfaces/ICollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol)

## Views

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L41)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 amount, bytes32 currency) returns (bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 synth) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L31)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L6)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address collateral) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L9)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalLong() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalShort() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L47)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] synthsWithInverses)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addShortableSynthsToState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L61)</sub>

??? example "Details"

    **Signature**

    `addShortableSynthsToState()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L51)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addSynthsToFlexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L59)</sub>

??? example "Details"

    **Signature**

    `addSynthsToFlexibleStorage()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L70)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L74)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L44)</sub>

??? example "Details"

    **Signature**

    `getLoanId() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L68)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L72)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L49)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] collaterals)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L57)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L53)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] synths)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L64)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/interfaces/ICollateralManager.sol#L66)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
