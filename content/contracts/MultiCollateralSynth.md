# MultiCollateralSynth

**Source:** [MultiCollateralSynth.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/MultiCollateralSynth.sol)


!!! todo "Work in Progress"


    This needs filling in

## Description

... todo.



**Source:** [contracts/MultiCollateralSynth.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol)

## Architecture

... todo.


<!--centered-image>
    ![Architecture Graph](../img/graphs/todo-architecture.svg)
</centered-image-->



---
### Inheritance Graph

```mermaid
graph TD
    MultiCollateralSynth[MultiCollateralSynth] --> Synth[Synth]
    Synth[Synth] --> ExternStateToken[ExternStateToken]
    Synth[Synth] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```


---
### Related Contracts

- ?

## Views

## Variables


---
### `multiCollateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L9)</sub>

**Type:** `bytes32`

## Modifiers


---
### `onlyInternalContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L58)</sub>

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver, bytes32 _multiCollateralKey)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Synth](#synth)

## Functions


---
### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)


---
### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L42)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

## Functions (Internal)


---
### `multiCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MultiCollateralSynth.sol#L31)</sub>

??? example "Details"

    **Signature**

    `multiCollateral()`

    **State Mutability**

    `view`

## Internal & Restricted Mutative Functions

## Owner Mutative Functions

## Public Mutative Functions

