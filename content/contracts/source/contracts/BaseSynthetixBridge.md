# BaseSynthetixBridge

## Description

**Source:** [contracts/BaseSynthetixBridge.sol](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L21)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L25)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L49)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L73)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L74)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L67)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L68)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L43)</sub>

??? example "Details"

    **Signature**

    `initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L44)

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L31)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iAbs_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L39)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L60)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L83)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/BaseSynthetixBridge.sol#L81)</sub>

**Signature**: `InitiationSuspended()`
