# Migration_DiphdaOptimism_part1

## Description

**Source:** [contracts/migrations/Migration_DiphdaOptimism_part1.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L27)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L37)</sub>

**Type:** `contract AddressResolver`

### `debtcache_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L50)</sub>

**Type:** `contract DebtCache`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L52)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L46)</sub>

**Type:** `contract ExchangeState`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L48)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L43)</sub>

**Type:** `contract FeePoolEternalStorage`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L34)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L68)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L66)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L90)</sub>

**Type:** `address`

### `new_ExchangeCircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L88)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L80)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L92)</sub>

**Type:** `address`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L84)</sub>

**Type:** `address`

### `new_FuturesMarketBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L104)</sub>

**Type:** `address`

### `new_FuturesMarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L106)</sub>

**Type:** `address`

### `new_FuturesMarketETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L108)</sub>

**Type:** `address`

### `new_FuturesMarketLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L102)</sub>

**Type:** `address`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L98)</sub>

**Type:** `address`

### `new_FuturesMarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L100)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L86)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L94)</sub>

**Type:** `address`

### `new_SynthsUSD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L96)</sub>

**Type:** `address`

### `new_SystemStatus_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L76)</sub>

**Type:** `address`

### `new_ext_AggregatorDebtRatio_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L82)</sub>

**Type:** `address`

### `new_ext_AggregatorIssuedSynths_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L78)</sub>

**Type:** `address`

### `proxyerc20susd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L60)</sub>

**Type:** `contract ProxyERC20`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L41)</sub>

**Type:** `contract Proxy`

### `proxysusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L58)</sub>

**Type:** `contract ProxyERC20`

### `synthslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L62)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L64)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L54)</sub>

**Type:** `contract MultiCollateralSynth`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L39)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L56)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L110)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L112)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L132)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L251)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L273)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L316)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L341)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sLINK`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L452)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sLINK()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sUNI`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L460)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sUNI()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L444)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sUSD()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L265)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L394)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L419)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_40`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L468)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_40()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L258)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `systemstatus_updateAccessControls_17`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/migrations/Migration_DiphdaOptimism_part1.sol#L357)</sub>

??? example "Details"

    **Signature**

    `systemstatus_updateAccessControls_17()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
