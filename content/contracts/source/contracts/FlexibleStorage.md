# FlexibleStorage

## Description

**Source:** [contracts/FlexibleStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L97)</sub>

??? example "Details"

    **Signature**

    `getAddressValue(bytes32 contractName, bytes32 record) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L101)</sub>

??? example "Details"

    **Signature**

    `getAddressValues(bytes32 contractName, bytes32[] records) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getBoolValue(bytes32 contractName, bytes32 record) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L115)</sub>

??? example "Details"

    **Signature**

    `getBoolValues(bytes32 contractName, bytes32[] records) view returns (bool[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L125)</sub>

??? example "Details"

    **Signature**

    `getBytes32Value(bytes32 contractName, bytes32 record) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L129)</sub>

??? example "Details"

    **Signature**

    `getBytes32Values(bytes32 contractName, bytes32[] records) view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L83)</sub>

??? example "Details"

    **Signature**

    `getIntValue(bytes32 contractName, bytes32 record) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L87)</sub>

??? example "Details"

    **Signature**

    `getIntValues(bytes32 contractName, bytes32[] records) view returns (int256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L69)</sub>

??? example "Details"

    **Signature**

    `getUIntValue(bytes32 contractName, bytes32 record) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L73)</sub>

??? example "Details"

    **Signature**

    `getUIntValues(bytes32 contractName, bytes32[] records) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L212)</sub>

??? example "Details"

    **Signature**

    `deleteAddressValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedAddress](#valuedeletedaddress)

### `deleteBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L238)</sub>

??? example "Details"

    **Signature**

    `deleteBoolValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedBool](#valuedeletedbool)

### `deleteBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L264)</sub>

??? example "Details"

    **Signature**

    `deleteBytes32Value(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedBytes32](#valuedeletedbytes32)

### `deleteIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L186)</sub>

??? example "Details"

    **Signature**

    `deleteIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedInt](#valuedeletedint)

### `deleteUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L160)</sub>

??? example "Details"

    **Signature**

    `deleteUIntValue(bytes32 contractName, bytes32 record)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [ValueDeletedUInt](#valuedeleteduint)

### `setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L192)</sub>

??? example "Details"

    **Signature**

    `setAddressValue(bytes32 contractName, bytes32 record, address value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setAddressValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L200)</sub>

??? example "Details"

    **Signature**

    `setAddressValues(bytes32 contractName, bytes32[] records, address[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L205)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L218)</sub>

??? example "Details"

    **Signature**

    `setBoolValue(bytes32 contractName, bytes32 record, bool value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBoolValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L226)</sub>

??? example "Details"

    **Signature**

    `setBoolValues(bytes32 contractName, bytes32[] records, bool[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L231)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L244)</sub>

??? example "Details"

    **Signature**

    `setBytes32Value(bytes32 contractName, bytes32 record, bytes32 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setBytes32Values`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L252)</sub>

??? example "Details"

    **Signature**

    `setBytes32Values(bytes32 contractName, bytes32[] records, bytes32[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L257)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L166)</sub>

??? example "Details"

    **Signature**

    `setIntValue(bytes32 contractName, bytes32 record, int256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L174)</sub>

??? example "Details"

    **Signature**

    `setIntValues(bytes32 contractName, bytes32[] records, int256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L179)

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L140)</sub>

??? example "Details"

    **Signature**

    `setUIntValue(bytes32 contractName, bytes32 record, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyContract](#onlycontract)

### `setUIntValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L148)</sub>

??? example "Details"

    **Signature**

    `setUIntValues(bytes32 contractName, bytes32[] records, uint256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Input lengths must match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L153)

    **Modifiers**

    * [onlyContract](#onlycontract)

## Internal Functions

### `_setAddressValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L40)</sub>

??? example "Details"

    **Signature**

    `_setAddressValue(bytes32 contractName, bytes32 record, address value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ValueSetAddress](#valuesetaddress)

### `_setBoolValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L49)</sub>

??? example "Details"

    **Signature**

    `_setBoolValue(bytes32 contractName, bytes32 record, bool value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ValueSetBool](#valuesetbool)

### `_setBytes32Value`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L58)</sub>

??? example "Details"

    **Signature**

    `_setBytes32Value(bytes32 contractName, bytes32 record, bytes32 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ValueSetBytes32](#valuesetbytes32)

### `_setIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L31)</sub>

??? example "Details"

    **Signature**

    `_setIntValue(bytes32 contractName, bytes32 record, int256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ValueSetInt](#valuesetint)

### `_setUIntValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L22)</sub>

??? example "Details"

    **Signature**

    `_setUIntValue(bytes32 contractName, bytes32 record, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ValueSetUInt](#valuesetuint)

## Events

### `ValueDeletedAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L279)</sub>

**Signature**: `ValueDeletedAddress(bytes32 contractName, bytes32 record, address value)`

### `ValueDeletedBool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L282)</sub>

**Signature**: `ValueDeletedBool(bytes32 contractName, bytes32 record, bool value)`

### `ValueDeletedBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L285)</sub>

**Signature**: `ValueDeletedBytes32(bytes32 contractName, bytes32 record, bytes32 value)`

### `ValueDeletedInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L276)</sub>

**Signature**: `ValueDeletedInt(bytes32 contractName, bytes32 record, int256 value)`

### `ValueDeletedUInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L273)</sub>

**Signature**: `ValueDeletedUInt(bytes32 contractName, bytes32 record, uint256 value)`

### `ValueSetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L278)</sub>

**Signature**: `ValueSetAddress(bytes32 contractName, bytes32 record, address value)`

### `ValueSetBool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L281)</sub>

**Signature**: `ValueSetBool(bytes32 contractName, bytes32 record, bool value)`

### `ValueSetBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L284)</sub>

**Signature**: `ValueSetBytes32(bytes32 contractName, bytes32 record, bytes32 value)`

### `ValueSetInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L275)</sub>

**Signature**: `ValueSetInt(bytes32 contractName, bytes32 record, int256 value)`

### `ValueSetUInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FlexibleStorage.sol#L272)</sub>

**Signature**: `ValueSetUInt(bytes32 contractName, bytes32 record, uint256 value)`
