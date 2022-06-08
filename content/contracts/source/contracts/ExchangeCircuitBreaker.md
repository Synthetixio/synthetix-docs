# ExchangeCircuitBreaker

## Description

**Source:** [contracts/ExchangeCircuitBreaker.sol](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol)

## Variables

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L36)</sub>

**Type:** `uint256`

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L33)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L84)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (address)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L72)</sub>

??? example "Details"

    **Signature**

    `isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L80)</sub>

??? example "Details"

    **Signature**

    `lastExchangeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L76)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateWithInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L67)</sub>

??? example "Details"

    **Signature**

    `rateWithInvalid(bytes32 currencyKey) view returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resetLastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L145)</sub>

??? example "Details"

    **Signature**

    `resetLastExchangeRate(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Rates for given synths not valid")](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L148)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L89)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L158)</sub>

??? example "Details"

    **Signature**

    `_isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isRateOutOfBounds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L179)</sub>

??? example "Details"

    **Signature**

    `_isRateOutOfBounds(bytes32 currencyKey, uint256 currentRate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L97)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L93)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `rateWithBreakCircuit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L111)</sub>

??? example "Details"

    **Signature**

    `rateWithBreakCircuit(bytes32 currencyKey) returns (uint256 lastValidRate, bool circuitBroken)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `LastRateOverriden`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/ExchangeCircuitBreaker.sol#L208)</sub>

**Signature**: `LastRateOverriden(bytes32 currencyKey, uint256 previousRate, uint256 newRate)`
