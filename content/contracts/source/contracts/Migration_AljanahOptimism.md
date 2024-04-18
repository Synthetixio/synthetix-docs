# Migration_AljanahOptimism

## Description

**Source:** [contracts/migrations/Migration_AljanahOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `frozenrewardescrowv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L42)</sub>

**Type:** `contract ImportableRewardEscrowV2`

### `new_RewardEscrowV2Frozen_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L56)</sub>

**Type:** `address`

### `new_RewardEscrowV2_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L52)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L54)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L29)</sub>

**Type:** `contract ProxyERC20`

### `rewardescrowv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L39)</sub>

**Type:** `contract ImportableRewardEscrowV2`

### `rewardescrowv2storage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L36)</sub>

**Type:** `contract RewardEscrowV2Storage`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L33)</sub>

**Type:** `contract RewardsDistribution`

### `synthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L45)</sub>

**Type:** `contract MintableSynthetix`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L31)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L60)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L72)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L104)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L118)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L133)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_AljanahOptimism.sol#L111)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
