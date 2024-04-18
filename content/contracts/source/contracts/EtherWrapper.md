# EtherWrapper

## Description

**Source:** [contracts/EtherWrapper.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol)

## Variables

### `feesEscrowed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L49)</sub>

**Type:** `uint256`

### `sETHIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L47)</sub>

**Type:** `uint256`

### `sUSDIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L48)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L51)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver, address payable _WETH)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `burnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L136)</sub>

??? example "Details"

    **Signature**

    `burnFeeRate() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateBurnFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L124)</sub>

??? example "Details"

    **Signature**

    `calculateBurnFee(uint256 amount) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateMintFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L120)</sub>

??? example "Details"

    **Signature**

    `calculateMintFee(uint256 amount) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `capacity`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L97)</sub>

??? example "Details"

    **Signature**

    `capacity() view returns (uint256 _capacity)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getReserves`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getReserves() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L128)</sub>

??? example "Details"

    **Signature**

    `maxETH() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `mintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L132)</sub>

??? example "Details"

    **Signature**

    `mintFeeRate() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L60)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L110)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `weth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L140)</sub>

??? example "Details"

    **Signature**

    `weth() view returns (contract IWETH)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L230)</sub>

??? example "Details"

    **Signature**

    `_burn(uint256 principal, uint256 amountIn)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L234)

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L235)

    **Emits**

    * [Burned](#burned)

### `_mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L209)</sub>

??? example "Details"

    **Signature**

    `_mint(uint256 amountIn)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [Minted](#minted)

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L85)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L81)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L89)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L77)</sub>

??? example "Details"

    **Signature**

    `synthsETH() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L73)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L164)</sub>

??? example "Details"

    **Signature**

    `burn(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Contract cannot burn sETH for WETH, WETH balance is zero")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L166)

    **Modifiers**

    * [notPaused](#notpaused)

### `distributeFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L178)</sub>

??? example "Details"

    **Signature**

    `distributeFees()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L180)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L148)</sub>

??? example "Details"

    **Signature**

    `mint(uint256 amountIn)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Allowance not high enough")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L149)

    * [require(..., "Balance is too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L150)

    * [require(..., "Contract has no spare capacity to mint")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L153)

    **Modifiers**

    * [notPaused](#notpaused)

## Events

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L257)</sub>

**Signature**: `Burned(address account, uint256 principal, uint256 fee, uint256 amountIn)`

### `Minted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/EtherWrapper.sol#L256)</sub>

**Signature**: `Minted(address account, uint256 principal, uint256 fee, uint256 amountIn)`
