# IRewardsDistribution

## Description

**Source:** [contracts/interfaces/IRewardsDistribution.sol](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol)

## Structs

### `DistributionData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol#L7)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `destination` | `address` | TBA         |
| `amount`      | `uint256` | TBA         |

## Views

### `authority`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol#L13)</sub>

??? example "Details"

    **Signature**

    `authority() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `distributions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol#L15)</sub>

??? example "Details"

    **Signature**

    `distributions(uint256 index) returns (address, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `distributionsLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol#L17)</sub>

??? example "Details"

    **Signature**

    `distributionsLength() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `distributeRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.0/contracts/interfaces/IRewardsDistribution.sol#L20)</sub>

??? example "Details"

    **Signature**

    `distributeRewards(uint256 amount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
