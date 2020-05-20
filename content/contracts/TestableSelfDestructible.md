# TestableSelfDestructible

## Description


**Source:** [contracts/test-helpers/TestableSelfDestructible.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableSelfDestructible.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    TestableSelfDestructible[TestableSelfDestructible] --> SelfDestructible[SelfDestructible]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
```

## Constants

## Variables

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableSelfDestructible.sol#L8)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

