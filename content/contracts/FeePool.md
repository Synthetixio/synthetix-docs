# FeePool

## Description


**Source:** [contracts/FeePool.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol)

## Architecture


---
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
### Related Contracts

<centered-image>
    ![FeePool architecture graph](../img/graphs/FeePool-architecture.svg)
</centered-image>


??? example "Details"


```
- [`Proxy`](Proxy.md): The fee pool, being [`Proxyable`](Proxyable.md), sits behind a `CALL`-style proxy for upgradeability.
- [`Synthetix`](Synthetix.md): The fee pool needs the Synthetix address for a onlySynthetix modifer for storing a minters issue and burn events to track their debt % of the system.
- [`SynthetixState`](SynthetixState.md): The fee pool retrieves the global issuance ratio, and queries the debt ledger directly from the Synthetix state contract.
- [`Synth`](Synth.md): The fee pool, retrieving their addresses from the Synthetix contract, directly burns and issues sUSD when transferring fees. Fees are denominated and paid out in sUSD. Synths themselves do not know the fee pool address directly, but ask the fee pool's proxy for its target.
- [`FeePoolState`](FeePoolState.md): The fee pool state contract holds the details of each user's most recent issuance events: when they issued and burnt synths, and their value.
- [`FeePoolEternalStorage`](FeePoolEternalStorage): A storage contact that holds the last fee withdrawal time for each account.
- [`DelegateApprovals`](DelegateApprovals): A storage contract containing addresses to which the right to withdraw fees has been delegated by another account, for example to allow hot wallets to withdraw fees.
- [`RewardEscrow`](RewardEscrow.md): The contract into which inflationary SNX rewards are paid by the fee pool so that they can be escrowed for a year after being claimed.
- [`RewardsDistribution`](RewardsDistribution.md): This contract, in the guise of the [`rewardsAuthority`](#rewardsauthority), distributes allocations from the inflationary supply to various recipients.
- [`Depot`](Depot.md): Allows users to exchange between Synths, SNX, and Ether. The Depot uses the fee pool to know what transfer fees were being incurred on its transfers, although the transfer fee has been nil since before [SIP-19](https://sips.synthetix.io/sips/sip-19).
```


---
### Libraries

- [SafeMath](SafeMath.md) for uint
- [SafeDecimalMath](SafeDecimalMath.md) for uint

## Structs


---
### `FeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L48)</sub>



