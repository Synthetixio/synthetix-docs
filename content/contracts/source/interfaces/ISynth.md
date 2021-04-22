# ISynth

## Description

**Source:** [contracts/interfaces/ISynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol)

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L20)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L6)</sub>

??? example "Details"

    **Signature**

    `currencyKey() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L22)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L11)</sub>

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferFromAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/ISynth.sol#L8)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
