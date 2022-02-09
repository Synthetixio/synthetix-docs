# IFeePool

## Description

**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol)

## Views

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L8)</sub>

??? example "Details"

    **Signature**

    `FEE_ADDRESS() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L12)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L10)</sub>

??? example "Details"

    **Signature**

    `feesAvailable(address account) view returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L14)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L16)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L18)</sub>

??? example "Details"

    **Signature**

    `totalFeesAvailable() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L20)</sub>

??? example "Details"

    **Signature**

    `totalRewardsAvailable() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L23)</sub>

??? example "Details"

    **Signature**

    `claimFees() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L25)</sub>

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L27)</sub>

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L29)</sub>

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/interfaces/IFeePool.sol#L31)</sub>

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``
