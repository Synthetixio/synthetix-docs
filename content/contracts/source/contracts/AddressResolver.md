# AddressResolver

## Description

This contract is a type of Service Locator pattern that allows for easier interaction between multiple contracts. Instead of contract A needing references to contracts B and C (and updating every release), contract A can refer to an `AddressResolver` and query for B and C at transaction time. Then, during a release, the AddressResolver is updated with the latest B and C contract. Thus this ensures that contract A always has the latest B and C contracts.

**Source:** [contracts/AddressResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol)

## Variables

### `repository`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L13)</sub>

The mapping of contract name to address

**Type:** `mapping(bytes32 => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L15)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areAddressesImported`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L40)</sub>

??? example "Details"

    **Signature**

    `areAddressesImported(bytes32[] names, address[] destinations) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L49)</sub>

Returns a single address by it's `bytes32` key.

??? example "Details"

    **Signature**

    `getAddress(bytes32 name) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L59)</sub>

!!! Warning "Not yet on mainnet"

    This view, while in source, is not yet on mainnet. It is planned in the `v2.23` Acrux release. As a workaround you can use `IAddressResolver.getAddress("Synthetix").synths(key)`

??? example "Details"

    **Signature**

    `getSynth(bytes32 key) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cannot find Issuer address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L61)

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L53)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name, string reason) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string calldata")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L55)

## Restricted Functions

### `importAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L19)</sub>

Import one or more addresses into the system for the given keys. Note: this function will overrwite any previous entries with the same key names, allowing for inline updates.

??? example "Details"

    **Signature**

    `importAddresses(bytes32[] names, address[] destinations)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L20)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## External Functions

### `rebuildCaches`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L32)</sub>

??? example "Details"

    **Signature**

    `rebuildCaches(contract MixinResolver[] destinations)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `AddressImported`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressResolver.sol#L67)</sub>

**Signature**: `AddressImported(bytes32 name, address destination)`
