# BaseRewardEscrowV2Frozen

## Description

**Source:** [contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol)

## Variables

### `accountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L56)</sub>

**Type:** `uint256`

### `accountMergingStartTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L58)</sub>

**Type:** `uint256`

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L31)</sub>

**Type:** `mapping(address => uint256[])`

### `maxAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L52)</sub>

**Type:** `uint256`

### `max_duration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L49)</sub>

**Type:** `uint256`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L34)</sub>

**Type:** `uint256`

### `nominatedReceiver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L43)</sub>

**Type:** `mapping(address => address)`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L37)</sub>

**Type:** `mapping(address => uint256)`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L46)</sub>

**Type:** `uint256`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L40)</sub>

**Type:** `mapping(address => uint256)`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L29)</sub>

**Type:** `mapping(address => mapping(uint256 => struct VestingEntries.VestingEntry))`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L68)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L290)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L103)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L156)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) view returns (uint64 endTime, uint256 escrowAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L193)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L179)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256 total)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L123)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L110)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L93)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L266)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

### `setAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L299)</sub>

??? example "Details"

    **Signature**

    `setAccountMergingDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "exceeds max merging duration")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L300)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingDurationUpdated](#accountmergingdurationupdated)

### `setMaxAccountMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L305)</sub>

??? example "Details"

    **Signature**

    `setMaxAccountMergingWindow(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxAccountMergingDurationUpdated](#maxaccountmergingdurationupdated)

### `setMaxEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L310)</sub>

??? example "Details"

    **Signature**

    `setMaxEscrowDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEscrowDurationUpdated](#maxescrowdurationupdated)

### `startMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L294)</sub>

??? example "Details"

    **Signature**

    `startMergingWindow()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingStarted](#accountmergingstarted)

## Internal Functions

### `_addVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L360)</sub>

??? example "Details"

    **Signature**

    `_addVestingEntry(address account, struct VestingEntries.VestingEntry entry) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L403)</sub>

??? example "Details"

    **Signature**

    `_appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Quantity cannot be zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L409)

    * [require(..., "Cannot escrow with 0 duration OR above max_duration")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L410)

    * [require(..., "Must be enough balance in the contract to provide for the vesting entry")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L415)

    **Emits**

    * [VestingEntryCreated](#vestingentrycreated)

### `_claimableAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L198)</sub>

??? example "Details"

    **Signature**

    `_claimableAmount(struct VestingEntries.VestingEntry _entry) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L86)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_reduceAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_reduceAccountEscrowBalances(address _account, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_transferVestedTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L275)</sub>

??? example "Details"

    **Signature**

    `_transferVestedTokens(address _account, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [Vested](#vested)

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L74)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L82)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L78)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L389)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address, uint256[]) returns (uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L244)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot create escrow with address(0)")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L249)

    * [require(..., "token transfer failed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L252)

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L393)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address, uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L324)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address accountToMerge, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L325)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L326)

    * [require(..., "Address is not nominated to merge")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L327)

    **Emits**

    * [AccountMerged](#accountmerged)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L379)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L375)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L316)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot nominate own account to merge")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L317)

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L318)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L319)

    **Emits**

    * [NominateAccountToMerge](#nominateaccounttomerge)

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L214)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L438)</sub>

## Events

### `AccountMerged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L450)</sub>

**Signature**: `AccountMerged(address accountToMerge, address destinationAddress, uint256 escrowAmountMerged, uint256[] entryIDs, uint256 time)`

### `AccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L448)</sub>

**Signature**: `AccountMergingDurationUpdated(uint256 newDuration)`

### `AccountMergingStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L449)</sub>

**Signature**: `AccountMergingStarted(uint256 time, uint256 endTime)`

### `MaxAccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L447)</sub>

**Signature**: `MaxAccountMergingDurationUpdated(uint256 newDuration)`

### `MaxEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L446)</sub>

**Signature**: `MaxEscrowDurationUpdated(uint256 newDuration)`

### `NominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L457)</sub>

**Signature**: `NominateAccountToMerge(address account, address destination)`

### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L444)</sub>

**Signature**: `Vested(address beneficiary, uint256 time, uint256 value)`

### `VestingEntryCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/BaseRewardEscrowV2Frozen.sol#L445)</sub>

**Signature**: `VestingEntryCreated(address beneficiary, uint256 time, uint256 value, uint256 duration, uint256 entryID)`
