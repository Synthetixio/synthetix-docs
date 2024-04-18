# OwnerRelayOnOptimism

## Description

**Source:** [contracts/OwnerRelayOnOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L20)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver, address _temporaryOwner, uint256 _ownershipDuration)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L57)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `directRelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L65)</sub>

??? example "Details"

    **Signature**

    `directRelay(address target, bytes payload)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyTemporaryOwner](#onlytemporaryowner)

    **Emits**

    * [DirectRelay](#directrelay)

### `finalizeRelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L71)</sub>

??? example "Details"

    **Signature**

    `finalizeRelay(address target, bytes payload)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMessengerAndL1Relayer](#onlymessengerandl1relayer)

    **Emits**

    * [RelayFinalized](#relayfinalized)

### `finalizeRelayBatch`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `finalizeRelayBatch(address[] targets, bytes[] payloads)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMessengerAndL1Relayer](#onlymessengerandl1relayer)

    **Emits**

    * [RelayBatchFinalized](#relaybatchfinalized)

## Internal Functions

### `_onlyAllowMessengerAndL1Relayer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L43)</sub>

??? example "Details"

    **Signature**

    `_onlyAllowMessengerAndL1Relayer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not the messenger")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L46)

    * [require(..., "L1 sender is not the owner relay")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L47)

## Modifiers

### `onlyMessengerAndL1Relayer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L50)</sub>

## Events

### `DirectRelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L87)</sub>

**Signature**: `DirectRelay(address target, bytes payload)`

### `RelayBatchFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L89)</sub>

**Signature**: `RelayBatchFinalized(address[] targets, bytes[] payloads)`

### `RelayFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnOptimism.sol#L88)</sub>

**Signature**: `RelayFinalized(address target, bytes payload)`
