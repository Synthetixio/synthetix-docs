# Pausable

## Description

Allows an inheriting contract to be paused and resumed, providing a modifier that will allow modified functions to operate only if the contract is not paused.



**Source:** [contracts/Pausable.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    Pausable[Pausable] --> Owned[Owned]
```

## `paused`

True iff the contract is currently paused.


**Type:** `bool public`


## Variables


---
### `lastPauseTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L9)</sub>



The UNIX timestamp in seconds at which the contract was last paused.




**Type:** `uint256`


---
### `paused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L10)</sub>





**Type:** `bool`

## Modifiers


---
### `notPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L42)</sub>



Reverts the transaction the contract is [`paused`](#paused). Provided for use by inheriting contracts.


## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L12)</sub>



??? example "Details"

    **Signature**

    `()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner must be set)](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L14)

## Functions (Internal)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L12)</sub>



??? example "Details"

    **Signature**

    `()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner must be set)](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L14)

## Functions (onlyOwner)


---
### `setPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L22)</sub>



??? example "Details"

    **Signature**

    `setPaused(bool _paused)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PauseChanged](#pausechanged)

## Events


---
### `PauseChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/Pausable.sol#L40)</sub>



The contract has gone from paused to unpaused or vice versa. This event reports the new state.


**Signature:** `PauseChanged(bool isPaused)`


- `(bool isPaused)`

