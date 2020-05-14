# ExternStateToken

**Source:** [contracts/ExternStateToken.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `tokenState`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L23)</sub>

**Type:** `contract TokenState`

---

### `name`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L26)</sub>

**Type:** `string`

---

### `symbol`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L27)</sub>

**Type:** `string`

---

### `totalSupply`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L28)</sub>

**Type:** `uint256`

---

### `decimals`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L29)</sub>

**Type:** `uint8`

---

### `TRANSFER_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L140)</sub>

**Type:** `bytes32`

---

### `APPROVAL_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L151)</sub>

**Type:** `bytes32`

---

### `TOKENSTATEUPDATED_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L162)</sub>

**Type:** `bytes32`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L31)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _name, string _symbol, uint256 _totalSupply, uint8 _decimals, address _owner) public`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [Proxyable](#proxyable)

---

### `allowance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L55)</sub>

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) public`

---

### `balanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L62)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) external`

---

### `setTokenState`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L73)</sub>

??? example "Details"

    **Signature**

    `setTokenState(contract TokenState _tokenState) external`

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `approve`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L126)</sub>

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) public`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

## Modifiers

## Events

---

### `Transfer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L139)</sub>

- `(address from, address to, uint256 value)`

---

### `Approval`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L150)</sub>

- `(address owner, address spender, uint256 value)`

---

### `TokenStateUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExternStateToken.sol#L161)</sub>

- `(address newTokenState)`

---

