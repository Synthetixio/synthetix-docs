# Migration_Diphda

## Description

**Source:** [contracts/migrations/Migration_Diphda.sol](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L8)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L15)</sub>

**Type:** `contract AddressResolver`

### `debtcache_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L30)</sub>

**Type:** `contract DebtCache`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L32)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L22)</sub>

**Type:** `contract ExchangeState`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L28)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L19)</sub>

**Type:** `contract FeePoolEternalStorage`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L125)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L146)</sub>

**Type:** `address`

### `new_ExchangeCircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L144)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L136)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L142)</sub>

**Type:** `address`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L140)</sub>

**Type:** `address`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L182)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L150)</sub>

**Type:** `address`

### `new_OneNetAggregatorDebtRatio_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L132)</sub>

**Type:** `address`

### `new_OneNetAggregatorIssuedSynths_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L138)</sub>

**Type:** `address`

### `new_SynthetixBridgeToOptimism_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L148)</sub>

**Type:** `address`

### `new_SynthsAAVE_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L174)</sub>

**Type:** `address`

### `new_SynthsADA_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L172)</sub>

**Type:** `address`

### `new_SynthsAUD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L158)</sub>

**Type:** `address`

### `new_SynthsBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L168)</sub>

**Type:** `address`

### `new_SynthsCHF_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L162)</sub>

**Type:** `address`

### `new_SynthsDEFI_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L180)</sub>

**Type:** `address`

### `new_SynthsDOT_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L176)</sub>

**Type:** `address`

### `new_SynthsETHBTC_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L178)</sub>

**Type:** `address`

### `new_SynthsETH_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L166)</sub>

**Type:** `address`

### `new_SynthsEUR_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L154)</sub>

**Type:** `address`

### `new_SynthsGBP_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L160)</sub>

**Type:** `address`

### `new_SynthsJPY_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L156)</sub>

**Type:** `address`

### `new_SynthsKRW_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L164)</sub>

**Type:** `address`

### `new_SynthsLINK_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L170)</sub>

**Type:** `address`

### `new_SynthsUSD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L152)</sub>

**Type:** `address`

### `new_SystemStatus_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L134)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L17)</sub>

**Type:** `contract Proxy`

### `proxysaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L105)</sub>

**Type:** `contract ProxyERC20`

### `proxysada_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L99)</sub>

**Type:** `contract ProxyERC20`

### `proxysaud_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L57)</sub>

**Type:** `contract ProxyERC20`

### `proxysbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L81)</sub>

**Type:** `contract ProxyERC20`

### `proxyschf_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L69)</sub>

**Type:** `contract ProxyERC20`

### `proxysdefi_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L123)</sub>

**Type:** `contract ProxyERC20`

### `proxysdot_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L111)</sub>

**Type:** `contract ProxyERC20`

### `proxyseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L87)</sub>

**Type:** `contract ProxyERC20`

### `proxysethbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L117)</sub>

**Type:** `contract ProxyERC20`

### `proxyseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L45)</sub>

**Type:** `contract ProxyERC20`

### `proxysgbp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L63)</sub>

**Type:** `contract ProxyERC20`

### `proxysjpy_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L51)</sub>

**Type:** `contract ProxyERC20`

### `proxyskrw_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L75)</sub>

**Type:** `contract ProxyERC20`

### `proxyslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L93)</sub>

**Type:** `contract ProxyERC20`

### `proxysusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L39)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L26)</sub>

**Type:** `contract RewardEscrow`

### `synthsaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L101)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsada_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L95)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsaud_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L53)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L77)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthschf_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L65)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsdefi_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L119)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsdot_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L107)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L83)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsethbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L113)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L41)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsgbp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L59)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsjpy_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L47)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthskrw_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L71)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L89)</sub>

**Type:** `contract MultiCollateralSynth`

### `synthsusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L35)</sub>

**Type:** `contract MultiCollateralSynth`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L24)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesaave_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L103)</sub>

**Type:** `contract TokenState`

### `tokenstatesada_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L97)</sub>

**Type:** `contract TokenState`

### `tokenstatesaud_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L55)</sub>

**Type:** `contract TokenState`

### `tokenstatesbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L79)</sub>

**Type:** `contract TokenState`

### `tokenstateschf_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L67)</sub>

**Type:** `contract TokenState`

### `tokenstatesdefi_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L121)</sub>

**Type:** `contract TokenState`

### `tokenstatesdot_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L109)</sub>

**Type:** `contract TokenState`

### `tokenstateseth_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L85)</sub>

**Type:** `contract TokenState`

### `tokenstatesethbtc_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L115)</sub>

**Type:** `contract TokenState`

### `tokenstateseur_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L43)</sub>

**Type:** `contract TokenState`

### `tokenstatesgbp_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L61)</sub>

**Type:** `contract TokenState`

### `tokenstatesjpy_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L49)</sub>

**Type:** `contract TokenState`

### `tokenstateskrw_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L73)</sub>

**Type:** `contract TokenState`

### `tokenstateslink_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L91)</sub>

**Type:** `contract TokenState`

### `tokenstatesusd_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L37)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L184)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L186)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L245)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for OneNetAggregatorDebtRatio")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L246)

    * [require(..., "Invalid contract supplied for SystemStatus")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L250)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L254)

    * [require(..., "Invalid contract supplied for OneNetAggregatorIssuedSynths")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L258)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L263)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L267)

    * [require(..., "Invalid contract supplied for ExchangeCircuitBreaker")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L271)

    * [require(..., "Invalid contract supplied for DebtCache")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L275)

    * [require(..., "Invalid contract supplied for SynthetixBridgeToOptimism")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L279)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L283)

    * [require(..., "Invalid contract supplied for SynthsUSD")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L287)

    * [require(..., "Invalid contract supplied for SynthsEUR")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L291)

    * [require(..., "Invalid contract supplied for SynthsJPY")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L295)

    * [require(..., "Invalid contract supplied for SynthsAUD")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L299)

    * [require(..., "Invalid contract supplied for SynthsGBP")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L303)

    * [require(..., "Invalid contract supplied for SynthsCHF")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L307)

    * [require(..., "Invalid contract supplied for SynthsKRW")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L311)

    * [require(..., "Invalid contract supplied for SynthsETH")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L315)

    * [require(..., "Invalid contract supplied for SynthsBTC")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L319)

    * [require(..., "Invalid contract supplied for SynthsLINK")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L323)

    * [require(..., "Invalid contract supplied for SynthsADA")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L327)

    * [require(..., "Invalid contract supplied for SynthsAAVE")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L331)

    * [require(..., "Invalid contract supplied for SynthsDOT")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L335)

    * [require(..., "Invalid contract supplied for SynthsETHBTC")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L339)

    * [require(..., "Invalid contract supplied for SynthsDEFI")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L343)

    * [require(..., "Invalid contract supplied for FuturesMarketManager")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L347)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L394)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L408)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L433)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/migrations/Migration_Diphda.sol#L401)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
