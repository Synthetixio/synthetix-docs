# IFeePool

## Description

**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol)

## Views

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L9)</sub>

??? example "Details"

    **Signature**

    `FEE_ADDRESS()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L11)</sub>

??? example "Details"

    **Signature**

    `feesAvailable(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getExchangeFeeRateForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L6)</sub>

??? example "Details"

    **Signature**

    `getExchangeFeeRateForSynth(bytes32 synthKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L13)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalFeesAvailable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L17)</sub>

??? example "Details"

    **Signature**

    `totalRewardsAvailable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L27)</sub>

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 lockedAmount, uint256 debtEntryIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L20)</sub>

??? example "Details"

    **Signature**

    `claimFees()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L22)</sub>

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L24)</sub>

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L33)</sub>

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IFeePool.sol#L35)</sub>

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
