# MultiCollateralSynth

## Description

!!! todo "Work in Progress"

    This needs filling in

**Source:** [contracts/MultiCollateralSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MultiCollateralSynth[MultiCollateralSynth] --> Synth[Synth]
    Synth[Synth] --> ExternStateToken[ExternStateToken]
    Synth[Synth] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Variables

### `multiCollateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L9)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L13)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver, bytes32 _multiCollateralKey)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Restricted Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L42)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

## Internal Functions

### `multiCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L31)</sub>

??? example "Details"

    **Signature**

    `multiCollateral()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyInternalContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/MultiCollateralSynth.sol#L58)</sub>
