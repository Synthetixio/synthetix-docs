# PublicEST

## Description


**Source:** [contracts/test-helpers/PublicEST.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol)

## Architecture


---
### Inheritance Graph

```mermaid
graph TD
    PublicEST[PublicEST] --> ExternStateToken[ExternStateToken]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
```

## Variables


---
### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L7)</sub>





**Type:** `uint8`

## Functions


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L9)</sub>



??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _name, string _symbol, uint256 _totalSupply, address _owner) public`

    **Modifiers**

    * [ExternStateToken](#externstatetoken)


---
### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L18)</sub>



??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)


---
### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L22)</sub>



??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)


---
### `somethingToBeProxied`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L33)</sub>



??? example "Details"

    **Signature**

    `somethingToBeProxied(uint256 inputA, bytes32 inputB) external`

    **Emits**

    * [Received](#received)

## Events


---
### `Received`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/PublicEST.sol#L31)</sub>



- `(address sender, uint256 inputA, bytes32 inputB)`

