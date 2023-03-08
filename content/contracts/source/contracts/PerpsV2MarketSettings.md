# PerpsV2MarketSettings

## Description

**Source:** [contracts/PerpsV2MarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L24)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `delayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L100)</sub>

??? example "Details"

    **Signature**

    `delayedOrderConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L233)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L226)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPremiumMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L177)</sub>

??? example "Details"

    **Signature**

    `liquidationPremiumMultiplier(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L51)</sub>

??? example "Details"

    **Signature**

    `makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L72)</sub>

??? example "Details"

    **Signature**

    `makerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L86)</sub>

??? example "Details"

    **Signature**

    `makerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L156)</sub>

??? example "Details"

    **Signature**

    `maxDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L142)</sub>

??? example "Details"

    **Signature**

    `maxFundingVelocity(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L218)</sub>

??? example "Details"

    **Signature**

    `maxKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L121)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L128)</sub>

??? example "Details"

    **Signature**

    `maxMarketValue(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L149)</sub>

??? example "Details"

    **Signature**

    `minDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L241)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L211)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L93)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainDelayedOrderMaxAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L114)</sub>

??? example "Details"

    **Signature**

    `offchainDelayedOrderMaxAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainDelayedOrderMinAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L107)</sub>

??? example "Details"

    **Signature**

    `offchainDelayedOrderMinAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L163)</sub>

??? example "Details"

    **Signature**

    `offchainMarketKey(bytes32 _marketKey) view returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainPriceDivergence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L170)</sub>

??? example "Details"

    **Signature**

    `offchainPriceDivergence(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `overrideCommitFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L58)</sub>

??? example "Details"

    **Signature**

    `overrideCommitFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L181)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (struct IPerpsV2MarketSettings.Parameters)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L28)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `skewScale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L135)</sub>

??? example "Details"

    **Signature**

    `skewScale(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L44)</sub>

??? example "Details"

    **Signature**

    `takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L65)</sub>

??? example "Details"

    **Signature**

    `takerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L79)</sub>

??? example "Details"

    **Signature**

    `takerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setDelayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L296)</sub>

??? example "Details"

    **Signature**

    `setDelayedOrderConfirmWindow(bytes32 _marketKey, uint256 _delayedOrderConfirmWindow)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setLiquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L415)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L410)</sub>

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

### `setLiquidationPremiumMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L365)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPremiumMultiplier(bytes32 _marketKey, uint256 _liquidationPremiumMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set liquidation premium multiplier 0")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L366)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L263)</sub>

??? example "Details"

    **Signature**

    `setMakerFee(bytes32 _marketKey, uint256 _makerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L264)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L277)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeDelayedOrder(bytes32 _marketKey, uint256 _makerFeeDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L278)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L287)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _makerFeeOffchainDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L288)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L345)</sub>

??? example "Details"

    **Signature**

    `setMaxDelayTimeDelta(bytes32 _marketKey, uint256 _maxDelayTimeDelta)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L330)</sub>

??? example "Details"

    **Signature**

    `setMaxFundingVelocity(bytes32 _marketKey, uint256 _maxFundingVelocity)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L404)</sub>

??? example "Details"

    **Signature**

    `setMaxKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "max fee < min fee")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L405)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxKeeperFeeUpdated](#maxkeeperfeeupdated)

### `setMaxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L308)</sub>

??? example "Details"

    **Signature**

    `setMaxLeverage(bytes32 _marketKey, uint256 _maxLeverage)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L312)</sub>

??? example "Details"

    **Signature**

    `setMaxMarketValue(bytes32 _marketKey, uint256 _maxMarketValue)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMinDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L341)</sub>

??? example "Details"

    **Signature**

    `setMinDelayTimeDelta(bytes32 _marketKey, uint256 _minDelayTimeDelta)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMinInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L420)</sub>

??? example "Details"

    **Signature**

    `setMinInitialMargin(uint256 _minMargin)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L421)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinInitialMarginUpdated](#mininitialmarginupdated)

### `setMinKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L394)</sub>

??? example "Details"

    **Signature**

    `setMinKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L395)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinKeeperFeeUpdated](#minkeeperfeeupdated)

### `setNextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L292)</sub>

??? example "Details"

    **Signature**

    `setNextPriceConfirmWindow(bytes32 _marketKey, uint256 _nextPriceConfirmWindow)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setOffchainDelayedOrderMaxAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L304)</sub>

??? example "Details"

    **Signature**

    `setOffchainDelayedOrderMaxAge(bytes32 _marketKey, uint256 _offchainDelayedOrderMaxAge)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setOffchainDelayedOrderMinAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L300)</sub>

??? example "Details"

    **Signature**

    `setOffchainDelayedOrderMinAge(bytes32 _marketKey, uint256 _offchainDelayedOrderMinAge)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setOffchainMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L349)</sub>

??? example "Details"

    **Signature**

    `setOffchainMarketKey(bytes32 _marketKey, bytes32 _offchainMarketKey)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ParameterUpdatedBytes32](#parameterupdatedbytes32)

### `setOffchainPriceDivergence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L361)</sub>

??? example "Details"

    **Signature**

    `setOffchainPriceDivergence(bytes32 _marketKey, uint256 _offchainPriceDivergence)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setOverrideCommitFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L268)</sub>

??? example "Details"

    **Signature**

    `setOverrideCommitFee(bytes32 _marketKey, uint256 _overrideCommitFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L370)</sub>

??? example "Details"

    **Signature**

    `setParameters(bytes32 _marketKey, struct IPerpsV2MarketSettings.Parameters _parameters)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setSkewScale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L335)</sub>

??? example "Details"

    **Signature**

    `setSkewScale(bytes32 _marketKey, uint256 _skewScale)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set skew scale 0")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L336)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L258)</sub>

??? example "Details"

    **Signature**

    `setTakerFee(bytes32 _marketKey, uint256 _takerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L259)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L272)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeDelayedOrder(bytes32 _marketKey, uint256 _takerFeeDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L273)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L282)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _takerFeeOffchainDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L283)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L35)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L319)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(bytes32 _marketKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setParameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L249)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L433)</sub>

**Signature**: `LiquidationBufferRatioUpdated(uint256 bps)`

### `LiquidationFeeRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L432)</sub>

**Signature**: `LiquidationFeeRatioUpdated(uint256 bps)`

### `MaxKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L431)</sub>

**Signature**: `MaxKeeperFeeUpdated(uint256 sUSD)`

### `MinInitialMarginUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L434)</sub>

**Signature**: `MinInitialMarginUpdated(uint256 minMargin)`

### `MinKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L430)</sub>

**Signature**: `MinKeeperFeeUpdated(uint256 sUSD)`

### `ParameterUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L428)</sub>

**Signature**: `ParameterUpdated(bytes32 marketKey, bytes32 parameter, uint256 value)`

### `ParameterUpdatedBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.0-alpha/contracts/PerpsV2MarketSettings.sol#L429)</sub>

**Signature**: `ParameterUpdatedBytes32(bytes32 marketKey, bytes32 parameter, bytes32 value)`
