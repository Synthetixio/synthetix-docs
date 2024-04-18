# AggregatorV2V3Interface

## Description

**Source:** [contracts/interfaces/AggregatorV2V3Interface.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol)

## Views

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L8)</sub>

??? example "Details"

    **Signature**

    `decimals() view returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L10)</sub>

??? example "Details"

    **Signature**

    `getAnswer(uint256 roundId) view returns (int256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRoundData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L14)</sub>

??? example "Details"

    **Signature**

    `getRoundData(uint80 _roundId) view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L12)</sub>

??? example "Details"

    **Signature**

    `getTimestamp(uint256 roundId) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `latestRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L6)</sub>

??? example "Details"

    **Signature**

    `latestRound() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `latestRoundData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/AggregatorV2V3Interface.sol#L25)</sub>

??? example "Details"

    **Signature**

    `latestRoundData() view returns (uint80 roundId, int256 answer, uint256 startedAt, uint256 updatedAt, uint80 answeredInRound)`

    **Visibility**

    `external`

    **State Mutability**

    `view`
