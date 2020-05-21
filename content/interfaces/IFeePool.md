# IFeePool

## Description


**Source:** [contracts/interfaces/IFeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol)

## Constants

## Variables

## Functions


---
### `amountReceivedFromExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L6)</sub>



??? example "Details"

    **Signature**

    `amountReceivedFromExchange(uint256 value)`

    **State Mutability**

    `view`


---
### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L29)</sub>



??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 lockedAmount, uint256 debtEntryIndex)`

    **State Mutability**

    `nonpayable`


---
### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L22)</sub>



??? example "Details"

    **Signature**

    `claimFees()`

    **State Mutability**

    `nonpayable`


---
### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L24)</sub>



??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress)`

    **State Mutability**

    `nonpayable`


---
### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L26)</sub>



??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **State Mutability**

    `nonpayable`


---
### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L8)</sub>



??? example "Details"

    **Signature**

    `exchangeFeeRate()`

    **State Mutability**

    `view`


---
### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L11)</sub>



??? example "Details"

    **Signature**

    `FEE_ADDRESS()`

    **State Mutability**

    `view`


---
### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L13)</sub>



??? example "Details"

    **Signature**

    `feesAvailable(address account)`

    **State Mutability**

    `view`


---
### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L15)</sub>



??? example "Details"

    **Signature**

    `isFeesClaimable(address account)`

    **State Mutability**

    `view`


---
### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L35)</sub>



??? example "Details"

    **Signature**

    `recordFeePaid(uint256 sUSDAmount)`

    **State Mutability**

    `nonpayable`


---
### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L37)</sub>



??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **State Mutability**

    `nonpayable`


---
### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L17)</sub>



??? example "Details"

    **Signature**

    `totalFeesAvailable()`

    **State Mutability**

    `view`


---
### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15contracts/interfaces/IFeePool.sol#L19)</sub>



??? example "Details"

    **Signature**

    `totalRewardsAvailable()`

    **State Mutability**

    `view`

