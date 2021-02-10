# ImportableRewardEscrowV2

## Description

**Source:** [contracts/ImportableRewardEscrowV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L15)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `importVestingEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L32)</sub>

??? example "Details"

    **Signature**

    `importVestingEntries(address account, uint256 escrowedAmount, struct VestingEntries.VestingEntry[] vestingEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Insufficient balance in the contract to provide for escrowed balance")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L39)

    **Modifiers**

    * [onlySynthetixBridge](#onlysynthetixbridge)

## Internal Functions

### `_importVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L52)</sub>

??? example "Details"

    **Signature**

    `_importVestingEntry(address account, struct VestingEntries.VestingEntry entry)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixBridgeToBase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L26)</sub>

??? example "Details"

    **Signature**

    `synthetixBridgeToBase() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L19)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlySynthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/ImportableRewardEscrowV2.sol#L63)</sub>
