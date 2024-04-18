# DebtMigratorOnOptimism

## Description

**Source:** [contracts/DebtMigratorOnOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L12)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L22)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeDebtMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L88)</sub>

??? example "Details"

    **Signature**

    `finalizeDebtMigration(address account, uint256 debtSharesMigrated, uint256 escrowMigrated, uint256 liquidSnxMigrated, bytes debtPayload)`

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L33)</sub>

??? example "Details"

    **Signature**

    `_counterpart() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyAllowFromCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L75)</sub>

??? example "Details"

    **Signature**

    `_onlyAllowFromCounterpart() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not the messenger")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L77)

    * [require(..., "L1 sender is not the debt migrator")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L78)

## Modifiers

### `onlyCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L81)</sub>

## Events

### `MigrationFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnOptimism.sol#L111)</sub>

**Signature**: `MigrationFinalized(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`
