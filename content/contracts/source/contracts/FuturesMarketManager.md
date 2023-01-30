# FuturesMarketManager

## Description

**Source:** [contracts/FuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol)

## Structs

### `MarketSummary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L181)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `market`                 | `address` | TBA         |
| `asset`                  | `bytes32` | TBA         |
| `marketKey`              | `bytes32` | TBA         |
| `price`                  | `uint256` | TBA         |
| `marketSize`             | `uint256` | TBA         |
| `marketSkew`             | `int256`  | TBA         |
| `marketDebt`             | `uint256` | TBA         |
| `currentFundingRate`     | `int256`  | TBA         |
| `currentFundingVelocity` | `int256`  | TBA         |
| `priceInvalid`           | `bool`    | TBA         |
| `proxied`                | `bool`    | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L60)</sub>

**Type:** `bytes32`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L52)</sub>

**Type:** `mapping(bytes32 => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L69)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L233)</sub>

??? example "Details"

    **Signature**

    `allMarketSummaries() view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L135)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L225)</sub>

??? example "Details"

    **Signature**

    `marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummariesForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L229)</sub>

??? example "Details"

    **Signature**

    `marketSummariesForKeys(bytes32[] marketKeys) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L95)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L162)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L117)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L73)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L169)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `_addMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L280)</sub>

??? example "Details"

    **Signature**

    `_addMarket(address market, bool isProxied)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Market already exists")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L281)

    * [require(..., "Market already exists for key")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L286)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketAdded](#marketadded)

### `addMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L260)</sub>

??? example "Details"

    **Signature**

    `addMarkets(address[] marketsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addProxiedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L270)</sub>

??? example "Details"

    **Signature**

    `addProxiedMarkets(address[] marketsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `burnSUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L371)</sub>

??? example "Details"

    **Signature**

    `burnSUSD(address account, uint256 amount) returns (uint256 postReclamationAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarketImplementations](#onlymarketimplementations)

### `issueSUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L361)</sub>

??? example "Details"

    **Signature**

    `issueSUSD(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarketImplementations](#onlymarketimplementations)

### `payFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L398)</sub>

??? example "Details"

    **Signature**

    `payFee(uint256 amount, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarketImplementations](#onlymarketimplementations)

### `removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L330)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L337)</sub>

??? example "Details"

    **Signature**

    `removeMarketsByKey(bytes32[] marketKeysToRemove)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateMarketsImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L341)</sub>

??? example "Details"

    **Signature**

    `updateMarketsImplementations(address[] marketsToUpdate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L239)</sub>

??? example "Details"

    **Signature**

    `_addImplementations(address market)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_addMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L280)</sub>

??? example "Details"

    **Signature**

    `_addMarket(address market, bool isProxied)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Market already exists")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L281)

    * [require(..., "Market already exists for key")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L286)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketAdded](#marketadded)

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L88)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L84)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L195)</sub>

??? example "Details"

    **Signature**

    `_marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L150)</sub>

??? example "Details"

    **Signature**

    `_marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L407)</sub>

??? example "Details"

    **Signature**

    `_payFee(uint256 amount, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L247)</sub>

??? example "Details"

    **Signature**

    `_removeImplementations(address market)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L302)</sub>

??? example "Details"

    **Signature**

    `_removeMarkets(address[] marketsToRemove)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_requireIsMarketOrImplementation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L416)</sub>

??? example "Details"

    **Signature**

    `_requireIsMarketOrImplementation() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Permitted only for market implementations")](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L417)

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L80)</sub>

??? example "Details"

    **Signature**

    `_sUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyMarketImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L423)</sub>

## Events

### `MarketAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L430)</sub>

**Signature**: `MarketAdded(address market, bytes32 asset, bytes32 marketKey)`

### `MarketRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.4-alpha/contracts/FuturesMarketManager.sol#L432)</sub>

**Signature**: `MarketRemoved(address market, bytes32 asset, bytes32 marketKey)`
