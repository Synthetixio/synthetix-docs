# ExternStateToken

## Description

A partial ERC20 token contract, designed to operate with a proxy.
To produce a complete ERC20 token, `transfer` and `transferFrom`
tokens must be implemented, using the provided \_byProxy internal functions.

For upgradeability, this contract utilises an [external state contract](TokenState.md) to store its balances and allowances.

The main [`Synthetix`](Synthetix.md) contract and all [`Synths`](Synth.md) are ExternStateTokens.

**Source:** [contracts/ExternStateToken.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]

```

## Variables

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L29)</sub>

The ERC20 decimal precision of this token. This is usually set to 18 in Synthetix.

**Type:** `uint8`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L26)</sub>

The ERC20 name of this token.

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L27)</sub>

The ERC20 symbol of this token.

**Type:** `string`

### `tokenState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L23)</sub>

The external state contract holding this token's balances and allowances.

**Type:** `contract TokenState`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L28)</sub>

The ERC20 total token supply.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L31)</sub>

Initialises this token's ERC20 fields, its proxy, token state, and its inherited [`SelfDestructible`](SelfDestructible.md) and [`Proxyable`](Proxyable.md) instances.

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _name, string _symbol, uint256 _totalSupply, uint8 _decimals, address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L55)</sub>

Returns the ERC20 allowance of one party to spend on behalf of another.
This information is retrieved from the [`tokenState`](TokenState.md) contract.

??? example "Details"

    **Signature**

    `allowance(address owner, address spender) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L62)</sub>

Returns the ERC20 token balance of the given address.
This information is retrieved from the [`tokenState`](TokenState.md) contract.

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setTokenState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L73)</sub>

Allows the owner to set the address of the `tokenState`(TokenState.md) contract.
Unhooking the token state will pause the contract by causing all transactions to revert.

??? example "Details"

    **Signature**

    `setTokenState(contract TokenState _tokenState)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

## Internal Functions

### `_internalTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L78)</sub>

Internal ERC20 transfer function used to implement [`_transfer_byProxy`](#_transfer_byproxy) and [`_transferFrom_byProxy`](#_transferfrom_byproxy).

`_internalTransfer` always returns true if the transaction does not revert.

??? example "Details"

    **Signature**

    `_internalTransfer(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot transfer to this address)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L84)

### `_transferByProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L100)</sub>

??? example "Details"

    **Signature**

    `_transferByProxy(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_transferFromByProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L112)</sub>

??? example "Details"

    **Signature**

    `_transferFromByProxy(address sender, address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `addressToBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L135)</sub>

??? example "Details"

    **Signature**

    `addressToBytes32(address input) returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `emitApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L153)</sub>

??? example "Details"

    **Signature**

    `emitApproval(address owner, address spender, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `emitTokenStateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L164)</sub>

??? example "Details"

    **Signature**

    `emitTokenStateUpdated(address newTokenState)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `emitTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L142)</sub>

??? example "Details"

    **Signature**

    `emitTransfer(address from, address to, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## External Functions

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L126)</sub>

ERC20 approve function.

??? example "Details"

    **Signature**

    `approve(address spender, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L150)</sub>

Records that an ERC20 approval occurred.

This event is emitted from the token's [proxy](Proxy.md#_emit) with the `emitApproval`.

**Signature**: `Approval(address owner, address spender, uint256 value)`

### `TokenStateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L161)</sub>

Records that the [token state address](#tokenstate) was updated.

This event is emitted from the token's [proxy](Proxy.md#_emit) with the `emitTokenStateUpdated`.

**Signature**: `TokenStateUpdated(address newTokenState)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/ExternStateToken.sol#L139)</sub>

Records that an ERC20 transfer occurred.

This event is emitted from the token's [proxy](Proxy.md#_emit) with the `emitTransfer`.

**Signature**: `Transfer(address from, address to, uint256 value)`
