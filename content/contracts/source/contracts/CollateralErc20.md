# CollateralErc20

## Description

**Source:** [contracts/CollateralErc20.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol)

## Variables

### `underlyingContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L12)</sub>

**Type:** `address`

### `underlyingContractDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L14)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L16)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral, address _underlyingContract, uint256 _underlyingDecimals)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `scaleDownCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L114)</sub>

??? example "Details"

    **Signature**

    `scaleDownCollateral(uint256 collateral) view returns (uint256 scaledDown)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `scaleUpCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L108)</sub>

??? example "Details"

    **Signature**

    `scaleUpCollateral(uint256 collateral) view returns (uint256 scaledUp)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L47)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L56)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L61)

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L91)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L95)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L31)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency) returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L36)

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L83)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralErc20.sol#L71)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``
