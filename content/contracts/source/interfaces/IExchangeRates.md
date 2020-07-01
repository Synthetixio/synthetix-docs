# IExchangeRates

## Description

**Source:** [contracts/interfaces/IExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol)

## Views

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L7)</sub>

??? example "Details"

    **Signature**

    `aggregators(bytes32 currencyKey) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `anyRateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L9)</sub>

??? example "Details"

    **Signature**

    `anyRateIsStale(bytes32[] currencyKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L11)</sub>

??? example "Details"

    **Signature**

    `currentRoundForRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L13)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L19)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L32)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L40)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L49)</sub>

??? example "Details"

    **Signature**

    `inversePricing(bytes32 currencyKey) returns (uint256, uint256, uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L59)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L61)</sub>

??? example "Details"

    **Signature**

    `oracle() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L63)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L65)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L67)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L69)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L71)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L73)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndStaleForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L80)</sub>

??? example "Details"

    **Signature**

    `ratesAndStaleForCurrencies(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L75)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) returns (uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-rc/contracts/interfaces/IExchangeRates.sol#L82)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`
