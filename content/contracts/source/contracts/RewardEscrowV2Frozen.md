# RewardEscrowV2Frozen

## Description

**Source:** [contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol)

## Variables

### `migrateEntriesThresholdAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L22)</sub>

**Type:** `uint256`

### `totalBalancePendingMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L18)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L31)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L35)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L196)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address account, uint256[] entryIDs) returns (uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Entry IDs required")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L201)

    **Modifiers**

    * [onlySynthetixBridge](#onlysynthetixbridge)

    **Emits**

    * [BurnedForMigrationToL2](#burnedformigrationtol2)

### `importVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L122)</sub>

??? example "Details"

    **Signature**

    `importVestingSchedule(address[] accounts, uint256[] escrowAmounts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account and escrowAmounts Length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L127)

    **Modifiers**

    * [onlyDuringSetup](#onlyduringsetup)

    * [onlyOwner](#onlyowner)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L156)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[] accounts, uint256[] escrowBalances, uint256[] vestedBalances)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Number of accounts and balances don't match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L161)

    * [require(..., "Number of accounts and vestedBalances don't match")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L162)

    **Modifiers**

    * [onlyDuringSetup](#onlyduringsetup)

    * [onlyOwner](#onlyowner)

### `setMigrateEntriesThresholdAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L64)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L187)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L48)</sub>

??? example "Details"

    **Signature**

    `oldRewardEscrow() view returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L52)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L70)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address addressToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No escrow migration pending")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L73)

    * [require(..., "Address escrow balance is 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L74)

    **Modifiers**

    * [systemActive](#systemactive)

## Modifiers

### `onlySynthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L235)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L240)</sub>

## Events

### `BurnedForMigrationToL2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L248)</sub>

**Signature**: `BurnedForMigrationToL2(address account, uint256[] entryIDs, uint256 escrowedAmountMigrated, uint256 time)`

### `ImportedVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L249)</sub>

**Signature**: `ImportedVestingEntry(address account, uint256 entryID, uint256 escrowAmount, uint256 endTime)`

### `ImportedVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L247)</sub>

**Signature**: `ImportedVestingSchedule(address account, uint256 time, uint256 escrowAmount)`

### `MigrateEntriesThresholdAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L250)</sub>

**Signature**: `MigrateEntriesThresholdAmountUpdated(uint256 newAmount)`

### `MigratedAccountEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/RewardEscrowV2Frozen.sol#L246)</sub>

**Signature**: `MigratedAccountEscrow(address account, uint256 escrowedAmount, uint256 vestedAmount, uint256 time)`
