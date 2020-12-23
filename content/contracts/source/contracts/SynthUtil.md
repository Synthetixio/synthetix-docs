# SynthUtil

## Description

**Source:** [contracts/SynthUtil.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol)

## Variables

### `addressResolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L13)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L19)</sub>

??? example "Details"

    **Signature**

    `(address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `frozenSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L70)</sub>

??? example "Details"

    **Signature**

    `frozenSynths() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L46)</sub>

??? example "Details"

    **Signature**

    `synthsBalances(address account) returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L84)</sub>

??? example "Details"

    **Signature**

    `synthsRates() returns (bytes32[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsTotalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L89)</sub>

??? example "Details"

    **Signature**

    `synthsTotalSupplies() returns (bytes32[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSynthsInKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L31)</sub>

??? example "Details"

    **Signature**

    `totalSynthsInKey(address account, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L27)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2-beta/contracts/SynthUtil.sol#L23)</sub>

??? example "Details"

    **Signature**

    `_synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
