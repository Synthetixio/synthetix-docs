# SynthetixEscrow

## Description

This contract holds the SNX which were escrowed at the time of the original token sale, releasing them according to a defined schedule.


The contract was subject to an eight week setup period during which the vesting schedules were set up.


This contract is augmented by the [`EscrowChecker`](EscrowChecker.md) contract, which is able to return vesting schedules as an array rather than one at a time.



**Source:** [contracts/SynthetixEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol)

## Architecture

---
### Inheritance Graph

```mermaid
graph TD
    SynthetixEscrow[SynthetixEscrow] --> Owned[Owned]
    SynthetixEscrow[SynthetixEscrow] --> LimitedSetup[LimitedSetup]
```

---
### Libraries

- [SafeMath](/libraries/SafeMath) for `uint`

## Constants

---
### `MAX_VESTING_ENTRIES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L37)</sub>





**Type:** `uint256`

---
### `QUANTITY_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L34)</sub>





**Type:** `uint256`

---
### `TIME_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L33)</sub>





**Type:** `uint256`

## Variables

---
### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L21)</sub>



The address of the main [`Synthetix`](Synthetix.md) contract.




**Type:** `contract ISynthetix`

---
### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L28)</sub>



The quantity of remaining tokens for a given account; it saves the recomputation involved in summing over [`vestingSchedules`](#vestingschedules) entries.




**Type:** `mapping(address => uint256)`

---
### `totalVestedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L31)</sub>



The total remaining vested balance in this contract.




**Type:** `uint256`

---
### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L25)</sub>



Stores the vesting schedule for each for each account. Each schedule is a list of `(vesting timestamp, quantity)` pairs in ascending time order.




**Type:** `mapping(address => uint256[2][])`

## Function (Constructor)

---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L41)</sub>



??? example "Details"

    **Signature**

    `(address _owner, contract ISynthetix _synthetix)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions

---
### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L57)</sub>



An alias to [`totalVestedAccountBalance[account]`](#totalvestedaccountbalance) for ERC20 integration.


??? example "Details"

    **Signature**

    `balanceOf(address account)`

    **State Mutability**

    `view`

---
### `getNextVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L106)</sub>



Returns the next vesting entry in the same manner as [`getNextVestingIndex`](#getnextvestingindex). Returns `[0,0]` if there is no next vesting entry.


??? example "Details"

    **Signature**

    `getNextVestingEntry(address account)`

    **State Mutability**

    `view`

---
### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L93)</sub>



Returns the index of the next vesting entry that will vest for a given account. Returns one past the end if there are none remaining.


The function iterates until it finds the first nonzero vesting entry timestamp, so the gas cost increases slightly as more entries vest.


??? example "Details"

    **Signature**

    `getNextVestingIndex(address account)`

    **State Mutability**

    `view`

---
### `getNextVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L124)</sub>



Returns the SNX quantity of the next vesting entry. Returns `0` if there is no such entry.


??? example "Details"

    **Signature**

    `getNextVestingQuantity(address account)`

    **State Mutability**

    `view`

---
### `getNextVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L117)</sub>



Returns the timestamp of the next vesting entry. Returns `0` if there is no such entry.


??? example "Details"

    **Signature**

    `getNextVestingTime(address account)`

    **State Mutability**

    `view`

---
### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L86)</sub>



Returns the quantity of SNX a given schedule entry will yield.


??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256 index)`

    **State Mutability**

    `view`

---
### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L72)</sub>



Returns a particular schedule entry for an account, which is a pair of uints: `(vesting timestamp, SNX quantity)`.


This is here because the public function generated for [`vestingSchedules`](#vestingschedules) awkwardly requires the index into the pair as its third argument.


??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index)`

    **State Mutability**

    `view`

---
### `getVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L79)</sub>



Returns the time at which a given schedule entry will vest.


??? example "Details"

    **Signature**

    `getVestingTime(address account, uint256 index)`

    **State Mutability**

    `view`

---
### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L64)</sub>



The number of entries in an account's vesting schedule, including those already claimed.


??? example "Details"

    **Signature**

    `numVestingEntries(address account)`

    **State Mutability**

    `view`

---
### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L215)</sub>



Finds all vesting schedule entries that have come due for the caller and transfers the total quantity of tokens to them. Vested entries are overwritten with `[0,0]`.


??? example "Details"

    **Signature**

    `vest()`

    **State Mutability**

    `nonpayable`

## Functions (onlyOwner)

---
### `addVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L202)</sub>



??? example "Details"

    **Signature**

    `addVestingSchedule(address account, uint256[] times, uint256[] quantities)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---
### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L160)</sub>



??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 time, uint256 quantity)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Time must be in the future)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L166)

    * [require(..., Quantity cannot be zero)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L167)

    * [require(..., Must be enough balance in the contract to provide for the vesting entry)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L171)

    * [require(..., Vesting schedule is too long)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L178)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---
### `purgeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L141)</sub>



??? example "Details"

    **Signature**

    `purgeAccount(address account)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---
### `setSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L47)</sub>



??? example "Details"

    **Signature**

    `setSynthetix(contract ISynthetix _synthetix)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixUpdated](#synthetixupdated)

---
### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L134)</sub>



??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 quantity)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

## Events

---
### `SynthetixUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L243)</sub>



Records that the SNX contract address was altered.


**Signature:** `SynthetixUpdated(address newSynthetix)`


- `(address newSynthetix)`

---
### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/SynthetixEscrow.sol#L245)</sub>



Records that an account vested a quantity of tokens.


**Signature:** `Vested(address indexed beneficiary, uint time, uint value)`


- `(address beneficiary, uint256 time, uint256 value)`

