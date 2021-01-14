# ExchangerWithVirtualSynth

## Description

**Source:** [contracts/ExchangerWithVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/ExchangerWithVirtualSynth.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ExchangerWithVirtualSynth[ExchangerWithVirtualSynth] --> Exchanger[Exchanger]
    Exchanger[Exchanger] --> Owned[Owned]
    Exchanger[Exchanger] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/ExchangerWithVirtualSynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/ExchangerWithVirtualSynth.sol#L15)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20 synth, address recipient, uint256 amount, bytes32 currencyKey) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot virtualize this synth)](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/ExchangerWithVirtualSynth.sol#L22)

    **Emits**

    * [VirtualSynthCreated](#virtualsynthcreated)

## Events

### `VirtualSynthCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/ExchangerWithVirtualSynth.sol#L28)</sub>

**Signature**: `VirtualSynthCreated(address synth, address recipient, address vSynth, bytes32 currencyKey, uint256 amount)`
