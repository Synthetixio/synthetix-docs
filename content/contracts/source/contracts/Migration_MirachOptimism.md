# Migration_MirachOptimism

## Description

**Source:** [contracts/migrations/Migration_MirachOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L23)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L33)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L46)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L37)</sub>

**Type:** `contract ExchangeState`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L30)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L50)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L48)</sub>

**Type:** `contract Issuer`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L58)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L64)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L66)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L68)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L62)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L60)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L35)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L43)</sub>

**Type:** `contract RewardsDistribution`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L39)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L41)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L70)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L72)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L86)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L175)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L208)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L229)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_4`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L254)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_4()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_5`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L279)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_5()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L196)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_removeMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L189)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_removeMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_43`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L292)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_43()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_MirachOptimism.sol#L182)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
