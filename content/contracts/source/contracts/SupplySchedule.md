# SupplySchedule

## Description

Defines the Synthetix inflationary supply schedule, according to which the synthetix inflationary supply is released.

Minting is performed in increments of a week whenever [`recordMintEvent`](#recordMintEvent) is called from [`Synthetix.mint`](Synthetix.md#mint). Minting can be called weekly after the time elapses for more than 7 days. These accrue so that no tokens are lost even if minting is not performed for several periods; the accrued total is minted at the next invocation. These computations are covered in more detail in the [`mintableSupply`](#mintablesupply) description.

The supply decay follows an exponential decay formula calculated for each week.

supplyForWeek = Initial Weekly Supply \* (1 - rate of decay) ^ number of weeks

**Source:** [contracts/SupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol)

## Architecture

### Related Contracts

- [Synthetix](Synthetix.md)

## Variables

### `DECAY_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L51)</sub>

**Type:** `uint256`

### `INFLATION_START_DATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L45)</sub>

The timestamp at which the inflationary SNX supply began to be minted.

**Value:** `1551830400 (2019-03-06T00:00:00+00:00)`

**Type:** `uint256`

### `INITIAL_WEEKLY_SUPPLY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L34)</sub>

The amount of tokens being issued weekly before exponential decay started. Used to calculate the supply each week once decay starts.

**Value:** `1442307692307692307692307 - 75e6 / 52`

**Type:** `uint256`

### `MAX_MINTER_REWARD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L40)</sub>

**Type:** `uint256`

### `MINT_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L46)</sub>

A buffer added to the lastMintEvent to ensure that synthetix rewards are issued after a feePeriod closes.

**Value:** `1 days`

**Type:** `uint256`

### `MINT_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L43)</sub>

The duration of each minting period. This is constant at one week.

**Value:** `1 weeks`

**Type:** `uint256`

### `SUPPLY_DECAY_END`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L48)</sub>

Week number when supply decay ends. Used along with weekCounter to determine when decay supply should end.

Inflation after this week would become be on the terminal inflation schedule.

**Value:** `234`

**Type:** `uint8`

### `SUPPLY_DECAY_START`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L47)</sub>

Week number when supply decay starts. Used along with weekCounter to determine when decay supply starts.

**Value:** `40`

**Type:** `uint8`

### `TERMINAL_SUPPLY_RATE_ANNUAL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L54)</sub>

**Type:** `uint256`

### `lastMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L24)</sub>

The timestamp when new supply was last minted - Is set to the number of weeks since inflation start date plus a minting buffer to allow feePeriod to close first.

**Type:** `uint256`

### `minterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L30)</sub>

Used as the quantity of SNX to reward the caller of [`Synthetix.mint`](Synthetix.md#mint), which incentivises users to continue minting the inflationary supply over time. Initialised to 200 SNX.

**Type:** `uint256`

### `synthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L37)</sub>

The address of the main [`SynthetixProxy`](Proxy.md) contract.

**Type:** `address payable`

### `weekCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L27)</sub>

Counter to record the number of weeks inflation has been issued and calculate the applicable supply to add based on the current weekCounter.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L56)</sub>

Sets up the minting schedule and the inherited [`Owned`](Owned.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, uint256 _lastMintEvent, uint256 _currentWeek)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `recordMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L166)</sub>

This is called within [`Synthetix.mint`](Synthetix.md#mint) to declare that the outstanding inflationary supply of tokens has been minted before they are actually distributed.

When called, this function adds a quantity of [`mintableSupply()`](#mintablesupply) tokens to the current [`schedule.totalSupplyMinted`](#schedule) entry, and updates the [`lastMintEvent`](#lastmintevent) timestamp.

Although this function has no check that any tokens actually are mintable when it is called, the [`Synthetix`](Synthetix.md) contract requires it to be the case, so double calls should not occur. Similarly, the function does not itself enforce that the actual token supply has been increased by [`Synthetix`](Synthetix.md) in a manner consistent with the defined schedule and must simply trust that this compact is observed.

The function always returns `true` if the transaction was not reverted.

??? example "Details"

    **Signature**

    `recordMintEvent(uint256 supplyMinted) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [SupplyMinted](#supplyminted)

### `setMinterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L187)</sub>

Allows the owner to set the current [minter reward](#minterreward).

??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Reward cannot exceed max minter reward")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L188)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)

### `setSynthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L200)</sub>

Allows the owner to set the [`synthetix`](#synthetix) address.

??? example "Details"

    **Signature**

    `setSynthetixProxy(contract ISynthetix _synthetixProxy)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Address cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L201)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixProxyUpdated](#synthetixproxyupdated)

## External Functions

### `isMintable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L151)</sub>

Returns true if minting from the inflationary supply is permitted at the present time.

This means that tokens are only mintable once a week.

??? example "Details"

    **Signature**

    `isMintable() view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `mintableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L70)</sub>

Returns the number of tokens currently mintable from the inflationary supply.

If [`isMintable`](#ismintable) returns false, this is $0$. Otherwise, it is the number of tokens accruing per week in the current year, multiplied by the number of whole weeks since the last mint event.

??? example "Details"

    **Signature**

    `mintableSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `terminalInflationSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L128)</sub>

??? example "Details"

    **Signature**

    `terminalInflationSupply(uint256 totalSupply, uint256 numOfWeeks) pure returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `tokenDecaySupplyForWeek`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L115)</sub>

??? example "Details"

    **Signature**

    `tokenDecaySupplyForWeek(uint256 counter) pure returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `weeksSinceLastIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L140)</sub>

This just returns its argument floor divided by [`MINT_PERIOD_DURATION`](#MINT_PERIOD_DURATION). Since this is only used in `mintableSupply()` it seems as if a variable would have done better than a public function.

??? example "Details"

    **Signature**

    `weeksSinceLastIssuance() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L211)</sub>

Reverts the transaction if `msg.sender` is not the [`synthetix`](#synthetix) address. Synthetix address is found by lookup to the proxy.target().

## Events

### `MinterRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L228)</sub>

Records that the [minter reward was updated](#setminterreward).

**Signature**: `MinterRewardUpdated(uint256 newRewardAmount)`

### `SupplyMinted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L223)</sub>

Records that a quantity of new tokens was [minted](#updatemintvalues).

**Signature**: `SupplyMinted(uint256 supplyMinted, uint256 numberOfWeeksIssued, uint256 lastMintEvent, uint256 timestamp)`

### `SynthetixProxyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/SupplySchedule.sol#L233)</sub>

**Signature**: `SynthetixProxyUpdated(address newAddress)`
