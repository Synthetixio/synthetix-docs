# Migration_AlgolOptimism

## Description

**Source:** [contracts/migrations/Migration_AlgolOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L28)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L39)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L37)</sub>

**Type:** `address`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L30)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L41)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L43)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L51)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L75)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L89)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L102)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L127)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L137)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_AlgolOptimism.sol#L82)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
