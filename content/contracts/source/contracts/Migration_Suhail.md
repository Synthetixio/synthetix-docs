# Migration_Suhail

## Description

**Source:** [contracts/migrations/Migration_Suhail.sol](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L31)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L27)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L34)</sub>

**Type:** `contract Issuer`

### `new_DirectIntegrationManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L49)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L43)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L45)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L47)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L41)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L29)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L51)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L53)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L62)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L63)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L67)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L71)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L75)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L157)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L171)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L190)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L215)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_37`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L238)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_37()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Suhail.sol#L164)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
