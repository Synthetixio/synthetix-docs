# RewardEscrowV2Storage

## Description

**Source:** [contracts/RewardEscrowV2Storage.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol)

## Structs

### `StorageEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L25)</sub>

| Field          | Type      | Description |
| -------------- | --------- | ----------- |
| `endTime`      | `uint32`  | TBA         |
| `escrowAmount` | `uint224` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L73)</sub>

**Type:** `bytes32`

### `fallbackRewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L70)</sub>

**Type:** `contract IRewardEscrowV2Frozen`

### `firstNonFallbackId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L59)</sub>

**Type:** `uint256`

### `nextEntryId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L56)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L77)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `accountVestingEntryIDs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L113)</sub>

??? example "Details"

    **Signature**

    `accountVestingEntryIDs(address account, uint256 index) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

### `numVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L154)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

### `totalEscrowedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L129)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

### `totalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L125)</sub>

??? example "Details"

    **Signature**

    `totalEscrowedBalance() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

### `totalVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L141)</sub>

??? example "Details"

    **Signature**

    `totalVestedAccountBalance(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

### `vestingSchedules`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L95)</sub>

??? example "Details"

    **Signature**

    `vestingSchedules(address account, uint256 entryId) view returns (struct VestingEntries.VestingEntry entry)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [withFallback](#withfallback)

## Restricted Functions

### `addVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L275)</sub>

??? example "Details"

    **Signature**

    `addVestingEntry(address account, struct VestingEntries.VestingEntry entry) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "vesting target time zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L282)

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setFallbackRewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L81)</sub>

??? example "Details"

    **Signature**

    `setFallbackRewardEscrow(contract IRewardEscrowV2Frozen _fallbackRewardEscrow)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "already set")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L82)

    * [require(..., "cannot be zero address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L83)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setZeroAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L175)</sub>

??? example "Details"

    **Signature**

    `setZeroAmount(address account, uint256 entryId)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `setZeroAmountUntilTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L197)</sub>

??? example "Details"

    **Signature**

    `setZeroAmountUntilTarget(address account, uint256 startIndex, uint256 targetAmount) returns (uint256 total, uint256 endIndex, uint256 lastEntryTime)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "targetAmount is zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L211)

    * [require(..., "no entries to iterate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L217)

    * [require(..., "startIndex too high")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L218)

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateEscrowAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L243)</sub>

??? example "Details"

    **Signature**

    `updateEscrowAccountBalance(address account, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "updateEscrowAccountBalance: balance must be positive")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L246)

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateTotalEscrowedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L268)</sub>

??? example "Details"

    **Signature**

    `updateTotalEscrowedBalance(int256 delta)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "updateTotalEscrowedBalance: balance must be positive")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L270)

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

### `updateVestedAccountBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L256)</sub>

??? example "Details"

    **Signature**

    `updateVestedAccountBalance(address account, int256 delta)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "updateVestedAccountBalance: balance must be positive")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L259)

    **Modifiers**

    * [withFallback](#withfallback)

    * [onlyAssociatedContract](#onlyassociatedcontract)

## Internal Functions

### `_cacheFallbackIDCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L320)</sub>

??? example "Details"

    **Signature**

    `_cacheFallbackIDCount(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_fallbackNumVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L161)</sub>

??? example "Details"

    **Signature**

    `_fallbackNumVestingEntries(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_readWithZeroPlaceholder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L335)</sub>

??? example "Details"

    **Signature**

    `_readWithZeroPlaceholder(int256 v) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_setZeroAmountWithEndTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L304)</sub>

??? example "Details"

    **Signature**

    `_setZeroAmountWithEndTime(address account, uint256 entryId, uint256 endTime)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_writeWithZeroPlaceholder`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L330)</sub>

??? example "Details"

    **Signature**

    `_writeWithZeroPlaceholder(uint256 v) pure returns (int256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

## Modifiers

### `withFallback`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Storage.sol#L342)</sub>
