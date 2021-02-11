# IEtherCollateralsUSD

## Description

**Source:** [contracts/interfaces/IEtherCollateralsUSD.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol)

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L16)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `depositCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L20)</sub>

??? example "Details"

    **Signature**

    `depositCollateral(address account, uint256 loanID) payable`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L18)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L14)</sub>

??? example "Details"

    **Signature**

    `openLoan(uint256 _loanAmount) payable returns (uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `repayLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L24)</sub>

??? example "Details"

    **Signature**

    `repayLoan(address _loanCreatorsAddress, uint256 _loanID, uint256 _repayAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L7)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L9)</sub>

??? example "Details"

    **Signature**

    `totalLoansCreated() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L11)</sub>

??? example "Details"

    **Signature**

    `totalOpenLoanCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdrawCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IEtherCollateralsUSD.sol#L22)</sub>

??? example "Details"

    **Signature**

    `withdrawCollateral(uint256 loanID, uint256 withdrawAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
