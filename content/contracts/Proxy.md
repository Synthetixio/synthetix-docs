# Proxy

**Source:** [contracts/Proxy.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Proxy[Proxy] --> Owned[Owned]
```

---

## Variables

---

### `target`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L12)</sub>

**Type:** `contract Proxyable`

---

### `useDELEGATECALL`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L13)</sub>

**Type:** `bool`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L15)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L17)</sub>

??? example "Details"

    **Signature**

    `setTarget(contract Proxyable _target) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetUpdated](#targetupdated)

---

### `setUseDELEGATECALL`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L22)</sub>

??? example "Details"

    **Signature**

    `setUseDELEGATECALL(bool value) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `_emit`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L26)</sub>

??? example "Details"

    **Signature**

    `_emit(bytes callData, uint256 numTopics, bytes32 topic1, bytes32 topic2, bytes32 topic3, bytes32 topic4) external`

    **Modifiers**

    * [onlyTarget](#onlytarget)

---

### `fallback`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L62)</sub>

??? example "Details"

    **Signature**

    `() external`

---

## Modifiers

---

### `onlyTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L99)</sub>

---

## Events

---

### `TargetUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxy.sol#L104)</sub>

- `(contract Proxyable newTarget)`

---

