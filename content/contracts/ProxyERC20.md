# ProxyERC20

This is a wrapper around [`Proxy`](Proxy.md) which explicitly implements the [ERC20 token standard](https://docs.openzeppelin.com/contracts/2.x/api/token/erc20#ERC20Detailed).


As a result this proxy can verifiably support token functionality in its ABI if it sits in front of an ERC20-compliant smart contract. Apart from these functions, ProxyERC20 operates identically to the [proxy it inherits](Proxy.md).


In the Synthetix system, an ERC20 proxy operates in front of the main [SNX token contract](Synthetix.md), alongside the pre-existing standard proxy. Thus clients can choose to use either of these two proxies to interact with the system.


**Source:** [ProxyERC20.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/ProxyERC20.sol)


## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    ProxyERC20[ProxyERC20] --> Proxy[Proxy]
    Proxy[Proxy] --> Owned[Owned]
```

## Description


**Source:** [contracts/ProxyERC20.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol)

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L10)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Proxy](#proxy)

## Functions


---
### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L55)</sub>



??? example "Details"

    **Signature**

    `allowance(address owner, address spender)`

    **State Mutability**

    `view`


---
### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L85)</sub>



??? example "Details"

    **Signature**

    `approve(address spender, uint256 value)`

    **State Mutability**

    `nonpayable`


---
### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L44)</sub>



??? example "Details"

    **Signature**

    `balanceOf(address account)`

    **State Mutability**

    `view`


---
### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L24)</sub>



??? example "Details"

    **Signature**

    `decimals()`

    **State Mutability**

    `view`


---
### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L14)</sub>



??? example "Details"

    **Signature**

    `name()`

    **State Mutability**

    `view`


---
### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L19)</sub>



??? example "Details"

    **Signature**

    `symbol()`

    **State Mutability**

    `view`


---
### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L34)</sub>



??? example "Details"

    **Signature**

    `totalSupply()`

    **State Mutability**

    `view`


---
### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L65)</sub>



??? example "Details"

    **Signature**

    `transfer(address to, uint256 value)`

    **State Mutability**

    `nonpayable`


---
### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L102)</sub>



??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value)`

    **State Mutability**

    `nonpayable`

## Variables

