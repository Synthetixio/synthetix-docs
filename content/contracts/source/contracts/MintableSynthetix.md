# MintableSynthetix

## Description

**Source:** [contracts/MintableSynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MintableSynthetix[MintableSynthetix] --> Synthetix[Synthetix]
    Synthetix[Synthetix] --> ExternStateToken[ExternStateToken]
    Synthetix[Synthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L10)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `secondaryDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L22)</sub>

??? example "Details"

    **Signature**

    `secondaryDeposit() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L36)</sub>

??? example "Details"

    **Signature**

    `burnSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Can only be invoked by the SecondaryDeposit contract)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L37)

### `mintSecondary`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L28)</sub>

??? example "Details"

    **Signature**

    `mintSecondary(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Can only be invoked by the SecondaryDeposit contract)](https://github.com/Synthetixio/synthetix/tree/v2.30.2-ovm/contracts/MintableSynthetix.sol#L29)
