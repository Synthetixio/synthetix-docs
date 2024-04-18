# SynthetixBridgeToBase

## Description

**Source:** [contracts/SynthetixBridgeToBase.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L22)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L16)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L36)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L90)</sub>

??? example "Details"

    **Signature**

    `finalizeDeposit(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [undefined](#undefined)

### `finalizeEscrowMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L76)</sub>

??? example "Details"

    **Signature**

    `finalizeEscrowMigration(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [ImportedVestingEntries](#importedvestingentries)

### `finalizeFeePeriodClose`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L106)</sub>

??? example "Details"

    **Signature**

    `finalizeFeePeriodClose(uint256 snxBackedAmount, uint256 totalDebtShares)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [FeePeriodCloseFinalized](#feeperiodclosefinalized)

### `finalizeRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L98)</sub>

??? example "Details"

    **Signature**

    `finalizeRewardDeposit(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [RewardDepositFinalized](#rewarddepositfinalized)

## Internal Functions

### `counterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L30)</sub>

??? example "Details"

    **Signature**

    `counterpart() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToOptimism`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L26)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToOptimism() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L46)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L50)</sub>

??? example "Details"

    **Signature**

    `withdrawTo(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

## Events

### `FeePeriodCloseFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L121)</sub>

**Signature**: `FeePeriodCloseFinalized(uint256 snxBackedAmount, uint256 totalDebtShares)`

### `ImportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L114)</sub>

**Signature**: `ImportedVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

### `RewardDepositFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToBase.sol#L120)</sub>

**Signature**: `RewardDepositFinalized(address from, uint256 amount)`
