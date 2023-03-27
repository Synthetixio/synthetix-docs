# Migration_AlmachOptimism

## Description

**Source:** [contracts/migrations/Migration_AlmachOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L23)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L48)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L50)</sub>

**Type:** `contract ExchangeRates`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L45)</sub>

**Type:** `contract FuturesMarketManager`

### `new_PerpsV2MarketStateARBPERP_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L60)</sub>

**Type:** `address`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L42)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2market_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L38)</sub>

**Type:** `contract PerpsV2Market`

### `perpsv2marketdelayedorders_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L32)</sub>

**Type:** `contract PerpsV2MarketDelayedOrders`

### `perpsv2marketdelayedordersoffchain_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L35)</sub>

**Type:** `contract PerpsV2MarketDelayedOrdersOffchain`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L52)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L30)</sub>

**Type:** `contract PerpsV2MarketState`

### `proxyperpsv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L40)</sub>

**Type:** `contract ProxyPerpsV2`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L64)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L78)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L172)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L232)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L226)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L179)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_54`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L218)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_54()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L194)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L202)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_5`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L210)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_5()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_removeAssociatedContracts_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.85.0/contracts/migrations/Migration_AlmachOptimism.sol#L186)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_removeAssociatedContracts_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
