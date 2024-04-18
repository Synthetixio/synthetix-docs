# ICollateralUtil

## Description

**Source:** [contracts/interfaces/ICollateralUtil.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralUtil.sol)

## Views

### `collateralRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralUtil.sol#L26)</sub>

??? example "Details"

    **Signature**

    `collateralRedeemed(bytes32 currency, uint256 amount, bytes32 collateralKey) view returns (uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralUtil.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getCollateralRatio(struct ICollateralLoan.Loan loan, bytes32 collateralKey) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralUtil.sol#L20)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(struct ICollateralLoan.Loan loan, uint256 minCratio, bytes32 collateralKey) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ICollateralUtil.sol#L13)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency, uint256 minCratio, bytes32 collateralKey) view returns (uint256 max)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
