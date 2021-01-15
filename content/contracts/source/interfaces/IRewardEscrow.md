# IRewardEscrow

## Description

**Source:** [contracts/interfaces/IRewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L7)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L17)</sub>

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L15)</sub>

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) returns (uint256[2])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L9)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L11)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L20)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/interfaces/IRewardEscrow.sol#L22)</sub>

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
