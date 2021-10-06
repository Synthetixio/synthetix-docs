# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol)

## Architecture

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Structs

### `ExchangeEntrySettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L67)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `src`                    | `bytes32` | TBA         |
| `amount`                 | `uint256` | TBA         |
| `dest`                   | `bytes32` | TBA         |
| `reclaim`                | `uint256` | TBA         |
| `rebate`                 | `uint256` | TBA         |
| `srcRoundIdAtPeriodEnd`  | `uint256` | TBA         |
| `destRoundIdAtPeriodEnd` | `uint256` | TBA         |
| `timestamp`              | `uint256` | TBA         |

## Variables

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L83)</sub>

**Type:** `uint256`

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L78)</sub>

**Type:** `bytes32`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L85)</sub>

**Type:** `mapping(bytes32 => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L99)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L290)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) view returns (uint256 amountAfterSettlement)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L718)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L750)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L278)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L312)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L154)</sub>

Returns the maximum number of seconds remaining in the waiting period for all exchanges into the given synth (`currencyKey`) by the account.

This number must be `0` in order for [`settle()`](#settle) to succeed.

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L166)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L103)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L170)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `tradingRewardsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L162)</sub>

??? example "Details"

    **Signature**

    `tradingRewardsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L158)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L317)</sub>

??? example "Details"

    **Signature**

    `exchange(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `resetLastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L569)</sub>

??? example "Details"

    **Signature**

    `resetLastExchangeRate(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Rates for given synths not valid")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L572)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setLastExchangeRateForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L563)</sub>

??? example "Details"

    **Signature**

    `setLastExchangeRateForSynth(bytes32 currencyKey, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Rate must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L564)

    **Modifiers**

    * [onlyExchangeRates](#onlyexchangerates)

## Internal Functions

### `_convert`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L509)</sub>

??? example "Details"

    **Signature**

    `_convert(bytes32 sourceCurrencyKey, address from, uint256 sourceAmountAfterSettlement, bytes32 destinationCurrencyKey, uint256 amountReceived, address recipient, bool virtualSynth) returns (contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L533)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20, address, uint256, bytes32) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_ensureCanExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L581)</sub>

??? example "Details"

    **Signature**

    `_ensureCanExchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Can't be same synth")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L586)

    * [require(..., "Zero amount")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L587)

    * [require(..., "Src/dest rate invalid or not found")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L592)

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L403)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth) returns (uint256 amountReceived, uint256 fee, contract IVirtualSynth vSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L726)</sub>

??? example "Details"

    **Signature**

    `_feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getAmountReceivedForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L796)</sub>

??? example "Details"

    **Signature**

    `_getAmountReceivedForExchange(uint256 destinationAmount, uint256 exchangeFeeRate) pure returns (uint256 amountReceived)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getAmountsForExchangeMinusFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L770)</sub>

??? example "Details"

    **Signature**

    `_getAmountsForExchangeMinusFees(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate, uint256 sourceRate, uint256 destinationRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L249)</sub>

??? example "Details"

    **Signature**

    `_getExchangeEntry(address account, bytes32 currencyKey, uint256 index) view returns (struct IExchangeState.ExchangeEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L635)</sub>

??? example "Details"

    **Signature**

    `_internalSettle(address from, bytes32 currencyKey, bool updateCache) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot settle during waiting period")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L647)

### `_isDeviationAboveThreshold`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L620)</sub>

??? example "Details"

    **Signature**

    `_isDeviationAboveThreshold(uint256 base, uint256 comparison) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L595)</sub>

??? example "Details"

    **Signature**

    `_isSynthRateInvalid(bytes32 currencyKey, uint256 currentRate) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_settleAndCalcSourceAmountRemaining`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L387)</sub>

??? example "Details"

    **Signature**

    `_settleAndCalcSourceAmountRemaining(uint256 sourceAmount, address from, bytes32 sourceCurrencyKey) returns (uint256 sourceAmountAfterSettlement)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries, struct Exchanger.ExchangeEntrySettlement[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_suspendIfRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L356)</sub>

??? example "Details"

    **Signature**

    `_suspendIfRateInvalid(bytes32 currencyKey, uint256 rate) returns (bool circuitBroken)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L365)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L804)</sub>

??? example "Details"

    **Signature**

    `appendExchange(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [ExchangeEntryAppended](#exchangeentryappended)

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L150)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IExchangerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L142)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L126)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L122)</sub>

??? example "Details"

    **Signature**

    `exchangeState() view returns (contract IExchangeState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L134)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L839)</sub>

??? example "Details"

    **Signature**

    `getRoundIdsAtPeriodEnd(struct IExchangeState.ExchangeEntry exchangeEntry) view returns (uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L146)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L689)</sub>

??? example "Details"

    **Signature**

    `reclaim(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L699)</sub>

??? example "Details"

    **Signature**

    `refund(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L709)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriodForExchange(uint256 timestamp) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L130)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L118)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `tradingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L138)</sub>

??? example "Details"

    **Signature**

    `tradingRewards() view returns (contract ITradingRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L543)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntriesSettled)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L555)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No such synth")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L557)

    * [require(..., "Synth price is valid")](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L558)

## Modifiers

### `onlyExchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L872)</sub>

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L863)</sub>

## Events

### `ExchangeEntryAppended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L879)</sub>

**Signature**: `ExchangeEntryAppended(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived, uint256 exchangeFeeRate, uint256 roundIdForSrc, uint256 roundIdForDest)`

### `ExchangeEntrySettled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.3-ovm-alpha/contracts/Exchanger.sol#L890)</sub>

**Signature**: `ExchangeEntrySettled(address from, bytes32 src, uint256 amount, bytes32 dest, uint256 reclaim, uint256 rebate, uint256 srcRoundIdAtPeriodEnd, uint256 destRoundIdAtPeriodEnd, uint256 exchangeTimestamp)`
