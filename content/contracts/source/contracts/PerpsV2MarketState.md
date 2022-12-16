# PerpsV2MarketState

## Description

**Source:** [contracts/PerpsV2MarketState.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol)

## Variables

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L21)</sub>

**Type:** `bytes32`

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L73)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypes.DelayedOrder)`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L48)</sub>

**Type:** `uint32`

### `fundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L55)</sub>

**Type:** `int128`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L49)</sub>

**Type:** `int128[]`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L18)</sub>

**Type:** `bytes32`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L24)</sub>

**Type:** `uint128`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L30)</sub>

**Type:** `int128`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L61)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypes.Position)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L75)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address[] _associatedContracts, bytes32 _baseAsset, bytes32 _marketKey)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `entryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L90)</sub>

??? example "Details"

    **Signature**

    `entryDebtCorrection() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L98)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getDelayedOrderAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getPositionAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getPositionAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L102)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `nextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L94)</sub>

??? example "Details"

    **Signature**

    `nextPositionId() view returns (uint64)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L240)</sub>

??? example "Details"

    **Signature**

    `deleteDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `deletePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L233)</sub>

??? example "Details"

    **Signature**

    `deletePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getDelayedOrderAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getDelayedOrderAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getPositionAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getPositionAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L102)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `pushFundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L158)</sub>

??? example "Details"

    **Signature**

    `pushFundingSequence(int128 _fundingSequence)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setBaseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L133)</sub>

??? example "Details"

    **Signature**

    `setBaseAsset(bytes32 _baseAsset)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change base asset")](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L134)

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setEntryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L142)</sub>

??? example "Details"

    **Signature**

    `setEntryDebtCorrection(int128 entryDebtCorrection)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setFundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L154)</sub>

??? example "Details"

    **Signature**

    `setFundingLastRecomputed(uint32 lastRecomputed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setFundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L163)</sub>

??? example "Details"

    **Signature**

    `setFundingRateLastRecomputed(int128 _fundingRateLastRecomputed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L128)</sub>

??? example "Details"

    **Signature**

    `setMarketKey(bytes32 _marketKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change market key")](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L129)

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L138)</sub>

??? example "Details"

    **Signature**

    `setMarketSize(uint128 _marketSize)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L150)</sub>

??? example "Details"

    **Signature**

    `setMarketSkew(int128 _marketSkew)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setNextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L146)</sub>

??? example "Details"

    **Signature**

    `setNextPositionId(uint64 nextPositionId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `updateDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L202)</sub>

??? example "Details"

    **Signature**

    `updateDelayedOrder(address account, bool isOffchain, int128 sizeDelta, uint128 priceImpactDelta, uint128 targetRoundId, uint128 commitDeposit, uint128 keeperDeposit, uint256 executableAtTime, uint256 intentionTime, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `updatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.2-alpha/contracts/PerpsV2MarketState.sol#L177)</sub>

??? example "Details"

    **Signature**

    `updatePosition(address account, uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)
