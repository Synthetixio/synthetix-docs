# SynthetixEscrow

## Description

!!! Warning "Newer source than mainnet"

    This contract source which generated these docs is newer than the original Havven escrow contract, which is available at: [contracts.synthetix.io/SynthetixEscrow](https://contracts.synthetix.io/SynthetixEscrow)

This contract holds the SNX which were escrowed at the time of the original token sale, releasing them according to a defined schedule.

The contract was subject to an eight week setup period during which the vesting schedules were set up.

This contract is augmented by the [`EscrowChecker`](EscrowChecker.md) contract, which is able to return vesting schedules as an array rather than one at a time.

**Source:** [contracts/SynthetixEscrow.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol)

## Variables

### `MAX_VESTING_ENTRIES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L36)</sub>

This constant limits vesting schedules to be shorter than twenty entries long so that iteration is bounded.

**Value:** `20`

**Type:** `uint256`

### `QUANTITY_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L33)</sub>

The vesting quantity is the second entry in vesting schedule entry pairs.

**Value:** `1`

**Type:** `uint256`

### `TIME_INDEX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L32)</sub>

The vesting timestamp is the first entry in vesting schedule entry pairs.

**Value:** `0`

**Type:** `uint256`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L20)</sub>

The address of the main [`Synthetix`](Synthetix.md) contract.

**Type:** `contract ISynthetix`

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L27)</sub>

The quantity of remaining tokens for a given account; it saves the recomputation involved in summing over [`vestingSchedules`](#vestingschedules) entries.

**Type:** `mapping(address => uint256)`

### `totalVestedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L30)</sub>

The total remaining vested balance in this contract.

**Type:** `uint256`

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L24)</sub>

Stores the vesting schedule for each for each account. Each schedule is a list of `(vesting timestamp, quantity)` pairs in ascending time order.

**Type:** `mapping(address => uint256[2][])`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L40)</sub>

Initialises the [`Synthetix`](Synthetix.md) contract address, and the inherited [`Owned`](Owned.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ISynthetix _synthetix)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L56)</sub>

An alias to [`totalVestedAccountBalance[account]`](#totalvestedaccountbalance) for ERC20 integration.

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getNextVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L105)</sub>

Returns the next vesting entry in the same manner as [`getNextVestingIndex`](#getnextvestingindex). Returns `[0,0]` if there is no next vesting entry.

??? example "Details"

    **Signature**

    `getNextVestingEntry(address account) view returns (uint256[2])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getNextVestingIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L92)</sub>

Returns the index of the next vesting entry that will vest for a given account. Returns one past the end if there are none remaining.

The function iterates until it finds the first nonzero vesting entry timestamp, so the gas cost increases slightly as more entries vest.

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getNextVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L123)</sub>

Returns the SNX quantity of the next vesting entry. Returns `0` if there is no such entry.

??? example "Details"

    **Signature**

    `getNextVestingQuantity(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getNextVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L116)</sub>

Returns the timestamp of the next vesting entry. Returns `0` if there is no such entry.

??? example "Details"

    **Signature**

    `getNextVestingTime(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getVestingQuantity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L85)</sub>

Returns the quantity of SNX a given schedule entry will yield.

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getVestingScheduleEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L71)</sub>

Returns a particular schedule entry for an account, which is a pair of uints: `(vesting timestamp, SNX quantity)`.

This is here because the public function generated for [`vestingSchedules`](#vestingschedules) awkwardly requires the index into the pair as its third argument.

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) view returns (uint256[2])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getVestingTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L78)</sub>

Returns the time at which a given schedule entry will vest.

??? example "Details"

    **Signature**

    `getVestingTime(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L63)</sub>

The number of entries in an account's vesting schedule, including those already claimed.

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addVestingSchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L193)</sub>

During the setup period, allows the contract owner to add an entire vesting schedule to the given account by calling [`appendVestingEntry`](#appendvestingentry) in a loop. If a schedule already exists, the new one is concatenated to the old one.

!!! caution

    Beware that no checking is done that the lengths of the `times` and `quantities` input arrays are equal. If `times` is shorter than `quantities`, the extra quantities are ignored; if it is longer, the transaction reverts since past-the-end quantities will be 0 (but don't rely on this).

??? example "Details"

    **Signature**

    `addVestingSchedule(address account, uint256[] times, uint256[] quantities)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L151)</sub>

Allows new entry to be added to the given account's vesting schedule by the owner during the setup period.

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 time, uint256 quantity)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Time must be in the future")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L157)

    * [require(..., "Quantity cannot be zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L158)

    * [require(..., "Must be enough balance in the contract to provide for the vesting entry")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L162)

    * [require(..., "Vesting schedule is too long")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L169)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `purgeAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L132)</sub>

In case a vesting schedule was incorrectly set up, this function deletes all vesting information associated with a given account and updates relevant totals. `purgeAccount` was only callable by the owner, during the setup period.

??? example "Details"

    **Signature**

    `purgeAccount(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `setSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L46)</sub>

Sets the address of the [`Synthetix`](Synthetix.md) contract, so that escrowed SNX can be transferred to accounts claiming them.

??? example "Details"

    **Signature**

    `setSynthetix(contract ISynthetix _synthetix)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixUpdated](#synthetixupdated)

## External Functions

### `vest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L206)</sub>

Finds all vesting schedule entries that have come due for the caller and transfers the total quantity of tokens to them. Vested entries are overwritten with `[0,0]`.

??? example "Details"

    **Signature**

    `vest()`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Events

### `SynthetixUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L232)</sub>

Records that the SNX contract address was altered.

**Signature**: `SynthetixUpdated(address newSynthetix)`

### `Vested`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixEscrow.sol#L234)</sub>

Records that an account vested a quantity of tokens.

**Signature**: `Vested(address beneficiary, uint256 time, uint256 value)`
