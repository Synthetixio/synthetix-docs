# EmptyFuturesMarketManager

## Description

**Source:** [contracts/EmptyFuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L9)</sub>

**Type:** `bytes32`

## Views

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L39)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `marketForKey(bytes32 marketKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L30)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/EmptyFuturesMarketManager.sol#L61)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
