# ICollateralEth

## Description

**Source:** [contracts/interfaces/ICollateralEth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol)

## External Functions

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L26)</sub>

??? example "Details"

    **Signature**

    `claim(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L6)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id) payable returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L18)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L20)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L4)</sub>

??? example "Details"

    **Signature**

    `open(uint256 amount, bytes32 currency) payable returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L12)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralEth.sol#L10)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``
