# PerpsV2MarketStateLegacyR1

## Description

**Source:** [contracts/PerpsV2MarketStateLegacyR1.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol)

## Variables

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L31)</sub>

**Type:** `bytes32`

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L83)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypesLegacyR1.DelayedOrder)`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L58)</sub>

**Type:** `uint32`

### `fundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L65)</sub>

**Type:** `int128`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L59)</sub>

**Type:** `int128[]`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L28)</sub>

**Type:** `bytes32`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L34)</sub>

**Type:** `uint128`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L40)</sub>

**Type:** `int128`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L71)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypesLegacyR1.Position)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L85)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address[] _associatedContracts, bytes32 _baseAsset, bytes32 _marketKey)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `entryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L100)</sub>

??? example "Details"

    **Signature**

    `entryDebtCorrection() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L108)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L134)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L121)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L130)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L112)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L104)</sub>

??? example "Details"

    **Signature**

    `nextPositionId() view returns (uint64)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L250)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L243)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L134)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L121)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L130)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L112)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L168)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L143)</sub>

??? example "Details"

    **Signature**

    `setBaseAsset(bytes32 _baseAsset)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change base asset")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L144)

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setEntryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L152)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L164)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L173)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L138)</sub>

??? example "Details"

    **Signature**

    `setMarketKey(bytes32 _marketKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change market key")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L139)

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L148)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L160)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L156)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L212)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketStateLegacyR1.sol#L187)</sub>

??? example "Details"

    **Signature**

    `updatePosition(address account, uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)
