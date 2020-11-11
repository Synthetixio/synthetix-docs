# FlexibleStorage

## Description

**Source:** [contracts/FlexibleStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    FlexibleStorage[FlexibleStorage] --> ContractStorage[ContractStorage]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L19)</sub>

??? example "Details"

    **Signature**

    `(address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `getAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 contractName, bytes32 record) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L102)</sub>

??? example "Details"

    **Signature**

    `getAddressValues(bytes32 contractName, bytes32[] records) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L112)</sub>

??? example "Details"

    **Signature**

    `getBoolValue(bytes32 contractName, bytes32 record) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getBoolValues(bytes32 contractName, bytes32[] records) returns (bool[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L126)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 contractName, bytes32 record) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L130)</sub>

??? example "Details"

    **Signature**

    `getBytes32Values(bytes32 contractName, bytes32[] records) returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L84)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 contractName, bytes32 record) returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L88)</sub>

??? example "Details"

    **Signature**

    `getIntValues(bytes32 contractName, bytes32[] records) returns (int256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L70)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 contractName, bytes32 record) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L74)</sub>

??? example "Details"

    **Signature**

    `getUIntValues(bytes32 contractName, bytes32[] records) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L213)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedAddress](#valuedeletedaddress)

### `deleteBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L239)</sub>

??? example "Details"

    **Signature**

    `deleteBoolValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedBool](#valuedeletedbool)

### `deleteBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L265)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedBytes32](#valuedeletedbytes32)

### `deleteIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L187)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedInt](#valuedeletedint)

### `deleteUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L161)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedUInt](#valuedeleteduint)

### `setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L193)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 contractName, bytes32 record, address value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L201)</sub>

??? example "Details"

    **Signature**

    `setAddressValues(bytes32 contractName, bytes32[] records, address[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input lengths must match)](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L206)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L219)</sub>

??? example "Details"

    **Signature**

    `setBoolValue(bytes32 contractName, bytes32 record, bool value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L227)</sub>

??? example "Details"

    **Signature**

    `setBoolValues(bytes32 contractName, bytes32[] records, bool[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input lengths must match)](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L232)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L245)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 contractName, bytes32 record, bytes32 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L253)</sub>

??? example "Details"

    **Signature**

    `setBytes32Values(bytes32 contractName, bytes32[] records, bytes32[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input lengths must match)](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L258)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L167)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 contractName, bytes32 record, int256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L175)</sub>

??? example "Details"

    **Signature**

    `setIntValues(bytes32 contractName, bytes32[] records, int256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input lengths must match)](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L180)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L141)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 contractName, bytes32 record, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L149)</sub>

??? example "Details"

    **Signature**

    `setUIntValues(bytes32 contractName, bytes32[] records, uint256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input lengths must match)](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L154)

    **Modifiers**

    * [onlyContract](#onlycontract)

## Internal Functions

### `_setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L41)</sub>

??? example "Details"

    **Signature**

    `_setAddressValue(bytes32 contractName, bytes32 record, address value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ValueSetAddress](#valuesetaddress)

### `_setBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L50)</sub>

??? example "Details"

    **Signature**

    `_setBoolValue(bytes32 contractName, bytes32 record, bool value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ValueSetBool](#valuesetbool)

### `_setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L59)</sub>

??? example "Details"

    **Signature**

    `_setBytes32Value(bytes32 contractName, bytes32 record, bytes32 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ValueSetBytes32](#valuesetbytes32)

### `_setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L32)</sub>

??? example "Details"

    **Signature**

    `_setIntValue(bytes32 contractName, bytes32 record, int256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ValueSetInt](#valuesetint)

### `_setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L23)</sub>

??? example "Details"

    **Signature**

    `_setUIntValue(bytes32 contractName, bytes32 record, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [ValueSetUInt](#valuesetuint)

## Events

### `ValueDeletedAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L280)</sub>

**Signature**: `ValueDeletedAddress(bytes32 contractName, bytes32 record, address value)`

### `ValueDeletedBool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L283)</sub>

**Signature**: `ValueDeletedBool(bytes32 contractName, bytes32 record, bool value)`

### `ValueDeletedBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L286)</sub>

**Signature**: `ValueDeletedBytes32(bytes32 contractName, bytes32 record, bytes32 value)`

### `ValueDeletedInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L277)</sub>

**Signature**: `ValueDeletedInt(bytes32 contractName, bytes32 record, int256 value)`

### `ValueDeletedUInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L274)</sub>

**Signature**: `ValueDeletedUInt(bytes32 contractName, bytes32 record, uint256 value)`

### `ValueSetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L279)</sub>

**Signature**: `ValueSetAddress(bytes32 contractName, bytes32 record, address value)`

### `ValueSetBool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L282)</sub>

**Signature**: `ValueSetBool(bytes32 contractName, bytes32 record, bool value)`

### `ValueSetBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L285)</sub>

**Signature**: `ValueSetBytes32(bytes32 contractName, bytes32 record, bytes32 value)`

### `ValueSetInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L276)</sub>

**Signature**: `ValueSetInt(bytes32 contractName, bytes32 record, int256 value)`

### `ValueSetUInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.0-alpha/contracts/FlexibleStorage.sol#L273)</sub>

**Signature**: `ValueSetUInt(bytes32 contractName, bytes32 record, uint256 value)`
