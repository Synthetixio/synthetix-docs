# Pausable

## Description

Allows an inheriting contract to be paused and resumed, providing a modifier that will allow modified functions to operate only if the contract is not paused.

**Source:** [contracts/Pausable.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol)

## Variables

### `lastPauseTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L8)</sub>

The UNIX timestamp in seconds at which the contract was last paused.

**Type:** `uint256`

### `paused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L9)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L11)</sub>

The owner this constructor initialises has the exclusive right to pause the contract. The contract begins unpaused.

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Owner must be set")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L13)

## Restricted Functions

### `setPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L21)</sub>

Pauses or unpauses the contract. Sets [`lastPauseTime`](#lastPauseTime) to the current timestamp if the contract is newly paused.

??? example "Details"

    **Signature**

    `setPaused(bool _paused)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PauseChanged](#pausechanged)

## Modifiers

### `notPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L41)</sub>

Reverts the transaction the contract is [`paused`](#paused). Provided for use by inheriting contracts.

## Events

### `PauseChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Pausable.sol#L39)</sub>

The contract has gone from paused to unpaused or vice versa. This event reports the new state.

**Signature**: `PauseChanged(bool isPaused)`
