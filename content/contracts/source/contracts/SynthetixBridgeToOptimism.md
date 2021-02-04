# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol)

## Variables

### `activated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L32)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `migrateBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L139)</sub>

??? example "Details"

    **Signature**

    `migrateBridge(address newBridge)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot migrate to address 0")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L140)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [requireActive](#requireactive)

    **Emits**

    * [BridgeMigrated](#bridgemigrated)

## Internal Functions

### `_initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L175)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L75)</sub>

??? example "Details"

    **Signature**

    `hasZeroDebt() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot deposit or migrate with debt")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L76)

### `isActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L71)</sub>

??? example "Details"

    **Signature**

    `isActive() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Function deactivated")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L72)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L55)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L43)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L63)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L59)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L47)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L67)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L51)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L126)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L128)

    * [require(..., "Only the L2 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L129)

    **Modifiers**

    * [requireActive](#requireactive)

    **Emits**

    * [WithdrawalCompleted](#withdrawalcompleted)

### `depositAndMigrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L159)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L107)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L111)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L116)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L152)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Caller is not RewardsDistribution contract")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L153)

    **Modifiers**

    * [requireActive](#requireactive)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L81)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `requireActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L95)</sub>

### `requireZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L100)</sub>

## Events

### `BridgeMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L240)</sub>

**Signature**: `BridgeMigrated(address oldBridge, address newBridge, uint256 amount)`

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L241)</sub>

**Signature**: `Deposit(address account, uint256 amount)`

### `ExportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L242)</sub>

**Signature**: `ExportedVestingEntries(address account, uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

### `RewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L247)</sub>

**Signature**: `RewardDeposit(address account, uint256 amount)`

### `WithdrawalCompleted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L248)</sub>

**Signature**: `WithdrawalCompleted(address account, uint256 amount)`
