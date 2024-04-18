# IERC20

## Description

**Source:** [contracts/interfaces/IERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol)

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L17)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L15)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address owner) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `decimals() view returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L6)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L8)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L22)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L20)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L24)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L33)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IERC20.sol#L31)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
