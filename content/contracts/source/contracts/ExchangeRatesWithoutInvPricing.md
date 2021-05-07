# ExchangeRatesWithoutInvPricing

## Description

**Source:** [contracts/ExchangeRatesWithoutInvPricing.sol](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L8)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _oracle, address _resolver, bytes32[] _currencyKeys, uint256[] _newRates)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `removeInversePricing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L27)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L16)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L43)</sub>

??? example "Details"

    **Signature**

    `_rateIsFrozen(bytes32) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `canFreezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L35)</sub>

??? example "Details"

    **Signature**

    `canFreezeRate(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `freezeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L31)</sub>

??? example "Details"

    **Signature**

    `freezeRate(bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rateIsFrozen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha-1/contracts/ExchangeRatesWithoutInvPricing.sol#L39)</sub>

??? example "Details"

    **Signature**

    `rateIsFrozen(bytes32) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
