# MixinResolver

## Description

A utility that gives the inheritor access to the [`AddressResolver`](AddressResolver.md)

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constants

### `MAX_ADDRESSES_FROM_RESOLVER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L18)</sub>

**Type:** `uint256`

## Variables

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L12)</sub>

The `AddressResolver` instance

**Type:** `contract AddressResolver`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L16)</sub>

**Type:** `bytes32[]`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L20)</sub>

??? example "Details"

    **Signature**

    `(address _resolver, bytes32[24] _addressesToCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner must be set)](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L22)

## Views

### `getResolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getResolverAddressesRequired() returns (bytes32[24])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isResolverCached`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L58)</sub>

??? example "Details"

    **Signature**

    `isResolverCached(contract AddressResolver _resolver) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setResolverAndSyncCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L38)</sub>

??? example "Details"

    **Signature**

    `setResolverAndSyncCache(contract AddressResolver _resolver)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `appendToAddressCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L87)</sub>

??? example "Details"

    **Signature**

    `appendToAddressCache(bytes32 name)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Max resolver cache size met)](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L89)

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L50)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name, string reason) returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., memory)](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/MixinResolver.sol#L52)
