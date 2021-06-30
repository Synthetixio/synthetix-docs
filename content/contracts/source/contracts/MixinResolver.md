# MixinResolver

## Description

A utility that gives the inheritor access to the [`AddressResolver`](AddressResolver.md)

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol)

## Variables

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L12)</sub>

The `AddressResolver` instance

**Type:** `contract AddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L16)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Views

### `isResolverCached`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L58)</sub>

??? example "Details"

    **Signature**

    `isResolverCached() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L41)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L22)</sub>

??? example "Details"

    **Signature**

    `combineArrays(bytes32[] first, bytes32[] second) pure returns (bytes32[] combination)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L73)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name) view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "string memory")](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L75)

## External Functions

### `rebuildCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L43)</sub>

??? example "Details"

    **Signature**

    `rebuildCache()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Events

### `CacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-alpha/contracts/MixinResolver.sol#L81)</sub>

**Signature**: `CacheUpdated(bytes32 name, address destination)`
