# SynthetixBridgeToBase

## Description

**Source:** [contracts/SynthetixBridgeToBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L40)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L94)</sub>

??? example "Details"

    **Signature**

    `finalizeDeposit(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [undefined](#undefined)

### `finalizeEscrowMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L80)</sub>

??? example "Details"

    **Signature**

    `finalizeEscrowMigration(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [ImportedVestingEntries](#importedvestingentries)

### `finalizeFeePeriodClose`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L110)</sub>

??? example "Details"

    **Signature**

    `finalizeFeePeriodClose(uint256 snxBackedAmount, uint256 totalDebtShares)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [FeePeriodCloseFinalized](#feeperiodclosefinalized)

### `finalizeRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L102)</sub>

??? example "Details"

    **Signature**

    `finalizeRewardDeposit(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOptimismBridge](#onlyoptimismbridge)

    **Emits**

    * [RewardDepositFinalized](#rewarddepositfinalized)

## Internal Functions

### `onlyAllowFromOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L26)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromOptimism() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L29)

    * [require(..., "Only the L1 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L30)

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L22)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L50)</sub>

??? example "Details"

    **Signature**

    `withdraw(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

### `withdrawTo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L54)</sub>

??? example "Details"

    **Signature**

    `withdrawTo(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Modifiers

### `onlyOptimismBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L33)</sub>

## Events

### `FeePeriodCloseFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L125)</sub>

**Signature**: `FeePeriodCloseFinalized(uint256 snxBackedAmount, uint256 totalDebtShares)`

### `ImportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L118)</sub>

**Signature**: `ImportedVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

### `RewardDepositFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/SynthetixBridgeToBase.sol#L124)</sub>

**Signature**: `RewardDepositFinalized(address from, uint256 amount)`
