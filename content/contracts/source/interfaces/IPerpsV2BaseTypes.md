# IPerpsV2BaseTypes

## Description

**Source:** [contracts/interfaces/IPerpsV2BaseTypes.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IPerpsV2BaseTypes.sol)

## Structs

### `NextPriceOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IPerpsV2BaseTypes.sol#L31)</sub>

| Field           | Type      | Description |
| --------------- | --------- | ----------- |
| `sizeDelta`     | `int128`  | TBA         |
| `targetRoundId` | `uint128` | TBA         |
| `commitDeposit` | `uint128` | TBA         |
| `keeperDeposit` | `uint128` | TBA         |
| `trackingCode`  | `bytes32` | TBA         |

### `Position`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/interfaces/IPerpsV2BaseTypes.sol#L22)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `id`               | `uint64`  | TBA         |
| `lastFundingIndex` | `uint64`  | TBA         |
| `margin`           | `uint128` | TBA         |
| `lastPrice`        | `uint128` | TBA         |
| `size`             | `int128`  | TBA         |
