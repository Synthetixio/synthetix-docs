# Migration_Alpheratz

## Description

**Source:** [contracts/migrations/Migration_Alpheratz.sol](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L22)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L29)</sub>

**Type:** `contract AddressResolver`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L33)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L44)</sub>

**Type:** `contract Issuer`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L59)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L63)</sub>

**Type:** `address`

### `new_LiquidatorRewards_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L55)</sub>

**Type:** `address`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L57)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L61)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L53)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L31)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L39)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L41)</sub>

**Type:** `contract RewardsDistribution`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L46)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L35)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L37)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L65)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L67)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L80)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L118)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L132)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L153)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L178)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_15`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L197)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_15()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.82.2/contracts/migrations/Migration_Alpheratz.sol#L125)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
