# SupplySchedule

## Description

Defines the Synthetix inflationary supply schedule, according to which the synthetix inflationary supply is released.


Minting is performed in increments of a week whenever [`recordMintEvent`](#recordMintEvent) is called from [`Synthetix.mint`](Synthetix.md#mint). Minting can be called weekly after the time elapses for more than 7 days. These accrue so that no tokens are lost even if minting is not performed for several periods; the accrued total is minted at the next invocation. These computations are covered in more detail in the [`mintableSupply`](#mintablesupply) description.


The supply decay follows an exponential decay formula calculated for each week.


supplyForWeek = Initial Weekly Supply \* (1 - rate of decay) ^ number of weeks



**Source:** [contracts/SupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol)


---
### Schedule

To the initial 100 million tokens, 75 million / 52 weeks tokens were added for 39 weeks in 2019. Supply decay was implemented in week 40 whereby the weekly inflationary supply follows an exponential decay of 1.25% per week for a total of 195 weeks at Week 234.


After Week 235 the SNX supply will grow at 2.5% APR based on the total Supply of SNX each week. Compounded weekly the supply growth APY is 2.53% for the terminal supply growth.


**Source:** [SupplySchedule.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/SupplySchedule.sol)


## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    SupplySchedule[SupplySchedule] --> Owned[Owned]
```


---
### Related Contracts

- <>[Synthetix](Synthetix.md)


---
### Libraries

- [`SafeMath`](SafeMath.md) for `uint`
- [`SafeDecimalMath`](SafeDecimalMath.md) for `uint`
- [`Math`](Math.md) for `uint`

## Constants


---
### `DECAY_RATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L50)</sub>





**Type:** `uint256`


---
### `INFLATION_START_DATE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L44)</sub>





**Type:** `uint256`


---
### `INITIAL_WEEKLY_SUPPLY`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L33)</sub>





**Type:** `uint256`


---
### `MAX_MINTER_REWARD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L39)</sub>





**Type:** `uint256`


---
### `MINT_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L45)</sub>





**Type:** `uint256`


---
### `MINT_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L42)</sub>





**Type:** `uint256`


---
### `SUPPLY_DECAY_END`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L47)</sub>





**Type:** `uint8`


---
### `SUPPLY_DECAY_START`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L46)</sub>





**Type:** `uint8`


---
### `TERMINAL_SUPPLY_RATE_ANNUAL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L53)</sub>





**Type:** `uint256`

## Events


---
### `MinterRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L227)</sub>



Records that the [minter reward was updated](#setminterreward).


**Signature:** `MinterRewardUpdated(uint newRewardAmount)`


- `(uint256 newRewardAmount)`


---
### `SupplyMinted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L222)</sub>



Records that a quantity of new tokens was [minted](#updatemintvalues).


**Signature:** `SupplyMinted(uint supplyMinted, uint numberOfWeeksIssued, uint lastMintEvent, uint timestamp)`


- `(uint256 supplyMinted, uint256 numberOfWeeksIssued, uint256 lastMintEvent, uint256 timestamp)`


---
### `SynthetixProxyUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L232)</sub>



- `(address newAddress)`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L55)</sub>



??? example "Details"

    **Signature**

    `(address _owner, uint256 _lastMintEvent, uint256 _currentWeek)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions


---
### `isMintable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L150)</sub>



Returns true if minting from the inflationary supply is permitted at the present time.


This means that tokens are only mintable once a week.


??? example "Details"

    **Signature**

    `isMintable()`

    **State Mutability**

    `view`


---
### `mintableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L69)</sub>



Returns the number of tokens currently mintable from the inflationary supply.


If [`isMintable`](#ismintable) returns false, this is $0$. Otherwise, it is the number of tokens accruing per week in the current year, multiplied by the number of whole weeks since the last mint event.


??? example "Details"

    **Signature**

    `mintableSupply()`

    **State Mutability**

    `view`


---
### `recordMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L165)</sub>



This is called within [`Synthetix.mint`](Synthetix.md#mint) to declare that the outstanding inflationary supply of tokens has been minted before they are actually distributed.


When called, this function adds a quantity of [`mintableSupply()`](#mintablesupply) tokens to the current [`schedule.totalSupplyMinted`](#schedule) entry, and updates the [`lastMintEvent`](#lastmintevent) timestamp.


Although this function has no check that any tokens actually are mintable when it is called, the [`Synthetix`](Synthetix.md) contract requires it to be the case, so double calls should not occur. Similarly, the function does not itself enforce that the actual token supply has been increased by [`Synthetix`](Synthetix.md) in a manner consistent with the defined schedule and must simply trust that this compact is observed.


The function always returns `true` if the transaction was not reverted.


??? example "Details"

    **Signature**

    `recordMintEvent(uint256 supplyMinted)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [SupplyMinted](#supplyminted)


---
### `terminalInflationSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L127)</sub>



??? example "Details"

    **Signature**

    `terminalInflationSupply(uint256 totalSupply, uint256 numOfWeeks)`

    **State Mutability**

    `pure`


---
### `tokenDecaySupplyForWeek`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L114)</sub>



??? example "Details"

    **Signature**

    `tokenDecaySupplyForWeek(uint256 counter)`

    **State Mutability**

    `pure`


---
### `weeksSinceLastIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L139)</sub>



This just returns its argument floor divided by [`MINT_PERIOD_DURATION`](#MINT_PERIOD_DURATION). Since this is only used in `mintableSupply()` it seems as if a variable would have done better than a public function.


??? example "Details"

    **Signature**

    `weeksSinceLastIssuance()`

    **State Mutability**

    `view`

## Functions (onlyOwner)


---
### `setMinterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L186)</sub>



??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Reward cannot exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L187)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)


---
### `setSynthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L199)</sub>



??? example "Details"

    **Signature**

    `setSynthetixProxy(contract ISynthetix _synthetixProxy)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Address cannot be 0)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L200)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixProxyUpdated](#synthetixproxyupdated)

## Modifiers


---
### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L210)</sub>



Reverts the transaction if `msg.sender` is not the [`synthetix`](#synthetix) address. Synthetix address is found by lookup to the proxy.target().


## Variables


---
### `lastMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L23)</sub>



The timestamp when new supply was last minted - Is set to the number of weeks since inflation start date plus a minting buffer to allow feePeriod to close first.




**Type:** `uint256`


---
### `minterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L29)</sub>



Used as the quantity of SNX to reward the caller of [`Synthetix.mint`](Synthetix.md#mint), which incentivises users to continue minting the inflationary supply over time. Initialised to 200 SNX.




**Type:** `uint256`


---
### `synthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L36)</sub>



The address of the main [`SynthetixProxy`](Proxy.md) contract.




**Type:** `address payable`


---
### `weekCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L26)</sub>



Counter to record the number of weeks inflation has been issued and calculate the applicable supply to add based on the current weekCounter.




**Type:** `uint256`

