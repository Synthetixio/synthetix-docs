# IssuerWithoutUpdatableCache

## Description

**Source:** [contracts/IssuerWithoutUpdatableCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/IssuerWithoutUpdatableCache.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    IssuerWithoutUpdatableCache[IssuerWithoutUpdatableCache] --> Issuer[Issuer]
    Issuer[Issuer] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/IssuerWithoutUpdatableCache.sol#L7)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## External Functions

### `cacheSNXIssuedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/IssuerWithoutUpdatableCache.sol#L13)</sub>

??? example "Details"

    **Signature**

    `cacheSNXIssuedDebt()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

### `updateSNXIssuedDebtForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/IssuerWithoutUpdatableCache.sol#L11)</sub>

??? example "Details"

    **Signature**

    `updateSNXIssuedDebtForCurrencies(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/IssuerWithoutUpdatableCache.sol#L9)</sub>

??? example "Details"

    **Signature**

    `updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
