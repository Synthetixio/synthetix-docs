# EmptyCollateralManager

## Description

**Source:** [contracts/EmptyCollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol)

## Views

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L63)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256 , bytes32 ) returns (bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L29)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L37)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 ) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32 ) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 , uint256 ) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address ) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `totalLong() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L25)</sub>

??? example "Details"

    **Signature**

    `totalShort() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L73)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L81)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addShortableSynthsToState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L87)</sub>

??? example "Details"

    **Signature**

    `addShortableSynthsToState()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L77)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `addSynthsToFlexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L85)</sub>

??? example "Details"

    **Signature**

    `addSynthsToFlexibleStorage()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L92)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L96)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `getLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getLoanId() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L90)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L94)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L75)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/EmptyCollateralManager.sol#L100)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
