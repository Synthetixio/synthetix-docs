# ExchangerWithVirtualSynth

## Description

**Source:** [contracts/ExchangerWithVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L23)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L25)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L31)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L44)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20 synth, address recipient, uint256 amount, bytes32 currencyKey) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot virtualize this synth")](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L51)

    **Emits**

    * [VirtualSynthCreated](#virtualsynthcreated)

### `_virtualSynthMastercopy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L40)</sub>

??? example "Details"

    **Signature**

    `_virtualSynthMastercopy() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Events

### `VirtualSynthCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.1-ovm/contracts/ExchangerWithVirtualSynth.sol#L61)</sub>

**Signature**: `VirtualSynthCreated(address synth, address recipient, address vSynth, bytes32 currencyKey, uint256 amount)`
