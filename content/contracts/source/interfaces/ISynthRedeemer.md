# ISynthRedeemer

## Description

**Source:** [contracts/interfaces/ISynthRedeemer.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol)

## Views

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L10)</sub>

??? example "Details"

    **Signature**

    `balanceOf(contract IERC20 synthProxy, address account) view returns (uint256 balanceOfInsUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `redemptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L7)</sub>

??? example "Details"

    **Signature**

    `redemptions(address synthProxy) view returns (uint256 redeemRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L13)</sub>

??? example "Details"

    **Signature**

    `totalSupply(contract IERC20 synthProxy) view returns (uint256 totalSupplyInsUSD)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `deprecate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L22)</sub>

??? example "Details"

    **Signature**

    `deprecate(contract IERC20 synthProxy, uint256 rateToRedeem)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L15)</sub>

??? example "Details"

    **Signature**

    `redeem(contract IERC20 synthProxy)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L17)</sub>

??? example "Details"

    **Signature**

    `redeemAll(contract IERC20[] synthProxies)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemPartial`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthRedeemer.sol#L19)</sub>

??? example "Details"

    **Signature**

    `redeemPartial(contract IERC20 synthProxy, uint256 amountOfSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``
