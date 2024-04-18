# FeePoolState

## Description

This contract composes persistent state storage for the issuance percentage and index for each address interacting with the fee pool. These details are stored for the last six fee periods.

As a persistent state contract, FeePoolState is not intended to be easily upgraded, as opposed to the [`FeePool`](FeePool.md) itself, which _is_ so intended.

See [`FeePool.feesByPeriod`](FeePool.md#feesbyperiod) and [`FeePool.effectiveDebtRatioForPeriod`](FeePool.md#effectivedebtratioforperiod) for discussion of the meaning of this information held in this contract and how it is used.

!!! caution "Caution: The Number of Stored Fee Periods"

    Note that this contract contains storage for [up to six fee periods](#fee_period_length), while the FeePool contract limits it to [only three](FeePool.md#fee_period_length). This is a consequence of the implementation of [SIP 4](https://sips.synthetix.io/sips/sip-4), which reduced the fee window in the main [`FeePool`](FeePool.md) contract in order to encourage faster responses to alterations of system incentives. As part of this process, this storage contract was, of course, not upgraded.

    See also: [Design_Decisions.md](https://github.com/Synthetixio/synthetix/blob/master/Design_Decisions.md#feepoolstate).

**Source:** [contracts/legacy/FeePoolState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol)

## Architecture

### Related Contracts

- <>[FeePool](FeePool.md)

## Structs

### `IssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L25)</sub>

Holds the issuance state and index of users interacting with the [`FeePool`](FeePool.md) for the last [several fee periods](#fee_period_length).

For more information on these fields and their meaning, see the main [`Synthetix`](Synthetix.md) contract functions [`_addToDebtRegister`](Synthetix.md#_addtodebtregister) and [`_removeFromDebtRegister`](Synthetix.md#_removefromdebtregister), along with the corresponding struct in [`SynthetixState`](SynthetixState.md#issuancedata).

!!! info "Relationship with `SynthetixState`"

    This is the same struct as [`SynthetixState.issuanceData`](SynthetixState.md#issuancedata), modulo naming, but in the case of SynthetixState, only one entry is kept, corresponding to only the most recent issuance event associated with an address.

    This induces a slightly awkward structure where the current and historical issuance information is stored over two separate contracts. In a future version this information could potentially be stored in a unified structure for dividends in efficiency and clarity.

| Field            | Type      | Description                                                                                                                                                                                                                                                                                 |
| ---------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `debtPercentage` | `uint256` | The percentage of the total system debt owned by the address associated with this entry at the time of issuance. These are [27-decimal fixed point numbers](../libraries/SafeDecimalMath.md), closely related to the values in [`SynthetixState.debtLedger`](SynthetixState.md#debtledger). |
| `debtEntryIndex` | `uint256` | The [debt ledger](SynthetixState.md#debtledger) index when this user issued or destroyed tokens. That is, the length of the ledger at the time of issuance.                                                                                                                                 |

## Variables

### `FEE_PERIOD_LENGTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L20)</sub>

The number of fee periods (6) worth of issuance data to keep. Note the inconsistency with the corresponding constant in [`FeePool`](FeePool.md#fee_period_length), which is set to 3.

**Value:** `6`

**Type:** `uint8`

### `accountIssuanceLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L31)</sub>

A list of up to 6 [issuance data](#issuancedata) entries for each address, for the most recent changes to their issuance level. The fee periods do not have to be consecutive, but they are ordered from newest to oldest (decreasing debt ledger indexes).

Note that the entry `accountIssuanceLedger[account][0]` only corresponds to the current fee period if [`appendAccountIssuanceRecord(account, *, *, *)`](#appendaccountissuancerecord) has been called during the current fee period. That is, if the account has issued or burnt synths this period.

**Type:** `mapping(address => struct FeePoolState.IssuanceData[6])`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L22)</sub>

The address of the main [`FeePool`](FeePool.md) contract.

**Type:** `address`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L33)</sub>

Initialises the fee pool address, as well as the inherited [`SelfDestructible`](SelfDestructible.md) and [`LimitedSetup`](LimitedSetup.md) instances. The setup period is initialised to six weeks.

??? example "Details"

    **Signature**

    `constructor(address _owner, contract IFeePool _feePool)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `applicableIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L71)</sub>

From a given account's issuance data, retrieve the most recent entry which closed before the provided index. If there is no such entry, `(0,0)` is returned.

This function is used in [`FeePool.feesByPeriod`](FeePool.md#feesbyperiod) and [`FeePool.effectiveDebtRatioForPeriod`](FeePool.md#effectivedebtratioforperiod) to compute the fees owed to a user for specific past periods.

The returned values are as per [`getAccountsDebtEntry`](#getaccountsdebtentry), hence the first return value is a [27-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `applicableIssuanceData(address account, uint256 closingDebtIndex) view returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAccountsDebtEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L55)</sub>

Accesses [`accountIssuanceLedger`](#accountissuanceledger).

The first return value is a [27-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `getAccountsDebtEntry(address account, uint256 index) view returns (uint256 debtPercentage, uint256 debtEntryIndex)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "index exceeds the FEE_PERIOD_LENGTH")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L60)

## Restricted Functions

### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L96)</sub>

Allows the [`Synthetix`](Synthetix.md#_appendaccountissuancerecord) contract, through [`FeePool.appendAccountIssuanceRecord`](FeePool.md#appendaccountissuancerecord), to record current fee period issuance information for a given account in the issuance ledger. This is used when synths are issued or burnt.

If the latest entry in this account's issuance ledger was from the current fee period, it is overwritten. Otherwise, the existing entries are shifted down one spot, dropping the last one (using a call to [`issuanceDataIndexOrder`](#issuancedataindexorder)), and a new entry is added at the head of the list.

The `debtRatio` argument is a [27-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 currentPeriodStartDebtIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

### `importIssuerData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L135)</sub>

This function was used during the initial six week setup period to initialise the issuance ledger from the previous Synthetix version.

??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] ratios, uint256 periodToInsert, uint256 feePeriodCloseIndex)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L141)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L44)</sub>

Changes the [fee pool address](#feepool).

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Modifiers

### `onlyFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L152)</sub>

Reverts the transaction if `msg.sender` is not the [fee pool address](#feepool).

## Events

### `IssuanceDebtRatioEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/FeePoolState.sol#L158)</sub>

Record that an entry was updated in the [issuance ledger](#accountissuanceledger) by the [`importIssuerData`](#importissuerdata) function during the setup period.

**Signature**: `IssuanceDebtRatioEntry(address account, uint256 debtRatio, uint256 feePeriodCloseIndex)`
