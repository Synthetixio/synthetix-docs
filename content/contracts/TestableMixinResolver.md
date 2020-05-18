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

## Variables

## Functions


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TestableMixinResolver.sol#L14)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _resolver) public`

    **Modifiers**

    * [Owned](#owned)

    * [MixinResolver](#mixinresolver)

