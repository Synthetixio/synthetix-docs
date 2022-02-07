# Migration_MirzamOptimism

## Description

**Source:** [contracts/migrations/Migration_MirzamOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L26)</sub>

**Type:** `contract ExchangeState`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L35)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L28)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L37)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L39)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L46)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L47)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L66)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L81)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L90)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_MirzamOptimism.sol#L73)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
