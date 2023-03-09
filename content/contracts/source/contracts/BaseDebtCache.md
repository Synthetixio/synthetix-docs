# BaseDebtCache

## Description

**Source:** [contracts/BaseDebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol)

## Variables

### `isInitialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L35)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L53)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L305)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L119)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L130)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L115)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L107)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L111)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L193)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L301)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L171)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, uint256 futuresDebt, uint256 excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L103)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `excludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L206)</sub>

??? example "Details"

    **Signature**

    `excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[] excludedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L57)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L245)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `importExcludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L216)</sub>

??? example "Details"

    **Signature**

    `importExcludedIssuedDebts(contract IDebtCache prevDebtCache, contract IIssuer prevIssuer)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "already initialized")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L219)

    * [require(..., "previous Issuer has no synths")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L229)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L123)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L184)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L277)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L153)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts, uint256 _futuresDebt, uint256 _excludedDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_excludedIssuedDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L197)</sub>

??? example "Details"

    **Signature**

    `_excludedIssuedDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L134)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) view returns (uint256[] values)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyDebtIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L371)</sub>

??? example "Details"

    **Signature**

    `_onlyDebtIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only debt issuers may call this")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L377)

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L353)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L354)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L362)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Sender is not Issuer or Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L363)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L342)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L252)</sub>

??? example "Details"

    **Signature**

    `_totalNonSnxBackedDebt(bytes32[] currencyKeys, uint256[] rates, bool ratesAreInvalid) view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L87)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L91)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L79)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L75)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L95)</sub>

??? example "Details"

    **Signature**

    `futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L71)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L83)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `wrapperFactory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L99)</sub>

??? example "Details"

    **Signature**

    `wrapperFactory() view returns (contract IWrapperFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L332)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recordExcludedDebtChange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L336)</sub>

??? example "Details"

    **Signature**

    `recordExcludedDebtChange(bytes32 currencyKey, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L334)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L326)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L324)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L328)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedsUSDDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L338)</sub>

??? example "Details"

    **Signature**

    `updateCachedsUSDDebt(int256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L330)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyDebtIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L380)</sub>

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L357)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L366)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.84.2-alpha/contracts/BaseDebtCache.sol#L348)</sub>
