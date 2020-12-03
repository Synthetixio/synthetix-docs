# ReadProxy

## Description

The ReadProxy is a simple proxy for readonly views. If any mutative function is attempted on the underlying the EVM will revert.

**Source:** [contracts/ReadProxy.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ReadProxy[ReadProxy] --> Owned[Owned]

```

## Variables

### `target`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol#L10)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol#L12)</sub>

??? example "Details"

    **Signature**

    `(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `setTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol#L14)</sub>

??? example "Details"

    **Signature**

    `setTarget(address _target)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TargetUpdated](#targetupdated)

## Fallback Function

### `() (fallback function)`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol#L19)</sub>

??? example "Details"

    **Signature**

    `()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Events

### `TargetUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.0-ovm/contracts/ReadProxy.sol#L36)</sub>

**Signature**: `TargetUpdated(address newTarget)`
