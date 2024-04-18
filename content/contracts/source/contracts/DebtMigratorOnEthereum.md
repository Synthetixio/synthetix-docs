# DebtMigratorOnEthereum

## Description

**Source:** [contracts/DebtMigratorOnEthereum.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L27)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L31)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L23)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L68)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L152)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L153)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L146)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L147)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `_initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L55)</sub>

??? example "Details"

    **Signature**

    `_initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L56)

### `_liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L39)</sub>

??? example "Details"

    **Signature**

    `_liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L43)</sub>

??? example "Details"

    **Signature**

    `_liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L87)</sub>

??? example "Details"

    **Signature**

    `_migrateDebt(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot migrate if open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L89)

    * [require(..., "No debt to migrate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L97)

    * [require(..., "Cannot migrate zero balances")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L108)

    * [require(..., "Debt Migrator On Optimism not set")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L109)

    * [require(..., "Debt share balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L118)

    * [require(..., "SNX balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L119)

    * [require(..., "Escrow balanace is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L120)

    * [require(..., "Earned balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L121)

    **Emits**

    * [MigrationInitiated](#migrationinitiated)

### `_synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_synthetixBridgeToOptimism() view returns (contract ISynthetixBridgeToOptimism)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L51)</sub>

??? example "Details"

    **Signature**

    `_synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L82)</sub>

??? example "Details"

    **Signature**

    `migrateDebt(address account)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be the account owner")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L83)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L160)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L169)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L167)</sub>

**Signature**: `InitiationSuspended()`

### `MigrationInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DebtMigratorOnEthereum.sol#L171)</sub>

**Signature**: `MigrationInitiated(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`
