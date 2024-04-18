# Migration_Acrab

## Description

**Source:** [contracts/migrations/Migration_Acrab.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `debtcache_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L28)</sub>

**Type:** `contract DebtCache`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L30)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L37)</sub>

**Type:** `address`

### `new_DynamicSynthRedeemer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L41)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L39)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L45)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L53)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L78)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L92)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L107)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L132)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_8`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L144)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_8()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Acrab.sol#L85)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
