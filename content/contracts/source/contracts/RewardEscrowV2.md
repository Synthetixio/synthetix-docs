# RewardEscrowV2

## Description

**Source:** [contracts/RewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol)

## Variables

### `migrateEntriesThresholdAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L15)</sub>

**Type:** `uint256`

### `totalBalancePendingMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L13)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L25)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L29)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L190)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address account, uint256[] entryIDs) returns (uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Entry IDs required")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L195)

    **Modifiers**

    * [onlySynthetixBridge](#onlysynthetixbridge)

    **Emits**

    * [BurnedForMigrationToL2](#burnedformigrationtol2)

### `importVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L116)</sub>

??? example "Details"

    **Signature**

    `importVestingSchedule(address[] accounts, uint256[] escrowAmounts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account and escrowAmounts Length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L121)

    **Modifiers**

    * [onlyDuringSetup](#onlyduringsetup)

    * [onlyOwner](#onlyowner)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L150)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[] accounts, uint256[] escrowBalances, uint256[] vestedBalances)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Number of accounts and balances don't match")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L155)

    * [require(..., "Number of accounts and vestedBalances don't match")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L156)

    **Modifiers**

    * [onlyDuringSetup](#onlyduringsetup)

    * [onlyOwner](#onlyowner)

### `setMigrateEntriesThresholdAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L58)</sub>

??? example "Details"

    **Signature**

    `setMigrateEntriesThresholdAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MigrateEntriesThresholdAmountUpdated](#migrateentriesthresholdamountupdated)

## Internal Functions

### `_importVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L181)</sub>

??? example "Details"

    **Signature**

    `_importVestingEntry(address account, struct VestingEntries.VestingEntry entry)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ImportedVestingEntry](#importedvestingentry)

### `oldRewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L42)</sub>

??? example "Details"

    **Signature**

    `oldRewardEscrow() view returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L46)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L64)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address addressToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No escrow migration pending")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L67)

    * [require(..., "Address escrow balance is 0")](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L68)

    **Modifiers**

    * [systemActive](#systemactive)

## Modifiers

### `onlySynthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L229)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L234)</sub>

## Events

### `BurnedForMigrationToL2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L242)</sub>

**Signature**: `BurnedForMigrationToL2(address account, uint256[] entryIDs, uint256 escrowedAmountMigrated, uint256 time)`

### `ImportedVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L243)</sub>

**Signature**: `ImportedVestingEntry(address account, uint256 entryID, uint256 escrowAmount, uint256 endTime)`

### `ImportedVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L241)</sub>

**Signature**: `ImportedVestingSchedule(address account, uint256 time, uint256 escrowAmount)`

### `MigrateEntriesThresholdAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L244)</sub>

**Signature**: `MigrateEntriesThresholdAmountUpdated(uint256 newAmount)`

### `MigratedAccountEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.1-alpha/contracts/RewardEscrowV2.sol#L240)</sub>

**Signature**: `MigratedAccountEscrow(address account, uint256 escrowedAmount, uint256 vestedAmount, uint256 time)`
