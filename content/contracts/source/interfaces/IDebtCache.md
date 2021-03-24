# IDebtCache

## Description

**Source:** [contracts/interfaces/IDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol)

## External Functions

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L26)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L13)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L15)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L11)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L7)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L9)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L22)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L24)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L17)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L46)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L48)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L40)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L38)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L42)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.41.0/contracts/interfaces/IDebtCache.sol#L44)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
