# Migration_CaphOptimismStep10

## Description

**Source:** [contracts/migrations/Migration_CaphOptimismStep10.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L19)</sub>

**Type:** `address`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L39)</sub>

**Type:** `contract FuturesMarketManager`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L34)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L42)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstatelinkperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L28)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatelinkperplegacy_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L31)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateopperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L45)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateopperplegacy_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L48)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2proxylinkperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L37)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxyopperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L51)</sub>

**Type:** `contract ProxyPerpsV2`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L57)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L59)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L73)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L205)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_117`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L271)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_117()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_57`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L240)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_57()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L212)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L229)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_63`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L260)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_63()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstatelinkperplegacy_addAssociatedContracts_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L219)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstatelinkperplegacy_addAssociatedContracts_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateopperplegacy_addAssociatedContracts_62`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep10.sol#L250)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateopperplegacy_addAssociatedContracts_62()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
