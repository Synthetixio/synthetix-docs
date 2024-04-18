# BaseSynthetixBridge

## Description

**Source:** [contracts/BaseSynthetixBridge.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol)

## Variables

### `initiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L40)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L48)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L38)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synthTransferReceived`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L119)</sub>

??? example "Details"

    **Signature**

    `synthTransferReceived() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `synthTransferSent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L115)</sub>

??? example "Details"

    **Signature**

    `synthTransferSent() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeSynthTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L177)</sub>

??? example "Details"

    **Signature**

    `finalizeSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [FinalizeSynthTransfer](#finalizesynthtransfer)

### `resumeInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L143)</sub>

??? example "Details"

    **Signature**

    `resumeInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation not suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L144)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationResumed](#initiationresumed)

### `suspendInitiation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L137)</sub>

??? example "Details"

    **Signature**

    `suspendInitiation()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Initiation suspended")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L138)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InitiationSuspended](#initiationsuspended)

## Internal Functions

### `_incrementSynthsTransferCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L191)</sub>

??? example "Details"

    **Signature**

    `_incrementSynthsTransferCounter(bytes32 group, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_sumTransferAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L203)</sub>

??? example "Details"

    **Signature**

    `_sumTransferAmounts(bytes32 group) view returns (uint256 sum)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Rates are invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L210)

### `counterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L90)</sub>

??? example "Details"

    **Signature**

    `counterpart() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L78)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L70)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `flexibleStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L74)</sub>

??? example "Details"

    **Signature**

    `flexibleStorage() view returns (contract IFlexibleStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `initiatingActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L86)</sub>

??? example "Details"

    **Signature**

    `initiatingActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Initiation deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L87)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L66)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L54)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iAbs_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `onlyAllowFromCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L92)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromCounterpart() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L95)

    * [require(..., "Only a counterpart bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L96)

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L62)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L58)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L82)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `initiateSynthTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L149)</sub>

??? example "Details"

    **Signature**

    `initiateSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot send to zero address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L154)

    * [require(..., "Synth not enabled for cross chain transfer")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L155)

    * [require(..., "Cannot initiate if synth rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L161)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    **Emits**

    * [InitiateSynthTransfer](#initiatesynthtransfer)

## Modifiers

### `onlyCounterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L130)</sub>

### `requireInitiationActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L125)</sub>

## Events

### `FinalizeSynthTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L232)</sub>

**Signature**: `FinalizeSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)`

### `InitiateSynthTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L231)</sub>

**Signature**: `InitiateSynthTransfer(bytes32 currencyKey, address destination, uint256 amount)`

### `InitiationResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L229)</sub>

**Signature**: `InitiationResumed()`

### `InitiationSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseSynthetixBridge.sol#L227)</sub>

**Signature**: `InitiationSuspended()`
