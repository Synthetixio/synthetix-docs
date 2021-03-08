# ICollateralErc20

## Description

**Source:** [contracts/interfaces/ICollateralErc20.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol)

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L11)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L13)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L27)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L29)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L5)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L21)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralErc20.sol#L19)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
