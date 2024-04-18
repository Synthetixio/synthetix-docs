# IPerpsV2MarketState

## Description

**Source:** [contracts/interfaces/IPerpsV2MarketState.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol)

## Views

### `baseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L10)</sub>

??? example "Details"

    **Signature**

    `baseAsset() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `delayedOrders`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L24)</sub>

??? example "Details"

    **Signature**

    `delayedOrders(address) view returns (struct IPerpsV2MarketBaseTypes.DelayedOrder)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `entryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L28)</sub>

??? example "Details"

    **Signature**

    `entryDebtCorrection() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L16)</sub>

??? example "Details"

    **Signature**

    `fundingLastRecomputed() view returns (uint32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L20)</sub>

??? example "Details"

    **Signature**

    `fundingRateLastRecomputed() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L18)</sub>

??? example "Details"

    **Signature**

    `fundingSequence(uint256) view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fundingSequenceLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L32)</sub>

??? example "Details"

    **Signature**

    `fundingSequenceLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L42)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getDelayedOrderAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L40)</sub>

??? example "Details"

    **Signature**

    `getDelayedOrderAddressesPage(uint256, uint256) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getFlaggedAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L46)</sub>

??? example "Details"

    **Signature**

    `getFlaggedAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getFlaggedAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L44)</sub>

??? example "Details"

    **Signature**

    `getFlaggedAddressesPage(uint256, uint256) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPositionAddressesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L38)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPositionAddressesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L36)</sub>

??? example "Details"

    **Signature**

    `getPositionAddressesPage(uint256, uint256) view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFlagged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L34)</sub>

??? example "Details"

    **Signature**

    `isFlagged(address) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L8)</sub>

??? example "Details"

    **Signature**

    `marketKey() view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L12)</sub>

??? example "Details"

    **Signature**

    `marketSize() view returns (uint128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `marketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L14)</sub>

??? example "Details"

    **Signature**

    `marketSkew() view returns (int128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `nextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L30)</sub>

??? example "Details"

    **Signature**

    `nextPositionId() view returns (uint64)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positionFlagger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L26)</sub>

??? example "Details"

    **Signature**

    `positionFlagger(address) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `positions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L22)</sub>

??? example "Details"

    **Signature**

    `positions(address) view returns (struct IPerpsV2MarketBaseTypes.Position)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `deleteDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L90)</sub>

??? example "Details"

    **Signature**

    `deleteDelayedOrder(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `deletePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L88)</sub>

??? example "Details"

    **Signature**

    `deletePosition(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `flag`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L92)</sub>

??? example "Details"

    **Signature**

    `flag(address account, address flagger)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `pushFundingSequence`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L64)</sub>

??? example "Details"

    **Signature**

    `pushFundingSequence(int128)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setBaseAsset`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L50)</sub>

??? example "Details"

    **Signature**

    `setBaseAsset(bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setEntryDebtCorrection`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L54)</sub>

??? example "Details"

    **Signature**

    `setEntryDebtCorrection(int128)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setFundingLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L60)</sub>

??? example "Details"

    **Signature**

    `setFundingLastRecomputed(uint32)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setFundingRateLastRecomputed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L62)</sub>

??? example "Details"

    **Signature**

    `setFundingRateLastRecomputed(int128 _fundingRateLastRecomputed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setMarketKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L48)</sub>

??? example "Details"

    **Signature**

    `setMarketKey(bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setMarketSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L52)</sub>

??? example "Details"

    **Signature**

    `setMarketSize(uint128)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setMarketSkew`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L58)</sub>

??? example "Details"

    **Signature**

    `setMarketSkew(int128)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setNextPositionId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L56)</sub>

??? example "Details"

    **Signature**

    `setNextPositionId(uint64)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `unflag`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L94)</sub>

??? example "Details"

    **Signature**

    `unflag(address)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L75)</sub>

??? example "Details"

    **Signature**

    `updateDelayedOrder(address account, bool isOffchain, int128 sizeDelta, uint128 desiredFillPrice, uint128 targetRoundId, uint128 commitDeposit, uint128 keeperDeposit, uint256 executableAtTime, uint256 intentionTime, bytes32 trackingCode)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updatePosition`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2MarketState.sol#L66)</sub>

??? example "Details"

    **Signature**

    `updatePosition(address account, uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size)`

    **Visibility**

    `external`

    **State Mutability**

    ``
