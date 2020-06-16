# SynthetixState

## Description

This is a state contract associated with the main [`Synthetix`](Synthetix.md) contract, which is the only address permitted to invoke most of its functionality.

This contract is responsible for recording issuance and debt information for the system and users within it, as well as the global [issuance ratio](#issuanceratio).

Upon system updates, this contract will continue to exist, while the Synthetix logic itself is swapped out.

!!! danger "Disabled: Preferred Currency Transfer Conversion"

    This contract also contains functionality enabling automatic [preferred currency](#preferredcurrency) conversion on Synth transfers, but it is currently disabled.

**Source:** [contracts/SynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    SynthetixState[SynthetixState] --> State[State]
    SynthetixState[SynthetixState] --> LimitedSetup[LimitedSetup]
    State[State] --> Owned[Owned]

```

### Related Contracts

- [Issuer](Issuer.md) as this contract's `State.associatedContract`

## Structs

### `IssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L19)</sub>

| Field                  | Type      | Description |
| ---------------------- | --------- | ----------- |
| `initialDebtOwnership` | `uint256` | TBA         |
| `debtEntryIndex`       | `uint256` | TBA         |

## Constants

### `MAX_ISSUANCE_RATIO`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L45)</sub>

Constraining the value of [`issuanceRatio`](#issuanceratio) to be less than $1.0$ ensures that Synthetix does not become a fractional reserve system.

**Value:** `UNIT`

**Type:** `uint256`

## Variables

### `debtLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L39)</sub>

A list of factors indicating, for each [debt-modifying event](#appenddebtledgervalue), what effect it had on the percentage of debt of all other holders. Later debt ledger entries correspond to more recent issuance events.

**Type:** `uint256[]`

### `issuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L33)</sub>

The most recent issuance data for each address.

**Type:** `mapping(address => struct SynthetixState.IssuanceData)`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L43)</sub>

The current global issuance ratio, which is the conversion factor between a value of SNX and the value of synths issued against them. As a result this determines the maximum ratio between the total value of Synths and SNX in the system.

It is also the target ratio for SNX stakers. As per the logic in [`FeePool.feesClaimable`](FeePool.md#feesclaimable), stakers can only claim any fee rewards if they are within ten percent of the issuance ratio. Therefore altering it will also alter the maximum total supply of Synths, as suppliers of Synths are strongly incentivised to track the issuance ratio closely.

If the issuance ratio is $\rho$, then the [maximum value](Synthetix.md#maxissuablesynths) $V_s$ of a synth $s$ [issuable](Synthetix.md#issuesynths) against a value $V_c$ of SNX collateral is just:

$$
V_s = \rho \ V_c
$$

Given that currency is worth its price times its quantity ($V_x = \pi_x \ Q_x$), we have:

$$
\pi_s \ Q_s = \rho \ \pi_c \ Q_c
$$

This implies that the quantity of synths received upon issuance is the quantity of collateral staked, multiplied by the issuance ratio and the ratio between the collateral and synth prices.

$$
Q_s = \rho \ \frac{\pi_c}{\pi_s} \ Q_c
$$

As a result of this calculation, the number of synths that can be issued increases as the SNX price increases, but decreases as the synth price increases. Since neither market prices nor synth supply can be controlled directly, the remaining parameter, the issuance ratio, is an important way of affecting these quantities.

???+ info "The Issuance Ratio as a Macro-Economic Lever"

    Tweaking the issuance ratio is an effective means of altering the total synth supply, and therefore its price.

    In cases where Synths are oversupplied, there is downward price pressure and decreased stability. Decreasing the issuance ratio both constrains the total supply of Synths circulating in the system, and transiently increases aggregate demand for Synths as every staker must rebuy a quantity of Synths and burn them.

    For precisely these reasons the issuance ratio was altered by [SCCP-2](https://sips.synthetix.io/sccp/sccp-2) from its initial value of $\frac{1}{5}$ to $\frac{2}{15}$.

    The related case of increasing the issuance ratio is similar.

**Type:** `uint256`

### `totalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L36)</sub>

The number of people with outstanding synths.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L47)</sub>

Initialises the inherited [`State`](State.md) and [`LimitedSetup`](LimitedSetup.md) instances.

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `debtLedgerLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L139)</sub>

Returns the number of entries currently in [`debtLedger`](#debtledger).

Primarily used in [`FeePool`](FeePool.md) for fee period computations.

??? example "Details"

    **Signature**

    `debtLedgerLength() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L154)</sub>

Returns true if a given account has any outstanding issuance debt resulting from Synth minting.

Used in [`Synthetix._addToDebtRegister`](Synthetix.md#_addtodebtregister) to determine whether an minting event requires incrementing the total issuer count.

??? example "Details"

    **Signature**

    `hasIssued(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastDebtLedgerEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L146)</sub>

Returns the most recent [`debtLedger`](#debtledger) entry.

Primarily used in the [`Synthetix`](Synthetix.md) for debt computations.

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `appendDebtLedgerValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L97)</sub>

Pushes a new value to the end of the [`debtLedger`](#debtledger).

This is used by [`Synthetix._addToDebtRegister`](Synthetix.md#addtodebtregister) contract whenever Synths are issued or burnt, which modifies the total outstanding system debt.

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `clearIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L72)</sub>

Deletes the issuance data associated with a given account.

??? example "Details"

    **Signature**

    `clearIssuanceData(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L88)</sub>

Reduces [`totalIssuerCount`](#totalissuercount) by one. This is called within [`Synthetix._removeFromDebtRegister`](Synthetix.md#_removefromdebtregister) whenever an issuer burns enough Synths to pay down their entire outstanding debt.

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L80)</sub>

Increases [`totalIssuerCount`](#totalissuercount) by one. This is called within [`Synthetix._addToDebtRegister`](Synthetix.md#_addtodebtregister) whenever an account with no outstanding issuance debt mints new Synths.

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setCurrentIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L62)</sub>

Allows the [`Synthetix`](Synthetix.md) contract to update the debt ownership entry for this account and sets their debt entry index to the current length of the [`debtLedger`](#debtledger).
The debt ledger itself is not modified.

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setIssuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L105)</sub>

Allows the owner to set the Synth [issuance ratio](#issuanceratio), but disallows setting it higher than $1.0$, which prevents more than one dollar worth of Synths being issued against each dollar of SNX backing them.

??? example "Details"

    **Signature**

    `setIssuanceRatio(uint256 _issuanceRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., New issuance ratio cannot exceed MAX_ISSUANCE_RATIO)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L106)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssuanceRatioUpdated](#issuanceratioupdated)

## Events

### `IssuanceRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/SynthetixState.sol#L158)</sub>

Records that the [issuance ratio](#issuanceratio) was modified.

**Signature**: `IssuanceRatioUpdated(uint256 newRatio)`
