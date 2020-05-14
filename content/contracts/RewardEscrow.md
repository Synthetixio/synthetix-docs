# RewardEscrow

**Source:** [contracts/RewardEscrow.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    RewardEscrow[RewardEscrow] --> Owned[Owned]
    RewardEscrow[RewardEscrow] --> IRewardEscrow[IRewardEscrow]
```

---

## Variables

---

### `synthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L21)</sub>

**Type:** `contract ISynthetix`

---

### `feePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L23)</sub>

**Type:** `contract IFeePool`

---

### `vestingSchedules`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L27)</sub>

**Type:** `mapping(address => uint256[2][])`

---

### `totalEscrowedAccountBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L30)</sub>

**Type:** `mapping(address => uint256)`

---

### `totalVestedAccountBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L33)</sub>

**Type:** `mapping(address => uint256)`

---

### `totalEscrowedBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L36)</sub>

**Type:** `uint256`

---

### `TIME_INDEX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L38)</sub>

**Type:** `uint256`

---

### `QUANTITY_INDEX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L39)</sub>

**Type:** `uint256`

---

### `MAX_VESTING_ENTRIES`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L43)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L47)</sub>

??? example "Details"

    **Signature**

    `(address _owner, contract ISynthetix _synthetix, contract IFeePool _feePool) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L61)</sub>

??? example "Details"

    **Signature**

    `setSynthetix(contract ISynthetix _synthetix) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixUpdated](#synthetixupdated)

---

### `setFeePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L70)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePoolUpdated](#feepoolupdated)

---

### `balanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L80)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) public`

---

### `numVestingEntries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L91)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) external`

---

### `getVestingScheduleEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) public`

---

### `getVestingTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getVestingTime(address account, uint256 index) public`

---

### `getVestingQuantity`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L113)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256 index) public`

---

### `getNextVestingIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) public`

---

### `getNextVestingEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L133)</sub>

??? example "Details"

    **Signature**

    `getNextVestingEntry(address account) public`

---

### `getNextVestingTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L144)</sub>

??? example "Details"

    **Signature**

    `getNextVestingTime(address account) external`

---

### `getNextVestingQuantity`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L151)</sub>

??? example "Details"

    **Signature**

    `getNextVestingQuantity(address account) external`

---

### `checkAccountSchedule`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L161)</sub>

??? example "Details"

    **Signature**

    `checkAccountSchedule(address account) public`

---

### `appendVestingEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L218)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity) external`

    **Modifiers**

    * [onlyFeePool](#onlyfeepool)

---

### `vest`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L225)</sub>

??? example "Details"

    **Signature**

    `vest() external`

---

## Modifiers

---

### `onlyFeePool`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L254)</sub>

---

## Events

---

### `SynthetixUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L263)</sub>

- `(address newSynthetix)`

---

### `FeePoolUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L265)</sub>

- `(address newFeePool)`

---

### `Vested`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L267)</sub>

- `(address beneficiary, uint256 time, uint256 value)`

---

### `VestingEntryCreated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/RewardEscrow.sol#L269)</sub>

- `(address beneficiary, uint256 time, uint256 value)`

---

