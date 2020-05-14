# Pausable

**Source:** [contracts/Pausable.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Pausable[Pausable] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `lastPauseTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L9)</sub>

**Type:** `uint256`

---

### `paused`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L10)</sub>

**Type:** `bool`

## Functions

---

### `setPaused`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L22)</sub>

??? example "Details"

    **Signature**

    `setPaused(bool _paused) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PauseChanged](#pausechanged)

---

## Modifiers

---

### `notPaused`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L42)</sub>

---

## Events

---

### `PauseChanged`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L40)</sub>

- `(bool isPaused)`

---

