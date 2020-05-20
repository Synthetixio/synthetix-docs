# MockExchanger

## Description


**Source:** [contracts/test-helpers/MockExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol)

## Variables


---
### `_mockMaxSecsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L10)</sub>





**Type:** `uint256`


---
### `_mockNumEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L9)</sub>





**Type:** `uint256`


---
### `_mockReclaimAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L7)</sub>





**Type:** `uint256`


---
### `_mockRefundAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L8)</sub>





**Type:** `uint256`


---
### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L12)</sub>





**Type:** `contract ISynthetix`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L14)</sub>



??? example "Details"

    **Signature**

    `(contract ISynthetix _synthetix)`

    **State Mutability**

    `nonpayable`

## Functions


---
### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L41)</sub>



??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address , bytes32 )`

    **State Mutability**

    `view`


---
### `setMaxSecsLeft`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L76)</sub>



??? example "Details"

    **Signature**

    `setMaxSecsLeft(uint256 _maxSecsLeft)`

    **State Mutability**

    `nonpayable`


---
### `setNumEntries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L72)</sub>



??? example "Details"

    **Signature**

    `setNumEntries(uint256 _numEntries)`

    **State Mutability**

    `nonpayable`


---
### `setReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L64)</sub>



??? example "Details"

    **Signature**

    `setReclaim(uint256 _reclaimAmount)`

    **State Mutability**

    `nonpayable`


---
### `setRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L68)</sub>



??? example "Details"

    **Signature**

    `setRefund(uint256 _refundAmount)`

    **State Mutability**

    `nonpayable`


---
### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L19)</sub>



??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey)`

    **State Mutability**

    `nonpayable`


---
### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L49)</sub>



??? example "Details"

    **Signature**

    `settlementOwing(address , bytes32 )`

    **State Mutability**

    `view`

