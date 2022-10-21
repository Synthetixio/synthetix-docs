# Liquidator

## Description

**Source:** [contracts/Liquidator.sol](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol)

## Structs

### `LiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L26)</sub>

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `deadline` | `uint256` | TBA         |
| `caller`   | `address` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L40)</sub>

**Type:** `bytes32`

### `LIQUIDATION_CALLER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L44)</sub>

**Type:** `bytes32`

### `LIQUIDATION_DEADLINE`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L43)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L46)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `calculateAmountToFixCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L212)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToFixCollateral(uint256 debtBalance, uint256 collateral, uint256 penalty) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `flagReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L106)</sub>

??? example "Details"

    **Signature**

    `flagReward() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationCallerForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getLiquidationCallerForAccount(address account) view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLiquidationDeadlineForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L114)</sub>

??? example "Details"

    **Signature**

    `getLiquidationDeadlineForAccount(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationDeadlinePassed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L179)</sub>

??? example "Details"

    **Signature**

    `isLiquidationDeadlinePassed(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `isLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L127)</sub>

??? example "Details"

    **Signature**

    `isLiquidationOpen(address account, bool isSelfLiquidation) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L75)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidateReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L102)</sub>

??? example "Details"

    **Signature**

    `liquidateReward() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L161)</sub>

??? example "Details"

    **Signature**

    `liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 initialDebtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L110)</sub>

??? example "Details"

    **Signature**

    `liquidationCollateralRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L79)</sub>

??? example "Details"

    **Signature**

    `liquidationDelay() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationEscrowDuration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L87)</sub>

??? example "Details"

    **Signature**

    `liquidationEscrowDuration() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L91)</sub>

??? example "Details"

    **Signature**

    `liquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L83)</sub>

??? example "Details"

    **Signature**

    `liquidationRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L49)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `selfLiquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L98)</sub>

??? example "Details"

    **Signature**

    `selfLiquidationPenalty() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `removeAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L273)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L184)</sub>

??? example "Details"

    **Signature**

    `_deadlinePassed(uint256 deadline) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L235)</sub>

??? example "Details"

    **Signature**

    `_getKey(bytes32 _scope, address _account) pure returns (bytes32)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_getLiquidationEntryForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L228)</sub>

??? example "Details"

    **Signature**

    `_getLiquidationEntryForAccount(address account) view returns (struct Liquidator.LiquidationEntry _liquidation)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_hasEnoughSNXForRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L191)</sub>

??? example "Details"

    **Signature**

    `_hasEnoughSNXForRewards(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeLiquidationEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L309)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L297)</sub>

??? example "Details"

    **Signature**

    `_storeLiquidationEntry(address _account, uint256 _deadline, address _caller)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L71)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L67)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L59)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L63)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `checkAndRemoveAccountInLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L282)</sub>

??? example "Details"

    **Signature**

    `checkAndRemoveAccountInLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Account has no liquidation set")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L287)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

### `flagAccountForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L243)</sub>

??? example "Details"

    **Signature**

    `flagAccountForLiquidation(address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Liquidation ratio not set")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L246)

    * [require(..., "Liquidation delay not set")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L247)

    * [require(..., "Account already flagged for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L250)

    * [require(..., "Account issuance ratio is less than liquidation ratio")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L255)

    * [require(..., "not enough SNX for rewards")](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L262)

    **Modifiers**

    * [rateNotInvalid](#ratenotinvalid)

    **Emits**

    * [AccountFlaggedForLiquidation](#accountflaggedforliquidation)

## Modifiers

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L316)</sub>

### `rateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L321)</sub>

**Signature**: `rateNotInvalid(bytes32 currencyKey)`

## Events

### `AccountFlaggedForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L328)</sub>

**Signature**: `AccountFlaggedForLiquidation(address account, uint256 deadline)`

### `AccountRemovedFromLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.2/contracts/Liquidator.sol#L329)</sub>

**Signature**: `AccountRemovedFromLiquidation(address account, uint256 time)`
