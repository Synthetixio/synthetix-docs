# EscrowChecker

## Description

A small utility contract that augments the SNX escrow contract to allow extracting a user's schedule as an array rather than as individual entries.

**Source:** [contracts/EscrowChecker.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EscrowChecker.sol)

## Architecture

### Related Contracts

- [SynthetixEscrow](SynthetixEscrow.md)

## Variables

### `synthetix_escrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EscrowChecker.sol#L11)</sub>

The [SNX escrow contract](SynthetixEscrow.md).

**Type:** `contract ISynthetixEscrow`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EscrowChecker.sol#L13)</sub>

Initialises the [synthetix escrow address](#synthetix_escrow).

??? example "Details"

    **Signature**

    `constructor(contract ISynthetixEscrow _esc)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `checkAccountSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EscrowChecker.sol#L17)</sub>

Returns the given address's vesting schedule as up to 16 `uints`, composed of an alternating sequence of up to 8 `(timestamp, quantity)` pairs, as per [`SynthetixEscrow.getVestingScheduleEntry`](SynthetixEscrow.md#getVestingScheduleEntry).

Vested entries are not skipped, and appear as a leading sequence of zeroes.

??? example "Details"

    **Signature**

    `checkAccountSchedule(address account) view returns (uint256[16])`

    **Visibility**

    `public`

    **State Mutability**

    `view`
