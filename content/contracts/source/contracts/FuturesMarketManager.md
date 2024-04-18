# FuturesMarketManager

## Description

**Source:** [contracts/FuturesMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol)

## Structs

### `MarketSummary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L184)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L63)</sub>

**Type:** `bytes32`

### `marketForKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L52)</sub>

**Type:** `mapping(bytes32 => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L72)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L240)</sub>

??? example "Details"

    **Signature**

    `allEndorsedAddresses() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L236)</sub>

??? example "Details"

    **Signature**

    `allMarketSummaries() view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `allMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L138)</sub>

??? example "Details"

    **Signature**

    `allMarkets() view returns (address[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isEndorsed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L244)</sub>

??? example "Details"

    **Signature**

    `isEndorsed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L228)</sub>

??? example "Details"

    **Signature**

    `marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSummariesForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L232)</sub>

??? example "Details"

    **Signature**

    `marketSummariesForKeys(bytes32[] marketKeys) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L98)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L165)</sub>

??? example "Details"

    **Signature**

    `marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L120)</sub>

??? example "Details"

    **Signature**

    `numMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L76)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L172)</sub>

??? example "Details"

    **Signature**

    `totalDebt() view returns (uint256 debt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `_addMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L291)</sub>

??? example "Details"

    **Signature**

    `_addMarket(address market, bool isProxied)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Market already exists")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L292)

    * [require(..., "Market already exists for key")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L297)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketAdded](#marketadded)

### `addEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L442)</sub>

??? example "Details"

    **Signature**

    `addEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L271)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L281)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L382)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L372)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L409)</sub>

??? example "Details"

    **Signature**

    `payFee(uint256 amount, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyMarketImplementations](#onlymarketimplementations)

### `removeEndorsedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L429)</sub>

??? example "Details"

    **Signature**

    `removeEndorsedAddresses(address[] addresses)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L341)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L348)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L352)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L250)</sub>

??? example "Details"

    **Signature**

    `_addImplementations(address market)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_addMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L291)</sub>

??? example "Details"

    **Signature**

    `_addMarket(address market, bool isProxied)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Market already exists")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L292)

    * [require(..., "Market already exists for key")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L297)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketAdded](#marketadded)

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L91)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L87)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketSummaries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L198)</sub>

??? example "Details"

    **Signature**

    `_marketSummaries(address[] addresses) view returns (struct FuturesMarketManager.MarketSummary[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_marketsForKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L153)</sub>

??? example "Details"

    **Signature**

    `_marketsForKeys(bytes32[] marketKeys) view returns (address[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L418)</sub>

??? example "Details"

    **Signature**

    `_payFee(uint256 amount, bytes32 trackingCode)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L258)</sub>

??? example "Details"

    **Signature**

    `_removeImplementations(address market)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L313)</sub>

??? example "Details"

    **Signature**

    `_removeMarkets(address[] marketsToRemove)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_requireIsMarketOrImplementation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L451)</sub>

??? example "Details"

    **Signature**

    `_requireIsMarketOrImplementation() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Permitted only for market implementations")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L452)

### `_sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L83)</sub>

??? example "Details"

    **Signature**

    `_sUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyMarketImplementations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L458)</sub>

## Events

### `EndorsedAddressAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L469)</sub>

**Signature**: `EndorsedAddressAdded(address endorsedAddress)`

### `EndorsedAddressRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L471)</sub>

**Signature**: `EndorsedAddressRemoved(address endorsedAddress)`

### `MarketAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L465)</sub>

**Signature**: `MarketAdded(address market, bytes32 asset, bytes32 marketKey)`

### `MarketRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketManager.sol#L467)</sub>

**Signature**: `MarketRemoved(address market, bytes32 asset, bytes32 marketKey)`
