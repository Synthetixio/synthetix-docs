# FixedSupplySchedule

## Description

**Source:** [contracts/FixedSupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`
- [Math](/contracts/source/libraries/Math) for `uint`

### Inheritance Graph

```mermaid
graph TD
    FixedSupplySchedule[FixedSupplySchedule] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constants

### `DEFAULT_MINT_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L31)</sub>

**Type:** `uint256`

### `DEFAULT_MINT_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L29)</sub>

**Type:** `uint256`

### `MAX_MINTER_REWARD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L26)</sub>

**Type:** `uint256`

## Variables

### `fixedPeriodicSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L46)</sub>

**Type:** `uint256`

### `inflationStartDate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L36)</sub>

**Type:** `uint256`

### `lastMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L38)</sub>

**Type:** `uint256`

### `mintBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L44)</sub>

**Type:** `uint256`

### `mintPeriodCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L40)</sub>

**Type:** `uint256`

### `mintPeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L42)</sub>

**Type:** `uint256`

### `minterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L50)</sub>

**Type:** `uint256`

### `supplyEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L48)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L58)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver, uint256 _inflationStartDate, uint256 _lastMintEvent, uint256 _mintPeriodCounter, uint256 _mintPeriodDuration, uint256 _mintBuffer, uint256 _fixedPeriodicSupply, uint256 _supplyEnd, uint256 _minterReward)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Buffer can't be greater than period)](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L82)

    * [require(..., Reward can't exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L83)

## Views

### `isMintable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L154)</sub>

??? example "Details"

    **Signature**

    `isMintable() returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L109)</sub>

??? example "Details"

    **Signature**

    `mintableSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `periodsSinceLastIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L143)</sub>

??? example "Details"

    **Signature**

    `periodsSinceLastIssuance() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `recordMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L169)</sub>

??? example "Details"

    **Signature**

    `recordMintEvent(uint256 supplyMinted) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [SupplyMinted](#supplyminted)

### `setMinterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L192)</sub>

??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Reward can't exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L193)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)

## Internal Functions

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L102)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L203)</sub>

## Events

### `MinterRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L217)</sub>

**Signature**: `MinterRewardUpdated(uint256 newRewardAmount)`

### `SupplyMinted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.1-alpha/contracts/FixedSupplySchedule.sol#L212)</sub>

**Signature**: `SupplyMinted(uint256 supplyMinted, uint256 numberOfPeriodsIssued, uint256 lastMintEvent, uint256 timestamp)`
