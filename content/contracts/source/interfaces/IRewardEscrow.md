# IRewardEscrow

## Description

**Source:** [contracts/interfaces/IRewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L6)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L8)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L10)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L12)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L15)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IRewardEscrow.sol#L17)</sub>

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
