# FuturesMarketSettings

## Description

**Source:** [contracts/FuturesMarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L22)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L147)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L140)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L49)</sub>

??? example "Details"

    **Signature**

    `makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L63)</sub>

??? example "Details"

    **Signature**

    `makerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L91)</sub>

??? example "Details"

    **Signature**

    `maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L77)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxMarketValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L84)</sub>

??? example "Details"

    **Signature**

    `maxMarketValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L155)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L132)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L70)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L102)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (uint256 takerFee, uint256 makerFee, uint256 takerFeeNextPrice, uint256 makerFeeNextPrice, uint256 nextPriceConfirmWindow, uint256 maxLeverage, uint256 maxMarketValueUSD, uint256 maxFundingRate, uint256 skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L26)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L98)</sub>

??? example "Details"

    **Signature**

    `skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L42)</sub>

??? example "Details"

    **Signature**

    `takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L56)</sub>

??? example "Details"

    **Signature**

    `takerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setLiquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L261)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L256)</sub>

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

### `setMakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L177)</sub>

??? example "Details"

    **Signature**

    `setMakerFee(bytes32 _marketKey, uint256 _makerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L178)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L187)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeNextPrice(bytes32 _marketKey, uint256 _makerFeeNextPrice)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L188)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L215)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L196)</sub>

??? example "Details"

    **Signature**

    `setMaxLeverage(bytes32 _marketKey, uint256 _maxLeverage)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxMarketValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L200)</sub>

??? example "Details"

    **Signature**

    `setMaxMarketValueUSD(bytes32 _marketKey, uint256 _maxMarketValueUSD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMinInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L266)</sub>

??? example "Details"

    **Signature**

    `setMinInitialMargin(uint256 _minMargin)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L267)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinInitialMarginUpdated](#mininitialmarginupdated)

### `setMinKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L250)</sub>

??? example "Details"

    **Signature**

    `setMinKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L251)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinKeeperFeeUpdated](#minkeeperfeeupdated)

### `setNextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L192)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L226)</sub>

??? example "Details"

    **Signature**

    `setParameters(bytes32 _marketKey, uint256 _takerFee, uint256 _makerFee, uint256 _takerFeeNextPrice, uint256 _makerFeeNextPrice, uint256 _nextPriceConfirmWindow, uint256 _maxLeverage, uint256 _maxMarketValueUSD, uint256 _maxFundingRate, uint256 _skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setSkewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L220)</sub>

??? example "Details"

    **Signature**

    `setSkewScaleUSD(bytes32 _marketKey, uint256 _skewScaleUSD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set skew scale 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L221)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L172)</sub>

??? example "Details"

    **Signature**

    `setTakerFee(bytes32 _marketKey, uint256 _takerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L173)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L182)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeNextPrice(bytes32 _marketKey, uint256 _takerFeeNextPrice)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L183)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L33)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L207)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(bytes32 _marketKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setParameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L163)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L277)</sub>

**Signature**: `LiquidationBufferRatioUpdated(uint256 bps)`

### `LiquidationFeeRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L276)</sub>

**Signature**: `LiquidationFeeRatioUpdated(uint256 bps)`

### `MinInitialMarginUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L278)</sub>

**Signature**: `MinInitialMarginUpdated(uint256 minMargin)`

### `MinKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L275)</sub>

**Signature**: `MinKeeperFeeUpdated(uint256 sUSD)`

### `ParameterUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/FuturesMarketSettings.sol#L274)</sub>

**Signature**: `ParameterUpdated(bytes32 marketKey, bytes32 parameter, uint256 value)`
