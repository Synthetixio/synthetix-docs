# Migration_AlphardOptimism

## Description

**Source:** [contracts/migrations/Migration_AlphardOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L23)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L30)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L44)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L34)</sub>

**Type:** `contract FeePoolEternalStorage`

### `feepoolstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L36)</sub>

**Type:** `contract FeePoolState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L46)</sub>

**Type:** `contract Issuer`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L55)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L59)</sub>

**Type:** `address`

### `new_SynthetixDebtShare_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L53)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L57)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L32)</sub>

**Type:** `contract Proxy`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L38)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L42)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L40)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L61)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L63)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L76)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SynthetixDebtShare")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L77)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L78)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L79)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L112)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L127)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L142)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L167)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L193)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_16`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L219)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_16()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/migrations/Migration_AlphardOptimism.sol#L119)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
