# IssuerWithoutLiquidations

## Description

**Source:** [contracts/IssuerWithoutLiquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/IssuerWithoutLiquidations.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    IssuerWithoutLiquidations[IssuerWithoutLiquidations] --> Issuer[Issuer]
    Issuer[Issuer] --> Owned[Owned]
    Issuer[Issuer] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/IssuerWithoutLiquidations.sol#L9)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/IssuerWithoutLiquidations.sol#L11)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)
