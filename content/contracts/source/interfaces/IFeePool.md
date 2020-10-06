# IFeePool

## Description

**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol)

## Views

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L8)</sub>

??? example "Details"

    **Signature**

    `FEE_ADDRESS() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L12)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L10)</sub>

??? example "Details"

    **Signature**

    `feesAvailable(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L14)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L16)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L18)</sub>

??? example "Details"

    **Signature**

    `totalFeesAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L20)</sub>

??? example "Details"

    **Signature**

    `totalRewardsAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L30)</sub>

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 lockedAmount, uint256 debtEntryIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L23)</sub>

??? example "Details"

    **Signature**

    `claimFees() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L25)</sub>

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L27)</sub>

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L36)</sub>

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.29.2/contracts/interfaces/IFeePool.sol#L38)</sub>

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
