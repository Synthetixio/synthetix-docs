# ExchangeSettlementLib

## Description

**Source:** [contracts/ExchangeSettlementLib.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol)

## Structs

### `ResolvedAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L18)</sub>

| Field            | Type                                   | Description |
| ---------------- | -------------------------------------- | ----------- |
| `exchangeState`  | `contract IExchangeState`              | TBA         |
| `exchangeRates`  | `contract IExchangeRates`              | TBA         |
| `circuitBreaker` | `contract ICircuitBreaker`             | TBA         |
| `debtCache`      | `contract IExchangerInternalDebtCache` | TBA         |
| `issuer`         | `contract IIssuer`                     | TBA         |
| `synthetix`      | `contract ISynthetix`                  | TBA         |

## Views

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L127)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address account, bytes32 currencyKey, uint256 waitingPeriod) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L88)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(contract IExchangeState exchangeState, address account, bytes32 currencyKey, uint256 waitingPeriod) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L142)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address account, bytes32 currencyKey, uint256 waitingPeriod) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries, struct IExchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_deductFeesFromAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L293)</sub>

??? example "Details"

    **Signature**

    `_deductFeesFromAmount(uint256 destinationAmount, uint256 exchangeFeeRate) pure returns (uint256 amountReceived)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L244)</sub>

??? example "Details"

    **Signature**

    `_getExchangeEntry(contract IExchangeState exchangeState, address account, bytes32 currencyKey, uint256 index) view returns (struct IExchangeState.ExchangeEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L274)</sub>

??? example "Details"

    **Signature**

    `_getRoundIdsAtPeriodEnd(contract IExchangeRates exRates, struct IExchangeState.ExchangeEntry exchangeEntry, uint256 waitingPeriod) view returns (uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L105)</sub>

??? example "Details"

    **Signature**

    `_reclaim(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L116)</sub>

??? example "Details"

    **Signature**

    `_refund(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L97)</sub>

??? example "Details"

    **Signature**

    `_secsLeftInWaitingPeriodForExchange(uint256 timestamp, uint256 waitingPeriod) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L161)</sub>

??? example "Details"

    **Signature**

    `_settlementOwing(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address account, bytes32 currencyKey, uint256 waitingPeriod) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries, struct IExchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L301)</sub>

??? example "Details"

    **Signature**

    `appendExchange(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Emits**

    * [ExchangeEntryAppended](#exchangeentryappended)

### `internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L29)</sub>

??? example "Details"

    **Signature**

    `internalSettle(struct ExchangeSettlementLib.ResolvedAddresses resolvedAddresses, address from, bytes32 currencyKey, bool updateCache, uint256 waitingPeriod) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot settle during waiting period")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L43)

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L337)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangeSettlementLib.sol#L348)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
