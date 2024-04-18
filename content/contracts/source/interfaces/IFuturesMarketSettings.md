# IFuturesMarketSettings

## Description

**Source:** [contracts/interfaces/IFuturesMarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol)

## Structs

### `Parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L4)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `takerFee`               | `uint256` | TBA         |
| `makerFee`               | `uint256` | TBA         |
| `takerFeeNextPrice`      | `uint256` | TBA         |
| `makerFeeNextPrice`      | `uint256` | TBA         |
| `nextPriceConfirmWindow` | `uint256` | TBA         |
| `maxLeverage`            | `uint256` | TBA         |
| `maxMarketValueUSD`      | `uint256` | TBA         |
| `maxFundingRate`         | `uint256` | TBA         |
| `skewScaleUSD`           | `uint256` | TBA         |

## Views

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L53)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L51)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L18)</sub>

??? example "Details"

    **Signature**

    `makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `makerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L22)</sub>

??? example "Details"

    **Signature**

    `makerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L30)</sub>

??? example "Details"

    **Signature**

    `maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L26)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxMarketValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L28)</sub>

??? example "Details"

    **Signature**

    `maxMarketValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L55)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L49)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L24)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L34)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (uint256 _takerFee, uint256 _makerFee, uint256 _takerFeeNextPrice, uint256 _makerFeeNextPrice, uint256 _nextPriceConfirmWindow, uint256 _maxLeverage, uint256 _maxMarketValueUSD, uint256 _maxFundingRate, uint256 _skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L32)</sub>

??? example "Details"

    **Signature**

    `skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L16)</sub>

??? example "Details"

    **Signature**

    `takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IFuturesMarketSettings.sol#L20)</sub>

??? example "Details"

    **Signature**

    `takerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
