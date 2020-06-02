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

## Architecture

---

### Inheritance Graph

```mermaid
graph TD
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> Owned[Owned]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> Pausable[Pausable]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> SelfDestructible[SelfDestructible]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

### Related Contracts

```mermaid
graph TD
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> BinaryOptionMarket[BinaryOptionMarket]
    BinaryOptionMarket[BinaryOptionMarket] --> BinaryOptionMarketManager[BinaryOptionMarketManager]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> BinaryOptionMarketFactory[BinaryOptionMarketFactory]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> BinaryOptionMarketManager[BinaryOptionMarketManager]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> SystemStatus[SystemStatus]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> AddressResolver[AddressResolver]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> SynthsUSD[SynthsUSD]
```

??? example "Details"

    - [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md): The factory is responsible for actually instantiating new `BinaryOptionMarket` instances at the direction of the manager.
    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The manager directs the factory to construct new `BinaryOptionMarket` instances, and keeps track of them in the [`_markets`](#_markets) array.
    - [`Synth (sUSD)`](Synth.md): As all bids and settlements are made in sUSD, the manager must know the sUSD address in order to accept initial bids.
    - [`SystemStatus`](SystemStatus.md): The manager pauses if the system is suspended on the SystemStatus contract.
    - [`AddressResolver`](AddressResolver.md): The addresses of SystemStatus and sUSD are retrieved from here.
 
---

### Libraries

- [SafeMath](SafeMath.md) for `uint`
- [SafeDecimalMath](SafeDecimalMath.md)

---

## Structs

---

### `Fees`

The global fee rates, which are inherited by new markets.
Note that the sum `poolFee + creatorFee` must be between 0 and 1 exclusive,
while `refundFee` must be no greater than 1.

This is similar to the [`BinaryOptionMarket.Fees`](BinaryOptionMarket.md#fees) struct.

| Field                  | Type                                       | Description |
| ---------------------- | ------------------------------------------ | ----------- |
| `poolFee`              | `uint` ([18 decimals](SafeDecimalMath.md)) | The portion of the sUSD deposited in the market at resolution that is collected by the [fee pool](FeePool.md). |
| `creatorFee`           | `uint` ([18 decimals](SafeDecimalMath.md)) | The portion collected by the market's [creator](#creator) as a fee. |
| `refundFee`            | `uint` ([18 decimals](SafeDecimalMath.md)) | When a bid is refunded, this portion of its value is retained in the market to be paid out at maturity. This fee is intended to compensate the market for the toxic price signal that the bidder has sent, by increasing the payoff of the remaining bidders, and to discourage excessive price volatility at the end of bidding. |

---

### `Durations`

This struct holds the current values of time periods governing the duration of various `BinaryOptionMarket` phases.

| Field                      | Type             | Description |
| -------------------------- | ---------------- | ----------- |
| oracleMaturityWindow       | `uint` (seconds) | A market can still be resolved if the last oracle price was updated less than `maturityWindow` seconds before the maturity date. |
| exerciseDuration           | `uint` (seconds) | Matured binary options can be exercised for this period after the maturity date before they expire and the market can be destroyed. |
| creatorDestructionDuration | `uint` (seconds) | For this period, the creator of a given market is given the exclusive right to destroy it in exchange for a percentage of the turnover plus the value of any unclaimed options. After this time, anyone may destroy it for the same fee. |
| maxTimeToMaturity          | `uint` (seconds) | Markets cannot be created with a maturity date further in the future than this. |

Note that unlike other parameters, varying `creatorDestructionDuration` or `oracleMaturityWindow` will affect
already-instantiated markets.

---

## Constructor

The constructor initialises the inherited contracts and sets the initial values for fees, durations and other settings.
These parameters follow the constraints of the setter functions so that the various
parameters can't be set out of range.

??? example "Details"
    **Signature**
    
    `constructor(address _owner, address _resolver, uint _oracleMaturityWindow, uint _exerciseDuration, uint _creatorDestructionDuration, uint _maxTimeToMaturity, uint _minimumInitialLiquidity, uint _poolFee, uint _creatorFee, uint _refundFee) public`
    
    **Superconstructors**
    
    * [`Owned`](Owned.md)
    * [`Pausable`](Pausable.md)
    * [`SelfDestructible`](SelfDestructible.md)
    * [`MixinResolver`](MixinResolver.md)

## Views

---

### `numMarkets`

Returns the number of markets currently tracked in the [`_markets`](#_markets) array.

??? example "Details"
    **Signature**
    
    `function numMarkets() returns (uint)`
    
    **State Mutability**
    
    `external view`

---

### `markets`

Returns a slice of the [`_markets`](#_markets) array, consisting of `pageSize` elements
starting at `index`. If the page would extend past the end of the array, the slice will
be shorter than `pageSize` elements long. The entire array can be retrieved
with `markets(0, numMarkets())`, or any larger page size.

??? example "Details"
    **Signature**
    
    `function markets(uint index, uint pageSize) returns (address[] memory)`
    
    **State Mutability**
    
    `external view`
    
---

### `publiclyDestructibleTime`

Returns the timestamp at which a given market can be destroyed by anyone,
rather than exclusively the market creator.

??? example "Details"
    **Signature**
    
    `function publiclyDestructibleTime(address market) returns (uint)`
    
    **State Mutability**
    
    `external view`

## Views (Internal)

---

### `_systemStatus`

Retrieves the [cached](MixinResolver.md) address of the [`SystemStatus`](SystemStatus.md) contract.

??? example "Details"
    **Signature**
    
    `function _systemStatus() returns (ISystemStatus)`
    
    **State Mutability**
    
    `internal view`
    
### `_sUSD`

Retrieves the [cached](MixinResolver.md) address of the sUSD [`Synth`](Synth.md) instance.

??? example "Details"
    **Signature**
    
    `function _sUSD() returns (ISynth)`
    
    **State Mutability**
    
    `internal view`
    
### `_isKnownMarket`

Returns true if the provided address exists in the [`_markets`](#_markets) array and false otherwise.

??? example "Details"
    **Signature**
    
    `function _isKnownMarket(address candidate) returns (bool)`
    
    **State Mutability**
    
    `internal view`

### `_publiclyDestructibleTime`

The internal implementation of [`publiclyDestructibleTime`](#publiclydestructibletime)

??? example "Details"
    **Signature**
    
    `function _publiclyDestructibleTime(address market) returns (uint)`
    
    **State Mutability**
    
    `internal view`

---

## Variables

---

### `fees`

This holds the current values that new markets will inherit for their fee rates.
Once created, a market's fee rates are constant, so that if they are altered on the
manager contract they do not change in existing markets.

**Type:** [`BinaryOptionMarket.Fees public`](#binaryoptionmarketfees)

---

### `durations`

This holds the current values that new markets will inherit for several time-related parameters.

**Type:** [`Durations public`](#durations)

---

### `minimumInitialLiquidity`

New markets require the creator to provide at least this value of sUSD in initial bids.

**Type:** `uint public`

---

### `marketCreationEnabled`

New markets cannot be created if this is false.

**Type:** `bool public`

---

### `totalDeposited`

This tracks the total of sUSD deposited across all binary option markets.
This is updated whenever bids are made or refunded, options exercised,
or a markets created or destroyed.

**Type:** `uint public`

## Variables (Internal)

---

### `_markets`

An unordered list of the currently-existing `BinaryOptionMarket` instances.
It can be queried with the [`markets`](#markets) function.

**Type:** `address[] internal`

---

### `_marketIndices`

This mapping keeps track of the index in the [`_markets`](#_markets) array belonging
to a particular market.

**Type:** `mapping(address => uint) internal`

---

### `_migratingManager`

When migrating [`BinaryOptionMarket`](BinaryOptionMarket.md) instances from one manager
to another, the receiving manager will only permit markets to be migrated from the
`_migratingManager` address. This is set by the [`setMigratingManager`](#setmigratingmanager) function.

See [`receiveMarkets`](#receivemarkets) and [`migrateMarkets`](#migratemarkets) for further details.

**Type:** `BinaryOptionMarketManager internal`

## Modifiers

---

### `onlyKnownMarkets`

The transaction reverts if the message sender is not a [known market](#_isknownmarket)
in the [`_markets`](#_markets) array.

## Functions
    
---

### `createMarket`

Calls out to [`BinaryOptionMarketFactory.createMarket`](BinaryOptionMarketFactory.md#createmarket) to create a new
[`BinaryOptionMarket`](BinaryOptionMarket.md) instance and adds its address to the [`_markets`](#_markets) array.

The creator (the message sender) must provide the following parameters:

| Field         | Type                                       | Description |
| ------------- | ------------------------------------------ | ----------- |
| `oracleKey`   | `bytes32`                                  | The key of the underlying asset of this market in the [`ExchangeRates`](ExchangeRates.md) contract. |
| `targetPrice` | `uint` ([18 decimals](SafeDecimalMath.md)) | The target price of the underlying asset at maturity, in the same units as reported by the [ExchangeRates](ExchangeRates.md) contract. |
| `times`       | `uint[2] calldata`                         | The unix timestamps (seconds) of the bidding end date and the maturity date of the new market, in that order. |
| `bids`        | `uint[2] calldata` ([18 decimals](SafeDecimalMath.md)) | The initial sUSD bids by the market creator on the long and short sides of the market, in that order. |

Upon creation, the manager transfers `bids[0] + bids[1]` sUSD from the creator to the
new market using an ERC20 `transferFrom` call, so the creator must have given sufficient transfer approval
to the manager. The initial bids will be reflected in the [total deposited quantity](#totaldeposited),
and the market creator will be credited `bids[0]` worth of bids on the long option,
and `bids[1]` worth on the short option. These bids, like any other user's, can be claimed and exercised
as options, but they cannot be [refunded](#refund) if such a refund would decrease the creator's bid total
to less than the [minimum liquidity requirement](#minimuminitialliquidity).

The destruction time of the new market will be set to the provided maturity date (`times[1]`)
plus `durations.exerciseDuration`, while the fee rates will be set from the current values
in the manager. The [resolver](AddressResolver.md) address of the new market is inherited from
the address known to the [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md) which performs the actual
instantiation.
The `BinaryOptionMarket` contract has no setters, so once constructed,
these values are fixed for the lifetime of the market.
The resolver cache of the new market is synchronised immediately after construction by the manager.

The transaction reverts if any of the following conditions is true:

* The manager is [paused](Pausable.md)
* The [system is suspended](SystemStatus.md)
* Market creation [has been disabled](#marketcreationenabled)
* The given maturity date is further than [`durations.maxTimeToMaturity`](#durations) in the future
* The provided maturity date is not after the provided bidding end date.
* The sum of `longBid` and `shortBid` is less than [`minimumInitialLiquidity`](#minimuminitialliquidity)
* The creator has not approved the manager to transfer at least `longBid + shortBid` sUSD on their behalf.

??? example "Details"
    **Signature**
    
    `createMarket(bytes32 oracleKey, uint targetPrice, uint[2] calldata times, uint[2] calldata bids) returns (BinaryOptionMarket)`
    
    **State Mutability**
    
    `external`
    
    **Modifiers**
    
    * [`notPaused`](Pausable.md#notpaused)
   
    **Emitted Events**  
    
    * [`MarketCreated(address(market), msg.sender, oracleKey, targetPrice, biddingEnd, maturity)`](#marketcreated)

---

### `destroyMarket`

Destroys an existing [`BinaryOptionMarket`](BinaryOptionMarket.md) instance if it's at
the end of its life, and removes it from the [`_markets`](#_markets) array.

Upon destruction, the market will remit [a destruction reward](BinaryOptionMarket.md#destructionreward) to the caller,
and any remaining sUSD will be returned to the fee pool.

The transaction reverts if any of the following is true:

* The manager is [paused](Pausable.md)
* The [system is suspended](SystemStatus.md)
* The market to be destroyed is [not known to the manager](#_isknownmarket);
* The market to be destroyed is not yet [destructible](BinaryOptionMarket.md#_destructible).
* The message sender is not the market creator, or the market is still within the [creator exclusive destruction period](#publiclydestructibletime).

??? example "Details"
    **Signature**
    
    `destroyMarket(address market) external notPaused`
    
    **State Mutability**
    
    `external`
    
    **Modifiers**
    
    * [`notPaused`](Pausable.md#notpaused)
   
    **Emitted Events** 
    
    * [`MarketDestroyed(market, msg.sender)`](#marketdestroyed)
    
## Functions (Restricted)

---

### `setOracleMaturityWindow`

Allows the contract owner to update [`durations.oracleMaturityWindow`](#durations).

??? example "Details"
    **Signature**
    
    `setOracleMaturityWindow(uint _oracleMaturityWindow)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`OracleMaturityWindowUpdated(_oracleMaturityWindow)`](#oraclematuritywindowupdated)

---

### `setExerciseDuration`

Allows the contract owner to update [`durations.exerciseDuration`](#durations).

??? example "Details"
    **Signature**
    
    `setExerciseDuration(uint _exerciseDuration)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`ExerciseDurationUpdated(_exerciseDuration)`](#exercisedurationupdated)

---

### `setCreatorDestructionDuration`

Allows the contract owner to update [`durations.creatorDestructionDuration`](#durations).

??? example "Details"
    **Signature**
    
    `setCreatorDestructionDuration(uint _creatorDestructionDuration)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`CreatorDestructionDurationUpdated(_creatorDestructionDuration)`](#creatordestructiondurationupdated)
    
---

### `setMaxTimeToMaturity`

Allows the contract owner to update [`durations.maxTimeToMaturity`](#durations).

??? example "Details"
    **Signature**
    
    `setMaxTimeToMaturity(uint _maxTimeToMaturity)`
    
     **State Mutability**
     
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`MaxTimeToMaturityUpdated(_maxTimeToMaturity)`](#maxtimetomaturityupdated)

---

### `setPoolFee`

Allows the contract owner to update [`fees.poolFee`](#fees).

The transaction reverts if the sum of `fees.poolFee` and `fees.creatorFee` is not between 0 and 1.

??? example "Details"
    **Signature**
    
    `setPoolFee(uint _poolFee)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`PoolFeeUpdated(_poolFee)`](#poolfeeupdated)
    
---

### `setCreatorFee`

Allows the contract owner to update [`fees.creatorFee`](#fees).

The transaction reverts if the sum of `fees.poolFee` and `fees.creatorFee` is not between 0 and 100%.

??? example "Details"
    **Signature**
    
    `setCreatorFee(uint _creatorFee)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`CreatorFeeUpdated(_creatorFee)`](#creatorfeeupdated)
    
---

### `setRefundFee`

Allows the contract owner to update [`fees.refundFee`](#fees).

The transaction reverts if the refund fee is greater than 100%.

??? example "Details"
    **Signature**
    
    `setRefundFee(uint _refundFee)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`RefundFeeUpdated(_refundFee)`](#refundfeeupdated)
 
---

### `setMinimumInitialLiquidity`

Allows the contract owner to update [`minimumInitialLiquidity`](#minimuminitialliquidity).

??? example "Details"
    **Signature**
    
    `setMinimumInitialLiquidity(uint _minimumInitialLiquidity)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyOwner)
   
    **Emitted Events**
    
    * [`MinimumInitialLiquidityUpdated(_minimumInitialLiquidity)`](#minimuminitialliquidityupdated)
 
---

### `incrementTotalDeposited`

Allows markets to increase the tracked total deposit value.

The transaction reverts if the sender is not a [known market](#onlyknownmarkets),
or if the manager is [paused](Pausable.md), or if the [system is suspended](SystemStatus.md).

??? example "Details"
    **Signature**
    `incrementTotalDeposited(uint delta)`
    
    **State Mutability**
    `external`
    
    **Modifiers**
    * [`onlyKnownMarkets`](#onlyknownmarkets)
    * [`notPaused`](Pausable.md#notpaused)
    
---
    
### `decrementTotalDeposited`

Allows markets to decrease the tracked total deposit value.

The transaction reverts if the sender is not a [known market](#onlyknownmarkets),
or if the manager is [paused](Pausable.md), or if the [system is suspended](SystemStatus.md).

??? example "Details"
    **Signature**
    `decrementTotalDeposited(uint delta)`
    
    **State Mutability**
    `external`
    
    **Modifiers**
    * [`onlyKnownMarkets`](#onlyknownmarkets)
    * [`notPaused`](Pausable.md#notpaused)

---

### `setResolverAndSyncCacheOnMarkets`

Calls [`setResolverAndSyncCache`](MixinResolver.md#setresolverandsynccache) on a given array of markets, updating their address caches.

??? example "Details"
    **Signature**
    `setResolverAndSyncCacheOnMarkets(AddressResolver _resolver, BinaryOptionMarket[] calldata marketsToSync)`
    
    **State Mutability**
    `external`
    
    **Modifiers**
    * [`onlyOwner`](Owned.md#onlyowner)

---

### `setMarketCreationEnabled`

Allows the owner to toggle whether [market creation is enabled](#marketcreationenabled).

??? example "Details"
    **Signature**
    
    `setMarketCreationEnabled(bool enabled)`
    
    **State Mutability**
    
    `public`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyowner)
    
    **Emitted Events**
    
    * [`MarketCreationEnabledUpdated(enabled)`](#marketcreationenabledupdated)

---

### `setMigratingManager`

Allows the owner to set the value of [`_migratingManager`](#_migratingmanager).

??? example "Details"
    **Signature**
    `setMigratingManager(BinaryOptionMarketManager manager)`
    
    **State Mutability**
    `public`
    
    **Modifiers**
    * [`onlyOwner`](Owned.md#onlyowner)

---

### `migrateMarkets`

Allows the contract owner to migrate a set of markets to a new manager instance, for example in case of upgrades.
This requires first [setting the migrating manager](#setmigratingmanager) in the receiving manager, so that the
[`receiveMarkets`](#receivemarkets) can be called from this function call.
This will also migrate the total value of deposits in the migrated markets between the factories.

The most efficient way of invoking this market is to provide the markets in the reverse order that they are
listed in [`_markets`](#_markets), so that they can be popped off the end without rewriting
any other parts of the array.

The transaction will revert if any of the markets provided is not known, or is a duplicate.

??? example Details
    **Signature**
    
    `migrateMarkets(BinaryOptionMarketManager receivingManager, BinaryOptionMarket[] calldata marketsToMigrate)`
    
    **State Mutability**
    
    `external`
    
    **Modifiers**
    
    * [`onlyOwner`](Owned.md#onlyowner)
    
    **Emitted Events**
    
    * [`MarketsMigrated(receivingManager, marketsToMigrate)`](#marketsmigrated)

---

### `receiveMarkets`

This is called by a migrating manager once it has prepared its markets to be received to finalise the migration.
The value of deposits in the migrated markets will be added to the receiving manager's total.

The function reverts if the message sender is not the migrating manager,
which must previously [have been set](#setmigratingmanager), or if any provided market is already known to
the manager, or is a duplicate.

??? example "Details"
    **Signature**
    
    `receiveMarkets(BinaryOptionMarket[] calldata marketsToReceive)`
    
    **State Mutability**
    
    `external`
   
    **Emitted Events**
    
    * [`MarketsReceived(_migratingManager, marketsToReceive)`](#marketsreceived)

## Functions (Internal)

---

### `_addMarket`

Adds an address to the [`_markets`](#_markets) array and stores its index.
No check is made that the address is not already present.

??? example "Details"
    **Signature**
    `_addMarket(address market)`
    
    **State Mutability**
    `internal`
    
---

### `_removeMarket`

Removes an address from the [`_markets`](#_markets) array and deletes its stored index.
Note that the order of the array is not necessarily preserved when an element is removed.

This function does not check that the provided element actually exists in the array;
if it does not, the element at index zero will be deleted, or else the transaction will
revert if the array is empty.

??? example "Details"
    **Signature**
    `_removeMarket(address market)`
    
    **State Mutability**
    `internal`

## Events

---

### `MarketCreated`

A new market was created, and its initial parameters.

**Signature:** `MarketCreated(address market, address indexed creator, bytes32 indexed oracleKey, uint targetPrice, uint endOfBidding, uint maturity)`
   
--- 

### `MarketDestroyed`

An exiting market was destroyed, and which address destroyed it.
    
**Signature:** `MarketDestroyed(address market, address indexed destroyer)`

---

### `MarketsMigrated`
 
A set of markets was migrated to a certain receiving manager.
 
**Signature:** `MarketsMigrated(BinaryOptionMarketManager receivingManager, BinaryOptionMarket[] markets)`
    
---

### `MarketsReceived`

A set of markets was migrated from a certain migrating manager.

**Signature:** `MarketsReceived(BinaryOptionMarketManager migratingManager, BinaryOptionMarket[] markets)`

---

### `MarketCreationEnabledUpdated`

[Market creation](#marketcreationenabled) was enabled or disabled.

**Signature:** `MarketCreationEnabledUpdated(bool enabled)`
    
---
  
### `OracleMaturityWindowUpdated`

The [oracle maturity window](#durations) was updated.

**Signature:** `OracleMaturityWindowUpdated(uint duration)`
    
---

### `ExerciseDurationUpdated`

The [exercise duration](#durations) was updated

**Signature:** `ExerciseDurationUpdated(uint duration)`
    
---

### `CreatorDestructionDurationUpdated`

The [creator destruction duration](#durations) was updated.
 
**Signature:** `CreatorDestructionDurationUpdated(uint duration)`
    
---
    
### `MaxTimeToMaturityUpdated`

The [maximum time to maturity](#durations) was updated.

**Signature:** `MaxTimeToMaturityUpdated(uint duration)`
    
---

### `MinimumInitialLiquidityUpdated`
    
The [minimum initial liquidity](#minimuminitialliquidity) was updated.
    
**Signature:** `MinimumInitialLiquidityUpdated(uint value)`

---

### `PoolFeeUpdated`

The [pool fee](#fees) was updated.

**Signature:** `PoolFeeUpdated(uint fee)`

---
    
### `CreatorFeeUpdated`

The [creator fee](#fees) was updated.

**Signature:** `CreatorFeeUpdated(uint fee)`
    
---
    
### `RefundFeeUpdated`

The [refund fee](#fees) was updated.

**Signature:** `RefundFeeUpdated(uint fee)`
