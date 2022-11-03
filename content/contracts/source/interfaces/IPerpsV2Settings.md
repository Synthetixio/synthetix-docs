# IPerpsV2Settings

## Description

**Source:** [contracts/interfaces/IPerpsV2Settings.sol](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol)

## Structs

### `Parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L4)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `baseFee`                | `uint256` | TBA         |
| `baseFeeNextPrice`       | `uint256` | TBA         |
| `nextPriceConfirmWindow` | `uint256` | TBA         |
| `maxLeverage`            | `uint256` | TBA         |
| `maxSingleSideValueUSD`  | `uint256` | TBA         |
| `maxFundingRate`         | `uint256` | TBA         |
| `skewScaleUSD`           | `uint256` | TBA         |

## Views

### `baseFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L14)</sub>

??? example "Details"

    **Signature**

    `baseFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L16)</sub>

??? example "Details"

    **Signature**

    `baseFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L43)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L24)</sub>

??? example "Details"

    **Signature**

    `maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L20)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSingleSideValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L22)</sub>

??? example "Details"

    **Signature**

    `maxSingleSideValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L47)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L41)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L18)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L28)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (uint256 _baseFee, uint256 _baseFeeNextPrice, uint256 _nextPriceConfirmWindow, uint256 _maxLeverage, uint256 _maxSingleSideValueUSD, uint256 _maxFundingRate, uint256 _skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.78.0-alpha/contracts/interfaces/IPerpsV2Settings.sol#L26)</sub>

??? example "Details"

    **Signature**

    `skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
