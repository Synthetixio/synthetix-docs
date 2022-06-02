# Migration_Hamal

## Description

**Source:** [contracts/migrations/Migration_Hamal.sol](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L19)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L26)</sub>

**Type:** `contract AddressResolver`

### `new_SupplySchedule_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L46)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L44)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L28)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L32)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L36)</sub>

**Type:** `contract RewardsDistribution`

### `supplyschedule_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L34)</sub>

**Type:** `contract SupplySchedule`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L30)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L48)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L50)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L60)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Synthetix")](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L61)

    * [require(..., "Invalid contract supplied for SupplySchedule")](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L65)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L93)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L107)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L120)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.71.1-alpha/contracts/migrations/Migration_Hamal.sol#L100)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
