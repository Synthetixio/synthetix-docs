# ExchangeRates

## Description

This contract stores the latest Synth exchange rates. These rates are set by an oracle, which updates this contract every three minutes with any prices that have moved sufficiently. Once set, these prices are available for any contract in the Synthetix system to query.
Prices which have not been updated recently enough are considered stale; Synthetix functionality using stale prices does not operate. All rates are denominated in terms of sUSD, so the price of sUSD is always \$1.00, and is never stale.

The ExchangeRates contract is also responsible for computing the prices of various derived synths.
In particular, the behaviour of [inverse synths](#rateorinverted) is defined here. These are derivative synths whose price varies inversely with the price of an underlying asset.

This contract interacts with the oracle's frontrunning protection, which is partially described in [SIP-6](https://sips.synthetix.io/sips/sip-6) and [SIP-7](https://sips.synthetix.io/sips/sip-7).

This does not turn off any functionality in the exchange rate contract, but is used by [`Synthetix`](Synthetix.md) to disable [currency exchanges](Synthetix.md#_internalexchange) while prices are being updated to protect against oracle front running. The lock is released when [rate updates have completed](#internalupdaterates).

**Source:** [contracts/ExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    ExchangeRates[ExchangeRates] --> SelfDestructible[SelfDestructible]
    ExchangeRates[ExchangeRates] --> MixinSystemSettings[MixinSystemSettings]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![ExchangeRates architecture graph](/img/graphs/ExchangeRates-architecture.svg)
</centered-image>

??? example "Details"

    - [`oracle`](#oracle): This address is not actually a contract, but it is the source of prices for this contract.
    - [`Aggregators`](#aggregators): These are a collection of decentralized pricing networks that collect and aggregate results from a network of oracles.
    - [`PurgeableSynth`](PurgeableSynth.md): exchange rates are used to determine if the total token value is below the purge threshold.
    - [`Synthetix`](Synthetix.md): the value of tokens is used to in order to facilitate exchange between them, and to ensure exchanges cannot occur while price updates and being made or if a particular exchange rate is stale.

## Structs

### `InversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L48)</sub>

Holds necessary information for computing the price of [inverse Synths](/tokens.md#inverse-synths).

| Field        | Type      | Description                                                                                               |
| ------------ | --------- | --------------------------------------------------------------------------------------------------------- |
| `entryPoint` | `uint256` | The underlying asset's price at the time the inverse index was set up. Must be strictly greater than $0$. |
| `upperLimit` | `uint256` | The upper limit of the _inverse_ price. Must lie strictly between entryPoint and twice entryPoint.        |
| `lowerLimit` | `uint256` | The lower limit of the _inverse_ price. Must lie strictly between $0$ and entryPoint.                     |
| `frozen`     | `bool`    | True if an inverse Synth has breached one of its limits.                                                  |

### `RateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L25)</sub>

| Field  | Type      | Description                                                        |
| ------ | --------- | ------------------------------------------------------------------ |
| `rate` | `uint216` | The rate of the currency (with `18` decimals)                      |
| `time` | `uint40`  | The timestamp (in secs) of the block when the `rate` was persisted |

## Variables

### `aggregatorKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L40)</sub>

A list of the keys of currencies with a decentralized aggregated pricing network.

**Type:** `bytes32[]`

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L37)</sub>

For each currency with a decentralized aggregated pricing network, return the Aggregation contract address.

**Type:** `mapping(bytes32 => contract AggregatorInterface)`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L57)</sub>

**Type:** `mapping(bytes32 => uint256)`

### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L54)</sub>

For each currency with an inverse index, keep the necessary [`InversePricing`](#inversepricing) information to maintain the index.

**Type:** `mapping(bytes32 => struct ExchangeRates.InversePricing)`

### `invertedKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L55)</sub>

A list of the keys of currencies with an inverted index.

**Type:** `bytes32[]`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L34)</sub>

The address which is permitted to push rate updates to the contract.

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L64)</sub>

Initialises the oracle address and initial currency prices, along with the inherited [`SelfDestructible`](SelfDestructible.md) instance.

??? example "Details"

    **Signature**

    `(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Currency key length and rate length must match.)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L71)

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L189)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `anyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L353)</sub>

??? example "Details"

    **Signature**

    `anyRateIsInvalid(bytes32[] currencyKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L255)</sub>

Given a quantity of a source currency, returns a quantity of a destination currency that is of equivalent value at current exchange rates, if those rates are fresh.

The effective value is computed as a simple ratio of the prices of the currencies concerned. That is, to convert a quantity $Q_A$ of currency $A$ to currency $B$ at prices $\pi_A$ and $\pi_B$, the quantity $Q_B$ received is:

$$
Q_B = Q_A \frac{\pi_A}{\pi_B}
$$

This computation is simple because all fractional quantities in the Synthetix system except for the [debt ledger](SynthetixState.md#debtledger) are [18 decimal fixed point numbers](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L263)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L221)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L217)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L198)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L241)</sub>

Retrieves the timestamp the given rate was last updated. Accessed by the same keys as [`rates`](#rates) is.

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L245)</sub>

Maps [`lastRateUpdateTimes`](#lastrateupdatetimes) over an array of keys.

??? example "Details"

    **Signature**

    `lastRateUpdateTimesForCurrencies(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L237)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L193)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L279)</sub>

