# Migration_AspidiskeOptimism

## Description

**Source:** [contracts/migrations/Migration_AspidiskeOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L22)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L29)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L48)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L63)</sub>

**Type:** `address`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L59)</sub>

**Type:** `address`

### `new_RewardEscrowV2Storage_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L57)</sub>

**Type:** `address`

### `new_RewardEscrowV2_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L61)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L55)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L31)</sub>

**Type:** `contract ProxyERC20`

### `rewardescrowv2frozen_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L45)</sub>

**Type:** `contract BaseRewardEscrowV2`

### `rewardescrowv2storage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L42)</sub>

**Type:** `contract RewardEscrowV2Storage`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L37)</sub>

**Type:** `contract RewardsDistribution`

### `synthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L40)</sub>

**Type:** `contract MintableSynthetix`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L33)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L35)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L65)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L67)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L80)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for RewardEscrowV2Storage")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L81)

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L85)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L89)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L131)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L145)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_12`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L200)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_12()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L164)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L189)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_17`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L211)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_17()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/migrations/Migration_AspidiskeOptimism.sol#L138)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
