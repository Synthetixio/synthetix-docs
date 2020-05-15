# SupplySchedule

**Source:** [contracts/SupplySchedule.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    SupplySchedule[SupplySchedule] --> Owned[Owned]
```

---

## Variables

---

### `lastMintEvent`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L23)</sub>

**Type:** `uint256`

---

### `weekCounter`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L26)</sub>

**Type:** `uint256`

---

### `minterReward`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L29)</sub>

**Type:** `uint256`

---

### `INITIAL_WEEKLY_SUPPLY`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L33)</sub>

**Type:** `uint256`

---

### `synthetixProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L36)</sub>

**Type:** `address payable`

---

### `MAX_MINTER_REWARD`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L39)</sub>

**Type:** `uint256`

---

### `MINT_PERIOD_DURATION`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L42)</sub>

**Type:** `uint256`

---

### `INFLATION_START_DATE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L44)</sub>

**Type:** `uint256`

---

### `MINT_BUFFER`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L45)</sub>

**Type:** `uint256`

---

### `SUPPLY_DECAY_START`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L46)</sub>

**Type:** `uint8`

---

### `SUPPLY_DECAY_END`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L47)</sub>

**Type:** `uint8`

---

### `DECAY_RATE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L50)</sub>

**Type:** `uint256`

---

### `TERMINAL_SUPPLY_RATE_ANNUAL`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L53)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L55)</sub>

??? example "Details"

    **Signature**

    `(address _owner, uint256 _lastMintEvent, uint256 _currentWeek) public`

    **Modifiers**

    * [Owned](#owned)

---

### `mintableSupply`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L69)</sub>

??? example "Details"

    **Signature**

    `mintableSupply() external`

---

### `tokenDecaySupplyForWeek`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L114)</sub>

??? example "Details"

    **Signature**

    `tokenDecaySupplyForWeek(uint256 counter) public`

---

### `terminalInflationSupply`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L127)</sub>

??? example "Details"

    **Signature**

    `terminalInflationSupply(uint256 totalSupply, uint256 numOfWeeks) public`

---

### `weeksSinceLastIssuance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L139)</sub>

??? example "Details"

    **Signature**

    `weeksSinceLastIssuance() public`

---

### `isMintable`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L150)</sub>

??? example "Details"

    **Signature**

    `isMintable() public`

---

### `recordMintEvent`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L165)</sub>

??? example "Details"

    **Signature**

    `recordMintEvent(uint256 supplyMinted) external`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

    **Emits**

    * [SupplyMinted](#supplyminted)

---

### `setMinterReward`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L186)</sub>

??? example "Details"

    **Signature**

    `setMinterReward(uint256 amount) external`

    **Requires**

    * [require(..., Reward cannot exceed max minter reward)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L187)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinterRewardUpdated](#minterrewardupdated)

---

### `setSynthetixProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L199)</sub>

??? example "Details"

    **Signature**

    `setSynthetixProxy(contract ISynthetix _synthetixProxy) external`

    **Requires**

    * [require(..., Address cannot be 0)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L200)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthetixProxyUpdated](#synthetixproxyupdated)

---

## Modifiers

---

### `onlySynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L210)</sub>

---

## Events

---

### `SupplyMinted`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L222)</sub>

- `(uint256 supplyMinted, uint256 numberOfWeeksIssued, uint256 lastMintEvent, uint256 timestamp)`

---

### `MinterRewardUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L227)</sub>

- `(uint256 newRewardAmount)`

---

### `SynthetixProxyUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SupplySchedule.sol#L232)</sub>

- `(address newAddress)`

---

