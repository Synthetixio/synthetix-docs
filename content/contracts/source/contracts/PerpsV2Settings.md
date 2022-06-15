# PerpsV2Settings

## Description

**Source:** [contracts/PerpsV2Settings.sol](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L21)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L25)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `baseFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `baseFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `baseFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L52)</sub>

??? example "Details"

    **Signature**

    `baseFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L125)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L66)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxSingleSideValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `maxSingleSideValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L117)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L59)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L91)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (uint256 baseFee, uint256 baseFeeNextPrice, uint256 nextPriceConfirmWindow, uint256 maxLeverage, uint256 maxSingleSideValueUSD, uint256 maxFundingRate, uint256 skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L29)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L87)</sub>

??? example "Details"

    **Signature**

    `skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `setBaseFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L157)</sub>

??? example "Details"

    **Signature**

    `setBaseFee(bytes32 _marketKey, uint256 _baseFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L158)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setBaseFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L162)</sub>

??? example "Details"

    **Signature**

    `setBaseFeeNextPrice(bytes32 _marketKey, uint256 _baseFeeNextPrice)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L163)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setLiquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L232)</sub>

??? example "Details"

    **Signature**

    `setLiquidationBufferRatio(uint256 _ratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationBufferRatioUpdated](#liquidationbufferratioupdated)

### `setLiquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L227)</sub>

??? example "Details"

    **Signature**

    `setLiquidationFeeRatio(uint256 _ratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationFeeRatioUpdated](#liquidationfeeratioupdated)

### `setMaxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L190)</sub>

??? example "Details"

    **Signature**

    `setMaxFundingRate(bytes32 _marketKey, uint256 _maxFundingRate)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L171)</sub>

??? example "Details"

    **Signature**

    `setMaxLeverage(bytes32 _marketKey, uint256 _maxLeverage)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxSingleSideValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L175)</sub>

??? example "Details"

    **Signature**

    `setMaxSingleSideValueUSD(bytes32 _marketKey, uint256 _maxSingleSideValueUSD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMinInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L237)</sub>

??? example "Details"

    **Signature**

    `setMinInitialMargin(uint256 _minMargin)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L238)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinInitialMarginUpdated](#mininitialmarginupdated)

### `setMinKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L221)</sub>

??? example "Details"

    **Signature**

    `setMinKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L222)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinKeeperFeeUpdated](#minkeeperfeeupdated)

### `setNextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L167)</sub>

??? example "Details"

    **Signature**

    `setNextPriceConfirmWindow(bytes32 _marketKey, uint256 _nextPriceConfirmWindow)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L201)</sub>

??? example "Details"

    **Signature**

    `setParameters(bytes32 _marketKey, uint256 _baseFee, uint256 _baseFeeNextPrice, uint256 _nextPriceConfirmWindow, uint256 _maxLeverage, uint256 _maxSingleSideValueUSD, uint256 _maxFundingRate, uint256 _skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setSkewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L195)</sub>

??? example "Details"

    **Signature**

    `setSkewScaleUSD(bytes32 _marketKey, uint256 _skewScaleUSD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set skew scale 0")](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L196)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L36)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L182)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(bytes32 _marketKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setParameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L148)</sub>

??? example "Details"

    **Signature**

    `_setParameter(bytes32 _marketKey, bytes32 key, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ParameterUpdated](#parameterupdated)

## Events

### `LiquidationBufferRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L248)</sub>

**Signature**: `LiquidationBufferRatioUpdated(uint256 bps)`

### `LiquidationFeeRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L247)</sub>

**Signature**: `LiquidationFeeRatioUpdated(uint256 bps)`

### `MinInitialMarginUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L249)</sub>

**Signature**: `MinInitialMarginUpdated(uint256 minMargin)`

### `MinKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L246)</sub>

**Signature**: `MinKeeperFeeUpdated(uint256 sUSD)`

### `ParameterUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.73.1/contracts/PerpsV2Settings.sol#L245)</sub>

**Signature**: `ParameterUpdated(bytes32 marketKey, bytes32 parameter, uint256 value)`
