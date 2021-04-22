# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol)

## Variables

### `activated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L31)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L35)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `migrateBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L138)</sub>

??? example "Details"

    **Signature**

    `migrateBridge(address newBridge)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot migrate to address 0")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L139)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [requireActive](#requireactive)

    **Emits**

    * [BridgeMigrated](#bridgemigrated)

## Internal Functions

### `_initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L174)</sub>

??? example "Details"

    **Signature**

    `_initiateRewardDeposit(uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Emits**

    * [RewardDeposit](#rewarddeposit)

### `hasZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L74)</sub>

??? example "Details"

    **Signature**

    `hasZeroDebt() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot deposit or migrate with debt")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L75)

### `isActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L70)</sub>

??? example "Details"

    **Signature**

    `isActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Function deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L71)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L54)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L42)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L62)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L46)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L66)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L50)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L125)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L127)

    * [require(..., "Only the L2 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L128)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [WithdrawalCompleted](#withdrawalcompleted)

### `depositAndMigrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L158)</sub>

??? example "Details"

    **Signature**

    `depositAndMigrateEscrow(uint256 depositAmount, uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireActive](#requireactive)

    * [requireZeroDebt](#requirezerodebt)

### `initiateDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L106)</sub>

??? example "Details"

    **Signature**

    `initiateDeposit(uint256 depositAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireActive](#requireactive)

    * [requireZeroDebt](#requirezerodebt)

### `initiateEscrowMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L110)</sub>

??? example "Details"

    **Signature**

    `initiateEscrowMigration(uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireActive](#requireactive)

    * [requireZeroDebt](#requirezerodebt)

### `initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L115)</sub>

??? example "Details"

    **Signature**

    `initiateRewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireActive](#requireactive)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L151)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Caller is not RewardsDistribution contract")](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L152)

    **Modifiers**

    * [requireActive](#requireactive)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L80)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `requireActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L94)</sub>

### `requireZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L99)</sub>

## Events

### `BridgeMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L240)</sub>

**Signature**: `BridgeMigrated(address oldBridge, address newBridge, uint256 amount)`

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L241)</sub>

**Signature**: `Deposit(address account, uint256 amount)`

### `ExportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L242)</sub>

**Signature**: `ExportedVestingEntries(address account, uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

### `RewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L247)</sub>

**Signature**: `RewardDeposit(address account, uint256 amount)`

### `WithdrawalCompleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.42.1/contracts/SynthetixBridgeToOptimism.sol#L248)</sub>

**Signature**: `WithdrawalCompleted(address account, uint256 amount)`
