# FeePool

## Description

FeePools primary purpose is the distribution of synthetix.exchange fees in sUSD and SNX staking rewards to SNX minters aka stakers via the `claimFees()` function.

[closeCurrentFeePeriod](#closecurrentfeeperiod) is an external public function anyone can call to close the current feeperiod after the `feePeriodDuration has passed. There is no incentive behind this function call as it is incentive enough that SNX Stakers want to be able to claim their fees and rewards. There is also a [Fee Period Closing service](https://etherscan.io/address/0xfee056f4d9d63a63d6cf16707d49ffae7ff3ff01) that synthetix contributors opperate that will automatically call [closeCurrentFeePeriod](#closecurrentfeeperiod) when the fee period duration has passed.

The FeePool currently maintains 2 [feeperiod](##feeperiod) structs where the current open period for accumulating fees and rewards is `recentFeePeriods[0]` and the previos period which has been cloased and now available for SNX Stakers to claim their fees and rewards being `recentFeePeriods[1]`

Since [SIP 56: Differential Fees](https://sips.synthetix.io/sips/sip-56) it now supports the API for storing and reading the Synth Exchange Fee Rates per synth which are defined via SCCP's. The current eschange fee rates implemented in [sccp-24](https://sips.synthetix.io/sccp/sccp-24)

**Source:** [contracts/FeePool.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    FeePool[FeePool] --> Proxyable[Proxyable]
    FeePool[FeePool] --> LimitedSetup[LimitedSetup]
    FeePool[FeePool] --> MixinSystemSettings[MixinSystemSettings]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

### Related Contracts

<centered-image>
    ![FeePool architecture graph](/img/graphs/FeePool-architecture.svg)
</centered-image>

??? example "Details"

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

## Structs

### `FeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L43)</sub>

A record for a fee period, when it was opened, and the fees and rewards accrued within it. This information is maintained for the last several fee periods in [`recentFeePeriods`](#recentfeeperiods).

| Field                 | Type      | Description                                                                                                                                                                                                                                                                                                                       |
| --------------------- | --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `feePeriodId`         | `uint64`  | A serial id for fee periods which is incremented for each new fee period.                                                                                                                                                                                                                                                         |
| `startingDebtIndex`   | `uint64`  | The length of [`SynthetixState.debtLedger`](SynthetixState.md#debtledger) at the time this fee period began.                                                                                                                                                                                                                      |
| `startTime`           | `uint64`  | The current timestamp when this fee period began.                                                                                                                                                                                                                                                                                 |
| `feesToDistribute`    | `uint256` | The total of fees to be distributed in this period, in sUSD. This increases when fees are collected in the current period or when unclaimed fees roll over from the oldest period to the second oldest. See [`feePaid`](#feepaid) and [`closeCurrentPeriod`](#closecurrentperiod).                                                |
| `feesClaimed`         | `uint256` | The number of fees that have already been claimed during this period.                                                                                                                                                                                                                                                             |
| `rewardsToDistribute` | `uint256` | The total of inflationary rewards to be distributed in this period, in SNX. This increases when new rewards are minted by [`Synthetix.mint`](Synthetix.md#mint)/[`rewardsMinted`](#rewardsminted), or when unclaimed rewards roll over from the oldest period to the second oldest ([`closeCurrentPeriod`](#closecurrentperiod)). |
| `rewardsClaimed`      | `uint256` | The quantity of inflationary rewards that have already been claimed during this period.                                                                                                                                                                                                                                           |

## Constants

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L37)</sub>

The address where fees are pooled as sUSD.

**Value:** [`0xfeEFEEfeefEeFeefEEFEEfEeFeefEEFeeFEEFEeF`](https://etherscan.io/address/0xfeEFEEfeefEeFeefEEFEEfEeFeefEEFeeFEEFEeF)

**Type:** `address`

### `FEE_PERIOD_LENGTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L58)</sub>

This is the number of weekly fee periods that are tracked by the smart contracts, hence the length of the [`recentFeePeriods`](#recentfeeperiods) array.

This was reduced from 6 to 3 as part of [SIP-4](https://sips.synthetix.io/sips/sip-4) and now 2 periods 0 and 1, but note the inconsistency with the corresponding constant in [`FeePoolState`](FeePoolState.md#fee_period_length), which cannot be altered.

**Value:** `2`

**Type:** `uint8`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L82)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `effectiveDebtRatioForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L685)</sub>

Given an account and an index into [`recentFeePeriods`](#recentfeeperiods), this function computes the percentage of total debt ownership of the account at the end of that period.

This uses [`_effectiveDebtRatioForPeriod`](#_effectiveDebtRatioForPeriod), where the start index and ownership percentage are computed with [`FeePoolState.applicableIssuanceData`](FeePoolState.md#applicableissuancedata), and the end index is one before the beginnging of the next period. Hence this function disallows querying the debt for the current period.

In principle a future version could support the current fee period by using the last debt ledger entry as the end index.

??? example "Details"

    **Signature**

    `effectiveDebtRatioForPeriod(address account, uint256 period) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Current period is not closed yet)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L686)

    * [require(..., Exceeds the FEE_PERIOD_LENGTH)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L687)

### `feePeriodDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L163)</sub>

This is the minimum duration of a single fee period in seconds. In practice they may be slightly longer if [`closeCurrentFeePeriod`](#closecurrentfeeperiod) is not called immediately at the earliest valid moment.

Its value is one week, but it may be between [`MIN_FEE_PERIOD_DURATION`](#min_fee_period_duration) and [`MAX_FEE_PERIOD_DURATION`](#max_fee_period_duration) (1 to 60 days).

**Type:** `uint256`

??? example "Details"

    **Signature**

    `feePeriodDuration() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L531)</sub>

Return the total of fees and rewards available to be withdrawn by this account. The result is reported as a `[fees, rewards]` pair denominated in the requested Synth flavour and SNX, respectively.

This is the total of fees accrued in completed periods, so is simply the the sum over an account's [`feesByPeriod`](#feesbyperiod) not including the current period.

??? example "Details"

    **Signature**

    `feesAvailable(address account) returns (uint256, uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `feesByPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L580)</sub>

Returns an array of [`FEE_PERIOD_LENGTH`](#fee_period_length) `[fees, rewards]` pairs owed to an account for each [recent fee period](#recentfeeperiods) (including the current one). Fees are denominated in sUSD and rewards in SNX.

To compute this, for each period from oldest to newest, find the [latest issuance event this account performed before the close of this period](FeePoolState.md#applicableissuancedata), and use it to derive the owed [fees and rewards](#_feesandrewardsfromperiod) for that period.

Note that a single issuance event can result in fees accruing for several fee periods, if the issuer does not claim their fees in one or more periods.

Periods where the user has already withdrawn since that period closed are skipped, producing `[0,0]` entries.

??? example "Details"

    **Signature**

    `feesByPeriod(address account) returns (uint256[2][2])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getLastFeeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L707)</sub>

Returns from [`FeePoolEternalStorage`](FeePoolEternalStorage.md) the id of the fee period during which the given address last withdrew fees.

??? example "Details"

    **Signature**

    `getLastFeeWithdrawal(address _claimingAddress) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `getPenaltyThresholdRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L714)</sub>

Returns the collateralisation level a user can reach before they cannot claim fees. This is simply [`SynthetixState.issuanceRatio *`](SynthetixState.md#issuanceratio) [`(1 + TARGET_THRESHOLD)`](#target_threshold). The result is returned as a [18-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `getPenaltyThresholdRatio() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isFeesClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L572)</sub>

??? example "Details"

    **Signature**

    `isFeesClaimable(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L159)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `recentFeePeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L171)</sub>

Stores [fee period information](#feeperiod) for the last three weeks, from newest to olders.

`recentFeePeriods[0]` is always the current fee period, which is modified by ongoing issuance and fee activity. Fees cannot be claimed from the current period, only from the closed period at index `1` which is all the fees and rewards accrued in the previous fee period (week).

**Type:** `FeePeriod[FEE_PERIOD_LENGTH] public`

??? example "Details"

    **Signature**

    `recentFeePeriods(uint256 index) returns (uint64, uint64, uint64, uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L93)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `targetThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L167)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `targetThreshold() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L500)</sub>

Computes the total fees available to be withdrawn, valued in terms of `currencyKey`. This simply sums the unclaimed fees over [`recentFeePeriods`](#recentfeeperiods) except those from the current period, because they cannot yet be claimed.

??? example "Details"

    **Signature**

    `totalFeesAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalRewardsAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L515)</sub>

Computes the total SNX rewards available to be withdrawn. This simply sums the unclaimed rewards over [`recentFeePeriods`](#recentfeeperiods) except those from the current period, because they cannot yet be claimed.

??? example "Details"

    **Signature**

    `totalRewardsAvailable() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L210)</sub>

Records that an account issued or burnt synths in the fee pool state.

This function merely emits an event and passes through to [`FeePoolState.appendAccountIssuanceRecord`](FeePoolState.md#appendAccountIssuanceRecord) and is itself only invoked by [`Synthetix._appendAccountIssuanceRecord`](Synthetix.md#_appendaccountissuancerecord).

The `debtRatio` argument is a [27-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `appendAccountIssuanceRecord(address account, uint256 debtRatio, uint256 debtEntryIndex)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

### `appendVestingEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L380)</sub>

Allows the contract owner to escrow SNX rewards for particular accounts. The rewards are escrowed for one year.

The SNX is deposited into the [`RewardEscrow`](RewardEscrow.md) contract from the sender using the ERC20 transferFrom function. The tokens are then escrowed on behalf of the targeted account with [`RewardEscrow.appendVestingEntry`](RewardEscrow.md#appendvestingentry).

??? example "Details"

    **Signature**

    `appendVestingEntry(address account, uint256 quantity)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

### `importFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L352)</sub>

During the setup period, allowed the contract owner to set a particular fee period entry in [`recentFeePeriods`](#recentfeeperiods) in order to migrate from a previous contract version.

??? example "Details"

    **Signature**

    `importFeePeriod(uint256 feePeriodIndex, uint256 feePeriodId, uint256 startingDebtIndex, uint256 startTime, uint256 feesToDistribute, uint256 feesClaimed, uint256 rewardsToDistribute, uint256 rewardsClaimed)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot import bad data)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L362)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `recordFeePaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L229)</sub>

Allows the [`Synthetix._internalExchange`](Synthetix.md#_internalexchange) function to record that a fee was paid whenever an exchange between Synth flavours occurs.

Adds the value in sUSD to the current fee period's pool of fees to be distributed.

??? example "Details"

    **Signature**

    `recordFeePaid(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

## Internal Functions

### `_claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L303)</sub>

Claims fees and rewards owed to the specified address.

The account's collateralisation ratio must be less than the [issuance ratio](SynthetixState.md#issuanceratio), plus the [target threshold](#target_threshold), as specified by the [`feesClaimable`](#feesclaimable) function. The quantity of fees and rewards owed is computed by [`feesAvailable`](#feesavailable).

Upon invocation, this function updates the account's [last fee withdrawal time](#_setlastfeewithdrawal), and removes the claimed [fees](#_recordFeePayment) and [rewards](#_recordRewardPayment) from the pool.
Fees are paid into the claiming address [in the specified currency](#_payFees), while the rewards are [escrowed](#_payRewards) on behalf of the claiming address in the [`RewardEscrow`](#rewardescrow) contract for one year.

The return value is always true if the transaction was not reverted.

??? example "Details"

    **Signature**

    `_claimFees(address claimingAddress) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., C-Ratio below penalty threshold)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L313)

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L315)

    * [require(..., No fees or rewards available for period, or fees already claimed)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L320)

### `_effectiveDebtRatioForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L669)</sub>

Given entry and exit indices into the debt ledger, and a percentage of total debt ownership at the entry index, this function computes the adjusted ownership percentage at the exit index. This percentage changes due to fluctuations in Synth prices and total supply.

If $\Delta_i$ is the value of the $i^{th}$ entry in the [debt ledger](SynthetixState.md#debtledger) and $\omega$ is the provided debt ownership percentage, then the result of this function is:

$$
\omega \frac{\Delta_\text{exit}}{\Delta_\text{entry}}
$$

See [`Synthetix._addToDebtRegister`](Synthetix.md#_addToDebtRegister) for details of the debt ownership percentage adjustment.

??? example "Details"

    **Signature**

    `_effectiveDebtRatioForPeriod(uint256 closingDebtIndex, uint256 ownershipPercentage, uint256 debtEntryIndex) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feesAndRewardsFromPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L642)</sub>

Computes the fees (in sUSD) and rewards (in SNX) owed at the end of a recent fee period given an entry index and the percentage of total system debt owned.

- `period` is an index into the [`recentFeePeriods`](#recentfeeperiods) array, thus 0 corresponds with the current period.
- `debtEntryIndex` should be an index into the debt ledger which was added before the close of the specified fee period.
- `ownershipPercentage` should be the percentage of the account's debt ownership at that `debtEntryIndex`. This is a [27-decimal fixed point number](../libraries/SafeDecimalMath.md).

??? example "Details"

    **Signature**

    `_feesAndRewardsFromPeriod(uint256 period, uint256 ownershipPercentage, uint256 debtEntryIndex) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isFeesClaimableAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L549)</sub>

??? example "Details"

    **Signature**

    `_isFeesClaimableAndAnyRatesInvalid(address account) returns (bool, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L471)</sub>

Pays a quantity of fees in sUSD to a claiming address.

The quantity is burnt from the fee pool, and and then issued into the destination address.

??? example "Details"

    **Signature**

    `_payFees(address account, uint256 sUSDAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [notFeeAddress](#notfeeaddress)

### `_payRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L491)</sub>

Pays a quantity of rewards to a specified address, escrowing it for one year with [`RewardEscrow.appendVestingEntry`](RewardEscrow.md#appendvestingentry).

??? example "Details"

    **Signature**

    `_payRewards(address account, uint256 snxAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [notFeeAddress](#notfeeaddress)

### `_recentFeePeriodsStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L196)</sub>

??? example "Details"

    **Signature**

    `_recentFeePeriodsStorage(uint256 index) returns (struct FeePool.FeePeriod)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_recordFeePayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L392)</sub>

Claims a quantity of fees from the [recent fee periods](#recentfeeperiods).

Fees are deducted from each [period's unclaimed fees](#feeperiod) in turn from the oldest to the most recent closed period as each is exhausted until either the entire quantity has been met, or the current fee period is reached.

As fees are not paid out from the current period, if there is any quantity left to be paid after all closed periods have been exhausted, it is simply ignored. Hence any losses due to rounding errors come out of the claim of the last person to claim. The function returns the quantity of fees actually claimed, which may be less than `sUSDAmount` in this case.

This is only called in `_claimFees`.

In pseudo-code:

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

??? example "Details"

    **Signature**

    `_recordFeePayment(uint256 sUSDAmount) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_recordRewardPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L430)</sub>

Claims a quantity of SNX rewards from the [recent fee periods](#recentfeeperiods). This is only called in `_claimFees`.

Its logic is identical to [`_recordFeePayment`](#_recordfeepayment), except that the relevant quantities are in `SNX`, and are claimed from [`rewardsClaimed`](#feeperiod).

??? example "Details"

    **Signature**

    `_recordRewardPayment(uint256 snxAmount) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_setLastFeeWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L723)</sub>

Stores into [FeePoolEternalStorage](FeePoolEternalStorage.md) the id of the fee period during which this address last withdrew fees.

??? example "Details"

    **Signature**

    `_setLastFeeWithdrawal(address _claimingAddress, uint256 _feePeriodID)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L135)</sub>

??? example "Details"

    **Signature**

    `collateralManager() returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L151)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `emitFeePeriodClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L787)</sub>

??? example "Details"

    **Signature**

    `emitFeePeriodClosed(uint256 feePeriodId)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `emitFeesClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L794)</sub>

??? example "Details"

    **Signature**

    `emitFeesClaimed(address account, uint256 sUSDAmount, uint256 snxRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `emitIssuanceDebtRatioEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L768)</sub>

??? example "Details"

    **Signature**

    `emitIssuanceDebtRatioEntry(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 feePeriodStartingDebtIndex)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L131)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L127)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePoolEternalStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L123)</sub>

The [`FeePoolEternalStorage`](FeePoolEternalStorage.md) key-value store that holds account last withdrawal times.

**Type:** `FeePoolEternalStorage public`

??? example "Details"

    **Signature**

    `feePoolEternalStorage() returns (contract FeePoolEternalStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePoolState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L119)</sub>

The [`FeePoolState`](FeePoolState.md) contract associated with this fee pool, which holds historical issuance data for the last several periods.

**Type:** `FeePoolState public`

??? example "Details"

    **Signature**

    `feePoolState() returns (contract FeePoolState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L139)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L147)</sub>

The [`RewardEscrow`](RewardEscrow.md) instance which holds inflationary rewards.

**Type:** `RewardEscrow public`

??? example "Details"

    **Signature**

    `rewardEscrow() returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L155)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution() returns (contract IRewardsDistribution)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L115)</sub>

The main [`Synthetix`](Synthetix.md) contract.

**Type:** `Synthetix public`

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L143)</sub>

The associated [`SynthetixState`](SynthetixState.md) contract.

**Type:** `SynthetixState public`

??? example "Details"

    **Signature**

    `synthetixState() returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L111)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `claimFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L287)</sub>

The message sender claims their fees in `sUSD`.

This is equivalent to [`_claimFees(messageSender)`](#_claimfees).

??? example "Details"

    **Signature**

    `claimFees() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `claimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L297)</sub>

The message sender claims fees in `sUSD` for a specified address; the funds are remitted to that address, and not to the sender.

This function first checks with the [`DelegateApprovals`](DelegateApprovals.md) contract that the sender is approved to claim fees on behalf of the specified address, but is otherwise equivalent to [`_claimFees(claimingForAddress)`](#_claimfees).

??? example "Details"

    **Signature**

    `claimOnBehalf(address claimingForAddress) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to claim on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L298)

    **Modifiers**

    * [issuanceActive](#issuanceactive)

    * [optionalProxy](#optionalproxy)

### `closeCurrentFeePeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L247)</sub>

If the current fee period has been open for longer than [`feePeriodDuration`](#feeperiodduration), then anyone may call this function to close it and open a new one.

The new fee period is added to the beginning of the [`recentFeePeriods`](#recentfeeperiods) list, and the last one is discarded. Any unclaimed fees from the last fee period roll over into the penultimate fee period.

The new fee period's [`feePeriodId`](#feeperiod) is the previous id incremented by 1, and its [`startingDebtIndex`](#feeperiod) is the length of [`SynthetixState.debtLedger`](SynthetixState.md#debtledger) at the time the fee period rolls over. Note that before a new minting event occurs this index will be one past the end of the ledger.

??? example "Details"

    **Signature**

    `closeCurrentFeePeriod()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Fee Period Duration not set)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L248)

    * [require(..., Too early to close fee period)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L249)

    **Modifiers**

    * [issuanceActive](#issuanceactive)

### `setRewardsToDistribute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L237)</sub>

Adds a quantity of SNX to the current fee period's total of rewards to be distributed.

??? example "Details"

    **Signature**

    `setRewardsToDistribute(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Caller is not rewardsAuthority)](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L239)

## Modifiers

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L751)</sub>

### `notFeeAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L746)</sub>

Reverts the transaction if `account` is the [fee address](#fee_address).

**Signature**: `notFeeAddress(address account)`

### `onlyInternalContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L731)</sub>

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L741)</sub>

## Events

### `FeePeriodClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L784)</sub>

**Signature**: `FeePeriodClosed(uint256 feePeriodId)`

### `FeesClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L791)</sub>

Records that an account [claimed](#_claimfees) the fees and rewards owed to them.

This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitFeesClaimed` function.

**Signature**: `FeesClaimed(address account, uint256 sUSDAmount, uint256 snxRewards)`

### `IssuanceDebtRatioEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.3/contracts/FeePool.sol#L758)</sub>

Records that a new account issuance record was [appended](#appendaccountissuancerecord) to the account's issuance ledger in [`FeePoolState`](FeePoolState.md#appendaccountissuancerecord).

This event is emitted from the FeePool's [proxy](Proxy.md#_emit) with the `emitIssuanceDebtRatioEntry` function.

**Signature**: `IssuanceDebtRatioEntry(address account, uint256 debtRatio, uint256 debtEntryIndex, uint256 feePeriodStartingDebtIndex)`
