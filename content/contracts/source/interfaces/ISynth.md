# ISynth

## Description

**Source:** [contracts/interfaces/ISynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol)

## Views

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L7)</sub>

??? example "Details"

    **Signature**

    `currencyKey() returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L9)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L21)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L23)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L12)</sub>

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transferFromAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/interfaces/ISynth.sol#L14)</sub>

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
