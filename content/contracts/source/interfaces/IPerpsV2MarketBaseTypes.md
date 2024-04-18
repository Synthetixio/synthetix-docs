# IPerpsV2MarketBaseTypes

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketBaseTypes.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketBaseTypes.sol)

## Structs

### `DelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketBaseTypes.sol#L37)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `isOffchain`       | `bool`    | TBA         |
| `sizeDelta`        | `int128`  | TBA         |
| `desiredFillPrice` | `uint128` | TBA         |
| `targetRoundId`    | `uint128` | TBA         |
| `commitDeposit`    | `uint128` | TBA         |
| `keeperDeposit`    | `uint128` | TBA         |
| `executableAtTime` | `uint256` | TBA         |
| `intentionTime`    | `uint256` | TBA         |
| `trackingCode`     | `bytes32` | TBA         |

### `Position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketBaseTypes.sol#L28)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `id`               | `uint64`  | TBA         |
| `lastFundingIndex` | `uint64`  | TBA         |
| `margin`           | `uint128` | TBA         |
| `lastPrice`        | `uint128` | TBA         |
| `size`             | `int128`  | TBA         |
