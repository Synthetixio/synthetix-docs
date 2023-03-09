# DebtMigratorOnEthereum

## Description

**Source:** [contracts/DebtMigratorOnEthereum.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L27)</sub>

**Type:** `bool`

### `minimumEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L28)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L32)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L23)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L77)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L177)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L178)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `setMinimumEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L165)</sub>

??? example "Details"

    **Signature**

    `setMinimumEscrowDuration(uint256 _duration)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be greater than zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L166)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumEscrowDurationUpdated](#minimumescrowdurationupdated)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L171)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L172)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `_initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L56)</sub>

??? example "Details"

    **Signature**

    `_initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L57)

### `_liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L40)</sub>

??? example "Details"

    **Signature**

    `_liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L44)</sub>

??? example "Details"

    **Signature**

    `_liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L96)</sub>

??? example "Details"

    **Signature**

    `_migrateDebt(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot migrate if open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L98)

    * [require(..., "No debt to migrate")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L106)

    * [require(..., "Cannot migrate zero balances")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L117)

    * [require(..., "Debt Migrator On Optimism not set")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L118)

    * [require(..., "Debt share balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L127)

    * [require(..., "SNX balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L128)

    * [require(..., "Escrow balanace is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L129)

    * [require(..., "Earned balance is not zero")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L130)

    **Emits**

    * [MigrationInitiated](#migrationinitiated)

### `_synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L48)</sub>

??? example "Details"

    **Signature**

    `_synthetixBridgeToOptimism() view returns (contract ISynthetixBridgeToOptimism)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L52)</sub>

??? example "Details"

    **Signature**

    `_synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L91)</sub>

??? example "Details"

    **Signature**

    `migrateDebt(address account)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be the account owner")](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L92)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Modifiers

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L185)</sub>

## Events

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L196)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L194)</sub>

**Signature**: `InitiationSuspended()`

### `MigrationInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L198)</sub>

**Signature**: `MigrationInitiated(address account, uint256 totalDebtSharesMigrated, uint256 totalEscrowMigrated, uint256 totalLiquidBalanceMigrated)`

### `MinimumEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.1-alpha/contracts/DebtMigratorOnEthereum.sol#L192)</sub>

**Signature**: `MinimumEscrowDurationUpdated(uint256 duration)`
