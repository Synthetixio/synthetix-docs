# Pausable

## Description

Allows an inheriting contract to be paused and resumed, providing a modifier that will allow modified functions to operate only if the contract is not paused.



**Source:** [contracts/Pausable.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    Pausable[Pausable] --> Owned[Owned]
```

## Variables


---
### `lastPauseTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L9)</sub>



The UNIX timestamp in seconds at which the contract was last paused.




**Type:** `uint256`


---
### `paused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L10)</sub>





**Type:** `bool`

## `paused`

True iff the contract is currently paused.


**Type:** `bool public`


## Functions


---
### `constructor`

The owner this constructor initialises has the exclusive right to pause the contract. The contract begins unpaused.


??? example "Details"


```
**Signature**

`constructor(address _owner) public`

**Superconstructors**

* [`Owned(_owner)`](Owned.md#constructor)
```


---
### `setPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L22)</sub>



Pauses or unpauses the contract. Sets [`lastPauseTime`](#lastPauseTime) to the current timestamp if the contract is newly paused.


??? example "Details"

    **Signature**

    `setPaused(bool _paused) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PauseChanged](#pausechanged)

## Modifiers


---
### `notPaused`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L42)</sub>



Reverts the transaction the contract is [`paused`](#paused). Provided for use by inheriting contracts.


## Events


---
### `PauseChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Pausable.sol#L40)</sub>



The contract has gone from paused to unpaused or vice versa. This event reports the new state.


**Signature:** `PauseChanged(bool isPaused)`


- `(bool isPaused)`

