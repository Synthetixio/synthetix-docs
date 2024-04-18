# ImportableRewardEscrowV2Frozen

## Description

**Source:** [contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L19)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L23)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L36)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Insufficient balance in the contract to provide for escrowed balance")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L43)

    **Modifiers**

    * [onlySynthetixBridge](#onlysynthetixbridge)

## Internal Functions

### `_importVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L56)</sub>

??? example "Details"

    **Signature**

    `_importVestingEntry(address account, struct VestingEntries.VestingEntry entry)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L30)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardEscrowV2Frozen/ImportableRewardEscrowV2Frozen.sol#L67)</sub>
