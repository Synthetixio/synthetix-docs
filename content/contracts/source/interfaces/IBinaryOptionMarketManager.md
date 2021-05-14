# IBinaryOptionMarketManager

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol)

## Views

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L35)</sub>

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L27)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() view returns (uint256 capitalRequirement, uint256 skewLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L18)</sub>

??? example "Details"

    **Signature**

    `durations() view returns (uint256 maxOraclePriceAge, uint256 expiryDuration, uint256 maxTimeToMaturity)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L9)</sub>

??? example "Details"

    **Signature**

    `fees() view returns (uint256 poolFee, uint256 creatorFee, uint256 refundFee)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L29)</sub>

??? example "Details"

    **Signature**

    `marketCreationEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L39)</sub>

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L33)</sub>

??? example "Details"

    **Signature**

    `numActiveMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L37)</sub>

??? example "Details"

    **Signature**

    `numMaturedMarkets() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L31)</sub>

??? example "Details"

    **Signature**

    `totalDeposited() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `cancelMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L53)</sub>

??? example "Details"

    **Signature**

    `cancelMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L43)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, bool refundsEnabled, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L55)</sub>

??? example "Details"

    **Signature**

    `expireMarkets(address[] market)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/interfaces/IBinaryOptionMarketManager.sol#L51)</sub>

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    ``
