# BaseDebtCache

## Description

**Source:** [contracts/BaseDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L49)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L242)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L115)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L126)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L111)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L103)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L107)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L185)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L238)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L164)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L99)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L190)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L119)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L176)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L149)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts, uint256 _excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L130)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) view returns (uint256[] values)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L286)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L287)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L295)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer or Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L296)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L275)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L194)</sub>

??? example "Details"

    **Signature**

    `_totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L91)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L83)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() view returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L87)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() view returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L95)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L75)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L71)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L67)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L79)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L269)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L271)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L263)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L261)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L265)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L267)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L290)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L299)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.2/contracts/BaseDebtCache.sol#L281)</sub>
