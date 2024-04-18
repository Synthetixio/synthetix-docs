# IWrapperFactory

## Description

**Source:** [contracts/interfaces/IWrapperFactory.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapperFactory.sol)

## Views

### `isWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapperFactory.sol#L7)</sub>

??? example "Details"

    **Signature**

    `isWrapper(address possibleWrapper) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `createWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapperFactory.sol#L9)</sub>

??? example "Details"

    **Signature**

    `createWrapper(contract IERC20 token, bytes32 currencyKey, bytes32 synthContractName) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `distributeFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IWrapperFactory.sol#L15)</sub>

??? example "Details"

    **Signature**

    `distributeFees()`

    **Visibility**

    `external`

    **State Mutability**

    ``
