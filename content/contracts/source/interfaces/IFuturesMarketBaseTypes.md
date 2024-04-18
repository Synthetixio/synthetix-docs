# IFuturesMarketBaseTypes

## Description

**Source:** [contracts/interfaces/IFuturesMarketBaseTypes.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketBaseTypes.sol)

## Structs

### `NextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketBaseTypes.sol#L31)</sub>

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `sizeDelta`     | `int128`  | TBA         |
| `targetRoundId` | `uint128` | TBA         |
| `commitDeposit` | `uint128` | TBA         |
| `keeperDeposit` | `uint128` | TBA         |
| `trackingCode`  | `bytes32` | TBA         |

### `Position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketBaseTypes.sol#L22)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `id`               | `uint64`  | TBA         |
| `lastFundingIndex` | `uint64`  | TBA         |
| `margin`           | `uint128` | TBA         |
| `lastPrice`        | `uint128` | TBA         |
| `size`             | `int128`  | TBA         |
