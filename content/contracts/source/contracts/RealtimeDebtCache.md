# RealtimeDebtCache

## Description

**Source:** [contracts/RealtimeDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    RealtimeDebtCache[RealtimeDebtCache] --> DebtCache[DebtCache]
    DebtCache[DebtCache] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L9)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L47)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() returns (uint256, uint256, bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L37)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L33)</sub>

??? example "Details"

    **Signature**

    `cacheStale() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L29)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L17)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L22)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L42)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L13)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L64)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L66)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L70)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L68)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L72)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.2-sip-95-remove-BCH-aggregator/contracts/RealtimeDebtCache.sol#L74)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
