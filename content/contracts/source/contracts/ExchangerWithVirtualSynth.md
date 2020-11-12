# ExchangerWithVirtualSynth

## Description

**Source:** [contracts/ExchangerWithVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/ExchangerWithVirtualSynth.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    ExchangerWithVirtualSynth[ExchangerWithVirtualSynth] --> Exchanger[Exchanger]
    Exchanger[Exchanger] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/ExchangerWithVirtualSynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/ExchangerWithVirtualSynth.sol#L15)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract ISynth synth, address recipient, uint256 amount) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [VirtualSynthCreated](#virtualsynthcreated)

## Events

### `VirtualSynthCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/ExchangerWithVirtualSynth.sol#L24)</sub>

**Signature**: `VirtualSynthCreated(address vSynth, address synth, bytes32 currencyKey, uint256 amount)`
