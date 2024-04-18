# RewardsDistributionRecipient

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/RewardsDistributionRecipient.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardsDistributionRecipient.sol)

## Variables

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardsDistributionRecipient.sol#L8)</sub>

**Type:** `address`

## Restricted Functions

### `setRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardsDistributionRecipient.sol#L17)</sub>

??? example "Details"

    **Signature**

    `setRewardsDistribution(address _rewardsDistribution)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## External Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardsDistributionRecipient.sol#L10)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    ``

## Modifiers

### `onlyRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/RewardsDistributionRecipient.sol#L12)</sub>
