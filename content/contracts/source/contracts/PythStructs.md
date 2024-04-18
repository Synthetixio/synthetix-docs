# PythStructs

## Description

**Source:** [contracts/interfaces/PythStructs.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/PythStructs.sol)

## Structs

### `Price`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/PythStructs.sol#L14)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `price`       | `int64`   | TBA         |
| `conf`        | `uint64`  | TBA         |
| `expo`        | `int32`   | TBA         |
| `publishTime` | `uint256` | TBA         |

### `PriceFeed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/PythStructs.sol#L26)</sub>

| Field      | Type                       | Description |
| ---------- | -------------------------- | ----------- |
| `id`       | `bytes32`                  | TBA         |
| `price`    | `struct PythStructs.Price` | TBA         |
| `emaPrice` | `struct PythStructs.Price` | TBA         |
