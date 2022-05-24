# IIssuerInternalDebtCache

## Description

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol)

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L46)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() view returns (uint256 cachedDebt, uint256 timestamp, bool isInvalid, bool isStale)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalNonSnxBackedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L44)</sub>

??? example "Details"

    **Signature**

    `totalNonSnxBackedDebt() view returns (uint256 excludedDebt, bool isInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L38)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L40)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateCachedsUSDDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L56)</sub>

??? example "Details"

    **Signature**

    `updateCachedsUSDDebt(int256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.70.1/contracts/Issuer.sol#L42)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``
