# MintableSynthetix

## Description

**Source:** [contracts/MintableSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L10)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L37)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L60)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyBridge](#onlybridge)

    * [systemActive](#systemactive)

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L50)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyBridge](#onlybridge)

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L54)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyBridge](#onlybridge)

## Internal Functions

### `_mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L19)</sub>

??? example "Details"

    **Signature**

    `_mintSecondary(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `onlyAllowFromBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L25)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromBridge() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Can only be invoked by bridge")](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L26)

### `synthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L44)</sub>

??? example "Details"

    **Signature**

    `synthetixBridge() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.57.2/contracts/MintableSynthetix.sol#L31)</sub>
