# IEtherCollateral

## Description

**Source:** [contracts/interfaces/IEtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol)

## Views

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L6)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L8)</sub>

??? example "Details"

    **Signature**

    `totalLoansCreated() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L10)</sub>

??? example "Details"

    **Signature**

    `totalOpenLoanCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L15)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L17)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.3/contracts/interfaces/IEtherCollateral.sol#L13)</sub>

??? example "Details"

    **Signature**

    `openLoan() payable returns (uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`
