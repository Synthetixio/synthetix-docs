# Exchanger

## Description

Performs all the heavy lifting internally of `exchange` and `settle` functionality.

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Exchanger[Exchanger] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![Exchanger architture graph](/img/graphs/Exchanger-architecture.svg)
</centered-image>

## Variables

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L53)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L73)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L172)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L108)</sub>

Determine the effective fee rate for the exchange, taking into considering swing trading.

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 , bytes32 )`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L103)</sub>

Returns the maximum number of seconds remaining in the waiting period for all exchanges into the given synth (`currencyKey`) by the account.

This number must be `0` in order for [`settle()`](#settle) to succeed.

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L118)</sub>

Returns the total amount to be reclaimed or rebated for the given account and synth (`currencyKey`). Note: this function can be called at any time, even while the waiting period has not expired.

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L195)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L205)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L212)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

### `setWaitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L168)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(uint256 _waitingPeriodSecs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L222)</sub>

??? example "Details"

    **Signature**

    `_exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Can't be same synth)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L235)

    * [require(..., Zero amount)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L236)

### `_internalSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L336)</sub>

??? example "Details"

    **Signature**

    `_internalSettle(address from, bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot settle during waiting period)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L344)

### `appendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L406)</sub>

??? example "Details"

    **Signature**

    `appendExchange(address account, bytes32 src, uint256 amount, bytes32 dest, uint256 amountReceived)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `calculateExchangeAmountMinusFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L390)</sub>

??? example "Details"

    **Signature**

    `calculateExchangeAmountMinusFees(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey, uint256 destinationAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L99)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L87)</sub>

??? example "Details"

    **Signature**

    `exchangeRates()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L83)</sub>

??? example "Details"

    **Signature**

    `exchangeState()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L95)</sub>

??? example "Details"

    **Signature**

    `feePool()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `getRoundIdsAtPeriodEnd`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L430)</sub>

??? example "Details"

    **Signature**

    `getRoundIdsAtPeriodEnd(address account, bytes32 currencyKey, uint256 index)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `reclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L362)</sub>

??? example "Details"

    **Signature**

    `reclaim(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L372)</sub>

??? example "Details"

    **Signature**

    `refund(address from, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `remitFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L323)</sub>

??? example "Details"

    **Signature**

    `remitFee(contract IExchangeRates _exRates, contract ISynthetix _synthetix, uint256 fee, bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `secsLeftInWaitingPeriodForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L382)</sub>

??? example "Details"

    **Signature**

    `secsLeftInWaitingPeriodForExchange(uint256 timestamp)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L91)</sub>

??? example "Details"

    **Signature**

    `synthetix()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L79)</sub>

??? example "Details"

    **Signature**

    `systemStatus()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L304)</sub>

Settle processes all exchanges into the given synth, calculating any `reclaimed` or `refunded` amounts via [`settlementOwing`](#settlementowing) and burning any reclaim and issuing any refund. This function may be called by anyone - the `msg.sender` is irrelevant.

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Modifiers

### `onlySynthetixorSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Exchanger.sol#L445)</sub>
