# IFeePool

## Description


**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol)

## Functions


---
### `amountReceivedFromExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L6)</sub>



??? example "Details"

    **Signature**

    `amountReceivedFromExchange(uint256 value) external`


---
### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L8)</sub>



??? example "Details"

    **Signature**

    `exchangeFeeRate() external`


---
### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L11)</sub>



??? example "Details"

    **Signature**

    `FEE_ADDRESS() external`


---
### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L13)</sub>



??? example "Details"

    **Signature**

    `feesAvailable(address account) external`


---
### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L15)</sub>



??? example "Details"

    **Signature**

    `isFeesClaimable(address account) external`


---
### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L17)</sub>



??? example "Details"

    **Signature**

    `totalFeesAvailable() external`


---
### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L19)</sub>



??? example "Details"

    **Signature**

    `totalRewardsAvailable() external`


---
### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L22)</sub>



??? example "Details"

    **Signature**

    `claimFees() external`


---
### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L24)</sub>



??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) external`


---
### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L26)</sub>



??? example "Details"

    **Signature**

    `closeCurrentFeePeriod() external`


---
### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L29)</sub>



??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 lockedAmount, uint256 debtEntryIndex) external`


---
### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L35)</sub>



??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount) external`


---
### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IFeePool.sol#L37)</sub>



??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount) external`

