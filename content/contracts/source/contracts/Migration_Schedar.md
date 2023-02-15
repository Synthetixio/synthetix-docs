# Migration_Schedar

## Description

**Source:** [contracts/migrations/Migration_Schedar.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L38)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L31)</sub>

**Type:** `contract FeePoolEternalStorage`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L40)</sub>

**Type:** `contract Issuer`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L47)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L49)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L29)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L36)</sub>

**Type:** `contract RewardEscrow`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L34)</sub>

**Type:** `contract SystemStatus`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L51)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L53)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L64)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L65)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L69)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L103)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L117)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L130)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L155)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L169)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L194)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_11`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L219)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_11()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/migrations/Migration_Schedar.sol#L110)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
