# Migration_Muhlifain

## Description

**Source:** [contracts/migrations/Migration_Muhlifain.sol](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L31)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L27)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L34)</sub>

**Type:** `contract Issuer`

### `new_CircuitBreaker_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L45)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L41)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L43)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L47)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L29)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L51)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L60)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L61)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L65)

    * [require(..., "Invalid contract supplied for CircuitBreaker")](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L69)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L73)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L155)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L169)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L186)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L211)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_36`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L232)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_36()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.1/contracts/migrations/Migration_Muhlifain.sol#L162)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
