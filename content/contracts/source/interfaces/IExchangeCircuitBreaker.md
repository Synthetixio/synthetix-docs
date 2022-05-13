# IExchangeCircuitBreaker

## Description

**Source:** [contracts/interfaces/IExchangeCircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol)

## Views

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L7)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L13)</sub>

??? example "Details"

    **Signature**

    `isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L15)</sub>

??? example "Details"

    **Signature**

    `lastExchangeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L11)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateWithInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L9)</sub>

??? example "Details"

    **Signature**

    `rateWithInvalid(bytes32 currencyKey) view returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `rateWithBreakCircuit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L20)</sub>

??? example "Details"

    **Signature**

    `rateWithBreakCircuit(bytes32 currencyKey) returns (uint256 lastValidRate, bool circuitBroken)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resetLastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IExchangeCircuitBreaker.sol#L18)</sub>

??? example "Details"

    **Signature**

    `resetLastExchangeRate(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``
