# EternalStorage

## Description

This is an implementation of the well-known eternal storage smart contract pattern, described in more detail [here](https://fravoll.github.io/solidity-patterns/eternal_storage.html) and [here](https://medium.com/rocket-pool/upgradable-solidity-contract-design-54789205276d).

In short, it is a key-value store for variables which are retrieved by a byte string, typically a hash of their name and an index.

The contract is architected this way so that the access pattern is uniform and the memory layout is not dependent on implementation or compilation details. In this way, smart contracts can retain state between updates while minimising the difficulty and expense of migrating this information.

Each type of variable has its own mapping, along with getters and setters. As this entails some replication, this document will express functions and variables generically with the type variable 𝕋, where 𝕋 $\in$ {`uint`, `string`, `address`, `bytes`, `bytes32`, `bool`, `int`}. This notation is used slightly abusively, standing in for both names and types; in the former case, substitution is in camelCase. More complex types, such as structs and nested mappings, are not supported.

**Source:** [contracts/EternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    EternalStorage[EternalStorage] --> State[State]
    State[State] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L17)</sub>

Initialises the inherited [`State`](State.md) instance.

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `getAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L55)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 record) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L94)</sub>

??? example "Details"

    **Signature**

    `getBooleanValue(bytes32 record) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L81)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 record) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L68)</sub>

??? example "Details"

    **Signature**

    `getBytesValue(bytes32 record) returns (bytes)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L107)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 record) returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getStringValue(bytes32 record) returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L29)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 record) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L63)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L102)</sub>

??? example "Details"

    **Signature**

    `deleteBooleanValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L89)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L76)</sub>

??? example "Details"

    **Signature**

    `deleteBytesValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L115)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L50)</sub>

??? example "Details"

    **Signature**

    `deleteStringValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L37)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L59)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 record, address value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L98)</sub>

??? example "Details"

    **Signature**

    `setBooleanValue(bytes32 record, bool value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L85)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 record, bytes32 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L72)</sub>

??? example "Details"

    **Signature**

    `setBytesValue(bytes32 record, bytes value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L111)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 record, int256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L46)</sub>

??? example "Details"

    **Signature**

    `setStringValue(bytes32 record, string value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.2-alpha/contracts/EternalStorage.sol#L33)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 record, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
