# EmptyCollateralManager

## Description

**Source:** [contracts/EmptyCollateralManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol)

## Views

### `areShortableSynthsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L74)</sub>

??? example "Details"

    **Signature**

    `areShortableSynthsSet(bytes32[], bytes32[]) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L70)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[], bytes32[]) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exceedsDebtLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L66)</sub>

??? example "Details"

    **Signature**

    `exceedsDebtLimit(uint256, bytes32) view returns (bool canIssue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBorrowRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L32)</sub>

??? example "Details"

    **Signature**

    `getBorrowRate() view returns (uint256 borrowRate, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L40)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L36)</sub>

??? example "Details"

    **Signature**

    `getShortRate(bytes32) view returns (uint256 shortRate, bool rateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L53)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32, uint256) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L7)</sub>

??? example "Details"

    **Signature**

    `hasCollateral(address) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthManaged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `isSynthManaged(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L16)</sub>

??? example "Details"

    **Signature**

    `long(bytes32) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L20)</sub>

??? example "Details"

    **Signature**

    `short(bytes32) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLong`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L24)</sub>

??? example "Details"

    **Signature**

    `totalLong() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L28)</sub>

??? example "Details"

    **Signature**

    `totalShort() view returns (uint256 susdValue, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L84)</sub>

??? example "Details"

    **Signature**

    `addCollaterals(address[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `addShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L92)</sub>

??? example "Details"

    **Signature**

    `addShortableSynths(bytes32[2][], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L88)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L103)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L107)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `getNewLoanId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `getNewLoanId() returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L101)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L105)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeCollaterals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L86)</sub>

??? example "Details"

    **Signature**

    `removeCollaterals(address[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeShortableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L94)</sub>

??? example "Details"

    **Signature**

    `removeShortableSynths(bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L90)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[], bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L97)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyCollateralManager.sol#L99)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``
