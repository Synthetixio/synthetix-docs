# Migration_Kaus

## Description

**Source:** [contracts/migrations/Migration_Kaus.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L16)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L23)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L27)</sub>

**Type:** `contract Issuer`

### `new_DebtCache_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L36)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L38)</sub>

**Type:** `address`

### `new_ProxySynthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L34)</sub>

**Type:** `address`

### `new_ProxysUSD_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L40)</sub>

**Type:** `address`

### `synthetixstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L25)</sub>

**Type:** `contract SynthetixState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L42)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L44)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L51)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L52)

    * [require(..., "Invalid contract supplied for DebtCache")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L54)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L58)

    **Modifiers**

    * [onlyDeployer](#onlydeployer)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L82)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L96)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L113)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L138)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_6`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L148)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_6()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1/contracts/migrations/Migration_Kaus.sol#L89)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
