# MixinResolver

## Description

A utility that gives the inheritor access to the [`AddressResolver`](AddressResolver.md)

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol)

## Variables

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L8)</sub>

The `AddressResolver` instance

**Type:** `contract AddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `isResolverCached`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L54)</sub>

??? example "Details"

    **Signature**

    `isResolverCached() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L37)</sub>

**Type:** `bytes32[]`

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `combineArrays`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L18)</sub>

??? example "Details"

    **Signature**

    `combineArrays(bytes32[] first, bytes32[] second) pure returns (bytes32[] combination)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L69)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L71)

## External Functions

### `rebuildCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L39)</sub>

??? example "Details"

    **Signature**

    `rebuildCache()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Events

### `CacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MixinResolver.sol#L77)</sub>

**Signature**: `CacheUpdated(bytes32 name, address destination)`
