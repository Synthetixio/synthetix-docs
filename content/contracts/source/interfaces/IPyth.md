# IPyth

## Description

**Source:** [contracts/interfaces/IPyth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol)

## Views

### `getEmaPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L37)</sub>

??? example "Details"

    **Signature**

    `getEmaPrice(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getEmaPriceNoOlderThan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L75)</sub>

??? example "Details"

    **Signature**

    `getEmaPriceNoOlderThan(bytes32 id, uint256 age) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getEmaPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L67)</sub>

??? example "Details"

    **Signature**

    `getEmaPriceUnsafe(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L31)</sub>

??? example "Details"

    **Signature**

    `getPrice(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPriceNoOlderThan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getPriceNoOlderThan(bytes32 id, uint256 age) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L47)</sub>

??? example "Details"

    **Signature**

    `getPriceUnsafe(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUpdateFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getUpdateFee(bytes[] updateData) view returns (uint256 feeAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getValidTimePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L25)</sub>

??? example "Details"

    **Signature**

    `getValidTimePeriod() view returns (uint256 validTimePeriod)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `parsePriceFeedUpdates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L130)</sub>

??? example "Details"

    **Signature**

    `parsePriceFeedUpdates(bytes[] updateData, bytes32[] priceIds, uint64 minPublishTime, uint64 maxPublishTime) payable returns (struct PythStructs.PriceFeed[] priceFeeds)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `updatePriceFeeds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L84)</sub>

??? example "Details"

    **Signature**

    `updatePriceFeeds(bytes[] updateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `updatePriceFeedsIfNecessary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L102)</sub>

??? example "Details"

    **Signature**

    `updatePriceFeedsIfNecessary(bytes[] updateData, bytes32[] priceIds, uint64[] publishTimes) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

## Events

### `BatchPriceFeedUpdate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L22)</sub>

**Signature**: `BatchPriceFeedUpdate(uint16 chainId, uint64 sequenceNumber)`

### `PriceFeedUpdate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPyth.sol#L17)</sub>

**Signature**: `PriceFeedUpdate(bytes32 id, uint64 publishTime, int64 price, uint64 conf)`
