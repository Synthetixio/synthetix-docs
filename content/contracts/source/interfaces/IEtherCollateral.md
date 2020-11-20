# IEtherCollateral

## Description

**Source:** [contracts/interfaces/IEtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol)

## Views

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L7)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L9)</sub>

??? example "Details"

    **Signature**

    `totalLoansCreated() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L11)</sub>

??? example "Details"

    **Signature**

    `totalOpenLoanCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L16)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L18)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/interfaces/IEtherCollateral.sol#L14)</sub>

??? example "Details"

    **Signature**

    `openLoan() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`
