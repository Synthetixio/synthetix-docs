# IRewardsDistribution

## Description

**Source:** [contracts/interfaces/IRewardsDistribution.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol)

## Structs

### `DistributionData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol#L6)</sub>

| Field         | Type      | Description |
| ------------- | --------- | ----------- |
| `destination` | `address` | TBA         |
| `amount`      | `uint256` | TBA         |

## Views

### `authority`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol#L12)</sub>

??? example "Details"

    **Signature**

    `authority() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `distributions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol#L14)</sub>

??? example "Details"

    **Signature**

    `distributions(uint256 index) view returns (address destination, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `distributionsLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol#L16)</sub>

??? example "Details"

    **Signature**

    `distributionsLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `distributeRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IRewardsDistribution.sol#L19)</sub>

??? example "Details"

    **Signature**

    `distributeRewards(uint256 amount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``
