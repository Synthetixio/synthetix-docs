# IERC20

## Description


**Source:** [contracts/interfaces/IERC20.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol)

## Functions


---
### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L6)</sub>



??? example "Details"

    **Signature**

    `name() external`


---
### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L8)</sub>



??? example "Details"

    **Signature**

    `symbol() external`


---
### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L10)</sub>



??? example "Details"

    **Signature**

    `decimals() external`


---
### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L13)</sub>



??? example "Details"

    **Signature**

    `totalSupply() external`


---
### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L15)</sub>



??? example "Details"

    **Signature**

    `balanceOf(address owner) external`


---
### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L17)</sub>



??? example "Details"

    **Signature**

    `allowance(address owner, address spender) external`


---
### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L20)</sub>



??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) external`


---
### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L22)</sub>



??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) external`


---
### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L24)</sub>



??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) external`

## Events


---
### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L31)</sub>



- `(address from, address to, uint256 value)`


---
### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IERC20.sol#L33)</sub>



- `(address owner, address spender, uint256 value)`

