# Migration_Tiaki

## Description

**Source:** [contracts/migrations/Migration_Tiaki.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L15)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L22)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L24)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L32)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L34)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L36)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L42)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L43)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L117)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L131)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L142)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_Tiaki.sol#L124)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
