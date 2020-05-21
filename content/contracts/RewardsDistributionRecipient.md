# RewardsDistributionRecipient

**Source:** [RewardsDistributionRecipient.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/RewardsDistributionRecipient.sol)


!!! todo "Work in Progress"


    This needs filling in

## Description

... todo.



**Source:** [contracts/RewardsDistributionRecipient.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/RewardsDistributionRecipient.sol)

## Architecture

... todo.


<!--centered-image>
    ![Architecture Graph](../img/graphs/todo-architecture.svg)
</centered-image-->

---
### Inheritance Graph

```mermaid
graph TD
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]
```

---
### Related Contracts

- ?

## Views

## Variables

---
### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/RewardsDistributionRecipient.sol#L9)</sub>





**Type:** `address`

## Modifiers

---
### `onlyRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/RewardsDistributionRecipient.sol#L13)</sub>



## Functions

---
### `notifyRewardAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/RewardsDistributionRecipient.sol#L11)</sub>



??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward)`

    **State Mutability**

    `nonpayable`

## Functions (onlyOwner)

---
### `setRewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/RewardsDistributionRecipient.sol#L18)</sub>



??? example "Details"

    **Signature**

    `setRewardsDistribution(address _rewardsDistribution)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal & Restricted Mutative Functions

## Owner Mutative Functions

## Public Mutative Functions

