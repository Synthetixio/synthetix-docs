# BaseRewardEscrowV2

## Description

**Source:** [contracts/BaseRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol)

## Variables

### `accountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L51)</sub>

**Type:** `uint256`

### `accountMergingStartTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L53)</sub>

**Type:** `uint256`

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L26)</sub>

**Type:** `mapping(address => uint256[])`

### `maxAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L47)</sub>

**Type:** `uint256`

### `max_duration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L44)</sub>

**Type:** `uint256`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L29)</sub>

**Type:** `uint256`

### `nominatedReceiver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L38)</sub>

**Type:** `mapping(address => address)`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L32)</sub>

**Type:** `mapping(address => uint256)`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L41)</sub>

**Type:** `uint256`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L35)</sub>

**Type:** `mapping(address => uint256)`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L24)</sub>

**Type:** `mapping(address => mapping(uint256 => struct VestingEntries.VestingEntry))`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L63)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L285)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L98)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L151)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L113)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) view returns (uint64 endTime, uint256 escrowAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L188)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L174)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256 total)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L105)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L88)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L261)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L294)</sub>

??? example "Details"

    **Signature**

    `setAccountMergingDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "exceeds max merging duration")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L295)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingDurationUpdated](#accountmergingdurationupdated)

### `setMaxAccountMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L300)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L305)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L289)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L355)</sub>

??? example "Details"

    **Signature**

    `_addVestingEntry(address account, struct VestingEntries.VestingEntry entry) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L398)</sub>

??? example "Details"

    **Signature**

    `_appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Quantity cannot be zero")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L404)

    * [require(..., "Cannot escrow with 0 duration OR above max_duration")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L405)

    * [require(..., "Must be enough balance in the contract to provide for the vesting entry")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L410)

    **Emits**

    * [VestingEntryCreated](#vestingentrycreated)

### `_claimableAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_claimableAmount(struct VestingEntries.VestingEntry _entry) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L81)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_reduceAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L277)</sub>

??? example "Details"

    **Signature**

    `_reduceAccountEscrowBalances(address _account, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_transferVestedTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L270)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L69)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L77)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L73)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L384)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address, uint256[]) returns (uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L239)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot create escrow with address(0)")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L244)

    * [require(..., "token transfer failed")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L247)

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L388)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address, uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L319)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address accountToMerge, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L320)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L321)

    * [require(..., "Address is not nominated to merge")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L322)

    **Emits**

    * [AccountMerged](#accountmerged)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L374)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L370)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L311)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot nominate own account to merge")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L312)

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L313)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L314)

    **Emits**

    * [NominateAccountToMerge](#nominateaccounttomerge)

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L209)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L433)</sub>

## Events

### `AccountMerged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L445)</sub>

**Signature**: `AccountMerged(address accountToMerge, address destinationAddress, uint256 escrowAmountMerged, uint256[] entryIDs, uint256 time)`

### `AccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L443)</sub>

**Signature**: `AccountMergingDurationUpdated(uint256 newDuration)`

### `AccountMergingStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L444)</sub>

**Signature**: `AccountMergingStarted(uint256 time, uint256 endTime)`

### `MaxAccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L442)</sub>

**Signature**: `MaxAccountMergingDurationUpdated(uint256 newDuration)`

### `MaxEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L441)</sub>

**Signature**: `MaxEscrowDurationUpdated(uint256 newDuration)`

### `NominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L452)</sub>

**Signature**: `NominateAccountToMerge(address account, address destination)`

### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L439)</sub>

**Signature**: `Vested(address beneficiary, uint256 time, uint256 value)`

### `VestingEntryCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.74.0-alpha/contracts/BaseRewardEscrowV2.sol#L440)</sub>

**Signature**: `VestingEntryCreated(address beneficiary, uint256 time, uint256 value, uint256 duration, uint256 entryID)`
