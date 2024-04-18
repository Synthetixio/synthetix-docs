# ContractStorage

## Description

**Source:** [contracts/ContractStorage.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol)

## Variables

### `hashes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L10)</sub>

**Type:** `mapping(bytes32 => bytes32)`

### `resolverProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L8)</sub>

**Type:** `contract IAddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Restricted Functions

### `migrateContractKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L33)</sub>

??? example "Details"

    **Signature**

    `migrateContractKey(bytes32 fromContractName, bytes32 toContractName, bool removeAccessFromPreviousContract)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot migrate empty contract")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L38)

    **Modifiers**

    * [onlyContract](#onlycontract)

    **Emits**

    * [KeyMigrated](#keymigrated)

## Internal Functions

### `_memoizeHash`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L19)</sub>

??? example "Details"

    **Signature**

    `_memoizeHash(bytes32 contractName) returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L51)</sub>

**Signature**: `onlyContract(bytes32 contractName)`

## Events

### `KeyMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ContractStorage.sol#L60)</sub>

**Signature**: `KeyMigrated(bytes32 fromContractName, bytes32 toContractName, bool removeAccessFromPreviousContract)`
