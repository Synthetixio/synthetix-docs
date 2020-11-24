# DebtCache

## Description

**Source:** [contracts/DebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    DebtCache[DebtCache] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L55)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L189)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() returns (uint256, uint256, bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L105)</sub>

??? example "Details"

    **Signature**

    `cacheInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L116)</sub>

??? example "Details"

    **Signature**

    `cacheStale() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cacheTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L101)</sub>

??? example "Details"

    **Signature**

    `cacheTimestamp() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L93)</sub>

??? example "Details"

    **Signature**

    `cachedDebt() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L97)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebt(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L171)</sub>

??? example "Details"

    **Signature**

    `cachedSynthDebts(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L185)</sub>

??? example "Details"

    **Signature**

    `currentDebt() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L154)</sub>

??? example "Details"

    **Signature**

    `currentSynthDebts(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L89)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L206)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth exists)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L207)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L236)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L244)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyIssuerOrExchanger](#onlyissuerorexchanger)

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L251)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

## Internal Functions

### `_cacheStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L109)</sub>

??? example "Details"

    **Signature**

    `_cacheStale(uint256 timestamp) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_cachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L162)</sub>

??? example "Details"

    **Signature**

    `_cachedSynthDebts(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L175)</sub>

??? example "Details"

    **Signature**

    `_currentDebt() returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_currentSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_currentSynthDebts(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L120)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L315)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuer()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Sender is not Issuer)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L316)

### `_onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L324)</sub>

??? example "Details"

    **Signature**

    `_onlyIssuerOrExchanger()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Sender is not Issuer or Exchanger)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L325)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L304)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L264)</sub>

??? example "Details"

    **Signature**

    `_updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currentRates, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input array lengths differ)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L270)

### `_updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L257)</sub>

??? example "Details"

    **Signature**

    `_updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L80)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L84)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L72)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L68)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L64)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L76)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L211)</sub>

??? example "Details"

    **Signature**

    `takeDebtSnapshot()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

    **Emits**

    * [DebtCacheUpdated](#debtcacheupdated)

    * [DebtCacheSnapshotTaken](#debtcachesnapshottaken)

### `updateCachedSynthDebts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L231)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L319)</sub>

### `onlyIssuerOrExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L328)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L310)</sub>

## Events

### `DebtCacheSnapshotTaken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L336)</sub>

**Signature**: `DebtCacheSnapshotTaken(uint256 timestamp)`

### `DebtCacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L335)</sub>

**Signature**: `DebtCacheUpdated(uint256 cachedDebt)`

### `DebtCacheValidityChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/DebtCache.sol#L337)</sub>

**Signature**: `DebtCacheValidityChanged(bool isInvalid)`
