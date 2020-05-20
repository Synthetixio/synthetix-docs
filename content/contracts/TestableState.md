# TestableState

## Description


**Source:** [contracts/test-helpers/TestableState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableState.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    TestableState[TestableState] --> State[State]
    State[State] --> Owned[Owned]
```

## Constants

## Variables

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableState.sol#L8)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [State](#state)

## Functions


---
### `testModifier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableState.sol#L10)</sub>



??? example "Details"

    **Signature**

    `testModifier()`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

