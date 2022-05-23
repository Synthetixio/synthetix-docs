# ExchangeRatesWithDexPricing

## Description

**Source:** [contracts/ExchangeRatesWithDexPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L9)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L13)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `atomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L39)</sub>

??? example "Details"

    **Signature**

    `atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L35)</sub>

??? example "Details"

    **Signature**

    `atomicTwapWindow() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L43)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L47)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `dexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L28)</sub>

??? example "Details"

    **Signature**

    `dexPriceAggregator() view returns (contract IDexPriceAggregator)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `effectiveAtomicValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L54)</sub>

??? example "Details"

    **Signature**

    `effectiveAtomicValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthTooVolatileForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L156)</sub>

??? example "Details"

    **Signature**

    `synthTooVolatileForAtomicExchange(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setDexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L17)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_dexPriceDestinationValue(contract IERC20 sourceEquivalent, contract IERC20 destEquivalent, uint256 sourceAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Uninitialized atomic twap window")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L141)

    * [require(..., "dex price returned 0")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L150)

### `_getMaxValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L105)</sub>

??? example "Details"

    **Signature**

    `_getMaxValue(uint256 x, uint256 y) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getMinValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L101)</sub>

??? example "Details"

    **Signature**

    `_getMinValue(uint256 x, uint256 y) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getPriceFromDexAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L115)</sub>

??? example "Details"

    **Signature**

    `_getPriceFromDexAggregator(bytes32 currencyKey, uint256 amount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Amount must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L116)

    * [require(..., "No atomic equivalent for input")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L119)

    * [require(..., "No atomic equivalent for sUSD")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L122)

    * [require(..., "Result must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L126)

## Events

### `DexPriceAggregatorUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.0-alpha/contracts/ExchangeRatesWithDexPricing.sol#L198)</sub>

**Signature**: `DexPriceAggregatorUpdated(address newDexPriceAggregator)`
