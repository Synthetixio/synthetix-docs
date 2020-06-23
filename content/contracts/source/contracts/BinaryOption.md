# BinaryOption

## Description

**Source:** [contracts/BinaryOption.sol](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

## Constants

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L24)</sub>

**Type:** `uint8`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L22)</sub>

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L23)</sub>

**Type:** `string`

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L35)</sub>

**Type:** `mapping(address => mapping(address => uint256))`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L31)</sub>

**Type:** `mapping(address => uint256)`

### `bidOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L28)</sub>

**Type:** `mapping(address => uint256)`

### `market`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L26)</sub>

**Type:** `contract BinaryOptionMarket`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L29)</sub>

**Type:** `uint256`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L32)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L39)</sub>

??? example "Details"

    **Signature**

    `(address initialBidder, uint256 initialBid)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `claimableBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L58)</sub>

??? example "Details"

    **Signature**

    `claimableBalanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L69)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L76)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L89)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L114)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L130)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L82)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_claimableBalanceOf(uint256 _bid, uint256 price, uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L63)</sub>

??? example "Details"

    **Signature**

    `_totalClaimableSupply(uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L139)</sub>

??? example "Details"

    **Signature**

    `_transfer(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid address)](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L145)

    * [require(..., Insufficient balance)](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L148)

    **Emits**

    * [Transfer](#transfer)

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L173)</sub>

??? example "Details"

    **Signature**

    `approve(address _spender, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., )](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L174)

    **Emits**

    * [Approval](#approval)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L157)</sub>

??? example "Details"

    **Signature**

    `transfer(address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L161)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Insufficient allowance)](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L167)

## Modifiers

### `onlyMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L182)</sub>

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L192)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L190)</sub>

**Signature**: `Burned(address account, uint256 value)`

### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L189)</sub>

**Signature**: `Issued(address account, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/BinaryOption.sol#L191)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
