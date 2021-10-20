# SynthetixStateWithLimitedSetup

## Description

**Source:** [contracts/SynthetixStateWithLimitedSetup.sol](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol)

## Variables

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L12)</sub>

**Type:** `contract IFeePool`

### `importedDebtAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L15)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L17)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _associatedContract)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Restricted Functions

### `importIssuerData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L38)</sub>

??? example "Details"

    **Signature**

    `importIssuerData(address[] accounts, uint256[] sUSDAmounts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L39)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlyDuringSetup](#onlyduringsetup)

### `setFeePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L29)</sub>

??? example "Details"

    **Signature**

    `setFeePool(contract IFeePool _feePool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FeePoolUpdated](#feepoolupdated)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L50)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Events

### `FeePoolUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.51.0/contracts/SynthetixStateWithLimitedSetup.sol#L98)</sub>

**Signature**: `FeePoolUpdated(address newFeePool)`
