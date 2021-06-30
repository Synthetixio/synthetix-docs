# CollateralState

## Description

**Source:** [contracts/CollateralState.sol](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol)

## Variables

### `loans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L17)</sub>

**Type:** `mapping(address => struct ICollateralLoan.Loan[])`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L19)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L23)</sub>

??? example "Details"

    **Signature**

    `getLoan(address account, uint256 loanID) view returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getNumLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L32)</sub>

??? example "Details"

    **Signature**

    `getNumLoans(address account) view returns (uint256 numLoans)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `createLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L38)</sub>

??? example "Details"

    **Signature**

    `createLoan(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/CollateralState.sol#L42)</sub>

??? example "Details"

    **Signature**

    `updateLoan(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
