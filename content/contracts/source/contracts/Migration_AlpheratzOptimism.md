# Migration_AlpheratzOptimism

## Description

**Source:** [contracts/migrations/Migration_AlpheratzOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L21)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L28)</sub>

**Type:** `contract AddressResolver`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L32)</sub>

**Type:** `contract ExchangeState`

### `issuer_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L41)</sub>

**Type:** `contract Issuer`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L56)</sub>

**Type:** `address`

### `new_Issuer_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L60)</sub>

**Type:** `address`

### `new_LiquidatorRewards_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L54)</sub>

**Type:** `address`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L52)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L58)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L50)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L30)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L38)</sub>

**Type:** `contract RewardsDistribution`

### `systemsettings_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L43)</sub>

**Type:** `contract SystemSettings`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L34)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L36)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L64)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L76)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L118)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L132)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L153)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L178)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_3`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L203)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_3()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `issuer_addSynths_15`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L210)</sub>

??? example "Details"

    **Signature**

    `issuer_addSynths_15()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.0-alpha/contracts/migrations/Migration_AlpheratzOptimism.sol#L125)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
