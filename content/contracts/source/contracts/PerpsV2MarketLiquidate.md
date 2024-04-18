# PerpsV2MarketLiquidate

## Description

**Source:** [contracts/PerpsV2MarketLiquidate.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L12)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `flagPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L25)</sub>

??? example "Details"

    **Signature**

    `flagPosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [notFlagged](#notflagged)

### `forceLiquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L60)</sub>

??? example "Details"

    **Signature**

    `forceLiquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "address not endorsed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L66)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [flagged](#flagged)

### `liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L39)</sub>

??? example "Details"

    **Signature**

    `liquidatePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "price impact of liquidation exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L48)

    * [require(..., "instantaneous P/D exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L54)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

    * [flagged](#flagged)

## Internal Functions

### `_flagPosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L72)</sub>

??? example "Details"

    **Signature**

    `_flagPosition(address account, address flagger, uint256 price)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_liquidatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_liquidatePosition(struct IPerpsV2MarketBaseTypes.Position position, address account, address liquidator, uint256 price, uint256 liquidatorFee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPositionFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L194)</sub>

??? example "Details"

    **Signature**

    `emitPositionFlagged(uint256 id, address account, address flagger, uint256 price, uint256 timestamp)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitPositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L217)</sub>

??? example "Details"

    **Signature**

    `emitPositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 flaggerFee, uint256 liquidatorFee, uint256 stakersFee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `PositionFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L191)</sub>

**Signature**: `PositionFlagged(uint256 id, address account, address flagger, uint256 price, uint256 timestamp)`

### `PositionLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketLiquidate.sol#L204)</sub>

**Signature**: `PositionLiquidated(uint256 id, address account, address liquidator, int256 size, uint256 price, uint256 flaggerFee, uint256 liquidatorFee, uint256 stakersFee)`
