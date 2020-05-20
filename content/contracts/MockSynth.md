# MockSynth

## Description


**Source:** [contracts/test-helpers/MockSynth.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    MockSynth[MockSynth] --> ExternStateToken[ExternStateToken]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
```

## Variables


---
### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L11)</sub>





**Type:** `bytes32`


---
### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L10)</sub>





**Type:** `contract ISystemStatus`

## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L13)</sub>



??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _name, string _symbol, uint256 _totalSupply, address _owner, bytes32 _currencyKey)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [ExternStateToken](#externstatetoken)

## Functions


---
### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L62)</sub>



??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Burned](#burned)


---
### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L56)</sub>



??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Issued](#issued)


---
### `setSystemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L26)</sub>



??? example "Details"

    **Signature**

    `setSystemStatus(contract ISystemStatus _status)`

    **State Mutability**

    `nonpayable`


---
### `setTotalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L31)</sub>



??? example "Details"

    **Signature**

    `setTotalSupply(uint256 _totalSupply)`

    **State Mutability**

    `nonpayable`


---
### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L35)</sub>



??? example "Details"

    **Signature**

    `transfer(address to, uint256 value)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)


---
### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L41)</sub>



??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

## Events


---
### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L53)</sub>



- `(address account, uint256 value)`


---
### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/MockSynth.sol#L51)</sub>



- `(address account, uint256 value)`

