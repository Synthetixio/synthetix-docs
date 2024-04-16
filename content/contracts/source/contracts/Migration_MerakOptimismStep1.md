# Migration_MerakOptimismStep1

## Description

**Source:** [contracts/migrations/Migration_MerakOptimismStep1.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L19)</sub>

**Type:** `address`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L40)</sub>

**Type:** `contract ExchangeRates`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L34)</sub>

**Type:** `contract FuturesMarketManager`

### `perpsv2exchangerate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L31)</sub>

**Type:** `contract PerpsV2ExchangeRate`

### `perpsv2marketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L37)</sub>

**Type:** `contract PerpsV2MarketSettings`

### `perpsv2marketstatestethperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L28)</sub>

**Type:** `contract PerpsV2MarketState`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L46)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L48)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L58)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L110)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addProxiedMarkets_43`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L135)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addProxiedMarkets_43()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L117)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2exchangerate_addAssociatedContracts_42`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.1-alpha/contracts/migrations/Migration_MerakOptimismStep1.sol#L124)</sub>

??? example "Details"

    **Signature**

    `perpsv2exchangerate_addAssociatedContracts_42()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
