# ExchangeCircuitBreaker

## Description

**Source:** [contracts/ExchangeCircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol)

## Variables

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L36)</sub>

**Type:** `uint256`

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L33)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L41)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L52)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `rateWithInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L61)</sub>

??? example "Details"

    **Signature**

    `rateWithInvalid(bytes32 currencyKey) view returns (uint256 rate, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L45)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## External Functions

### `rateWithBreakCircuit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeCircuitBreaker.sol#L71)</sub>

??? example "Details"

    **Signature**

    `rateWithBreakCircuit(bytes32 currencyKey) returns (uint256 lastValidRate, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``
