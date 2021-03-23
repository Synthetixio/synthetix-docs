# Bytes32SetLib

## Description

**Source:** [contracts/Bytes32SetLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol)

## Structs

### `Bytes32Set`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L6)</sub>

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `elements` | `bytes32[]`                   | TBA         |
| `indices`  | `mapping(bytes32 => uint256)` | TBA         |

## Internal Functions

### `add`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L43)</sub>

??? example "Details"

    **Signature**

    `add(struct Bytes32SetLib.Bytes32Set set, bytes32 element)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `contains`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L11)</sub>

??? example "Details"

    **Signature**

    `contains(struct Bytes32SetLib.Bytes32Set set, bytes32 candidate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `getPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getPage(struct Bytes32SetLib.Bytes32Set set, uint256 index, uint256 pageSize) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `remove`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L51)</sub>

??? example "Details"

    **Signature**

    `remove(struct Bytes32SetLib.Bytes32Set set, bytes32 element)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Element not in set.")](https://github.com/Synthetixio/synthetix/tree/v2.41.0-alpha/contracts/Bytes32SetLib.sol#L52)
