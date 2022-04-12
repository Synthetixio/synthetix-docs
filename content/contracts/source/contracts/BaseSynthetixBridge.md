# BaseSynthetixBridge

## Description

**Source:** [contracts/BaseSynthetixBridge.sol](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L23)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L27)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L55)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L80)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L81)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L74)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L75)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L45)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L49)</sub>

??? example "Details"

    **Signature**

    `initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L50)

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L33)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iAbs_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L41)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L37)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L67)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L90)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.67.0-alpha/contracts/BaseSynthetixBridge.sol#L88)</sub>

**Signature**: `InitiationSuspended()`
