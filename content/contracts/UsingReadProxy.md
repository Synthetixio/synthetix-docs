# UsingReadProxy

## Description


**Source:** [contracts/test-helpers/UsingReadProxy.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/UsingReadProxy.sol)

## Variables


---
### `resolver`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/UsingReadProxy.sol#L8)</sub>





**Type:** `contract IAddressResolver`

## Functions


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/UsingReadProxy.sol#L10)</sub>



??? example "Details"

    **Signature**

    `(contract IAddressResolver _resolver) public`


---
### `run`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/UsingReadProxy.sol#L14)</sub>



??? example "Details"

    **Signature**

    `run(bytes32 currencyKey) external`

    **Requires**

    * [require(..., Missing ExchangeRates)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/UsingReadProxy.sol#L16)

