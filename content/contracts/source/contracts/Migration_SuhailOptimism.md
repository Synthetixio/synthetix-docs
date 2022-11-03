# Migration_SuhailOptimism

## Description

**Source:** [contracts/migrations/Migration_SuhailOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L31)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L27)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L33)</sub>

**Type:** `contract Issuer`

### `new_DirectIntegrationManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L48)</sub>

**Type:** `address`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L42)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L44)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L46)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L40)</sub>

**Type:** `address`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L29)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L50)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L52)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L61)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L62)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L66)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L70)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L74)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L140)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L154)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L173)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L198)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L223)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_30`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L229)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_30()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/migrations/Migration_SuhailOptimism.sol#L147)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
