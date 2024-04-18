# CircuitBreaker

## Description

**Source:** [contracts/CircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L35)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `circuitBroken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L80)</sub>

??? example "Details"

    **Signature**

    `circuitBroken(address oracleAddress) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L68)</sub>

??? example "Details"

    **Signature**

    `isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L64)</sub>

??? example "Details"

    **Signature**

    `isInvalid(address oracleAddress, uint256 value) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L76)</sub>

??? example "Details"

    **Signature**

    `lastValue(address oracleAddress) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L72)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `probeCircuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L98)</sub>

??? example "Details"

    **Signature**

    `probeCircuitBreaker(address oracleAddress, uint256 value) returns (bool circuitBroken)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Oracle address is 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L99)

    **Modifiers**

    * [onlyProbers](#onlyprobers)

### `resetLastValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L126)</sub>

??? example "Details"

    **Signature**

    `resetLastValue(address[] oracleAddresses, uint256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isRateOutOfBounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L155)</sub>

??? example "Details"

    **Signature**

    `_isRateOutOfBounds(address oracleAddress, uint256 current) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L86)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyProbers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L169)</sub>

## Events

### `CircuitBroken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L185)</sub>

**Signature**: `CircuitBroken(address oracleAddress, uint256 previousValue, uint256 newValue)`

### `LastValueOverridden`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CircuitBreaker.sol#L182)</sub>

**Signature**: `LastValueOverridden(address oracleAddress, uint256 previousValue, uint256 newValue)`
