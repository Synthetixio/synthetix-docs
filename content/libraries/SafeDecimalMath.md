# SafeDecimalMath

## Description


**Source:** [contracts/SafeDecimalMath.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol)

## Architecture


---
### Libraries

- [SafeMath](/libraries/SafeMath) for `uint`

---
### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L12)</sub>


**Type:** `uint8`



---
### `highPrecisionDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L13)</sub>


**Type:** `uint8`



---
### `PRECISE_UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L19)</sub>


**Type:** `uint256`



---
### `UNIT_TO_HIGH_PRECISION_CONVERSION_FACTOR`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L20)</sub>


**Type:** `uint256`



---
### `UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L16)</sub>


**Type:** `uint256`


## Constants


---
### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L12)</sub>





**Type:** `uint8`


---
### `highPrecisionDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L13)</sub>





**Type:** `uint8`


---
### `PRECISE_UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L19)</sub>





**Type:** `uint256`


---
### `UNIT_TO_HIGH_PRECISION_CONVERSION_FACTOR`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L20)</sub>





**Type:** `uint256`


---
### `UNIT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L16)</sub>





**Type:** `uint256`

## Functions


---
### `_divideDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L131)</sub>



??? example "Details"

    **Signature**

    `_divideDecimalRound(uint256 x, uint256 y, uint256 precisionUnit)`

    **State Mutability**

    `pure`


---
### `_multiplyDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L62)</sub>



??? example "Details"

    **Signature**

    `_multiplyDecimalRound(uint256 x, uint256 y, uint256 precisionUnit)`

    **State Mutability**

    `pure`


---
### `preciseUnit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L32)</sub>



??? example "Details"

    **Signature**

    `preciseUnit()`

    **State Mutability**

    `pure`


---
### `unit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L25)</sub>



??? example "Details"

    **Signature**

    `unit()`

    **State Mutability**

    `pure`

## Functions (Internal)


---
### `decimalToPreciseDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L172)</sub>



??? example "Details"

    **Signature**

    `decimalToPreciseDecimal(uint256 i)`

    **State Mutability**

    `pure`


---
### `divideDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L118)</sub>



??? example "Details"

    **Signature**

    `divideDecimal(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `divideDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L153)</sub>



??? example "Details"

    **Signature**

    `divideDecimalRound(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `divideDecimalRoundPrecise`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L165)</sub>



??? example "Details"

    **Signature**

    `divideDecimalRoundPrecise(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `multiplyDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L45)</sub>



??? example "Details"

    **Signature**

    `multiplyDecimal(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `multiplyDecimalRound`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L105)</sub>



??? example "Details"

    **Signature**

    `multiplyDecimalRound(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `multiplyDecimalRoundPrecise`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L89)</sub>



??? example "Details"

    **Signature**

    `multiplyDecimalRoundPrecise(uint256 x, uint256 y)`

    **State Mutability**

    `pure`


---
### `preciseDecimalToDecimal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SafeDecimalMath.sol#L179)</sub>



??? example "Details"

    **Signature**

    `preciseDecimalToDecimal(uint256 i)`

    **State Mutability**

    `pure`

