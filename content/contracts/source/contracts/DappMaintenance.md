# DappMaintenance

## Description

**Source:** [contracts/DappMaintenance.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol)

## Variables

### `isPausedSX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L15)</sub>

**Type:** `bool`

### `isPausedStaking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L14)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L20)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Owner address cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L21)

    **Emits**

    * [OwnerChanged](#ownerchanged)

## Restricted Functions

### `setMaintenanceModeAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L26)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeAll(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [StakingMaintenance](#stakingmaintenance)

    * [SXMaintenance](#sxmaintenance)

### `setMaintenanceModeSX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L38)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeSX(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SXMaintenance](#sxmaintenance)

### `setMaintenanceModeStaking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L33)</sub>

??? example "Details"

    **Signature**

    `setMaintenanceModeStaking(bool isPaused)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [StakingMaintenance](#stakingmaintenance)

## Events

### `SXMaintenance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L44)</sub>

**Signature**: `SXMaintenance(bool isPaused)`

### `StakingMaintenance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DappMaintenance.sol#L43)</sub>

**Signature**: `StakingMaintenance(bool isPaused)`
