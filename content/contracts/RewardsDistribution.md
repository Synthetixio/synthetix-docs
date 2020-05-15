# RewardsDistribution

**Source:** [contracts/RewardsDistribution.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    RewardsDistribution[RewardsDistribution] --> Owned[Owned]
```

---

## Structs

---

### DistributionData
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L44)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| destination | address | TBA |
| amount | uint256 | TBA |

---

## Variables

---

### `authority`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L23)</sub>

**Type:** `address`

---

### `synthetixProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L28)</sub>

**Type:** `address`

---

### `rewardEscrow`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L33)</sub>

**Type:** `address`

---

### `feePoolProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L38)</sub>

**Type:** `address`

---

### `distributions`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L52)</sub>

**Type:** `struct RewardsDistribution.DistributionData[]`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L58)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _authority, address _synthetixProxy, address _rewardEscrow, address _feePoolProxy) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setSynthetixProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L73)</sub>

??? example "Details"

    **Signature**

    `setSynthetixProxy(address _synthetixProxy) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `setRewardEscrow`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L77)</sub>

??? example "Details"

    **Signature**

    `setRewardEscrow(address _rewardEscrow) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `setFeePoolProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L81)</sub>

??? example "Details"

    **Signature**

    `setFeePoolProxy(address _feePoolProxy) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `setAuthority`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L89)</sub>

??? example "Details"

    **Signature**

    `setAuthority(address _authority) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `addRewardDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L103)</sub>

??? example "Details"

    **Signature**

    `addRewardDistribution(address destination, uint256 amount) external`

    **Requires**

    * [require(..., Cant add a zero address)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L104)

    * [require(..., Cant add a zero amount)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L105)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RewardDistributionAdded](#rewarddistributionadded)

---

### `removeRewardDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L119)</sub>

??? example "Details"

    **Signature**

    `removeRewardDistribution(uint256 index) external`

    **Requires**

    * [require(..., index out of bounds)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L120)

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `editRewardDistribution`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L140)</sub>

??? example "Details"

    **Signature**

    `editRewardDistribution(uint256 index, address destination, uint256 amount) external`

    **Requires**

    * [require(..., index out of bounds)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L145)

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `distributeRewards`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L153)</sub>

??? example "Details"

    **Signature**

    `distributeRewards(uint256 amount) external`

    **Requires**

    * [require(..., Caller is not authorised)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L154)

    * [require(..., RewardEscrow is not set)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L155)

    * [require(..., SynthetixProxy is not set)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L156)

    * [require(..., FeePoolProxy is not set)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L157)

    * [require(..., Nothing to distribute)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L158)

    * [require(..., RewardsDistribution contract does not have enough tokens to distribute)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L159)

    **Emits**

    * [RewardsDistributed](#rewardsdistributed)

---

### `distributionsLength`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L201)</sub>

??? example "Details"

    **Signature**

    `distributionsLength() external`

---

## Events

---

### `RewardDistributionAdded`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L207)</sub>

- `(uint256 index, address destination, uint256 amount)`

---

### `RewardsDistributed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardsDistribution.sol#L208)</sub>

- `(uint256 amount)`

---

