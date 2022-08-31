# Migration_AspidiskeOptimism

## Description

**Source:** [contracts/migrations/Migration_AspidiskeOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L21)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L28)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L42)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L60)</sub>

**Type:** `address`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L58)</sub>

**Type:** `address`

### `new_RewardEscrowV2Storage_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L56)</sub>

**Type:** `address`

### `new_RewardEscrowV2_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L52)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L54)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L30)</sub>

**Type:** `contract ProxyERC20`

### `rewardescrowv2frozen_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L44)</sub>

**Type:** `contract BaseRewardEscrowV2`

### `rewardescrowv2storage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L39)</sub>

**Type:** `contract RewardEscrowV2Storage`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L36)</sub>

**Type:** `contract RewardsDistribution`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L32)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L34)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L64)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L76)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for RewardEscrowV2Storage")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L77)

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L81)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L85)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L123)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L137)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_11`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L179)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_11()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L156)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_15`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L190)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_15()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L130)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
