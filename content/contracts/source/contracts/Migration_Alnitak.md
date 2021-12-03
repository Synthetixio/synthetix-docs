# Migration_Alnitak

## Description

**Source:** [contracts/migrations/Migration_Alnitak.sol](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol)

## Variables

### `OWNER`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L21)</sub>

**Type:** `address`

### `addressresolver_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L24)</sub>

**Type:** `contract AddressResolver`

### `exchangestate_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L30)</sub>

**Type:** `contract ExchangeState`

### `proxyerc20_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L26)</sub>

**Type:** `contract ProxyERC20`

### `proxysynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L28)</sub>

**Type:** `contract Proxy`

### `rewardescrow_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L36)</sub>

**Type:** `contract RewardEscrow`

### `rewardsdistribution_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L38)</sub>

**Type:** `contract RewardsDistribution`

### `systemstatus_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L32)</sub>

**Type:** `contract SystemStatus`

### `tokenstatesynthetix_i`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L34)</sub>

**Type:** `contract LegacyTokenState`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L41)</sub>

??? example "Details"

    **Signature**

    `constructor()`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `contractsRequiringOwnership`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L43)</sub>

??? example "Details"

    **Signature**

    `contractsRequiringOwnership() pure returns (address[] contracts)`

    **Visibility**

    `external`

    **State Mutability**

    `pure`

## Restricted Functions

### `migrate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L55)</sub>

??? example "Details"

    **Signature**

    `migrate(address currentOwner)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Only the assigned owner can be re-assigned when complete")](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L56)

    * [require(..., "Invalid contract supplied for Synthetix")](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L64)

    * [require(..., "Invalid contract supplied for Exchanger")](https://github.com/Synthetixio/synthetix/tree/v2.55.0-alpha/contracts/migrations/Migration_Alnitak.sol#L68)

    **Modifiers**

    * [onlyDeployer](#onlydeployer)
