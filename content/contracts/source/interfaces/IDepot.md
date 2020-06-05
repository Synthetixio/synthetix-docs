# IDepot

## Description

**Source:** [contracts/interfaces/IDepot.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol)

## Views

### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L6)</sub>

??? example "Details"

    **Signature**

    `fundsWallet()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L8)</sub>

??? example "Details"

    **Signature**

    `maxEthPurchase()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L10)</sub>

??? example "Details"

    **Signature**

    `minimumDepositAmount()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L12)</sub>

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalSellableDeposits()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L17)</sub>

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L26)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNX()`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L28)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedRate, uint256 guaranteedSynthetixRate)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L19)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L21)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L30)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeSynthsForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L32)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IDepot.sol#L23)</sub>

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`