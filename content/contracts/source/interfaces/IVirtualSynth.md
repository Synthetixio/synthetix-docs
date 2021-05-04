# IVirtualSynth

## Description

**Source:** [contracts/interfaces/IVirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol)

## External Functions

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L7)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L9)</sub>

??? example "Details"

    **Signature**

    `rate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L20)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L15)</sub>

??? example "Details"

    **Signature**

    `settled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0-alpha/contracts/interfaces/IVirtualSynth.sol#L17)</sub>

??? example "Details"

    **Signature**

    `synth() view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
