# IVirtualSynth

## Description

**Source:** [contracts/interfaces/IVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol)

## External Functions

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L10)</sub>

??? example "Details"

    **Signature**

    `rate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L12)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L14)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L21)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L16)</sub>

??? example "Details"

    **Signature**

    `settled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.2/contracts/interfaces/IVirtualSynth.sol#L18)</sub>

??? example "Details"

    **Signature**

    `synth() view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
