# BaseRewardEscrowV2

## Description

**Source:** [contracts/BaseRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol)

## Variables

### `accountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L36)</sub>

**Type:** `uint256`

### `accountMergingStartTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L38)</sub>

**Type:** `uint256`

### `maxAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L32)</sub>

**Type:** `uint256`

### `max_duration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L29)</sub>

**Type:** `uint256`

### `nominatedReceiver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L26)</sub>

**Type:** `mapping(address => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L378)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L110)</sub>

**Type:** `mapping(address => uint256[])`

??? example "Details"

    **Signature**

    `accountVestingEntryIDs(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L117)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L165)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L125)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) view returns (uint64 endTime, uint256 escrowAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L204)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L189)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256 total)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L130)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L102)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `nextEntryId() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L86)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L76)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L94)</sub>

**Type:** `mapping(address => uint256)`

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L90)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `totalEscrowedBalance() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L98)</sub>

**Type:** `mapping(address => uint256)`

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L106)</sub>

**Type:** `mapping(address => mapping(uint256 => struct VestingEntries.VestingEntry))`

??? example "Details"

    **Signature**

    `vestingSchedules(address account, uint256 entryId) view returns (struct VestingEntries.VestingEntry)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L337)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

### `revokeFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L262)</sub>

??? example "Details"

    **Signature**

    `revokeFrom(address account, address recipient, uint256 targetAmount, uint256 startIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "account not set")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L268)

    * [require(..., "recipient not set")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L269)

    * [require(..., "entries sum less than target")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L278)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [Revoked](#revoked)

### `setAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L387)</sub>

??? example "Details"

    **Signature**

    `setAccountMergingDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "exceeds max merging duration")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L388)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingDurationUpdated](#accountmergingdurationupdated)

### `setMaxAccountMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L393)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L398)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L382)</sub>

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

### `_appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L345)</sub>

??? example "Details"

    **Signature**

    `_appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Quantity cannot be zero")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L351)

    * [require(..., "Cannot escrow with 0 duration OR above max_duration")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L352)

    * [require(..., "Must be enough balance in the contract to provide for the vesting entry")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L358)

    **Emits**

    * [VestingEntryCreated](#vestingentrycreated)

### `_claimableAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L208)</sub>

??? example "Details"

    **Signature**

    `_claimableAmount(struct VestingEntries.VestingEntry _entry) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L69)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_subtractAndTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L301)</sub>

??? example "Details"

    **Signature**

    `_subtractAndTransfer(address subtractFrom, address transferTo, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L53)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L61)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L65)</sub>

??? example "Details"

    **Signature**

    `state() view returns (contract IRewardEscrowV2Storage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L57)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L461)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address, uint256[]) returns (uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L315)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot create escrow with address(0)")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L320)

    * [require(..., "token transfer failed")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L323)

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L465)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address, uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L412)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address from, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L413)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L414)

    * [require(..., "Address is not nominated to merge")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L415)

    **Emits**

    * [AccountMerged](#accountmerged)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L451)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[], uint256[], uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L447)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L404)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot nominate own account to merge")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L405)

    * [require(..., "Account merging has ended")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L406)

    * [require(..., "Cannot merge accounts with debt")](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L407)

    **Emits**

    * [NominateAccountToMerge](#nominateaccounttomerge)

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L223)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L474)</sub>

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L479)</sub>

## Events

### `AccountMerged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L491)</sub>

**Signature**: `AccountMerged(address accountToMerge, address destinationAddress, uint256 escrowAmountMerged, uint256[] entryIDs, uint256 time)`

### `AccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L489)</sub>

**Signature**: `AccountMergingDurationUpdated(uint256 newDuration)`

### `AccountMergingStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L490)</sub>

**Signature**: `AccountMergingStarted(uint256 time, uint256 endTime)`

### `MaxAccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L488)</sub>

**Signature**: `MaxAccountMergingDurationUpdated(uint256 newDuration)`

### `MaxEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L487)</sub>

**Signature**: `MaxEscrowDurationUpdated(uint256 newDuration)`

### `NominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L498)</sub>

**Signature**: `NominateAccountToMerge(address account, address destination)`

### `Revoked`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L499)</sub>

**Signature**: `Revoked(address account, address recipient, uint256 targetAmount, uint256 startIndex, uint256 endIndex)`

### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L485)</sub>

**Signature**: `Vested(address beneficiary, uint256 time, uint256 value)`

### `VestingEntryCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.83.1/contracts/BaseRewardEscrowV2.sol#L486)</sub>

**Signature**: `VestingEntryCreated(address beneficiary, uint256 time, uint256 value, uint256 duration, uint256 entryID)`
