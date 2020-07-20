# IRewardEscrow

## Description

**Source:** [contracts/interfaces/IRewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L6)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L8)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L10)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L12)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L15)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.25.0-beta/contracts/interfaces/IRewardEscrow.sol#L17)</sub>

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
