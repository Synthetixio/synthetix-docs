# PerpsV2MarketSettings

## Description

**Source:** [contracts/PerpsV2MarketSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L19)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L25)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `delayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L94)</sub>

??? example "Details"

    **Signature**

    `delayedOrderConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `keeperLiquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L258)</sub>

??? example "Details"

    **Signature**

    `keeperLiquidationFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L178)</sub>

??? example "Details"

    **Signature**

    `liquidationBufferRatio(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L243)</sub>

??? example "Details"

    **Signature**

    `liquidationFeeRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPremiumMultiplier`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L171)</sub>

??? example "Details"

    **Signature**

    `liquidationPremiumMultiplier(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L52)</sub>

??? example "Details"

    **Signature**

    `makerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L66)</sub>

??? example "Details"

    **Signature**

    `makerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `makerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L80)</sub>

??? example "Details"

    **Signature**

    `makerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L150)</sub>

??? example "Details"

    **Signature**

    `maxDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxFundingVelocity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L136)</sub>

??? example "Details"

    **Signature**

    `maxFundingVelocity(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L235)</sub>

??? example "Details"

    **Signature**

    `maxKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L115)</sub>

??? example "Details"

    **Signature**

    `maxLeverage(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLiquidationDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L185)</sub>

??? example "Details"

    **Signature**

    `maxLiquidationDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L122)</sub>

??? example "Details"

    **Signature**

    `maxMarketValue(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxPD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L192)</sub>

??? example "Details"

    **Signature**

    `maxPD(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L143)</sub>

??? example "Details"

    **Signature**

    `minDelayTimeDelta(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `minInitialMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L251)</sub>

??? example "Details"

    **Signature**

    `minInitialMargin() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L228)</sub>

??? example "Details"

    **Signature**

    `minKeeperFee() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L87)</sub>

??? example "Details"

    **Signature**

    `nextPriceConfirmWindow(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainDelayedOrderMaxAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L108)</sub>

??? example "Details"

    **Signature**

    `offchainDelayedOrderMaxAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainDelayedOrderMinAge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L101)</sub>

??? example "Details"

    **Signature**

    `offchainDelayedOrderMinAge(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L157)</sub>

??? example "Details"

    **Signature**

    `offchainMarketKey(bytes32 _marketKey) view returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainPriceDivergence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L164)</sub>

??? example "Details"

    **Signature**

    `offchainPriceDivergence(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `parameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L196)</sub>

??? example "Details"

    **Signature**

    `parameters(bytes32 _marketKey) view returns (struct IPerpsV2MarketSettings.Parameters)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L29)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `skewScale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L129)</sub>

??? example "Details"

    **Signature**

    `skewScale(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `takerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L45)</sub>

??? example "Details"

    **Signature**

    `takerFee(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L59)</sub>

??? example "Details"

    **Signature**

    `takerFeeDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `takerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L73)</sub>

??? example "Details"

    **Signature**

    `takerFeeOffchainDelayedOrder(bytes32 _marketKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setDelayedOrderConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L309)</sub>

??? example "Details"

    **Signature**

    `setDelayedOrderConfirmWindow(bytes32 _marketKey, uint256 _delayedOrderConfirmWindow)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setKeeperLiquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L448)</sub>

??? example "Details"

    **Signature**

    `setKeeperLiquidationFee(uint256 _keeperFee)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [KeeperLiquidationFeeUpdated](#keeperliquidationfeeupdated)

### `setLiquidationBufferRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L383)</sub>

??? example "Details"

    **Signature**

    `setLiquidationBufferRatio(bytes32 _marketKey, uint256 _ratio)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setLiquidationFeeRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L437)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L378)</sub>

??? example "Details"

    **Signature**

    `setLiquidationPremiumMultiplier(bytes32 _marketKey, uint256 _liquidationPremiumMultiplier)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set liquidation premium multiplier 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L379)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L280)</sub>

