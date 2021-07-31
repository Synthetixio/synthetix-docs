# ISynthetix

## Description

**Source:** [contracts/interfaces/ISynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol)

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L9)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L11)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L13)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L15)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L17)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L19)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L21)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L23)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L25)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L42)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L44)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) view returns (uint256 transferable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L127)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L47)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L49)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L55)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L61)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L84)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L68)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithTrackingForInitiator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L76)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTrackingForInitiator(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L93)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L100)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L102)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L104)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L106)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L119)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L108)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L123)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L125)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/interfaces/ISynthetix.sol#L110)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``
