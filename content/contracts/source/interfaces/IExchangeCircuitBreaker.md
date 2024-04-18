# IExchangeCircuitBreaker

## Description

**Source:** [contracts/interfaces/IExchangeCircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeCircuitBreaker.sol)

## Views

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeCircuitBreaker.sol#L9)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateWithInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeCircuitBreaker.sol#L11)</sub>

??? example "Details"

    **Signature**

    `rateWithInvalid(bytes32 currencyKey) view returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `rateWithBreakCircuit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeCircuitBreaker.sol#L13)</sub>

??? example "Details"

    **Signature**

    `rateWithBreakCircuit(bytes32 currencyKey) returns (uint256 lastValidRate, bool circuitBroken)`

    **Visibility**

    `external`

    **State Mutability**

    ``
