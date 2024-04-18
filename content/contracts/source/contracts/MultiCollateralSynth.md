# MultiCollateralSynth

## Description

Implemented in [SIP 35: Skinny Ether Collateral](https://sips.synthetix.io/sips/sip-35)

This contract was required by [EtherCollateral](EtherCollateral.md) to allow it the ability to issue the MultiCollateralSynth in this case sETH.

It could be used where there a multiple Collateral contracts.
i.e. If there where a DAICollateral for issuing sUSD or a WBTCCollateral Contract for issuing sBTC then those synths would need to inherit MultiCollateralSynth and then have their corresponding Collateral Contract set via the constructor argument multiCollateralKey

**Source:** [contracts/MultiCollateralSynth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol)

## Architecture

### Related Contracts

- [EtherCollateral](EtherCollateral.md)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L13)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L23)</sub>

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L48)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L73)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L64)</sub>

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

### `_isInternalContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L80)</sub>

??? example "Details"

    **Signature**

    `_isInternalContract(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L36)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherWrapper`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L40)</sub>

??? example "Details"

    **Signature**

    `etherWrapper() view returns (contract IEtherWrapper)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `wrapperFactory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/MultiCollateralSynth.sol#L44)</sub>

??? example "Details"

    **Signature**

    `wrapperFactory() view returns (contract IWrapperFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
