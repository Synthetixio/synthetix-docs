# IExchanger

## Description


**Source:** [contracts/interfaces/IExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol)

## Functions


---
### `calculateAmountAfterSettlement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L6)</sub>



??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) external`


---
### `feeRateForExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L13)</sub>



??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) external`


---
### `maxSecsLeftInWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L15)</sub>



??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) external`


---
### `settlementOwing`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L17)</sub>



??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) external`


---
### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L27)</sub>



??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) external`


---
### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L35)</sub>



??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`


---
### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/IExchanger.sol#L43)</sub>



??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) external`

