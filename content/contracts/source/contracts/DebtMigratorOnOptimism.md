# DebtMigratorOnOptimism

## Description

**Source:** [contracts/DebtMigratorOnOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L12)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L22)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeDebtMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L70)</sub>

??? example "Details"

    **Signature**

    `finalizeDebtMigration(address account, uint256 debtSharesMigrated, uint256 escrowMigrated, uint256 liquidSnxMigrated, bytes debtPayload, bytes escrowPayload)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [MigrationFinalized](#migrationfinalized)

## Internal Functions

### `_counterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L33)</sub>

??? example "Details"

    **Signature**

    `_counterpart() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyAllowFromCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L57)</sub>

??? example "Details"

    **Signature**

    `_onlyAllowFromCounterpart() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not the messenger")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L59)

    * [require(..., "L1 sender is not the debt migrator")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L60)

## Modifiers

### `onlyCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L63)</sub>

## Events

### `MigrationFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnOptimism.sol#L96)</sub>

**Signature**: `MigrationFinalized(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`
