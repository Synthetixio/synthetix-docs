# Migration_AlpheccaOptimism

## Description

**Source:** [contracts/migrations/Migration_AlpheccaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L40)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L38)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L26)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L30)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L28)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L42)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L44)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L52)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L53)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L91)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L104)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.5/contracts/migrations/Migration_AlpheccaOptimism.sol#L84)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
