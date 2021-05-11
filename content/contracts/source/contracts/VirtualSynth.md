# VirtualSynth

## Description

**Source:** [contracts/VirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol)

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L40)</sub>

**Type:** `bytes32`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L32)</sub>

**Type:** `uint8`

### `initialSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L35)</sub>

**Type:** `uint256`

### `initialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L42)</sub>

**Type:** `bool`

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L28)</sub>

**Type:** `contract IAddressResolver`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L30)</sub>

**Type:** `bool`

### `settledAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L38)</sub>

**Type:** `uint256`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L27)</sub>

**Type:** `contract IERC20`

## Internal Functions

### `balanceUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L101)</sub>

??? example "Details"

    **Signature**

    `balanceUnderlying(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `calcRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L78)</sub>

??? example "Details"

    **Signature**

    `calcRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `secsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L74)</sub>

??? example "Details"

    **Signature**

    `secsLeft() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `settleSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L107)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L137)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `initialize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L44)</sub>

??? example "Details"

    **Signature**

    `initialize(contract IERC20 _synth, contract IAddressResolver _resolver, address _recipient, uint256 _amount, bytes32 _currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "vSynth already initialized")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L51)

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L122)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L131)</sub>

??? example "Details"

    **Signature**

    `rate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L145)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L141)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L153)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L126)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Events

### `Settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/VirtualSynth.sol#L161)</sub>

**Signature**: `Settled(uint256 totalSupply, uint256 amountAfterSettled)`
