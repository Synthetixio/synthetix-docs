# SynthetixEscrow

**Source:** [contracts/SynthetixEscrow.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SynthetixEscrow[SynthetixEscrow] --> Owned[Owned]
    SynthetixEscrow[SynthetixEscrow] --> LimitedSetup[LimitedSetup]
```

---

## Variables

---

### `synthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L21)</sub>

**Type:** `contract ISynthetix`

---

### `vestingSchedules`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L25)</sub>

**Type:** `mapping(address => uint256[2][])`

---

### `totalVestedAccountBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L28)</sub>

**Type:** `mapping(address => uint256)`

---

### `totalVestedBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L31)</sub>

**Type:** `uint256`

---

### `TIME_INDEX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L33)</sub>

**Type:** `uint256`

---

### `QUANTITY_INDEX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L34)</sub>

**Type:** `uint256`

---

### `MAX_VESTING_ENTRIES`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L37)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L41)</sub>

??? example "Details"

    **Signature**

    `(address _owner, contract ISynthetix _synthetix) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L47)</sub>

??? example "Details"

    **Signature**

    `setSynthetix(contract ISynthetix _synthetix) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixUpdated](#synthetixupdated)

---

### `balanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L57)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) public`

---

### `numVestingEntries`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L64)</sub>

??? example "Details"

    **Signature**

    `numVestingEntries(address account) public`

---

### `getVestingScheduleEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L72)</sub>

??? example "Details"

    **Signature**

    `getVestingScheduleEntry(address account, uint256 index) public`

---

### `getVestingTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L79)</sub>

??? example "Details"

    **Signature**

    `getVestingTime(address account, uint256 index) public`

---

### `getVestingQuantity`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L86)</sub>

??? example "Details"

    **Signature**

    `getVestingQuantity(address account, uint256 index) public`

---

### `getNextVestingIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L93)</sub>

??? example "Details"

    **Signature**

    `getNextVestingIndex(address account) public`

---

### `getNextVestingEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getNextVestingEntry(address account) public`

---

### `getNextVestingTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L117)</sub>

??? example "Details"

    **Signature**

    `getNextVestingTime(address account) external`

---

### `getNextVestingQuantity`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getNextVestingQuantity(address account) external`

---

### `withdrawSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L134)</sub>

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 quantity) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

### `purgeAccount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L141)</sub>

??? example "Details"

    **Signature**

    `purgeAccount(address account) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

### `appendVestingEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L160)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 time, uint256 quantity) public`

    **Requires**

    * [require(..., Time must be in the future)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L166)

    * [require(..., Quantity cannot be zero)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L167)

    * [require(..., Must be enough balance in the contract to provide for the vesting entry)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L171)

    * [require(..., Vesting schedule is too long)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L178)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

### `addVestingSchedule`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L202)</sub>

??? example "Details"

    **Signature**

    `addVestingSchedule(address account, uint256[] times, uint256[] quantities) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

### `vest`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L215)</sub>

??? example "Details"

    **Signature**

    `vest() external`

---

## Events

---

### `SynthetixUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L243)</sub>

- `(address newSynthetix)`

---

### `Vested`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SynthetixEscrow.sol#L245)</sub>

- `(address beneficiary, uint256 time, uint256 value)`

---

