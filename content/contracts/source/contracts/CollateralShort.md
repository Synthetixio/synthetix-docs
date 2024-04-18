# CollateralShort

## Description

**Source:** [contracts/CollateralShort.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L9)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getShortAndCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L74)</sub>

??? example "Details"

    **Signature**

    `getShortAndCollateral(address, uint256 id) view returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_closeWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L138)</sub>

??? example "Details"

    **Signature**

    `_closeWithCollateral(address borrower, uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [LoanClosedByRepayment](#loanclosedbyrepayment)

### `_repayWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L96)</sub>

??? example "Details"

    **Signature**

    `_repayWithCollateral(address borrower, uint256 id, uint256 payment) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment too high")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L109)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L29)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closeWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L61)</sub>

??? example "Details"

    **Signature**

    `closeWithCollateral(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L35)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L40)

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L82)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L86)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L18)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency) returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L53)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `repayWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L69)</sub>

??? example "Details"

    **Signature**

    `repayWithCollateral(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralShort.sol#L47)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``
