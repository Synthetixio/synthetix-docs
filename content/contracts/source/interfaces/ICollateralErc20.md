# ICollateralErc20

## Description

**Source:** [contracts/interfaces/ICollateralErc20.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol)

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L12)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L26)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L28)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L4)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency) returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L20)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralErc20.sol#L18)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``
