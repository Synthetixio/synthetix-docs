# BaseDebtCache

## Description

**Source:** [contracts/BaseDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L60)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L264)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L121)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L132)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L117)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L109)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L113)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L192)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L260)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L171)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L105)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `excludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L205)</sub>

??? example "Details"

    **Signature**

    `excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[] excludedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L64)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L210)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L242)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L155)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts, uint256 _excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_excludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L196)</sub>

??? example "Details"

    **Signature**

    `_excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) view returns (uint256[] values)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyDebtIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L328)</sub>

??? example "Details"

    **Signature**

    `_onlyDebtIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only debt issuers may call this")](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L334)

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L310)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L311)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L319)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer or Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L320)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L299)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L217)</sub>

??? example "Details"

    **Signature**

    `_totalNonSnxBackedDebt(bytes32[] currencyKeys, uint256[] rates, bool ratesAreInvalid) view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L93)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L97)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L85)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L81)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L77)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L89)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `wrapperFactory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L101)</sub>

??? example "Details"

    **Signature**

    `wrapperFactory() view returns (contract IWrapperFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L291)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recordExcludedDebtChange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L295)</sub>

??? example "Details"

    **Signature**

    `recordExcludedDebtChange(bytes32 currencyKey, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L293)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L285)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L283)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L287)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L289)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyDebtIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L337)</sub>

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L314)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L323)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0-alpha/contracts/BaseDebtCache.sol#L305)</sub>
