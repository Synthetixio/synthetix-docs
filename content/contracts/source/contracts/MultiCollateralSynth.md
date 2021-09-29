# MultiCollateralSynth

## Description

Implemented in [SIP 35: Skinny Ether Collateral](https://sips.synthetix.io/sips/sip-35)

This contract was required by [EtherCollateral](EtherCollateral.md) to allow it the ability to issue the MultiCollateralSynth in this case sETH.

It could be used where there a multiple Collateral contracts.
i.e. If there where a DAICollateral for issuing sUSD or a WBTCCollateral Contract for issuing sBTC then those synths would need to inherit MultiCollateralSynth and then have their corresponding Collateral Contract set via the constructor argument multiCollateralKey

**Source:** [contracts/MultiCollateralSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol)

## Architecture

### Related Contracts

- [EtherCollateral](EtherCollateral.md)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L12)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L21)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L42)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L66)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L57)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

## Internal Functions

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L34)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L38)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyInternalContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.1-ovm-alpha/contracts/MultiCollateralSynth.sol#L73)</sub>
