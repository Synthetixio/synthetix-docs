# ExchangeRates

## Description

This contract stores the latest Synth exchange rates. These rates are set by an oracle, which updates this contract every three minutes with any prices that have moved sufficiently. Once set, these prices are available for any contract in the Synthetix system to query.
Prices which have not been updated recently enough are considered stale; Synthetix functionality using stale prices does not operate. All rates are denominated in terms of sUSD, so the price of sUSD is always \$1.00, and is never stale.

The ExchangeRates contract is also responsible for computing the prices of various derived synths.
In particular, the behaviour of [inverse synths](#rateorinverted) is defined here. These are derivative synths whose price varies inversely with the price of an underlying asset.

This contract interacts with the oracle's frontrunning protection, which is partially described in [SIP-6](https://sips.synthetix.io/sips/sip-6) and [SIP-7](https://sips.synthetix.io/sips/sip-7).

This does not turn off any functionality in the exchange rate contract, but is used by [`Synthetix`](Synthetix.md) to disable [currency exchanges](Synthetix.md#_internalexchange) while prices are being updated to protect against oracle front running. The lock is released when [rate updates have completed](#internalupdaterates).

**Source:** [contracts/ExchangeRates.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol)

## Architecture

### Related Contracts

<centered-image>
    ![ExchangeRates architecture graph](/img/graphs/ExchangeRates-architecture.svg)
</centered-image>

??? example "Details"

    - [`oracle`](#oracle): This address is not actually a contract, but it is the source of prices for this contract.
    - [`Aggregators`](#aggregators): These are a collection of decentralized pricing networks that collect and aggregate results from a network of oracles.
    - [`PurgeableSynth`](PurgeableSynth.md): exchange rates are used to determine if the total token value is below the purge threshold.
    - [`Synthetix`](Synthetix.md): the value of tokens is used to in order to facilitate exchange between them, and to ensure exchanges cannot occur while price updates and being made or if a particular exchange rate is stale.

## Variables

### `aggregatorKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L36)</sub>

A list of the keys of currencies with a decentralized aggregated pricing network.

**Type:** `bytes32[]`

### `aggregators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L31)</sub>

For each currency with a decentralized aggregated pricing network, return the Aggregation contract address.

**Type:** `mapping(bytes32 => contract AggregatorV2V3Interface)`

### `currencyKeyDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L33)</sub>

**Type:** `mapping(bytes32 => uint8)`

### `currentRoundForRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L45)</sub>

**Type:** `mapping(bytes32 => uint256)`

### `inversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L41)</sub>

For each currency with an inverse index, keep the necessary [`InversePricing`](#inversepricing) information to maintain the index.

**Type:** `mapping(bytes32 => struct IExchangeRates.InversePricing)`

### `invertedKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L43)</sub>

A list of the keys of currencies with an inverted index.

**Type:** `bytes32[]`

### `oracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L28)</sub>

The address which is permitted to push rate updates to the contract.

**Type:** `address`

### `roundFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L47)</sub>

**Type:** `mapping(bytes32 => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L55)</sub>

Initialises the oracle address and initial currency prices, along with the inherited [`SelfDestructible`](SelfDestructible.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Currency key length and rate length must match.")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L62)

## Views

### `aggregatorWarningFlags`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L247)</sub>

??? example "Details"

    **Signature**

    `aggregatorWarningFlags() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `anyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L432)</sub>

??? example "Details"

    **Signature**

    `anyRateIsInvalid(bytes32[] currencyKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L222)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currenciesUsingAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L232)</sub>

??? example "Details"

    **Signature**

    `currenciesUsingAggregator(address aggregator) view returns (bytes32[] currencies)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L318)</sub>

Given a quantity of a source currency, returns a quantity of a destination currency that is of equivalent value at current exchange rates, if those rates are fresh.

The effective value is computed as a simple ratio of the prices of the currencies concerned. That is, to convert a quantity $Q_A$ of currency $A$ to currency $B$ at prices $\pi_A$ and $\pi_B$, the quantity $Q_B$ received is:

$$
Q_B = Q_A \frac{\pi_A}{\pi_B}
$$

This computation is simple because all fractional quantities in the Synthetix system except for the [debt ledger](SynthetixState.md#debtledger) are [18 decimal fixed point numbers](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `effectiveValue(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L326)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `effectiveValueAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L279)</sub>

??? example "Details"

    **Signature**

    `effectiveValueAtRound(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, uint256 roundIdForSrc, uint256 roundIdForDest) view returns (uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L275)</sub>

??? example "Details"

    **Signature**

    `getCurrentRoundId(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLastRoundIdBeforeElapsedSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L256)</sub>

??? example "Details"

    **Signature**

    `getLastRoundIdBeforeElapsedSecs(bytes32 currencyKey, uint256 startingRoundId, uint256 startingTimestamp, uint256 timediff) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L304)</sub>

Retrieves the timestamp the given rate was last updated. Accessed by the same keys as [`rates`](#rates) is.

??? example "Details"

    **Signature**

    `lastRateUpdateTimes(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastRateUpdateTimesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L308)</sub>

Maps [`lastRateUpdateTimes`](#lastrateupdatetimes) over an array of keys.

??? example "Details"

    **Signature**

    `lastRateUpdateTimesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L379)</sub>

??? example "Details"

    **Signature**

    `rateAndInvalid(bytes32 currencyKey) view returns (uint256 rate, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L300)</sub>

??? example "Details"

    **Signature**

    `rateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L251)</sub>

??? example "Details"

    **Signature**

    `rateAndUpdatedTime(bytes32 currencyKey) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateForCurrency`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L342)</sub>

Returns the last recorded rate for the given currency. This is just an alias to the public mapping `rates`, so it could probably be eliminated.

??? example "Details"

    **Signature**

    `rateForCurrency(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L428)</sub>

??? example "Details"

    **Signature**

    `rateIsFlagged(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L418)</sub>

Returns true if the inverse price for the given currency is frozen. This is simply an alias to [`inversePricing[currencyKey].frozen`](#inversepricing). Currencies without an inverse price will naturally return false.

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L422)</sub>

??? example "Details"

    **Signature**

    `rateIsInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L414)</sub>

The rate for a given currency is stale if its last update occurred more than [`rateStalePeriod`](#ratestaleperiod) seconds ago.

`sUSD` is a special case; since its rate is fixed at $1.0$, it is never stale. The rates of nonexistent currencies are always stale.

??? example "Details"

    **Signature**

    `rateIsStale(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L243)</sub>

The duration after which a rate will be considered out of date. Synth exchange and other price-sensitive transactions in the [`Synthetix`](Synthetix.md) contract will not operate if a relevant rate is stale.
Initialised to $3$ hours.

**Type:** `uint256`

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndInvalidForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L392)</sub>

