# IExchangeRates

## Description

**Source:** [contracts/interfaces/IExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol)

## Structs

### `InversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L12)</sub>

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `entryPoint`         | `uint256` | TBA         |
| `upperLimit`         | `uint256` | TBA         |
| `lowerLimit`         | `uint256` | TBA         |
| `frozenAtUpperLimit` | `bool`    | TBA         |
| `frozenAtLowerLimit` | `bool`    | TBA         |

### `RateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L7)</sub>

| Field  | Type      | Description |
| ------ | --------- | ----------- |
| `rate` | `uint216` | TBA         |
| `time` | `uint40`  | TBA         |

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L23)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L21)</sub>

??? example "Details"

    **Signature**

    `aggregators(bytes32 currencyKey) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `anyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L25)</sub>

??? example "Details"

    **Signature**

    `anyRateIsInvalid(bytes32[] currencyKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L27)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currenciesUsingAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L31)</sub>

??? example "Details"

    **Signature**

    `currenciesUsingAggregator(address aggregator) returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L29)</sub>

??? example "Details"

    **Signature**

    `currentRoundForRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L33)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L39)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L52)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L60)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L62)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L69)</sub>

??? example "Details"

    **Signature**

    `inversePricing(bytes32 currencyKey) returns (uint256, uint256, uint256, bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L80)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L82)</sub>

??? example "Details"

    **Signature**

    `oracle() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L88)</sub>

??? example "Details"

    **Signature**

    `rateAndInvalid(bytes32 currencyKey) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L84)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L86)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L90)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L92)</sub>

??? example "Details"

    **Signature**

    `rateIsFlagged(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L94)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L96)</sub>

??? example "Details"

    **Signature**

    `rateIsInvalid(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L98)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L100)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndInvalidForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L107)</sub>

??? example "Details"

    **Signature**

    `ratesAndInvalidForCurrencies(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L102)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) returns (uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L112)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.3/contracts/interfaces/IExchangeRates.sol#L115)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
