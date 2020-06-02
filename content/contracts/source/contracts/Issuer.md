# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Issuer[Issuer] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![Synthetix architture graph](/img/graphs/Issuer-architecture.svg)
</centered-image>

??? example "Details"

    - [`FeePool`](FeePool.md): The Synthetix contract remits exchange fees as sUSD to the fee pool, and also uses it to keep track of historical issuance records for each issuer.
    - [`SynthetixState`](SynthetixState.md): This state contract stores the debt ledger and the current issuance information for synth issuers.

<!--
If any, see:

<centered-image>
    ![Synthetix architture graph](/img/graphs/Synthetix-architecture.svg)
</centered-image>
--->

## Constants

### `LAST_ISSUE_EVENT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L26)</sub>

**Type:** `bytes32`

### `MAX_MINIMUM_STAKING_TIME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L29)</sub>

**Type:** `uint256`

## Variables

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L31)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L51)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L83)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L87)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L170)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L161)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L166)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L200)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L195)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L196)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L134)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L119)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L120)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L126)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L129)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L107)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L112)

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L115)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `setMinimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., stake time exceed maximum 1 week)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L96)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L265)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L252)</sub>

??? example "Details"

    **Signature**

    `_appendAccountIssuanceRecord(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L175)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address from, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Minimum stake time not reached)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L176)

    * [require(..., No debt to forgive)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L184)

### `_burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L206)</sub>

??? example "Details"

    **Signature**

    `_burnSynthsToTarget(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., No debt to forgive)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L210)

### `_internalBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L223)</sub>

??? example "Details"

    **Signature**

    `_internalBurnSynths(address from, uint256 amount, uint256 existingDebt, uint256 totalSystemValue)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_internalIssueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L142)</sub>

??? example "Details"

    **Signature**

    `_internalIssueSynths(address from, uint256 amount, uint256 existingDebt, uint256 totalSystemDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L313)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L102)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L70)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L58)</sub>

??? example "Details"

    **Signature**

    `exchanger()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L66)</sub>

??? example "Details"

    **Signature**

    `feePool()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuanceEternalStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L74)</sub>

??? example "Details"

    **Signature**

    `issuanceEternalStorage()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L54)</sub>

??? example "Details"

    **Signature**

    `synthetix()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L62)</sub>

??? example "Details"

    **Signature**

    `synthetixState()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L359)</sub>

## Events

### `MinimumStakeTimeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Issuer.sol#L366)</sub>

**Signature**: `MinimumStakeTimeUpdated(uint256 minimumStakeTime)`
