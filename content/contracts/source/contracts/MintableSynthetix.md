# MintableSynthetix

## Description

**Source:** [contracts/MintableSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MintableSynthetix[MintableSynthetix] --> Synthetix[Synthetix]
    Synthetix[Synthetix] --> ExternStateToken[ExternStateToken]
    Synthetix[Synthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L11)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L58)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyBridge](#onlybridge)

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L48)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L52)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L23)</sub>

??? example "Details"

    **Signature**

    `_mintSecondary(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `onlyAllowFromBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L29)</sub>

??? example "Details"

    **Signature**

    `onlyAllowFromBridge()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Can only be invoked by the SynthetixBridgeToBase contract)](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L30)

### `synthetixBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L42)</sub>

??? example "Details"

    **Signature**

    `synthetixBridge() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/MintableSynthetix.sol#L35)</sub>
