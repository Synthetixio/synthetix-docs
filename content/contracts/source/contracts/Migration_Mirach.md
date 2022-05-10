# Migration_Mirach

## Description

**Source:** [contracts/migrations/Migration_Mirach.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L28)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L41)</sub>

**Type:** `address`

### `new_SynthetixBridgeToOptimism_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L39)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L37)</sub>

**Type:** `address`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L30)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L26)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L45)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L53)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L54)

    * [require(..., "Invalid contract supplied for SynthetixBridgeToOptimism")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L58)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L62)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L88)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L102)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L117)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L142)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_7`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L152)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_7()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L95)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `systemsettings_setExchangeFeeRateForSynths_8`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/migrations/Migration_Mirach.sol#L168)</sub>

??? example "Details"

    **Signature**

    `systemsettings_setExchangeFeeRateForSynths_8()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
