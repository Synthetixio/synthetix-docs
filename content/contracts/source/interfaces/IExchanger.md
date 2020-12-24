# IExchanger

## Description

**Source:** [contracts/interfaces/IExchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol)

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L9)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L31)</sub>

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAmountsForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L36)</sub>

??? example "Details"

    **Signature**

    `getAmountsForExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `hasWaitingPeriodOrSettlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L29)</sub>

??? example "Details"

    **Signature**

    `hasWaitingPeriodOrSettlementOwing(address account, bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isSynthRateInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L16)</sub>

??? example "Details"

    **Signature**

    `isSynthRateInvalid(bytes32 currencyKey) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L18)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `priceDeviationThresholdFactor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L49)</sub>

??? example "Details"

    **Signature**

    `priceDeviationThresholdFactor() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L20)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `waitingPeriodSecs`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L51)</sub>

??? example "Details"

    **Signature**

    `waitingPeriodSecs() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L54)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L62)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalfWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L80)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalfWithTracking(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeWithTracking`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchangeWithTracking(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, address originator, bytes32 trackingCode) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeWithVirtual`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L90)</sub>

??? example "Details"

    **Signature**

    `exchangeWithVirtual(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bytes32 trackingCode) returns (uint256, contract IVirtualSynth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `setLastExchangeRateForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L107)</sub>

??? example "Details"

    **Signature**

    `setLastExchangeRateForSynth(bytes32 currencyKey, uint256 rate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L99)</sub>

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `suspendSynthWithInvalidRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.2/contracts/interfaces/IExchanger.sol#L109)</sub>

??? example "Details"

    **Signature**

    `suspendSynthWithInvalidRate(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
