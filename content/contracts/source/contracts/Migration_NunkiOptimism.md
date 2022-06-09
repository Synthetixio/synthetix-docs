# Migration_NunkiOptimism

## Description

**Source:** [contracts/migrations/Migration_NunkiOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L21)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L31)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L33)</sub>

**Type:** `contract ExchangeRates`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L28)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L43)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L39)</sub>

**Type:** `contract Issuer`

### `new_FuturesMarketAVAX_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L59)</sub>

**Type:** `address`

### `new_FuturesMarketMATIC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L61)</sub>

**Type:** `address`

### `new_FuturesMarketSOL_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L57)</sub>

**Type:** `address`

### `new_FuturesMarketWTI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L63)</sub>

**Type:** `address`

### `new_ProxysWTI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L51)</sub>

**Type:** `address`

### `new_SynthsWTI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L55)</sub>

**Type:** `address`

### `new_TokenStatesWTI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L53)</sub>

**Type:** `address`

### `proxyswti_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L37)</sub>

**Type:** `contract ProxyERC20`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L41)</sub>

**Type:** `contract SystemSettings`

### `tokenstateswti_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L35)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L65)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L67)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L79)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SynthsWTI")](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L84)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L167)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L190)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L213)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L181)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_19`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L223)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_19()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L174)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `systemsettings_setExchangeFeeRateForSynths_20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.1/contracts/migrations/Migration_NunkiOptimism.sol#L229)</sub>

??? example "Details"

    **Signature**

    `systemsettings_setExchangeFeeRateForSynths_20()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
