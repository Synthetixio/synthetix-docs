# DebtCache

## Description

**Source:** [contracts/DebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L48)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L234)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L235)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L267)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L275)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyIssuerOrExchanger](#onlyissuerorexchanger)

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L282)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L113)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L182)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L195)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L165)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L124)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) view returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L346)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Sender is not Issuer")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L347)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L355)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Sender is not Issuer or Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L356)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L335)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L295)</sub>

??? example "Details"

    **Signature**

    `_updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currentRates, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array lengths differ")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L301)

### `_updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L288)</sub>

??? example "Details"

    **Signature**

    `_updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L89)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L81)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() view returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L85)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() view returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L73)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L69)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L65)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L77)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L217)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 debt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L109)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L120)</sub>

??? example "Details"

    **Signature**

    `cacheStale() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L105)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L97)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L101)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L191)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) view returns (uint256[] snxIssuedDebts)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L213)</sub>

??? example "Details"

    **Signature**

    `currentDebt() view returns (uint256 debt, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L174)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) view returns (uint256[] debtValues, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L93)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L52)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L239)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

    **Emits**

    * [DebtCacheUpdated](#debtcacheupdated)

    * [DebtCacheSnapshotTaken](#debtcachesnapshottaken)

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L262)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L350)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L359)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L341)</sub>

## Events

### `DebtCacheSnapshotTaken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L367)</sub>

**Signature**: `DebtCacheSnapshotTaken(uint256 timestamp)`

### `DebtCacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L366)</sub>

**Signature**: `DebtCacheUpdated(uint256 cachedDebt)`

### `DebtCacheValidityChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/DebtCache.sol#L368)</sub>

**Signature**: `DebtCacheValidityChanged(bool isInvalid)`
