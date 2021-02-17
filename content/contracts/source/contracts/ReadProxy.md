# ReadProxy

## Description

The ReadProxy is a simple proxy for readonly views. If any mutative function is attempted on the underlying the EVM will revert.

**Source:** [contracts/ReadProxy.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/ReadProxy.sol)

## Variables

### `target`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/ReadProxy.sol#L10)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/ReadProxy.sol#L19)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Restricted Functions

### `setTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/ReadProxy.sol#L14)</sub>

??? example "Details"

    **Signature**

    `setTarget(address _target)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetUpdated](#targetupdated)

## Events

### `TargetUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/ReadProxy.sol#L36)</sub>

**Signature**: `TargetUpdated(address newTarget)`
