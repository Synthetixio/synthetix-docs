# Migration_Mirach

## Description

**Source:** [contracts/migrations/Migration_Mirach.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L23)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L30)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L45)</sub>

**Type:** `contract ExchangeRatesWithDexPricing`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L34)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L48)</sub>

**Type:** `contract Issuer`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L57)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L63)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L65)</sub>

**Type:** `address`

### `new_SynthetixBridgeToOptimism_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L67)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L61)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L59)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L32)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L40)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L42)</sub>

**Type:** `contract RewardsDistribution`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L50)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L36)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L38)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L69)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L71)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L85)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L177)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L191)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L212)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L237)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_44`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L257)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_44()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0/contracts/migrations/Migration_Mirach.sol#L184)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
