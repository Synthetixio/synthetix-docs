# VirtualSynth

## Description

**Source:** [contracts/VirtualSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol)

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L37)</sub>

**Type:** `bytes32`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L29)</sub>

**Type:** `uint8`

### `initialSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L32)</sub>

**Type:** `uint256`

### `initialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L39)</sub>

**Type:** `bool`

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L25)</sub>

**Type:** `contract IAddressResolver`

### `settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L27)</sub>

**Type:** `bool`

### `settledAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L35)</sub>

**Type:** `uint256`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L24)</sub>

**Type:** `contract IERC20`

## Views

### `balanceOfUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L134)</sub>

??? example "Details"

    **Signature**

    `balanceOfUnderlying(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L119)</sub>

??? example "Details"

    **Signature**

    `name() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L128)</sub>

??? example "Details"

    **Signature**

    `rate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `readyToSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L142)</sub>

??? example "Details"

    **Signature**

    `readyToSettle() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `secsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L138)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L123)</sub>

??? example "Details"

    **Signature**

    `symbol() view returns (string)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `balanceUnderlying`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L98)</sub>

??? example "Details"

    **Signature**

    `balanceUnderlying(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `calcRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L75)</sub>

??? example "Details"

    **Signature**

    `calcRate() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L67)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `secsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L71)</sub>

??? example "Details"

    **Signature**

    `secsLeft() view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `settleSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L104)</sub>

??? example "Details"

    **Signature**

    `settleSynth()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [Settled](#settled)

## External Functions

### `initialize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L41)</sub>

??? example "Details"

    **Signature**

    `initialize(contract IERC20 _synth, contract IAddressResolver _resolver, address _recipient, uint256 _amount, bytes32 _currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "vSynth already initialized")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L48)

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L150)</sub>

??? example "Details"

    **Signature**

    `settle(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `Settled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/VirtualSynth.sol#L158)</sub>

**Signature**: `Settled(uint256 totalSupply, uint256 amountAfterSettled)`
