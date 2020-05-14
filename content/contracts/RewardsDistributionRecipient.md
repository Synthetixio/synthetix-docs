# RewardsDistributionRecipient

**Source:** [contracts/RewardsDistributionRecipient.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistributionRecipient.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    RewardsDistributionRecipient[RewardsDistributionRecipient] --> Owned[Owned]
```

---

## Variables

---

### `rewardsDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistributionRecipient.sol#L9)</sub>

**Type:** `address`

## Functions

---

### `notifyRewardAmount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistributionRecipient.sol#L11)</sub>

??? example "Details"

    **Signature**

    `notifyRewardAmount(uint256 reward) external`

---

### `setRewardsDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistributionRecipient.sol#L18)</sub>

??? example "Details"

    **Signature**

    `setRewardsDistribution(address _rewardsDistribution) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

## Modifiers

---

### `onlyRewardsDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistributionRecipient.sol#L13)</sub>

---

