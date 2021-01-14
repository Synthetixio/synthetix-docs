# MixinResolver

## Description

A utility that gives the inheritor access to the [`AddressResolver`](AddressResolver.md)

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol)

## Variables

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L13)</sub>

The `AddressResolver` instance

**Type:** `contract AddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L17)</sub>

??? example "Details"

    **Signature**

    `(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Views

### `isResolverCached`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L61)</sub>

??? example "Details"

    **Signature**

    `isResolverCached() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L42)</sub>

**Type:** `bytes32[]`

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `combineArrays`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L23)</sub>

??? example "Details"

    **Signature**

    `combineArrays(bytes32[] first, bytes32[] second) returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L76)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name) returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., memory)](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L78)

## External Functions

### `rebuildCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L44)</sub>

??? example "Details"

    **Signature**

    `rebuildCache()`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Events

### `CacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/MixinResolver.sol#L84)</sub>

**Signature**: `CacheUpdated(bytes32 name, address destination)`
