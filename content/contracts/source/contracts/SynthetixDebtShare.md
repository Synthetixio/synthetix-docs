# SynthetixDebtShare

## Description

**Source:** [contracts/SynthetixDebtShare.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol)

## Structs

### `PeriodBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L16)</sub>

| Field      | Type      | Description |
| ---------- | --------- | ----------- |
| `amount`   | `uint128` | TBA         |
| `periodId` | `uint128` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L21)</sub>

**Type:** `bytes32`

### `authorizedBrokers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L32)</sub>

**Type:** `mapping(address => bool)`

### `authorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L39)</sub>

**Type:** `mapping(address => bool)`

### `balances`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L47)</sub>

**Type:** `mapping(address => struct SynthetixDebtShare.PeriodBalance[])`

### `currentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L65)</sub>

**Type:** `uint128`

### `decimals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L59)</sub>

**Type:** `uint8`

### `isInitialized`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L70)</sub>

**Type:** `bool`

### `name`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L57)</sub>

**Type:** `string`

### `symbol`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L58)</sub>

**Type:** `string`

### `totalSupplyOnPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L54)</sub>

**Type:** `mapping(uint256 => uint256)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L72)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L132)</sub>

??? example "Details"

    **Signature**

    `allowance(address, address spender) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L189)</sub>

??? example "Details"

    **Signature**

    `approve(address, uint256) pure returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L88)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `balanceOfOnPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L98)</sub>

??? example "Details"

    **Signature**

    `balanceOfOnPeriod(address account, uint256 periodId) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "SynthetixDebtShare: not found in recent history")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L110)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L81)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `sharePercent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L118)</sub>

??? example "Details"

    **Signature**

    `sharePercent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `sharePercentOnPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L122)</sub>

??? example "Details"

    **Signature**

    `sharePercentOnPeriod(address account, uint256 periodId) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L114)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L193)</sub>

??? example "Details"

    **Signature**

    `transfer(address, uint256) pure returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

## Restricted Functions

### `addAuthorizedBroker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L142)</sub>

??? example "Details"

    **Signature**

    `addAuthorizedBroker(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ChangeAuthorizedBroker](#changeauthorizedbroker)

### `addAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L152)</sub>

??? example "Details"

    **Signature**

    `addAuthorizedToSnapshot(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ChangeAuthorizedToSnapshot](#changeauthorizedtosnapshot)

### `burnShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L179)</sub>

??? example "Details"

    **Signature**

    `burnShare(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "ERC20: burn from zero address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L180)

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

    **Emits**

    * [Transfer](#transfer)

    * [Burn](#burn)

### `finishSetup`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L235)</sub>

??? example "Details"

    **Signature**

    `finishSetup()`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `importAddresses`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L212)</sub>

??? example "Details"

    **Signature**

    `importAddresses(address[] accounts, uint256[] amounts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    * [onlySetup](#onlysetup)

### `mintShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L168)</sub>

??? example "Details"

    **Signature**

    `mintShare(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "ERC20: mint to the zero address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L169)

    **Modifiers**

    * [onlyIssuer](#onlyissuer)

    **Emits**

    * [Transfer](#transfer)

    * [Mint](#mint)

### `removeAuthorizedBroker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L147)</sub>

??? example "Details"

    **Signature**

    `removeAuthorizedBroker(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ChangeAuthorizedBroker](#changeauthorizedbroker)

### `removeAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L157)</sub>

??? example "Details"

    **Signature**

    `removeAuthorizedToSnapshot(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ChangeAuthorizedToSnapshot](#changeauthorizedtosnapshot)

### `takeSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L162)</sub>

??? example "Details"

    **Signature**

    `takeSnapshot(uint128 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "period id must always increase")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L163)

    **Modifiers**

    * [onlyAuthorizedToSnapshot](#onlyauthorizedtosnapshot)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L197)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 amount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "ERC20: send to the zero address")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L202)

    **Modifiers**

    * [onlyAuthorizedBrokers](#onlyauthorizedbrokers)

    **Emits**

    * [Transfer](#transfer)

## Internal Functions

### `_deductBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L256)</sub>

??? example "Details"

    **Signature**

    `_deductBalance(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "SynthetixDebtShare: account has no share to deduct")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L259)

### `_increaseBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L240)</sub>

??? example "Details"

    **Signature**

    `_increaseBalance(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

## Modifiers

### `onlyAuthorizedBrokers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L285)</sub>

### `onlyAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L277)</sub>

### `onlyIssuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L272)</sub>

### `onlySetup`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L290)</sub>

## Events

### `Burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L297)</sub>

**Signature**: `Burn(address account, uint256 amount)`

### `ChangeAuthorizedBroker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L300)</sub>

**Signature**: `ChangeAuthorizedBroker(address authorizedBroker, bool authorized)`

### `ChangeAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L301)</sub>

**Signature**: `ChangeAuthorizedToSnapshot(address authorizedToSnapshot, bool authorized)`

### `Mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L296)</sub>

**Signature**: `Mint(address account, uint256 amount)`

### `Transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/SynthetixDebtShare.sol#L298)</sub>

**Signature**: `Transfer(address from, address to, uint256 value)`
