# CollateralManagerState

## Description

**Source:** [contracts/CollateralManagerState.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol)

## Structs

### `Balance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L17)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

## Variables

### `borrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L24)</sub>

**Type:** `uint256[]`

### `borrowRatesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L25)</sub>

**Type:** `uint256`

### `shortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L27)</sub>

**Type:** `mapping(bytes32 => uint256[])`

### `shortRatesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L28)</sub>

**Type:** `mapping(bytes32 => uint256)`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L31)</sub>

**Type:** `mapping(bytes32 => struct CollateralManagerState.Balance)`

### `totalLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L22)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L33)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `addShortCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L104)</sub>

??? example "Details"

    **Signature**

    `addShortCurrency(bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L55)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L63)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L51)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L59)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementTotalLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L38)</sub>

??? example "Details"

    **Signature**

    `incrementTotalLoans() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L43)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `removeShortCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L111)</sub>

??? example "Details"

    **Signature**

    `removeShortCurrency(bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L47)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L77)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L123)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Internal Functions

### `getShortRateAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L115)</sub>

??? example "Details"

    **Signature**

    `getShortRateAt(bytes32 currency, uint256 index) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `shortRateLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L128)</sub>

??? example "Details"

    **Signature**

    `shortRateLastUpdated(bytes32 currency) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `getRateAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L69)</sub>

??? example "Details"

    **Signature**

    `getRateAt(uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L86)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRatesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L73)</sub>

??? example "Details"

    **Signature**

    `getRatesLength() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L132)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getShortRatesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getShortRatesLength(bytes32 currency) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `ratesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/CollateralManagerState.sol#L82)</sub>

??? example "Details"

    **Signature**

    `ratesLastUpdated() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`
