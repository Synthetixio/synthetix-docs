# AggregatorInterface

## Description


**Source:** [@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol)

## Constants

## Variables

## Functions


---
### `getAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L7)</sub>

??? example "Details"

    **Signature**

    `getAnswer(uint256 roundId)`

    **State Mutability**

    `view`


---
### `getTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L8)</sub>

??? example "Details"

    **Signature**

    `getTimestamp(uint256 roundId)`

    **State Mutability**

    `view`


---
### `latestAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L4)</sub>

??? example "Details"

    **Signature**

    `latestAnswer()`

    **State Mutability**

    `view`


---
### `latestRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L6)</sub>

??? example "Details"

    **Signature**

    `latestRound()`

    **State Mutability**

    `view`


---
### `latestTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L5)</sub>

??? example "Details"

    **Signature**

    `latestTimestamp()`

    **State Mutability**

    `view`

## Events


---
### `AnswerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L10)</sub>

- `(int256 current, uint256 roundId, uint256 timestamp)`


---
### `NewRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/@chainlink/contracts-0.0.3/src/v0.5/dev/AggregatorInterface.sol#L11)</sub>

- `(uint256 roundId, address startedBy)`

