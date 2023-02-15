# Migration_Mintaka

## Description

**Source:** [contracts/migrations/Migration_Mintaka.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L14)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L21)</sub>

**Type:** `contract AddressResolver`

### `new_FuturesMarketManager_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L28)</sub>

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L30)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L32)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L37)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for FuturesMarketManager")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L38)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L56)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L70)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L81)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Mintaka.sol#L63)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
