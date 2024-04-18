# IWETH

## Description

**Source:** [contracts/interfaces/IWETH.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol)

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L16)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L14)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address owner) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L9)</sub>

??? example "Details"

    **Signature**

    `decimals() view returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L5)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L7)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L12)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L21)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L30)</sub>

??? example "Details"

    **Signature**

    `deposit() payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L19)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L23)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L32)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L36)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L37)</sub>

**Signature**: `Deposit(address to, uint256 amount)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L35)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`

### `Withdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWETH.sol#L38)</sub>

**Signature**: `Withdrawal(address to, uint256 amount)`
