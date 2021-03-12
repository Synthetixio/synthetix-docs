# MixinResolver

## Description

A utility that gives the inheritor access to the [`AddressResolver`](AddressResolver.md)

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol)

## Variables

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L13)</sub>

The `AddressResolver` instance

**Type:** `contract AddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L17)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Internal Functions

### `combineArrays`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L23)</sub>

??? example "Details"

    **Signature**

    `combineArrays(bytes32[] first, bytes32[] second) pure returns (bytes32[] combination)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L76)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L78)

## External Functions

### `isResolverCached`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L61)</sub>

??? example "Details"

    **Signature**

    `isResolverCached() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rebuildCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L44)</sub>

??? example "Details"

    **Signature**

    `rebuildCache()`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L42)</sub>

**Type:** `bytes32[]`

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Events

### `CacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.1-alpha/contracts/MixinResolver.sol#L84)</sub>

**Signature**: `CacheUpdated(bytes32 name, address destination)`
