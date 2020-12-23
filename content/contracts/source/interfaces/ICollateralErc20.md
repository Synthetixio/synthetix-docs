# ICollateralErc20

## Description

**Source:** [contracts/interfaces/ICollateralErc20.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol)

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L6)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L8)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L14)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L16)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L4)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L12)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/interfaces/ICollateralErc20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
