# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L32)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L26)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L66)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `finalizeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L131)</sub>

??? example "Details"

    **Signature**

    `finalizeWithdrawal(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyCounterpart](#onlycounterpart)

    **Emits**

    * [undefined](#undefined)

## Internal Functions

### `_depositReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L166)</sub>

??? example "Details"

    **Signature**

    `_depositReward(address _from, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [RewardDepositInitiated](#rewarddepositinitiated)

### `counterpart`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L60)</sub>

??? example "Details"

    **Signature**

    `counterpart() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `hasZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L56)</sub>

??? example "Details"

    **Signature**

    `hasZeroDebt() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cannot deposit or migrate with debt")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L57)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L40)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L44)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L52)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeEscrow() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L48)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `closeFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L113)</sub>

??? example "Details"

    **Signature**

    `closeFeePeriod(uint256 snxBackedAmount, uint256 totalDebtShares)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the fee pool can call this")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L114)

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    **Emits**

    * [FeePeriodClosed](#feeperiodclosed)

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L85)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L150)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L98)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L89)</sub>

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

### `forwardTokensToEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L106)</sub>

??? example "Details"

    **Signature**

    `forwardTokensToEscrow(address token)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `migrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L93)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L140)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Caller is not RewardsDistribution contract")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L141)

## Modifiers

### `requireZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L78)</sub>

## Events

### `ExportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L237)</sub>

**Signature**: `ExportedVestingEntries(address account, uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

### `FeePeriodClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L245)</sub>

**Signature**: `FeePeriodClosed(uint256 snxBackedDebt, uint256 totalDebtShares)`

### `RewardDepositInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixBridgeToOptimism.sol#L243)</sub>

**Signature**: `RewardDepositInitiated(address account, uint256 amount)`