??? example "Details"

    **Signature**

    `ratesAndInvalidForCurrencies(bytes32[] currencyKeys) view returns (uint256[] rates, bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesAndUpdatedTimeForCurrencyLastNRounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L346)</sub>

??? example "Details"

    **Signature**

    `ratesAndUpdatedTimeForCurrencyLastNRounds(bytes32 currencyKey, uint256 numRounds) view returns (uint256[] rates, uint256[] times)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `ratesForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L369)</sub>

Maps [`rateForCurrency`](#rateforcurrency) over an array of keys.

??? example "Details"

    **Signature**

    `ratesForCurrencies(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L214)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L164)</sub>

??? example "Details"

    **Signature**

    `addAggregator(bytes32 currencyKey, address aggregatorAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Given Aggregator is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L169)

    * [require(..., "Aggregator decimals should be lower or equal to 18")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L171)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AggregatorAdded](#aggregatoradded)

### `deleteRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L89)</sub>

Deletes a currency's price and its update time from the ExchangeRates contract.

??? example "Details"

    **Signature**

    `deleteRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Rate is zero")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L90)

    **Modifiers**

    * [onlyOracle](#onlyoracle)

    **Emits**

    * [RateDeleted](#ratedeleted)

### `removeAggregator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L180)</sub>

??? example "Details"

    **Signature**

    `removeAggregator(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No aggregator exists for key")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L182)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L151)</sub>

Allows the owner to remove an inverse index for a particular currency.

??? example "Details"

    **Signature**

    `removeInversePricing(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No inverted price exists")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L152)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L99)</sub>

Allows the owner to set up an inverse index for a particular currency. See [`rateOrInverted`](#rateorinverted) for computation details. New inverse indexes begin unfrozen.

??? example "Details"

    **Signature**

    `setInversePricing(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit, bool freezeAtUpperLimit, bool freezeAtLowerLimit)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "lowerLimit must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L108)

    * [require(..., "upperLimit must be above the entryPoint")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L109)

    * [require(..., "upperLimit must be less than double entryPoint")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L110)

    * [require(..., "lowerLimit must be below the entryPoint")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L111)

    * [require(..., "Cannot freeze at both limits")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L113)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InversePriceConfigured](#inversepriceconfigured)

### `setOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L74)</sub>

Allows the owner to set the address which is permitted to send prices to this contract.

??? example "Details"

    **Signature**

    `setOracle(address _oracle)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OracleUpdated](#oracleupdated)

### `updateRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L81)</sub>