??? example "Details"

    **Signature**

    `setMakerFee(bytes32 _marketKey, uint256 _makerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L281)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L290)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeDelayedOrder(bytes32 _marketKey, uint256 _makerFeeDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L291)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMakerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L300)</sub>

??? example "Details"

    **Signature**

    `setMakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _makerFeeOffchainDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "maker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L301)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L358)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L343)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L431)</sub>

??? example "Details"

    **Signature**

    `setMaxKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "max fee < min fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L432)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxKeeperFeeUpdated](#maxkeeperfeeupdated)

### `setMaxLeverage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L321)</sub>

??? example "Details"

    **Signature**

    `setMaxLeverage(bytes32 _marketKey, uint256 _maxLeverage)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxLiquidationDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L387)</sub>

??? example "Details"

    **Signature**

    `setMaxLiquidationDelta(bytes32 _marketKey, uint256 _maxLiquidationDelta)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxMarketValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L325)</sub>

??? example "Details"

    **Signature**

    `setMaxMarketValue(bytes32 _marketKey, uint256 _maxMarketValue)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMaxPD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L391)</sub>

??? example "Details"

    **Signature**

    `setMaxPD(bytes32 _marketKey, uint256 _maxPD)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setMinDelayTimeDelta`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L354)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L442)</sub>

??? example "Details"

    **Signature**

    `setMinInitialMargin(uint256 _minMargin)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L443)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinInitialMarginUpdated](#mininitialmarginupdated)

### `setMinKeeperFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L421)</sub>

??? example "Details"

    **Signature**

    `setMinKeeperFee(uint256 _sUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "min margin < liquidation fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L422)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinKeeperFeeUpdated](#minkeeperfeeupdated)

### `setNextPriceConfirmWindow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L305)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L317)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L313)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L362)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L374)</sub>

??? example "Details"

    **Signature**

    `setOffchainPriceDivergence(bytes32 _marketKey, uint256 _offchainPriceDivergence)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L395)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L348)</sub>

??? example "Details"

    **Signature**

    `setSkewScale(bytes32 _marketKey, uint256 _skewScale)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot set skew scale 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L349)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L275)</sub>

??? example "Details"

    **Signature**

    `setTakerFee(bytes32 _marketKey, uint256 _takerFee)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L276)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L285)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeDelayedOrder(bytes32 _marketKey, uint256 _takerFeeDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L286)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setTakerFeeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L295)</sub>

??? example "Details"

    **Signature**

    `setTakerFeeOffchainDelayedOrder(bytes32 _marketKey, uint256 _takerFeeOffchainDelayedOrder)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "taker fee greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L296)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L36)</sub>

??? example "Details"

    **Signature**

    `_futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recomputeFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L332)</sub>

??? example "Details"

    **Signature**

    `_recomputeFunding(bytes32 _marketKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setParameter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L266)</sub>

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

### `KeeperLiquidationFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L462)</sub>

**Signature**: `KeeperLiquidationFeeUpdated(uint256 keeperFee)`

### `LiquidationBufferRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L460)</sub>

**Signature**: `LiquidationBufferRatioUpdated(uint256 bps)`

### `LiquidationFeeRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L459)</sub>

**Signature**: `LiquidationFeeRatioUpdated(uint256 bps)`

### `MaxKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L458)</sub>

**Signature**: `MaxKeeperFeeUpdated(uint256 sUSD)`

### `MinInitialMarginUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L461)</sub>

**Signature**: `MinInitialMarginUpdated(uint256 minMargin)`

### `MinKeeperFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L457)</sub>

**Signature**: `MinKeeperFeeUpdated(uint256 sUSD)`

### `ParameterUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L455)</sub>

**Signature**: `ParameterUpdated(bytes32 marketKey, bytes32 parameter, uint256 value)`

### `ParameterUpdatedBytes32`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketSettings.sol#L456)</sub>

**Signature**: `ParameterUpdatedBytes32(bytes32 marketKey, bytes32 parameter, bytes32 value)`
