# Migration_MarkabOptimismStep1

## Description

**Source:** [contracts/migrations/Migration_MarkabOptimismStep1.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L19)</sub>

**Type:** `address`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L49)</sub>

**Type:** `contract ExchangeRates`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L32)</sub>

**Type:** `contract FuturesMarketManager`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L29)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L35)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstatecvxperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L40)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatejupperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L26)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatependleperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L46)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatestrkperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L43)</sub>

**Type:** `contract PerpsV2MarketState`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L38)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L55)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L57)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L70)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L226)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L251)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_29`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L268)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_29()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L285)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_83`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L302)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_83()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L233)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L240)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_28`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L257)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_28()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_55`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L274)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_55()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_82`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MarkabOptimismStep1.sol#L291)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_82()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
