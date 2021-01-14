# IDelegateApprovals

## Description

**Source:** [contracts/interfaces/IDelegateApprovals.sol](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol)

## Views

### `canBurnFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L7)</sub>

??? example "Details"

    **Signature**

    `canBurnFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canClaimFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L11)</sub>

??? example "Details"

    **Signature**

    `canClaimFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canExchangeFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L13)</sub>

??? example "Details"

    **Signature**

    `canExchangeFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canIssueFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L9)</sub>

??? example "Details"

    **Signature**

    `canIssueFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `approveAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L16)</sub>

??? example "Details"

    **Signature**

    `approveAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L20)</sub>

??? example "Details"

    **Signature**

    `approveBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L28)</sub>

??? example "Details"

    **Signature**

    `approveClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L32)</sub>

??? example "Details"

    **Signature**

    `approveExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L24)</sub>

??? example "Details"

    **Signature**

    `approveIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L18)</sub>

??? example "Details"

    **Signature**

    `removeAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L22)</sub>

??? example "Details"

    **Signature**

    `removeBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L30)</sub>

??? example "Details"

    **Signature**

    `removeClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L34)</sub>

??? example "Details"

    **Signature**

    `removeExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.36.0-alpha/contracts/interfaces/IDelegateApprovals.sol#L26)</sub>

??? example "Details"

    **Signature**

    `removeIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
