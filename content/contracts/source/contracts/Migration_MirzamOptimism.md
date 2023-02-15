# Migration_MirzamOptimism

## Description

**Source:** [contracts/migrations/Migration_MirzamOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L16)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L23)</sub>

**Type:** `contract AddressResolver`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L25)</sub>

**Type:** `contract ExchangeState`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L34)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L27)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L38)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L46)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L68)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L82)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L93)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_MirzamOptimism.sol#L75)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
