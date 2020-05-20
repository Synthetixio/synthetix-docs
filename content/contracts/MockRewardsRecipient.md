# MockRewardsRecipient

## Description


**Source:** [contracts/test-helpers/MockRewardsRecipient.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockRewardsRecipient.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    MockRewardsRecipient[MockRewardsRecipient] --> RewardsDistributionRecipient[RewardsDistributionRecipient]
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]
```

## Variables


---
### `rewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockRewardsRecipient.sol#L8)</sub>





**Type:** `uint256`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockRewardsRecipient.sol#L10)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions


---
### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockRewardsRecipient.sol#L12)</sub>



??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyRewardsDistribution](#onlyrewardsdistribution)

    **Emits**

    * [RewardAdded](#rewardadded)

## Events


---
### `RewardAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockRewardsRecipient.sol#L17)</sub>



- `(uint256 amount)`

