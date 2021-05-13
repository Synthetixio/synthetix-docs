# DebtCache

## Description

**Source:** [contracts/DebtCache.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L13)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `purgeCachedSynthDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L20)</sub>

??? example "Details"

    **Signature**

    `purgeCachedSynthDebt(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L21)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L51)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L59)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L66)</sub>

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

### `_updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L79)</sub>

??? example "Details"

    **Signature**

    `_updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currentRates, bool anyRateIsInvalid, bool recomputeExcludedDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array lengths differ")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L86)

### `_updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L72)</sub>

??? example "Details"

    **Signature**

    `_updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `takeDebtSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L25)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L46)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebts(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

## Events

### `DebtCacheSnapshotTaken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L134)</sub>

**Signature**: `DebtCacheSnapshotTaken(uint256 timestamp)`

### `DebtCacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L133)</sub>

**Signature**: `DebtCacheUpdated(uint256 cachedDebt)`

### `DebtCacheValidityChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/DebtCache.sol#L135)</sub>

**Signature**: `DebtCacheValidityChanged(bool isInvalid)`
