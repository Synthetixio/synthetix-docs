# DappMaintenance

## Description

**Source:** [contracts/DappMaintenance.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    DappMaintenance[DappMaintenance] --> Owned[Owned]

```

## Variables

### `isPausedSX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L16)</sub>

**Type:** `bool`

### `isPausedStaking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L15)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L21)</sub>

??? example "Details"

    **Signature**

    `(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner address cannot be 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L22)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Restricted Functions

### `setMaintenanceModeAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L27)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeAll(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [StakingMaintenance](#stakingmaintenance)

    * [SXMaintenance](#sxmaintenance)

### `setMaintenanceModeSX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L39)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeSX(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SXMaintenance](#sxmaintenance)

### `setMaintenanceModeStaking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L34)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeStaking(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [StakingMaintenance](#stakingmaintenance)

## Events

### `SXMaintenance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L45)</sub>

**Signature**: `SXMaintenance(bool isPaused)`

### `StakingMaintenance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/DappMaintenance.sol#L44)</sub>

**Signature**: `StakingMaintenance(bool isPaused)`
