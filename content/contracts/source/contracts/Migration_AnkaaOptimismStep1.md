# Migration_AnkaaOptimismStep1

## Description

**Source:** [contracts/migrations/Migration_AnkaaOptimismStep1.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L19)</sub>

**Type:** `address`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L49)</sub>

**Type:** `contract ExchangeRates`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L32)</sub>

**Type:** `contract FuturesMarketManager`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L29)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L35)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstatecompperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L43)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateetcperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L40)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateethbtcperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L26)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatexmrperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L46)</sub>

**Type:** `contract PerpsV2MarketState`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L38)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L55)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L57)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L70)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L255)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L280)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_29`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L297)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_29()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L314)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_83`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L331)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_83()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L262)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L269)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_28`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L286)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_28()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L303)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_82`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep1.sol#L320)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_82()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
