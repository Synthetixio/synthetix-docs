# IDelegateApprovals

## Description

**Source:** [contracts/interfaces/IDelegateApprovals.sol](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol)

## Views

### `canBurnFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L6)</sub>

??? example "Details"

    **Signature**

    `canBurnFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canClaimFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L10)</sub>

??? example "Details"

    **Signature**

    `canClaimFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canExchangeFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L12)</sub>

??? example "Details"

    **Signature**

    `canExchangeFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canIssueFor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L8)</sub>

??? example "Details"

    **Signature**

    `canIssueFor(address authoriser, address delegate) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `approveAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L15)</sub>

??? example "Details"

    **Signature**

    `approveAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L19)</sub>

??? example "Details"

    **Signature**

    `approveBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L27)</sub>

??? example "Details"

    **Signature**

    `approveClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L31)</sub>

??? example "Details"

    **Signature**

    `approveExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `approveIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L23)</sub>

??? example "Details"

    **Signature**

    `approveIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeAllDelegatePowers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L17)</sub>

??? example "Details"

    **Signature**

    `removeAllDelegatePowers(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L21)</sub>

??? example "Details"

    **Signature**

    `removeBurnOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeClaimOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L29)</sub>

??? example "Details"

    **Signature**

    `removeClaimOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeExchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L33)</sub>

??? example "Details"

    **Signature**

    `removeExchangeOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `removeIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.26.1-alpha/contracts/interfaces/IDelegateApprovals.sol#L25)</sub>

??? example "Details"

    **Signature**

    `removeIssueOnBehalf(address delegate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
