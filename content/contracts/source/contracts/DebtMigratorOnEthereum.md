# DebtMigratorOnEthereum

## Description

**Source:** [contracts/DebtMigratorOnEthereum.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L27)</sub>

**Type:** `bool`

### `minimumEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L28)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L32)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L23)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L69)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L169)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L170)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `setMinimumEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L157)</sub>

??? example "Details"

    **Signature**

    `setMinimumEscrowDuration(uint256 _duration)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L158)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumEscrowDurationUpdated](#minimumescrowdurationupdated)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L163)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L164)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `_initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L56)</sub>

??? example "Details"

    **Signature**

    `_initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L57)

### `_liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L40)</sub>

??? example "Details"

    **Signature**

    `_liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L44)</sub>

??? example "Details"

    **Signature**

    `_liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L88)</sub>

??? example "Details"

    **Signature**

    `_migrateDebt(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot migrate if open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L90)

    * [require(..., "No debt to migrate")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L98)

    * [require(..., "Cannot migrate zero balances")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L109)

    * [require(..., "Debt Migrator On Optimism not set")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L110)

    * [require(..., "Debt share balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L119)

    * [require(..., "SNX balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L120)

    * [require(..., "Escrow balanace is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L121)

    * [require(..., "Earned balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L122)

    **Emits**

    * [MigrationInitiated](#migrationinitiated)

### `_synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L48)</sub>

??? example "Details"

    **Signature**

    `_synthetixBridgeToOptimism() view returns (contract ISynthetixBridgeToOptimism)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L52)</sub>

??? example "Details"

    **Signature**

    `_synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L83)</sub>

??? example "Details"

    **Signature**

    `migrateDebt(address account)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be the account owner")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L84)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L177)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L188)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L186)</sub>

**Signature**: `InitiationSuspended()`

### `MigrationInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L190)</sub>

**Signature**: `MigrationInitiated(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`

### `MinimumEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/DebtMigratorOnEthereum.sol#L184)</sub>

**Signature**: `MinimumEscrowDurationUpdated(uint256 duration)`
