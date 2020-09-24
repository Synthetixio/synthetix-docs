# IFlexibleStorage

## Description

**Source:** [contracts/interfaces/IFlexibleStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol)

## Views

### `getAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L14)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 contractName, bytes32 record) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L16)</sub>

??? example "Details"

    **Signature**

    `getAddressValues(bytes32 contractName, bytes32[] records) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L18)</sub>

??? example "Details"

    **Signature**

    `getBoolValue(bytes32 contractName, bytes32 record) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L20)</sub>

??? example "Details"

    **Signature**

    `getBoolValues(bytes32 contractName, bytes32[] records) returns (bool[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L22)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 contractName, bytes32 record) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L24)</sub>

??? example "Details"

    **Signature**

    `getBytes32Values(bytes32 contractName, bytes32[] records) returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L10)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 contractName, bytes32 record) returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L12)</sub>

??? example "Details"

    **Signature**

    `getIntValues(bytes32 contractName, bytes32[] records) returns (int256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L6)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 contractName, bytes32 record) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getUIntValues(bytes32 contractName, bytes32[] records) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `deleteAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L31)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deleteBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L33)</sub>

??? example "Details"

    **Signature**

    `deleteBoolValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deleteBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L35)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deleteIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L29)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deleteUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L27)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L61)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 contractName, bytes32 record, address value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L67)</sub>

??? example "Details"

    **Signature**

    `setAddressValues(bytes32 contractName, bytes32[] records, address[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L73)</sub>

??? example "Details"

    **Signature**

    `setBoolValue(bytes32 contractName, bytes32 record, bool value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L79)</sub>

??? example "Details"

    **Signature**

    `setBoolValues(bytes32 contractName, bytes32[] records, bool[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L85)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 contractName, bytes32 record, bytes32 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L91)</sub>

??? example "Details"

    **Signature**

    `setBytes32Values(bytes32 contractName, bytes32[] records, bytes32[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L49)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 contractName, bytes32 record, int256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L55)</sub>

??? example "Details"

    **Signature**

    `setIntValues(bytes32 contractName, bytes32[] records, int256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L37)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 contractName, bytes32 record, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-beta/contracts/interfaces/IFlexibleStorage.sol#L43)</sub>

??? example "Details"

    **Signature**

    `setUIntValues(bytes32 contractName, bytes32[] records, uint256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
