# Migration_KochabOptimism

## Description

**Source:** [contracts/migrations/Migration_KochabOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L16)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L23)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L27)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L34)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L25)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L38)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L65)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L79)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L90)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L115)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L124)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.0/contracts/migrations/Migration_KochabOptimism.sol#L72)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
