# MintableSynthetix

## Description

**Source:** [contracts/MintableSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MintableSynthetix[MintableSynthetix] --> BaseSynthetix[BaseSynthetix]
    BaseSynthetix[BaseSynthetix] --> ExternStateToken[ExternStateToken]
    BaseSynthetix[BaseSynthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    Proxyable[Proxyable] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L11)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L39)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L62)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyBridge](#onlybridge)

    * [systemActive](#systemactive)

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L52)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyBridge](#onlybridge)

### `mintSecondaryRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L56)</sub>

??? example "Details"

    **Signature**

    `mintSecondaryRewards(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyBridge](#onlybridge)

## Internal Functions

### `_mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L21)</sub>

??? example "Details"

    **Signature**

    `_mintSecondary(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `onlyAllowFromBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromBridge()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Can only be invoked by bridge)](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L28)

### `synthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L46)</sub>

??? example "Details"

    **Signature**

    `synthetixBridge() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.1/contracts/MintableSynthetix.sol#L33)</sub>
