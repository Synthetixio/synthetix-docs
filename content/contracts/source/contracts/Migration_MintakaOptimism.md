# Migration_MintakaOptimism

## Description

**Source:** [contracts/migrations/Migration_MintakaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L22)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L47)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L44)</sub>

**Type:** `contract FuturesMarketManager`

### `new_PerpsV2MarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L57)</sub>

**Type:** `address`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L41)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2market_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L37)</sub>

**Type:** `contract PerpsV2Market`

### `perpsv2marketdelayedorders_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L31)</sub>

**Type:** `contract PerpsV2MarketDelayedOrders`

### `perpsv2marketdelayedordersoffchain_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L34)</sub>

**Type:** `contract PerpsV2MarketDelayedOrdersOffchain`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L49)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L29)</sub>

**Type:** `contract PerpsV2MarketState`

### `proxyperpsv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L39)</sub>

**Type:** `contract ProxyPerpsV2`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L59)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L61)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L74)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L174)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L240)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_57`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L251)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_57()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L230)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L181)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_54`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L222)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_54()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_removeAssociatedContracts_53`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L212)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_removeAssociatedContracts_53()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L188)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L196)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstate_addAssociatedContracts_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.0-alpha/contracts/migrations/Migration_MintakaOptimism.sol#L204)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstate_addAssociatedContracts_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
