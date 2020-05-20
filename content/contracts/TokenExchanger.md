# TokenExchanger

## Description


**Source:** [contracts/test-helpers/TokenExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    TokenExchanger[TokenExchanger] --> Owned[Owned]
```

## Variables


---
### `integrationProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L13)</sub>





**Type:** `address`


---
### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L14)</sub>





**Type:** `address`

## Modifiers


---
### `synthetixProxyIsSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L62)</sub>



## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L16)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _integrationProxy)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions


---
### `checkAllowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L32)</sub>



??? example "Details"

    **Signature**

    `checkAllowance(address tokenOwner, address spender)`

    **State Mutability**

    `view`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)


---
### `checkBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L28)</sub>



??? example "Details"

    **Signature**

    `checkBalance(address account)`

    **State Mutability**

    `view`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)


---
### `checkBalanceSNXDirect`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L36)</sub>



??? example "Details"

    **Signature**

    `checkBalanceSNXDirect(address account)`

    **State Mutability**

    `view`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)


---
### `doTokenSpend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L44)</sub>



??? example "Details"

    **Signature**

    `doTokenSpend(address fromAccount, address toAccount, uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., fromAccount does not have the required balance to spend)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L50)

    * [require(..., I TokenExchanger, do not have approval to spend this guys tokens)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L53)

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)


---
### `getDecimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L40)</sub>



??? example "Details"

    **Signature**

    `getDecimals(address tokenAddress)`

    **State Mutability**

    `view`

## Functions (onlyOwner)


---
### `setSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L24)</sub>



??? example "Details"

    **Signature**

    `setSynthetix(address _synthetix)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)


---
### `setSynthetixProxy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L20)</sub>



??? example "Details"

    **Signature**

    `setSynthetixProxy(address _integrationProxy)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Events


---
### `LogAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L69)</sub>



- `(string name, address value)`


---
### `LogBytes`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L70)</sub>



- `(string name, bytes4 value)`


---
### `LogInt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L68)</sub>



- `(string name, uint256 value)`


---
### `LogString`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L67)</sub>



- `(string name, string value)`

