# TradingRewards

## Description

This contract is an implementation of [SIP-63](https://sips.synthetix.io/sips/sip-63). It records exchange fees paid by users into periods, which, when closed with a given amount of SNX rewards, allows participants to claim such rewards pro-rata, according to the amount of fees recorded for them in such period.

The recording of such fees can be enabled by the ProtocolDAO, via [SystemSettings](https://github.com/Synthetixio/synthetix/blob/v2.27.2/contracts/SystemSettings.sol#L129).

**Source:** [contracts/TradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol)

## Structs

### `Period`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L31)</sub>

| Field                       | Type                          | Description                                                                                                                |
| --------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `isFinalized`               | `bool`                        | A period needs to be finalized for participants to be able to claim rewards.                                               |
| `recordedFees`              | `uint256`                     | Total recorded fees for the period.                                                                                        |
| `totalRewards`              | `uint256`                     | Total SNX rewards assigned to the period when it's closed.                                                                 |
| `availableRewards`          | `uint256`                     | Remaining SNX rewards after `totalRewards` have been assigned. Diminishes as participants claim their rewards.             |
| `unaccountedFeesForAccount` | `mapping(address => uint256)` | Records fees for each participant during the period. Increases when fees are recorded, decreases when rewards are claimed. |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L48)</sub>

??? example "Details"

    **Signature**

    `constructor(address owner, address periodController, address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid period controller")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L53)

## Views

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L74)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L118)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L122)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) view returns (uint256 totalRewards)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L90)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L110)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L86)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L94)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L98)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L102)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L106)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L82)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L114)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L78)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L60)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L194)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Insufficient free rewards")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L197)

    **Modifiers**

    * [onlyPeriodController](#onlyperiodcontroller)

    **Emits**

    * [PeriodFinalizedWithRewards](#periodfinalizedwithrewards)

    * [NewPeriodStarted](#newperiodstarted)

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L183)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

    **Emits**

    * [ExchangeFeeRecorded](#exchangefeerecorded)

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L242)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot recover from active")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L244)

    * [require(..., "No rewards available to recover")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L247)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AssignedRewardTokensRecovered](#assignedrewardtokensrecovered)

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L214)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must use another function")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L216)

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L221)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TokensRecovered](#tokensrecovered)

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L228)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L232)

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L235)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [UnassignedRewardTokensRecovered](#unassignedrewardtokensrecovered)

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L265)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid period controller")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L266)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PeriodControllerChanged](#periodcontrollerchanged)

## Internal Functions

### `_calculateRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L134)</sub>

??? example "Details"

    **Signature**

    `_calculateRewards(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_claimRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L164)</sub>

??? example "Details"

    **Signature**

    `_claimRewards(address account, uint256 periodID)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Period is not finalized")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L166)

    * [require(..., "No rewards available")](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L169)

    **Emits**

    * [RewardsClaimed](#rewardsclaimed)

### `_validateRecoverAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L259)</sub>

??? example "Details"

    **Signature**

    `_validateRecoverAddress(address recoverAddress) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L70)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L66)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L151)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L155)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

## Modifiers

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L280)</sub>

### `onlyPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L275)</sub>

## Events

### `AssignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L293)</sub>

**Signature**: `AssignedRewardTokensRecovered(address recoverAddress, uint256 amount, uint256 periodID)`

### `ExchangeFeeRecorded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L287)</sub>

**Signature**: `ExchangeFeeRecorded(address account, uint256 amount, uint256 periodID)`

### `NewPeriodStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L289)</sub>

**Signature**: `NewPeriodStarted(uint256 periodID)`

### `PeriodControllerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L294)</sub>

**Signature**: `PeriodControllerChanged(address newPeriodController)`

### `PeriodFinalizedWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L290)</sub>

**Signature**: `PeriodFinalizedWithRewards(uint256 periodID, uint256 rewards)`

### `RewardsClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L288)</sub>

**Signature**: `RewardsClaimed(address account, uint256 amount, uint256 periodID)`

### `TokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L291)</sub>

**Signature**: `TokensRecovered(address tokenAddress, address recoverAddress, uint256 amount)`

### `UnassignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.53.0/contracts/TradingRewards.sol#L292)</sub>

**Signature**: `UnassignedRewardTokensRecovered(address recoverAddress, uint256 amount)`
