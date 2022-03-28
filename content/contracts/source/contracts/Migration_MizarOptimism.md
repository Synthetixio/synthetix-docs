# Migration_MizarOptimism

## Description

**Source:** [contracts/migrations/Migration_MizarOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L30)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L28)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L38)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L40)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L42)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L50)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L51)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L74)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L88)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L99)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L124)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.65.0-alpha/contracts/migrations/Migration_MizarOptimism.sol#L81)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
