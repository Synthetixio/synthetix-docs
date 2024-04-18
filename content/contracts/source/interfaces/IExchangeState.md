# IExchangeState

## Description

**Source:** [contracts/interfaces/IExchangeState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol)

## Structs

### `ExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L6)</sub>

| Field             | Type      | Description |
| ----------------- | --------- | ----------- |
| `src`             | `bytes32` | TBA         |
| `amount`          | `uint256` | TBA         |
| `dest`            | `bytes32` | TBA         |
| `amountReceived`  | `uint256` | TBA         |
| `exchangeFeeRate` | `uint256` | TBA         |
| `timestamp`       | `uint256` | TBA         |
| `roundIdForSrc`   | `uint256` | TBA         |
| `roundIdForDest`  | `uint256` | TBA         |

## Views

### `getEntryAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L19)</sub>

??? example "Details"

    **Signature**

    `getEntryAt(address account, bytes32 currencyKey, uint256 index) view returns (bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLengthOfEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L17)</sub>

??? example "Details"

    **Signature**

    `getLengthOfEntries(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getMaxTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L37)</sub>

??? example "Details"

    **Signature**

    `getMaxTimestamp(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L40)</sub>

??? example "Details"

    **Signature**

    `appendExchangeEntry(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 timestamp, uint256 roundIdForSrc, uint256 roundIdForDest)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IExchangeState.sol#L52)</sub>

??? example "Details"

    **Signature**

    `removeEntries(address account, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``
