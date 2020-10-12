# TradingRewards

## Description

This contract is an implementation of [SIP-63](https://sips.synthetix.io/sips/sip-63). It records exchange fees paid by users into periods, which, when closed with a given amount of SNX rewards, allows participants to claim such rewards pro-rata, according to the amount of fees recorded for them in such period.

The recording of such fees can be enabled by the ProtocolDAO, via [SystemSettings](https://github.com/Synthetixio/synthetix/blob/v2.27.2/contracts/SystemSettings.sol#L129).

**Source:** [contracts/TradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`
- [SafeERC20](/contracts/source/libraries/SafeERC20) for `IERC20`

### Inheritance Graph

```mermaid
graph TD
    TradingRewards[TradingRewards] --> Pausable[Pausable]
    TradingRewards[TradingRewards] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Structs

### `Period`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L32)</sub>

| Field                       | Type                          | Description                                                                                                                |
| --------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `isFinalized`               | `bool`                        | A period needs to be finalized for participants to be able to claim rewards.                                               |
| `recordedFees`              | `uint256`                     | Total recorded fees for the period.                                                                                        |
| `totalRewards`              | `uint256`                     | Total SNX rewards assigned to the period when it's closed.                                                                 |
| `availableRewards`          | `uint256`                     | Remaining SNX rewards after `totalRewards` have been assigned. Diminishes as participants claim their rewards.             |
| `unaccountedFeesForAccount` | `mapping(address => uint256)` | Records fees for each participant during the period. Increases when fees are recorded, decreases when rewards are claimed. |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L51)</sub>

??? example "Details"

    **Signature**

    `(address owner, address periodController, address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid period controller)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L56)

## Views

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L71)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L115)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L119)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L87)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L107)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L83)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L91)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L95)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L99)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L103)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L79)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L111)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L75)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L191)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Insufficient free rewards)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L194)

    **Modifiers**

    * [onlyPeriodController](#onlyperiodcontroller)

    **Emits**

    * [PeriodFinalizedWithRewards](#periodfinalizedwithrewards)

    * [NewPeriodStarted](#newperiodstarted)

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L180)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

    **Emits**

    * [ExchangeFeeRecorded](#exchangefeerecorded)

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L249)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot recover from active)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L251)

    * [require(..., No rewards available to recover)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L254)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AssignedRewardTokensRecovered](#assignedrewardtokensrecovered)

### `recoverEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L212)</sub>

??? example "Details"

    **Signature**

    `recoverEther(address payable recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [EtherRecovered](#etherrecovered)

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L221)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must use another function)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L223)

    * [require(..., No tokens to recover)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L228)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TokensRecovered](#tokensrecovered)

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L235)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., No tokens to recover)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L239)

    * [require(..., No tokens to recover)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L242)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [UnassignedRewardTokensRecovered](#unassignedrewardtokensrecovered)

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L272)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Invalid period controller)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L273)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PeriodControllerChanged](#periodcontrollerchanged)

## Internal Functions

### `_calculateRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_calculateRewards(address account, uint256 periodID) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_claimRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L161)</sub>

??? example "Details"

    **Signature**

    `_claimRewards(address account, uint256 periodID)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Period is not finalized)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L163)

    * [require(..., No rewards available)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L166)

    **Emits**

    * [RewardsClaimed](#rewardsclaimed)

### `_validateRecoverAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L266)</sub>

??? example "Details"

    **Signature**

    `_validateRecoverAddress(address recoverAddress)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L67)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L63)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L148)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L152)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

## Modifiers

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L287)</sub>

### `onlyPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L282)</sub>

## Events

### `AssignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L301)</sub>

**Signature**: `AssignedRewardTokensRecovered(address recoverAddress, uint256 amount, uint256 periodID)`

### `EtherRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L299)</sub>

**Signature**: `EtherRecovered(address recoverAddress, uint256 amount)`

### `ExchangeFeeRecorded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L294)</sub>

**Signature**: `ExchangeFeeRecorded(address account, uint256 amount, uint256 periodID)`

### `NewPeriodStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L296)</sub>

**Signature**: `NewPeriodStarted(uint256 periodID)`

### `PeriodControllerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L302)</sub>

**Signature**: `PeriodControllerChanged(address newPeriodController)`

### `PeriodFinalizedWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L297)</sub>

**Signature**: `PeriodFinalizedWithRewards(uint256 periodID, uint256 rewards)`

### `RewardsClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L295)</sub>

**Signature**: `RewardsClaimed(address account, uint256 amount, uint256 periodID)`

### `TokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L298)</sub>

**Signature**: `TokensRecovered(address tokenAddress, address recoverAddress, uint256 amount)`

### `UnassignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/TradingRewards.sol#L300)</sub>

**Signature**: `UnassignedRewardTokensRecovered(address recoverAddress, uint256 amount)`
