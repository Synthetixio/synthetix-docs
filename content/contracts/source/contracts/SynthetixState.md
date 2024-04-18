# SynthetixState

## Description

This is a state contract associated with the main [`Synthetix`](Synthetix.md) contract, which is the only address permitted to invoke most of its functionality.

This contract is responsible for recording issuance and debt information for the system and users within it, as well as the global [issuance ratio](#issuanceratio).

Upon system updates, this contract will continue to exist, while the Synthetix logic itself is swapped out.

!!! danger "Disabled: Preferred Currency Transfer Conversion"

    This contract also contains functionality enabling automatic [preferred currency](#preferredcurrency) conversion on Synth transfers, but it is currently disabled.

**Source:** [contracts/legacy/SynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol)

## Architecture

### Related Contracts

- [Issuer](Issuer.md) as this contract's `State.associatedContract`

## Structs

### `IssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L17)</sub>

| Field                  | Type      | Description |
| ---------------------- | --------- | ----------- |
| `initialDebtOwnership` | `uint256` | TBA         |
| `debtEntryIndex`       | `uint256` | TBA         |

## Variables

### `debtLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L37)</sub>

A list of factors indicating, for each [debt-modifying event](#appenddebtledgervalue), what effect it had on the percentage of debt of all other holders. Later debt ledger entries correspond to more recent issuance events.

**Type:** `uint256[]`

### `issuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L31)</sub>

The most recent issuance data for each address.

**Type:** `mapping(address => struct SynthetixState.IssuanceData)`

### `totalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L34)</sub>

The number of people with outstanding synths.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L39)</sub>

Initialises the inherited [`State`](State.md) and [`LimitedSetup`](LimitedSetup.md) instances.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `debtLedgerLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L93)</sub>

Returns the number of entries currently in [`debtLedger`](#debtledger).

Primarily used in [`FeePool`](FeePool.md) for fee period computations.

??? example "Details"

    **Signature**

    `debtLedgerLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L108)</sub>

Returns true if a given account has any outstanding issuance debt resulting from Synth minting.

Used in [`Synthetix._addToDebtRegister`](Synthetix.md#_addtodebtregister) to determine whether an minting event requires incrementing the total issuer count.

??? example "Details"

    **Signature**

    `hasIssued(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastDebtLedgerEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L100)</sub>

Returns the most recent [`debtLedger`](#debtledger) entry.

Primarily used in the [`Synthetix`](Synthetix.md) for debt computations.

??? example "Details"

    **Signature**

    `lastDebtLedgerEntry() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `appendDebtLedgerValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L84)</sub>

Pushes a new value to the end of the [`debtLedger`](#debtledger).

This is used by [`Synthetix._addToDebtRegister`](Synthetix.md#addtodebtregister) contract whenever Synths are issued or burnt, which modifies the total outstanding system debt.

??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `clearIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L59)</sub>

Deletes the issuance data associated with a given account.

??? example "Details"

    **Signature**

    `clearIssuanceData(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `decrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L75)</sub>

Reduces [`totalIssuerCount`](#totalissuercount) by one. This is called within [`Synthetix._removeFromDebtRegister`](Synthetix.md#_removefromdebtregister) whenever an issuer burns enough Synths to pay down their entire outstanding debt.

??? example "Details"

    **Signature**

    `decrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `incrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L67)</sub>

Increases [`totalIssuerCount`](#totalissuercount) by one. This is called within [`Synthetix._addToDebtRegister`](Synthetix.md#_addtodebtregister) whenever an account with no outstanding issuance debt mints new Synths.

??? example "Details"

    **Signature**

    `incrementTotalIssuerCount()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setCurrentIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/legacy/SynthetixState.sol#L49)</sub>

Allows the [`Synthetix`](Synthetix.md) contract to update the debt ownership entry for this account and sets their debt entry index to the current length of the [`debtLedger`](#debtledger).
The debt ledger itself is not modified.

??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)
