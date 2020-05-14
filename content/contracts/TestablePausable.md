# TestablePausable

**Source:** [contracts/test-helpers/TestablePausable.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    TestablePausable[TestablePausable] --> Pausable[Pausable]
    Pausable[Pausable] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `someValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L11)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L13)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Owned](#owned)

    * [Pausable](#pausable)

---

### `setSomeValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L15)</sub>

??? example "Details"

    **Signature**

    `setSomeValue(uint256 _value) external`

    **Modifiers**

    * [notPaused](#notpaused)

---

## Modifiers

## Events

