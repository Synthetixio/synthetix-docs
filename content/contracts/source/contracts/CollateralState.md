# CollateralState

## Description

**Source:** [contracts/CollateralState.sol](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    CollateralState[CollateralState] --> State[State]
    State[State] --> Owned[Owned]

```

## Variables

### `loans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L18)</sub>

**Type:** `mapping(address => struct ICollateralLoan.Loan[])`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L20)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L24)</sub>

??? example "Details"

    **Signature**

    `getLoan(address account, uint256 loanID) returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getNumLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getNumLoans(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `createLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L39)</sub>

??? example "Details"

    **Signature**

    `createLoan(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/CollateralState.sol#L43)</sub>

??? example "Details"

    **Signature**

    `updateLoan(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