Returns the last recorded rate for the given currency. This is just an alias to the public mapping `rates`, so it could probably be eliminated.

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L349)</sub>

??? example "Details"

    **Signature**

    `rateIsFlagged(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L339)</sub>

Returns true if the inverse price for the given currency is frozen. This is simply an alias to [`inversePricing[currencyKey].frozen`](#inversepricing). Currencies without an inverse price will naturally return false.

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L343)</sub>

??? example "Details"

    **Signature**

    `rateIsInvalid(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L335)</sub>

The rate for a given currency is stale if its last update occurred more than [`rateStalePeriod`](#ratestaleperiod) seconds ago.

`sUSD` is a special case; since its rate is fixed at $1.0$, it is never stale. The rates of nonexistent currencies are always stale.

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L185)</sub>

The duration after which a rate will be considered out of date. Synth exchange and other price-sensitive transactions in the [`Synthetix`](Synthetix.md) contract will not operate if a relevant rate is stale.
Initialised to $3$ hours.

**Type:** `uint256`

??? example "Details"

    **Signature**

    `rateStalePeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndInvalidForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L313)</sub>

??? example "Details"

    **Signature**

    `ratesAndInvalidForCurrencies(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L283)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) returns (uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L303)</sub>

Maps [`rateForCurrency`](#rateforcurrency) over an array of keys.

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L159)</sub>

??? example "Details"

    **Signature**

    `addAggregator(bytes32 currencyKey, address aggregatorAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Given Aggregator is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L163)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorAdded](#aggregatoradded)

### `deleteRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L98)</sub>

Deletes a currency's price and its update time from the ExchangeRates contract.

??? example "Details"

    **Signature**

    `deleteRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Rate is zero)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L99)

    **Modifiers**

    * [onlyOracle](#onlyoracle)

    **Emits**

    * [RateDeleted](#ratedeleted)

### `removeAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L171)</sub>

??? example "Details"

    **Signature**

    `removeAggregator(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., No aggregator exists for key)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L173)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L143)</sub>

Allows the owner to remove an inverse index for a particular currency.

??? example "Details"

    **Signature**

    `removeInversePricing(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., No inverted price exists)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L144)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L108)</sub>

Allows the owner to set up an inverse index for a particular currency. See [`rateOrInverted`](#rateorinverted) for computation details. New inverse indexes begin unfrozen.

??? example "Details"

    **Signature**

    `setInversePricing(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit, bool freeze, bool freezeAtUpperLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., lowerLimit must be above 0)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L117)

    * [require(..., upperLimit must be above the entryPoint)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L118)

    * [require(..., upperLimit must be less than double entryPoint)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L119)

    * [require(..., lowerLimit must be below the entryPoint)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L120)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InversePriceConfigured](#inversepriceconfigured)

### `setOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L83)</sub>

Allows the owner to set the address which is permitted to send prices to this contract.

??? example "Details"

    **Signature**

    `setOracle(address _oracle)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OracleUpdated](#oracleupdated)

### `updateRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L90)</sub>

Allows the oracle to update exchange rates in the contract. Otherwise this is just an alias to [`internalUpdateRates`](#internalupdaterates).

??? example "Details"

    **Signature**

    `updateRates(bytes32[] currencyKeys, uint256[] newRates, uint256 timeSent) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOracle](#onlyoracle)

## Internal Functions

### `_effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L535)</sub>

??? example "Details"

    **Signature**

    `_effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L506)</sub>

??? example "Details"

    **Signature**

    `_getCurrentRoundId(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L527)</sub>

??? example "Details"

    **Signature**

    `_getRate(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L516)</sub>

??? example "Details"

    **Signature**

    `_getRateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L492)</sub>

??? example "Details"

    **Signature**

    `_getRateAndUpdatedTime(bytes32 currencyKey) returns (struct ExchangeRates.RateAndUpdatedTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L531)</sub>

??? example "Details"

    **Signature**

    `_getUpdatedTime(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L571)</sub>

