# SynthUtil

## Description

**Source:** [contracts/SynthUtil.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol)

## Variables

### `addressResolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L12)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L26)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L22)</sub>

??? example "Details"

    **Signature**

    `_synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `frozenSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L69)</sub>

??? example "Details"

    **Signature**

    `frozenSynths() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L45)</sub>

??? example "Details"

    **Signature**

    `synthsBalances(address account) view returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L83)</sub>

??? example "Details"

    **Signature**

    `synthsRates() view returns (bytes32[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsTotalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L88)</sub>

??? example "Details"

    **Signature**

    `synthsTotalSupplies() view returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalSynthsInKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/SynthUtil.sol#L30)</sub>

??? example "Details"

    **Signature**

    `totalSynthsInKey(address account, bytes32 currencyKey) view returns (uint256 total)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
