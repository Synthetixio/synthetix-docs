# TestableMixinResolver

## Description


**Source:** [contracts/test-helpers/TestableMixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    TestableMixinResolver[TestableMixinResolver] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

## Constants


---
### `CONTRACT_EXAMPLE_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L8)</sub>





**Type:** `bytes32`


---
### `CONTRACT_EXAMPLE_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L9)</sub>





**Type:** `bytes32`


---
### `CONTRACT_EXAMPLE_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L10)</sub>





**Type:** `bytes32`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L14)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [MixinResolver](#mixinresolver)

## Variables


---
### `addressesToCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L12)</sub>





**Type:** `bytes32[24]`

