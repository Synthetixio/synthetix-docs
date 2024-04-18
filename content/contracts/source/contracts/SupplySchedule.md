# SupplySchedule

## Description

Defines the Synthetix inflationary supply schedule, according to which the synthetix inflationary supply is released.

Minting is performed in increments of a week whenever [`recordMintEvent`](#recordMintEvent) is called from [`Synthetix.mint`](Synthetix.md#mint). Minting can be called weekly after the time elapses for more than 7 days. These accrue so that no tokens are lost even if minting is not performed for several periods; the accrued total is minted at the next invocation. These computations are covered in more detail in the [`mintableSupply`](#mintablesupply) description.

The supply decay follows an exponential decay formula calculated for each week.

supplyForWeek = Initial Weekly Supply \* (1 - rate of decay) ^ number of weeks

**Source:** [contracts/SupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol)

## Architecture

### Related Contracts

- [Synthetix](Synthetix.md)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L22)</sub>

**Type:** `bytes32`

### `INFLATION_START_DATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L30)</sub>

The timestamp at which the inflationary SNX supply began to be minted.

**Value:** `1551830400 (2019-03-06T00:00:00+00:00)`

**Type:** `uint256`

### `MAX_MINTER_REWARD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L44)</sub>

**Type:** `uint256`

### `MINT_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L49)</sub>

A buffer added to the lastMintEvent to ensure that synthetix rewards are issued after a feePeriod closes.

**Value:** `1 days`

**Type:** `uint256`

### `MINT_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L47)</sub>

The duration of each minting period. This is constant at one week.

**Value:** `1 weeks`

**Type:** `uint256`

### `inflationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L36)</sub>

**Type:** `uint256`

### `lastMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L25)</sub>

The timestamp when new supply was last minted - Is set to the number of weeks since inflation start date plus a minting buffer to allow feePeriod to close first.

**Type:** `uint256`

### `maxInflationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L38)</sub>

**Type:** `uint256`

### `minterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L33)</sub>

Used as the quantity of SNX to reward the caller of [`Synthetix.mint`](Synthetix.md#mint), which incentivises users to continue minting the inflationary supply over time. Initialised to 200 SNX.

**Type:** `uint256`

### `synthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L41)</sub>

The address of the main [`SynthetixProxy`](Proxy.md) contract.

**Type:** `address payable`

### `weekCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L28)</sub>

Counter to record the number of weeks inflation has been issued and calculate the applicable supply to add based on the current weekCounter.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L51)</sub>

Sets up the minting schedule and the inherited [`Owned`](Owned.md) instance.

??? example "Details"

    **Signature**

    `constructor(address _owner, uint256 _lastMintEvent, uint256 _currentWeek)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `isMintable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L93)</sub>

Returns true if minting from the inflationary supply is permitted at the present time.

This means that tokens are only mintable once a week.

??? example "Details"

    **Signature**

    `isMintable() view returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L65)</sub>

Returns the number of tokens currently mintable from the inflationary supply.

If [`isMintable`](#ismintable) returns false, this is $0$. Otherwise, it is the number of tokens accruing per week in the current year, multiplied by the number of whole weeks since the last mint event.

??? example "Details"

    **Signature**

    `mintableSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `weeksSinceLastIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L82)</sub>

This just returns its argument floor divided by [`MINT_PERIOD_DURATION`](#MINT_PERIOD_DURATION). Since this is only used in `mintableSupply()` it seems as if a variable would have done better than a public function.

??? example "Details"

    **Signature**

    `weeksSinceLastIssuance() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `recordMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L109)</sub>

This is called within [`Synthetix.mint`](Synthetix.md#mint) to declare that the outstanding inflationary supply of tokens has been minted before they are actually distributed.

When called, this function adds a quantity of [`mintableSupply()`](#mintablesupply) tokens to the current [`schedule.totalSupplyMinted`](#schedule) entry, and updates the [`lastMintEvent`](#lastmintevent) timestamp.

Although this function has no check that any tokens actually are mintable when it is called, the [`Synthetix`](Synthetix.md) contract requires it to be the case, so double calls should not occur. Similarly, the function does not itself enforce that the actual token supply has been increased by [`Synthetix`](Synthetix.md) in a manner consistent with the defined schedule and must simply trust that this compact is observed.

The function always returns `true` if the transaction was not reverted.

??? example "Details"

    **Signature**

    `recordMintEvent(uint256 supplyMinted) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [SupplyMinted](#supplyminted)

### `setInflationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L154)</sub>

??? example "Details"

    **Signature**

    `setInflationAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Amount above maximum inflation")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L155)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InflationAmountUpdated](#inflationamountupdated)

### `setMaxInflationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L160)</sub>

??? example "Details"

    **Signature**

    `setMaxInflationAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxInflationAmountUpdated](#maxinflationamountupdated)

### `setMinterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L132)</sub>

Allows the owner to set the current [minter reward](#minterreward).

??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Reward cannot exceed max minter reward")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L133)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)

### `setSynthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L143)</sub>

Allows the owner to set the [`synthetix`](#synthetix) address.

??? example "Details"

    **Signature**

    `setSynthetixProxy(contract ISynthetix _synthetixProxy)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Address cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L144)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixProxyUpdated](#synthetixproxyupdated)

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L170)</sub>

Reverts the transaction if `msg.sender` is not the [`synthetix`](#synthetix) address. Synthetix address is found by lookup to the proxy.target().

## Events

### `InflationAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L192)</sub>

**Signature**: `InflationAmountUpdated(uint256 newInflationAmount)`

### `MaxInflationAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L197)</sub>

**Signature**: `MaxInflationAmountUpdated(uint256 newInflationAmount)`

### `MinterRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L187)</sub>

Records that the [minter reward was updated](#setminterreward).

**Signature**: `MinterRewardUpdated(uint256 newRewardAmount)`

### `SupplyMinted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L182)</sub>

Records that a quantity of new tokens was [minted](#updatemintvalues).

**Signature**: `SupplyMinted(uint256 supplyMinted, uint256 numberOfWeeksIssued, uint256 lastMintEvent, uint256 timestamp)`

### `SynthetixProxyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SupplySchedule.sol#L202)</sub>

**Signature**: `SynthetixProxyUpdated(address newAddress)`
