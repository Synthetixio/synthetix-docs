# Migration_AlpheccaOptimism

## Description

**Source:** [contracts/migrations/Migration_AlpheccaOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `exchangerates_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L34)</sub>

**Type:** `contract ExchangeRates`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L43)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L41)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L27)</sub>

**Type:** `contract ProxyERC20`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L31)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L29)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L47)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L56)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L57)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L83)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L97)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L110)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_AlpheccaOptimism.sol#L90)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
