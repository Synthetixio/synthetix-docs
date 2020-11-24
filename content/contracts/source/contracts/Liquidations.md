# Liquidations

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/Liquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Liquidations[Liquidations] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Structs

### `LiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L25)</sub>

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `deadline` | `uint256` | TBA         |
| `caller`   | `address` | TBA         |

## Constants

### `LIQUIDATION_CALLER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L50)</sub>

**Type:** `bytes32`

### `LIQUIDATION_DEADLINE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L49)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L52)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L145)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L104)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L127)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L109)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L84)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L100)</sub>

??? example "Details"

    **Signature**

    `liquidationCollateralRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L88)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationDelay() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L96)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationPenalty() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L92)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L198)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

## Internal Functions

### `_deadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L132)</sub>

??? example "Details"

    **Signature**

    `_deadlinePassed(uint256 deadline) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L164)</sub>

??? example "Details"

    **Signature**

    `_getKey(bytes32 _scope, address _account) returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getLiquidationEntryForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L157)</sub>

??? example "Details"

    **Signature**

    `_getLiquidationEntryForAccount(address account) returns (struct Liquidations.LiquidationEntry)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L233)</sub>

??? example "Details"

    **Signature**

    `_removeLiquidationEntry(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [AccountRemovedFromLiquidation](#accountremovedfromliquidation)

### `_storeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L223)</sub>

??? example "Details"

    **Signature**

    `_storeLiquidationEntry(address _account, uint256 _deadline, address _caller)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `eternalStorageLiquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L77)</sub>

??? example "Details"

    **Signature**

    `eternalStorageLiquidations() returns (contract EternalStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L72)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L68)</sub>

??? example "Details"

    **Signature**

    `issuer() returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L60)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L64)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L208)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Account has no liquidation set)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L213)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L172)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Liquidation ratio not set)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L175)

    * [require(..., Liquidation delay not set)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L176)

    * [require(..., Account already flagged for liquidation)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L179)

    * [require(..., Account issuance ratio is less than liquidation ratio)](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L184)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

    **Emits**

    * [AccountFlaggedForLiquidation](#accountflaggedforliquidation)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L243)</sub>

### `rateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L248)</sub>

**Signature**: `rateNotInvalid(bytes32 currencyKey)`

## Events

### `AccountFlaggedForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L255)</sub>

**Signature**: `AccountFlaggedForLiquidation(address account, uint256 deadline)`

### `AccountRemovedFromLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.33.1/contracts/Liquidations.sol#L256)</sub>

**Signature**: `AccountRemovedFromLiquidation(address account, uint256 time)`
