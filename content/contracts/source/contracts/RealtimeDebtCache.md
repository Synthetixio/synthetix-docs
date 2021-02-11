# RealtimeDebtCache

## Description

**Source:** [contracts/RealtimeDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L9)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## External Functions

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L47)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L37)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L33)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L29)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L17)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L22)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L42)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L13)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L64)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L66)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L70)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L68)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L72)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0/contracts/RealtimeDebtCache.sol#L74)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
