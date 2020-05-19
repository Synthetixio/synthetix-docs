# MockAggregator

## Description


**Source:** [contracts/test-helpers/MockAggregator.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol)

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L30)</sub>



??? example "Details"

    **Signature**

    `()`

    **State Mutability**

    `nonpayable`

## Functions


---
### `getAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L50)</sub>



??? example "Details"

    **Signature**

    `getAnswer(uint256 _roundId)`

    **State Mutability**

    `view`


---
### `getTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L54)</sub>



??? example "Details"

    **Signature**

    `getTimestamp(uint256 _roundId)`

    **State Mutability**

    `view`


---
### `latestAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L38)</sub>



??? example "Details"

    **Signature**

    `latestAnswer()`

    **State Mutability**

    `view`


---
### `latestRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L46)</sub>



??? example "Details"

    **Signature**

    `latestRound()`

    **State Mutability**

    `view`


---
### `latestTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L42)</sub>



??? example "Details"

    **Signature**

    `latestTimestamp()`

    **State Mutability**

    `view`


---
### `setLatestAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L33)</sub>



??? example "Details"

    **Signature**

    `setLatestAnswer(int256 answer, uint256 timestamp)`

    **State Mutability**

    `nonpayable`

## Structs


---
### `Entry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L23)</sub>



| Field | Type | Description |
| ------ | ------ | ------ |
| answer | int256 | TBA |
| timestamp | uint256 | TBA |


## Variables


---
### `entries`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L28)</sub>





**Type:** `mapping(uint256 => struct MockAggregator.Entry)`


---
### `roundId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L21)</sub>





**Type:** `uint256`

