# DirectIntegrationManager

## Description

**Source:** [contracts/DirectIntegrationManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol)

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L34)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getExchangeParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L44)</sub>

??? example "Details"

    **Signature**

    `getExchangeParameters(address integration, bytes32 currencyKey) view returns (struct IDirectIntegrationManager.ParameterIntegrationSettings overrides)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setExchangeParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L102)</sub>

??? example "Details"

    **Signature**

    `setExchangeParameters(address integration, bytes32[] currencyKeys, struct IDirectIntegrationManager.ParameterIntegrationSettings settings)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_setExchangeParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L114)</sub>

??? example "Details"

    **Signature**

    `_setExchangeParameters(address integration, bytes32 currencyKey, struct IDirectIntegrationManager.ParameterIntegrationSettings settings)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Address cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L119)

    **Emits**

    * [IntegrationParametersSet](#integrationparametersset)

## Events

### `IntegrationParametersSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/DirectIntegrationManager.sol#L127)</sub>

**Signature**: `IntegrationParametersSet(address integration, bytes32 currencyKey, struct IDirectIntegrationManager.ParameterIntegrationSettings overrides)`
