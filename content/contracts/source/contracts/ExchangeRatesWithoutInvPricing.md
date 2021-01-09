# ExchangeRatesWithoutInvPricing

## Description

**Source:** [contracts/ExchangeRatesWithoutInvPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ExchangeRatesWithoutInvPricing[ExchangeRatesWithoutInvPricing] --> ExchangeRates[ExchangeRates]
    ExchangeRates[ExchangeRates] --> Owned[Owned]
    ExchangeRates[ExchangeRates] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L9)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L36)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32 ) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L40)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32 ) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `removeInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L28)</sub>

??? example "Details"

    **Signature**

    `removeInversePricing(bytes32 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L17)</sub>

??? example "Details"

    **Signature**

    `setInversePricing(bytes32 , uint256 , uint256 , uint256 , bool , bool )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L48)</sub>

??? example "Details"

    **Signature**

    `_notImplemented()`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L44)</sub>

??? example "Details"

    **Signature**

    `_rateIsFrozen(bytes32 ) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/ExchangeRatesWithoutInvPricing.sol#L32)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
