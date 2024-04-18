# OwnerRelayOnEthereum

## Description

**Source:** [contracts/OwnerRelayOnEthereum.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L20)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L43)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `initiateRelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L53)</sub>

??? example "Details"

    **Signature**

    `initiateRelay(address target, bytes payload, uint32 crossDomainGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RelayInitiated](#relayinitiated)

### `initiateRelayBatch`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L66)</sub>

??? example "Details"

    **Signature**

    `initiateRelayBatch(address[] targets, bytes[] payloads, uint32 crossDomainGasLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Argument length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L72)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RelayBatchInitiated](#relaybatchinitiated)

## Events

### `RelayBatchInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L86)</sub>

**Signature**: `RelayBatchInitiated(address[] targets, bytes[] payloads)`

### `RelayInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/OwnerRelayOnEthereum.sol#L85)</sub>

**Signature**: `RelayInitiated(address target, bytes payload)`
