# ILiquidations

## Description

**Source:** [contracts/interfaces/ILiquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol)

## Views

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L18)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L10)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L6)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L12)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L16)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L14)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L26)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L21)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.66.1/contracts/interfaces/ILiquidations.sol#L24)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``
