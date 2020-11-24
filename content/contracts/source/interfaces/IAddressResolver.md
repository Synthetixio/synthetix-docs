# IAddressResolver

## Description

**Source:** [contracts/interfaces/IAddressResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/IAddressResolver.sol)

## Views

### `getAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/IAddressResolver.sol#L6)</sub>

??? example "Details"

    **Signature**

    `getAddress(bytes32 name) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/IAddressResolver.sol#L8)</sub>

!!! Warning "Not yet on mainnet"

    This view, while in source, is not yet on mainnet. It is planned in the `v2.23` Acrux release. As a workaround you can use `IAddressResolver.getAddress("Synthetix").synths(key)`

??? example "Details"

    **Signature**

    `getSynth(bytes32 key) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/IAddressResolver.sol#L10)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name, string reason) returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
