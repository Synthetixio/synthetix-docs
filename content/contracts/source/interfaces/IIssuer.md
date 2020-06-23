# IIssuer

## Description

**Source:** [contracts/interfaces/IIssuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol)

## Views

### `anySynthOrSNXRateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L8)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsStale() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L10)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L12)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L14)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L16)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L18)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L20)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L22)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesStale(address _issuer) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L27)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L29)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L31)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L33)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L42)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L46)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L48)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsStale(address account, uint256 balance) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L66)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L68)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L74)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L76)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L62)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L64)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueFor, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L54)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L56)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueFor, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.1-alpha/contracts/interfaces/IIssuer.sol#L78)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
