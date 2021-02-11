# Liquidations

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/Liquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol)

## Structs

### `LiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L25)</sub>

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `deadline` | `uint256` | TBA         |
| `caller`   | `address` | TBA         |

## Variables

### `LIQUIDATION_CALLER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L42)</sub>

**Type:** `bytes32`

### `LIQUIDATION_DEADLINE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L41)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L44)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L193)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

## Internal Functions

### `_deadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L127)</sub>

??? example "Details"

    **Signature**

    `_deadlinePassed(uint256 deadline) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_getKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L159)</sub>

??? example "Details"

    **Signature**

    `_getKey(bytes32 _scope, address _account) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_getLiquidationEntryForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L152)</sub>

??? example "Details"

    **Signature**

    `_getLiquidationEntryForAccount(address account) view returns (struct Liquidations.LiquidationEntry _liquidation)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_removeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L228)</sub>

??? example "Details"

    **Signature**

    `_removeLiquidationEntry(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Emits**

    * [AccountRemovedFromLiquidation](#accountremovedfromliquidation)

### `_storeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L218)</sub>

??? example "Details"

    **Signature**

    `_storeLiquidationEntry(address _account, uint256 _deadline, address _caller)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `eternalStorageLiquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L75)</sub>

??? example "Details"

    **Signature**

    `eternalStorageLiquidations() view returns (contract EternalStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L66)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L58)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L62)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L140)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L203)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Account has no liquidation set")](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L208)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L167)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Liquidation ratio not set")](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L170)

    * [require(..., "Liquidation delay not set")](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L171)

    * [require(..., "Account already flagged for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L174)

    * [require(..., "Account issuance ratio is less than liquidation ratio")](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L179)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

    **Emits**

    * [AccountFlaggedForLiquidation](#accountflaggedforliquidation)

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L122)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L104)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L79)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L95)</sub>

??? example "Details"

    **Signature**

    `liquidationCollateralRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L83)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L91)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L87)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L47)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L238)</sub>

### `rateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L243)</sub>

**Signature**: `rateNotInvalid(bytes32 currencyKey)`

## Events

### `AccountFlaggedForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L250)</sub>

**Signature**: `AccountFlaggedForLiquidation(address account, uint256 deadline)`

### `AccountRemovedFromLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.0-alpha/contracts/Liquidations.sol#L251)</sub>

**Signature**: `AccountRemovedFromLiquidation(address account, uint256 time)`
