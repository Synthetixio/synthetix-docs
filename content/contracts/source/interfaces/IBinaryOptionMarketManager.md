# IBinaryOptionMarketManager

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarketManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol)

## Views

### `capitalRequirement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L11)</sub>

??? example "Details"

    **Signature**

    `capitalRequirement()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `durations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L9)</sub>

??? example "Details"

    **Signature**

    `durations()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L8)</sub>

??? example "Details"

    **Signature**

    `fees()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketCreationEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L12)</sub>

??? example "Details"

    **Signature**

    `marketCreationEnabled()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `markets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L16)</sub>

??? example "Details"

    **Signature**

    `markets(uint256 index, uint256 pageSize)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `numMarkets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L15)</sub>

??? example "Details"

    **Signature**

    `numMarkets()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `publiclyDestructibleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L17)</sub>

??? example "Details"

    **Signature**

    `publiclyDestructibleTime(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalDeposited()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L21)</sub>

??? example "Details"

    **Signature**

    `createMarket(bytes32 oracleKey, uint256 targetPrice, uint256[2] times, uint256[2] bids)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `destroyMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarketManager.sol#L27)</sub>

??? example "Details"

    **Signature**

    `destroyMarket(address market)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
