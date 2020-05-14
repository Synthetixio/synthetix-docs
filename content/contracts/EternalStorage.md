# EternalStorage

**Source:** [contracts/EternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    EternalStorage[EternalStorage] --> State[State]
    State[State] --> Owned[Owned]
```

---

## Variables

---

### `UIntStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L20)</sub>

**Type:** `mapping(bytes32 => uint256)`

---

### `StringStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L21)</sub>

**Type:** `mapping(bytes32 => string)`

---

### `AddressStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L22)</sub>

**Type:** `mapping(bytes32 => address)`

---

### `BytesStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L23)</sub>

**Type:** `mapping(bytes32 => bytes)`

---

### `Bytes32Storage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L24)</sub>

**Type:** `mapping(bytes32 => bytes32)`

---

### `BooleanStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L25)</sub>

**Type:** `mapping(bytes32 => bool)`

---

### `IntStorage`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L26)</sub>

**Type:** `mapping(bytes32 => int256)`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L17)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract) public`

    **Modifiers**

    * [Owned](#owned)

    * [State](#state)

---

### `getUIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L29)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 record) external`

---

### `setUIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L33)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 record, uint256 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteUIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L37)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getStringValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getStringValue(bytes32 record) external`

---

### `setStringValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L46)</sub>

??? example "Details"

    **Signature**

    `setStringValue(bytes32 record, string value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteStringValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L50)</sub>

??? example "Details"

    **Signature**

    `deleteStringValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getAddressValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L55)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 record) external`

---

### `setAddressValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L59)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 record, address value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteAddressValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L63)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getBytesValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getBytesValue(bytes32 record) external`

---

### `setBytesValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L72)</sub>

??? example "Details"

    **Signature**

    `setBytesValue(bytes32 record, bytes value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteBytesValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L76)</sub>

??? example "Details"

    **Signature**

    `deleteBytesValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getBytes32Value`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L81)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 record) external`

---

### `setBytes32Value`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L85)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 record, bytes32 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteBytes32Value`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L89)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getBooleanValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L94)</sub>

??? example "Details"

    **Signature**

    `getBooleanValue(bytes32 record) external`

---

### `setBooleanValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L98)</sub>

??? example "Details"

    **Signature**

    `setBooleanValue(bytes32 record, bool value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteBooleanValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L102)</sub>

??? example "Details"

    **Signature**

    `deleteBooleanValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `getIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L107)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 record) external`

---

### `setIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L111)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 record, int256 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `deleteIntValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EternalStorage.sol#L115)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 record) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

