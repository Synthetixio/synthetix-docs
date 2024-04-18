# EternalStorage

## Description

This is an implementation of the well-known eternal storage smart contract pattern, described in more detail [here](https://fravoll.github.io/solidity-patterns/eternal_storage.html) and [here](https://medium.com/rocket-pool/upgradable-solidity-contract-design-54789205276d).

In short, it is a key-value store for variables which are retrieved by a byte string, typically a hash of their name and an index.

The contract is architected this way so that the access pattern is uniform and the memory layout is not dependent on implementation or compilation details. In this way, smart contracts can retain state between updates while minimising the difficulty and expense of migrating this information.

Each type of variable has its own mapping, along with getters and setters. As this entails some replication, this document will express functions and variables generically with the type variable 𝕋, where 𝕋 $\in$ {`uint`, `string`, `address`, `bytes`, `bytes32`, `bool`, `int`}. This notation is used slightly abusively, standing in for both names and types; in the former case, substitution is in camelCase. More complex types, such as structs and nested mappings, are not supported.

**Source:** [contracts/EternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L16)</sub>

Initialises the inherited [`State`](State.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 record) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getBooleanValue(bytes32 record) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 record) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L67)</sub>

??? example "Details"

    **Signature**

    `getBytesValue(bytes32 record) view returns (bytes)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 record) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L41)</sub>

??? example "Details"

    **Signature**

    `getStringValue(bytes32 record) view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 record) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L62)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L101)</sub>

??? example "Details"

    **Signature**

    `deleteBooleanValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L88)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L75)</sub>

??? example "Details"

    **Signature**

    `deleteBytesValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L114)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L49)</sub>

??? example "Details"

    **Signature**

    `deleteStringValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `deleteUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L36)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L58)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 record, address value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBooleanValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L97)</sub>

??? example "Details"

    **Signature**

    `setBooleanValue(bytes32 record, bool value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L84)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 record, bytes32 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setBytesValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L71)</sub>

??? example "Details"

    **Signature**

    `setBytesValue(bytes32 record, bytes value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L110)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 record, int256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setStringValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L45)</sub>

??? example "Details"

    **Signature**

    `setStringValue(bytes32 record, string value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EternalStorage.sol#L32)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 record, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
