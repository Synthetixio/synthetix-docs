# TradingRewards

## Description

This contract is an implementation of [SIP-63](https://sips.synthetix.io/sips/sip-63). It records exchange fees paid by users into periods, which, when closed with a given amount of SNX rewards, allows participants to claim such rewards pro-rata, according to the amount of fees recorded for them in such period.

The recording of such fees can be enabled by the ProtocolDAO, via [SystemSettings](https://github.com/Synthetixio/synthetix/blob/v2.27.2/contracts/SystemSettings.sol#L129).

**Source:** [contracts/TradingRewards.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol)

## Structs

### `Period`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L33)</sub>

| Field                       | Type                          | Description                                                                                                                |
| --------------------------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `isFinalized`               | `bool`                        | A period needs to be finalized for participants to be able to claim rewards.                                               |
| `recordedFees`              | `uint256`                     | Total recorded fees for the period.                                                                                        |
| `totalRewards`              | `uint256`                     | Total SNX rewards assigned to the period when it's closed.                                                                 |
| `availableRewards`          | `uint256`                     | Remaining SNX rewards after `totalRewards` have been assigned. Diminishes as participants claim their rewards.             |
| `unaccountedFeesForAccount` | `mapping(address => uint256)` | Records fees for each participant during the period. Increases when fees are recorded, decreases when rewards are claimed. |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L50)</sub>

??? example "Details"

    **Signature**

    `constructor(address owner, address periodController, address resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Invalid period controller")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L55)

## Restricted Functions

### `closeCurrentPeriodWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L196)</sub>

??? example "Details"

    **Signature**

    `closeCurrentPeriodWithRewards(uint256 rewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Insufficient free rewards")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L199)

    **Modifiers**

    * [onlyPeriodController](#onlyperiodcontroller)

    **Emits**

    * [PeriodFinalizedWithRewards](#periodfinalizedwithrewards)

    * [NewPeriodStarted](#newperiodstarted)

### `recordExchangeFeeForAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L185)</sub>

??? example "Details"

    **Signature**

    `recordExchangeFeeForAccount(uint256 usdFeeAmount, address account)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

    **Emits**

    * [ExchangeFeeRecorded](#exchangefeerecorded)

### `recoverAssignedRewardTokensAndDestroyPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L244)</sub>

??? example "Details"

    **Signature**

    `recoverAssignedRewardTokensAndDestroyPeriod(address recoverAddress, uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot recover from active")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L246)

    * [require(..., "No rewards available to recover")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L249)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AssignedRewardTokensRecovered](#assignedrewardtokensrecovered)

### `recoverTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L216)</sub>

??? example "Details"

    **Signature**

    `recoverTokens(address tokenAddress, address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must use another function")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L218)

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L223)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [TokensRecovered](#tokensrecovered)

### `recoverUnassignedRewardTokens`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L230)</sub>

??? example "Details"

    **Signature**

    `recoverUnassignedRewardTokens(address recoverAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L234)

    * [require(..., "No tokens to recover")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L237)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [UnassignedRewardTokensRecovered](#unassignedrewardtokensrecovered)

### `setPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L267)</sub>

??? example "Details"

    **Signature**

    `setPeriodController(address newPeriodController)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Invalid period controller")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L268)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [PeriodControllerChanged](#periodcontrollerchanged)

## Internal Functions

### `_calculateRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_calculateRewards(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_claimRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L166)</sub>

??? example "Details"

    **Signature**

    `_claimRewards(address account, uint256 periodID)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Period is not finalized")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L168)

    * [require(..., "No rewards available")](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L171)

    **Emits**

    * [RewardsClaimed](#rewardsclaimed)

### `_validateRecoverAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L261)</sub>

??? example "Details"

    **Signature**

    `_validateRecoverAddress(address recoverAddress) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L72)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L68)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `claimRewardsForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L153)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriod(uint256 periodID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

### `claimRewardsForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L157)</sub>

??? example "Details"

    **Signature**

    `claimRewardsForPeriods(uint256[] periodIDs)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [notPaused](#notpaused)

### `getAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L120)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getAvailableRewardsForAccountForPeriods`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L124)</sub>

??? example "Details"

    **Signature**

    `getAvailableRewardsForAccountForPeriods(address account, uint256[] periodIDs) view returns (uint256 totalRewards)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getCurrentPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L92)</sub>

??? example "Details"

    **Signature**

    `getCurrentPeriod() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodAvailableRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L112)</sub>

??? example "Details"

    **Signature**

    `getPeriodAvailableRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L88)</sub>

??? example "Details"

    **Signature**

    `getPeriodController() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L96)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsClaimable(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodIsFinalized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L100)</sub>

??? example "Details"

    **Signature**

    `getPeriodIsFinalized(uint256 periodID) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodRecordedFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L104)</sub>

??? example "Details"

    **Signature**

    `getPeriodRecordedFees(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getPeriodTotalRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L108)</sub>

??? example "Details"

    **Signature**

    `getPeriodTotalRewards(uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getRewardsToken`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L84)</sub>

??? example "Details"

    **Signature**

    `getRewardsToken() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnaccountedFeesForAccountForPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L116)</sub>

??? example "Details"

    **Signature**

    `getUnaccountedFeesForAccountForPeriod(address account, uint256 periodID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getUnassignedRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L80)</sub>

??? example "Details"

    **Signature**

    `getUnassignedRewards() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L62)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L282)</sub>

### `onlyPeriodController`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L277)</sub>

## Events

### `AssignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L295)</sub>

**Signature**: `AssignedRewardTokensRecovered(address recoverAddress, uint256 amount, uint256 periodID)`

### `ExchangeFeeRecorded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L289)</sub>

**Signature**: `ExchangeFeeRecorded(address account, uint256 amount, uint256 periodID)`

### `NewPeriodStarted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L291)</sub>

**Signature**: `NewPeriodStarted(uint256 periodID)`

### `PeriodControllerChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L296)</sub>

**Signature**: `PeriodControllerChanged(address newPeriodController)`

### `PeriodFinalizedWithRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L292)</sub>

**Signature**: `PeriodFinalizedWithRewards(uint256 periodID, uint256 rewards)`

### `RewardsClaimed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L290)</sub>

**Signature**: `RewardsClaimed(address account, uint256 amount, uint256 periodID)`

### `TokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L293)</sub>

**Signature**: `TokensRecovered(address tokenAddress, address recoverAddress, uint256 amount)`

### `UnassignedRewardTokensRecovered`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.3/contracts/TradingRewards.sol#L294)</sub>

**Signature**: `UnassignedRewardTokensRecovered(address recoverAddress, uint256 amount)`
