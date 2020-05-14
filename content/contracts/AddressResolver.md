# AddressResolver

**Source:** [contracts/AddressResolver.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    AddressResolver[AddressResolver] --> Owned[Owned]
    AddressResolver[AddressResolver] --> IAddressResolver[IAddressResolver]
```

---

## Structs

## Variables

---

### `repository`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L12)</sub>

**Type:** `mapping(bytes32 => address)`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L14)</sub>

??? example "Details"

    **Signature**

    `(address _owner) public`

    **Modifiers**

    * [Owned](#owned)

---

### `importAddresses`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L18)</sub>

??? example "Details"

    **Signature**

    `importAddresses(bytes32[] names, address[] destinations) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `getAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getAddress(bytes32 name) external`

---

### `requireAndGetAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L32)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name, string reason) external`

---

### `getSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/AddressResolver.sol#L38)</sub>

??? example "Details"

    **Signature**

    `getSynth(bytes32 key) external`

---

## Modifiers

## Events

