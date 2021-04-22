# IRewardEscrow

## Description

**Source:** [contracts/interfaces/IRewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol)

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L19)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L6)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L16)</sub>

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L14)</sub>

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) view returns (uint256[2])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L8)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L10)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L12)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/interfaces/IRewardEscrow.sol#L21)</sub>

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
