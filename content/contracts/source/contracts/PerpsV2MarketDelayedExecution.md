# PerpsV2MarketDelayedExecution

## Description

**Source:** [contracts/PerpsV2MarketDelayedExecution.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L29)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, address _marketState, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L148)</sub>

??? example "Details"

    **Signature**

    `cancelDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L152)

    * [require(..., "use offchain method")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L154)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `cancelOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L169)</sub>

??? example "Details"

    **Signature**

    `cancelOffchainDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L173)

    * [require(..., "use onchain method")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L175)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L56)</sub>

??? example "Details"

    **Signature**

    `executeDelayedOrder(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L60)

    * [require(..., "use offchain method")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L62)

    * [require(..., "executability not reached")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L65)

    * [require(..., "order too old, use cancel")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L75)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

### `executeOffchainDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L105)</sub>

??? example "Details"

    **Signature**

    `executeOffchainDelayedOrder(address account, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., "no previous order")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L109)

    * [require(..., "use onchain method")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L111)

    * [require(..., "price not updated")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L122)

    * [require(..., "executability not reached")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L123)

    * [require(..., "order too old, use cancel")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L124)

    **Modifiers**

    * [onlyProxy](#onlyproxy)

## Internal Functions

### `_cancelDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L229)</sub>

??? example "Details"

    **Signature**

    `_cancelDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_confirmCanCancel`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L180)</sub>

??? example "Details"

    **Signature**

    `_confirmCanCancel(struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentRoundId)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_confirmationWindowOver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L198)</sub>

??? example "Details"

    **Signature**

    `_confirmationWindowOver(uint256 executableAtTime, uint256 currentRoundId, uint256 targetRoundId) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_executeDelayedOrder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L273)</sub>

??? example "Details"

    **Signature**

    `_executeDelayedOrder(address account, struct IPerpsV2MarketBaseTypes.DelayedOrder order, uint256 currentPrice, uint256 currentRoundId, uint256 takerFee, uint256 makerFee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_offchainAssetPriceRequireSystemChecks`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L213)</sub>

??? example "Details"

    **Signature**

    `_offchainAssetPriceRequireSystemChecks(uint256 maxAge) returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "invalid, price is 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L218)

    * [require(..., "price divergence too high")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L224)

### `_perpsV2ExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L36)</sub>

??? example "Details"

    **Signature**

    `_perpsV2ExchangeRate() view returns (contract IPerpsV2ExchangeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `emitDelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L352)</sub>

??? example "Details"

    **Signature**

    `emitDelayedOrderRemoved(address account, uint256 currentRoundId, struct IPerpsV2MarketBaseTypes.DelayedOrder order)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `DelayedOrderRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2MarketDelayedExecution.sol#L339)</sub>

**Signature**: `DelayedOrderRemoved(address account, bool isOffchain, uint256 currentRoundId, int256 sizeDelta, uint256 targetRoundId, uint256 commitDeposit, uint256 keeperDeposit, bytes32 trackingCode)`
