# Migration_MenkentOptimism

## Description

**Source:** [contracts/migrations/Migration_MenkentOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L20)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L27)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L38)</sub>

**Type:** `contract ExchangeRates`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L31)</sub>

**Type:** `contract ExchangeState`

### `new_ExchangeRates_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L49)</sub>

**Type:** `address`

### `new_Exchanger_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L53)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L51)</sub>

**Type:** `address`

### `new_SystemSettings_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L47)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L29)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L35)</sub>

**Type:** `contract RewardsDistribution`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L40)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L33)</sub>

**Type:** `contract TokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L55)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L57)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L68)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for SystemSettings")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L69)

    * [require(..., "Invalid contract supplied for ExchangeRates")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L73)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L77)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L143)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L157)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L174)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L199)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_2()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/migrations/Migration_MenkentOptimism.sol#L150)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
