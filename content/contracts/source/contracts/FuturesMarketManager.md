# FuturesMarketManager

## Description

**Source:** [contracts/FuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol)

## Variables

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L28)</sub>

**Type:** `mapping(bytes32 => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L39)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L79)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L65)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L95)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L72)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L43)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L102)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L119)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L180)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L170)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L207)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L154)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L161)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L58)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L54)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `_marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L135)</sub>

??? example "Details"

    **Signature**

    `_removeMarkets(address[] marketsToRemove)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_requireIsMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L215)</sub>

??? example "Details"

    **Signature**

    `_requireIsMarket() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Permitted only for markets")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L216)

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L50)</sub>

??? example "Details"

    **Signature**

    `_sUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L219)</sub>

## Events

### `MarketAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L226)</sub>

**Signature**: `MarketAdded(address market, bytes32 asset, bytes32 marketKey)`

### `MarketRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/FuturesMarketManager.sol#L228)</sub>

**Signature**: `MarketRemoved(address market, bytes32 asset, bytes32 marketKey)`
