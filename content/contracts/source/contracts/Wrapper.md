# Wrapper

## Description

**Source:** [contracts/Wrapper.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol)

## Variables

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L42)</sub>

**Type:** `bytes32`

### `synthContractName`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L43)</sub>

**Type:** `bytes32`

### `targetSynthIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L45)</sub>

**Type:** `uint256`

### `token`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L41)</sub>

**Type:** `contract IERC20`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L47)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, contract IERC20 _token, bytes32 _currencyKey, bytes32 _synthContractName)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `burnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L151)</sub>

??? example "Details"

    **Signature**

    `burnFeeRate() view returns (int256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateBurnFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L133)</sub>

??? example "Details"

    **Signature**

    `calculateBurnFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateMintFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L123)</sub>

??? example "Details"

    **Signature**

    `calculateMintFee(uint256 amount) view returns (uint256, bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `capacity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L104)</sub>

??? example "Details"

    **Signature**

    `capacity() view returns (uint256 _capacity)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getReserves`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getReserves() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxTokenAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L143)</sub>

??? example "Details"

    **Signature**

    `maxTokenAmount() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L147)</sub>

??? example "Details"

    **Signature**

    `mintFeeRate() view returns (int256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L62)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L114)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L249)</sub>

??? example "Details"

    **Signature**

    `_burn(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L231)</sub>

??? example "Details"

    **Signature**

    `_mint(uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_safeTransferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L277)</sub>

??? example "Details"

    **Signature**

    `_safeTransferFrom(address _tokenAddress, address _from, address _to, uint256 _value) returns (bool success)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_setTargetSynthIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L271)</sub>

??? example "Details"

    **Signature**

    `_setTargetSynthIssued(uint256 _targetSynthIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L88)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L84)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L80)</sub>

??? example "Details"

    **Signature**

    `synth() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L76)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L92)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `wrapperFactory`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L96)</sub>

??? example "Details"

    **Signature**

    `wrapperFactory() view returns (contract IWrapperFactory)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L184)</sub>

??? example "Details"

    **Signature**

    `burn(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L185)

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L186)

    * [require(..., "Contract cannot burn for token, token balance is zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L187)

    * [require(..., "Transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L212)

    **Modifiers**

    * [notPaused](#notpaused)

    * [issuanceActive](#issuanceactive)

    **Emits**

    * [Burned](#burned)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L159)</sub>

??? example "Details"

    **Signature**

    `mint(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L160)

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L161)

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L162)

    * [require(..., "Contract has no spare capacity to mint")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L165)

    * [require(..., "Transfer did not succeed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L174)

    **Modifiers**

    * [notPaused](#notpaused)

    * [issuanceActive](#issuanceactive)

    **Emits**

    * [Minted](#minted)

## Modifiers

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L314)</sub>

## Events

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L321)</sub>

**Signature**: `Burned(address account, uint256 principal, uint256 fee, uint256 amountIn)`

### `Minted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Wrapper.sol#L320)</sub>

**Signature**: `Minted(address account, uint256 principal, uint256 fee, uint256 amountIn)`
