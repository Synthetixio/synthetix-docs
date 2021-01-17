# ICollateralEth

## Description

**Source:** [contracts/interfaces/ICollateralEth.sol](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol)

## External Functions

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L25)</sub>

??? example "Details"

    **Signature**

    `claim(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L7)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L9)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L19)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L5)</sub>

??? example "Details"

    **Signature**

    `open(uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/interfaces/ICollateralEth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
