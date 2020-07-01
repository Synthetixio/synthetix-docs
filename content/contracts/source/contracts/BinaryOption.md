# BinaryOption

## Description

**Source:** [contracts/BinaryOption.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

## Constants

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L24)</sub>

**Type:** `uint8`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L22)</sub>

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L23)</sub>

**Type:** `string`

## Variables

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L35)</sub>

**Type:** `mapping(address => mapping(address => uint256))`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L31)</sub>

**Type:** `mapping(address => uint256)`

### `bidOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L28)</sub>

**Type:** `mapping(address => uint256)`

### `market`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L26)</sub>

**Type:** `contract BinaryOptionMarket`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L29)</sub>

**Type:** `uint256`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L32)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L42)</sub>

??? example "Details"

    **Signature**

    `(address initialBidder, uint256 initialBid)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `claimableBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L72)</sub>

??? example "Details"

    **Signature**

    `claimableBalanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L87)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L99)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L112)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L137)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L153)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L105)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L50)</sub>

??? example "Details"

    **Signature**

    `_claimableBalanceOf(uint256 _bid, uint256 price, uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_requireMinimumBid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L93)</sub>

??? example "Details"

    **Signature**

    `_requireMinimumBid(uint256 bid) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., Balance < $0.01)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L94)

### `_totalClaimableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L77)</sub>

??? example "Details"

    **Signature**

    `_totalClaimableSupply(uint256 exercisableDeposits) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L162)</sub>

??? example "Details"

    **Signature**

    `_transfer(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid address)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L168)

    * [require(..., Insufficient balance)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L171)

    **Emits**

    * [Transfer](#transfer)

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L196)</sub>

??? example "Details"

    **Signature**

    `approve(address _spender, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., )](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L197)

    **Emits**

    * [Approval](#approval)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L180)</sub>

??? example "Details"

    **Signature**

    `transfer(address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L184)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address _from, address _to, uint256 _value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Insufficient allowance)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L190)

## Modifiers

### `onlyMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L205)</sub>

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L215)</sub>

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L213)</sub>

**Signature**: `Burned(address account, uint256 value)`

### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L212)</sub>

**Signature**: `Issued(address account, uint256 value)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOption.sol#L214)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
