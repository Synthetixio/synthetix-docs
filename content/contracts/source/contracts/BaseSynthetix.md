# BaseSynthetix

## Description

**Source:** [contracts/BaseSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol)

## Variables

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L28)</sub>

**Type:** `uint8`

### `TOKEN_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L26)</sub>

**Type:** `string`

### `TOKEN_SYMBOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L27)</sub>

**Type:** `string`

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L29)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L133)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L109)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L113)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L117)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L157)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L153)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L97)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getFirstNonZeroEscrowIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L168)</sub>

??? example "Details"

    **Signature**

    `getFirstNonZeroEscrowIndex(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L129)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L137)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address account) view returns (uint256 maxIssuable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L141)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address account) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L58)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L121)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) view returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L125)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L101)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeOtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L105)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeOtherCollateral(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L161)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) view returns (uint256 transferable)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `emitExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L655)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L644)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L632)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L611)</sub>

??? example "Details"

    **Signature**

    `emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `migrateEscrowContractBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L316)</sub>

??? example "Details"

    **Signature**

    `migrateEscrowContractBalance()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot migrate to same address")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L321)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L292)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

    * [systemActive](#systemactive)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L302)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

    * [systemActive](#systemactive)

## Internal Functions

### `_canTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L182)</sub>

??? example "Details"

    **Signature**

    `_canTransfer(address account, uint256 value) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isInternalTransferCaller`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L566)</sub>

??? example "Details"

    **Signature**

    `_isInternalTransferCaller(address caller) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L381)</sub>

??? example "Details"

    **Signature**

    `_liquidateDelinquentAccount(address account, uint256 escrowStartIndex, address liquidatorAccount) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Flag reward transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L407)

    * [require(..., "Liquidate reward transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L411)

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L505)</sub>

??? example "Details"

    **Signature**

    `_notImplemented() pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_onlyProxyOrInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L552)</sub>

??? example "Details"

    **Signature**

    `_onlyProxyOrInternal()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitAccountLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L584)</sub>

??? example "Details"

    **Signature**

    `emitAccountLiquidated(address account, uint256 snxRedeemed, uint256 amountLiquidated, address liquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L73)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L77)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L93)</sub>

??? example "Details"

    **Signature**

    `liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L85)</sub>

??? example "Details"

    **Signature**

    `liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L89)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L81)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (contract IRewardsDistribution)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L69)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L501)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L346)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L350)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L354)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L358)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L202)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L479)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(bytes32, uint256, bytes32, bytes32, uint256) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L220)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L271)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L251)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L460)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTrackingForInitiator(bytes32, uint256, bytes32, address, bytes32) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L470)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32, uint256, bytes32, bytes32) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L338)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L342)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L330)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L334)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L364)</sub>

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

### `liquidateDelinquentAccountEscrowIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L370)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccountEscrowIndex(address account, uint256 escrowStartIndex) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [systemActive](#systemactive)

    * [optionalProxy](#optionalproxy)

### `liquidateSelf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L426)</sub>

??? example "Details"

    **Signature**

    `liquidateSelf() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot self liquidate")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L436)

    * [require(..., "Transfer to LiquidatorRewards failed")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L443)

    **Modifiers**

    * [systemActive](#systemactive)

    * [optionalProxy](#optionalproxy)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L489)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L493)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L497)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `revokeAllEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L454)</sub>

??? example "Details"

    **Signature**

    `revokeAllEscrow(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only LegacyMarket can revoke escrow")](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L456)

    **Modifiers**

    * [systemActive](#systemactive)

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L239)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [optionalProxy](#optionalproxy)

## Modifiers

### `exchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L529)</sub>

**Signature**: `exchangeActive(bytes32 src, bytes32 dest)`

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L520)</sub>

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L538)</sub>

### `onlyProxyOrInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L547)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L511)</sub>

## Events

### `AccountLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L581)</sub>

**Signature**: `AccountLiquidated(address account, uint256 snxRedeemed, uint256 amountLiquidated, address liquidator)`

### `ExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L652)</sub>

**Signature**: `ExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L641)</sub>

**Signature**: `ExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L629)</sub>

**Signature**: `ExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount, uint256 fee)`

### `SynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.79.0-alpha/contracts/BaseSynthetix.sol#L600)</sub>

**Signature**: `SynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`
