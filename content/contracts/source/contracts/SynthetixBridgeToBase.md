# SynthetixBridgeToBase

## Description

**Source:** [contracts/SynthetixBridgeToBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixBridgeToBase[SynthetixBridgeToBase] --> Owned[Owned]
    SynthetixBridgeToBase[SynthetixBridgeToBase] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L26)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L61)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `completeDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L92)</sub>

??? example "Details"

    **Signature**

    `completeDeposit(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondary](#mintedsecondary)

### `completeRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L100)</sub>

??? example "Details"

    **Signature**

    `completeRewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondaryRewards](#mintedsecondaryrewards)

## Internal Functions

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L39)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L31)</sub>

??? example "Details"

    **Signature**

    `messenger() returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `onlyAllowFromOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L47)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromOptimism()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Only the relayer can call this)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L50)

    * [require(..., Only the L1 bridge can invoke)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L51)

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L43)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `initiateWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L74)</sub>

??? example "Details"

    **Signature**

    `initiateWithdrawal(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot withdraw with debt)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L75)

    **Emits**

    * [WithdrawalInitiated](#withdrawalinitiated)

## Modifiers

### `onlyOptimismBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L54)</sub>

## Events

### `MintedSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L108)</sub>

**Signature**: `MintedSecondary(address account, uint256 amount)`

### `MintedSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L109)</sub>

**Signature**: `MintedSecondaryRewards(uint256 amount)`

### `WithdrawalInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToBase.sol#L110)</sub>

**Signature**: `WithdrawalInitiated(address account, uint256 amount)`
