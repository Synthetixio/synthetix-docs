# SelfDestructible

**Source:** [contracts/SelfDestructible.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SelfDestructible[SelfDestructible] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `SELFDESTRUCT_DELAY`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L9)</sub>

**Type:** `uint256`

---

### `initiationTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L11)</sub>

**Type:** `uint256`

---

### `selfDestructInitiated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L12)</sub>

**Type:** `bool`

---

### `selfDestructBeneficiary`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L14)</sub>

**Type:** `address`

## Functions

---

### `setSelfDestructBeneficiary`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L28)</sub>

??? example "Details"

    **Signature**

    `setSelfDestructBeneficiary(address payable _beneficiary) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SelfDestructBeneficiaryUpdated](#selfdestructbeneficiaryupdated)

---

### `initiateSelfDestruct`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L39)</sub>

??? example "Details"

    **Signature**

    `initiateSelfDestruct() external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SelfDestructInitiated](#selfdestructinitiated)

---

### `terminateSelfDestruct`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L49)</sub>

??? example "Details"

    **Signature**

    `terminateSelfDestruct() external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SelfDestructTerminated](#selfdestructterminated)

---

### `selfDestruct`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L60)</sub>

??? example "Details"

    **Signature**

    `selfDestruct() external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SelfDestructed](#selfdestructed)

---

## Modifiers

## Events

---

### `SelfDestructTerminated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L67)</sub>

- `()`

---

### `SelfDestructed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L68)</sub>

- `(address beneficiary)`

---

### `SelfDestructInitiated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L69)</sub>

- `(uint256 selfDestructDelay)`

---

### `SelfDestructBeneficiaryUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SelfDestructible.sol#L70)</sub>

- `(address newBeneficiary)`

---

