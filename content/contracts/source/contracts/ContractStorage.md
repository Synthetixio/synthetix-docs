# ContractStorage

## Description

**Source:** [contracts/ContractStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol)

## Variables

### `hashes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L11)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `resolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L9)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L13)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Restricted Functions

### `migrateContractKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L34)</sub>

??? example "Details"

    **Signature**

    `migrateContractKey(bytes32 fromContractName, bytes32 toContractName, bool removeAccessFromPreviousContract)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot migrate empty contract")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L39)

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [KeyMigrated](#keymigrated)

## Internal Functions

### `_memoizeHash`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L20)</sub>

??? example "Details"

    **Signature**

    `_memoizeHash(bytes32 contractName) returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L52)</sub>

**Signature**: `onlyContract(bytes32 contractName)`

## Events

### `KeyMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/ContractStorage.sol#L63)</sub>

**Signature**: `KeyMigrated(bytes32 fromContractName, bytes32 toContractName, bool removeAccessFromPreviousContract)`
