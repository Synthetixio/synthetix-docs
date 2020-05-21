# ISynth

## Description


**Source:** [contracts/interfaces/ISynth.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol)

## Constants

## Variables

## Functions


---
### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L20)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`


---
### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L6)</sub>

??? example "Details"

    **Signature**

    `currencyKey()`

    **State Mutability**

    `view`


---
### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L22)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`


---
### `transferableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account)`

    **State Mutability**

    `view`


---
### `transferAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value)`

    **State Mutability**

    `nonpayable`


---
### `transferFromAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value)`

    **State Mutability**

    `nonpayable`

