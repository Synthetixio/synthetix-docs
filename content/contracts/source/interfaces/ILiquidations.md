# ILiquidations

## Description

**Source:** [contracts/interfaces/ILiquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol)

## External Functions

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L19)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L27)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L22)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L9)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L11)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L7)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L13)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L17)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L15)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-alpha/contracts/interfaces/ILiquidations.sol#L25)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
