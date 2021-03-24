# EmptyCollateralManager

## Description

**Source:** [contracts/EmptyCollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol)

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L85)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L93)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L89)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L75)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[], bytes32[]) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L71)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[], bytes32[]) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L104)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L108)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L67)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256, bytes32) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L41)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L37)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32, uint256) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L102)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L106)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L12)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `long(bytes32) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L87)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L95)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L91)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `short(bytes32) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L25)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L29)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/EmptyCollateralManager.sol#L100)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
