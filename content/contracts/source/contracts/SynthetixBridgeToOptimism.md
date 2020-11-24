# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixBridgeToOptimism[SynthetixBridgeToOptimism] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Variables

### `activated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L35)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L39)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `migrateBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L136)</sub>

??? example "Details"

    **Signature**

    `migrateBridge(address newBridge)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot migrate to address 0)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L137)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [requireActive](#requireactive)

    **Emits**

    * [BridgeMigrated](#bridgemigrated)

## Internal Functions

### `_rewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L74)</sub>

??? example "Details"

    **Signature**

    `_rewardDeposit(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [RewardDeposit](#rewarddeposit)

### `isActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L70)</sub>

??? example "Details"

    **Signature**

    `isActive()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Function deactivated)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L71)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L46)</sub>

??? example "Details"

    **Signature**

    `messenger() returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L50)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L66)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L54)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L123)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Only the relayer can call this)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L125)

    * [require(..., Only the L2 bridge can invoke)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L126)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [WithdrawalCompleted](#withdrawalcompleted)

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L94)</sub>

??? example "Details"

    **Signature**

    `deposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot deposit with debt)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L95)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [Deposit](#deposit)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L149)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Caller is not RewardsDistribution contract)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L150)

    **Modifiers**

    * [requireActive](#requireactive)

### `rewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L114)</sub>

??? example "Details"

    **Signature**

    `rewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireActive](#requireactive)

## Modifiers

### `requireActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L86)</sub>

## Events

### `BridgeMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L158)</sub>

**Signature**: `BridgeMigrated(address oldBridge, address newBridge, uint256 amount)`

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L159)</sub>

**Signature**: `Deposit(address account, uint256 amount)`

### `RewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L160)</sub>

**Signature**: `RewardDeposit(address account, uint256 amount)`

### `WithdrawalCompleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/SynthetixBridgeToOptimism.sol#L161)</sub>

**Signature**: `WithdrawalCompleted(address account, uint256 amount)`
