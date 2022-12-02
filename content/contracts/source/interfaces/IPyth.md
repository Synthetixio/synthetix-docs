# IPyth

## Description

**Source:** [contracts/interfaces/IPyth.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol)

## Views

### `getEmaPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L59)</sub>

??? example "Details"

    **Signature**

    `getEmaPrice(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getEmaPriceNoOlderThan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L97)</sub>

??? example "Details"

    **Signature**

    `getEmaPriceNoOlderThan(bytes32 id, uint256 age) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getEmaPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L89)</sub>

??? example "Details"

    **Signature**

    `getEmaPriceUnsafe(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L53)</sub>

??? example "Details"

    **Signature**

    `getPrice(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPriceNoOlderThan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getPriceNoOlderThan(bytes32 id, uint256 age) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L69)</sub>

??? example "Details"

    **Signature**

    `getPriceUnsafe(bytes32 id) view returns (struct PythStructs.Price price)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUpdateFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L133)</sub>

??? example "Details"

    **Signature**

    `getUpdateFee(uint256 updateDataSize) view returns (uint256 feeAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getValidTimePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L47)</sub>

??? example "Details"

    **Signature**

    `getValidTimePeriod() view returns (uint256 validTimePeriod)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `updatePriceFeeds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L106)</sub>

??? example "Details"

    **Signature**

    `updatePriceFeeds(bytes[] updateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

### `updatePriceFeedsIfNecessary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L124)</sub>

??? example "Details"

    **Signature**

    `updatePriceFeedsIfNecessary(bytes[] updateData, bytes32[] priceIds, uint64[] publishTimes) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

## Events

### `BatchPriceFeedUpdate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L38)</sub>

**Signature**: `BatchPriceFeedUpdate(uint16 chainId, uint64 sequenceNumber, uint256 batchSize, uint256 freshPricesInBatch)`

### `PriceFeedUpdate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L22)</sub>

**Signature**: `PriceFeedUpdate(bytes32 id, bool fresh, uint16 chainId, uint64 sequenceNumber, uint256 lastPublishTime, uint256 publishTime, int64 price, uint64 conf)`

### `UpdatePriceFeeds`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/interfaces/IPyth.sol#L44)</sub>

**Signature**: `UpdatePriceFeeds(address sender, uint256 batchCount, uint256 fee)`
