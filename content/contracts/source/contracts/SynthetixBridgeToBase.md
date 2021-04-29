# SynthetixBridgeToBase

## Description

**Source:** [contracts/SynthetixBridgeToBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L27)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `completeDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L110)</sub>

??? example "Details"

    **Signature**

    `completeDeposit(address account, uint256 depositAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondary](#mintedsecondary)

### `completeEscrowMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L97)</sub>

??? example "Details"

    **Signature**

    `completeEscrowMigration(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [ImportedVestingEntries](#importedvestingentries)

### `completeRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L117)</sub>

??? example "Details"

    **Signature**

    `completeRewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [MintedSecondaryRewards](#mintedsecondaryrewards)

## Internal Functions

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L32)</sub>

??? example "Details"

    **Signature**

    `messenger() view returns (contract iOVM_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `onlyAllowFromOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L48)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromOptimism() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L51)

    * [require(..., "Only the L1 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L52)

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L40)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `initiateWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L75)</sub>

??? example "Details"

    **Signature**

    `initiateWithdrawal(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough transferable SNX")](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L76)

    **Emits**

    * [WithdrawalInitiated](#withdrawalinitiated)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L62)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyOptimismBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L55)</sub>

## Events

### `ImportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L124)</sub>

**Signature**: `ImportedVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

### `MintedSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L129)</sub>

**Signature**: `MintedSecondary(address account, uint256 amount)`

### `MintedSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L130)</sub>

**Signature**: `MintedSecondaryRewards(uint256 amount)`

### `WithdrawalInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.43.1/contracts/SynthetixBridgeToBase.sol#L131)</sub>

**Signature**: `WithdrawalInitiated(address account, uint256 amount)`
