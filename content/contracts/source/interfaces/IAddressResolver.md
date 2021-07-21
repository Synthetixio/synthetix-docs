# IAddressResolver

## Description

**Source:** [contracts/interfaces/IAddressResolver.sol](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IAddressResolver.sol)

## Views

### `getAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IAddressResolver.sol#L5)</sub>

??? example "Details"

    **Signature**

    `getAddress(bytes32 name) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IAddressResolver.sol#L7)</sub>

??? example "Details"

    **Signature**

    `getSynth(bytes32 key) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `requireAndGetAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IAddressResolver.sol#L9)</sub>

??? example "Details"

    **Signature**

    `requireAndGetAddress(bytes32 name, string reason) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
