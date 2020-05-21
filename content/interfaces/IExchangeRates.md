# IExchangeRates

## Description


**Source:** [contracts/interfaces/IExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol)

## Constants

## Variables

## Functions


---
### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L6)</sub>

??? example "Details"

    **Signature**

    `aggregators(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `anyRateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L8)</sub>

??? example "Details"

    **Signature**

    `anyRateIsStale(bytes32[] currencyKeys)`

    **State Mutability**

    `view`


---
### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L10)</sub>

??? example "Details"

    **Signature**

    `currentRoundForRate(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L12)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `view`


---
### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L18)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **State Mutability**

    `view`


---
### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L26)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff)`

    **State Mutability**

    `view`


---
### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L35)</sub>

??? example "Details"

    **Signature**

    `inversePricing(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L45)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L47)</sub>

??? example "Details"

    **Signature**

    `oracle()`

    **State Mutability**

    `view`


---
### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L49)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId)`

    **State Mutability**

    `view`


---
### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L51)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L53)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L55)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `ratesAndStaleForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L57)</sub>

??? example "Details"

    **Signature**

    `ratesAndStaleForCurrencies(bytes32[] currencyKeys)`

    **State Mutability**

    `view`


---
### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L59)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys)`

    **State Mutability**

    `view`


---
### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchangeRates.sol#L61)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod()`

    **State Mutability**

    `view`

