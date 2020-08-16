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

??? example "Related Contracts"

    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The parent contract of this binary option token.

**Source:** [contracts/BinaryOption.sol](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

## Constants

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L24)</sub>

The ERC20 number of decimals of this token. Hardcoded to 18.

**Type:** `uint8`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L22)</sub>

The ERC20 name of this token.

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L23)</sub>

The ERC20 symbol of this token.

**Type:** `string`

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L35)</sub>

The ERC20 allowances of this option. `allowance[owner][spender]` is the value of options `spender` is approved to transfer on behalf of `owner`.

**Type:** `mapping(address => mapping(address => uint256))`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L31)</sub>

The ERC20 balance of this option for each account.

**Type:** `mapping(address => uint256)`

### `bidOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L28)</sub>

The current bid on this option made by each address.

**Type:** `mapping(address => uint256)`

### `market`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L26)</sub>

The parent market of this option.

**Type:** `contract BinaryOptionMarket`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L29)</sub>

The total value of bids made by all addresses.

**Type:** `uint256`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L32)</sub>

The ERC20 total supply of this option.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L42)</sub>

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

### `claimableBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L78)</sub>

Returns the quantity of options claimable by an account at the current price. If account contains the entire (nonzero)
bid supply, then their claimable amount is the total remaining supply of options, which accounts for any slight
rounding errors.

??? example "Details"

    **Signature**

    `claimableBalanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L93)</sub>

Returns the total supply of options claimable by all bidders.

??? example "Details"

    **Signature**

    `totalClaimableSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L106)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L119)</sub>

Allows the market to convert the entire claimable balance of a given account into options.
On invocation, the bid is set to zero, while [`claimableBalanceOf(account)`](#claimablebalanceof) tokens are issued into the account.
The `Issued` event emitted is accompanied by a `Transfer` event from the zero address.

??? example "Details"

    **Signature**

    `claim(address claimant, uint256 price, uint256 depositsRemaining) returns (uint256)`

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L144)</sub>

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

### `expire`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L160)</sub>

Allows the market to destroy this option contract.

??? example "Details"

    **Signature**

    `expire(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyMarket](#onlymarket)

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L112)</sub>

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

## Internal Functions

### `_claimableBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L50)</sub>

See [`claimableBalanceOf`](#claimablebalanceof).

This function requires the quantity of [exercisable deposits](BinaryOptionMarket.md#exercisabledeposits) in the parent
market just in case the claimable value in the last account is different from the remaining deposits
by a few wei due to rounding errors.

??? example "Details"

    **Signature**

    `_claimableBalanceOf(uint256 _bid, uint256 price, uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., supply < claimable)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L74)

### `_requireMinimumBid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L100)</sub>

Reverts the transaction if the bid provided to its argument is less than 1 cent. This minimum value ensures that
any last-bidder attacks based on the rounding error must accumulate at least $10^{16}$ wei worth of rounding
errors before they spill over into other accounts. A single division during the [`claim`](#claim)
function is the only thing that introduces such rounding errors, so such rounding-based attacks would require
an infeasibly-large number of accounts to perform.

??? example "Details"

    **Signature**

    `_requireMinimumBid(uint256 bid) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., Balance < $0.01)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L101)

### `_totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L83)</sub>

See [`totalClaimableSupply`](#totalclaimablesupply). Takes the total deposits in the system for a similar reason to
[`claimableBalanceOf`](#_claimablebalanceof).

??? example "Details"

    **Signature**

    `_totalClaimableSupply(uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L169)</sub>

Implements the internal behaviour of the [`transfer`](#transfer) and [`transferFrom`](#transferfrom) functions.
Reverts if either sender or recipient is the zero account, or if the balance in the sending account is insufficient,
or if the system is [not operating](BinaryOptionMarket.md#requireactiveandunpaused).

??? example "Details"

    **Signature**

    `_transfer(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid address)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L175)

    * [require(..., Insufficient balance)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L178)

    **Emits**

    * [Transfer](#transfer)

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L203)</sub>

Allows an account to approve another account to transfer tokens on its behalf.
Reverts if the designated spender is the zero account.

??? example "Details"

    **Signature**

    `approve(address _spender, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., )](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L204)

    **Emits**

    * [Approval](#approval)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L187)</sub>

Transfers a quantity of options between accounts.
Reverts if the balance in the sending account is insufficient, if the destination address is the zero address,
or if the system is [not operating](BinaryOptionMarket.md#requireactiveandunpaused).
Implemented internally by the [`_transfer`](#_transfer) function.

??? example "Details"

    **Signature**

    `transfer(address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L191)</sub>

Allows an account to transfer a quantity of options on behalf of another account.
Reverts if the either the balance or sender approval is insufficient, if either the destination or
sending addresses is the zero address, or if the system is [not operating](BinaryOptionMarket.md#requireactiveandunpaused).
Implemented internally by the [`_transfer`](#_transfer) function.

??? example "Details"

    **Signature**

    `transferFrom(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Insufficient allowance)](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L197)

## Modifiers

### `onlyMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L212)</sub>

Reverts the transaction if the message sender is not the [market](#market).

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L222)</sub>

A spending account was approved to transfer options by another account on its behalf.

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L220)</sub>

A value of options was burned from the given account.

**Signature**: `Burned(address account, uint256 value)`

### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L219)</sub>

A value of options was issued into the given account.

**Signature**: `Issued(address account, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.27.0-alpha/contracts/BinaryOption.sol#L221)</sub>

A value of options was transferred between accounts.

**Signature**: `Transfer(address from, address to, uint256 value)`
