# Migration_CaphOptimismStep1

## Description

**Source:** [contracts/migrations/Migration_CaphOptimismStep1.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L15)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L22)</sub>

**Type:** `contract FuturesMarketManager`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L32)</sub>

**Type:** `address`

### `new_PerpsV2ExchangeRate_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L36)</sub>

**Type:** `address`

### `new_PerpsV2MarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L34)</sub>

**Type:** `address`

### `new_PerpsV2MarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L38)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L40)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L42)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L48)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L68)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L144)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_5`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L161)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_5()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L178)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L82)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L105)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L120)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L135)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep1.sol#L75)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
