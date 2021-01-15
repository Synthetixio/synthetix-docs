# BaseSynthetix

## Description

**Source:** [contracts/BaseSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    BaseSynthetix[BaseSynthetix] --> ExternStateToken[ExternStateToken]
    BaseSynthetix[BaseSynthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    Proxyable[Proxyable] --> Owned[Owned]

```

## Constants

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L26)</sub>

**Type:** `uint8`

### `TOKEN_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L24)</sub>

**Type:** `string`

### `TOKEN_SYMBOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L25)</sub>

**Type:** `string`

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L27)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L118)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L94)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L98)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L102)</sub>

??? example "Details"

    **Signature**

    `availableSynths(uint256 index) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L142)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L138)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L82)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address account, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L114)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L122)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L126)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address account) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L106)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) returns (contract ISynth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L110)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L86)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L90)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L146)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Internal Functions

### `_canTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L150)</sub>

??? example "Details"

    **Signature**

    `_canTransfer(address account, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_notImplemented`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L299)</sub>

??? example "Details"

    **Signature**

    `_notImplemented()`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L74)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L78)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() returns (contract IRewardsDistribution)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L62)</sub>

??? example "Details"

    **Signature**

    `synthetixState() returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L66)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L295)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L205)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L209)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L213)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L217)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L221)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 , uint256 , bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L229)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address , bytes32 , uint256 , bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L248)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address , bytes32 , uint256 , bytes32 , address , bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L238)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(bytes32 , uint256 , bytes32 , address , bytes32 ) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L259)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(bytes32 , uint256 , bytes32 , bytes32 ) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L197)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L201)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L189)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L193)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L283)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address , uint256 ) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L279)</sub>

??? example "Details"

    **Signature**

    `mint() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L287)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L291)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L268)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 ) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L166)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

    * [systemActive](#systemactive)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L176)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

    * [systemActive](#systemactive)

## Modifiers

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L314)</sub>

### `systemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0/contracts/BaseSynthetix.sol#L305)</sub>
