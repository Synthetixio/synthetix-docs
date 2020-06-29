# BinaryOptionMarket

## Description

**Source:** [contracts/BinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    BinaryOptionMarket[BinaryOptionMarket] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Structs

### `Options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L27)</sub>

| Field   | Type                    | Description |
| ------- | ----------------------- | ----------- |
| `long`  | `contract BinaryOption` | TBA         |
| `short` | `contract BinaryOption` | TBA         |

### `OracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L43)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `key`         | `bytes32` | TBA         |
| `strikePrice` | `uint256` | TBA         |
| `finalPrice`  | `uint256` | TBA         |

### `Prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L32)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

### `Times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L37)</sub>

| Field        | Type      | Description |
| ------------ | --------- | ----------- |
| `biddingEnd` | `uint256` | TBA         |
| `maturity`   | `uint256` | TBA         |
| `expiry`     | `uint256` | TBA         |

## Variables

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L61)</sub>

**Type:** `address`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L56)</sub>

**Type:** `struct BinaryOptionMarketManager.CreatorLimits`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L60)</sub>

**Type:** `uint256`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L55)</sub>

**Type:** `struct BinaryOptionMarketManager.Fees`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L51)</sub>

**Type:** `struct BinaryOptionMarket.Options`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L54)</sub>

**Type:** `struct BinaryOptionMarket.OracleDetails`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L52)</sub>

**Type:** `struct BinaryOptionMarket.Prices`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L62)</sub>

**Type:** `bool`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L53)</sub>

**Type:** `struct BinaryOptionMarket.Times`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L77)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _creator, uint256[2] _creatorLimits, bytes32 _oracleKey, uint256 _strikePrice, uint256[3] _times, uint256[2] _bids, uint256[3] _fees)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L323)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L252)</sub>

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L295)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L184)</sub>

??? example "Details"

    **Signature**

    `canResolve() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L311)</sub>

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L336)</sub>

??? example "Details"

    **Signature**

    `exercisableDeposits() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L175)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L156)</sub>

??? example "Details"

    **Signature**

    `phase() returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L230)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireActiveAndUnpaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L391)</sub>

??? example "Details"

    **Signature**

    `requireActiveAndUnpaused()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_requireManagerNotPaused](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L393)

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L200)</sub>

??? example "Details"

    **Signature**

    `result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `senderPriceAndExercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L219)</sub>

??? example "Details"

    **Signature**

    `senderPriceAndExercisableDeposits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L303)</sub>

??? example "Details"

    **Signature**

    `totalBids() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L315)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L327)</sub>

??? example "Details"

    **Signature**

    `totalSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `expire`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L539)</sub>

??? example "Details"

    **Signature**

    `expire(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Unexpired options remaining)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L540)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `resolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L455)</sub>

??? example "Details"

    **Signature**

    `resolve()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Market already resolved)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L456)

    * [require(..., Price is stale)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L461)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [afterMaturity](#aftermaturity)

    * [systemActive](#systemactive)

    * [managerNotPaused](#managernotpaused)

    **Emits**

    * [MarketResolved](#marketresolved)

## Internal Functions

### `_balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L319)</sub>

??? example "Details"

    **Signature**

    `_balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_biddingEnded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L144)</sub>

??? example "Details"

    **Signature**

    `_biddingEnded() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L291)</sub>

??? example "Details"

    **Signature**

    `_bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_checkCreatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L365)</sub>

??? example "Details"

    **Signature**

    `_checkCreatorLimits(uint256 longBid, uint256 shortBid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Insufficient capital)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L367)

    * [require(..., Bids too skewed)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L369)

### `_chooseSide`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L342)</sub>

??? example "Details"

    **Signature**

    `_chooseSide(enum IBinaryOptionMarket.Side side, uint256 longValue, uint256 shortValue) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L483)</sub>

??? example "Details"

    **Signature**

    `_claimOptions() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Nothing to claim)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L494)

    **Modifiers**

    * [systemActive](#systemactive)

    * [managerNotPaused](#managernotpaused)

    * [afterBidding](#afterbidding)

    **Emits**

    * [OptionsClaimed](#optionsclaimed)

### `_claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L307)</sub>

??? example "Details"

    **Signature**

    `_claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_computePrices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L206)</sub>

??? example "Details"

    **Signature**

    `_computePrices(uint256 longBids, uint256 shortBids, uint256 _deposited) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Bids must be nonzero)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L211)

### `_decrementDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L381)</sub>

??? example "Details"

    **Signature**

    `_decrementDeposited(uint256 value) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L126)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L331)</sub>

??? example "Details"

    **Signature**

    `_exercisableDeposits(uint256 _deposited) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_expired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L152)</sub>

??? example "Details"

    **Signature**

    `_expired() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L134)</sub>

??? example "Details"

    **Signature**

    `_feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_incrementDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L375)</sub>

