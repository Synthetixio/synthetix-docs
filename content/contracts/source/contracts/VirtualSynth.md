# VirtualSynth

## Description

**Source:** [contracts/VirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol)

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L37)</sub>

**Type:** `bytes32`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L29)</sub>

**Type:** `uint8`

### `initialSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L32)</sub>

**Type:** `uint256`

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L25)</sub>

**Type:** `contract IAddressResolver`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L27)</sub>

**Type:** `bool`

### `settledAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L35)</sub>

**Type:** `uint256`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L24)</sub>

**Type:** `contract IERC20`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L39)</sub>

??? example "Details"

    **Signature**

    `constructor(contract IERC20 _synth, contract IAddressResolver _resolver, address _recipient, uint256 _amount, bytes32 _currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Internal Functions

### `balanceUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L90)</sub>

??? example "Details"

    **Signature**

    `balanceUnderlying(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `calcRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L67)</sub>

??? example "Details"

    **Signature**

    `calcRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L59)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `secsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L63)</sub>

??? example "Details"

    **Signature**

    `secsLeft() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `settleSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L96)</sub>

??? example "Details"

    **Signature**

    `settleSynth()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Emits**

    * [Settled](#settled)

## External Functions

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L126)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L111)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L120)</sub>

??? example "Details"

    **Signature**

    `rate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L134)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L130)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L142)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L115)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Events

### `Settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/VirtualSynth.sol#L150)</sub>

**Signature**: `Settled(uint256 totalSupply, uint256 amountAfterSettled)`
