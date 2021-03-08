# ICollateralEth

## Description

**Source:** [contracts/interfaces/ICollateralEth.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol)

## External Functions

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L25)</sub>

??? example "Details"

    **Signature**

    `claim(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L7)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L9)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id) payable`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L19)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L5)</sub>

??? example "Details"

    **Signature**

    `open(uint256 amount, bytes32 currency) payable`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/interfaces/ICollateralEth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
