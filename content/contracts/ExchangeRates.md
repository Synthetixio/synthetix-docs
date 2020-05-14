# ExchangeRates

**Source:** [contracts/ExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ExchangeRates[ExchangeRates] --> SelfDestructible[SelfDestructible]
    ExchangeRates[ExchangeRates] --> IExchangeRates[IExchangeRates]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
```

---

## Structs

---

### RateAndUpdatedTime
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L21)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| rate | uint216 | TBA |
| time | uint40 | TBA |

---

### InversePricing
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L45)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| entryPoint | uint256 | TBA |
| upperLimit | uint256 | TBA |
| lowerLimit | uint256 | TBA |
| frozen | bool | TBA |

---

## Variables

---

### `oracle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L30)</sub>

**Type:** `address`

---

### `aggregators`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L33)</sub>

**Type:** `mapping(bytes32 => contract AggregatorInterface)`

---

### `aggregatorKeys`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L36)</sub>

**Type:** `bytes32[]`

---

### `rateStalePeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L42)</sub>

**Type:** `uint256`

---

### `inversePricing`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L51)</sub>

**Type:** `mapping(bytes32 => struct ExchangeRates.InversePricing)`

---

### `invertedKeys`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L52)</sub>

**Type:** `bytes32[]`

---

### `currentRoundForRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L54)</sub>

**Type:** `mapping(bytes32 => uint256)`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L59)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _oracle, bytes32[] _currencyKeys, uint256[] _newRates) public`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

---

### `setOracle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L77)</sub>

??? example "Details"

    **Signature**

    `setOracle(address _oracle) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OracleUpdated](#oracleupdated)

---

### `setRateStalePeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L82)</sub>

??? example "Details"

    **Signature**

    `setRateStalePeriod(uint256 _time) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RateStalePeriodUpdated](#ratestaleperiodupdated)

---

### `updateRates`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L97)</sub>

??? example "Details"

    **Signature**

    `updateRates(bytes32[] currencyKeys, uint256[] newRates, uint256 timeSent) external`

    **Modifiers**

    * [onlyOracle](#onlyoracle)

---

### `deleteRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L109)</sub>

??? example "Details"

    **Signature**

    `deleteRate(bytes32 currencyKey) external`

    **Modifiers**

    * [onlyOracle](#onlyoracle)

    **Emits**

    * [RateDeleted](#ratedeleted)

---

### `setInversePricing`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L135)</sub>

??? example "Details"

    **Signature**

    `setInversePricing(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit, bool freeze, bool freezeAtUpperLimit) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InversePriceConfigured](#inversepriceconfigured)

---

### `removeInversePricing`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L174)</sub>

??? example "Details"

    **Signature**

    `removeInversePricing(bytes32 currencyKey) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `addAggregator`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L194)</sub>

??? example "Details"

    **Signature**

    `addAggregator(bytes32 currencyKey, address aggregatorAddress) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorAdded](#aggregatoradded)

---

### `removeAggregator`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L208)</sub>

??? example "Details"

    **Signature**

    `removeAggregator(bytes32 currencyKey) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `getLastRoundIdBeforeElapsedSecs`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L220)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) external`

---

### `getCurrentRoundId`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L239)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) external`

---

### `effectiveValueAtRound`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L248)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) external`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

---

### `rateAndTimestampAtRound`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L264)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) external`

---

### `lastRateUpdateTimes`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L273)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) public`

---

### `lastRateUpdateTimesForCurrencies`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L280)</sub>

??? example "Details"

    **Signature**

    `lastRateUpdateTimesForCurrencies(bytes32[] currencyKeys) public`

---

### `effectiveValue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L296)</sub>

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

---

### `rateForCurrency`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L314)</sub>

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) external`

---

### `ratesForCurrencies`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L321)</sub>

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) external`

---

### `ratesAndStaleForCurrencies`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L334)</sub>

??? example "Details"

    **Signature**

    `ratesAndStaleForCurrencies(bytes32[] currencyKeys) external`

---

### `rateIsStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L353)</sub>

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) public`

---

### `rateIsFrozen`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L363)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) external`

---

### `anyRateIsStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L370)</sub>

??? example "Details"

    **Signature**

    `anyRateIsStale(bytes32[] currencyKeys) external`

---

## Modifiers

---

### `rateNotStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L559)</sub>

---

### `onlyOracle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L564)</sub>

---

## Events

---

### `OracleUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L571)</sub>

- `(address newOracle)`

---

### `RateStalePeriodUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L572)</sub>

- `(uint256 rateStalePeriod)`

---

### `RatesUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L573)</sub>

- `(bytes32[] currencyKeys, uint256[] newRates)`

---

### `RateDeleted`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L574)</sub>

- `(bytes32 currencyKey)`

---

### `InversePriceConfigured`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L575)</sub>

- `(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit)`

---

### `InversePriceFrozen`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L576)</sub>

- `(bytes32 currencyKey)`

---

### `AggregatorAdded`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L577)</sub>

- `(bytes32 currencyKey, address aggregator)`

---

### `AggregatorRemoved`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/ExchangeRates.sol#L578)</sub>

- `(bytes32 currencyKey, address aggregator)`

---

