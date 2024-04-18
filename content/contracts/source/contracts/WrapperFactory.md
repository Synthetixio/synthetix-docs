# WrapperFactory

## Description

**Source:** [contracts/WrapperFactory.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L17)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L26)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `feesEscrowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L55)</sub>

??? example "Details"

    **Signature**

    `feesEscrowed() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L51)</sub>

??? example "Details"

    **Signature**

    `isWrapper(address possibleWrapper) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L28)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `createWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L69)</sub>

??? example "Details"

    **Signature**

    `createWrapper(contract IERC20 token, bytes32 currencyKey, bytes32 synthContractName) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [WrapperCreated](#wrappercreated)

## Internal Functions

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L44)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L40)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `distributeFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L88)</sub>

??? example "Details"

    **Signature**

    `distributeFees()`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `WrapperCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/WrapperFactory.sol#L99)</sub>

**Signature**: `WrapperCreated(address token, bytes32 currencyKey, address wrapperAddress)`
