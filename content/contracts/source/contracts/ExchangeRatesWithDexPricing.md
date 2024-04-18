# ExchangeRatesWithDexPricing

## Description

**Source:** [contracts/ExchangeRatesWithDexPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L10)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `dexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L44)</sub>

??? example "Details"

    **Signature**

    `dexPriceAggregator() view returns (contract IDexPriceAggregator)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `effectiveAtomicValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L52)</sub>

??? example "Details"

    **Signature**

    `effectiveAtomicValueAndRates(bytes32 sourceCurrencyKey, uint256 amount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L20)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synthTooVolatileForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L207)</sub>

??? example "Details"

    **Signature**

    `synthTooVolatileForAtomicExchange(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `setDexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L29)</sub>

??? example "Details"

    **Signature**

    `setDexPriceAggregator(contract IDexPriceAggregator _dexPriceAggregator)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [DexPriceAggregatorUpdated](#dexpriceaggregatorupdated)

## Internal Functions

### `_dexPriceDestinationValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L178)</sub>

??? example "Details"

    **Signature**

    `_dexPriceDestinationValue(contract IDexPriceAggregator dexAggregator, contract IERC20 sourceEquivalent, contract IERC20 destEquivalent, uint256 sourceAmount, uint256 twapWindow) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "dex aggregator address is 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L189)

    * [require(..., "Uninitialized atomic twap window")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L191)

    * [require(..., "dex price returned 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L201)

### `_getMaxValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L132)</sub>

??? example "Details"

    **Signature**

    `_getMaxValue(uint256 x, uint256 y) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getMinValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_getMinValue(uint256 x, uint256 y) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getPriceFromDexAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L144)</sub>

??? example "Details"

    **Signature**

    `_getPriceFromDexAggregator(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings, uint256 amount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Amount must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L149)

    * [require(..., "Atomic swaps must go through sUSD")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L150)

    * [require(..., "No atomic equivalent for source")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L156)

    * [require(..., "No atomic equivalent for dest")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L159)

    * [require(..., "Result must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L173)

### `directIntegrationManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L40)</sub>

??? example "Details"

    **Signature**

    `directIntegrationManager() view returns (contract IDirectIntegrationManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Events

### `DexPriceAggregatorUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeRatesWithDexPricing.sol#L260)</sub>

**Signature**: `DexPriceAggregatorUpdated(address newDexPriceAggregator)`
