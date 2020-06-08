# ILiquidations

## Description

**Source:** [contracts/interfaces/ILiquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol)

## Views

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L18)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L10)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L6)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L12)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L16)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L14)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L29)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L24)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/ILiquidations.sol#L27)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
