# Migration_Aljanah

## Description

**Source:** [contracts/migrations/Migration_Aljanah.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L21)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L28)</sub>

**Type:** `contract AddressResolver`

### `frozenrewardescrowv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L44)</sub>

**Type:** `contract RewardEscrowV2`

### `new_RewardEscrowV2Frozen_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L57)</sub>

**Type:** `address`

### `new_RewardEscrowV2_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L55)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L53)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L30)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L34)</sub>

**Type:** `contract RewardEscrow`

### `rewardescrowv2_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L42)</sub>

**Type:** `contract RewardEscrowV2`

### `rewardescrowv2storage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L39)</sub>

**Type:** `contract RewardEscrowV2Storage`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L36)</sub>

**Type:** `contract RewardsDistribution`

### `synthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L46)</sub>

**Type:** `contract Synthetix`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L32)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L59)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L61)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L74)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L106)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L120)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L135)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/migrations/Migration_Aljanah.sol#L113)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
