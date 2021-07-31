# BaseSynthetix

## Description

**Source:** [contracts/BaseSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L21)</sub>

**Type:** `bytes32`

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L26)</sub>

**Type:** `uint8`

### `TOKEN_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L24)</sub>

**Type:** `string`

### `TOKEN_SYMBOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L25)</sub>

**Type:** `string`

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L27)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L120)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L96)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L100)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L104)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L144)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L140)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L82)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L116)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L124)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address account) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L128)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address account) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L108)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L112)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L86)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L92)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L148)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) view returns (uint256 transferable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `emitExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L448)</sub>

??? example "Details"

    **Signature**

    `emitExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `emitExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L437)</sub>

??? example "Details"

    **Signature**

    `emitExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `emitExchangeTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L425)</sub>

??? example "Details"

    **Signature**

    `emitExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `emitSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L404)</sub>

??? example "Details"

    **Signature**

    `emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

## Internal Functions

### `_canTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L152)</sub>

??? example "Details"

    **Signature**

    `_canTransfer(address account, uint256 value) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L350)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L74)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L78)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (contract IRewardsDistribution)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L62)</sub>

??? example "Details"

    **Signature**

    `synthetixState() view returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L66)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L346)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L295)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L299)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L303)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L307)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L166)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [exchangeActive](#exchangeactive)

    * [optionalProxy](#optionalproxy)

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L184)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [exchangeActive](#exchangeactive)

    * [optionalProxy](#optionalproxy)

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L235)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [exchangeActive](#exchangeactive)

    * [optionalProxy](#optionalproxy)

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L215)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [exchangeActive](#exchangeactive)

    * [optionalProxy](#optionalproxy)

### `exchangeWithTrackingForInitiator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L311)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTrackingForInitiator(bytes32, uint256, bytes32, address, bytes32) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L321)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32, uint256, bytes32, bytes32) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L287)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L291)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L279)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L283)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L334)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address, uint256) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L330)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L338)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L342)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L203)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L256)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [optionalProxy](#optionalproxy)

    * [systemActive](#systemactive)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L266)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [optionalProxy](#optionalproxy)

    * [systemActive](#systemactive)

## Modifiers

### `exchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L374)</sub>

**Signature**: `exchangeActive(bytes32 src, bytes32 dest)`

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L365)</sub>

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L383)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L356)</sub>

## Events

### `ExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L445)</sub>

**Signature**: `ExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L434)</sub>

**Signature**: `ExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L422)</sub>

**Signature**: `ExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

### `SynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.47.0-ovm/contracts/BaseSynthetix.sol#L393)</sub>

**Signature**: `SynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`
