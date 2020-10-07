# ISynthetix

## Description

**Source:** [contracts/interfaces/ISynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol)

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L8)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L10)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L12)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L14)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L16)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L18)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L20)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L22)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L24)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L26)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L37)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L39)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L41)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L43)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L46)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L48)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L50)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L52)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L54)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L60)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L75)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L67)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L84)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L86)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L88)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L90)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L102)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L92)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/interfaces/ISynthetix.sol#L94)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
