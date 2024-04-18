# CollateralUtil

## Description

**Source:** [contracts/CollateralUtil.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L40)</sub>

??? example "Details"

    **Signature**

    `constructor(address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `collateralRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L87)</sub>

??? example "Details"

    **Signature**

    `collateralRedeemed(bytes32 currency, uint256 amount, bytes32 collateralKey) view returns (uint256 collateral)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L44)</sub>

??? example "Details"

    **Signature**

    `getCollateralRatio(struct ICollateralLoan.Loan loan, bytes32 collateralKey) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L69)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(struct ICollateralLoan.Loan loan, uint256 minCratio, bytes32 collateralKey) view returns (uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L50)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency, uint256 minCratio, bytes32 collateralKey) view returns (uint256 max)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L27)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/CollateralUtil.sol#L36)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
