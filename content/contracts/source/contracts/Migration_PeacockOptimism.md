# Migration_PeacockOptimism

## Description

**Source:** [contracts/migrations/Migration_PeacockOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L37)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L31)</sub>

**Type:** `contract FeePoolEternalStorage`

### `feepoolstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L33)</sub>

**Type:** `contract FeePoolState`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L44)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L29)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L35)</sub>

**Type:** `contract RewardEscrow`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L46)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L48)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L59)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L61)

    **Modifiers**

    * [onlyDeployer](#onlydeployer)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L88)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L103)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L112)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L131)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L158)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.1-alpha/contracts/migrations/Migration_PeacockOptimism.sol#L95)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
