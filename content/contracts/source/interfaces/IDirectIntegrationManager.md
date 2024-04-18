# IDirectIntegrationManager

## Description

**Source:** [contracts/interfaces/IDirectIntegrationManager.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDirectIntegrationManager.sol)

## Structs

### `ParameterIntegrationSettings`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDirectIntegrationManager.sol#L6)</sub>

| Field                                 | Type      | Description |
| ------------------------------------- | --------- | ----------- |
| `currencyKey`                         | `bytes32` | TBA         |
| `dexPriceAggregator`                  | `address` | TBA         |
| `atomicEquivalentForDexPricing`       | `address` | TBA         |
| `atomicExchangeFeeRate`               | `uint256` | TBA         |
| `atomicTwapWindow`                    | `uint256` | TBA         |
| `atomicMaxVolumePerBlock`             | `uint256` | TBA         |
| `atomicVolatilityConsiderationWindow` | `uint256` | TBA         |
| `atomicVolatilityUpdateThreshold`     | `uint256` | TBA         |
| `exchangeFeeRate`                     | `uint256` | TBA         |
| `exchangeMaxDynamicFee`               | `uint256` | TBA         |
| `exchangeDynamicFeeRounds`            | `uint256` | TBA         |
| `exchangeDynamicFeeThreshold`         | `uint256` | TBA         |
| `exchangeDynamicFeeWeightDecay`       | `uint256` | TBA         |

## Views

### `getExchangeParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDirectIntegrationManager.sol#L22)</sub>

??? example "Details"

    **Signature**

    `getExchangeParameters(address integration, bytes32 key) view returns (struct IDirectIntegrationManager.ParameterIntegrationSettings settings)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `setExchangeParameters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IDirectIntegrationManager.sol#L27)</sub>

??? example "Details"

    **Signature**

    `setExchangeParameters(address integration, bytes32[] currencyKeys, struct IDirectIntegrationManager.ParameterIntegrationSettings params)`

    **Visibility**

    `external`

    **State Mutability**

    ``
