# IDynamicSynthRedeemer

## Description

**Source:** [contracts/interfaces/IDynamicSynthRedeemer.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol)

## Views

### `getDiscountRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L11)</sub>

??? example "Details"

    **Signature**

    `getDiscountRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `redeem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L13)</sub>

??? example "Details"

    **Signature**

    `redeem(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L15)</sub>

??? example "Details"

    **Signature**

    `redeemAll(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `redeemPartial`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L17)</sub>

??? example "Details"

    **Signature**

    `redeemPartial(bytes32 currencyKey, uint256 amountOfSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `resumeRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L8)</sub>

??? example "Details"

    **Signature**

    `resumeRedemption()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDynamicSynthRedeemer.sol#L6)</sub>

??? example "Details"

    **Signature**

    `suspendRedemption()`

    **Visibility**

    `external`

    **State Mutability**

    ``
