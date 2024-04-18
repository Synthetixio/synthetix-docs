# SignedSafeDecimalMath

## Description

**Source:** [contracts/SignedSafeDecimalMath.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol)

## Variables

### `PRECISE_UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L19)</sub>

**Type:** `int256`

### `UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L16)</sub>

**Type:** `int256`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L12)</sub>

**Type:** `uint8`

### `highPrecisionDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L13)</sub>

**Type:** `uint8`

## Views

### `preciseUnit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L32)</sub>

??? example "Details"

    **Signature**

    `preciseUnit() pure returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

### `unit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L25)</sub>

??? example "Details"

    **Signature**

    `unit() pure returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

## Internal Functions

### `decimalToPreciseDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L178)</sub>

??? example "Details"

    **Signature**

    `decimalToPreciseDecimal(int256 i) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `divideDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L129)</sub>

??? example "Details"

    **Signature**

    `divideDecimal(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `divideDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L159)</sub>

??? example "Details"

    **Signature**

    `divideDecimalRound(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `divideDecimalRoundPrecise`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L171)</sub>

??? example "Details"

    **Signature**

    `divideDecimalRoundPrecise(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `multiplyDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L61)</sub>

??? example "Details"

    **Signature**

    `multiplyDecimal(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `multiplyDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L116)</sub>

??? example "Details"

    **Signature**

    `multiplyDecimalRound(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `multiplyDecimalRoundPrecise`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L100)</sub>

??? example "Details"

    **Signature**

    `multiplyDecimalRoundPrecise(int256 x, int256 y) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `preciseDecimalToDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SignedSafeDecimalMath.sol#L185)</sub>

??? example "Details"

    **Signature**

    `preciseDecimalToDecimal(int256 i) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`