??? example "Details"

    **Signature**

    `_rateIsFlagged(bytes32 currencyKey, contract FlagsInterface flags) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L560)</sub>

??? example "Details"

    **Signature**

    `_rateIsStale(bytes32 currencyKey, uint256 _rateStalePeriod) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsStaleWithTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L567)</sub>

??? example "Details"

    **Signature**

    `_rateIsStaleWithTime(uint256 _rateStalePeriod, uint256 _time) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_setRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L387)</sub>

Updates the rate and timestamp for the individual rate using an internal struct.

??? example "Details"

    **Signature**

    `_setRate(bytes32 currencyKey, uint256 rate, uint256 time)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `getFlagsForRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L370)</sub>

??? example "Details"

    **Signature**

    `getFlagsForRates(bytes32[] currencyKeys) returns (bool[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `internalUpdateRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L401)</sub>

Record the set of provided rates and the timestamp, handling any inverse indexes with [`rateOrInverted`](#rateorinverted). At this stage inverse indexes which escaped their bounds are frozen. Any rate with a more recent update time is skipped.

Finally, the [price update lock](#priceupdatelock) is reset, reenabling Synth exchange functionality.

The `timeSent` argument is useful for maintaining the exact age of the data points even as transactions can take a variable amount of time to confirm. Without this, earlier updates could possibly overwrite later ones.

Returns true if no exception was thrown.

??? example "Details"

    **Signature**

    `internalUpdateRates(bytes32[] currencyKeys, uint256[] newRates, uint256 timeSent) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Currency key array length must match rates array length.)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L406)

    * [require(..., Time is too far into the future)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L407)

    **Emits**

    * [RatesUpdated](#ratesupdated)

### `rateOrInverted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L435)</sub>

Returns the current price for a specified currency key.

If a currency is not an inverted index, then just return the rate that was passed in.
If the currency is an inverted index, return the inverted rate. If the inverted price reaches one of its limits, freeze its rate at the limit it breached. Future calls to a frozen inverted index will return the last recorded rate. That is, frozen rates can no longer be updated.

An inverted rate moves exactly inverse to the underlying price; if the underlying price moves up a dollar, the inverted price moves down a dollar.
The price $\bar{p}$ of an [inverse index](#inversepricing) $c$ with base price $p$, entry point $e$, and lower and upper limits $l$ and $u$ respectively, is computed as:

$$
\bar{p} = \text{clamp(}2e - p, \ l, \ u\text{)}
$$

With $0 \lt l \lt e \lt u \lt 2e$ enforced by [`setInversePricing`](#setinversepricing).[^1]

[^1]: The [clamp function](https://en.cppreference.com/w/cpp/algorithm/clamp) can be defined thus: `clamp(v, l, u) = min(max(v, l), u)`.

So if $p$ moves from $e$ to $e + \delta$, then $\bar{p}$ moves to $e - \delta$, if it would not be frozen.
$\bar{p}$ is frozen whenever $\bar{p} \in \{l,u\}$; that is, when $2e - l \le p$ or $p \le 2e - u$. This implies that $p$ can never exceed twice its entry point without $\bar{p}$ being frozen, but in principle it could reach almost to zero.

??? example "Details"

    **Signature**

    `rateOrInverted(bytes32 currencyKey, uint256 rate) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `removeFromArray`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L473)</sub>

Helper function that removes an `entry` from an existing array in storage. Returns `true` if found and removed, `false` otherwise.

??? example "Details"

    **Signature**

    `removeFromArray(bytes32 entry, bytes32[] array) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## Modifiers

### `onlyOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L584)</sub>

Reverts the transaction if `msg.sender` is not the [`oracle`](#oracle).

## Events

### `AggregatorAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L596)</sub>

Records that an Aggregator pricing network was added

**Signature**: `AggregatorAdded(bytes32 currencyKey, address aggregator)`

### `AggregatorRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L597)</sub>

Records that an Aggregator pricing network was removed

**Signature**: `AggregatorRemoved(bytes32 currencyKey, address aggregator)`

### `InversePriceConfigured`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L594)</sub>

Records that an inverse price index was set up or deleted. As there is no distinct event for deletion, this is signaled by providing zero values to all arguments barring `currencyKey`.

**Signature**: `InversePriceConfigured(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit)`

### `InversePriceFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L595)</sub>

Records that an inverse price breached a limit and was frozen.

**Signature**: `InversePriceFrozen(bytes32 currencyKey)`

### `OracleUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L591)</sub>

Records that the anointed oracle was updated.

**Signature**: `OracleUpdated(address newOracle)`

### `RateDeleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L593)</sub>

**Signature**: `RateDeleted(bytes32 currencyKey)`

### `RatesUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/ExchangeRates.sol#L592)</sub>

Records that a set of currency prices were updated.

**Signature**: `RatesUpdated(bytes32[] currencyKeys, uint256[] newRates)`
