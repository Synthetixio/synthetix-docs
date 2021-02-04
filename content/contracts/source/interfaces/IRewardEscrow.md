# IRewardEscrow

## Description

**Source:** [contracts/interfaces/IRewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol)

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L20)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L7)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L17)</sub>

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L15)</sub>

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) view returns (uint256[2])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L9)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L11)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IRewardEscrow.sol#L22)</sub>

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
