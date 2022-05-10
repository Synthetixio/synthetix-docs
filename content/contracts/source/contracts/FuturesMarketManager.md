# FuturesMarketManager

## Description

**Source:** [contracts/FuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol)

## Structs

### `MarketSummary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L133)</sub>

| Field                | Type      | Description |
| -------------------- | --------- | ----------- |
| `market`             | `address` | TBA         |
| `asset`              | `bytes32` | TBA         |
| `marketKey`          | `bytes32` | TBA         |
| `price`              | `uint256` | TBA         |
| `marketSize`         | `uint256` | TBA         |
| `marketSkew`         | `int256`  | TBA         |
| `marketDebt`         | `uint256` | TBA         |
| `currentFundingRate` | `int256`  | TBA         |
| `priceInvalid`       | `bool`    | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L49)</sub>

**Type:** `bytes32`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L45)</sub>

**Type:** `mapping(bytes32 => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L58)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L180)</sub>

??? example "Details"

    **Signature**

    `allMarketSummaries() view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L172)</sub>

??? example "Details"

    **Signature**

    `marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummariesForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L176)</sub>

??? example "Details"

    **Signature**

    `marketSummariesForKeys(bytes32[] marketKeys) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L84)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L114)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L91)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L62)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L121)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L189)</sub>

??? example "Details"

    **Signature**

    `addMarkets(address[] marketsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `burnSUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L250)</sub>

??? example "Details"

    **Signature**

    `burnSUSD(address account, uint256 amount) returns (uint256 postReclamationAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarkets](#onlymarkets)

### `issueSUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L240)</sub>

??? example "Details"

    **Signature**

    `issueSUSD(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarkets](#onlymarkets)

### `payFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L277)</sub>

??? example "Details"

    **Signature**

    `payFee(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarkets](#onlymarkets)

### `removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L224)</sub>

??? example "Details"

    **Signature**

    `removeMarkets(address[] marketsToRemove)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeMarketsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L231)</sub>

??? example "Details"

    **Signature**

    `removeMarketsByKey(bytes32[] marketKeysToRemove)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L77)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L73)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L102)</sub>

??? example "Details"

    **Signature**

    `_marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L205)</sub>

??? example "Details"

    **Signature**

    `_removeMarkets(address[] marketsToRemove)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_requireIsMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L285)</sub>

??? example "Details"

    **Signature**

    `_requireIsMarket() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Permitted only for markets")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L286)

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L69)</sub>

??? example "Details"

    **Signature**

    `_sUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L289)</sub>

## Events

### `MarketAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L296)</sub>

**Signature**: `MarketAdded(address market, bytes32 asset, bytes32 marketKey)`

### `MarketRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/FuturesMarketManager.sol#L298)</sub>

**Signature**: `MarketRemoved(address market, bytes32 asset, bytes32 marketKey)`
