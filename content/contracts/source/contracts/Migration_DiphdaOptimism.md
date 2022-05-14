# Migration_DiphdaOptimism

## Description

**Source:** [contracts/migrations/Migration_DiphdaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L8)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L18)</sub>

**Type:** `contract AddressResolver`

### `debtcache_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L31)</sub>

**Type:** `contract DebtCache`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L33)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L25)</sub>

**Type:** `contract ExchangeState`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L29)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L22)</sub>

**Type:** `contract FeePoolEternalStorage`

### `futuresmarketmanager_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L15)</sub>

**Type:** `contract FuturesMarketManager`

### `futuresmarketsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L95)</sub>

**Type:** `contract FuturesMarketSettings`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L91)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L115)</sub>

**Type:** `address`

### `new_ExchangeCircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L113)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L109)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L117)</sub>

**Type:** `address`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L111)</sub>

**Type:** `address`

### `new_FuturesMarketBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L159)</sub>

**Type:** `address`

### `new_FuturesMarketData_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L155)</sub>

**Type:** `address`

### `new_FuturesMarketETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L153)</sub>

**Type:** `address`

### `new_FuturesMarketLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L161)</sub>

**Type:** `address`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L151)</sub>

**Type:** `address`

### `new_FuturesMarketSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L157)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L119)</sub>

**Type:** `address`

### `new_OneNetAggregatorDebtRatio_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L103)</sub>

**Type:** `address`

### `new_OneNetAggregatorIssuedSynths_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L105)</sub>

**Type:** `address`

### `new_ProxysAAVE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L141)</sub>

**Type:** `address`

### `new_ProxysUNI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L149)</sub>

**Type:** `address`

### `new_SynthetixBridgeToBase_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L121)</sub>

**Type:** `address`

### `new_SynthsAAVE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L143)</sub>

**Type:** `address`

### `new_SynthsAVAX_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L135)</sub>

**Type:** `address`

### `new_SynthsBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L129)</sub>

**Type:** `address`

### `new_SynthsETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L125)</sub>

**Type:** `address`

### `new_SynthsEUR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L137)</sub>

**Type:** `address`

### `new_SynthsLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L127)</sub>

**Type:** `address`

### `new_SynthsMATIC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L133)</sub>

**Type:** `address`

### `new_SynthsSOL_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L131)</sub>

**Type:** `address`

### `new_SynthsUNI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L147)</sub>

**Type:** `address`

### `new_SynthsUSD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L123)</sub>

**Type:** `address`

### `new_SystemStatus_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L107)</sub>

**Type:** `address`

### `new_TokenStatesAAVE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L139)</sub>

**Type:** `address`

### `new_TokenStatesUNI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L145)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L20)</sub>

**Type:** `contract Proxy`

### `proxysaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L85)</sub>

**Type:** `contract ProxyERC20`

### `proxysavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L69)</sub>

**Type:** `contract ProxyERC20`

### `proxysbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L51)</sub>

**Type:** `contract ProxyERC20`

### `proxyseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L45)</sub>

**Type:** `contract ProxyERC20`

### `proxyseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L81)</sub>

**Type:** `contract ProxyERC20`

### `proxyslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L57)</sub>

**Type:** `contract ProxyERC20`

### `proxysmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L75)</sub>

**Type:** `contract ProxyERC20`

### `proxyssol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L63)</sub>

**Type:** `contract ProxyERC20`

### `proxysuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L89)</sub>

**Type:** `contract ProxyERC20`

### `proxysusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L39)</sub>

**Type:** `contract ProxyERC20`

### `synthsavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L65)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L47)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L41)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L77)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L53)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L71)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthssol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L59)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L35)</sub>

**Type:** `contract MultiCollateralSynth`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L93)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L27)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L83)</sub>

**Type:** `contract TokenState`

### `tokenstatesavax_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L67)</sub>

**Type:** `contract TokenState`

### `tokenstatesbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L49)</sub>

**Type:** `contract TokenState`

### `tokenstateseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L43)</sub>

**Type:** `contract TokenState`

### `tokenstateseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L79)</sub>

**Type:** `contract TokenState`

### `tokenstateslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L55)</sub>

**Type:** `contract TokenState`

### `tokenstatesmatic_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L73)</sub>

**Type:** `contract TokenState`

### `tokenstatessol_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L61)</sub>

**Type:** `contract TokenState`

### `tokenstatesuni_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L87)</sub>

**Type:** `contract TokenState`

### `tokenstatesusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L37)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L163)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L165)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L209)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for OneNetAggregatorDebtRatio")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L210)

    * [require(..., "Invalid contract supplied for OneNetAggregatorIssuedSynths")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L214)

    * [require(..., "Invalid contract supplied for SystemStatus")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L219)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L223)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L227)

    * [require(..., "Invalid contract supplied for ExchangeCircuitBreaker")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L231)

    * [require(..., "Invalid contract supplied for DebtCache")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L235)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L239)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L243)

    * [require(..., "Invalid contract supplied for SynthetixBridgeToBase")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L247)

    * [require(..., "Invalid contract supplied for SynthsUSD")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L251)

    * [require(..., "Invalid contract supplied for SynthsETH")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L255)

    * [require(..., "Invalid contract supplied for SynthsLINK")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L259)

    * [require(..., "Invalid contract supplied for SynthsBTC")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L263)

    * [require(..., "Invalid contract supplied for SynthsSOL")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L267)

    * [require(..., "Invalid contract supplied for SynthsMATIC")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L271)

    * [require(..., "Invalid contract supplied for SynthsAVAX")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L275)

    * [require(..., "Invalid contract supplied for SynthsEUR")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L279)

    * [require(..., "Invalid contract supplied for SynthsAAVE")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L283)

    * [require(..., "Invalid contract supplied for SynthsUNI")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L287)

    * [require(..., "Invalid contract supplied for FuturesMarketManager")](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L291)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L337)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L359)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L432)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L457)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `futuresmarketmanager_addMarkets_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L351)</sub>

??? example "Details"

    **Signature**

    `futuresmarketmanager_addMarkets_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L478)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L503)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_DiphdaOptimism.sol#L344)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
