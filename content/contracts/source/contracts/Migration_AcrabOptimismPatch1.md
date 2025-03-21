# Migration_AcrabOptimismPatch1

## Description

**Source:** [contracts/migrations/Migration_AcrabOptimismPatch1.sol](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L17)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L38)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L26)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L30)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L28)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L40)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L42)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L50)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L72)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L86)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L97)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L108)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/migrations/Migration_AcrabOptimismPatch1.sol#L79)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
