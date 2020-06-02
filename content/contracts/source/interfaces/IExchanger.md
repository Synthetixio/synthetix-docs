# IExchanger

## Description

**Source:** [contracts/interfaces/IExchanger.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol)

## Views

### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L6)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L13)</sub>

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L15)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L17)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L27)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L35)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/IExchanger.sol#L43)</sub>

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
