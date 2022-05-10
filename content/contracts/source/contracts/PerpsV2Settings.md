# PerpsV2Settings

## Description

**Source:** [contracts/PerpsV2Settings.sol](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L23)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L148)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L141)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L50)</sub>

??? example "Details"

    **Signature**

    `makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L64)</sub>

??? example "Details"

    **Signature**

    `makerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L92)</sub>

??? example "Details"

    **Signature**

    `maxFundingRate(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L78)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxMarketValueUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L85)</sub>

??? example "Details"

    **Signature**

    `maxMarketValueUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L133)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L71)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L103)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (uint256 takerFee, uint256 makerFee, uint256 takerFeeNextPrice, uint256 makerFeeNextPrice, uint256 nextPriceConfirmWindow, uint256 maxLeverage, uint256 maxMarketValueUSD, uint256 maxFundingRate, uint256 skewScaleUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L27)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `skewScaleUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L99)</sub>

??? example "Details"

    **Signature**

    `skewScaleUSD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L43)</sub>

??? example "Details"

    **Signature**

    `takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L57)</sub>

??? example "Details"

    **Signature**

    `takerFeeNextPrice(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setLiquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L262)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L257)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L178)</sub>

??? example "Details"

    **Signature**

    `setMakerFee(bytes32 _marketKey, uint256 _makerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L179)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L188)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeNextPrice(bytes32 _marketKey, uint256 _makerFeeNextPrice)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L189)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L216)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L197)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L201)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L267)</sub>

??? example "Details"

    **Signature**

    `setMinInitialMargin(uint256 _minMargin)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L268)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinInitialMarginUpdated](#mininitialmarginupdated)

### `setMinKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L251)</sub>

??? example "Details"

    **Signature**

    `setMinKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L252)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinKeeperFeeUpdated](#minkeeperfeeupdated)

### `setNextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L193)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L227)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L221)</sub>

??? example "Details"

    **Signature**

    `setSkewScaleUSD(bytes32 _marketKey, uint256 _skewScaleUSD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set skew scale 0")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L222)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L173)</sub>

??? example "Details"

    **Signature**

    `setTakerFee(bytes32 _marketKey, uint256 _takerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L174)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeNextPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L183)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeNextPrice(bytes32 _marketKey, uint256 _takerFeeNextPrice)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L184)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L34)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L208)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(bytes32 _marketKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setParameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L164)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L278)</sub>

**Signature**: `LiquidationBufferRatioUpdated(uint256 bps)`

### `LiquidationFeeRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L277)</sub>

**Signature**: `LiquidationFeeRatioUpdated(uint256 bps)`

### `MinInitialMarginUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L279)</sub>

**Signature**: `MinInitialMarginUpdated(uint256 minMargin)`

### `MinKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L276)</sub>

**Signature**: `MinKeeperFeeUpdated(uint256 sUSD)`

### `ParameterUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.68.1-alpha/contracts/PerpsV2Settings.sol#L275)</sub>

**Signature**: `ParameterUpdated(bytes32 marketKey, bytes32 parameter, uint256 value)`
