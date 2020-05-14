# MockAggregator

**Source:** [contracts/test-helpers/MockAggregator.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol)

## Structs

---

### Entry
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L23)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| answer | int256 | TBA |
| timestamp | uint256 | TBA |

---

## Variables

---

### `roundId`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L21)</sub>

**Type:** `uint256`

---

### `entries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L28)</sub>

**Type:** `mapping(uint256 => struct MockAggregator.Entry)`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L30)</sub>

??? example "Details"

    **Signature**

    `() public`

---

### `setLatestAnswer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L33)</sub>

??? example "Details"

    **Signature**

    `setLatestAnswer(int256 answer, uint256 timestamp) external`

---

### `latestAnswer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L38)</sub>

??? example "Details"

    **Signature**

    `latestAnswer() external`

---

### `latestTimestamp`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L42)</sub>

??? example "Details"

    **Signature**

    `latestTimestamp() external`

---

### `latestRound`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L46)</sub>

??? example "Details"

    **Signature**

    `latestRound() public`

---

### `getAnswer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L50)</sub>

??? example "Details"

    **Signature**

    `getAnswer(uint256 _roundId) public`

---

### `getTimestamp`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockAggregator.sol#L54)</sub>

??? example "Details"

    **Signature**

    `getTimestamp(uint256 _roundId) public`

---

## Modifiers

## Events

