# IEtherCollateral

## Description

**Source:** [contracts/interfaces/IEtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol)

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L16)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L18)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L14)</sub>

??? example "Details"

    **Signature**

    `openLoan() payable returns (uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L7)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L9)</sub>

??? example "Details"

    **Signature**

    `totalLoansCreated() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/interfaces/IEtherCollateral.sol#L11)</sub>

??? example "Details"

    **Signature**

    `totalOpenLoanCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
