# Migration_Alsephina

## Description

**Source:** [contracts/migrations/Migration_Alsephina.sol](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L31)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L27)</sub>

**Type:** `contract ExchangeState`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L45)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L47)</sub>

**Type:** `address`

### `new_SystemSettingsLib_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L41)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L43)</sub>

**Type:** `address`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L34)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L29)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L51)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L60)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L61)

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L63)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L67)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L71)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L137)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L151)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L166)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L191)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.59.0/contracts/migrations/Migration_Alsephina.sol#L144)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
