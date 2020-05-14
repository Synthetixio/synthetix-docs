# ReadProxy

**Source:** [contracts/ReadProxy.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ReadProxy[ReadProxy] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `target`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol#L10)</sub>

**Type:** `address`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol#L12)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol#L14)</sub>

??? example "Details"

    **Signature**

    `setTarget(address _target) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetUpdated](#targetupdated)

---

### `fallback`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol#L19)</sub>

??? example "Details"

    **Signature**

    `() external`

---

## Modifiers

## Events

---

### `TargetUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ReadProxy.sol#L36)</sub>

- `(address newTarget)`

---

