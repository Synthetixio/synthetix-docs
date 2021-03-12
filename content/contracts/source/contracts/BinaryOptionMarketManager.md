# BinaryOptionMarketManager

## Description

The `BinaryOptionMarketManager` contract is responsible for [creating](#createmarket) and [destroying](#destroymarket)
[`BinaryOptionMarket`](BinaryOptionMarket.md) instances, as well as
keeping track of the set of [currently-active markets](#markets) and the [total value of deposits](#totaldeposited)
across those markets.

In addition, various static market parameters such as the current fee levels,
are maintained in the manager, and these are inherited by new markets when they are
created.

The manager owner can disable the creation of new markets, or pause all binary option
markets altogether. The manager and its markets will also stop operating if the [system is suspended](SystemStatus.md).
These facilities are provided to allow upgrades to occur smoothly, for which purpose the manager contract
also provides functions to migrate its markets to a new manager instance.

This contract operates in a complex with [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md), which is
responsible for actually instantiating new [`BinaryOptionMarket`](BinaryOptionMarket.md) instances. Since the factory
must contain the entire bytecode of the market contract, we must separate the factory from the manager, as the combined
contract would otherwise exceed the maximum contract size specified in [EIP 170](https://eips.ethereum.org/EIPS/eip-170).

??? example "Related Contracts"

    - [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md): The factory is responsible for actually instantiating new `BinaryOptionMarket` instances at the direction of the manager.
    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The manager directs the factory to construct new `BinaryOptionMarket` instances, and keeps track of them in the [`_markets`](#_markets) array.
    - [`Synth (sUSD)`](Synth.md): As all bids and settlements are made in sUSD, the manager must know the sUSD address in order to accept initial bids.
    - [`SystemStatus`](SystemStatus.md): The manager pauses if the system is suspended on the SystemStatus contract.
    - [`AddressResolver`](AddressResolver.md): The addresses of SystemStatus and sUSD are retrieved from here.

**Source:** [contracts/BinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol)

## Structs

### `CreatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L43)</sub>

These are the parameters governing the limits that binary option market creators must abide by.

| Field                | Type      | Description                                                                                                    |
| -------------------- | --------- | -------------------------------------------------------------------------------------------------------------- |
| `capitalRequirement` | `uint256` | Markets require the creator to maintain at least this value of sUSD in bids.                                   |
| `skewLimit`          | `uint256` | The market requires a percentage of the creator's bids to be retained on each size, governed by this variable. |

### `Durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L37)</sub>

This struct holds the current values of time periods governing the duration of various `BinaryOptionMarket` phases.
All durations are in seconds.

Note that unlike other parameters, varying `maxOraclePriceAge` will affect
already-instantiated markets.

| Field               | Type      | Description                                                                                                                         |
| ------------------- | --------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| `maxOraclePriceAge` | `uint256` | A market can still be resolved if the last oracle price was updated less than `maxOraclePriceAge` seconds before the maturity date. |
| `expiryDuration`    | `uint256` | The duration that options can be exercised for after maturity.                                                                      |
| `maxTimeToMaturity` | `uint256` | Markets cannot be created with a maturity date further in the future than this.                                                     |

### `Fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L31)</sub>

The global fee rates, which are inherited by new markets.
Note that the sum `poolFee + creatorFee` must be between 0 and 1 exclusive,
while `refundFee` must be no greater than 1.

| Field        | Type      | Description                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------ | --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `poolFee`    | `uint256` | The portion of the sUSD deposited in the market at resolution that is collected by the [fee pool](FeePool.md). This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number.                                                                                                                                                                                                                    |
| `creatorFee` | `uint256` | The portion collected by the market's [creator](BinaryOptionMarket.md#creator) as a fee. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number.                                                                                                                                                                                                                                          |
| `refundFee`  | `uint256` | When a bid is refunded, this portion of its value is retained in the market to be paid out at maturity. This fee is intended to compensate the market for the toxic price signal that the bidder has sent, by increasing the payoff of the remaining bidders, and to discourage excessive price volatility at the end of bidding. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number. |

## Variables

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L52)</sub>

This holds the current values for market creator limits.

**Type:** `struct BinaryOptionMarketManager.CreatorLimits`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L51)</sub>

This holds the current values that new markets will inherit for several time-related parameters.

**Type:** `struct BinaryOptionMarketManager.Durations`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L50)</sub>

This holds the current values that new markets will inherit for their fee rates.
Once created, a market's fee rates are constant, so that if they are altered on the
manager contract they do not change in existing markets.

**Type:** `struct BinaryOptionMarketManager.Fees`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L54)</sub>

