# SystemStatus

**Source:** [SystemStatus.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/SystemStatus.sol)


!!! todo "Work in Progress"


    This needs filling in

## Description

... todo.



**Source:** [contracts/SystemStatus.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol)

## Architecture

... todo.


<!--centered-image>
    ![Architecture Graph](../img/graphs/todo-architecture.svg)
</centered-image-->







---
### Inheritance Graph

```mermaid
graph TD
    SystemStatus[SystemStatus] --> Owned[Owned]
```


---
### Related Contracts

- ?

## Views

## Constants


---
### `SECTION_EXCHANGE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L28)</sub>





**Type:** `bytes32`


---
### `SECTION_ISSUANCE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L27)</sub>





**Type:** `bytes32`


---
### `SECTION_SYNTH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L29)</sub>





**Type:** `bytes32`


---
### `SECTION_SYSTEM`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L26)</sub>





**Type:** `bytes32`


---
### `SUSPENSION_REASON_UPGRADE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L24)</sub>





**Type:** `uint248`

## Variables


---
### `accessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L15)</sub>





**Type:** `mapping(bytes32 => mapping(address => struct SystemStatus.Status))`


---
### `exchangeSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L35)</sub>





**Type:** `struct SystemStatus.Suspension`


---
### `issuanceSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L33)</sub>





**Type:** `struct SystemStatus.Suspension`


---
### `synthSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L37)</sub>





**Type:** `mapping(bytes32 => struct SystemStatus.Suspension)`


---
### `systemSuspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L31)</sub>





**Type:** `struct SystemStatus.Suspension`

## Structs


---
### `Status`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L10)</sub>



| Field | Type | Description |
| ------ | ------ | ------ |
| canSuspend | bool | TBA |
| canResume | bool | TBA |



---
### `Suspension`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L17)</sub>



| Field | Type | Description |
| ------ | ------ | ------ |
| suspended | bool | TBA |
| reason | uint248 | TBA |


## Function (Constructor)


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L39)</sub>



??? example "Details"

    **Signature**

    `(address _owner)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

## Functions


---
### `getSynthSuspensions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L83)</sub>



??? example "Details"

    **Signature**

    `getSynthSuspensions(bytes32[] synths)`

    **State Mutability**

    `view`


---
### `isSystemUpgrading`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L79)</sub>



??? example "Details"

    **Signature**

    `isSystemUpgrading()`

    **State Mutability**

    `view`


---
### `requireExchangeActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L57)</sub>



??? example "Details"

    **Signature**

    `requireExchangeActive()`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L59)

    * [require(..., Exchange is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L60)


---
### `requireIssuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L51)</sub>



??? example "Details"

    **Signature**

    `requireIssuanceActive()`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L53)

    * [require(..., Issuance is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L54)


---
### `requireSynthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L63)</sub>



??? example "Details"

    **Signature**

    `requireSynthActive(bytes32 currencyKey)`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L65)

    * [require(..., Synth is suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L66)


---
### `requireSynthsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L69)</sub>



??? example "Details"

    **Signature**

    `requireSynthsActive(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L71)

    * [require(..., One or more synths are suspended. Operation prohibited)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L73)


---
### `requireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L47)</sub>



??? example "Details"

    **Signature**

    `requireSystemActive()`

    **State Mutability**

    `view`

    **Requires**

    * [_internalRequireSystemActive](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L48)


---
### `resumeExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L142)</sub>



??? example "Details"

    **Signature**

    `resumeExchange()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L143)

    **Emits**

    * [ExchangeResumed](#exchangeresumed)


---
### `resumeIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L128)</sub>



??? example "Details"

    **Signature**

    `resumeIssuance()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L129)

    **Emits**

    * [IssuanceResumed](#issuanceresumed)


---
### `resumeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L156)</sub>



??? example "Details"

    **Signature**

    `resumeSynth(bytes32 currencyKey)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L157)

    **Emits**

    * [SynthResumed](#synthresumed)


---
### `resumeSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L114)</sub>



??? example "Details"

    **Signature**

    `resumeSystem()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToResume](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L115)

    **Emits**

    * [SystemResumed](#systemresumed)


---
### `suspendExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L135)</sub>



??? example "Details"

    **Signature**

    `suspendExchange(uint256 reason)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L136)

    **Emits**

    * [ExchangeSuspended](#exchangesuspended)


---
### `suspendIssuance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L121)</sub>



??? example "Details"

    **Signature**

    `suspendIssuance(uint256 reason)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L122)

    **Emits**

    * [IssuanceSuspended](#issuancesuspended)


---
### `suspendSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L149)</sub>



??? example "Details"

    **Signature**

    `suspendSynth(bytes32 currencyKey, uint256 reason)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L150)

    **Emits**

    * [SynthSuspended](#synthsuspended)


---
### `suspendSystem`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L107)</sub>



??? example "Details"

    **Signature**

    `suspendSystem(uint256 reason)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireAccessToSuspend](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L108)

    **Emits**

    * [SystemSuspended](#systemsuspended)

## Functions (Internal)


---
### `_internalRequireSystemActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L172)</sub>



??? example "Details"

    **Signature**

    `_internalRequireSystemActive()`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., memory)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L173)


---
### `_internalUpdateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L181)</sub>



??? example "Details"

    **Signature**

    `_internalUpdateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid section supplied)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L187)

    **Emits**

    * [AccessControlUpdated](#accesscontrolupdated)


---
### `_requireAccessToResume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L168)</sub>



??? example "Details"

    **Signature**

    `_requireAccessToResume(bytes32 section)`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Restricted to access control list)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L169)


---
### `_requireAccessToSuspend`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L164)</sub>



??? example "Details"

    **Signature**

    `_requireAccessToSuspend(bytes32 section)`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Restricted to access control list)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L165)

## Functions (onlyOwner)


---
### `updateAccessControl`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L98)</sub>



??? example "Details"

    **Signature**

    `updateAccessControl(bytes32 section, address account, bool canSuspend, bool canResume)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal & Restricted Mutative Functions

## Owner Mutative Functions

## Public Mutative Functions

## Events


---
### `AccessControlUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L213)</sub>



- `(bytes32 section, address account, bool canSuspend, bool canResume)`


---
### `ExchangeResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L208)</sub>



- `(uint256 reason)`


---
### `ExchangeSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L207)</sub>



- `(uint256 reason)`


---
### `IssuanceResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L205)</sub>



- `(uint256 reason)`


---
### `IssuanceSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L204)</sub>



- `(uint256 reason)`


---
### `SynthResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L211)</sub>



- `(bytes32 currencyKey, uint256 reason)`


---
### `SynthSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L210)</sub>



- `(bytes32 currencyKey, uint256 reason)`


---
### `SystemResumed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L202)</sub>



- `(uint256 reason)`


---
### `SystemSuspended`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/SystemStatus.sol#L201)</sub>



- `(uint256 reason)`

