# SynthetixStateWithLimitedSetup

## Description

**Source:** [contracts/SynthetixStateWithLimitedSetup.sol](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixStateWithLimitedSetup[SynthetixStateWithLimitedSetup] --> SynthetixState[SynthetixState]
    SynthetixStateWithLimitedSetup[SynthetixStateWithLimitedSetup] --> LimitedSetup[LimitedSetup]
    SynthetixState[SynthetixState] --> State[State]
    State[State] --> Owned[Owned]

```

## Variables

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L13)</sub>

**Type:** `contract IFeePool`

### `importedDebtAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L16)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L18)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `importIssuerData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L39)</sub>

??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] sUSDAmounts)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L40)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L30)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePoolUpdated](#feepoolupdated)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L51)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Events

### `FeePoolUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/SynthetixStateWithLimitedSetup.sol#L99)</sub>

**Signature**: `FeePoolUpdated(address newFeePool)`
