# IDepot

## Description


**Source:** [contracts/interfaces/IDepot.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol)

## Constants

## Variables

## Functions

---
### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L17)</sub>



??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **State Mutability**

    `nonpayable`

---
### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L26)</sub>



??? example "Details"

    **Signature**

    `exchangeEtherForSNX()`

    **State Mutability**

    `payable`

---
### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L28)</sub>



??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedRate, uint256 guaranteedSynthetixRate)`

    **State Mutability**

    `payable`

---
### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L19)</sub>



??? example "Details"

    **Signature**

    `exchangeEtherForSynths()`

    **State Mutability**

    `payable`

---
### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L21)</sub>



??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate)`

    **State Mutability**

    `payable`

---
### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L30)</sub>



??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount)`

    **State Mutability**

    `nonpayable`

---
### `exchangeSynthsForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L32)</sub>



??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate)`

    **State Mutability**

    `nonpayable`

---
### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L6)</sub>



??? example "Details"

    **Signature**

    `fundsWallet()`

    **State Mutability**

    `view`

---
### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L8)</sub>



??? example "Details"

    **Signature**

    `maxEthPurchase()`

    **State Mutability**

    `view`

---
### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L10)</sub>



??? example "Details"

    **Signature**

    `minimumDepositAmount()`

    **State Mutability**

    `view`

---
### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L12)</sub>



??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount)`

    **State Mutability**

    `view`

---
### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L14)</sub>



??? example "Details"

    **Signature**

    `totalSellableDeposits()`

    **State Mutability**

    `view`

---
### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L23)</sub>



??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **State Mutability**

    `nonpayable`

