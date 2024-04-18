# IRewardEscrowV2Frozen

## Description

**Source:** [contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol)

## Views

### `accountMergingIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L81)</sub>

??? example "Details"

    **Signature**

    `accountMergingIsOpen() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L99)</sub>

??? example "Details"

    **Signature**

    `accountVestingEntryIDs(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L23)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAccountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L41)</sub>

??? example "Details"

    **Signature**

    `getAccountVestingEntryIDs(address account, uint256 index, uint256 pageSize) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L49)</sub>

??? example "Details"

    **Signature**

    `getVestingEntry(address account, uint256 entryID) view returns (uint64, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingEntryClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L47)</sub>

??? example "Details"

    **Signature**

    `getVestingEntryClaimable(address account, uint256 entryID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L33)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256[] entryIDs) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L35)</sub>

??? example "Details"

    **Signature**

    `getVestingSchedules(address account, uint256 index, uint256 pageSize) view returns (struct VestingEntries.VestingEntryWithID[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L95)</sub>

??? example "Details"

    **Signature**

    `nextEntryId() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L25)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L29)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L27)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedBalance() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L31)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L97)</sub>

??? example "Details"

    **Signature**

    `vestingSchedules(address account, uint256 entryId) view returns (struct VestingEntries.VestingEntry)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L60)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L91)</sub>

??? example "Details"

    **Signature**

    `burnForMigration(address account, uint256[] entryIDs) returns (uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `createEscrowEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L54)</sub>

??? example "Details"

    **Signature**

    `createEscrowEntry(address beneficiary, uint256 deposit, uint256 duration)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L84)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mergeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L77)</sub>

??? example "Details"

    **Signature**

    `mergeAccount(address accountToMerge, uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateAccountEscrowBalances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L68)</sub>

??? example "Details"

    **Signature**

    `migrateAccountEscrowBalances(address[] accounts, uint256[] escrowBalances, uint256[] vestedBalances)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L66)</sub>

??? example "Details"

    **Signature**

    `migrateVestingSchedule(address _addressToMigrate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `nominateAccountToMerge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L79)</sub>

??? example "Details"

    **Signature**

    `nominateAccountToMerge(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `startMergingWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L75)</sub>

??? example "Details"

    **Signature**

    `startMergingWindow()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/IRewardEscrowV2Frozen.sol#L52)</sub>

??? example "Details"

    **Signature**

    `vest(uint256[] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``
