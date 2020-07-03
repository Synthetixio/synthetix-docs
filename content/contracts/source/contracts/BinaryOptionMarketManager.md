# BinaryOptionMarketManager

## Description

**Source:** [contracts/BinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [AddressListLib](/contracts/source/libraries/AddressListLib) for `AddressListLib.AddressList`

### Inheritance Graph

```mermaid
graph TD
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> Pausable[Pausable]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> SelfDestructible[SelfDestructible]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Structs

### `CreatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L43)</sub>

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `capitalRequirement` | `uint256` | TBA         |
| `skewLimit`          | `uint256` | TBA         |

### `Durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L37)</sub>

| Field               | Type      | Description |
| ------------------- | --------- | ----------- |
| `maxOraclePriceAge` | `uint256` | TBA         |
| `expiryDuration`    | `uint256` | TBA         |
| `maxTimeToMaturity` | `uint256` | TBA         |

### `Fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L31)</sub>

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `poolFee`    | `uint256` | TBA         |
| `creatorFee` | `uint256` | TBA         |
| `refundFee`  | `uint256` | TBA         |

## Variables

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L52)</sub>

**Type:** `struct BinaryOptionMarketManager.CreatorLimits`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L51)</sub>

**Type:** `struct BinaryOptionMarketManager.Durations`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L50)</sub>

**Type:** `struct BinaryOptionMarketManager.Fees`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L54)</sub>

**Type:** `bool`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L55)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L78)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver, uint256 _maxOraclePriceAge, uint256 _expiryDuration, uint256 _maxTimeToMaturity, uint256 _creatorCapitalRequirement, uint256 _creatorSkewLimit, uint256 _poolFee, uint256 _creatorFee, uint256 _refundFee)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [setCreatorCapitalRequirement](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L95)

## Views

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L136)</sub>

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L144)</sub>

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L132)</sub>

??? example "Details"

    **Signature**

    `numActiveMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L140)</sub>

??? example "Details"

    **Signature**

    `numMaturedMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `decrementTotalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L229)</sub>

??? example "Details"

    **Signature**

    `decrementTotalDeposited(uint256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyKnownMarkets](#onlyknownmarkets)

    * [notPaused](#notpaused)

### `incrementTotalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L224)</sub>

??? example "Details"

    **Signature**

    `incrementTotalDeposited(uint256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyActiveMarkets](#onlyactivemarkets)

    * [notPaused](#notpaused)

### `migrateMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L331)</sub>

??? example "Details"

    **Signature**

    `migrateMarkets(contract BinaryOptionMarketManager receivingManager, bool active, contract BinaryOptionMarket[] marketsToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketsMigrated](#marketsmigrated)

### `setCreatorCapitalRequirement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L211)</sub>

??? example "Details"

    **Signature**

    `setCreatorCapitalRequirement(uint256 _creatorCapitalRequirement)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorCapitalRequirementUpdated](#creatorcapitalrequirementupdated)

### `setCreatorFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L197)</sub>

??? example "Details"

    **Signature**

    `setCreatorFee(uint256 _creatorFee)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Total fee must be less than 100%.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L199)

    * [require(..., Total fee must be nonzero.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L200)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorFeeUpdated](#creatorfeeupdated)

### `setCreatorSkewLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L216)</sub>

??? example "Details"

    **Signature**

    `setCreatorSkewLimit(uint256 _creatorSkewLimit)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Creator skew limit must be no greater than 1.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L217)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CreatorSkewLimitUpdated](#creatorskewlimitupdated)

### `setExpiryDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L179)</sub>

??? example "Details"

    **Signature**

    `setExpiryDuration(uint256 _expiryDuration)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ExpiryDurationUpdated](#expirydurationupdated)

### `setMarketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L320)</sub>

??? example "Details"

    **Signature**

    `setMarketCreationEnabled(bool enabled)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxOraclePriceAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L174)</sub>

??? example "Details"

    **Signature**

    `setMaxOraclePriceAge(uint256 _maxOraclePriceAge)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxOraclePriceAgeUpdated](#maxoraclepriceageupdated)

### `setMaxTimeToMaturity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L184)</sub>

??? example "Details"

    **Signature**

    `setMaxTimeToMaturity(uint256 _maxTimeToMaturity)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxTimeToMaturityUpdated](#maxtimetomaturityupdated)

### `setMigratingManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L327)</sub>

