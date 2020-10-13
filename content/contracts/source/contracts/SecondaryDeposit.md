# SecondaryDeposit

## Description

**Source:** [contracts/SecondaryDeposit.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SecondaryDeposit[SecondaryDeposit] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Variables

### `activated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L20)</sub>

**Type:** `bool`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L40)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `maximumDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L78)</sub>

??? example "Details"

    **Signature**

    `maximumDeposit() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `migrateDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L155)</sub>

??? example "Details"

    **Signature**

    `migrateDeposit(address newDeposit)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [DepositMigrated](#depositmigrated)

## Internal Functions

### `companion`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L72)</sub>

??? example "Details"

    **Signature**

    `companion() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L64)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L52)</sub>

??? example "Details"

    **Signature**

    `messenger() returns (contract ICrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L68)</sub>

??? example "Details"

    **Signature**

    `rewardEscrow() returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L56)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L60)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `completeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L139)</sub>

??? example "Details"

    **Signature**

    `completeWithdrawal(address , uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L85)</sub>

??? example "Details"

    **Signature**

    `deposit(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Function deactivated)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L86)

    * [require(..., Cannot deposit more than the max)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L88)

    * [require(..., Cannot deposit with debt)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L90)

    **Emits**

    * [Deposit](#deposit)

### `initiateWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L109)</sub>

??? example "Details"

    **Signature**

    `initiateWithdrawal(uint256 )`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `mintSecondaryFromDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L127)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryFromDeposit(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Only the relayer can call this)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L129)

    * [require(..., Only deposit contract can invoke)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L130)

    **Emits**

    * [MintedSecondary](#mintedsecondary)

## Events

### `Deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L168)</sub>

**Signature**: `Deposit(address account, uint256 amount)`

### `DepositMigrated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L169)</sub>

**Signature**: `DepositMigrated(address oldDeposit, address newDeposit, uint256 amount)`

### `MintedSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/SecondaryDeposit.sol#L170)</sub>

**Signature**: `MintedSecondary(address account, uint256 amount)`
