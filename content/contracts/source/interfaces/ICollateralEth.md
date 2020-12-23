# ICollateralEth

## Description

**Source:** [contracts/interfaces/ICollateralEth.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol)

## External Functions

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L16)</sub>

??? example "Details"

    **Signature**

    `claim(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L6)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L14)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L4)</sub>

??? example "Details"

    **Signature**

    `open(uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L12)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralEth.sol#L10)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
