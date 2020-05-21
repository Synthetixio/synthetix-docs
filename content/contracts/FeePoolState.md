# FeePoolState

## Description

This contract composes persistent state storage for the issuance percentage and index for each address interacting with the fee pool. These details are stored for the last six fee periods.


As a persistent state contract, FeePoolState is not intended to be easily upgraded, as opposed to the [`FeePool`](FeePool.md) itself, which _is_ so intended.


See [`FeePool.feesByPeriod`](FeePool.md#feesbyperiod) and [`FeePool.effectiveDebtRatioForPeriod`](FeePool.md#effectivedebtratioforperiod) for discussion of the meaning of this information held in this contract and how it is used.


!!! caution "Caution: The Number of Stored Fee Periods"


    Note that this contract contains storage for [up to six fee periods](#fee_period_length), while the FeePool contract limits it to [only three](FeePool.md#fee_period_length). This is a consequence of the implementation of [SIP 4](https://sips.synthetix.io/sips/sip-4), which reduced the fee window in the main [`FeePool`](FeePool.md) contract in order to encourage faster responses to alterations of system incentives. As part of this process, this storage contract was, of course, not upgraded.
    
    See also: [Design_Decisions.md](https://github.com/Synthetixio/synthetix/blob/master/Design_Decisions.md#feepoolstate).


**Source:** [contracts/FeePoolState.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol)

## Architecture

---
### Inheritance Graph

```mermaid
graph TD
    FeePoolState[FeePoolState] --> SelfDestructible[SelfDestructible]
    FeePoolState[FeePoolState] --> LimitedSetup[LimitedSetup]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
```

---
### Related Contracts

- <>[FeePool](FeePool.md)

---
### Libraries

- [SafeMath](/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/libraries/SafeDecimalMath) for `uint`

## Constants

---
### `FEE_PERIOD_LENGTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L22)</sub>





**Type:** `uint8`

## Variables

---
### `accountIssuanceLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L33)</sub>



A list of up to 6 [issuance data](#issuancedata) entries for each address, for the most recent changes to their issuance level. The fee periods do not have to be consecutive, but they are ordered from newest to oldest (decreasing debt ledger indexes).


Note that the entry `accountIssuanceLedger[account][0]` only corresponds to the current fee period if [`appendAccountIssuanceRecord(account, *, *, *)`](#appendaccountissuancerecord) has been called during the current fee period. That is, if the account has issued or burnt synths this period.




**Type:** `mapping(address => struct FeePoolState.IssuanceData[6])`

---
### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L24)</sub>



The address of the main [`FeePool`](FeePool.md) contract.




**Type:** `address`

## Structs

---
### `IssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L27)</sub>



Holds the issuance state and index of users interacting with the [`FeePool`](FeePool.md) for the last [several fee periods](#fee_period_length).


**Fields**


| Field | Type | Description |
| ------ | ------ | ------ |
| debtPercentage | uint256 | The percentage of the total system debt owned by the address associated with this entry at the time of issuance. These are [27-decimal fixed point numbers](SafeDecimalMath.md), closely related to the values in [`SynthetixState.debtLedger`](SynthetixState.md#debtledger). |
| debtEntryIndex | uint256 | The [debt ledger](SynthetixState.md#debtledger) index when this user issued or destroyed tokens. That is, the length of the ledger at the time of issuance. |


## Modifiers

---
### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L154)</sub>



Reverts the transaction if `msg.sender` is not the [fee pool address](#feepool).


## Function (Constructor)

---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L35)</sub>



??? example "Details"

    **Signature**

    `(address _owner, contract IFeePool _feePool)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [LimitedSetup](#limitedsetup)

## Functions

---
### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L98)</sub>



Allows the [`Synthetix`](Synthetix.md#_appendaccountissuancerecord) contract, through [`FeePool.appendAccountIssuanceRecord`](FeePool.md#appendaccountissuancerecord), to record current fee period issuance information for a given account in the issuance ledger. This is used when synths are issued or burnt.


If the latest entry in this account's issuance ledger was from the current fee period, it is overwritten. Otherwise, the existing entries are shifted down one spot, dropping the last one (using a call to [`issuanceDataIndexOrder`](#issuancedataindexorder)), and a new entry is added at the head of the list.


The `debtRatio` argument is a [27-decimal fixed point number](SafeDecimalMath.md).


??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 currentPeriodStartDebtIndex)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

---
### `applicableIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L73)</sub>



From a given account's issuance data, retrieve the most recent entry which closed before the provided index. If there is no such entry, `(0,0)` is returned.


This function is used in [`FeePool.feesByPeriod`](FeePool.md#feesbyperiod) and [`FeePool.effectiveDebtRatioForPeriod`](FeePool.md#effectivedebtratioforperiod) to compute the fees owed to a user for specific past periods.


The returned values are as per [`getAccountsDebtEntry`](#getaccountsdebtentry), hence the first return value is a [27-decimal fixed point number](SafeDecimalMath.md).


??? example "Details"

    **Signature**

    `applicableIssuanceData(address account, uint256 closingDebtIndex)`

    **State Mutability**

    `view`

---
### `getAccountsDebtEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L57)</sub>



Accesses [`accountIssuanceLedger`](#accountissuanceledger).


The first return value is a [27-decimal fixed point number](SafeDecimalMath.md).


??? example "Details"

    **Signature**

    `getAccountsDebtEntry(address account, uint256 index)`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., index exceeds the FEE_PERIOD_LENGTH)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L62)

---
### `issuanceDataIndexOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L118)</sub>



Shifts this account's array of issuance ledger entries down one place, overwriting the last entry. This is only used in [`appendAccountIssuanceRecord`](#appendaccountissuancerecord).


??? example "Details"

    **Signature**

    `issuanceDataIndexOrder(address account)`

    **State Mutability**

    `nonpayable`

## Functions (onlyOwner)

---
### `importIssuerData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L137)</sub>



??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] ratios, uint256 periodToInsert, uint256 feePeriodCloseIndex)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L143)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---
### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L46)</sub>



??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Events

---
### `IssuanceDebtRatioEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/FeePoolState.sol#L160)</sub>



Record that an entry was updated in the [issuance ledger](#accountissuanceledger) by the [`importIssuerData`](#importissuerdata) function during the setup period.


**Signature:** `IssuanceDebtRatioEntry(address indexed account, uint debtRatio, uint feePeriodCloseIndex)`


- `(address account, uint256 debtRatio, uint256 feePeriodCloseIndex)`

