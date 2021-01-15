# CollateralErc20

## Description

**Source:** [contracts/CollateralErc20.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    CollateralErc20[CollateralErc20] --> Collateral[Collateral]
    Collateral[Collateral] --> Owned[Owned]
    Collateral[Collateral] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Variables

### `underlyingContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L17)</sub>

**Type:** `address`

### `underlyingContractDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L19)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L21)</sub>

??? example "Details"

    **Signature**

    `(contract CollateralState _state, address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral, address _underlyingContract, uint256 _underlyingDecimals)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `scaleDownCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L120)</sub>

??? example "Details"

    **Signature**

    `scaleDownCollateral(uint256 collateral) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `scaleUpCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L114)</sub>

??? example "Details"

    **Signature**

    `scaleUpCollateral(uint256 collateral) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L53)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L62)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Allowance not high enough)](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L67)

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L97)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L101)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L37)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Allowance not high enough)](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L42)

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L89)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/CollateralErc20.sol#L77)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
