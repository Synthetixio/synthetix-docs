# IIssuer

## Description

**Source:** [contracts/interfaces/IIssuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol)

## External Functions

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L9)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L11)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L13)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L15)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L73)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L75)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L81)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L83)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L17)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L19)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L21)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L23)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L28)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L49)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L30)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L69)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L71)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueFor, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L61)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L63)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueFor, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L32)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L85)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L34)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L36)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L38)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L47)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L51)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L53)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/IIssuer.sol#L55)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
