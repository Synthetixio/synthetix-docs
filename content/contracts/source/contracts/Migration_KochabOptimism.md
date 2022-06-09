# Migration_KochabOptimism

## Description

**Source:** [contracts/migrations/Migration_KochabOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `collateralmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L31)</sub>

**Type:** `contract ICollateralManager`

### `collateralshort_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L33)</sub>

**Type:** `contract CollateralShort`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L29)</sub>

**Type:** `contract IIssuer`

### `new_CollateralShort_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L42)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L40)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L27)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L44)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L46)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L55)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L81)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L95)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L108)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L133)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `collateralmanager_addCollaterals_8`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L161)</sub>

??? example "Details"

    **Signature**

    `collateralmanager_addCollaterals_8()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `collateralshort_addSynths_9`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L167)</sub>

??? example "Details"

    **Signature**

    `collateralshort_addSynths_9()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L143)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_KochabOptimism.sol#L88)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
