# Migration_Aspidiske

## Description

**Source:** [contracts/migrations/Migration_Aspidiske.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L23)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L30)</sub>

**Type:** `contract AddressResolver`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L51)</sub>

**Type:** `contract Issuer`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L66)</sub>

**Type:** `address`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L64)</sub>

**Type:** `address`

### `new_RewardEscrowV2Storage_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L60)</sub>

**Type:** `address`

### `new_RewardEscrowV2_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L58)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L62)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L32)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L38)</sub>

**Type:** `contract RewardEscrow`

### `rewardescrowv2frozen_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L48)</sub>

**Type:** `contract BaseRewardEscrowV2`

### `rewardescrowv2storage_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L45)</sub>

**Type:** `contract RewardEscrowV2Storage`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L40)</sub>

**Type:** `contract RewardsDistribution`

### `synthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L43)</sub>

**Type:** `contract Synthetix`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L34)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L36)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L68)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L70)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L84)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for RewardEscrowV2Storage")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L85)

    * [require(..., "Invalid contract supplied for Synthetix")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L89)

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L93)

    * [require(..., "Invalid contract supplied for Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L97)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L141)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L155)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_13`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L214)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_13()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L174)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L199)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_18`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L225)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_18()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/migrations/Migration_Aspidiske.sol#L148)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
