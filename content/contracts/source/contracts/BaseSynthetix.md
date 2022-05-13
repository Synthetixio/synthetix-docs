# BaseSynthetix

## Description

**Source:** [contracts/BaseSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol)

## Variables

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L26)</sub>

**Type:** `uint8`

### `TOKEN_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L24)</sub>

**Type:** `string`

### `TOKEN_SYMBOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L25)</sub>

**Type:** `string`

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L27)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L39)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L124)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L100)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L104)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L108)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L148)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L144)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L88)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L120)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L128)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address account) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L132)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address account) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L54)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L112)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L116)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L92)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeOtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L96)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeOtherCollateral(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L152)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) view returns (uint256 transferable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `emitExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L538)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L527)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L515)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L494)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L156)</sub>

??? example "Details"

    **Signature**

    `_canTransfer(address account, uint256 value) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L421)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `emitAccountLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L467)</sub>

??? example "Details"

    **Signature**

    `emitAccountLiquidated(address account, uint256 snxRedeemed, uint256 amountLiquidated, address liquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L68)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L72)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L84)</sub>

??? example "Details"

    **Signature**

    `liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L80)</sub>

??? example "Details"

    **Signature**

    `liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L76)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (contract IRewardsDistribution)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L64)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L417)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L298)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L302)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L306)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L310)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L169)</sub>

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

### `exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L395)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(bytes32, uint256, bytes32, bytes32, uint256) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L187)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L238)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L218)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L376)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTrackingForInitiator(bytes32, uint256, bytes32, address, bytes32) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L386)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32, uint256, bytes32, bytes32) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L290)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L294)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L282)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L286)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L316)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [systemActive](#systemactive)

    * [optionalProxy](#optionalproxy)

### `liquidateSelf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L359)</sub>

??? example "Details"

    **Signature**

    `liquidateSelf() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Transfer to LiquidatorRewards failed")](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L368)

    **Modifiers**

    * [systemActive](#systemactive)

    * [optionalProxy](#optionalproxy)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L405)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L409)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L413)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L206)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L259)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L269)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L445)</sub>

**Signature**: `exchangeActive(bytes32 src, bytes32 dest)`

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L436)</sub>

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L454)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L427)</sub>

## Events

### `AccountLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L464)</sub>

**Signature**: `AccountLiquidated(address account, uint256 snxRedeemed, uint256 amountLiquidated, address liquidator)`

### `ExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L535)</sub>

**Signature**: `ExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L524)</sub>

**Signature**: `ExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L512)</sub>

**Signature**: `ExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

### `SynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.69.0-alpha/contracts/BaseSynthetix.sol#L483)</sub>

**Signature**: `SynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`
