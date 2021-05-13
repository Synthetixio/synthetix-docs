# IBinaryOptionMarketManager

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol)

## External Functions

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L35)</sub>

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cancelMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L53)</sub>

??? example "Details"

    **Signature**

    `cancelMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L43)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, bool refundsEnabled, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L27)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() view returns (uint256 capitalRequirement, uint256 skewLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L18)</sub>

??? example "Details"

    **Signature**

    `durations() view returns (uint256 maxOraclePriceAge, uint256 expiryDuration, uint256 maxTimeToMaturity)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `expireMarkets(address[] market)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L9)</sub>

??? example "Details"

    **Signature**

    `fees() view returns (uint256 poolFee, uint256 creatorFee, uint256 refundFee)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L29)</sub>

??? example "Details"

    **Signature**

    `marketCreationEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L39)</sub>

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `numActiveMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L37)</sub>

??? example "Details"

    **Signature**

    `numMaturedMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L51)</sub>

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0/contracts/interfaces/IBinaryOptionMarketManager.sol#L31)</sub>

??? example "Details"

    **Signature**

    `totalDeposited() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
