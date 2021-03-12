# IRewardEscrowV2

## Description

**Source:** [contracts/interfaces/IRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol)

## External Functions

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L76)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L55)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L20)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L86)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address account, uint256[] entryIDs) returns (uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L49)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L36)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L44)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) view returns (uint64, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L28)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L30)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L79)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L72)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address accountToMerge, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L63)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[] accounts, uint256[] escrowBalances, uint256[] vestedBalances)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L61)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address _addressToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L74)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L22)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `startMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L70)</sub>

??? example "Details"

    **Signature**

    `startMergingWindow()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L24)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L26)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.40.0-alpha/contracts/interfaces/IRewardEscrowV2.sol#L47)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
