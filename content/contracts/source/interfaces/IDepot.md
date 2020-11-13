# IDepot

## Description

**Source:** [contracts/interfaces/IDepot.sol](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol)

## Views

### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L7)</sub>

??? example "Details"

    **Signature**

    `fundsWallet() returns (address payable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L9)</sub>

??? example "Details"

    **Signature**

    `maxEthPurchase() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L11)</sub>

??? example "Details"

    **Signature**

    `minimumDepositAmount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthetixReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L33)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthetixReceivedForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L13)</sub>

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalSellableDeposits() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L18)</sub>

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L27)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L29)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedRate, uint256 guaranteedSynthetixRate) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L20)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L22)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L31)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L24)</sub>

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2/contracts/interfaces/IDepot.sol#L37)</sub>

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
