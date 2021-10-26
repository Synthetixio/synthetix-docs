# Wrapper

## Description

**Source:** [contracts/Wrapper.sol](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol)

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L42)</sub>

**Type:** `bytes32`

### `synthContractName`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L43)</sub>

**Type:** `bytes32`

### `targetSynthIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L45)</sub>

**Type:** `uint256`

### `token`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L41)</sub>

**Type:** `contract IERC20`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L47)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, contract IERC20 _token, bytes32 _currencyKey, bytes32 _synthContractName)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `burnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L150)</sub>

??? example "Details"

    **Signature**

    `burnFeeRate() view returns (int256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateBurnFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L132)</sub>

??? example "Details"

    **Signature**

    `calculateBurnFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateMintFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L122)</sub>

??? example "Details"

    **Signature**

    `calculateMintFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `capacity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L103)</sub>

??? example "Details"

    **Signature**

    `capacity() view returns (uint256 _capacity)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getReserves`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getReserves() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L142)</sub>

??? example "Details"

    **Signature**

    `maxTokenAmount() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L146)</sub>

??? example "Details"

    **Signature**

    `mintFeeRate() view returns (int256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L61)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L113)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L248)</sub>

??? example "Details"

    **Signature**

    `_burn(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L230)</sub>

??? example "Details"

    **Signature**

    `_mint(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_safeTransferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L276)</sub>

??? example "Details"

    **Signature**

    `_safeTransferFrom(address _tokenAddress, address _from, address _to, uint256 _value) returns (bool success)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setTargetSynthIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L270)</sub>

??? example "Details"

    **Signature**

    `_setTargetSynthIssued(uint256 _targetSynthIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L87)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L83)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L79)</sub>

??? example "Details"

    **Signature**

    `synth() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L75)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L91)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `wrapperFactory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L95)</sub>

??? example "Details"

    **Signature**

    `wrapperFactory() view returns (contract IWrapperFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L183)</sub>

??? example "Details"

    **Signature**

    `burn(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L184)

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L185)

    * [require(..., "Contract cannot burn for token, token balance is zero")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L186)

    * [require(..., "Transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L211)

    **Modifiers**

    * [notPaused](#notpaused)

    * [issuanceActive](#issuanceactive)

    **Emits**

    * [Burned](#burned)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L158)</sub>

??? example "Details"

    **Signature**

    `mint(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L159)

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L160)

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L161)

    * [require(..., "Contract has no spare capacity to mint")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L164)

    * [require(..., "Transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L173)

    **Modifiers**

    * [notPaused](#notpaused)

    * [issuanceActive](#issuanceactive)

    **Emits**

    * [Minted](#minted)

## Modifiers

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L306)</sub>

## Events

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L313)</sub>

**Signature**: `Burned(address account, uint256 principal, uint256 fee, uint256 amountIn)`

### `Minted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.52.0-alpha/contracts/Wrapper.sol#L312)</sub>

**Signature**: `Minted(address account, uint256 principal, uint256 fee, uint256 amountIn)`
