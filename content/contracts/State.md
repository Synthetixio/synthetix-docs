# State

**Source:** [contracts/State.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/State.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    State[State] --> Owned[Owned]
```

---

## Variables

---

### `associatedContract`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/State.sol#L11)</sub>

**Type:** `address`

## Functions

---

### `setAssociatedContract`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/State.sol#L24)</sub>

??? example "Details"

    **Signature**

    `setAssociatedContract(address _associatedContract) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AssociatedContractUpdated](#associatedcontractupdated)

---

## Modifiers

---

### `onlyAssociatedContract`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/State.sol#L31)</sub>

---

## Events

---

### `AssociatedContractUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/State.sol#L38)</sub>

- `(address associatedContract)`

---

