# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L20)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L31)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L61)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_depositReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L165)</sub>

??? example "Details"

    **Signature**

    `_depositReward(address _from, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [RewardDepositInitiated](#rewarddepositinitiated)

### `hasZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L55)</sub>

??? example "Details"

    **Signature**

    `hasZeroDebt() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cannot deposit or migrate with debt")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L56)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L39)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L43)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L51)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeEscrow() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L47)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L35)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `closeFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L108)</sub>

??? example "Details"

    **Signature**

    `closeFeePeriod(uint256 snxBackedAmount, uint256 totalDebtShares)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the fee pool can call this")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L109)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    **Emits**

    * [FeePeriodClosed](#feeperiodclosed)

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L80)</sub>

??? example "Details"

    **Signature**

    `deposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `depositAndMigrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L149)</sub>

??? example "Details"

    **Signature**

    `depositAndMigrateEscrow(uint256 depositAmount, uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `depositReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L93)</sub>

??? example "Details"

    **Signature**

    `depositReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

### `depositTo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L84)</sub>

??? example "Details"

    **Signature**

    `depositTo(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `finalizeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L126)</sub>

??? example "Details"

    **Signature**

    `finalizeWithdrawal(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L128)

    * [require(..., "Only the L2 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L129)

    **Emits**

    * [undefined](#undefined)

### `forwardTokensToEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L101)</sub>

??? example "Details"

    **Signature**

    `forwardTokensToEscrow(address token)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L88)</sub>

??? example "Details"

    **Signature**

    `migrateEscrow(uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L139)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Caller is not RewardsDistribution contract")](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L140)

## Modifiers

### `requireZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L73)</sub>

## Events

### `ExportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L236)</sub>

**Signature**: `ExportedVestingEntries(address account, uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

### `FeePeriodClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L244)</sub>

**Signature**: `FeePeriodClosed(uint256 snxBackedDebt, uint256 totalDebtShares)`

### `RewardDepositInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L242)</sub>

**Signature**: `RewardDepositInitiated(address account, uint256 amount)`
