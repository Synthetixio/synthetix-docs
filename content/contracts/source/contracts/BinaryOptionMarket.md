# BinaryOptionMarket

## Description

This contract manages a single binary option market, where users can speculate on the outcome of a future event
by buying options, each of which is an ERC20 token that pays out 1 sUSD if its corresponding outcome occurs.

Each binary option market has a specific underlying asset, and a strike price for that asset at a particular
maturity date. If the reported price of the asset is lower than the strike price at the maturity date, then
all the options on the short side of the market pay out 1 sUSD each, while if the price is higher than or equal
to the strike price, then the options on the long side pay out 1 sUSD each.

This contract was proposed as part of [SIP-53](https://sips.synthetix.io/sips/sip-53). Further information on the
mechanism and its motivation can be found in the SIP.

**Market Lifecycle**

A market goes through four major phases in its life. The phase a market is currently in
can be queried with the [`phase()`](#phase) function, and the time stamps at which it transitions
between these phases is held in the [`times`](#times) public variable.

**Market Creation**

A market can be created by anyone, as long as they can provide enough initial capital to [ensure
the market is liquid](#creatorlimits). Upon creation, markets will be
[tracked in the manager contract](BinaryOptionMarketManager.md#activemarkets)
until they are eventually resolved and destroyed.

Market creators are incentivised to make markets by the collection of [fees](#fees),
which they share with the fee pool. These fees are released at the resolution of the market;
it is in the creator's interest, in order to maximise the fees they collect, to set
market parameters that attract the maximum demand over the lifetime of the market.

Binary option markets are created by calls to the [`BinaryOptionMarketManager.createMarket`](BinaryOptionMarketManager.md#createmarket)
function: see the documentation for that function for more details.

**Bidding**

During the bidding phase, the total supply of options and option prices are established.
During this period, users can bid on the long or short side of the market and refund those bids.
The option prices are determined during this phase according to the computations outlined in the
[`_updatePrices`](#_updateprices) function; the price on one side of the market is effectively the
fraction of bids on that side relative to all bids.

| Relevant Functions                                               | Description                                                                                          |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [`bid`](#bid)                                                    | Places a bid.                                                                                        |
| [`refund`](#refund)                                              | Refunds an existing bid, minus a [fee](#fees).                                                       |
| [`bidsOf`](#bidsof) / [`totalBids`](#totalbids)                  | Queries current bid balances.                                                                        |
| [`claimableBy`](#claimableby) / [`totalClaimable`](#claimableby) | Queries the number of options that would be claimable if the market resolved at the current price.   |
| [`prices`](#prices)                                              | The current prices on the market.                                                                    |
| [`oracleDetails`](#oracledetails)                                | The basic parameters of the market, including the underlying asset, strike price, and maturity date. |
| [`pricesAfterBidOrRefund`](#pricesafterbidorrefund)              | Computes the resulting prices from placing a certain bid or refund.                                  |
| [`bidOrRefundForPrice`](#bidorrefundforprice)                    | Computes the size of bid or refund to achieve a particular price on market.                          |
| [`oraclePriceAndTimestamp`](#oraclepriceandtimestamp)            | The current underlying asset price, against which the strike price is compared, and when it was set. |

**Trading**

During the trading phase, bids and refunds are disabled and the final option prices are fixed, so options can be claimed and exchanged as ERC20 tokens.

| Relevant Functions                                               | Description                                                    |
| ---------------------------------------------------------------- | -------------------------------------------------------------- |
| [`claimableBy`](#claimableby) / [`totalClaimable`](#claimableby) | Queries the actual number of options a user can claim.         |
| [`claimOptions`](#claimoptions)                                  | Claims the options owed to a user.                             |
| [`balancesOf`](#balancesof) / [`totalSupplies`](#totalsupplies)  | Returns a user's actual option balances.                       |
| [`BinaryOption` ERC20 functions](BinaryOption.md)                | Users can freely transfer any claimed options as ERC20 tokens. |

**Maturity**

After the end of the trading period, the market's maturity condition is evaluated and options can be exercised
according to the result. The maturity condition is ultimately resolved depending on the result of the
[`oraclePriceAndTimestamp`](#oraclepriceandtimestamp) function.

| Relevant Functions                    | Description                                                                                                                                                                         |
| ------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`canResolve`](#canresolve)           | Indicates whether the market can be resolved yet.                                                                                                                                   |
| [`resolve`](#resolve)                 | Queries the current price of the underlying asset from the oracle, compares it against the strike price, saves the final result, and transfers fees to the market creator and pool. |
| [`resolved`](#resolved)               | True if the market has been resolved                                                                                                                                                |
| [`result`](#result)                   | Reports which side pays out, or which side would pay out if an unresolved market were resolved immediately.                                                                         |
| [`exerciseOptions`](#exerciseoptions) | Transfers the payout owed to a user from the options they hold.                                                                                                                     |

**Expiry**

After a period the market can be destroyed by a call to
[`BinaryOptionMarketManager.expireMarkets`](BinaryOptionMarketManager.md#expiremarkets), which
in turn calls [`BinaryOptionMarket.expire`](#expire).

| Relevant Functions                                                                      | Description                         |
| --------------------------------------------------------------------------------------- | ----------------------------------- |
| [`BinaryOptionMarketManager.expireMarkets`](BinaryOptionMarketManager.md#expiremarkets) | Destroys a set of markets.          |
| [`expire`](#expire)                                                                     | Expires this market, destroying it. |

**Enums**

**`Phase`**

The phases the market proceeds through.

| Value      | Description                                                                      |
| ---------- | -------------------------------------------------------------------------------- |
| `Bidding`  | Users can place and refund bids.                                                 |
| `Trading`  | Bidding is disabled, but options can be claimed and transferred as ERC20 tokens. |
| `Maturity` | The market has matured, and options can be exercised for a value of sUSD.        |
| `Expiry`   | The market is ready to be destroyed.                                             |

**`Side`**

The two sides of the market, each of which represents a particular event occurring.

| Value   | Description                                                                                      |
| ------- | ------------------------------------------------------------------------------------------------ |
| `Long`  | The event that the asset price is higher than or equal to the strike price at the maturity date. |
| `Short` | The event that the asset price is lower than the strike price at the maturity date.              |

??? example "Related Contracts"

    - [`BinaryOptionMarketFactory`](BinaryOptionMarketFactory.md): This factory contract instantiates `BinaryOptionMarket` instances.
    - [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md): The manager that tracks `BinaryOptionMarket` instances.
    - [`BinaryOption`](BinaryOption.md): Option token instances, which track bids and balances of participants in this market. Each market has two associated `BinaryOption` instances; one for long options and one for short options.
    - [`ExchangeRates`](ExchangeRates.md): The contract that a market's underlying asset's price is queried from.
    - [`SynthsUSD`](Synth.md): Binary option markets are denominated in sUSD.
    - [`FeePool`](FeePool.md): Fees are remitted to the fee address.

**Source:** [contracts/BinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L28)</sub>

The addresses of the two [`BinaryOption`](BinaryOption.md) instances
for options on each side of the market.

| Field   | Type                    | Description                                         |
| ------- | ----------------------- | --------------------------------------------------- |
| `long`  | `contract BinaryOption` | The address of the token contract for long options. |
| `short` | `contract BinaryOption` | The address of the token contract for long options. |

### `OracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L44)</sub>

Oracle-relevant details used at the resolution of the market.

| Field         | Type      | Description                                                                                                                                                         |
| ------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `key`         | `bytes32` | The key of the underlying asset of this market, as in the [`ExchangeRates`](ExchangeRates.md) contract.                                                             |
| `strikePrice` | `uint256` | The threshold price of the underlying asset. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number.                            |
| `finalPrice`  | `uint256` | The actual measured price of the underlying asset at the maturity date. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number. |

### `Prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L33)</sub>

The prices of the options on each side of the market.

| Field   | Type      | Description                                                                                                                     |
| ------- | --------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `long`  | `uint256` | The current price of long options. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number.  |
| `short` | `uint256` | The current price of short options. This is an [18-decimal](/contracts/source/libraries/SafeDecimalMath.md) fixed point number. |

### `Times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L38)</sub>

Timestamps of important dates, which are given as unix timestamps in seconds.

| Field        | Type      | Description                                                            |
| ------------ | --------- | ---------------------------------------------------------------------- |
| `biddingEnd` | `uint256` | The time at which the bidding phase transitions to the trading phase.  |
| `maturity`   | `uint256` | The time at which the trading phase transitions to the maturity phase. |
| `expiry`     | `uint256` | The time after which the market can be expired.                        |

## Variables

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L62)</sub>

The initial creator of the market, who contributed the initial capital and market parameters, and is entitled
to the creator fee.

**Type:** `address`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L57)</sub>

The limits that the market creator is constrained to abide by.

- `capitalRequirement`: the minimum capital that the market's [creator](#creator) must maintain in the market until the end of
  bidding. The market's initial bids must be at least this value, and the creator may not submit refunds that
  would reduce their open bids to a value less than this minimum.
- `skewLimit`: The creator's smaller bid must be greater than this as a percentage of their total bids.

**Type:** `struct BinaryOptionMarketManager.CreatorLimits`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L61)</sub>

The sum of open bids on both sides of the market, plus any sUSD witheld for refund fees.
We store this explicitly in case any tokens are transferred to this contract directly, as in that
case querying the contract's sUSD token balance would throw off several calculations.

**Type:** `uint256`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L56)</sub>

The [fee rates](#fees) charged in this market and the fees collected on behalf of the creator.

**Type:** `struct BinaryOptionMarketManager.Fees`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L52)</sub>

The [addresses](#options) of this market's `BinaryOption` instances.

**Type:** `struct BinaryOptionMarket.Options`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L55)</sub>

The [oracle parameters](#oracledetails) of this market, including the underlying asset and strike price.

**Type:** `struct BinaryOptionMarket.OracleDetails`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L53)</sub>

The long and short option [prices](#prices) of this market.

**Type:** `struct BinaryOptionMarket.Prices`

### `refundsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L64)</sub>

**Type:** `bool`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L63)</sub>

True if the market has been [resolved](#resolve), and false otherwise.

**Type:** `bool`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L54)</sub>

The [unix timestamps](#times) at which this market transitions between [phases](#phase).

**Type:** `struct BinaryOptionMarket.Times`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L79)</sub>

The constructor sets up all the static values for [fees](#fees), [timestamps](#times), [asset and strike price](#oracledetails) among other parameters.
The market's owner (the [manager](BinaryOptionMarketManager.md) contract), and [creator](#creator) are also set at this time.
The manager checks that all of these settings are within acceptable ranges, except for the creator limits, which are
[checked here](#_checkcreatorlimits).

In addition, the market's [`BinaryOption`](BinaryOption.md) instances for each side of the market are instantiated,
and their initial prices are computed from the initial bids.

Note that the market's known [`AddressResolver`](AddressResolver.md) address will be incorrect at first,
being initially set to the provided owner address, but this will be remedied after the first sync, which
is performed by the manager contract upon construction.

Initial timestamps should be provided in the order `[biddingEnd, maturity, destruction]`, initial bids as
`[longBid, shortBid]`, and fees as `[poolFee, creatorFee, refundFee]`.

??? example "Details"

    **Signature**

    `(address _owner, address _creator, uint256[2] _creatorLimits, bytes32 _oracleKey, uint256 _strikePrice, bool _refundsEnabled, uint256[3] _times, uint256[2] _bids, uint256[3] _fees)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Bid](#bid)

    * [Bid](#bid)

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L337)</sub>

Returns the [option balances](BinaryOption.md#balanceof) of the message sender on each side of the market.

??? example "Details"

    **Signature**

    `balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L266)</sub>

Produces the size of bid or refund necessary on a particular side of the market to move the price on one side
or the other to a desired level.

For example, to move the long price to $0.8$ by bidding on the long side, one would have to bid
`bidOrRefundForPrice(Side.Long, Side.Long, 0.8 * UNIT, false)`. On the other hand, to move the short price
to $0.6$ by refunding on the long side, one would need to refund `bidOrRefundForPrice(Side.Long, Side.Short, 0.6 * UNIT, true)`.

If the result would be negative, because the desired operation can only move the price in the opposite direction
from the target, the function returns 0.

??? info "Formula Derivation"

    For brevity, the following definitions will be used:

    $$
    \begin{equation}
       \begin{split}
       \psi &:= 1 - (\text{poolFee} + \text{creatorFee}) \\
       \xi  &:= 1 - \text{refundFee} \\
       D    &:= \text{deposited()} \\
       P_{this}, P_{that} &:= \text{prices()} \\
       Q_{this}, Q_{that} &:= \text{totalBids()} \\
       \end{split}
    \end{equation}
    $$

    The variables $\text{this}$ and $\text{that}$ refer to the opposite sides of the market. Since prices
    are symmetrical between the sides of the market, they can be interpreted in either order.

    If a bid with value $b$ is placed on $\text{this}$ side of the market, the resulting prices are as follows:

    $$
    \begin{equation}
       \begin{split}
       P_{this} & \leftarrow \frac{Q_{this} + b}{\psi (D + b)} \\
       P_{that} & \leftarrow \frac{Q_{that}}{\psi (D + b)}
       \end{split}
    \end{equation}
    $$

    The case of a refund of value $r$ must take the refund fee into account:

    $$
    \begin{equation}
       \begin{split}
       P_{this} &\leftarrow \frac{Q_{this} - r}{\psi (D - \xi r)} \\
       P_{that} &\leftarrow \frac{Q_{that}}{\psi (D - \xi r)}
       \end{split}
    \end{equation}
    $$

    So by bidding or refunding on $this$ side of the market, we alter the prices on both sides. Note that bids always
    increase prices on $this$ side and decrease prices on $that$ side, while refunds always decrease prices on $this$
    side and increase prices on $that$ side.

    **Same-Side Price Targeting**

    By changing our position on $this$ side of the market, we can change $P_{this}$ to a desired level $P^{*}_{this}$.
    If $P_{this} < P^{*}_{this}$, we must bid a value $b$ to increase the price, while if $P^{*}_{this} < P_{this}$,
    we must refund a value $r$ to decrease the price, as follows:

    $$
    \begin{equation}
       \begin{split}
       b &\leftarrow \frac{\psi D P_{this} - Q_{this}}{1 - \psi P_{this} } \\
       r &\leftarrow \frac{Q_{this} - \psi D P_{this}}{1 - \xi \psi P_{this}}
       \end{split}
    \end{equation}
    $$

    **Opposite-Side Price Targeting**

    Similarly, by changing our position on $this$ side, we can also change $P_{that}$ to a desired level $P^{*}_{that}$.
    The response of the market is the opposite to the same-side case, so if $P_{that} < P^{*}_{that}$, we must refund
    a value $r$ to increase the price, while if $P^{*}_{that} < P_{that}$, we must bid a value $b$ to decrease the
    price, as follows:

    $$
    \begin{equation}
       \begin{split}
       r &\leftarrow \frac{\psi D P_{that} - Q_{that}}{\xi \psi P_{that}} \\
       b &\leftarrow \frac{Q_{that} - \psi D P_{that}}{\psi P_{that}}
       \end{split}
    \end{equation}
    $$

    Note that all of these values can be negative if the desired price is in the wrong direction relative to the way
    it will move given the side of the market we're looking at and whether we're bidding or refunding. Since we
    cannot perform negative bids or refunds, the function returns 0 instead of throwing an exception or returning
    negative numbers.

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L309)</sub>

Returns the current [bids](BinaryOption.md#bidof) on each side of the market of the message sender.

??? example "Details"

    **Signature**

    `bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L191)</sub>

Returns true if the market can currently be resolved, which is the case when:

- The market has not already resolved.
- The [maturity date](#times) is in the past;
- The [oracle price](#oraclepriceandtimestamp) is [fresh](#_isfreshpriceupdatetime).

??? example "Details"

    **Signature**

    `canResolve() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L325)</sub>

Returns balance of options on each side of the market that [would be claimable](BinaryOption.md#claimableby)
by the message sender at the [current prices](#prices).

Note that this function still operates during bidding, and only reflects the actually-claimable quantities after the
market has transitioned to the [trading phase](#phase).

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L350)</sub>

Returns the [deposited sUSD](#deposited), accounting for any fees that should be remitted. This is the value
of options to be awarded to each side of the market.

??? example "Details"

    **Signature**

    `exercisableDeposits() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L182)</sub>

Returns the current price of this market's [underlying asset](#oracledetails) at the [`ExchangeRates`](ExchangeRates.md)
contract, along with the time it was updated.

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L163)</sub>

Returns the current [phase](#phase) the market is in.

??? example "Details"

    **Signature**

    `phase() returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L244)</sub>

Computes the resulting market prices if a given bid or refund is made. If a refund greater than or equal to the total
bids on that side of the market is requested, the transaction will revert. See [`bidOrRefundForPrice`](#bidOrRefundForPrice)
for details of this computation.

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireActiveAndUnpaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L405)</sub>

Reverts the transaction if the system is suspended, or the manager is paused. This is used by
[`BinaryOption`](BinaryOption.md) instances to pause transfers if either of these conditions is true.

??? example "Details"

    **Signature**

    `requireActiveAndUnpaused()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [_requireManagerNotPaused](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L407)

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L207)</sub>

If the market has not resolved, returns the side of the market that would pay out if it was resolved
at the current price.
Otherwise, if the market has resolved, the function returns the value that the market resolved to when
[`resolve()`](#resolve) was successfully called.

Note that no check is performed that the underlying asset price [is fresh](#_isfreshpriceupdatetime).

??? example "Details"

    **Signature**

    `result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `senderPriceAndExercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L226)</sub>

Used by this market's [`BinaryOption` instances](#options) to retrieve their own prices and the number
of exercisable deposits available, which are used when computing claimable balances.
If called by the long option, this function returns the long price; if by the short option, the short price;
if it is called by any other address, the transaction is reverted.

??? example "Details"

    **Signature**

    `senderPriceAndExercisableDeposits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L317)</sub>

Returns the [total value of bids](BinaryOption.md#totalbids) on each side of the market.

??? example "Details"

    **Signature**

    `totalBids() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L329)</sub>

Returns the [total balance of options claimable](BinaryOption.md#totalclaimablesupply)
from the [current total of bids](BinaryOption.md#totalbids) on each side of the market.

Note that due to rounding, this may not predict exactly the quantities which will actually claimed in the end.
Like [`claimableBy`](#claimableby), this function still operates during the [bidding phase](#phase),
but will not attain its correct value until bidding has ended.

??? example "Details"

    **Signature**

    `totalClaimableSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L341)</sub>

Returns the [total supply of options](BinaryOption.md#totalsupply) on each side of the market.

??? example "Details"

    **Signature**

    `totalSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `cancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L584)</sub>

??? example "Details"

    **Signature**

    `cancel(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not cancellable)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L588)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [duringBidding](#duringbidding)

### `expire`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L592)</sub>

This function allows the manager to destroy this market at the end of its life.
The value of any expired but unexercised options is sent to the caller.
The market will also destroy its child [`BinaryOption`](BinaryOption.md#expire) instances before it destroys itself.

The function will revert if the market is not [resolved](#resolved), or if there are options remaining and
the market is not yet past its expiry date. This means that a market can be expired early if all its
in-the-money options have been exercised.

??? example "Details"

    **Signature**

    `expire(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Unexpired options remaining)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L593)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `resolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L470)</sub>

This function allows anyone to resolve the market, as long as it satisfies the conditions
of [`canResolve()`](#canresolve).

Market resolution requires fetching the latest price of this market's underlying asset, checking
that it was last updated [recently enough](#_isfreshpriceupdatetime), and then computing and saving
the fees that were collected. After a successful invocation, the variable [`resolved`](#resolved)
will be true. The final oracle price is saved and can be queried from
[`oracleDetails.finalPrice`](#oracledetails).

This function reverts the transaction if the system is suspended or the manager contract is paused.

??? example "Details"

    **Signature**

    `resolve()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Market already resolved)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L471)

    * [require(..., Price is stale)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L476)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [afterMaturity](#aftermaturity)

    * [systemActive](#systemactive)

    * [managerNotPaused](#managernotpaused)

    **Emits**

    * [MarketResolved](#marketresolved)

## Internal Functions

### `_balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L333)</sub>

See [`balancesOf`](#balancesof).

??? example "Details"

    **Signature**

    `_balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_biddingEnded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L151)</sub>

True if the current time is after the [bidding end time](#times).

??? example "Details"

    **Signature**

    `_biddingEnded() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L305)</sub>

See [`bidsOf`](#bidsof).

??? example "Details"

    **Signature**

    `_bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_checkCreatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L379)</sub>

Reverts if the provided bids would violate the [creator limits](#creatorlimits).

??? example "Details"

    **Signature**

    `_checkCreatorLimits(uint256 longBid, uint256 shortBid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Insufficient capital)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L381)

    * [require(..., Bids too skewed)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L383)

### `_chooseSide`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L356)</sub>

Selects between a long and a short value depending on its first input.

??? example "Details"

    **Signature**

    `_chooseSide(enum IBinaryOptionMarket.Side side, uint256 longValue, uint256 shortValue) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L498)</sub>

See [`claimOptions`](#claimoptions).

??? example "Details"

    **Signature**

    `_claimOptions() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Nothing to claim)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L519)

    **Modifiers**

    * [systemActive](#systemactive)

    * [managerNotPaused](#managernotpaused)

    * [afterBidding](#afterbidding)

    **Emits**

    * [OptionsClaimed](#optionsclaimed)

### `_claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L321)</sub>

See [`claimableBalancesOf`](#claimablebalancesof).

??? example "Details"

    **Signature**

    `_claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_computePrices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L213)</sub>

Computes the market prices from the long and short bid totals, and the funds deposited in the contract.
These prices are computed approximately as follows:

    longPrice  = longBids  / (feeMultiplier * deposited)
    shortPrice = shortBids / (feeMultiplier * deposited)

Interpreting [`/`](/contracts/source/libraries/SafeDecimalMath.md#dividedecimalround) and [`*`](/contracts/source/libraries/SafeDecimalMath.md#multiplydecimalround)
as [fixed point math operators (with rounding)](/contracts/source/libraries/SafeDecimalMath.md).

Note that the denominator `_feeMultiplier * deposited` is the total value of options awarded to each side of the market,
and `deposited` is equal to `longBids + shortBids + refundFeesCollected`.

If either the long or short bids are zero, then the transaction is reverted, as
this would lead to a zero price, and hence divisions-by-zero when computing claimable option
quantities. This means that the initial bids cannot both be zero, nor can the entire balance
on either side of the market be refunded.

??? example "Details"

    **Signature**

    `_computePrices(uint256 longBids, uint256 shortBids, uint256 _deposited) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Bids must be nonzero)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L218)

### `_decrementDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L395)</sub>

Deducts a value from the tracked deposited quantity, and ensures that it is also deducted [in the manager contract](BinaryOptionMarketManager.md#decrementtotaldeposited).

??? example "Details"

    **Signature**

    `_decrementDeposited(uint256 value) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L133)</sub>

Returns the [cached](MixinResolver.md) address of the [`ExchangeRates`](ExchangeRates.md) instance.

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L345)</sub>

See [`exercisableDeposits`](#exercisabledeposits).

??? example "Details"

    **Signature**

    `_exercisableDeposits(uint256 _deposited) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_expired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L159)</sub>

True if the market is [resolved](#resolved), and either the [expiry date](#times) is in the past, or there is no
more sUSD [`deposited`](#deposited) in the market.

??? example "Details"

    **Signature**

    `_expired() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L141)</sub>

Retrieves the [cached](MixinResolver.md) address of the [`FeePool`](FeePool.md) instance.

??? example "Details"

    **Signature**

    `_feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_incrementDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L389)</sub>

Adds a value to the tracked deposited quantity, and ensures that it is also added [in the manager contract](BinaryOptionMarketManager.md#decrementtotaldeposited).

??? example "Details"

    **Signature**

    `_incrementDeposited(uint256 value) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_isFreshPriceUpdateTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L186)</sub>

True if a given timestamp is younger than the [maximum oracle price age](BinaryOptionMarketManager.md#durations),
false otherwise; fresh prices are acceptable for [resolving the market](#resolve).

??? example "Details"

    **Signature**

    `_isFreshPriceUpdateTime(uint256 timestamp) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L145)</sub>

Returns the address of the [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md) which tracks this market.
Note that this address is also this contract's [owner](Owned.md#owner).

??? example "Details"

    **Signature**

    `_manager() returns (contract BinaryOptionMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_matured`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L155)</sub>

True if the [maturity date](#times) is in the past, and false otherwise.

??? example "Details"

    **Signature**

    `_matured() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_option`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L367)</sub>

Returns the appropriate [option contract address](#options) for a given side of the market.

??? example "Details"

    **Signature**

    `_option(enum IBinaryOptionMarket.Side side) returns (contract BinaryOption)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L178)</sub>

See [`oraclePriceAndTimestamp`](#oraclepriceandtimestamp).

??? example "Details"

    **Signature**

    `_oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_requireManagerNotPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L401)</sub>

Reverts the transaction if the [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md) is paused.

??? example "Details"

    **Signature**

    `_requireManagerNotPaused()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., This action cannot be performed while the contract is paused)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L402)

### `_result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L196)</sub>

See [`result`](#result).

??? example "Details"

    **Signature**

    `_result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L137)</sub>

Retrieves the [cached](MixinResolver.md) address of the sUSD [`Synth`](Synth.md) instance.

??? example "Details"

    **Signature**

    `_sUSD() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_selfDestruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L564)</sub>

??? example "Details"

    **Signature**

    `_selfDestruct(address payable beneficiary)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_subToZero`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L375)</sub>

Returns the difference of two numbers, or zero if the difference is negative.

??? example "Details"

    **Signature**

    `_subToZero(uint256 a, uint256 b) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L129)</sub>

Retrieves the [cached](MixinResolver.md) address of the [`SystemStatus`](SystemStatus.md) contract.

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L313)</sub>

See [`totalBids`](#totalbids).

??? example "Details"

    **Signature**

    `_totalBids() returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updatePrices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L414)</sub>

Updates the current [prices](#prices) from the long and short bid quantities, and the total deposited
value in the contract. See [`_computePrices`](#_computeprices) for details.

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L424)</sub>

Allows a user to place an sUSD bid on one or the other side of the market.

To process a bid, the market increments the user's [bid balance](#bidsof) on the appropriate option contract,
as well as incrementing the total value deposited both [in this market](#deposited) and in the
[manager contract](BinaryOptionMarketManager.md#totaldeposited). The deposit quantities having been updated,
the option prices are [recomputed](#_updateprices) to reflect the changed odds.

The value of the bid is withdrawn from the message sender's sUSD balance by a call to
`ERC20.transferFrom`, so the caller must have ensured that
they have granted the market sufficient approval and that they have enough
sUSD to support the bid.

The transaction reverts if this function is called outside the bidding period, if the system is suspended,
or if the manager contract is paused.

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L524)</sub>

Once the bidding period has concluded, this function claims all options [owing](#claimablebalancesof) to the message
sender on both sides of the market. The number of options owed is simply the user's [bid balances](#bidsof), divided
by the [current option prices](#prices). The caller's bid balances are set to zero, while the appropriate number
of options are credited to their wallet.

This function reverts the transaction if the system is suspended or the manager contract is paused.

Implemented by the [`_claimOptions`](#_claimoptions) function.

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L528)</sub>

`exerciseOptions` allows a user to claim any sUSD owed to them after their options have matured.
This function will exercise any options held by the message sender on either side of the market,
zeroing out their option balances. If the caller holds $n$ options on the winning side of the market,
they will be transferred $n$ sUSD. Any options held on the losing side of the market will yield no
payout. Upon exercising options, the quantity of sUSD paid to the called will be deducted from
the tracked totals [here](#deposited), and in the [manager contract](BinaryOptionMarketManager.md#totaldeposited).

If the market is unresolved at call time, it will be resolved if it can be. If the caller
has unclaimed options, they will be claimed before they are exercised.

This function reverts the transaction if the system is suspended or the manager contract is paused.

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Nothing to exercise)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L542)

    **Emits**

    * [OptionsExercised](#optionsexercised)

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L439)</sub>

Refunds an existing bid, remitting the refund value minus a percentage determined by the [refund fee rate](#fees) as sUSD.
The function returns the value refunded as sUSD.

The full value of the refund is deducted from the caller's bids, while this value minus the refund fee
is actually remitted as sUSD. The deposited quantity in [the market](#deposited)
and in the [manager contract](BinaryOptionMarketManager.md#totaldeposited) are decremented by the transferred
value. The deposit quantities having been updated, the option prices are [recomputed](#_updateprices) to reflect the
changed odds.

The refund fee, which will eventually be paid out to option-holders, is retained in the pot,
although not on either side's bid total. As such, refunds discount option
prices for all those remaining in the market.

If the message sender is the market's [creator](#creator), then a refund transaction will revert
if it would either violate the [capital requirement](#capitalrequirement), or if
it would refund their entire position on either side of the market.

The transaction reverts if this function is called outside the bidding period, if the system is suspended,
or if the manager contract is paused.

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Refunds disabled)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L440)

    **Modifiers**

    * [duringBidding](#duringbidding)

    **Emits**

    * [Refund](#refund)

## Modifiers

### `afterBidding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L604)</sub>

Reverts the transaction if bidding has not concluded.

### `afterMaturity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L609)</sub>

Reverts the transaction if the market has not matured.

### `duringBidding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L599)</sub>

Reverts the transaction if bidding has ended.

### `managerNotPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L619)</sub>

Reverts the transaction if the manager is not paused.

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L614)</sub>

Reverts the transaction if the [system is suspended](SystemStatus.md).

## Events

### `Bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L626)</sub>

A bid was made.

**Signature**: `Bid(enum IBinaryOptionMarket.Side side, address account, uint256 value)`

### `MarketResolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L629)</sub>

The market was resolved.

**Signature**: `MarketResolved(enum IBinaryOptionMarket.Side result, uint256 oraclePrice, uint256 oracleTimestamp, uint256 deposited, uint256 poolFees, uint256 creatorFees)`

### `OptionsClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L637)</sub>

The market was resolved.

**Signature**: `OptionsClaimed(address account, uint256 longOptions, uint256 shortOptions)`

### `OptionsExercised`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L638)</sub>

A quantity of options was exercised.

**Signature**: `OptionsExercised(address account, uint256 value)`

### `PricesUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L628)</sub>

The option prices were updated.

**Signature**: `PricesUpdated(uint256 longPrice, uint256 shortPrice)`

### `Refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/BinaryOptionMarket.sol#L627)</sub>

A refund was processed. The `value` argument is the quantity of sUSD actually refunded, without the fee.

**Signature**: `Refund(enum IBinaryOptionMarket.Side side, address account, uint256 value, uint256 fee)`
