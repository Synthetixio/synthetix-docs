# Migration_PeacockOptimism

## Description

**Source:** [contracts/migrations/Migration_PeacockOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L19)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L26)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L34)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L30)</sub>

**Type:** `contract FeePoolEternalStorage`

### `feepoolstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L32)</sub>

**Type:** `contract FeePoolState`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L41)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L28)</sub>

**Type:** `contract Proxy`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L54)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L55)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L57)

    **Modifiers**

    * [onlyDeployer](#onlydeployer)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L82)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L97)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L106)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L123)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L150)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/migrations/Migration_PeacockOptimism.sol#L89)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
