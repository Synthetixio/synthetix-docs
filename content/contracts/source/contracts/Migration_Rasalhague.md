# Migration_Rasalhague

## Description

**Source:** [contracts/migrations/Migration_Rasalhague.sol](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L18)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L25)</sub>

**Type:** `contract AddressResolver`

### `new_Synthetix_contract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L41)</sub>

**Type:** `address`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L27)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L31)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L33)</sub>

**Type:** `contract RewardsDistribution`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L29)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L45)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L54)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L76)</sub>

??? example "Details"

    **Signature**

    `acceptAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_importAddresses_0`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L90)</sub>

??? example "Details"

    **Signature**

    `addressresolver_importAddresses_0()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `addressresolver_rebuildCaches_1`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L101)</sub>

??? example "Details"

    **Signature**

    `addressresolver_rebuildCaches_1()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `nominateAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.1/contracts/migrations/Migration_Rasalhague.sol#L83)</sub>

??? example "Details"

    **Signature**

    `nominateAll()`

    **Visibility**

    `internal`

    **State Mutability**

    ``
