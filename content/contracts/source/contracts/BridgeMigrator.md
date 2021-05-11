# BridgeMigrator

## Description

**Source:** [contracts/BridgeMigrator.sol](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol)

## Variables

### `deployer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L31)</sub>

**Type:** `address`

### `migratedBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L33)</sub>

**Type:** `uint256`

### `newBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L27)</sub>

**Type:** `address`

### `newEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L28)</sub>

**Type:** `address`

### `oldBridge`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L26)</sub>

**Type:** `address`

### `pdao`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L30)</sub>

**Type:** `address`

### `snx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L24)</sub>

**Type:** `contract IERC20`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L35)</sub>

??? example "Details"

    **Signature**

    `constructor(address _newBridge, address _newEscrow, string _network)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Internal Functions

### `_migrateSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L110)</sub>

??? example "Details"

    **Signature**

    `_migrateSNX()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_provideAllowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L100)</sub>

??? example "Details"

    **Signature**

    `_provideAllowance()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected final new bridge allowance")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L103)

### `_relinquishOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L123)</sub>

??? example "Details"

    **Signature**

    `_relinquishOwnership()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Failed to relinquish old bridge ownership")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L127)

    * [require(..., "Failed to relinquish new escrow ownership")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L128)

### `_takeOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L82)</sub>

??? example "Details"

    **Signature**

    `_takeOwnership()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected old bridge owner")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L83)

    * [require(..., "Unexpected new escrow owner")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L84)

    * [require(..., "Unable to take old bridge ownership")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L89)

    * [require(..., "Unable to take new escrow ownership")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L90)

### `_validateBalancesAfter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L118)</sub>

??? example "Details"

    **Signature**

    `_validateBalancesAfter()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected final old bridge balance")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L119)

    * [require(..., "Unexpected final new escrow balance")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L120)

### `_validateBalancesBefore`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L93)</sub>

??? example "Details"

    **Signature**

    `_validateBalancesBefore()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected initial old bridge balance")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L94)

    * [require(..., "Unexpected initial new escrow balance")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L95)

### `_validateStateAfter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L114)</sub>

??? example "Details"

    **Signature**

    `_validateStateAfter()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected final old bridge state")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L115)

### `_validateStateBefore`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L106)</sub>

??? example "Details"

    **Signature**

    `_validateStateBefore()`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Unexpected initial old bridge state")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L107)

## External Functions

### `execute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L62)</sub>

??? example "Details"

    **Signature**

    `execute()`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Already migrated")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L63)

    * [require(..., "Only deployer may execute")](https://github.com/Synthetixio/synthetix/tree/v2.44.0/contracts/BridgeMigrator.sol#L64)
