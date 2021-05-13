# BaseDebtCache

## Description

**Source:** [contracts/BaseDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L119)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L176)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L149)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts, uint256 _excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L130)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) view returns (uint256[] values)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L286)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Sender is not Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L287)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L295)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Sender is not Issuer or Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L296)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L275)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L194)</sub>

??? example "Details"

    **Signature**

    `_totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L91)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L83)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() view returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L87)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() view returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L95)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L75)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L71)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L67)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L79)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L242)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L115)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L126)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L111)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L103)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L107)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L185)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L238)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L164)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L99)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L269)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L271)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L190)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L263)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L261)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L265)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L267)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L290)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L299)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/BaseDebtCache.sol#L281)</sub>
