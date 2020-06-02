# ISynth

## Description

**Source:** [contracts/interfaces/ISynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol)

## Views

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L6)</sub>

??? example "Details"

    **Signature**

    `currencyKey()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L20)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L22)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFromAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
