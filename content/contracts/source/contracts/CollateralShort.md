# CollateralShort

## Description

**Source:** [contracts/CollateralShort.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L13)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralState _state, address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## External Functions

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L38)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L44)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L49)

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L70)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L84)</sub>

??? example "Details"

    **Signature**

    `getReward(bytes32 currency, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L74)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L23)</sub>

??? example "Details"

    **Signature**

    `open(uint256 collateral, uint256 amount, bytes32 currency)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L28)

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L62)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/CollateralShort.sol#L56)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
