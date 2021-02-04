# ExchangeRatesWithoutInvPricing

## Description

**Source:** [contracts/ExchangeRatesWithoutInvPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L9)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `removeInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L28)</sub>

??? example "Details"

    **Signature**

    `removeInversePricing(bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L17)</sub>

??? example "Details"

    **Signature**

    `setInversePricing(bytes32, uint256, uint256, uint256, bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L48)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L44)</sub>

??? example "Details"

    **Signature**

    `_rateIsFrozen(bytes32) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L36)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L32)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/ExchangeRatesWithoutInvPricing.sol#L40)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
