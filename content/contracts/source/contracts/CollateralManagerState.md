# CollateralManagerState

## Description

**Source:** [contracts/CollateralManagerState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol)

## Structs

### `Balance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L16)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

## Variables

### `borrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L23)</sub>

**Type:** `uint256[]`

### `borrowRatesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L24)</sub>

**Type:** `uint256`

### `shortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L26)</sub>

**Type:** `mapping(bytes32 => uint256[])`

### `shortRatesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L27)</sub>

**Type:** `mapping(bytes32 => uint256)`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L30)</sub>

**Type:** `mapping(bytes32 => struct CollateralManagerState.Balance)`

### `totalLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L21)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L32)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getRateAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getRateAt(uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L85)</sub>

??? example "Details"

    **Signature**

    `getRatesAndTime(uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRatesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L72)</sub>

??? example "Details"

    **Signature**

    `getRatesLength() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getShortRatesAndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L131)</sub>

??? example "Details"

    **Signature**

    `getShortRatesAndTime(bytes32 currency, uint256 index) view returns (uint256 entryRate, uint256 lastRate, uint256 lastUpdated, uint256 newIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getShortRatesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getShortRatesLength(bytes32 currency) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L42)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `ratesLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L81)</sub>

??? example "Details"

    **Signature**

    `ratesLastUpdated() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L46)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Restricted Functions

### `addShortCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L103)</sub>

??? example "Details"

    **Signature**

    `addShortCurrency(bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L54)</sub>

??? example "Details"

    **Signature**

    `decrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L62)</sub>

??? example "Details"

    **Signature**

    `decrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementLongs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L50)</sub>

??? example "Details"

    **Signature**

    `incrementLongs(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementShorts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L58)</sub>

??? example "Details"

    **Signature**

    `incrementShorts(bytes32 synth, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementTotalLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L37)</sub>

??? example "Details"

    **Signature**

    `incrementTotalLoans() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `long`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L42)</sub>

??? example "Details"

    **Signature**

    `long(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `removeShortCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L110)</sub>

??? example "Details"

    **Signature**

    `removeShortCurrency(bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `short`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L46)</sub>

??? example "Details"

    **Signature**

    `short(bytes32 synth) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateBorrowRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L76)</sub>

??? example "Details"

    **Signature**

    `updateBorrowRates(uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateShortRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L122)</sub>

??? example "Details"

    **Signature**

    `updateShortRates(bytes32 currency, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Internal Functions

### `getShortRateAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L114)</sub>

??? example "Details"

    **Signature**

    `getShortRateAt(bytes32 currency, uint256 index) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `shortRateLastUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralManagerState.sol#L127)</sub>

??? example "Details"

    **Signature**

    `shortRateLastUpdated(bytes32 currency) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