New markets cannot be created if this is false.

**Type:** `bool`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L55)</sub>

This tracks the total of sUSD deposited across all binary option markets.
This is updated whenever bids are made or refunded, options exercised,
or a markets created or destroyed.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L71)</sub>

The constructor initialises the inherited contracts and sets the initial values for fees, durations and other settings.
These parameters follow the constraints of the setter functions so that the various
parameters can't be set out of range.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, uint256 _maxOraclePriceAge, uint256 _expiryDuration, uint256 _maxTimeToMaturity, uint256 _creatorCapitalRequirement, uint256 _creatorSkewLimit, uint256 _poolFee, uint256 _creatorFee, uint256 _refundFee)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [setCreatorCapitalRequirement](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L88)

## Restricted Functions

### `decrementTotalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L227)</sub>

Allows markets to decrease the tracked total deposit value.

The transaction reverts if the sender is not a [known market](#onlyknownmarkets),
or if the manager is [paused](Pausable.md), or if the [system is suspended](SystemStatus.md).

??? example "Details"

    **Signature**

    `decrementTotalDeposited(uint256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyKnownMarkets](#onlyknownmarkets)

    * [notPaused](#notpaused)

### `incrementTotalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L222)</sub>

Allows markets to increase the tracked total deposit value.

The transaction reverts if the sender is not a [known market](#onlyknownmarkets),
or if the manager is [paused](Pausable.md), or if the [system is suspended](SystemStatus.md).

??? example "Details"

    **Signature**

    `incrementTotalDeposited(uint256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyActiveMarkets](#onlyactivemarkets)

    * [notPaused](#notpaused)

### `migrateMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L351)</sub>

