# Migration_AlsephinaOptimism

## Description

**Source:** [contracts/migrations/Migration_AlsephinaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L19)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L26)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L32)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L28)</sub>

**Type:** `contract ExchangeState`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L41)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L45)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L43)</sub>

**Type:** `address`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L34)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L30)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L47)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L49)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L59)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L61)

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L62)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L63)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L100)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L115)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L128)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.58.0/contracts/migrations/Migration_AlsephinaOptimism.sol#L107)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
