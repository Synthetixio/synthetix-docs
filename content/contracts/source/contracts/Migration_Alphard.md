# Migration_Alphard

## Description

**Source:** [contracts/migrations/Migration_Alphard.sol](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L24)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L31)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L51)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L35)</sub>

**Type:** `contract FeePoolEternalStorage`

### `feepoolstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L38)</sub>

**Type:** `contract FeePoolState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L53)</sub>

**Type:** `contract Issuer`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L62)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L66)</sub>

**Type:** `address`

### `new_SynthetixDebtShare_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L60)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L64)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L33)</sub>

**Type:** `contract Proxy`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L40)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L46)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L48)</sub>

**Type:** `contract RewardsDistribution`

### `synthetixstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L44)</sub>

**Type:** `contract SynthetixState`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L42)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L68)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L70)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L85)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SynthetixDebtShare")](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L86)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L90)

    * [require(..., "Invalid contract supplied for Synthetix")](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L94)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L98)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L142)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L156)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L173)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L198)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L215)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L240)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_19`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L265)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_19()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.1-alpha/contracts/migrations/Migration_Alphard.sol#L149)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
