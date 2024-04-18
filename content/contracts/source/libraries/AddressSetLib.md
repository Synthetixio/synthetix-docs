# AddressSetLib

## Description

**Source:** [contracts/AddressSetLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol)

## Structs

### `AddressSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L5)</sub>

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `elements` | `address[]`                   | TBA         |
| `indices`  | `mapping(address => uint256)` | TBA         |

## Internal Functions

### `add`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L42)</sub>

??? example "Details"

    **Signature**

    `add(struct AddressSetLib.AddressSet set, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `contains`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L10)</sub>

??? example "Details"

    **Signature**

    `contains(struct AddressSetLib.AddressSet set, address candidate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getPage(struct AddressSetLib.AddressSet set, uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `remove`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L50)</sub>

??? example "Details"

    **Signature**

    `remove(struct AddressSetLib.AddressSet set, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Element not in set.")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/AddressSetLib.sol#L51)
