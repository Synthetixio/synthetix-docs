# ISystemSettings

## Description

**Source:** [contracts/interfaces/ISystemSettings.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol)

## Views

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L40)</sub>

??? example "Details"

    **Signature**

    `canOpenLoans(address collateral) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L38)</sub>

??? example "Details"

    **Signature**

    `collateralManager(address collateral) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperBurnFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L30)</sub>

??? example "Details"

    **Signature**

    `etherWrapperBurnFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMaxETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L28)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMaxETH() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `etherWrapperMintFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L32)</sub>

??? example "Details"

    **Signature**

    `etherWrapperMintFeeRate() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L24)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L12)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L42)</sub>

??? example "Details"

    **Signature**

    `interactionDelay(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L10)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L36)</sub>

??? example "Details"

    **Signature**

    `issueFeeRate(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L16)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L20)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L18)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L34)</sub>

??? example "Details"

    **Signature**

    `minCratio(address collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L26)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L6)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `rateStalePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L22)</sub>

??? example "Details"

    **Signature**

    `rateStalePeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L14)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/interfaces/ISystemSettings.sol#L8)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
