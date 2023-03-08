# DebtMigratorOnEthereum

## Description

**Source:** [contracts/DebtMigratorOnEthereum.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L30)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L34)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L26)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `debtTransferSent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L90)</sub>

??? example "Details"

    **Signature**

    `debtTransferSent() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L79)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L179)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L180)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L173)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L174)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `_initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L58)</sub>

??? example "Details"

    **Signature**

    `_initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L59)

### `_liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L42)</sub>

??? example "Details"

    **Signature**

    `_liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L46)</sub>

??? example "Details"

    **Signature**

    `_liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L104)</sub>

??? example "Details"

    **Signature**

    `_migrateDebt(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot migrate if open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L106)

    * [require(..., "No debt to migrate")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L114)

    * [require(..., "Cannot migrate zero balances")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L125)

    * [require(..., "Debt Migrator On Optimism not set")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L126)

    * [require(..., "Debt share balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L135)

    * [require(..., "SNX balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L136)

    * [require(..., "Escrow balanace is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L137)

    * [require(..., "Earned balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L138)

    **Emits**

    * [MigrationInitiated](#migrationinitiated)

### `_synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L50)</sub>

??? example "Details"

    **Signature**

    `_synthetixBridgeToOptimism() view returns (contract ISynthetixBridgeToOptimism)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L54)</sub>

??? example "Details"

    **Signature**

    `_synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L99)</sub>

??? example "Details"

    **Signature**

    `migrateDebt(address account)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be the account owner")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L100)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L187)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L196)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L194)</sub>

**Signature**: `InitiationSuspended()`

### `MigrationInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/DebtMigratorOnEthereum.sol#L198)</sub>

**Signature**: `MigrationInitiated(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`
