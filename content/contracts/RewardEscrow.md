# RewardEscrow

This is the mechanism for distributing SNX rewards from the inflationary supply. When an SNX staker claims fees, the inflationary reward component is escrowed in this contract and an entry is added to an escrow schedule for that staker for them to claim after a year. These vesting schedules can only be appended to by the [FeePool](FeePool.md) contract.


The logic of RewardEscrow is derived from the [SynthetixEscrow](SynthetixEscrow.md) contract.


**Source:** [RewardEscrow.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardEscrow.sol)


## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    RewardEscrow[RewardEscrow] --> Owned[Owned]
```


---
### Related Contracts

- <>[Synthetix](Synthetix.md)
- <>[FeePool](FeePool.md)


---
### Libraries

- [SafeMath](/libraries/SafeMath) for `uint`
## Description


**Source:** [contracts/RewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol)

## Constants


---
### `MAX_VESTING_ENTRIES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L43)</sub>

**Type:** `uint256`


---
### `QUANTITY_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L39)</sub>

**Type:** `uint256`


---
### `TIME_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L38)</sub>

**Type:** `uint256`

## Variables


---
### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L23)</sub>

The address of the [`FeePool`](FeePool.md) contract.




**Type:** `contract IFeePool`


---
### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L21)</sub>

The address of the main [`Synthetix`](Synthetix.md) contract.




**Type:** `contract ISynthetix`


---
### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L30)</sub>

The quantity of remaining tokens for each account; it saves the recomputation involved in summing over [`vestingSchedules`](#vestingschedules) entries.




**Type:** `mapping(address => uint256)`


---
### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L36)</sub>

A record of the total remaining vested balance in this contract, which should be equal to the actual SNX balance.




**Type:** `uint256`


---
### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L33)</sub>

The quantity of tokens that have already been vested for each account.




**Type:** `mapping(address => uint256)`


---
### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L27)</sub>

Stores the vesting schedule for each for each account. Each schedule is a list of `(vesting timestamp, quantity)` pairs in ascending time order.




**Type:** `mapping(address => uint256[2][])`

## Modifiers


---
### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L254)</sub>

Reverts the transaction if the `msg.sender` is not the [`FeePool`](FeePool.md).


## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L47)</sub>

??? example "Details"

    **Signature**

    `(address _owner, contract ISynthetix _synthetix, contract IFeePool _feePool)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions


---
### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L218)</sub>

This function allows the [`FeePool`](FeePool.md) contract to add a new entry to a given account's vesting schedule when it claims its fees. All new entries are set to vest after one year.


??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)


---
### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L80)</sub>

An alias to [`totalEscrowedAccountBalance[account]`](#totalescrowedaccountbalance) for ERC20 integration.


??? example "Details"

    **Signature**

    `balanceOf(address account)`

    **State Mutability**

    `view`


---
### `checkAccountSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L161)</sub>

Returns the full vesting schedule for a given account.


??? example "Details"

    **Signature**

    `checkAccountSchedule(address account)`

    **State Mutability**

    `view`


---
### `getNextVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L133)</sub>

Returns the next vesting entry in the same manner as [`getNextVestingIndex`](#getnextvestingindex). Returns `[0,0]` if there is no next vesting entry.


??? example "Details"

    **Signature**

    `getNextVestingEntry(address account)`

    **State Mutability**

    `view`


---
### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L120)</sub>

Returns the index of the next vesting entry that will vest for a given account. Returns one past the end if there are none remaining.


The function iterates until it finds the first nonzero vesting entry timestamp, so the gas cost increases slightly as more entries vest. A full schedule of 260 entries would cost a little over $50\,000$ gas to iterate over.


??? example "Details"

    **Signature**

    `getNextVestingIndex(address account)`

    **State Mutability**

    `view`


---
### `getNextVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L151)</sub>

Returns the SNX quantity of the next vesting entry. Returns `0` if there is no such entry.


??? example "Details"

    **Signature**

    `getNextVestingQuantity(address account)`

    **State Mutability**

    `view`


---
### `getNextVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L144)</sub>

Returns the timestamp of the next vesting entry. Returns `0` if there is no such entry.


??? example "Details"

    **Signature**

    `getNextVestingTime(address account)`

    **State Mutability**

    `view`


---
### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L113)</sub>

Returns the quantity of SNX a given schedule entry will yield.


??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256 index)`

    **State Mutability**

    `view`


---
### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L99)</sub>

Returns a particular schedule entry for an account, which is a pair of uints: `(vesting timestamp, SNX quantity)`.


This is here because the public function generated for [`vestingSchedules`](#vestingschedules) awkwardly requires the index into the pair as its third argument.


??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index)`

    **State Mutability**

    `view`


---
### `getVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L106)</sub>

Returns the time at which a given schedule entry will vest.


??? example "Details"

    **Signature**

    `getVestingTime(address account, uint256 index)`

    **State Mutability**

    `view`


---
### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L91)</sub>

The number of entries in an account's vesting schedule, including those already claimed.


??? example "Details"

    **Signature**

    `numVestingEntries(address account)`

    **State Mutability**

    `view`


---
### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L225)</sub>

Finds all vesting schedule entries that have come due for the caller and transfers the total quantity of tokens to them. Vested entries are overwritten with `[0,0]`.


??? example "Details"

    **Signature**

    `vest()`

    **State Mutability**

    `nonpayable`

## Functions (Internal)


---
### `_appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L174)</sub>

??? example "Details"

    **Signature**

    `_appendVestingEntry(address account, uint256 quantity)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Quantity cannot be zero)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L176)

    * [require(..., Must be enough balance in the contract to provide for the vesting entry)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L180)

    * [require(..., Vesting schedule is too long)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L187)

    **Emits**

    * [VestingEntryCreated](#vestingentrycreated)


---
### `_numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L84)</sub>

??? example "Details"

    **Signature**

    `_numVestingEntries(address account)`

    **State Mutability**

    `view`

## Functions (onlyOwner)


---
### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L70)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePoolUpdated](#feepoolupdated)


---
### `setSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L61)</sub>

??? example "Details"

    **Signature**

    `setSynthetix(contract ISynthetix _synthetix)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixUpdated](#synthetixupdated)

## Events


---
### `FeePoolUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L265)</sub>

Records that the fee pool contract address was altered.


**Signature:** `FeePoolUpdated(address newFeePool)`


- `(address newFeePool)`


---
### `SynthetixUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L263)</sub>

Records that the SNX contract address was altered.


**Signature:** `SynthetixUpdated(address newSynthetix)`


- `(address newSynthetix)`


---
### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L267)</sub>

Records that an account vested a quantity of tokens.


**Signature:** `Vested(address indexed beneficiary, uint time, uint value)`


- `(address beneficiary, uint256 time, uint256 value)`


---
### `VestingEntryCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L269)</sub>

Records that the fee pool created a vesting entry.


**Signature:** `VestingEntryCreated(address indexed beneficiary, uint time, uint value)`


- `(address beneficiary, uint256 time, uint256 value)`

