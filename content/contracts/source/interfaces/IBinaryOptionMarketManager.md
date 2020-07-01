# IBinaryOptionMarketManager

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol)

## Views

### `activeMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L16)</sub>

??? example "Details"

    **Signature**

    `activeMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L10)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L9)</sub>

??? example "Details"

    **Signature**

    `durations() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `fees() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L12)</sub>

??? example "Details"

    **Signature**

    `marketCreationEnabled() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L18)</sub>

??? example "Details"

    **Signature**

    `maturedMarkets(uint256 index, uint256 pageSize) returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numActiveMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L15)</sub>

??? example "Details"

    **Signature**

    `numActiveMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMaturedMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `numMaturedMarkets() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalDeposited() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L22)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 strikePrice, uint256[2] times, uint256[2] bids) returns (contract IBinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `expireMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L28)</sub>

??? example "Details"

    **Signature**

    `expireMarkets(address[] market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `resolveMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0-beta/contracts/interfaces/IBinaryOptionMarketManager.sol#L27)</sub>

??? example "Details"

    **Signature**

    `resolveMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
