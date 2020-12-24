# IIssuerInternalDebtCache

## Description

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/Issuer.sol)

## Views

### `cacheInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/Issuer.sol#L37)</sub>

??? example "Details"

    **Signature**

    `cacheInfo() returns (uint256, uint256, bool, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `updateCachedSynthDebtWithRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/Issuer.sol#L31)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtWithRate(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateCachedSynthDebtsWithRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/Issuer.sol#L33)</sub>

??? example "Details"

    **Signature**

    `updateCachedSynthDebtsWithRates(bytes32[] currencyKeys, uint256[] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `updateDebtCacheValidity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/Issuer.sol#L35)</sub>

??? example "Details"

    **Signature**

    `updateDebtCacheValidity(bool currentlyInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
