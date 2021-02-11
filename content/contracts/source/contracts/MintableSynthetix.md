# MintableSynthetix

## Description

**Source:** [contracts/MintableSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L11)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L62)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyBridge](#onlybridge)

    * [systemActive](#systemactive)

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L52)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyBridge](#onlybridge)

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L56)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyBridge](#onlybridge)

## Internal Functions

### `_mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L21)</sub>

??? example "Details"

    **Signature**

    `_mintSecondary(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `onlyAllowFromBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromBridge() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Can only be invoked by bridge")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L28)

### `synthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L46)</sub>

??? example "Details"

    **Signature**

    `synthetixBridge() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L39)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/MintableSynthetix.sol#L33)</sub>
