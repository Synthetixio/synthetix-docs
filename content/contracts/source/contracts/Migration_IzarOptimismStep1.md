# Migration_IzarOptimismStep1

## Description

**Source:** [contracts/migrations/Migration_IzarOptimismStep1.sol](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L32)</sub>

**Type:** `contract FuturesMarketManager`

### `new_PerpsV2MarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L67)</sub>

**Type:** `address`

### `perpsv2marketstateaaveperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L27)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateaudperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L50)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstateflowperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L40)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstategbpperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L55)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatenearperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L45)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2marketstatexagperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L35)</sub>

**Type:** `contract PerpsV2MarketState`

### `perpsv2proxyaaveperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L30)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxyaudperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L53)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxyflowperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L43)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxygbpperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L58)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxynearperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L48)</sub>

**Type:** `contract ProxyPerpsV2`

### `perpsv2proxyxagperp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L38)</sub>

**Type:** `contract ProxyPerpsV2`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L60)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L69)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L71)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L90)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L284)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L298)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_114`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L580)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_114()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_116`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L591)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_116()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_19`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L345)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_19()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_38`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L392)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_38()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_57`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L439)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_57()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_76`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L486)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_76()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_95`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L533)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_95()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_113`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L570)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_113()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_18`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L335)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_18()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_37`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L382)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_37()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_56`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L429)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_56()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_75`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L476)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_75()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_updateMarketsImplementations_94`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L523)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_updateMarketsImplementations_94()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L291)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateaaveperp_addAssociatedContracts_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L322)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateaaveperp_addAssociatedContracts_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateaaveperp_removeAssociatedContracts_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L309)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateaaveperp_removeAssociatedContracts_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateaudperp_addAssociatedContracts_78`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L510)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateaudperp_addAssociatedContracts_78()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateaudperp_removeAssociatedContracts_77`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L497)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateaudperp_removeAssociatedContracts_77()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateflowperp_addAssociatedContracts_40`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L416)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateflowperp_addAssociatedContracts_40()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstateflowperp_removeAssociatedContracts_39`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L403)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstateflowperp_removeAssociatedContracts_39()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstategbpperp_addAssociatedContracts_97`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L557)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstategbpperp_addAssociatedContracts_97()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstategbpperp_removeAssociatedContracts_96`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L544)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstategbpperp_removeAssociatedContracts_96()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstatenearperp_addAssociatedContracts_59`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L463)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstatenearperp_addAssociatedContracts_59()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstatenearperp_removeAssociatedContracts_58`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L450)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstatenearperp_removeAssociatedContracts_58()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstatexagperp_addAssociatedContracts_21`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L369)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstatexagperp_addAssociatedContracts_21()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `perpsv2marketstatexagperp_removeAssociatedContracts_20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.91.0-alpha/contracts/migrations/Migration_IzarOptimismStep1.sol#L356)</sub>

??? example "Details"

    **Signature**

    `perpsv2marketstatexagperp_removeAssociatedContracts_20()`

    **Visibility**

    `internal`

    **State Mutability**

    ``