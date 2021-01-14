# ISynthetixBridgeToOptimism

## Description

**Source:** [contracts/interfaces/ISynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol)

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol#L7)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `depositAndMigrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol#L16)</sub>

??? example "Details"

    **Signature**

    `depositAndMigrateEscrow(uint256 depositAmount, uint256[][] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `initiateDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol#L10)</sub>

??? example "Details"

    **Signature**

    `initiateDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `initiateEscrowMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol#L12)</sub>

??? example "Details"

    **Signature**

    `initiateEscrowMigration(uint256[][] entryIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `initiateRewardDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/ISynthetixBridgeToOptimism.sol#L14)</sub>

??? example "Details"

    **Signature**

    `initiateRewardDeposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
