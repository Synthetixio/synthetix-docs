# IExchanger

## Description

**Source:** [contracts/interfaces/IExchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol)

## Structs

### `ExchangeEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L18)</sub>

| Field                    | Type      | Description |
| ------------------------ | --------- | ----------- |
| `sourceRate`             | `uint256` | TBA         |
| `destinationRate`        | `uint256` | TBA         |
| `destinationAmount`      | `uint256` | TBA         |
| `exchangeFeeRate`        | `uint256` | TBA         |
| `exchangeDynamicFeeRate` | `uint256` | TBA         |
| `roundIdForSrc`          | `uint256` | TBA         |
| `roundIdForDest`         | `uint256` | TBA         |

### `ExchangeEntrySettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L7)</sub>

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

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L29)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) view returns (uint256 amountAfterSettlement)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `dynamicFeeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L53)</sub>

??? example "Details"

    **Signature**

    `dynamicFeeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 feeRate, bool tooVolatile)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L51)</sub>

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L58)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L49)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L36)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastExchangeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L75)</sub>

??? example "Details"

    **Signature**

    `lastExchangeRate(bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L38)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L71)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L40)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) view returns (uint256 reclaimAmount, uint256 rebateAmount, uint256 numEntries)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L73)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L78)</sub>

??? example "Details"

    **Signature**

    `exchange(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bool virtualSynth, address rewardAddress, bytes32 trackingCode) returns (uint256 amountReceived, contract IVirtualSynth vSynth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L90)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bytes32 trackingCode) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L99)</sub>

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256 reclaimed, uint256 refunded, uint256 numEntries)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.64.0-alpha/contracts/interfaces/IExchanger.sol#L107)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``
