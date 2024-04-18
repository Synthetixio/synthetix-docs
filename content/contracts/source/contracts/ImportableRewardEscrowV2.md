# ImportableRewardEscrowV2

## Description

**Source:** [contracts/ImportableRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L14)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L18)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L31)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Insufficient balance in the contract to provide for escrowed balance")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L40)

    **Modifiers**

    * [onlySynthetixBridge](#onlysynthetixbridge)

## Internal Functions

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L25)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ImportableRewardEscrowV2.sol#L50)</sub>
