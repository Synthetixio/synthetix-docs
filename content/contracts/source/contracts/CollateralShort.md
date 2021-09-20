# CollateralShort

## Description

**Source:** [contracts/CollateralShort.sol](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralState _state, address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L34)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L40)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance too low")](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L45)

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L75)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L79)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L22)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance too low")](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L27)

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L58)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `repayWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L66)</sub>

??? example "Details"

    **Signature**

    `repayWithCollateral(address borrower, uint256 id, uint256 amount, bool payInterest)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0/contracts/CollateralShort.sol#L52)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``
