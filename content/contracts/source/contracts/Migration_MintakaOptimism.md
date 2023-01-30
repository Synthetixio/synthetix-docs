# Migration_MintakaOptimism

## Description

**Source:** [contracts/migrations/Migration_MintakaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L22)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L47)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L29)</sub>

**Type:** `contract FuturesMarketManager`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L57)</sub>

**Type:** `address`

### `new_PerpsV2ExchangeRate_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L65)</sub>

**Type:** `address`

### `new_PerpsV2MarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L61)</sub>

**Type:** `address`

### `new_PerpsV2MarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L59)</sub>

**Type:** `address`

### `new_PerpsV2MarketStateETHPERP_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L63)</sub>

**Type:** `address`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L44)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2market_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L40)</sub>

**Type:** `contract PerpsV2Market`

### `perpsv2marketdelayedorders_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L34)</sub>

**Type:** `contract PerpsV2MarketDelayedOrders`

### `perpsv2marketdelayedordersoffchain_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L37)</sub>

**Type:** `contract PerpsV2MarketDelayedOrdersOffchain`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L49)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L32)</sub>

**Type:** `contract PerpsV2MarketState`

### `proxyperpsv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L42)</sub>

**Type:** `contract ProxyPerpsV2`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L67)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L69)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L82)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L188)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_57`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L271)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_57()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_58`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L290)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_58()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_59`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L315)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_59()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L202)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L265)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L195)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L257)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L233)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L241)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L249)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_removeAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L225)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_removeAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
