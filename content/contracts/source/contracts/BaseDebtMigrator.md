# BaseDebtMigrator

## Description

**Source:** [contracts/BaseDebtMigrator.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L45)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L27)</sub>

??? example "Details"

    **Signature**

    `CONTRACT_NAME() pure returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `pure`

### `debtTransferReceived`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L83)</sub>

??? example "Details"

    **Signature**

    `debtTransferReceived() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtTransferSent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L77)</sub>

??? example "Details"

    **Signature**

    `debtTransferSent() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L65)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Internal Functions

### `_incrementDebtTransferCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L89)</sub>

??? example "Details"

    **Signature**

    `_incrementDebtTransferCounter(bytes32 group, uint256 debtShares)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L49)</sub>

??? example "Details"

    **Signature**

    `_issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_messenger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L53)</sub>

??? example "Details"

    **Signature**

    `_messenger() view returns (contract iAbs_BaseCrossDomainMessenger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L57)</sub>

??? example "Details"

    **Signature**

    `_rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/BaseDebtMigrator.sol#L61)</sub>

??? example "Details"

    **Signature**

    `_synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`
