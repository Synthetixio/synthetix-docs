# IFuturesMarketManager

## Description

**Source:** [contracts/interfaces/IFuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol)

## Views

### `allEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L28)</sub>

??? example "Details"

    **Signature**

    `allEndorsedAddresses() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L16)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isEndorsed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L26)</sub>

??? example "Details"

    **Signature**

    `isEndorsed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L20)</sub>

??? example "Details"

    **Signature**

    `marketForKey(bytes32 marketKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L4)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L22)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L12)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L24)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L30)</sub>

??? example "Details"

    **Signature**

    `addEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketManager.sol#L32)</sub>

??? example "Details"

    **Signature**

    `removeEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``
