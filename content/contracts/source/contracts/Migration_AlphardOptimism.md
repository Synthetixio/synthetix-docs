# Migration_AlphardOptimism

## Description

**Source:** [contracts/migrations/Migration_AlphardOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L22)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L29)</sub>

**Type:** `contract AddressResolver`

### `feepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L45)</sub>

**Type:** `contract FeePool`

### `feepooleternalstorage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L33)</sub>

**Type:** `contract FeePoolEternalStorage`

### `feepoolstate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L36)</sub>

**Type:** `contract FeePoolState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L47)</sub>

**Type:** `contract Issuer`

### `new_FeePool_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L56)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L60)</sub>

**Type:** `address`

### `new_SynthetixDebtShare_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L54)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L58)</sub>

**Type:** `address`

### `proxyfeepool_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L31)</sub>

**Type:** `contract Proxy`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L38)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L42)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L40)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L64)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SynthetixDebtShare")](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L78)

    * [require(..., "Invalid contract supplied for FeePool")](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L82)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L86)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L122)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L136)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L153)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L177)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `importFeePeriod_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L202)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_16`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L227)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_16()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.72.0-alpha/contracts/migrations/Migration_AlphardOptimism.sol#L129)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
