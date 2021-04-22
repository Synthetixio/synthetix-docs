# IIssuer

## Description

**Source:** [contracts/interfaces/IIssuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol)

## External Functions

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L8)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L10)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L12)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L14)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L72)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L74)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L80)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L82)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L16)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L18)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L20)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L22)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L27)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L48)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L29)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L68)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L70)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueFor, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L60)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L62)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueFor, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L31)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L84)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L33)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L35)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L37)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L46)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L50)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L52)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.0/contracts/interfaces/IIssuer.sol#L54)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
