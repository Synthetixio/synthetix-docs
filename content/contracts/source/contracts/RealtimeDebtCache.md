# RealtimeDebtCache

## Description

**Source:** [contracts/RealtimeDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L8)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## External Functions

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L46)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L36)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L32)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L28)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L16)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L21)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L41)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L12)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L63)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L65)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L69)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L67)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L71)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/RealtimeDebtCache.sol#L73)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
