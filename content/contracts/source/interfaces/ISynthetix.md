# ISynthetix

## Description

**Source:** [contracts/interfaces/ISynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol)

## External Functions

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L9)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L11)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L13)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L15)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L119)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L47)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L49)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L17)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L19)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L21)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L55)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L61)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L76)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L68)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L85)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L23)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L92)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L94)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L96)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L98)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L111)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L25)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L100)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L115)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L117)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L102)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L42)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/interfaces/ISynthetix.sol#L44)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) view returns (uint256 transferable)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
