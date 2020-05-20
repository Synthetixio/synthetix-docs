# EscrowChecker

## Description

A small utility contract that augments the SNX escrow contract to allow extracting a user's schedule as an array rather than as individual entries.



**Source:** [contracts/EscrowChecker.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EscrowChecker.sol)

## Architecture


---
### Inheritance Graph

<centered-image>
    ![EscrowChecker inheritance graph](../img/graphs/EscrowChecker.svg)
</centered-image>




---
### Related Contracts

## Variables


---
### `synthetix_escrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EscrowChecker.sol#L13)</sub>



The [SNX escrow contract](SynthetixEscrow.md).




**Type:** `contract ISynthetixEscrow`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EscrowChecker.sol#L15)</sub>



??? example "Details"

    **Signature**

    `(contract ISynthetixEscrow _esc)`

    **State Mutability**

    `nonpayable`

## Functions


---
### `checkAccountSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EscrowChecker.sol#L19)</sub>



Returns the given address's vesting schedule as up to 16 `uints`, composed of an alternating sequence of up to 8 `(timestamp, quantity)` pairs, as per [`SynthetixEscrow.getVestingScheduleEntry`](SynthetixEscrow.md#getVestingScheduleEntry).


Vested entries are not skipped, and appear as a leading sequence of zeroes.


??? example "Details"

    **Signature**

    `checkAccountSchedule(address account)`

    **State Mutability**

    `view`

