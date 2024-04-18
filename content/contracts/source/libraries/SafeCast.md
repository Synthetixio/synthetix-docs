# SafeCast

## Description

**Source:** [contracts/SafeCast.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol)

## Internal Functions

### `toInt256`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L115)</sub>

??? example "Details"

    **Signature**

    `toInt256(uint256 value) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in an int256")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L116)

### `toUint128`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L31)</sub>

??? example "Details"

    **Signature**

    `toUint128(uint256 value) pure returns (uint128)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in 128 bits")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L32)

### `toUint16`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L76)</sub>

??? example "Details"

    **Signature**

    `toUint16(uint256 value) pure returns (uint16)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in 16 bits")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L77)

### `toUint256`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L103)</sub>

??? example "Details"

    **Signature**

    `toUint256(int256 value) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value must be positive")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L104)

### `toUint32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L61)</sub>

??? example "Details"

    **Signature**

    `toUint32(uint256 value) pure returns (uint32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in 32 bits")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L62)

### `toUint64`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L46)</sub>

??? example "Details"

    **Signature**

    `toUint64(uint256 value) pure returns (uint64)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in 64 bits")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L47)

### `toUint8`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L91)</sub>

??? example "Details"

    **Signature**

    `toUint8(uint256 value) pure returns (uint8)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "SafeCast: value doesn't fit in 8 bits")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SafeCast.sol#L92)
