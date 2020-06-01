# IERC20

## Description

**Source:** [contracts/interfaces/IERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol)

## Constants

## Variables

## Functions

---

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L17)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender)`

    **State Mutability**

    `view`

---

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L22)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value)`

    **State Mutability**

    `nonpayable`

---

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L15)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address owner)`

    **State Mutability**

    `view`

---

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `decimals()`

    **State Mutability**

    `view`

---

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L6)</sub>

??? example "Details"

    **Signature**

    `name()`

    **State Mutability**

    `view`

---

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L8)</sub>

??? example "Details"

    **Signature**

    `symbol()`

    **State Mutability**

    `view`

---

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalSupply()`

    **State Mutability**

    `view`

---

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L20)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value)`

    **State Mutability**

    `nonpayable`

---

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L24)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value)`

    **State Mutability**

    `nonpayable`

## Events

---

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L33)</sub>

- `(address owner, address spender, uint256 value)`

---

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IERC20.sol#L31)</sub>

- `(address from, address to, uint256 value)`
