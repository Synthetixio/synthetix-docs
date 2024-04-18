# IDebtCache

## Description

**Source:** [contracts/interfaces/IDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol)

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L36)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L14)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L16)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L12)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L8)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L10)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L30)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L34)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L20)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 futuresDebt, uint256 excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `excludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L46)</sub>

??? example "Details"

    **Signature**

    `excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[] excludedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isInitialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L18)</sub>

??? example "Details"

    **Signature**

    `isInitialized() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L32)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `importExcludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L66)</sub>

??? example "Details"

    **Signature**

    `importExcludedIssuedDebts(contract IDebtCache prevDebtCache, contract IIssuer prevIssuer)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L58)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recordExcludedDebtChange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L62)</sub>

??? example "Details"

    **Signature**

    `recordExcludedDebtChange(bytes32 currencyKey, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L60)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L52)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L50)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L54)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedsUSDDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L64)</sub>

??? example "Details"

    **Signature**

    `updateCachedsUSDDebt(int256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDebtCache.sol#L56)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``
