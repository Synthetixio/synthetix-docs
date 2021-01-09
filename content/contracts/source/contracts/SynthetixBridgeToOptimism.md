# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixBridgeToOptimism[SynthetixBridgeToOptimism] --> Owned[Owned]
    SynthetixBridgeToOptimism[SynthetixBridgeToOptimism] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Variables

### `activated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L26)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L30)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `migrateBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L141)</sub>

??? example "Details"

    **Signature**

    `migrateBridge(address newBridge)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot migrate to address 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L142)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [requireActive](#requireactive)

    **Emits**

    * [BridgeMigrated](#bridgemigrated)

## Internal Functions

### `_initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L65)</sub>

??? example "Details"

    **Signature**

    `_initiateRewardDeposit(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [RewardDeposit](#rewarddeposit)

### `isActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L61)</sub>

??? example "Details"

    **Signature**

    `isActive()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Function deactivated)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L62)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L49)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L37)</sub>

??? example "Details"

    **Signature**

    `messenger() returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L53)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L41)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L57)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L45)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L128)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Only the relayer can call this)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L130)

    * [require(..., Only the L2 bridge can invoke)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L131)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [WithdrawalCompleted](#withdrawalcompleted)

### `initiateDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L98)</sub>

??? example "Details"

    **Signature**

    `initiateDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot deposit with debt)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L99)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [Deposit](#deposit)

### `initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L118)</sub>

??? example "Details"

    **Signature**

    `initiateRewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireActive](#requireactive)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L154)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Caller is not RewardsDistribution contract)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L155)

    **Modifiers**

    * [requireActive](#requireactive)

## Modifiers

### `requireActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L90)</sub>

## Events

### `BridgeMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L163)</sub>

**Signature**: `BridgeMigrated(address oldBridge, address newBridge, uint256 amount)`

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L164)</sub>

**Signature**: `Deposit(address account, uint256 amount)`

### `RewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L165)</sub>

**Signature**: `RewardDeposit(address account, uint256 amount)`

### `WithdrawalCompleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/SynthetixBridgeToOptimism.sol#L166)</sub>

**Signature**: `WithdrawalCompleted(address account, uint256 amount)`
