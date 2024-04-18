# ISynthetixDebtShare

## Description

**Source:** [contracts/interfaces/ISynthetixDebtShare.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol)

## Views

### `allowance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L9)</sub>

??? example "Details"

    **Signature**

    `allowance(address account, address spender) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `approve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L29)</sub>

??? example "Details"

    **Signature**

    `approve(address, uint256) pure returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

### `balanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L11)</sub>

??? example "Details"

    **Signature**

    `balanceOf(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `balanceOfOnPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L13)</sub>

??? example "Details"

    **Signature**

    `balanceOfOnPeriod(address account, uint256 periodId) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L7)</sub>

??? example "Details"

    **Signature**

    `currentPeriodId() view returns (uint128)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `sharePercent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L17)</sub>

??? example "Details"

    **Signature**

    `sharePercent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `sharePercentOnPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L19)</sub>

??? example "Details"

    **Signature**

    `sharePercentOnPeriod(address account, uint256 periodId) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L15)</sub>

??? example "Details"

    **Signature**

    `totalSupply() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L31)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 amount) pure returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

## External Functions

### `addAuthorizedBroker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L39)</sub>

??? example "Details"

    **Signature**

    `addAuthorizedBroker(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `addAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L43)</sub>

??? example "Details"

    **Signature**

    `addAuthorizedToSnapshot(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `burnShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L27)</sub>

??? example "Details"

    **Signature**

    `burnShare(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `mintShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L25)</sub>

??? example "Details"

    **Signature**

    `mintShare(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeAuthorizedBroker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L41)</sub>

??? example "Details"

    **Signature**

    `removeAuthorizedBroker(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `removeAuthorizedToSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L45)</sub>

??? example "Details"

    **Signature**

    `removeAuthorizedToSnapshot(address target)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `takeSnapshot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L23)</sub>

??? example "Details"

    **Signature**

    `takeSnapshot(uint128 id)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/ISynthetixDebtShare.sol#L33)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 amount) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    ``