??? example "Details"

    **Signature**

    `setMigratingManager(contract BinaryOptionMarketManager manager)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setPoolFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L189)</sub>

??? example "Details"

    **Signature**

    `setPoolFee(uint256 _poolFee)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Total fee must be less than 100%.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L191)

    * [require(..., Total fee must be nonzero.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L192)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PoolFeeUpdated](#poolfeeupdated)

### `setRefundFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L205)</sub>

??? example "Details"

    **Signature**

    `setRefundFee(uint256 _refundFee)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Refund fee must be no greater than 100%.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L206)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RefundFeeUpdated](#refundfeeupdated)

### `setResolverAndSyncCacheOnMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L311)</sub>

??? example "Details"

    **Signature**

    `setResolverAndSyncCacheOnMarkets(contract AddressResolver _resolver, contract BinaryOptionMarket[] marketsToSync)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L115)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_factory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L119)</sub>

??? example "Details"

    **Signature**

    `_factory() returns (contract BinaryOptionMarketFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isKnownMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_isKnownMarket(address candidate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isValidKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_isValidKey(bytes32 oracleKey) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L111)</sub>

??? example "Details"

    **Signature**

    `_sUSD() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L107)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L239)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Market creation is disabled)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L252)

    * [require(..., Invalid key)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L253)

    * [require(..., Maturity too far in the future)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L256)

    * [require(..., End of bidding has passed)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L260)

    * [require(..., Maturity predates end of bidding)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L261)

    **Modifiers**

    * [notPaused](#notpaused)

    **Emits**

    * [MarketCreated](#marketcreated)

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L294)</sub>

??? example "Details"

    **Signature**

    `expireMarkets(address[] markets)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [notPaused](#notpaused)

### `receiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L362)</sub>

??? example "Details"

    **Signature**

    `receiveMarkets(bool active, contract BinaryOptionMarket[] marketsToReceive)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Only permitted for migrating manager.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L363)

    **Emits**

    * [MarketsReceived](#marketsreceived)

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L287)</sub>

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not an active market)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L288)

## Modifiers

### `onlyActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L387)</sub>

### `onlyKnownMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L392)</sub>

## Events

### `CreatorCapitalRequirementUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L416)</sub>

**Signature**: `CreatorCapitalRequirementUpdated(uint256 value)`

### `CreatorFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L419)</sub>

**Signature**: `CreatorFeeUpdated(uint256 fee)`

### `CreatorSkewLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L417)</sub>

**Signature**: `CreatorSkewLimitUpdated(uint256 value)`

### `ExerciseDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L413)</sub>

**Signature**: `ExerciseDurationUpdated(uint256 duration)`

### `ExpiryDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L414)</sub>

**Signature**: `ExpiryDurationUpdated(uint256 duration)`

### `MarketCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L399)</sub>

**Signature**: `MarketCreated(address market, address creator, bytes32 oracleKey, uint256 strikePrice, uint256 biddingEndDate, uint256 maturityDate, uint256 expiryDate)`

### `MarketCreationEnabledUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L411)</sub>

**Signature**: `MarketCreationEnabledUpdated(bool enabled)`

### `MarketExpired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L408)</sub>

**Signature**: `MarketExpired(address market)`

### `MarketsMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L409)</sub>

**Signature**: `MarketsMigrated(contract BinaryOptionMarketManager receivingManager, contract BinaryOptionMarket[] markets)`

### `MarketsReceived`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L410)</sub>

**Signature**: `MarketsReceived(contract BinaryOptionMarketManager migratingManager, contract BinaryOptionMarket[] markets)`

### `MaxOraclePriceAgeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L412)</sub>

**Signature**: `MaxOraclePriceAgeUpdated(uint256 duration)`

### `MaxTimeToMaturityUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L415)</sub>

**Signature**: `MaxTimeToMaturityUpdated(uint256 duration)`

### `PoolFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L418)</sub>

**Signature**: `PoolFeeUpdated(uint256 fee)`

### `RefundFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketManager.sol#L420)</sub>

**Signature**: `RefundFeeUpdated(uint256 fee)`
