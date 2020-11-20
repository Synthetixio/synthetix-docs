# SynthetixBridgeToBase

## Description

**Source:** [contracts/SynthetixBridgeToBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixBridgeToBase[SynthetixBridgeToBase] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L31)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `mintSecondaryFromDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L79)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryFromDeposit(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondary](#mintedsecondary)

### `mintSecondaryFromDepositForRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L87)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryFromDepositForRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondaryRewards](#mintedsecondaryrewards)

## Internal Functions

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L36)</sub>

??? example "Details"

    **Signature**

    `messenger() returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `onlyAllowFromOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L48)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromOptimism()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Only the relayer can call this)](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L51)

    * [require(..., Only the L1 bridge can invoke)](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L52)

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L40)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `initiateWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L63)</sub>

??? example "Details"

    **Signature**

    `initiateWithdrawal(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [WithdrawalInitiated](#withdrawalinitiated)

## Modifiers

### `onlyOptimismBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L55)</sub>

## Events

### `MintedSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L95)</sub>

**Signature**: `MintedSecondary(address account, uint256 amount)`

### `MintedSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L96)</sub>

**Signature**: `MintedSecondaryRewards(uint256 amount)`

### `WithdrawalInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0-ovm/contracts/SynthetixBridgeToBase.sol#L97)</sub>

**Signature**: `WithdrawalInitiated(address account, uint256 amount)`
