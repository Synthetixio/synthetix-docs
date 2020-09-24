# BinaryOptionMarketData

## Description

**Source:** [contracts/BinaryOptionMarketData.sol](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol)

## Structs

### `AccountData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L53)</sub>

| Field       | Type                                         | Description |
| ----------- | -------------------------------------------- | ----------- |
| `bids`      | `struct BinaryOptionMarketData.OptionValues` | TBA         |
| `claimable` | `struct BinaryOptionMarketData.OptionValues` | TBA         |
| `balances`  | `struct BinaryOptionMarketData.OptionValues` | TBA         |

### `Deposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L16)</sub>

| Field                 | Type      | Description |
| --------------------- | --------- | ----------- |
| `deposited`           | `uint256` | TBA         |
| `exercisableDeposits` | `uint256` | TBA         |

### `MarketData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L41)</sub>

| Field                     | Type                                                    | Description |
| ------------------------- | ------------------------------------------------------- | ----------- |
| `oraclePriceAndTimestamp` | `struct BinaryOptionMarketData.OraclePriceAndTimestamp` | TBA         |
| `prices`                  | `struct BinaryOptionMarket.Prices`                      | TBA         |
| `deposits`                | `struct BinaryOptionMarketData.Deposits`                | TBA         |
| `resolution`              | `struct BinaryOptionMarketData.Resolution`              | TBA         |
| `phase`                   | `enum IBinaryOptionMarket.Phase`                        | TBA         |
| `result`                  | `enum IBinaryOptionMarket.Side`                         | TBA         |
| `totalBids`               | `struct BinaryOptionMarketData.OptionValues`            | TBA         |
| `totalClaimableSupplies`  | `struct BinaryOptionMarketData.OptionValues`            | TBA         |
| `totalSupplies`           | `struct BinaryOptionMarketData.OptionValues`            | TBA         |

### `MarketParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L32)</sub>

| Field           | Type                                             | Description |
| --------------- | ------------------------------------------------ | ----------- |
| `creator`       | `address`                                        | TBA         |
| `options`       | `struct BinaryOptionMarket.Options`              | TBA         |
| `times`         | `struct BinaryOptionMarket.Times`                | TBA         |
| `oracleDetails` | `struct BinaryOptionMarket.OracleDetails`        | TBA         |
| `fees`          | `struct BinaryOptionMarketManager.Fees`          | TBA         |
| `creatorLimits` | `struct BinaryOptionMarketManager.CreatorLimits` | TBA         |

### `OptionValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L11)</sub>

| Field   | Type      | Description |
| ------- | --------- | ----------- |
| `long`  | `uint256` | TBA         |
| `short` | `uint256` | TBA         |

### `OraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L26)</sub>

| Field       | Type      | Description |
| ----------- | --------- | ----------- |
| `price`     | `uint256` | TBA         |
| `updatedAt` | `uint256` | TBA         |

### `Resolution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L21)</sub>

| Field        | Type   | Description |
| ------------ | ------ | ----------- |
| `resolved`   | `bool` | TBA         |
| `canResolve` | `bool` | TBA         |

## Views

### `getAccountMarketData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L101)</sub>

??? example "Details"

    **Signature**

    `getAccountMarketData(contract BinaryOptionMarket market, address account) returns (struct BinaryOptionMarketData.AccountData)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getMarketData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getMarketData(contract BinaryOptionMarket market) returns (struct BinaryOptionMarketData.MarketData)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getMarketParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4-alpha/contracts/BinaryOptionMarketData.sol#L59)</sub>

??? example "Details"

    **Signature**

    `getMarketParameters(contract BinaryOptionMarket market) returns (struct BinaryOptionMarketData.MarketParameters)`

    **Visibility**

    `public`

    **State Mutability**

    `view`
