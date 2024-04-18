# EmptyFuturesMarketManager

## Description

**Source:** [contracts/EmptyFuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L9)</sub>

**Type:** `bytes32`

## Views

### `allEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L70)</sub>

??? example "Details"

    **Signature**

    `allEndorsedAddresses() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L39)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isEndorsed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L65)</sub>

??? example "Details"

    **Signature**

    `isEndorsed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `marketForKey(bytes32 marketKey) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L30)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L61)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `addEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L75)</sub>

??? example "Details"

    **Signature**

    `addEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EmptyFuturesMarketManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `removeEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``
