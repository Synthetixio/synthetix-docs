# ISynthetixInternal

## Description

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.32.1-beta/contracts/Exchanger.sol)

## External Functions

### `emitExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.1-beta/contracts/Exchanger.sol#L53)</sub>

??? example "Details"

    **Signature**

    `emitExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `emitExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.1-beta/contracts/Exchanger.sol#L47)</sub>

??? example "Details"

    **Signature**

    `emitExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `emitExchangeTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.1-beta/contracts/Exchanger.sol#L32)</sub>

??? example "Details"

    **Signature**

    `emitExchangeTracking(bytes32 trackingCode, bytes32 toCurrencyKey, uint256 toAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `emitSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.32.1-beta/contracts/Exchanger.sol#L38)</sub>

??? example "Details"

    **Signature**

    `emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
