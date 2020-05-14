# MockExchanger

**Source:** [contracts/test-helpers/MockExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol)

## Variables

---

### `synthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L12)</sub>

**Type:** `contract ISynthetix`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L14)</sub>

??? example "Details"

    **Signature**

    `(contract ISynthetix _synthetix) public`

---

### `settle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L19)</sub>

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) external`

---

### `maxSecsLeftInWaitingPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L41)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address , bytes32 ) public`

---

### `settlementOwing`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L49)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(address , bytes32 ) public`

---

### `setReclaim`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L64)</sub>

??? example "Details"

    **Signature**

    `setReclaim(uint256 _reclaimAmount) external`

---

### `setRefund`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L68)</sub>

??? example "Details"

    **Signature**

    `setRefund(uint256 _refundAmount) external`

---

### `setNumEntries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L72)</sub>

??? example "Details"

    **Signature**

    `setNumEntries(uint256 _numEntries) external`

---

### `setMaxSecsLeft`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockExchanger.sol#L76)</sub>

??? example "Details"

    **Signature**

    `setMaxSecsLeft(uint256 _maxSecsLeft) external`

---