A record for a fee period, when it was opened, and the fees and rewards accrued within it. This information is maintained for the last several fee periods in [`recentFeePeriods`](#recentfeeperiods).


| Field | Type |
| ------ | ------ |
| feePeriodId | uint64 |
| startingDebtIndex | uint64 |
| startTime | uint64 |
| feesToDistribute | uint256 |
| feesClaimed | uint256 |
| rewardsToDistribute | uint256 |
| rewardsClaimed | uint256 |


## Constants


---
### `FEE_ADDRESS`

The address where fees are pooled as sUSD.


**Type:** `address constant public`


**Value:** [`0xfeEFEEfeefEeFeefEEFEEfEeFeefEEFeeFEEFEeF`](https://etherscan.io/address/0xfeEFEEfeefEeFeefEEFEEfEeFeefEEFeeFEEFEeF)



---
### `FEE_PERIOD_LENGTH`

This is the number of weekly fee periods that are tracked by the smart contracts, hence the length of the [`recentFeePeriods`](#recentfeeperiods) array.


This was reduced from 6 to 3 as part of [SIP-4](https://sips.synthetix.io/sips/sip-4), but note the inconsistency with the corresponding constant in [`FeePoolState`](FeePoolState.md#fee_period_length), which cannot be altered.


**Type:** `uint constant public`


**Value:** `3`



---
### `LAST_FEE_WITHDRAWAL`

This string is used as part of a key for accessing account withdrawal timestamps from the [eternal storage contract](#feepooleternalstorage).


This is only used within [`FeePool.getLastFeeWithdrawal`](FeePool.md#getlastfeewithdrawal) and [`FeePool.setLastFeeWithdrawal`](FeePool.md#setlastfeewithdrawal), where it is hashed together with the target address to obtain the correct key.


This must have the same value as [`FeePoolEternalStorage.LAST_FEE_WITHDRAWAL`](FeePoolEternalStorage.md#last_fee_withdrawal).


**Type:** `bytes32 constant`


**Value:** `"last_fee_withdrawal"`



---
### `MAX_EXCHANGE_FEE_RATE`

[`exchangeFeeRate`](#exchangefeerate) cannot exceed this. Initialised to 10%.


**Type:** `uint constant public` ([18 decimals](SafeDecimalMath.md))


**Value:** 0.1



---
### `MAX_FEE_PERIOD_DURATION`

The maximum value of [`feePeriodDuration`](#feeperiodduration).


**Type:** `uint public constant`


**Value:** `60 days`



---
### `MIN_FEE_PERIOD_DURATION`

The minimum value of [`feePeriodDuration`](#feeperiodduration).


**Type:** `uint public constant`


**Value:** `1 days`



---
### `TARGET_THRESHOLD`

A threshold that allows issuers to be undercollateralised by up to 10%. Users may claim fees if their [collateralisation ratio](Synthetix.md#collateralisationratio) is below the target [issuance ratio](SynthetixState.md#issuanceratio) plus 10%.


This is designed to allow users to have a little slack in case prices move quickly.


**Type:** `uint public`


## Variables


---
### `exchangeFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L36)</sub>



The fee fraction charged on a currency exchange, between 0 and 0.1.




**Type:** `uint256`


---
### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L72)</sub>



This is the minimum duration of a single fee period in seconds. In practice they may be slightly longer if [`closeCurrentFeePeriod`](#closecurrentfeeperiod) is not called immediately at the earliest valid moment.


Its value is one week, but it may be between [`MIN_FEE_PERIOD_DURATION`](#min_fee_period_duration) and [`MAX_FEE_PERIOD_DURATION`](#max_fee_period_duration) (1 to 60 days).




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

## Constructor

This initialises the various state contract addresses the fee pool knows about, along with its inherited [`SelfDestructible`](SelfDestructible.md), [`Proxyable`](Proxyable.md), and [`LimitedSetup`](LimitedSetup.md) instances.


This constructor also begins the first fee period, as it initialises the first fee period id to 1, and the first fee period start time to the construction time.


??? example "Details"


```
**Signature**

`constructor(address _proxy, address _owner, Synthetix _synthetix, FeePoolState _feePoolState, FeePoolEternalStorage _feePoolEternalStorage, ISynthetixState _synthetixState, ISynthetixEscrow _rewardEscrow, address _rewardsAuthority, uint _exchangeFeeRate) public`

**Superconstructors**

* [`Proxyable(_proxy, _owner)`](Proxyable.md#constructor)
* [`SelfDestructible(_owner)`](SelfDestructible.md#constructor)
* [`LimitedSetup(3 weeks)`](LimitedSetup.md#constructor)

**Preconditions**

* `_exchangeFeeRate` must be no greater than [`MAX_EXCHANGE_FEE_RATE`](#max_exchange_fee_rate).
```

## Views


---
### `amountReceivedFromTransfer`

Computes the number of Synths received by the recipient if a certain quantity is sent.


As of [SIP-19](https://sips.synthetix.io/sips/sip-19), this is just the identity function, since there are no longer any transfer fees. It is only used by the [`Depot`](Depot.md) contract.


??? example "Details"


```
**Signature**

`amountReceivedFromTransfer(uint value) external view returns (uint)`
```


---
### `amountReceivedFromExchange`

Computes the quantity received if a quantity of Synths is exchanged into another flavour. The amount received is the quantity sent minus the [exchange fee](#exchangefeeincurred), as per the logic in [`Synthetix._internalExchange`](Synthetix.md#_internalexchange).


??? example "Details"


```
**Signature**

`amountReceivedFromExchange(uint value) external view returns (uint)`
```


---
### `effectiveDebtRatioForPeriod`

Given an account and an index into [`recentFeePeriods`](#recentfeeperiods), this function computes the percentage of total debt ownership of the account at the end of that period.


This uses [`_effectiveDebtRatioForPeriod`](#_effectiveDebtRatioForPeriod), where the start index and ownership percentage are computed with [`FeePoolState.applicableIssuanceData`](FeePoolState.md#applicableissuancedata), and the end index is one before the beginnging of the next period. Hence this function disallows querying the debt for the current period.


In principle a future version could support the current fee period by using the last debt ledger entry as the end index.


??? example "Details"


```
**Signature**

`effectiveDebtRatioForPeriod(address account, uint period) external view returns (uint)`

**Preconditions**

* `period` must not be 0, as the current fee period has not closed.
* `period` must not exceed [`FEE_PERIOD_LENGTH`](#fee_period_length).
```


---
### `exchangeFeeIncurred`

Returns the fee charged on an exchange of a certain quantity of Synths into another flavour. This is simply the input multiplied by [`exchangeFeeRate`](#exchangeFeeRate).


??? example "Details"


```
**Signature**

`exchangeFeeIncurred(uint value) public view returns (uint)`
```


---
### `feesAvailable`

Return the total of fees and rewards available to be withdrawn by this account. The result is reported as a `[fees, rewards]` pair denominated in the requested Synth flavour and SNX, respectively.


This is the total of fees accrued in completed periods, so is simply the the sum over an account's [`feesByPeriod`](#feesbyperiod) not including the current period.


??? example "Details"


```
**Signature**

`feesAvailable(address account, bytes32 currencyKey) public view returns (uint, uint)`
```


---
### `feesByPeriod`

Returns an array of [`FEE_PERIOD_LENGTH`](#fee_period_length) `[fees, rewards]` pairs owed to an account for each [recent fee period](#recentfeeperiods) (including the current one). Fees are denominated in sUSD and rewards in SNX.


To compute this, for each period from oldest to newest, find the [latest issuance event this account performed before the close of this period](FeePoolState.md#applicableissuancedata), and use it to derive the owed [fees and rewards](#_feesandrewardsfromperiod) for that period.


Note that a single issuance event can result in fees accruing for several fee periods, if the issuer does not claim their fees in one or more periods.


Periods where the user has already withdrawn since that period closed are skipped, producing `[0,0]` entries.


??? example "Details"


```
**Signature**

`feesByPeriod(address account) public view returns (uint[2][FEE_PERIOD_LENGTH] memory results)`
```


---
### `feesClaimable`

This is a predicate, returning true iff a particular account is permitted to claim any fees it has accrued.


A account is able to claim fees if its [collateralisation ratio](Synthetix.md#collateralisationratio) is less than 110% of the [global issuance ratio](SynthetixState.md#issuanceratio).


??? example "Details"


```
**Signature**

`feesClaimable(address account) public view returns (bool)`
```


---
### `getLastFeeWithdrawal`

Returns from [`FeePoolEternalStorage`](FeePoolEternalStorage.md) the id of the fee period during which the given address last withdrew fees.


??? example "Details"


```
**Signature**

`getLastFeeWithdrawal(address _claimingAddress) public view returns (uint)`
```


---
### `getPenaltyThresholdRatio`

Returns the collateralisation level a user can reach before they cannot claim fees. This is simply [`SynthetixState.issuanceRatio *`](SynthetixState.md#issuanceratio) [`(1 + TARGET_THRESHOLD)`](#target_threshold). The result is returned as a [18-decimal fixed point number](SafeDecimalMath.md).


??? example "Details"


```
**Signature**

`getPenaltyThresholdRatio() public view returns (uint)`
```


---
### `totalFeesAvailable`

Computes the total fees available to be withdrawn, valued in terms of `currencyKey`. This simply sums the unclaimed fees over [`recentFeePeriods`](#recentfeeperiods) except those from the current period, because they cannot yet be claimed.


??? example "Details"


```
**Signature**

`totalFeesAvailable(bytes32 currencyKey) external view returns (uint)`
```


---
### `totalRewardsAvailable`

Computes the total SNX rewards available to be withdrawn. This simply sums the unclaimed rewards over [`recentFeePeriods`](#recentfeeperiods) except those from the current period, because they cannot yet be claimed.


??? example "Details"


```
**Signature**

`totalRewardsAvailable() external view returns (uint)`
```

## Mutative Functions


---
### `approveClaimOnBehalf`

Approves an account as a fee claimant for the sender in the [`DelegateApprovals`](DelegateApprovals.md#setapproval) contract.


??? example "Details"


```
**Signature**

`approveClaimOnBehalf(address account) public`

**Modifiers**

* [`Proxyable.optionalProxy`](Proxyable.md#optionalproxy)

**Preconditions**

* The [`delegates`](#delegates) address must not be zero.
* `account` must not be zero.
```


---
### `claimFees`

The message sender claims their fees in `sUSD`.


This is equivalent to [`_claimFees(messageSender)`](#_claimfees).


??? example "Details"


```
**Signature**

`claimFees() external returns (bool)`

**Modifiers**

* [`Proxyable.optionalProxy`](Proxyable.md#optionalproxy)
```


---
### `claimOnBehalf`

The message sender claims fees in `sUSD` for a specified address; the funds are remitted to that address, and not to the sender.


This function first checks with the [`DelegateApprovals`](DelegateApprovals.md) contract that the sender is approved to claim fees on behalf of the specified address, but is otherwise equivalent to [`_claimFees(claimingForAddress)`](#_claimfees).


??? example "Details"


```
**Signature**

`claimOnBehalf(address claimingForAddress) external returns (bool)`

**Modifiers**

* [`Proxyable.optionalProxy`](Proxyable.md#optionalproxy)

**Preconditions**

* `messageSender` must be [an approved delegate](DelegateApprovals.md#approval) of `claimingForAddress`.
```


---
### `closeCurrentFeePeriod`

If the current fee period has been open for longer than [`feePeriodDuration`](#feeperiodduration), then anyone may call this function to close it and open a new one.


The new fee period is added to the beginning of the [`recentFeePeriods`](#recentfeeperiods) list, and the last one is discarded. Any unclaimed fees from the last fee period roll over into the penultimate fee period.


The new fee period's [`feePeriodId`](#feeperiod) is the previous id incremented by 1, and its [`startingDebtIndex`](#feeperiod) is the length of [`SynthetixState.debtLedger`](SynthetixState.md#debtledger) at the time the fee period rolls over. Note that before a new minting event occurs this index will be one past the end of the ledger.


??? example "Details"


```
**Signature**

`closeCurrentFeePeriod() external`

**Preconditions**

* The start time of the current fee period must have been at least [`feePeriodDuration`](#feeperiodduration) seconds in the past.

**Emits**

* [`FeePeriodClosed(closedFeePeriodId)`](#feeperiodclosed)
```


---
### `removeClaimOnBehalf`

Disapproves an account as a fee claimant for the sender in the [`DelegateApprovals`](DelegateApprovals.md#withdrawapproval) contract.


??? example "Details"


```
**Signature**

`removeClaimOnBehalf(address account) public`

**Modifiers**

* [`Proxyable.optionalProxy`](Proxyable.md#optionalproxy)

**Preconditions**

* The [`delegates`](#delegates) address must not be zero.
```

## Owner Functions


---
### `appendVestingEntry`

Allows the contract owner to escrow SNX rewards for particular accounts. The rewards are escrowed for one year.


The SNX is deposited into the [`RewardEscrow`](RewardEscrow.md) contract from the sender using the ERC20 transferFrom function. The tokens are then escrowed on behalf of the targeted account with [`RewardEscrow.appendVestingEntry`](RewardEscrow.md#appendvestingentry).


??? example "Details"


```
**Signature**

`appendVestingEntry(address account, uint quantity) public`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
```


---
### `importFeePeriod`

During the setup period, allowed the contract owner to set a particular fee period entry in [`recentFeePeriods`](#recentfeeperiods) in order to migrate from a previous contract version.


??? example "Details"


```
**Signature**

`importFeePeriod(uint feePeriodIndex, uint feePeriodId, uint startingDebtIndex, uint startTime, uint feesToDistribute, uint feesClaimed, uint rewardsToDistribute, uint rewardsClaimed) public`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
* [`LimitedSetup.onlyDuringSetup`](LimitedSetup.md#onlyduringsetup)
```


---
### `setDelegateApprovals`

Allows the contract owner to set the [`DelegateApprovals`](#delegates) contract address.


??? example "Details"


```
**Signature**

`setDelegateApprovals(DelegateApprovals _delegates) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
```


---
### `setExchangeFeeRate`

Allows the contract owner to set the [exchange fee rate](#exchangefeerate).


??? example "Details"


```
**Signature**

`setExchangeFeeRate(uint _exchangeFeeRate) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
```


---
### `setFeePeriodDuration`

Allows the contract owner to set the [fee period duration](#feeperiodduration).


??? example "Details"


```
**Signature**

`setFeePeriodDuration(uint _feePeriodDuration) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)

**Preconditions**

* `_feePeriodDuration` must be no less than [`MIN_FEE_PERIOD_DURATION`](#min_fee_period_duration).
* `_feePeriodDuration` must be no greater than [`MAX_FEE_PERIOD_DURATION`](#max_fee_period_duration).
```


---
### `setFeePoolState`

Allows the contract owner to set the [`feePoolState`](#feepoolstate) contract address.


??? example "Details"


```
**Signature**

`setFeePoolState(FeePoolState, _feePoolState) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
```


---
### `setRewardsAuthority`

Allows the contract owner to set the [rewards authority](#rewardsauthority).


??? example "Details"


```
**Signature**

`setRewardsAuthority(address _rewardsAuthority) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)
```


---
### `setSynthetix`

Allows the contract owner to set the [`Synthetix` contract address](#synthetix).


??? example "Details"


```
**Signature**

`setSynthetix(Synthetix _synthetix) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)

**Preconditions**

* `_synthetix` must not be the zero address.
```


---
### `setTargetThreshold`

Allows the contract owner to set the [collateralisation ratio target threshold](#target_threshold).


The function requires its input as an integral percentage point value, rather than as a fractional number. So in order to set [`TARGET_THRESHOLD`](#target_threshold) to 0.05, provide the argument `5`. There is no way of setting a threshold between whole number percentages.


??? example "Details"


```
**Signature**

`setTargetThreshold(uint _percent) external`

**Modifiers**

* [`Proxyable.optionalProxy_onlyOwner`](Proxyable.md#optionalproxy_onlyowner)

**Preconditions**

* `_percent` must not be negative.
```

## Restricted Functions


---
### `appendAccountIssuanceRecord`

Records that an account issued or burnt synths in the fee pool state.


This function merely emits an event and passes through to [`FeePoolState.appendAccountIssuanceRecord`](FeePoolState.md#appendAccountIssuanceRecord) and is itself only invoked by [`Synthetix._appendAccountIssuanceRecord`](Synthetix.md#_appendaccountissuancerecord).


The `debtRatio` argument is a [27-decimal fixed point number](SafeDecimalMath.md).


??? example "Details"


```
**Signature**

`appendAccountIssuanceRecord(address account, uint debtRatio, uint debtEntryIndex) external`

**Modifiers**

* [`onlySynthetix`](#onlysynthetix)

**Emits**

* [`IssuanceDebtRatioEntry(account, debtRatio, debtEntryIndex, recentFeePeriods[0].startingDebtIndex)`](#issuancedebtratioentry)
```


---
### `recordFeePaid`

Allows the [`Synthetix._internalExchange`](Synthetix.md#_internalexchange) function to record that a fee was paid whenever an exchange between Synth flavours occurs.


Adds the value in sUSD to the current fee period's pool of fees to be distributed.


??? example "Details"


```
**Signature**

`recordFeePaid(uint amount) external`

**Modifiers**

* [`onlySynthetix`](#onlysynthetix)
```


---
### `setRewardsToDistribute`

Adds a quantity of SNX to the current fee period's total of rewards to be distributed.


??? example "Details"


```
**Signature**

`setRewardsToDistribute(uint amount) external`

**Preconditions**

* Either `msg.sender` or [`messageSender`](Proxyable.md#messagesender) must be the [rewards authority address](#rewardsauthority).
```

## Internal Functions


---
### `_claimFees`

Claims fees and rewards owed to the specified address.


The account's collateralisation ratio must be less than the [issuance ratio](SynthetixState.md#issuanceratio), plus the [target threshold](#target_threshold), as specified by the [`feesClaimable`](#feesclaimable) function. The quantity of fees and rewards owed is computed by [`feesAvailable`](#feesavailable).


Upon invocation, this function updates the account's [last fee withdrawal time](#_setlastfeewithdrawal), and removes the claimed [fees](#_recordFeePayment) and [rewards](#_recordRewardPayment) from the pool.
Fees are paid into the claiming address [in the specified currency](#_payFees), while the rewards are [escrowed](#_payRewards) on behalf of the claiming address in the [`RewardEscrow`](#rewardescrow) contract for one year.


The return value is always true if the transaction was not reverted.


??? example "Details"


```
**Signature**

`_claimFees(address claimingAddress) internal returns (bool)`

**Preconditions**

* The user's [collateralisation ratio](Synthetix.md#collateralisationratio) must be below the threshold, as per [`feesClaimable`](#feesclaimable).
* The user must have a positive value of fees or rewards available to claim.

**Emits**

* [`FeesClaimed(claimingAddress, feesPaid, rewardsPaid)`](#feesclaimed) (`feesPaid` is denominated in sUSD, `rewardsPaid` in SNX)
```


---
### `_effectiveDebtRatioForPeriod`

Given entry and exit indices into the debt ledger, and a percentage of total debt ownership at the entry index, this function computes the adjusted ownership percentage at the exit index. This percentage changes due to fluctuations in Synth prices and total supply.


If $\Delta_i$ is the value of the $i^{th}$ entry in the [debt ledger](SynthetixState.md#debtledger) and $\omega$ is the provided debt ownership percentage, then the result of this function is:


$$
\omega \frac{\Delta_\text{exit}}{\Delta_\text{entry}}
$$


See [`Synthetix._addToDebtRegister`](Synthetix.md#_addToDebtRegister) for details of the debt ownership percentage adjustment.


??? example "Details"


```
**Signature**

`_effectiveDebtRatioForPeriod(uint closingDebtIndex, uint ownershipPercentage, uint debtEntryIndex) internal view returns (uint)`
```


---
### `_feesAndRewardsFromPeriod`

Computes the fees (in sUSD) and rewards (in SNX) owed at the end of a recent fee period given an entry index and the percentage of total system debt owned.


- `period` is an index into the [`recentFeePeriods`](#recentfeeperiods) array, thus 0 corresponds with the current period.
- `debtEntryIndex` should be an index into the debt ledger which was added before the close of the specified fee period.
- `ownershipPercentage` should be the percentage of the account's debt ownership at that `debtEntryIndex`. This is a [27-decimal fixed point number](SafeDecimalMath.md).

??? example "Details"


```
**Signature**

`_feesAndRewardsFromPeriod(uint period, uint ownershipPercentage, uint debtEntryIndex) internal returns (uint, uint)`
```


---
### `_payFees`

Pays a quantity of fees in sUSD to a claiming address.


The quantity is burnt from the fee pool, and and then issued into the destination address.


??? example "Details"


```
**Signature**

`_payFees(address account, uint sUSDAmount) internal`

**Modifiers**

* [`notFeeAddress(account)`](#notfeeaddress)

**Preconditions**

* `account` can't be the fee address.
* `account` can't be 0.
* `account` can't be the FeePool contract itself.
* `account` can't be the fee pool's proxy.
* `account` can't be the Synthetix contract.
```


---
### `_payRewards`

Pays a quantity of rewards to a specified address, escrowing it for one year with [`RewardEscrow.appendVestingEntry`](RewardEscrow.md#appendvestingentry).


??? example "Details"


```
**Signature**

`_payRewards(address account, uint snxAmount) internal`

**Modifiers**

* [`notFeeAddress(account)`](#notfeeaddress)

**Preconditions**

* `account` can't be the fee address.
* `account` can't be 0.
* `account` can't be the FeePool contract itself.
* `account` can't be the fee pool's proxy.
* `account` can't be the Synthetix contract.
```


---
### `_recordFeePayment`

Claims a quantity of fees from the [recent fee periods](#recentfeeperiods).


Fees are deducted from each [period's unclaimed fees](#feeperiod) in turn from the oldest to the most recent closed period as each is exhausted until either the entire quantity has been met, or the current fee period is reached.


As fees are not paid out from the current period, if there is any quantity left to be paid after all closed periods have been exhausted, it is simply ignored. Hence any losses due to rounding errors come out of the claim of the last person to claim. The function returns the quantity of fees actually claimed, which may be less than `sUSDAmount` in this case.


This is only called in `_claimFees`.


In pseudo-code:


```python
remaining = sUSDAmount # The quantity to pay out.
paid = 0 # The quantity actually paid.

# Pay out fees from recent periods, from oldest to newest as they are exhausted.
# Don't traverse the current fee period.
for each closed period in reversed(recentFeePeriods):
    unclaimedFees = period.feesToDistribute - period.feesClaimed
    # Skip to the next period if this one is exhausted.
    if unclaimedFees == 0:
        continue

    # Don't pay out too much.
    payable = min(unclaimedFees, remaining)

    paid += payable
    period.feesClaimed += payable
    remaining -= payable

return paid
```

??? example "Details"


```
**Signature**

`_recordFeePayment(uint sUSDAmount) internal returns (uint)`:
```


---
### `_recordRewardPayment`

Claims a quantity of SNX rewards from the [recent fee periods](#recentfeeperiods). This is only called in `_claimFees`.


Its logic is identical to [`_recordFeePayment`](#_recordfeepayment), except that the relevant quantities are in `SNX`, and are claimed from [`rewardsClaimed`](#feeperiod).


??? example "Details"


```
**Signature**

`_recordRewardPayment(uint snxAmount) internal returns (uint)`:
```


---
### `_setLastFeeWithdrawal`

Stores into [FeePoolEternalStorage](FeePoolEternalStorage.md) the id of the fee period during which this address last withdrew fees.


??? example "Details"


```
**Signature**

`_setLastFeeWithdrawal(address _claimingAddress, uint _feePeriodID) internal`
```

## Modifiers


---
### `notFeeAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L819)</sub>



Reverts the transaction if `account` is the [fee address](#fee_address).


**Signature:** `notFeeAddress(address account)`



---
### `onlySynthetix`

Reverts the transaction if `msg.sender` is not the [`synthetix`](#synthetix) address.



---
### `onlyExchangerOrSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L806)</sub>




---
### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L814)</sub>



## Events


---
### `ExchangeFeeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L852)</sub>



Records that the fee for exchanging between Synths was [updated](#setexchangefee).


This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitExchangeFeeUpdated` function.


**Signature:** `ExchangeFeeUpdated(uint newFeeRate)`


- `(uint256 newFeeRate)`


---
### `FeesClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L873)</sub>



Records that an account [claimed](#_claimfees) the fees and rewards owed to them.


This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitFeesClaimed` function.


**Signature:** `FeesClaimed(address account, uint sUSDAmount, uint snxRewards)`


- `(address account, uint256 sUSDAmount, uint256 snxRewards)`


---
### `FeePeriodDurationUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L859)</sub>



Records that the duration of a single fee period was [updated](#setfeeperiodduration).


This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitFeePeriodDurationUpdated` function.


**Signature:** `FeePeriodDurationUpdated(uint newFeePeriodDuration)`


- `(uint256 newFeePeriodDuration)`


---
### `IssuanceDebtRatioEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L826)</sub>



Records that a new account issuance record was [appended](#appendaccountissuancerecord) to the account's issuance ledger in [`FeePoolState`](FeePoolState.md#appendaccountissuancerecord).


This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitIssuanceDebtRatioEntry` function.


**Signature:** `IssuanceDebtRatioEntry(address indexed account, uint debtRatio, uint debtEntryIndex, uint feePeriodStartingDebtIndex)`


- `(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 feePeriodStartingDebtIndex)`


---
### `FeePeriodClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/FeePool.sol#L866)</sub>



- `(uint256 feePeriodId)`

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