Allows the contract owner to migrate a set of markets to a new manager instance, for example in case of upgrades.
This requires first [setting the migrating manager](#setmigratingmanager) in the receiving manager, so that the
[`receiveMarkets`](#receivemarkets) can be called from this function call.
This will also migrate the total value of deposits in the migrated markets between the factories.

The most efficient way of invoking this market is to provide the markets in the reverse order that they are
listed in [`_markets`](#_markets), so that they can be popped off the end without rewriting
any other parts of the array.

The transaction will revert if any of the markets provided is not known, or is a duplicate.

??? example "Details"

    **Signature**

    `migrateMarkets(contract BinaryOptionMarketManager receivingManager, bool active, contract BinaryOptionMarket[] marketsToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketsMigrated](#marketsmigrated)

### `setCreatorCapitalRequirement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L209)</sub>

Allows the contract owner to set the [minimum sUSD value](#creatorlimits) required to open a market.

??? example "Details"

    **Signature**

    `setCreatorCapitalRequirement(uint256 _creatorCapitalRequirement)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorCapitalRequirementUpdated](#creatorcapitalrequirementupdated)

### `setCreatorFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L195)</sub>

Allows the contract owner to update [`fees.creatorFee`](#fees).

The transaction reverts if the sum of `fees.poolFee` and `fees.creatorFee` is not between 0 and 100%.

??? example "Details"

    **Signature**

    `setCreatorFee(uint256 _creatorFee)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Total fee must be less than 100%.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L197)

    * [require(..., "Total fee must be nonzero.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L198)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorFeeUpdated](#creatorfeeupdated)

### `setCreatorSkewLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L214)</sub>

Allows the contract owner to set the [skew limit](#creatorlimits) creators must abide by to open a market.

??? example "Details"

    **Signature**

    `setCreatorSkewLimit(uint256 _creatorSkewLimit)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Creator skew limit must be no greater than 1.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L215)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorSkewLimitUpdated](#creatorskewlimitupdated)

### `setExpiryDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L177)</sub>

Allows the contract owner to update [`durations.expiryDuration`](#durations).

??? example "Details"

    **Signature**

    `setExpiryDuration(uint256 _expiryDuration)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExpiryDurationUpdated](#expirydurationupdated)

### `setMarketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L340)</sub>

Allows the owner to toggle whether [market creation is enabled](#marketcreationenabled).

??? example "Details"

    **Signature**

    `setMarketCreationEnabled(bool enabled)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxOraclePriceAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L172)</sub>

Allows the contract owner to update [`durations.maxOraclePriceAge`](#durations).

??? example "Details"

    **Signature**

    `setMaxOraclePriceAge(uint256 _maxOraclePriceAge)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxOraclePriceAgeUpdated](#maxoraclepriceageupdated)

### `setMaxTimeToMaturity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L182)</sub>

Allows the contract owner to update [`durations.maxTimeToMaturity`](#durations).

??? example "Details"

    **Signature**

    `setMaxTimeToMaturity(uint256 _maxTimeToMaturity)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxTimeToMaturityUpdated](#maxtimetomaturityupdated)

### `setMigratingManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L347)</sub>

Allows the owner to set the value of [`_migratingManager`](#_migratingmanager).

??? example "Details"

    **Signature**

    `setMigratingManager(contract BinaryOptionMarketManager manager)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setPoolFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L187)</sub>

Allows the contract owner to update [`fees.poolFee`](#fees).

The transaction reverts if the sum of `fees.poolFee` and `fees.creatorFee` is not between 0 and 1.

??? example "Details"

    **Signature**

    `setPoolFee(uint256 _poolFee)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Total fee must be less than 100%.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L189)

    * [require(..., "Total fee must be nonzero.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L190)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PoolFeeUpdated](#poolfeeupdated)

### `setRefundFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L203)</sub>

Allows the contract owner to update [`fees.refundFee`](#fees).

The transaction reverts if the refund fee is greater than 100%.

??? example "Details"

    **Signature**

    `setRefundFee(uint256 _refundFee)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Refund fee must be no greater than 100%.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L204)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RefundFeeUpdated](#refundfeeupdated)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L116)</sub>

Retrieves the [cached](MixinResolver.md) address of the [`ExchangeRates`](ExchangeRates.md) instance, which
is used to determine whether currency keys [are valid to create new markets](#_isvalidkey).

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_factory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L120)</sub>

Retrieves the [cached](MixinResolver.md) address of the [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md) instance.

??? example "Details"

    **Signature**

    `_factory() view returns (contract BinaryOptionMarketFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_isKnownMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L126)</sub>

Returns true if the provided address exists in either of the active or matured markets lists, and false otherwise.

??? example "Details"

    **Signature**

    `_isKnownMarket(address candidate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_isValidKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L146)</sub>

A key can be used for a binary option market if it is not `sUSD` (as the price of sUSD is fixed at \$1), and not
an inverse synth (since they are equivalent to using the non-inverse and reversing long and short).

??? example "Details"

    **Signature**

    `_isValidKey(bytes32 oracleKey) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L112)</sub>

The [cached](MixinResolver.md) `sUSD` instance.

??? example "Details"

    **Signature**

    `_sUSD() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L108)</sub>

The [cached](MixinResolver.md) [`SystemStatus`](SystemStatus.md) instance. The manager contract does not function when
the system is suspended.

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L134)</sub>

Returns markets that are not yet mature.

This function returns a slice of the internal active markets array, consisting of `pageSize` elements
starting at `index`. If the page would extend past the end of the array, the slice will
be shorter than `pageSize` elements long. The entire array can be retrieved
with `markets(0, numMarkets())`, or any larger page size.

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cancelMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L294)</sub>

??? example "Details"

    **Signature**

    `cancelMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not an active market")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L295)

    * [require(..., "Sender not market creator")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L297)

    **Modifiers**

    * [notPaused](#notpaused)

    **Emits**

    * [MarketCancelled](#marketcancelled)

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L237)</sub>

Calls out to [`BinaryOptionMarketFactory.createMarket`](BinaryOptionMarketFactory.md#createmarket) to create a new
[`BinaryOptionMarket`](BinaryOptionMarket.md) instance and adds its address to the [`_markets`](#_markets) array.

The creator (the message sender) must provide the following parameters:

| Field         | Type                                                                               | Description                                                                                                                            |
| ------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------- |
| `oracleKey`   | `bytes32`                                                                          | The key of the underlying asset of this market in the [`ExchangeRates`](ExchangeRates.md) contract.                                    |
| `strikePrice` | `uint` ([18 decimals](/contracts/source/libraries/SafeDecimalMath.md))             | The strike price of the underlying asset at maturity, in the same units as reported by the [ExchangeRates](ExchangeRates.md) contract. |
| `times`       | `uint[2] calldata`                                                                 | The unix timestamps (seconds) of the bidding end date and the maturity date of the new market, in that order.                          |
| `bids`        | `uint[2] calldata` ([18 decimals](/contracts/source/libraries/SafeDecimalMath.md)) | The initial sUSD bids by the market creator on the long and short sides of the market, in that order.                                  |

Upon creation, the manager transfers `bids[0] + bids[1]` sUSD from the creator to the
new market using an ERC20 `transferFrom` call, so the creator must have given sufficient transfer approval
to the manager. The initial bids will be reflected in the [total deposited quantity](#totaldeposited),
and the market creator will be credited `bids[0]` worth of bids on the long option,
and `bids[1]` worth on the short option. These bids, like any other user's, can be claimed and exercised
as options, but they cannot be [refunded](BinaryOptionMarket.md#refund) if such a refund would decrease the creator's bid total
to less than the [minimum liquidity requirement](#creatorlimits).

The expiry date of the new market will be set to the provided maturity date (`times[1]`)
plus [`durations.expiryDuration`](#durations), while the fee rates will be set from the current values
in the manager. The [resolver](AddressResolver.md) address of the new market is inherited from
the address known to the [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md) which performs the actual
instantiation.
The `BinaryOptionMarket` contract has no setters, so once constructed,
these values are fixed for the lifetime of the market.
The resolver cache of the new market is synchronised immediately after construction by the manager.

The transaction reverts if any of the following conditions is true:

- The manager is [paused](Pausable.md)
- The [system is suspended](SystemStatus.md)
- Market creation [has been disabled](#marketcreationenabled)
- The provided oracle key is [invalid](#_isvalidkey).
- The given maturity date is further than [`durations.maxTimeToMaturity`](#durations) in the future
- The provided maturity date is not after the provided bidding end date.
- The sum of `longBid` and `shortBid` is less than [`capitalRequirement`](#creatorlimits).
- The bids skey more than than the [skew limit](#creatorlimits).
- The creator has not approved the manager to transfer at least `longBid + shortBid` sUSD on their behalf.

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, bool refundsEnabled, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Market creation is disabled")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L251)

    * [require(..., "Invalid key")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L252)

    * [require(..., "Maturity too far in the future")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L255)

    * [require(..., "End of bidding has passed")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L259)

    * [require(..., "Maturity predates end of bidding")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L260)

    **Modifiers**

    * [notPaused](#notpaused)

    **Emits**

    * [MarketCreated](#marketcreated)

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L303)</sub>

Allows markets to be destroyed once they have reached their expiry dates. The transaction will revert if any
single market in the provided list is not ready to expire.

??? example "Details"

    **Signature**

    `expireMarkets(address[] markets)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [notPaused](#notpaused)

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L142)</sub>

Returns markets that are mature.

This function behaves the same way as [`activeMarkets`](#activemarkets) does.

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L130)</sub>

Returns the number of currently-tracked non-matured markets.

??? example "Details"

    **Signature**

    `numActiveMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L138)</sub>

Returns the number of currently-tracked matured markets.

??? example "Details"

    **Signature**

    `numMaturedMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rebuildMarketCaches`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L318)</sub>

??? example "Details"

    **Signature**

    `rebuildMarketCaches(contract BinaryOptionMarket[] marketsToSync)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `receiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L382)</sub>

This is called by a migrating manager once it has prepared its markets to be received to finalise the migration.
The value of deposits in the migrated markets will be added to the receiving manager's total.

The function reverts if the message sender is not the migrating manager,
which must previously [have been set](#setmigratingmanager), or if any provided market is already known to
the manager, or is a duplicate.

??? example "Details"

    **Signature**

    `receiveMarkets(bool active, contract BinaryOptionMarket[] marketsToReceive)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Only permitted for migrating manager.")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L383)

    **Emits**

    * [MarketsReceived](#marketsreceived)

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L287)</sub>

Allows a particular market to be [resolved](BinaryOptionMarket.md#resolve). When this occurs, the market will be moved
from the active markets list to the matured markets list.

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not an active market")](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L288)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L407)</sub>

The transaction reverts if the message sender is not an [active market](#activemarkets).

### `onlyKnownMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L412)</sub>

The transaction reverts if the message sender is not a [known market](#_isknownmarket).

## Events

### `CreatorCapitalRequirementUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L437)</sub>

The [capital requirement](#creatorlimits) was updated.

**Signature**: `CreatorCapitalRequirementUpdated(uint256 value)`

### `CreatorFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L440)</sub>

The [creator fee](#fees) was updated.

**Signature**: `CreatorFeeUpdated(uint256 fee)`

### `CreatorSkewLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L438)</sub>

The [skew limit](#creatorlimits) was updated.

**Signature**: `CreatorSkewLimitUpdated(uint256 value)`

### `ExerciseDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L434)</sub>

**Signature**: `ExerciseDurationUpdated(uint256 duration)`

### `ExpiryDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L435)</sub>

The [expiry duration](#durations) was updated.

**Signature**: `ExpiryDurationUpdated(uint256 duration)`

### `MarketCancelled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L429)</sub>

**Signature**: `MarketCancelled(address market)`

### `MarketCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L419)</sub>

A new market was created.

**Signature**: `MarketCreated(address market, address creator, bytes32 oracleKey, uint256 strikePrice, uint256 biddingEndDate, uint256 maturityDate, uint256 expiryDate)`

### `MarketCreationEnabledUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L432)</sub>

[Market creation](#marketcreationenabled) was enabled or disabled.

**Signature**: `MarketCreationEnabledUpdated(bool enabled)`

### `MarketExpired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L428)</sub>

An expiring market was destroyed.

**Signature**: `MarketExpired(address market)`

### `MarketsMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L430)</sub>

A set of markets was migrated to a certain receiving manager.

**Signature**: `MarketsMigrated(contract BinaryOptionMarketManager receivingManager, contract BinaryOptionMarket[] markets)`

### `MarketsReceived`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L431)</sub>

A set of markets was migrated from a certain migrating manager.

**Signature**: `MarketsReceived(contract BinaryOptionMarketManager migratingManager, contract BinaryOptionMarket[] markets)`

### `MaxOraclePriceAgeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L433)</sub>

The [max oracle price age](#durations) was updated.

**Signature**: `MaxOraclePriceAgeUpdated(uint256 duration)`

### `MaxTimeToMaturityUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L436)</sub>

The [maximum time to maturity](#durations) was updated.

**Signature**: `MaxTimeToMaturityUpdated(uint256 duration)`

### `PoolFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L439)</sub>

The [pool fee](#fees) was updated.

**Signature**: `PoolFeeUpdated(uint256 fee)`

### `RefundFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/BinaryOptionMarketManager.sol#L441)</sub>

The [refund fee](#fees) was updated.

**Signature**: `RefundFeeUpdated(uint256 fee)`
