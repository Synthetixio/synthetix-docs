# RewardsDistributionRecipient

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/RewardsDistributionRecipient.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.0/contracts/RewardsDistributionRecipient.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]

```

## Variables

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0/contracts/RewardsDistributionRecipient.sol#L9)</sub>

**Type:** `address`

## Restricted Functions

### `setRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0/contracts/RewardsDistributionRecipient.sol#L18)</sub>

??? example "Details"

    **Signature**

    `setRewardsDistribution(address _rewardsDistribution)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## External Functions

### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0/contracts/RewardsDistributionRecipient.sol#L11)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Modifiers

### `onlyRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.0/contracts/RewardsDistributionRecipient.sol#L13)</sub>
