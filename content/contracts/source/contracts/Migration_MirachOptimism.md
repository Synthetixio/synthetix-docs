# Migration_MirachOptimism

## Description

**Source:** [contracts/migrations/Migration_MirachOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L24)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L29)</sub>

**Type:** `contract FuturesMarketSettings`

### `new_FuturesMarketXAG_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L45)</sub>

**Type:** `address`

### `new_FuturesMarketXAU_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L47)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L41)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L43)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L39)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L32)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L51)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L59)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L79)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L112)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L131)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L156)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L105)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_removeMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L93)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_removeMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.0-alpha/contracts/migrations/Migration_MirachOptimism.sol#L86)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
