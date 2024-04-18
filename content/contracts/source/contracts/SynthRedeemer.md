# SynthRedeemer

## Description

**Source:** [contracts/SynthRedeemer.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L17)</sub>

**Type:** `bytes32`

### `redemptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L19)</sub>

**Type:** `mapping(address => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L24)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L44)</sub>

??? example "Details"

    **Signature**

    `balanceOf(contract IERC20 synthProxy, address account) view returns (uint256 balanceInsUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L26)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalSupply(contract IERC20 synthProxy) view returns (uint256 supplyInsUSD)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `deprecate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L75)</sub>

??? example "Details"

    **Signature**

    `deprecate(contract IERC20 synthProxy, uint256 rateToRedeem)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth is already deprecated")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L77)

    * [require(..., "No rate for synth to redeem")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L78)

    * [require(..., "sUSD must first be supplied")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L81)

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

    **Emits**

    * [SynthDeprecated](#synthdeprecated)

## Internal Functions

### `_redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L65)</sub>

??? example "Details"

    **Signature**

    `_redeem(contract IERC20 synthProxy, uint256 amountOfSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth not redeemable")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L67)

    * [require(..., "No balance of synth to redeem")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L68)

    **Emits**

    * [SynthRedeemed](#synthredeemed)

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L32)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `requireOnlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L86)</sub>

??? example "Details"

    **Signature**

    `requireOnlyIssuer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Restricted to Issuer contract")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L87)

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L36)</sub>

??? example "Details"

    **Signature**

    `sUSD() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L54)</sub>

??? example "Details"

    **Signature**

    `redeem(contract IERC20 synthProxy)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L48)</sub>

??? example "Details"

    **Signature**

    `redeemAll(contract IERC20[] synthProxies)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemPartial`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L58)</sub>

??? example "Details"

    **Signature**

    `redeemPartial(contract IERC20 synthProxy, uint256 amountOfSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Insufficient balance")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L61)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L90)</sub>

## Events

### `SynthDeprecated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L96)</sub>

**Signature**: `SynthDeprecated(address synth, uint256 rateToRedeem, uint256 totalSynthSupply, uint256 supplyInsUSD)`

### `SynthRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthRedeemer.sol#L95)</sub>

**Signature**: `SynthRedeemed(address synth, address account, uint256 amountOfSynth, uint256 amountInsUSD)`
