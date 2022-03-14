# BaseSingleNetworkAggregator

## Description

**Source:** [contracts/BaseSingleNetworkAggregator.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol)

## Variables

### `overrideTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L19)</sub>

**Type:** `uint256`

### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L17)</sub>

**Type:** `contract AddressResolver`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L21)</sub>

??? example "Details"

    **Signature**

    `constructor(contract AddressResolver _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L49)</sub>

??? example "Details"

    **Signature**

    `decimals() view returns (uint8)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAnswer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L53)</sub>

??? example "Details"

    **Signature**

    `getAnswer(uint256 _roundId) view returns (int256 answer)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRoundData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L61)</sub>

??? example "Details"

    **Signature**

    `getRoundData(uint80) view returns (uint80, int256, uint256, uint256, uint80)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L57)</sub>

??? example "Details"

    **Signature**

    `getTimestamp(uint256 _roundId) view returns (uint256 timestamp)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `latestRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L45)</sub>

??? example "Details"

    **Signature**

    `latestRound() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `latestRoundData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L31)</sub>

??? example "Details"

    **Signature**

    `latestRoundData() view returns (uint80, int256, uint256, uint256, uint80)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setOverrideTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L25)</sub>

??? example "Details"

    **Signature**

    `setOverrideTimestamp(uint256 timestamp)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SetOverrideTimestamp](#setoverridetimestamp)

## Events

### `SetOverrideTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/BaseSingleNetworkAggregator.sol#L72)</sub>

**Signature**: `SetOverrideTimestamp(uint256 timestamp)`
