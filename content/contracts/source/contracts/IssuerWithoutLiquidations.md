# IssuerWithoutLiquidations

## Description

**Source:** [contracts/IssuerWithoutLiquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/IssuerWithoutLiquidations.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/IssuerWithoutLiquidations.sol#L8)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/IssuerWithoutLiquidations.sol#L10)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)
