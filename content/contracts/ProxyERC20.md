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

## Functions


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L10)</sub>



??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Proxy](#proxy)


---
### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L14)</sub>



??? example "Details"

    **Signature**

    `name() public`


---
### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L19)</sub>



??? example "Details"

    **Signature**

    `symbol() public`


---
### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L24)</sub>



??? example "Details"

    **Signature**

    `decimals() public`


---
### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L34)</sub>



??? example "Details"

    **Signature**

    `totalSupply() public`


---
### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L44)</sub>



??? example "Details"

    **Signature**

    `balanceOf(address account) public`


---
### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L55)</sub>



??? example "Details"

    **Signature**

    `allowance(address owner, address spender) public`


---
### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L65)</sub>



??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) public`


---
### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L85)</sub>



??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) public`


---
### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol#L102)</sub>



??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) public`

## Description


**Source:** [contracts/ProxyERC20.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol)

