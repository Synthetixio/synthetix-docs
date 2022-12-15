# Migration_MuhlifainOptimism

## Description

**Source:** [contracts/migrations/Migration_MuhlifainOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L30)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L36)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L32)</sub>

**Type:** `contract ExchangeState`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L27)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L40)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L38)</sub>

**Type:** `contract Issuer`

### `new_CircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L50)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L48)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L54)</sub>

**Type:** `address`

### `new_FuturesMarketBNB_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L62)</sub>

**Type:** `address`

### `new_FuturesMarketDOGE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L64)</sub>

**Type:** `address`

### `new_FuturesMarketDebtRatio_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L56)</sub>

**Type:** `address`

### `new_FuturesMarketOP_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L60)</sub>

**Type:** `address`

### `new_FuturesMarketXMR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L58)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L52)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L34)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L66)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L68)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L79)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L80)

    * [require(..., "Invalid contract supplied for CircuitBreaker")](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L84)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L88)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L92)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L248)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L272)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L299)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L324)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L349)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L262)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_46`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L366)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_46()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.1-alpha/contracts/migrations/Migration_MuhlifainOptimism.sol#L255)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
