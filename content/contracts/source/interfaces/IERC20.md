# IERC20

## Description

**Source:** [contracts/interfaces/IERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol)

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L17)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L15)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address owner) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `decimals() returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L6)</sub>

??? example "Details"

    **Signature**

    `name() returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L8)</sub>

??? example "Details"

    **Signature**

    `symbol() returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L22)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L20)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L24)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L33)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.0-alpha/contracts/interfaces/IERC20.sol#L31)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
