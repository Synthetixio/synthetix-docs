# IExchangeRates

## Description

**Source:** [contracts/interfaces/IExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol)

## Structs

### `InversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L12)</sub>

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `entryPoint`         | `uint256` | TBA         |
| `upperLimit`         | `uint256` | TBA         |
| `lowerLimit`         | `uint256` | TBA         |
| `frozenAtUpperLimit` | `bool`    | TBA         |
| `frozenAtLowerLimit` | `bool`    | TBA         |

### `RateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L7)</sub>

| Field  | Type      | Description |
| ------ | --------- | ----------- |
| `rate` | `uint216` | TBA         |
| `time` | `uint40`  | TBA         |

## External Functions

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L23)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L21)</sub>

??? example "Details"

    **Signature**

    `aggregators(bytes32 currencyKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `anyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L25)</sub>

??? example "Details"

    **Signature**

    `anyRateIsInvalid(bytes32[] currencyKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L27)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currenciesUsingAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L31)</sub>

??? example "Details"

    **Signature**

    `currenciesUsingAggregator(address aggregator) view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L29)</sub>

??? example "Details"

    **Signature**

    `currentRoundForRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L33)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L39)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L52)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L115)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L60)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L62)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L69)</sub>

??? example "Details"

    **Signature**

    `inversePricing(bytes32 currencyKey) view returns (uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit, bool frozenAtUpperLimit, bool frozenAtLowerLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L80)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L82)</sub>

??? example "Details"

    **Signature**

    `oracle() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateAndInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L88)</sub>

??? example "Details"

    **Signature**

    `rateAndInvalid(bytes32 currencyKey) view returns (uint256 rate, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L84)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L86)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L90)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L92)</sub>

??? example "Details"

    **Signature**

    `rateIsFlagged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L94)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L96)</sub>

??? example "Details"

    **Signature**

    `rateIsInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L98)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L100)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `ratesAndInvalidForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L107)</sub>

??? example "Details"

    **Signature**

    `ratesAndInvalidForCurrencies(bytes32[] currencyKeys) view returns (uint256[] rates, bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L102)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) view returns (uint256[] rates, uint256[] times)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IExchangeRates.sol#L112)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
