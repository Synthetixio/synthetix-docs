# IExchangeRates

## Description

**Source:** [contracts/interfaces/IExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol)

## Structs

### `RateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L6)</sub>

| Field  | Type      | Description |
| ------ | --------- | ----------- |
| `rate` | `uint216` | TBA         |
| `time` | `uint40`  | TBA         |

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L14)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L12)</sub>

??? example "Details"

    **Signature**

    `aggregators(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `anyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L16)</sub>

??? example "Details"

    **Signature**

    `anyRateIsInvalid(bytes32[] currencyKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currenciesUsingAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L20)</sub>

??? example "Details"

    **Signature**

    `currenciesUsingAggregator(address aggregator) view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L18)</sub>

??? example "Details"

    **Signature**

    `currentRoundForRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveAtomicValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L41)</sub>

??? example "Details"

    **Signature**

    `effectiveAtomicValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 systemValue, uint256 systemSourceRate, uint256 systemDestinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L22)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L28)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L55)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L63)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L65)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L72)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L74)</sub>

??? example "Details"

    **Signature**

    `oracle() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L80)</sub>

??? example "Details"

    **Signature**

    `rateAndInvalid(bytes32 currencyKey) view returns (uint256 rate, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L76)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L78)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L82)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L84)</sub>

??? example "Details"

    **Signature**

    `rateIsFlagged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L86)</sub>

??? example "Details"

    **Signature**

    `rateIsInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L88)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L90)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndInvalidForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L97)</sub>

??? example "Details"

    **Signature**

    `ratesAndInvalidForCurrencies(bytes32[] currencyKeys) view returns (uint256[] rates, bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L92)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) view returns (uint256[] rates, uint256[] times)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L102)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthTooVolatileForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/interfaces/IExchangeRates.sol#L104)</sub>

??? example "Details"

    **Signature**

    `synthTooVolatileForAtomicExchange(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
