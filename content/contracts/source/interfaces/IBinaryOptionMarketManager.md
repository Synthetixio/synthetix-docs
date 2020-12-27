# IBinaryOptionMarketManager

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol)

## Views

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L36)</sub>

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L28)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L19)</sub>

??? example "Details"

    **Signature**

    `durations() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L10)</sub>

??? example "Details"

    **Signature**

    `fees() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L30)</sub>

??? example "Details"

    **Signature**

    `marketCreationEnabled() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L40)</sub>

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L34)</sub>

??? example "Details"

    **Signature**

    `numActiveMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L38)</sub>

??? example "Details"

    **Signature**

    `numMaturedMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L32)</sub>

??? example "Details"

    **Signature**

    `totalDeposited() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `cancelMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L54)</sub>

??? example "Details"

    **Signature**

    `cancelMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L44)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, bool refundsEnabled, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L56)</sub>

??? example "Details"

    **Signature**

    `expireMarkets(address[] market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L52)</sub>

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
