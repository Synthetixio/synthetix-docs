# IRewardEscrowV2Storage

## Description

**Source:** [contracts/interfaces/IRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol)

## Views

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L20)</sub>

??? example "Details"

    **Signature**

    `accountVestingEntryIDs(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L16)</sub>

??? example "Details"

    **Signature**

    `nextEntryId() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L8)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L10)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedBalance() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L12)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L18)</sub>

??? example "Details"

    **Signature**

    `vestingSchedules(address account, uint256 entryId) view returns (struct VestingEntries.VestingEntry)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L43)</sub>

??? example "Details"

    **Signature**

    `addVestingEntry(address account, struct VestingEntries.VestingEntry entry) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setZeroAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L23)</sub>

??? example "Details"

    **Signature**

    `setZeroAmount(address account, uint256 entryId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setZeroAmountUntilTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L25)</sub>

??? example "Details"

    **Signature**

    `setZeroAmountUntilTarget(address account, uint256 startIndex, uint256 targetAmount) returns (uint256 total, uint256 endIndex, uint256 lastEntryTime)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateEscrowAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L37)</sub>

??? example "Details"

    **Signature**

    `updateEscrowAccountBalance(address account, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateTotalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L41)</sub>

??? example "Details"

    **Signature**

    `updateTotalEscrowedBalance(int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardEscrowV2.sol#L39)</sub>

??? example "Details"

    **Signature**

    `updateVestedAccountBalance(address account, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``
