# CollateralEth

## Description

**Source:** [contracts/CollateralEth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol)

## Variables

### `pendingWithdrawals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L12)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## External Functions

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L65)</sub>

??? example "Details"

    **Signature**

    `claim(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Transfer failed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L71)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

### `close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L27)</sub>

??? example "Details"

    **Signature**

    `close(uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L33)</sub>

??? example "Details"

    **Signature**

    `deposit(address borrower, uint256 id) payable returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L51)</sub>

??? example "Details"

    **Signature**

    `draw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L55)</sub>

??? example "Details"

    **Signature**

    `liquidate(address borrower, uint256 id, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L23)</sub>

??? example "Details"

    **Signature**

    `open(uint256 amount, bytes32 currency) payable returns (uint256 id)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L43)</sub>

??? example "Details"

    **Signature**

    `repay(address borrower, uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralEth.sol#L37)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 id, uint256 amount) returns (uint256 principal, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``
