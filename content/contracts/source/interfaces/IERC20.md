# IERC20

## Description

**Source:** [contracts/interfaces/IERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol)

## External Functions

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L18)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L23)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L16)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address owner) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L11)</sub>

??? example "Details"

    **Signature**

    `decimals() view returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L7)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L9)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L21)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L25)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L34)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IERC20.sol#L32)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
