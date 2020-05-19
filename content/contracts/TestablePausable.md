# TestablePausable

## Description


**Source:** [contracts/test-helpers/TestablePausable.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    TestablePausable[TestablePausable] --> Pausable[Pausable]
    Pausable[Pausable] --> Owned[Owned]
```

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L13)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [Pausable](#pausable)

## Functions


---
### `setSomeValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L15)</sub>



??? example "Details"

    **Signature**

    `setSomeValue(uint256 _value)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [notPaused](#notpaused)

## Variables


---
### `someValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestablePausable.sol#L11)</sub>





**Type:** `uint256`

