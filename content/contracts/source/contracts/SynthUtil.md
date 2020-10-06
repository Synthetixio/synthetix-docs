# SynthUtil

## Description

**Source:** [contracts/SynthUtil.sol](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol)

## Variables

### `addressResolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L12)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L18)</sub>

??? example "Details"

    **Signature**

    `(address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `frozenSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L69)</sub>

??? example "Details"

    **Signature**

    `frozenSynths() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L45)</sub>

??? example "Details"

    **Signature**

    `synthsBalances(address account) returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L83)</sub>

??? example "Details"

    **Signature**

    `synthsRates() returns (bytes32[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsTotalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L88)</sub>

??? example "Details"

    **Signature**

    `synthsTotalSupplies() returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSynthsInKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L30)</sub>

??? example "Details"

    **Signature**

    `totalSynthsInKey(address account, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L26)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.0-alpha/contracts/SynthUtil.sol#L22)</sub>

??? example "Details"

    **Signature**

    `_synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
