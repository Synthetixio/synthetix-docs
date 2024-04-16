# Migration_CaphOptimismStep2

## Description

**Source:** [contracts/migrations/Migration_CaphOptimismStep2.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L39)</sub>

**Type:** `contract FuturesMarketManager`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L59)</sub>

**Type:** `address`

### `new_PerpsV2ExchangeRate_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L61)</sub>

**Type:** `address`

### `new_PerpsV2MarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L57)</sub>

**Type:** `address`

### `new_PerpsV2MarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L55)</sub>

**Type:** `address`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L34)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L42)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstateaxsperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L45)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatebnbperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L31)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2proxyaxsperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L48)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxybnbperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L37)</sub>

**Type:** `contract ProxyPerpsV2`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L29)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L63)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L65)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L78)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L226)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L240)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_121`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L308)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_121()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_126`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L325)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_126()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_59`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L274)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_59()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_127`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L342)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_127()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_120`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L302)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_120()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_58`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L268)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_58()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L233)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L257)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_66`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_CaphOptimismStep2.sol#L291)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_66()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
