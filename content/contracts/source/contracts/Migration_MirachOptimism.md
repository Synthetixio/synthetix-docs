# Migration_MirachOptimism

## Description

**Source:** [contracts/migrations/Migration_MirachOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L24)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L34)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L47)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L38)</sub>

**Type:** `contract ExchangeState`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L31)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L57)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L53)</sub>

**Type:** `contract Issuer`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L65)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L71)</sub>

**Type:** `address`

### `new_FuturesMarketAPE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L83)</sub>

**Type:** `address`

### `new_FuturesMarketDYDX_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L85)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L73)</sub>

**Type:** `address`

### `new_ProxysINR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L79)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L75)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L69)</sub>

**Type:** `address`

### `new_SynthsINR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L77)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L67)</sub>

**Type:** `address`

### `new_TokenStatesINR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L81)</sub>

**Type:** `address`

### `proxysinr_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L51)</sub>

**Type:** `contract ProxyERC20`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L36)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L44)</sub>

**Type:** `contract RewardsDistribution`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L55)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L40)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesinr_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L49)</sub>

**Type:** `contract TokenState`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L42)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L87)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L89)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L106)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L211)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L232)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L263)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L288)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L313)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L225)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_46`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L324)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_46()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L218)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `systemsettings_setExchangeFeeRateForSynths_47`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.1/contracts/migrations/Migration_MirachOptimism.sol#L340)</sub>

??? example "Details"

    **Signature**

    `systemsettings_setExchangeFeeRateForSynths_47()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
