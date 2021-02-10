# SynthetixStateWithLimitedSetup

## Description

**Source:** [contracts/SynthetixStateWithLimitedSetup.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol)

## Variables

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L13)</sub>

**Type:** `contract IFeePool`

### `importedDebtAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L16)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L18)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `importIssuerData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L39)</sub>

??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] sUSDAmounts)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L40)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L30)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePoolUpdated](#feepoolupdated)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L51)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## Events

### `FeePoolUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0-sccp-77-defi-rebalance/contracts/SynthetixStateWithLimitedSetup.sol#L99)</sub>

**Signature**: `FeePoolUpdated(address newFeePool)`
