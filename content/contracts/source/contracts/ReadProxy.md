# ReadProxy

## Description

The ReadProxy is a simple proxy for readonly views. If any mutative function is attempted on the underlying the EVM will revert.

**Source:** [contracts/ReadProxy.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ReadProxy.sol)

## Variables

### `target`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ReadProxy.sol#L9)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ReadProxy.sol#L11)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `setTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ReadProxy.sol#L13)</sub>

??? example "Details"

    **Signature**

    `setTarget(address _target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetUpdated](#targetupdated)

## Events

### `TargetUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ReadProxy.sol#L35)</sub>

**Signature**: `TargetUpdated(address newTarget)`
