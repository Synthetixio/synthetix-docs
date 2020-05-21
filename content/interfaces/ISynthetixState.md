# ISynthetixState

## Description


**Source:** [contracts/interfaces/ISynthetixState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol)

## Constants

## Variables

## Functions


---
### `appendDebtLedgerValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L25)</sub>



??? example "Details"

    **Signature**

    `appendDebtLedgerValue(uint256 value)`

    **State Mutability**

    `nonpayable`


---
### `clearIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L27)</sub>



??? example "Details"

    **Signature**

    `clearIssuanceData(address account)`

    **State Mutability**

    `nonpayable`


---
### `debtLedger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L6)</sub>



??? example "Details"

    **Signature**

    `debtLedger(uint256 index)`

    **State Mutability**

    `view`


---
### `debtLedgerLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L12)</sub>



??? example "Details"

    **Signature**

    `debtLedgerLength()`

    **State Mutability**

    `view`


---
### `decrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L21)</sub>



??? example "Details"

    **Signature**

    `decrementTotalIssuerCount()`

    **State Mutability**

    `nonpayable`


---
### `hasIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L14)</sub>



??? example "Details"

    **Signature**

    `hasIssued(address account)`

    **State Mutability**

    `view`


---
### `incrementTotalIssuerCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L19)</sub>



??? example "Details"

    **Signature**

    `incrementTotalIssuerCount()`

    **State Mutability**

    `nonpayable`


---
### `issuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L10)</sub>



??? example "Details"

    **Signature**

    `issuanceData(address account)`

    **State Mutability**

    `view`


---
### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L8)</sub>



??? example "Details"

    **Signature**

    `issuanceRatio()`

    **State Mutability**

    `view`


---
### `lastDebtLedgerEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L16)</sub>



??? example "Details"

    **Signature**

    `lastDebtLedgerEntry()`

    **State Mutability**

    `view`


---
### `setCurrentIssuanceData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetixState.sol#L23)</sub>



??? example "Details"

    **Signature**

    `setCurrentIssuanceData(address account, uint256 initialDebtOwnership)`

    **State Mutability**

    `nonpayable`