??? example "Details"

    **Signature**

    `_incrementDeposited(uint256 value) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_isFreshPriceUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L179)</sub>

??? example "Details"

    **Signature**

    `_isFreshPriceUpdateTime(uint256 timestamp) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L138)</sub>

??? example "Details"

    **Signature**

    `_manager() returns (contract BinaryOptionMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_matured`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_matured() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_option`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L353)</sub>

??? example "Details"

    **Signature**

    `_option(enum IBinaryOptionMarket.Side side) returns (contract BinaryOption)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L171)</sub>

??? example "Details"

    **Signature**

    `_oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_requireManagerNotPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L387)</sub>

??? example "Details"

    **Signature**

    `_requireManagerNotPaused()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., This action cannot be performed while the contract is paused)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L388)

### `_result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L189)</sub>

??? example "Details"

    **Signature**

    `_result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L130)</sub>

??? example "Details"

    **Signature**

    `_sUSD() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_subToZero`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L361)</sub>

??? example "Details"

    **Signature**

    `_subToZero(uint256 a, uint256 b) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L122)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L299)</sub>

??? example "Details"

    **Signature**

    `_totalBids() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updatePrices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L400)</sub>

??? example "Details"

    **Signature**

    `_updatePrices(uint256 longBids, uint256 shortBids, uint256 _deposited)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [PricesUpdated](#pricesupdated)

## External Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L410)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [duringBidding](#duringbidding)

    **Emits**

    * [Bid](#bid)

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L499)</sub>

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L503)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Nothing to exercise)](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L517)

    **Emits**

    * [OptionsExercised](#optionsexercised)

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L425)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [duringBidding](#duringbidding)

    **Emits**

    * [Refund](#refund)

## Modifiers

### `afterBidding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L569)</sub>

### `afterMaturity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L574)</sub>

### `duringBidding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L564)</sub>

### `managerNotPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L584)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L579)</sub>

## Events

### `Bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L591)</sub>

**Signature**: `Bid(enum IBinaryOptionMarket.Side side, address account, uint256 value)`

### `MarketResolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L594)</sub>

**Signature**: `MarketResolved(enum IBinaryOptionMarket.Side result, uint256 oraclePrice, uint256 oracleTimestamp, uint256 deposited, uint256 poolFees, uint256 creatorFees)`

### `OptionsClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L602)</sub>

**Signature**: `OptionsClaimed(address account, uint256 longOptions, uint256 shortOptions)`

### `OptionsExercised`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L603)</sub>

**Signature**: `OptionsExercised(address account, uint256 value)`

### `PricesUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L593)</sub>

**Signature**: `PricesUpdated(uint256 longPrice, uint256 shortPrice)`

### `Refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3-beta/contracts/BinaryOptionMarket.sol#L592)</sub>

**Signature**: `Refund(enum IBinaryOptionMarket.Side side, address account, uint256 value, uint256 fee)`
