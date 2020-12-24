# AddressSetLib

## Description

**Source:** [contracts/AddressSetLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol)

## Structs

### `AddressSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L6)</sub>

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `elements` | `address[]`                   | TBA         |
| `indices`  | `mapping(address => uint256)` | TBA         |

## Internal Functions

### `add`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L43)</sub>

??? example "Details"

    **Signature**

    `add(struct AddressSetLib.AddressSet set, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `contains`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L11)</sub>

??? example "Details"

    **Signature**

    `contains(struct AddressSetLib.AddressSet set, address candidate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getPage(struct AddressSetLib.AddressSet set, uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `remove`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L51)</sub>

??? example "Details"

    **Signature**

    `remove(struct AddressSetLib.AddressSet set, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Element not in set.)](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/AddressSetLib.sol#L52)
