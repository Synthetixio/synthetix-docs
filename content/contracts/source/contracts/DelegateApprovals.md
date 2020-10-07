# DelegateApprovals

## Description

Implemented in [SIP 10: Upgrade Delegate Powers](https://sips.synthetix.io/sips/sip-10) & [SIP 14: Allow delegation of Synthetix Exchange function to another address](https://sips.synthetix.io/sips/sip-14)

This contract is used by [`FeePool`](FeePool.md), [`Synthetix`](Synthetix.md), to enable SNX holders (the delegator) to permit other addresses (the delegate) to perform actions on their befhalf including;

1. Claim fees & rewards for them,
2. Burn Synths on behalf or Burn to Target c-ratio on behalf
3. Issue or IssueMax Synths on behalf
4. Exchange Synths

In Synthetix this was intended to allow mobile or hot wallets such as metamask to claim fees for a cold storage wallet which can be done via the [delegatr mobile dapp](https://delegatr.synthetix.io/)

In principle it is generic, as the approver just marks a number of delegates as authorised to perform some action on their behalf, with no reference to what that action is, or who the delegates are.

[User guide to delegation](https://blog.synthetix.io/a-guide-to-delegation/)

**Source:** [contracts/DelegateApprovals.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    DelegateApprovals[DelegateApprovals] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![DelegateApprovals architecture graph](/img/graphs/DelegateApprovals-architecture.svg)
</centered-image>

??? example "Details"

    * [`FeePool`](FeePool.md): This contract allows the fee pool to delegate fee withdrawals.

    * [`Synthetix`](Synthetix.md): This contract allows Synthetix to delegate issuing Synths, Burning Synths and exchanging Synths.

## Constants

### `APPROVE_ALL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L17)</sub>

**Type:** `bytes32`

### `BURN_FOR_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L13)</sub>

**Type:** `bytes32`

### `CLAIM_FOR_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L15)</sub>

**Type:** `bytes32`

### `EXCHANGE_FOR_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L16)</sub>

**Type:** `bytes32`

### `ISSUE_FOR_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L14)</sub>

**Type:** `bytes32`

## Variables

### `eternalStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L28)</sub>

**Type:** `contract EternalStorage`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L30)</sub>

Initialises the inherited [`State`](State.md) instance.

??? example "Details"

    **Signature**

    `(address _owner, contract EternalStorage _eternalStorage)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `approvedAll`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L64)</sub>

??? example "Details"

    **Signature**

    `approvedAll(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `canBurnFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L48)</sub>

??? example "Details"

    **Signature**

    `canBurnFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canClaimFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L56)</sub>

??? example "Details"

    **Signature**

    `canClaimFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canExchangeFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L60)</sub>

??? example "Details"

    **Signature**

    `canExchangeFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canIssueFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L52)</sub>

??? example "Details"

    **Signature**

    `canIssueFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setEternalStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L153)</sub>

??? example "Details"

    **Signature**

    `setEternalStorage(contract EternalStorage _eternalStorage)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Can't set eternalStorage to address(0))](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L154)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EternalStorageUpdated](#eternalstorageupdated)

## Internal Functions

### `_checkApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L71)</sub>

??? example "Details"

    **Signature**

    `_checkApproval(bytes32 action, address authoriser, address delegate) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L39)</sub>

??? example "Details"

    **Signature**

    `_getKey(bytes32 _action, address _authoriser, address _delegate) returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_setApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_setApproval(bytes32 action, address authoriser, address delegate)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Can't delegate to address(0))](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L136)

    **Emits**

    * [Approval](#approval)

### `_withdrawApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_withdrawApproval(bytes32 action, address authoriser, address delegate)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

## External Functions

### `approveAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L84)</sub>

??? example "Details"

    **Signature**

    `approveAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L96)</sub>

??? example "Details"

    **Signature**

    `approveBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L114)</sub>

??? example "Details"

    **Signature**

    `approveClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L123)</sub>

??? example "Details"

    **Signature**

    `approveExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L105)</sub>

??? example "Details"

    **Signature**

    `approveIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L89)</sub>

??? example "Details"

    **Signature**

    `removeAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L100)</sub>

??? example "Details"

    **Signature**

    `removeBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L118)</sub>

??? example "Details"

    **Signature**

    `removeClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L127)</sub>

??? example "Details"

    **Signature**

    `removeExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L109)</sub>

??? example "Details"

    **Signature**

    `removeIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

## Events

### `Approval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L160)</sub>

The delegate was approved to act on the authoriser's behalf for the given action.

**Signature**: `Approval(address authoriser, address delegate, bytes32 action)`

### `EternalStorageUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L162)</sub>

The address of the eternal storage contract has changed.

**Signature**: `EternalStorageUpdated(address newEternalStorage)`

### `WithdrawApproval`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.0-beta/contracts/DelegateApprovals.sol#L161)</sub>

The delegate was disapproved to act on the authoriser's behalf.

**Signature**: `WithdrawApproval(address authoriser, address delegate, bytes32 action)`
