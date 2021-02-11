# IDepot

## Description

**Source:** [contracts/interfaces/IDepot.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol)

## External Functions

### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L18)</sub>

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L27)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L29)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedRate, uint256 guaranteedSynthetixRate) payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L20)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L22)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) payable returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L31)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L7)</sub>

??? example "Details"

    **Signature**

    `fundsWallet() view returns (address payable)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L9)</sub>

??? example "Details"

    **Signature**

    `maxEthPurchase() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L11)</sub>

??? example "Details"

    **Signature**

    `minimumDepositAmount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthetixReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L33)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthetixReceivedForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L13)</sub>

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalSellableDeposits() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L24)</sub>

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/interfaces/IDepot.sol#L37)</sub>

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
