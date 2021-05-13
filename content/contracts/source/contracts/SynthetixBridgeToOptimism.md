# SynthetixBridgeToOptimism

## Description

**Source:** [contracts/SynthetixBridgeToOptimism.sol](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L28)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Internal Functions

### `_depositReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_depositReward(address _from, uint256 _amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Emits**

    * [RewardDepositInitiated](#rewarddepositinitiated)

### `hasZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L52)</sub>

??? example "Details"

    **Signature**

    `hasZeroDebt() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot deposit or migrate with debt")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L53)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L36)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L40)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L48)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeEscrow() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L32)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L77)</sub>

??? example "Details"

    **Signature**

    `deposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `depositAndMigrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L129)</sub>

??? example "Details"

    **Signature**

    `depositAndMigrateEscrow(uint256 depositAmount, uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `depositReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L90)</sub>

??? example "Details"

    **Signature**

    `depositReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

### `depositTo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L81)</sub>

??? example "Details"

    **Signature**

    `depositTo(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `finalizeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L106)</sub>

??? example "Details"

    **Signature**

    `finalizeWithdrawal(address to, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Only the relayer can call this")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L108)

    * [require(..., "Only the L2 bridge can invoke")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L109)

    **Emits**

    * [undefined](#undefined)

### `forwardTokensToEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L98)</sub>

??? example "Details"

    **Signature**

    `forwardTokensToEscrow(address token)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `migrateEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L85)</sub>

??? example "Details"

    **Signature**

    `migrateEscrow(uint256[][] entryIDs)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [requireInitiationActive](#requireinitiationactive)

    * [requireZeroDebt](#requirezerodebt)

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L119)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Caller is not RewardsDistribution contract")](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L120)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L58)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `requireZeroDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L70)</sub>

## Events

### `ExportedVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L216)</sub>

**Signature**: `ExportedVestingEntries(address account, uint256 escrowedAccountBalance, struct VestingEntries.VestingEntry[] vestingEntries)`

### `RewardDepositInitiated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.45.0-alpha/contracts/SynthetixBridgeToOptimism.sol#L222)</sub>

**Signature**: `RewardDepositInitiated(address account, uint256 amount)`
