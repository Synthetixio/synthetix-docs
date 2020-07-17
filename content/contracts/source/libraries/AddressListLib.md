# AddressListLib

## Description

**Source:** [contracts/AddressListLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol)

## Structs

### `AddressList`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L5)</sub>

| Field      | Type                          | Description |
| ---------- | ----------------------------- | ----------- |
| `elements` | `address[]`                   | TBA         |
| `indices`  | `mapping(address => uint256)` | TBA         |

## Internal Functions

### `contains`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L10)</sub>

??? example "Details"

    **Signature**

    `contains(struct AddressListLib.AddressList list, address candidate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getPage(struct AddressListLib.AddressList list, uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `push`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L42)</sub>

??? example "Details"

    **Signature**

    `push(struct AddressListLib.AddressList list, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `remove`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L47)</sub>

??? example "Details"

    **Signature**

    `remove(struct AddressListLib.AddressList list, address element)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Element not in list.)](https://github.com/Synthetixio/synthetix/tree/v2.25.0-alpha/contracts/AddressListLib.sol#L48)
