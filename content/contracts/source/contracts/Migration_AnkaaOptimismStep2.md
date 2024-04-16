# Migration_AnkaaOptimismStep2

## Description

**Source:** [contracts/migrations/Migration_AnkaaOptimismStep2.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L18)</sub>

**Type:** `address`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L31)</sub>

**Type:** `contract FuturesMarketManager`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L28)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L34)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstatemavperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L42)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatemkrperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L25)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstaterplperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L45)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateyfiperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L39)</sub>

**Type:** `contract PerpsV2MarketState`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L37)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L52)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L54)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L66)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L197)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L222)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_29`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L239)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_29()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L256)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_83`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L273)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_83()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L204)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L211)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_28`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L228)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_28()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L245)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_82`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_AnkaaOptimismStep2.sol#L262)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_82()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
