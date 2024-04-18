# IDepot

## Description

**Source:** [contracts/interfaces/IDepot.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol)

## Views

### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L6)</sub>

??? example "Details"

    **Signature**

    `fundsWallet() view returns (address payable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L8)</sub>

??? example "Details"

    **Signature**

    `maxEthPurchase() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L10)</sub>

??? example "Details"

    **Signature**

    `minimumDepositAmount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthetixReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L32)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthetixReceivedForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L34)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L12)</sub>

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L14)</sub>

??? example "Details"

    **Signature**

    `totalSellableDeposits() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L17)</sub>

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L26)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L28)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedRate, uint256 guaranteedSynthetixRate) payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L19)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L21)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L30)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L23)</sub>

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDepot.sol#L36)</sub>

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``
