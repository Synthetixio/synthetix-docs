# MixinFuturesViews

## Description

**Source:** [contracts/frozen/MixinFuturesViews.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol)

## Views

### `accessibleMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L90)</sub>

??? example "Details"

    **Signature**

    `accessibleMargin(address account) view returns (uint256 marginAccessible, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `accruedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L73)</sub>

??? example "Details"

    **Signature**

    `accruedFunding(address account) view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L130)</sub>

??? example "Details"

    **Signature**

    `canLiquidate(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentFundingRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L33)</sub>

??? example "Details"

    **Signature**

    `currentFundingRate() view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L50)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L115)</sub>

??? example "Details"

    **Signature**

    `liquidationFee(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L102)</sub>

??? example "Details"

    **Signature**

    `liquidationPrice(address account) view returns (uint256 price, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L24)</sub>

??? example "Details"

    **Signature**

    `marketDebt() view returns (uint256 debt, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSizes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L14)</sub>

??? example "Details"

    **Signature**

    `marketSizes() view returns (uint256 long, uint256 short)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `notionalValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L57)</sub>

??? example "Details"

    **Signature**

    `notionalValue(address account) view returns (int256 value, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `orderFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L143)</sub>

??? example "Details"

    **Signature**

    `orderFee(int256 sizeDelta) view returns (uint256 fee, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `postTradeDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L160)</sub>

??? example "Details"

    **Signature**

    `postTradeDetails(int256 sizeDelta, address sender) view returns (uint256 margin, int256 size, uint256 price, uint256 liqPrice, uint256 fee, enum IFuturesMarketBaseTypes.Status status)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `profitLoss`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L65)</sub>

??? example "Details"

    **Signature**

    `profitLoss(address account) view returns (int256 pnl, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingMargin`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L81)</sub>

??? example "Details"

    **Signature**

    `remainingMargin(address account) view returns (uint256 marginRemaining, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `unrecordedFunding`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L42)</sub>

??? example "Details"

    **Signature**

    `unrecordedFunding() view returns (int256 funding, bool invalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_approxLiquidationPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/frozen/MixinFuturesViews.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_approxLiquidationPrice(struct IFuturesMarketBaseTypes.Position position, uint256 currentPrice) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
