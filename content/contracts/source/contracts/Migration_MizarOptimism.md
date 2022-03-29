# Migration_MizarOptimism

## Description

**Source:** [contracts/migrations/Migration_MizarOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L16)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L23)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L27)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L34)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L25)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L38)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L46)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L70)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L84)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L95)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L120)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_5`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L126)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_5()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
