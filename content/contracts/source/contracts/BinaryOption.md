# BinaryOption

## Description

The BinaryOption contract provides ERC20 token functionality for the
options in a [BinaryOptionMarket](BinaryOptionMarket.md). One `BinaryOption`
instance is created for each of the long and short sides of the market.
Once claimed, binary options can be transferred around like
any other ERC20 token until they are exercised from their parent market.

This contract tracks the value on a particular side of the market throughout
the entire lifecycle, handling both bid and option balances, and the basic operations of
converting between them. Whenever a bid is made or refunded, or an option
claimed or exercised, the values in this contract are updated by the market.

**Source:** [contracts/BinaryOption.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Related Contracts

    graph TD
        BinaryOption[BinaryOption] --> BinaryOptionMarket[BinaryOptionMarket]

??? example "Details"

    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The parent contract of this binary option token.

## Constants

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L23)</sub>

The ERC20 number of decimals of this token.

**Type:** `uint8`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L21)</sub>

The ERC20 name of this token.

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L22)</sub>

The ERC20 symbol of this token.

**Type:** `string`

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L34)</sub>

The ERC20 allowances of this option. `allowance[owner][spender]` is the value of options `spender` is approved to transfer on behalf of `owner`.

**Type:** `mapping(address => mapping(address => uint256))`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L30)</sub>

The ERC20 balance of this option for each account.

**Type:** `mapping(address => uint256)`

### `bidOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L27)</sub>

The current bid on this option made by each address.

**Type:** `mapping(address => uint256)`

### `market`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L25)</sub>

The parent market of this option.

**Type:** `contract BinaryOptionMarket`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L28)</sub>

The total value of bids made by all addresses.

**Type:** `uint256`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L31)</sub>

The ERC20 total supply of this option.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L38)</sub>

The constructor initialises the parent market address and sets the initial bid by the creator of the parent market
on this option.

??? example "Details"

    **Signature**

    `(address initialBidder, uint256 initialBid)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `claimableBy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L50)</sub>

Returns the quantity of options claimable by an account at the current price.

??? example "Details"

    **Signature**

    `claimableBy(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L58)</sub>

Returns the total supply of options claimable by all bidders.

??? example "Details"

    **Signature**

    `totalClaimable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalExercisable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L62)</sub>

Returns the total supply of options that could potentially be exercised, including unclaimed options.

??? example "Details"

    **Signature**

    `totalExercisable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L69)</sub>

Allows the parent market to increase the bid for a particular address.

??? example "Details"

    **Signature**

    `bid(address bidder, uint256 newBid)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

### `claim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L82)</sub>

Allows the market to converts the entire claimable quantity for a given account into options.
On invocation, the bid is set to zero, while [`claimableBy(account)`](#claimableby) tokens are issued into the account.
The `Issued` event emitted is accompanied by a `Transfer` event from the zero address.

??? example "Details"

    **Signature**

    `claim(address claimant)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

    **Emits**

    * [Transfer](#transfer)

    * [Issued](#issued)

### `exercise`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L102)</sub>

Allows the market to burn the entire token balance in a given account.
The `Burned` event emitted is accompanied by a `Transfer` event to the zero address.

??? example "Details"

    **Signature**

    `exercise(address claimant)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

    **Emits**

    * [Transfer](#transfer)

    * [Burned](#burned)

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L75)</sub>

Allows the parent market to decrease the bid for a particular address.
The transaction is reverted if the desired refund exceeds the current bid of the account.

??? example "Details"

    **Signature**

    `refund(address bidder, uint256 newRefund)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

### `selfDestruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L118)</sub>

Allows the market to destroy this option contract.

??? example "Details"

    **Signature**

    `selfDestruct(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

## Internal Functions

### `_claimableBy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L46)</sub>

See [`claimableBy`](#claimableby).

??? example "Details"

    **Signature**

    `_claimableBy(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L54)</sub>

See [`totalClaimable`](#totalclaimable).

??? example "Details"

    **Signature**

    `_totalClaimable()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L127)</sub>

Implements the internal behaviour of the [`transfer`](#transfer) and [`transferFrom`](#transferfrom) functions.
Reverts if either sender or recipient is the zero account, or if the balance in the sending account is insufficient.

??? example "Details"

    **Signature**

    `_transfer(address _from, address _to, uint256 _value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid address)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L128)

    * [require(..., Insufficient balance)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L131)

    **Emits**

    * [Transfer](#transfer)

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L152)</sub>

Allows an account to approve another account to transfer tokens on its behalf.
Reverts if the designated spender is the zero account.

??? example "Details"

    **Signature**

    `approve(address _spender, uint256 _value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., )](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L153)

    **Emits**

    * [Approval](#approval)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L140)</sub>

Transfers a quantity of options between accounts.
Reverts if the balance in the sending account is insufficient, or if the destination address is the zero address.
Implemented internally by the [`_transfer`](#_transfer) function.

??? example "Details"

    **Signature**

    `transfer(address _to, uint256 _value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L144)</sub>

Allows an account to transfer a quantity of options on behalf of another account.
Reverts if the either the balance or sender approval is insufficient, or if either the destination or
sending addresses is the zero address.
Implemented internally by the [`_transfer`](#_transfer) function.

??? example "Details"

    **Signature**

    `transferFrom(address _from, address _to, uint256 _value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Insufficient allowance)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L146)

## Modifiers

### `onlyMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L161)</sub>

Reverts the transaction if the message sender is not the [market](#market).

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L171)</sub>

A spending account was approved to transfer options by another account on its behalf.

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L169)</sub>

A value of options was burned from the given account.

**Signature**: `Burned(address account, uint256 value)`

### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L168)</sub>

A value of options was issued into the given account.

**Signature**: `Issued(address account, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/BinaryOption.sol#L170)</sub>

A value of options was transferred between accounts.

**Signature**: `Transfer(address from, address to, uint256 value)`
