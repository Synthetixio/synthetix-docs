# IExchanger

## Description


**Source:** [contracts/interfaces/IExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol)

## Constants

## Functions


---
### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L6)</sub>



??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded)`

    **State Mutability**

    `view`


---
### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L27)</sub>



??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress)`

    **State Mutability**

    `nonpayable`


---
### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L35)</sub>



??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `nonpayable`


---
### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L13)</sub>



??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `view`


---
### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L15)</sub>



??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey)`

    **State Mutability**

    `view`


---
### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L43)</sub>



??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey)`

    **State Mutability**

    `nonpayable`


---
### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L17)</sub>



??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey)`

    **State Mutability**

    `view`

## Variables

