# ProxyERC20

**Source:** [contracts/ProxyERC20.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ProxyERC20.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ProxyERC20[ProxyERC20] --> Proxy[Proxy]
    ProxyERC20[ProxyERC20] --> IERC20[IERC20]
    Proxy[Proxy] --> Owned[Owned]
```

---

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

---

