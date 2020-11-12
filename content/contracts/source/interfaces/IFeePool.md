# IFeePool

## Description

**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol)

## Views

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L9)</sub>

??? example "Details"

    **Signature**

    `FEE_ADDRESS() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L13)</sub>

??? example "Details"

    **Signature**

    `feePeriodDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L11)</sub>

??? example "Details"

    **Signature**

    `feesAvailable(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L15)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L17)</sub>

??? example "Details"

    **Signature**

    `targetThreshold() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L19)</sub>

??? example "Details"

    **Signature**

    `totalFeesAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L21)</sub>

??? example "Details"

    **Signature**

    `totalRewardsAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L31)</sub>

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 lockedAmount, uint256 debtEntryIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L24)</sub>

??? example "Details"

    **Signature**

    `claimFees() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L26)</sub>

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L28)</sub>

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L37)</sub>

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.31.1/contracts/interfaces/IFeePool.sol#L39)</sub>

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
