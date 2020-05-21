# ExchangeState

**Source:** [ExchangeState.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/ExchangeState.sol)


!!! todo "Work in Progress"


    This needs filling in

## Description

... todo.



**Source:** [contracts/ExchangeState.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol)

## Architecture

... todo.


<!--centered-image>
    ![Architecture Graph](../img/graphs/todo-architecture.svg)
</centered-image-->

---
### Inheritance Graph

```mermaid
graph TD
    ExchangeState[ExchangeState] --> State[State]
    State[State] --> Owned[Owned]
```

---
### Related Contracts

- ?

## Views

## Variables

---
### `exchanges`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L22)</sub>





**Type:** `mapping(address => mapping(bytes32 => struct ExchangeState.ExchangeEntry[]))`

---
### `maxEntriesInQueue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L24)</sub>





**Type:** `uint256`

## Structs

---
### `ExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L11)</sub>



| Field | Type | Description |
| ------ | ------ | ------ |
| src | bytes32 | TBA |
| amount | uint256 | TBA |
| dest | bytes32 | TBA |
| amountReceived | uint256 | TBA |
| exchangeFeeRate | uint256 | TBA |
| timestamp | uint256 | TBA |
| roundIdForSrc | uint256 | TBA |
| roundIdForDest | uint256 | TBA |


## Function (Constructor)

---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L26)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [State](#state)

## Functions

---
### `appendExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L36)</sub>



??? example "Details"

    **Signature**

    `appendExchangeEntry(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Max queue length reached)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L47)

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---
### `getEntryAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L73)</sub>



??? example "Details"

    **Signature**

    `getEntryAt(address account, bytes32 currencyKey, uint256 index)`

    **State Mutability**

    `view`

---
### `getLengthOfEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L69)</sub>



??? example "Details"

    **Signature**

    `getLengthOfEntries(address account, bytes32 currencyKey)`

    **State Mutability**

    `view`

---
### `getMaxTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L104)</sub>



??? example "Details"

    **Signature**

    `getMaxTimestamp(address account, bytes32 currencyKey)`

    **State Mutability**

    `view`

---
### `removeEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L63)</sub>



??? example "Details"

    **Signature**

    `removeEntries(address account, bytes32 currencyKey)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Functions (onlyOwner)

---
### `setMaxEntriesInQueue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/ExchangeState.sol#L30)</sub>



??? example "Details"

    **Signature**

    `setMaxEntriesInQueue(uint256 _maxEntriesInQueue)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal & Restricted Mutative Functions

## Owner Mutative Functions

## Public Mutative Functions

