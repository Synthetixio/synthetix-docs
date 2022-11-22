# Migration_Alphecca

## Description

**Source:** [contracts/migrations/Migration_Alphecca.sol](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `new_Liquidator_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L43)</sub>

**Type:** `address`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L41)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L27)</sub>

**Type:** `contract ProxyERC20`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L31)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L33)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L29)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L45)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L47)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L56)</sub>

??? example "Details"

    **Signature**

    `migrate()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid contract supplied for Synthetix")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L57)

    * [require(..., "Invalid contract supplied for Liquidator")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L61)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `acceptAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L87)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L101)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L114)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/migrations/Migration_Alphecca.sol#L94)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
