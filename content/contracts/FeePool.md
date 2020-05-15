# FeePool

**Source:** [contracts/FeePool.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    FeePool[FeePool] --> Proxyable[Proxyable]
    FeePool[FeePool] --> SelfDestructible[SelfDestructible]
    FeePool[FeePool] --> LimitedSetup[LimitedSetup]
    FeePool[FeePool] --> MixinResolver[MixinResolver]
    Proxyable[Proxyable] --> Owned[Owned]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Structs

---

### FeePeriod
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L48)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| feePeriodId | uint64 | TBA |
| startingDebtIndex | uint64 | TBA |
| startTime | uint64 | TBA |
| feesToDistribute | uint256 | TBA |
| feesClaimed | uint256 | TBA |
| rewardsToDistribute | uint256 | TBA |
| rewardsClaimed | uint256 | TBA |

---

## Variables

---

### `exchangeFeeRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L36)</sub>

**Type:** `uint256`

---

### `MAX_EXCHANGE_FEE_RATE`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L39)</sub>

**Type:** `uint256`

---

### `FEE_ADDRESS`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L42)</sub>

**Type:** `address`

---

### `FEE_PERIOD_LENGTH`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L63)</sub>

**Type:** `uint8`

---

### `feePeriodDuration`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L72)</sub>

**Type:** `uint256`

---

### `MIN_FEE_PERIOD_DURATION`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L74)</sub>

**Type:** `uint256`

---

### `MAX_FEE_PERIOD_DURATION`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L75)</sub>

**Type:** `uint256`

---

### `targetThreshold`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L78)</sub>

**Type:** `uint256`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L110)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, address _owner, uint256 _exchangeFeeRate, address _resolver) public`

    **Requires**

    * [require(..., Exchange fee rate max exceeded)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L124)

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [Proxyable](#proxyable)

    * [LimitedSetup](#limitedsetup)

    * [MixinResolver](#mixinresolver)

---

### `recentFeePeriods`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L179)</sub>

??? example "Details"

    **Signature**

    `recentFeePeriods(uint256 index) external`

---

### `appendAccountIssuanceRecord`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L218)</sub>

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 debtRatio, uint256 debtEntryIndex) external`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

---

### `setExchangeFeeRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L237)</sub>

??? example "Details"

    **Signature**

    `setExchangeFeeRate(uint256 _exchangeFeeRate) external`

    **Requires**

    * [require(..., rate < MAX_EXCHANGE_FEE_RATE)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L238)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `setFeePeriodDuration`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L245)</sub>

??? example "Details"

    **Signature**

    `setFeePeriodDuration(uint256 _feePeriodDuration) external`

    **Requires**

    * [require(..., value < MIN_FEE_PERIOD_DURATION)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L246)

    * [require(..., value > MAX_FEE_PERIOD_DURATION)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L247)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `setTargetThreshold`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L254)</sub>

??? example "Details"

    **Signature**

    `setTargetThreshold(uint256 _percent) external`

    **Requires**

    * [require(..., Threshold should be positive)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L255)

    * [require(..., Threshold too high)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L256)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `recordFeePaid`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L264)</sub>

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 amount) external`

    **Modifiers**

    * [onlyExchangerOrSynth](#onlyexchangerorsynth)

---

### `setRewardsToDistribute`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L272)</sub>

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount) external`

    **Requires**

    * [require(..., Caller is not rewardsAuthority)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L274)

---

### `closeCurrentFeePeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L282)</sub>

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod() external`

    **Requires**

    * [require(..., Too early to close fee period)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L283)

---

### `claimFees`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L323)</sub>

??? example "Details"

    **Signature**

    `claimFees() external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `claimOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L333)</sub>

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) external`

    **Requires**

    * [require(..., Not approved to claim on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L334)

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `importFeePeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L386)</sub>

??? example "Details"

    **Signature**

    `importFeePeriod(uint256 feePeriodIndex, uint256 feePeriodId, uint256 startingDebtIndex, uint256 startTime, uint256 feesToDistribute, uint256 feesClaimed, uint256 rewardsToDistribute, uint256 rewardsClaimed) public`

    **Requires**

    * [require(..., Cannot import bad data)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L396)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

---

### `appendVestingEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L414)</sub>

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity) public`

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `exchangeFeeIncurred`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L549)</sub>

??? example "Details"

    **Signature**

    `exchangeFeeIncurred(uint256 value) public`

---

### `amountReceivedFromExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L566)</sub>

??? example "Details"

    **Signature**

    `amountReceivedFromExchange(uint256 value) external`

---

### `totalFeesAvailable`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L573)</sub>

??? example "Details"

    **Signature**

    `totalFeesAvailable() external`

---

### `totalRewardsAvailable`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L588)</sub>

??? example "Details"

    **Signature**

    `totalRewardsAvailable() external`

---

### `feesAvailable`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L604)</sub>

??? example "Details"

    **Signature**

    `feesAvailable(address account) public`

---

### `isFeesClaimable`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L626)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account) public`

---

### `feesByPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L653)</sub>

??? example "Details"

    **Signature**

    `feesByPeriod(address account) public`

---

### `effectiveDebtRatioForPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L758)</sub>

??? example "Details"

    **Signature**

    `effectiveDebtRatioForPeriod(address account, uint256 period) external`

    **Requires**

    * [require(..., Current period is not closed yet)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L759)

    * [require(..., Exceeds the FEE_PERIOD_LENGTH)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L760)

---

### `getLastFeeWithdrawal`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L780)</sub>

??? example "Details"

    **Signature**

    `getLastFeeWithdrawal(address _claimingAddress) public`

---

### `getPenaltyThresholdRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L787)</sub>

??? example "Details"

    **Signature**

    `getPenaltyThresholdRatio() public`

---

## Modifiers

---

### `onlyExchangerOrSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L806)</sub>

---

### `onlyIssuer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L814)</sub>

---

### `notFeeAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L819)</sub>

---

## Events

---

### `IssuanceDebtRatioEntry`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L826)</sub>

- `(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 feePeriodStartingDebtIndex)`

---

### `ExchangeFeeUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L852)</sub>

- `(uint256 newFeeRate)`

---

### `FeePeriodDurationUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L859)</sub>

- `(uint256 newFeePeriodDuration)`

---

### `FeePeriodClosed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L866)</sub>

- `(uint256 feePeriodId)`

---

### `FeesClaimed`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L873)</sub>

- `(address account, uint256 sUSDAmount, uint256 snxRewards)`

---

