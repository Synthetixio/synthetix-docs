# MigrationLib_DiphdaOptimism

## Description

**Source:** [contracts/migrations/MigrationLib_DiphdaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L27)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L37)</sub>

**Type:** `contract AddressResolver`

### `debtcache_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L50)</sub>

**Type:** `contract DebtCache`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L52)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L46)</sub>

**Type:** `contract ExchangeState`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L48)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L43)</sub>

**Type:** `contract FeePoolEternalStorage`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L34)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L110)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L108)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L128)</sub>

**Type:** `address`

### `new_ExchangeCircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L130)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L122)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L132)</sub>

**Type:** `address`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L126)</sub>

**Type:** `address`

### `new_FuturesMarketBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L166)</sub>

**Type:** `address`

### `new_FuturesMarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L160)</sub>

**Type:** `address`

### `new_FuturesMarketETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L162)</sub>

**Type:** `address`

### `new_FuturesMarketLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L164)</sub>

**Type:** `address`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L158)</sub>

**Type:** `address`

### `new_FuturesMarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L156)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L134)</sub>

**Type:** `address`

### `new_OneNetAggregatorDebtRatio_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L124)</sub>

**Type:** `address`

### `new_OneNetAggregatorIssuedSynths_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L118)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L136)</sub>

**Type:** `address`

### `new_SynthsAAVE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L146)</sub>

**Type:** `address`

### `new_SynthsAVAX_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L154)</sub>

**Type:** `address`

### `new_SynthsBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L142)</sub>

**Type:** `address`

### `new_SynthsETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L140)</sub>

**Type:** `address`

### `new_SynthsLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L144)</sub>

**Type:** `address`

### `new_SynthsMATIC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L152)</sub>

**Type:** `address`

### `new_SynthsSOL_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L148)</sub>

**Type:** `address`

### `new_SynthsUNI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L150)</sub>

**Type:** `address`

### `new_SynthsUSD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L138)</sub>

**Type:** `address`

### `new_SystemStatus_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L120)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L41)</sub>

**Type:** `contract Proxy`

### `proxysaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L88)</sub>

**Type:** `contract ProxyERC20`

### `proxysavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L100)</sub>

**Type:** `contract ProxyERC20`

### `proxysbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L70)</sub>

**Type:** `contract ProxyERC20`

### `proxyseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L64)</sub>

**Type:** `contract ProxyERC20`

### `proxyslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L76)</sub>

**Type:** `contract ProxyERC20`

### `proxysmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L106)</sub>

**Type:** `contract ProxyERC20`

### `proxyssol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L94)</sub>

**Type:** `contract ProxyERC20`

### `proxysuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L82)</sub>

**Type:** `contract ProxyERC20`

### `proxysusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L58)</sub>

**Type:** `contract ProxyERC20`

### `synthsaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L84)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L96)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L66)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L60)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L72)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L102)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthssol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L90)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L78)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L54)</sub>

**Type:** `contract MultiCollateralSynth`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L39)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L86)</sub>

**Type:** `contract TokenState`

### `tokenstatesavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L98)</sub>

**Type:** `contract TokenState`

### `tokenstatesbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L68)</sub>

**Type:** `contract TokenState`

### `tokenstateseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L62)</sub>

**Type:** `contract TokenState`

### `tokenstateslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L74)</sub>

**Type:** `contract TokenState`

### `tokenstatesmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L104)</sub>

**Type:** `contract TokenState`

### `tokenstatessol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L92)</sub>

**Type:** `contract TokenState`

### `tokenstatesuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L80)</sub>

**Type:** `contract TokenState`

### `tokenstatesusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L56)</sub>

**Type:** `contract TokenState`

## Internal Functions

### `copyTotalSupplyFrom_sAAVE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L280)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sAAVE()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sAVAX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L296)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sAVAX()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sBTC`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L256)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sBTC()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L248)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sETH()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sLINK`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L264)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sLINK()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sMATIC`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L304)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sMATIC()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sSOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L288)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sSOL()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sUNI`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L272)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sUNI()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `copyTotalSupplyFrom_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L240)</sub>

??? example "Details"

    **Signature**

    `copyTotalSupplyFrom_sUSD()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_70`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L312)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_70()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `migration_split`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/migrations/MigrationLib_DiphdaOptimism.sol#L168)</sub>

??? example "Details"

    **Signature**

    `migration_split()`

    **Visibility**

    `external`

    **State Mutability**

    ``
