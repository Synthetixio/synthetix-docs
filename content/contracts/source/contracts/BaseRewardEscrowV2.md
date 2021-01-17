# BaseRewardEscrowV2

## Description

**Source:** [contracts/BaseRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    BaseRewardEscrowV2[BaseRewardEscrowV2] --> Owned[Owned]
    BaseRewardEscrowV2[BaseRewardEscrowV2] --> LimitedSetup[LimitedSetup]
    BaseRewardEscrowV2[BaseRewardEscrowV2] --> MixinResolver[MixinResolver]

```

## Variables

### `accountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L52)</sub>

**Type:** `uint256`

### `accountMergingStartTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L54)</sub>

**Type:** `uint256`

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L27)</sub>

**Type:** `mapping(address => uint256[])`

### `maxAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L48)</sub>

**Type:** `uint256`

### `max_duration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L45)</sub>

**Type:** `uint256`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L30)</sub>

**Type:** `uint256`

### `nominatedReceiver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L39)</sub>

**Type:** `mapping(address => address)`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L33)</sub>

**Type:** `mapping(address => uint256)`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L42)</sub>

**Type:** `uint256`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L36)</sub>

**Type:** `mapping(address => uint256)`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L25)</sub>

**Type:** `mapping(address => mapping(uint256 => struct VestingEntries.VestingEntry))`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L64)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L286)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L99)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L152)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L114)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) returns (uint64, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L189)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L175)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L106)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L89)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L262)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

### `setAccountMergingDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L295)</sub>

??? example "Details"

    **Signature**

    `setAccountMergingDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., exceeds max merging duration)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L296)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingDurationUpdated](#accountmergingdurationupdated)

### `setMaxAccountMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L301)</sub>

??? example "Details"

    **Signature**

    `setMaxAccountMergingWindow(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxAccountMergingDurationUpdated](#maxaccountmergingdurationupdated)

### `setMaxEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L306)</sub>

??? example "Details"

    **Signature**

    `setMaxEscrowDuration(uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEscrowDurationUpdated](#maxescrowdurationupdated)

### `startMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L290)</sub>

??? example "Details"

    **Signature**

    `startMergingWindow()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountMergingStarted](#accountmergingstarted)

## Internal Functions

### `_addVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L356)</sub>

??? example "Details"

    **Signature**

    `_addVestingEntry(address account, struct VestingEntries.VestingEntry entry) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L399)</sub>

??? example "Details"

    **Signature**

    `_appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Quantity cannot be zero)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L405)

    * [require(..., Cannot escrow with 0 duration OR above max_duration)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L406)

    * [require(..., Must be enough balance in the contract to provide for the vesting entry)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L411)

    **Emits**

    * [VestingEntryCreated](#vestingentrycreated)

### `_claimableAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L194)</sub>

??? example "Details"

    **Signature**

    `_claimableAmount(struct VestingEntries.VestingEntry _entry) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L82)</sub>

??? example "Details"

    **Signature**

    `_notImplemented()`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_reduceAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L278)</sub>

??? example "Details"

    **Signature**

    `_reduceAccountEscrowBalances(address _account, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_transferVestedTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L271)</sub>

??? example "Details"

    **Signature**

    `_transferVestedTokens(address _account, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Vested](#vested)

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L70)</sub>

??? example "Details"

    **Signature**

    `feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L78)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L74)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L385)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address , uint256[] ) returns (uint256, struct VestingEntries.VestingEntry[])`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L240)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot create escrow with address(0))](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L245)

    * [require(..., token transfer failed)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L248)

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L389)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address , uint256 , struct VestingEntries.VestingEntry[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L320)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address accountToMerge, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Account merging has ended)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L321)

    * [require(..., Cannot merge accounts with debt)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L322)

    * [require(..., Address is not nominated to merge)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L323)

    **Emits**

    * [AccountMerged](#accountmerged)

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L375)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[] , uint256[] , uint256[] )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L371)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L312)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot nominate own account to merge)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L313)

    * [require(..., Account merging has ended)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L314)

    * [require(..., Cannot merge accounts with debt)](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L315)

    **Emits**

    * [NominateAccountToMerge](#nominateaccounttomerge)

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L210)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Modifiers

### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L434)</sub>

## Events

### `AccountMerged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L446)</sub>

**Signature**: `AccountMerged(address accountToMerge, address destinationAddress, uint256 escrowAmountMerged, uint256[] entryIDs, uint256 time)`

### `AccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L444)</sub>

**Signature**: `AccountMergingDurationUpdated(uint256 newDuration)`

### `AccountMergingStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L445)</sub>

**Signature**: `AccountMergingStarted(uint256 time, uint256 endTime)`

### `MaxAccountMergingDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L443)</sub>

**Signature**: `MaxAccountMergingDurationUpdated(uint256 newDuration)`

### `MaxEscrowDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L442)</sub>

**Signature**: `MaxEscrowDurationUpdated(uint256 newDuration)`

### `NominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L453)</sub>

**Signature**: `NominateAccountToMerge(address account, address destination)`

### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L440)</sub>

**Signature**: `Vested(address beneficiary, uint256 time, uint256 value)`

### `VestingEntryCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.37.0/contracts/BaseRewardEscrowV2.sol#L441)</sub>

**Signature**: `VestingEntryCreated(address beneficiary, uint256 time, uint256 value, uint256 duration, uint256 entryID)`
