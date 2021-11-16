# Liquidations

## Description

!!! Info "Documentation Pending"

    This contract documentation is missing some descriptions.

**Source:** [contracts/Liquidations.sol](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol)

## Structs

### `LiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L24)</sub>

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `deadline` | `uint256` | TBA         |
| `caller`   | `address` | TBA         |

## Variables

### `LIQUIDATION_CALLER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L41)</sub>

**Type:** `bytes32`

### `LIQUIDATION_DEADLINE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L40)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L43)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L139)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L121)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isOpenForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L103)</sub>

??? example "Details"

    **Signature**

    `isOpenForLiquidation(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L78)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L94)</sub>

??? example "Details"

    **Signature**

    `liquidationCollateralRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L82)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L90)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L86)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L46)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L192)</sub>

??? example "Details"

    **Signature**

    `removeAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

## Internal Functions

### `_deadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L126)</sub>

??? example "Details"

    **Signature**

    `_deadlinePassed(uint256 deadline) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L158)</sub>

??? example "Details"

    **Signature**

    `_getKey(bytes32 _scope, address _account) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getLiquidationEntryForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L151)</sub>

??? example "Details"

    **Signature**

    `_getLiquidationEntryForAccount(address account) view returns (struct Liquidations.LiquidationEntry _liquidation)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L227)</sub>

??? example "Details"

    **Signature**

    `_removeLiquidationEntry(address _account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [AccountRemovedFromLiquidation](#accountremovedfromliquidation)

### `_storeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L217)</sub>

??? example "Details"

    **Signature**

    `_storeLiquidationEntry(address _account, uint256 _deadline, address _caller)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `eternalStorageLiquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L74)</sub>

??? example "Details"

    **Signature**

    `eternalStorageLiquidations() view returns (contract EternalStorage)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L69)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L65)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L57)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L61)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L202)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account has no liquidation set")](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L207)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L166)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Liquidation ratio not set")](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L169)

    * [require(..., "Liquidation delay not set")](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L170)

    * [require(..., "Account already flagged for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L173)

    * [require(..., "Account issuance ratio is less than liquidation ratio")](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L178)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

    **Emits**

    * [AccountFlaggedForLiquidation](#accountflaggedforliquidation)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L237)</sub>

### `rateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L242)</sub>

**Signature**: `rateNotInvalid(bytes32 currencyKey)`

## Events

### `AccountFlaggedForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L249)</sub>

**Signature**: `AccountFlaggedForLiquidation(address account, uint256 deadline)`

### `AccountRemovedFromLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0-alpha/contracts/Liquidations.sol#L250)</sub>

**Signature**: `AccountRemovedFromLiquidation(address account, uint256 time)`
