# PerpsV2MarketState

## Description

**Source:** [contracts/PerpsV2MarketState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol)

## Variables

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L31)</sub>

**Type:** `bytes32`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L58)</sub>

**Type:** `uint32`

### `fundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L65)</sub>

**Type:** `int128`

### `initialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L19)</sub>

**Type:** `bool`

### `legacyFundinSequenceOffset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L20)</sub>

**Type:** `uint256`

### `legacyState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L21)</sub>

**Type:** `contract PerpsV2MarketStateLegacyR1`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L28)</sub>

**Type:** `bytes32`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L34)</sub>

**Type:** `uint128`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L40)</sub>

**Type:** `int128`

### `positionFlagger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L86)</sub>

**Type:** `mapping(address => address)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L89)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address[] _associatedContracts, bytes32 _baseAsset, bytes32 _marketKey, address _legacyState)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L184)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypes.DelayedOrder)`

??? example "Details"

    **Signature**

    `delayedOrders(address account) view returns (struct IPerpsV2MarketBaseTypes.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `entryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L148)</sub>

??? example "Details"

    **Signature**

    `entryDebtCorrection() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L156)</sub>

**Type:** `int128[]`

??? example "Details"

    **Signature**

    `fundingSequence(uint256 index) view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L164)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L251)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L230)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getFlaggedAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L258)</sub>

??? example "Details"

    **Signature**

    `getFlaggedAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getFlaggedAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L237)</sub>

??? example "Details"

    **Signature**

    `getFlaggedAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPositionAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L244)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPositionAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L218)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `isFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L168)</sub>

??? example "Details"

    **Signature**

    `isFlagged(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L152)</sub>

??? example "Details"

    **Signature**

    `nextPositionId() view returns (uint64)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L172)</sub>

**Type:** `mapping(address => struct IPerpsV2MarketBaseTypes.Position)`

??? example "Details"

    **Signature**

    `positions(address account) view returns (struct IPerpsV2MarketBaseTypes.Position)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `deleteDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L401)</sub>

??? example "Details"

    **Signature**

    `deleteDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `deletePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L387)</sub>

??? example "Details"

    **Signature**

    `deletePosition(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `flag`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L416)</sub>

??? example "Details"

    **Signature**

    `flag(address account, address flagger)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `getPositionAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L218)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesPage(uint256 index, uint256 pageSize) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Modifiers**

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `linkOrInitializeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L118)</sub>

??? example "Details"

    **Signature**

    `linkOrInitializeState()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "State already initialized")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L119)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MarketStateInitialized](#marketstateinitialized)

### `pushFundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L292)</sub>

??? example "Details"

    **Signature**

    `pushFundingSequence(int128 fundingSequence)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setBaseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L267)</sub>

??? example "Details"

    **Signature**

    `setBaseAsset(bytes32 _baseAsset)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change base asset")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L268)

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setEntryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L276)</sub>

??? example "Details"

    **Signature**

    `setEntryDebtCorrection(int128 entryDebtCorrection)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setFundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L288)</sub>

??? example "Details"

    **Signature**

    `setFundingLastRecomputed(uint32 lastRecomputed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setFundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L297)</sub>

??? example "Details"

    **Signature**

    `setFundingRateLastRecomputed(int128 _fundingRateLastRecomputed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L262)</sub>

??? example "Details"

    **Signature**

    `setMarketKey(bytes32 _marketKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot change market key")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L263)

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L272)</sub>

??? example "Details"

    **Signature**

    `setMarketSize(uint128 _marketSize)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setMarketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L284)</sub>

??? example "Details"

    **Signature**

    `setMarketSkew(int128 _marketSkew)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `setNextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L280)</sub>

??? example "Details"

    **Signature**

    `setNextPositionId(uint64 nextPositionId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `unflag`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L421)</sub>

??? example "Details"

    **Signature**

    `unflag(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `updateDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L348)</sub>

??? example "Details"

    **Signature**

    `updateDelayedOrder(address account, bool isOffchain, int128 sizeDelta, uint128 desiredFillPrice, uint128 targetRoundId, uint128 commitDeposit, uint128 keeperDeposit, uint256 executableAtTime, uint256 intentionTime, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

### `updatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L315)</sub>

??? example "Details"

    **Signature**

    `updatePosition(address account, uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIfInitialized](#onlyifinitialized)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

## Modifiers

### `onlyIfInitialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L428)</sub>

## Events

### `MarketStateInitialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketState.sol#L435)</sub>

**Signature**: `MarketStateInitialized(bytes32 marketKey, bool legacyContractExists, address legacyState, uint256 legacyFundinSequenceOffset)`
