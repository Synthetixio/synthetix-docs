# ExchangeRatesWithDexPricing

## Description

**Source:** [contracts/ExchangeRatesWithDexPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L9)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L13)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `atomicEquivalentForDexPricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L45)</sub>

??? example "Details"

    **Signature**

    `atomicEquivalentForDexPricing(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicPriceBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L49)</sub>

??? example "Details"

    **Signature**

    `atomicPriceBuffer(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicTwapWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L41)</sub>

??? example "Details"

    **Signature**

    `atomicTwapWindow() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityConsiderationWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L53)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityConsiderationWindow(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `atomicVolatilityUpdateThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L57)</sub>

??? example "Details"

    **Signature**

    `atomicVolatilityUpdateThreshold(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `dexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L34)</sub>

??? example "Details"

    **Signature**

    `dexPriceAggregator() view returns (contract IDexPriceAggregator)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `effectiveAtomicValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L64)</sub>

??? example "Details"

    **Signature**

    `effectiveAtomicValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "No atomic equivalent for src")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L79)

    * [require(..., "No atomic equivalent for dest")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L82)

### `synthTooVolatileForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L127)</sub>

??? example "Details"

    **Signature**

    `synthTooVolatileForAtomicExchange(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setDexPriceAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L23)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L102)</sub>

??? example "Details"

    **Signature**

    `_dexPriceDestinationValue(contract IERC20 sourceEquivalent, contract IERC20 destEquivalent, uint256 sourceAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Uninitialized atomic twap window")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L112)

    * [require(..., "dex price returned 0")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L121)

## Events

### `DexPriceAggregatorUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/ExchangeRatesWithDexPricing.sol#L169)</sub>

**Signature**: `DexPriceAggregatorUpdated(address newDexPriceAggregator)`
