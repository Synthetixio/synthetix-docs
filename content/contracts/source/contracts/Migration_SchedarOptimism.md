# Migration_SchedarOptimism

## Description

**Source:** [contracts/migrations/Migration_SchedarOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L19)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L26)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L35)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L30)</sub>

**Type:** `contract FeePoolEternalStorage`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L37)</sub>

**Type:** `contract Issuer`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L44)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L46)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L28)</sub>

**Type:** `contract Proxy`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L33)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L48)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L50)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L60)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L61)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L65)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L97)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L111)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L124)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L149)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L155)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L180)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_10`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L205)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_10()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_SchedarOptimism.sol#L104)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
