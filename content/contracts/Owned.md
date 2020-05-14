# Owned

**Source:** [contracts/Owned.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol)

## Variables

---

### `owner`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L6)</sub>

**Type:** `address`

---

### `nominatedOwner`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L7)</sub>

**Type:** `address`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L9)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Emits**

    * [OwnerChanged](#ownerchanged)

---

### `nominateNewOwner`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L15)</sub>

??? example "Details"

    **Signature**

    `nominateNewOwner(address _owner) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OwnerNominated](#ownernominated)

---

### `acceptOwnership`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L20)</sub>

??? example "Details"

    **Signature**

    `acceptOwnership() external`

    **Emits**

    * [OwnerChanged](#ownerchanged)

---

## Modifiers

---

### `onlyOwner`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L27)</sub>

---

## Events

---

### `OwnerNominated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L32)</sub>

- `(address newOwner)`

---

### `OwnerChanged`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Owned.sol#L33)</sub>

- `(address oldOwner, address newOwner)`

---

