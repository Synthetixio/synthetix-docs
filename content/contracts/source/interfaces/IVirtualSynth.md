# IVirtualSynth

## Description

**Source:** [contracts/interfaces/IVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol)

## Views

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L10)</sub>

??? example "Details"

    **Signature**

    `rate() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L12)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L14)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L16)</sub>

??? example "Details"

    **Signature**

    `settled() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L18)</sub>

??? example "Details"

    **Signature**

    `synth() returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IVirtualSynth.sol#L21)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
