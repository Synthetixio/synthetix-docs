# ICircuitBreaker

## Description

**Source:** [contracts/interfaces/ICircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol)

## Views

### `circuitBroken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L14)</sub>

??? example "Details"

    **Signature**

    `circuitBroken(address oracleAddress) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L10)</sub>

??? example "Details"

    **Signature**

    `isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L6)</sub>

??? example "Details"

    **Signature**

    `isInvalid(address oracleAddress, uint256 value) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L12)</sub>

??? example "Details"

    **Signature**

    `lastValue(address oracleAddress) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L8)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `probeCircuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L19)</sub>

??? example "Details"

    **Signature**

    `probeCircuitBreaker(address oracleAddress, uint256 value) returns (bool circuitBroken)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resetLastValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICircuitBreaker.sol#L17)</sub>

??? example "Details"

    **Signature**

    `resetLastValue(address[] oracleAddresses, uint256[] values)`

    **Visibility**

    `external`

    **State Mutability**

    ``
