# ProxyERC20

## Description

This is a wrapper around [`Proxy`](Proxy.md) which explicitly implements the [ERC20 token standard](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20Detailed).

As a result this proxy can verifiably support token functionality in its ABI if it sits in front of an ERC20-compliant smart contract. Apart from these functions, ProxyERC20 operates identically to the [proxy it inherits](Proxy.md).

In the Synthetix system, an ERC20 proxy operates in front of the main [SNX token contract](Synthetix.md), alongside the pre-existing standard proxy. Thus clients can choose to use either of these two proxies to interact with the system.

**Source:** [contracts/ProxyERC20.sol](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ProxyERC20[ProxyERC20] --> Proxy[Proxy]
    Proxy[Proxy] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L10)</sub>

??? example "Details"

    **Signature**

    `(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L55)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L44)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L24)</sub>

??? example "Details"

    **Signature**

    `decimals() returns (uint8)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L14)</sub>

??? example "Details"

    **Signature**

    `name() returns (string)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L19)</sub>

??? example "Details"

    **Signature**

    `symbol() returns (string)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L34)</sub>

??? example "Details"

    **Signature**

    `totalSupply() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L85)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L65)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/ProxyERC20.sol#L102)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`
