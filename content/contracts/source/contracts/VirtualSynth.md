# VirtualSynth

## Description

**Source:** [contracts/VirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

## Constants

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L29)</sub>

**Type:** `uint8`

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L37)</sub>

**Type:** `bytes32`

### `initialSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L32)</sub>

**Type:** `uint256`

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L25)</sub>

**Type:** `contract IAddressResolver`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L27)</sub>

**Type:** `bool`

### `settledAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L35)</sub>

**Type:** `uint256`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L24)</sub>

**Type:** `contract IERC20`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L39)</sub>

??? example "Details"

    **Signature**

    `(contract IERC20 _synth, contract IAddressResolver _resolver, address _recipient, uint256 _amount, bytes32 _currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L126)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L111)</sub>

??? example "Details"

    **Signature**

    `name() returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L120)</sub>

??? example "Details"

    **Signature**

    `rate() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L134)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L130)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L115)</sub>

??? example "Details"

    **Signature**

    `symbol() returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `balanceUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L90)</sub>

??? example "Details"

    **Signature**

    `balanceUnderlying(address account) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `calcRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L67)</sub>

??? example "Details"

    **Signature**

    `calcRate() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L59)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `secsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L63)</sub>

??? example "Details"

    **Signature**

    `secsLeft() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `settleSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L96)</sub>

??? example "Details"

    **Signature**

    `settleSynth()`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Settled](#settled)

## External Functions

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L142)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Events

### `Settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.2/contracts/VirtualSynth.sol#L150)</sub>

**Signature**: `Settled(uint256 totalSupply, uint256 amountAfterSettled)`
