# FixedSupplySchedule

## Description

**Source:** [contracts/FixedSupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`
- [Math](/contracts/source/libraries/Math) for `uint`

### Inheritance Graph

```mermaid
graph TD
    FixedSupplySchedule[FixedSupplySchedule] --> Owned[Owned]
    FixedSupplySchedule[FixedSupplySchedule] --> MixinResolver[MixinResolver]

```

## Constants

### `DEFAULT_MINT_BUFFER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L32)</sub>

**Type:** `uint256`

### `DEFAULT_MINT_PERIOD_DURATION`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L30)</sub>

**Type:** `uint256`

### `MAX_MINTER_REWARD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L27)</sub>

**Type:** `uint256`

## Variables

### `fixedPeriodicSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L47)</sub>

**Type:** `uint256`

### `inflationStartDate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L37)</sub>

**Type:** `uint256`

### `lastMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L39)</sub>

**Type:** `uint256`

### `mintBuffer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L45)</sub>

**Type:** `uint256`

### `mintPeriodCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L41)</sub>

**Type:** `uint256`

### `mintPeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L43)</sub>

**Type:** `uint256`

### `minterReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L51)</sub>

**Type:** `uint256`

### `supplyEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L49)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L57)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver, uint256 _inflationStartDate, uint256 _lastMintEvent, uint256 _mintPeriodCounter, uint256 _mintPeriodDuration, uint256 _mintBuffer, uint256 _fixedPeriodicSupply, uint256 _supplyEnd, uint256 _minterReward)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Buffer can't be greater than period)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L81)

    * [require(..., Reward can't exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L82)

## Views

### `isMintable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L158)</sub>

??? example "Details"

    **Signature**

    `isMintable() returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintableSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L113)</sub>

??? example "Details"

    **Signature**

    `mintableSupply() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `periodsSinceLastIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L147)</sub>

??? example "Details"

    **Signature**

    `periodsSinceLastIssuance() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `recordMintEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L173)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L196)</sub>

??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Reward can't exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L197)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)

## Internal Functions

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L106)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L207)</sub>

## Events

### `MinterRewardUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L221)</sub>

**Signature**: `MinterRewardUpdated(uint256 newRewardAmount)`

### `SupplyMinted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.6/contracts/FixedSupplySchedule.sol#L216)</sub>

**Signature**: `SupplyMinted(uint256 supplyMinted, uint256 numberOfPeriodsIssued, uint256 lastMintEvent, uint256 timestamp)`