Allows the oracle to update exchange rates in the contract. Otherwise this is just an alias to [`internalUpdateRates`](#internalupdaterates).

??? example "Details"

    **Signature**

    `updateRates(bytes32[] currencyKeys, uint256[] newRates, uint256 timeSent) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOracle](#onlyoracle)

## Internal Functions

### `_effectiveValueAndRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L655)</sub>

??? example "Details"

    **Signature**

    `_effectiveValueAndRates(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view returns (uint256 value, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_formatAggregatorAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L580)</sub>

??? example "Details"

    **Signature**

    `_formatAggregatorAnswer(bytes32 currencyKey, int256 rate) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Negative rate not supported")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L581)

### `_getCurrentRoundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L616)</sub>

??? example "Details"

    **Signature**

    `_getCurrentRoundId(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L647)</sub>

??? example "Details"

    **Signature**

    `_getRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRateAndTimestampAtRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L626)</sub>

??? example "Details"

    **Signature**

    `_getRateAndTimestampAtRound(bytes32 currencyKey, uint256 roundId) view returns (uint256 rate, uint256 time)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRateAndUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L589)</sub>

??? example "Details"

    **Signature**

    `_getRateAndUpdatedTime(bytes32 currencyKey) view returns (struct IExchangeRates.RateAndUpdatedTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getUpdatedTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L651)</sub>

??? example "Details"

    **Signature**

    `_getUpdatedTime(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L717)</sub>

??? example "Details"

    **Signature**

    `_onlyOracle() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only the oracle can perform this action")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L718)

### `_rateIsFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L699)</sub>

??? example "Details"

    **Signature**

    `_rateIsFlagged(bytes32 currencyKey, contract FlagsInterface flags) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L694)</sub>

??? example "Details"

    **Signature**

    `_rateIsFrozen(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L683)</sub>

??? example "Details"

    **Signature**

    `_rateIsStale(bytes32 currencyKey, uint256 _rateStalePeriod) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateIsStaleWithTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L690)</sub>

??? example "Details"

    **Signature**

    `_rateIsStaleWithTime(uint256 _rateStalePeriod, uint256 _time) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rateOrInverted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L535)</sub>

??? example "Details"

    **Signature**

    `_rateOrInverted(bytes32 currencyKey, uint256 rate, uint256 roundId) view returns (uint256 newRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_setRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L470)</sub>

Updates the rate and timestamp for the individual rate using an internal struct.

??? example "Details"

    **Signature**

    `_setRate(bytes32 currencyKey, uint256 rate, uint256 time)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L449)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getFlagsForRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L453)</sub>

??? example "Details"

    **Signature**

    `getFlagsForRates(bytes32[] currencyKeys) view returns (bool[] flagList)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `internalUpdateRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L484)</sub>

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

    ``

    **Requires**

    * [require(..., "Currency key array length must match rates array length.")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L489)

    * [require(..., "Time is too far into the future")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L490)

    **Emits**

    * [RatesUpdated](#ratesupdated)

### `removeFromArray`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L516)</sub>

Helper function that removes an `entry` from an existing array in storage. Returns `true` if found and removed, `false` otherwise.

??? example "Details"

    **Signature**

    `removeFromArray(bytes32 entry, bytes32[] array) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## External Functions

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L194)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot freeze non-inverse rate")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L196)

    * [require(..., "The rate is already frozen")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L197)

## Modifiers

### `onlyOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L712)</sub>

Reverts the transaction if `msg.sender` is not the [`oracle`](#oracle).

## Events

### `AggregatorAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L728)</sub>

Records that an Aggregator pricing network was added

**Signature**: `AggregatorAdded(bytes32 currencyKey, address aggregator)`

### `AggregatorRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L729)</sub>

Records that an Aggregator pricing network was removed

**Signature**: `AggregatorRemoved(bytes32 currencyKey, address aggregator)`

### `InversePriceConfigured`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L726)</sub>

Records that an inverse price index was set up or deleted. As there is no distinct event for deletion, this is signaled by providing zero values to all arguments barring `currencyKey`.

**Signature**: `InversePriceConfigured(bytes32 currencyKey, uint256 entryPoint, uint256 upperLimit, uint256 lowerLimit)`

### `InversePriceFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L727)</sub>

Records that an inverse price breached a limit and was frozen.

**Signature**: `InversePriceFrozen(bytes32 currencyKey, uint256 rate, uint256 roundId, address initiator)`

### `OracleUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L723)</sub>

Records that the anointed oracle was updated.

**Signature**: `OracleUpdated(address newOracle)`

### `RateDeleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L725)</sub>

**Signature**: `RateDeleted(bytes32 currencyKey)`

### `RatesUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/ExchangeRates.sol#L724)</sub>

Records that a set of currency prices were updated.

**Signature**: `RatesUpdated(bytes32[] currencyKeys, uint256[] newRates)`
