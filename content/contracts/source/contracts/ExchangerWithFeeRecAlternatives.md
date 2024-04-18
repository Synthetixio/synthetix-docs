# ExchangerWithFeeRecAlternatives

## Description

**Source:** [contracts/ExchangerWithFeeRecAlternatives.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol)

## Structs

### `ExchangeVolumeAtPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L28)</sub>

| Field    | Type      | Description |
| -------- | --------- | ----------- |
| `time`   | `uint64`  | TBA         |
| `volume` | `uint192` | TBA         |

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L24)</sub>

**Type:** `bytes32`

### `lastAtomicVolume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L33)</sub>

**Type:** `struct ExchangerWithFeeRecAlternatives.ExchangeVolumeAtPeriod`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L35)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `atomicMaxVolumePerBlock`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L50)</sub>

??? example "Details"

    **Signature**

    `atomicMaxVolumePerBlock() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `feeRateForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L54)</sub>

??? example "Details"

    **Signature**

    `feeRateForAtomicExchange(bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getAmountsForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L66)</sub>

??? example "Details"

    **Signature**

    `getAmountsForAtomicExchange(uint256 sourceAmount, bytes32 sourceCurrencyKey, bytes32 destinationCurrencyKey) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L41)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L95)</sub>

??? example "Details"

    **Signature**

    `exchangeAtomically(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress, bytes32 trackingCode, uint256 minAmount) returns (uint256 amountReceived)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "The amount received is below the minimum amount specified.")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L113)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

## Internal Functions

### `_checkAndUpdateAtomicVolume`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L289)</sub>

??? example "Details"

    **Signature**

    `_checkAndUpdateAtomicVolume(struct IDirectIntegrationManager.ParameterIntegrationSettings settings, uint256 sourceSusdValue)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Surpassed volume limit")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L297)

### `_createVirtualSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_createVirtualSynth(contract IERC20 synth, address recipient, uint256 amount, bytes32 currencyKey) returns (contract IVirtualSynth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot virtualize this synth")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L135)

    **Emits**

    * [VirtualSynthCreated](#virtualsynthcreated)

### `_exchangeAtomically`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_exchangeAtomically(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) returns (uint256 amountReceived, uint256 fee)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_feeRateForAtomicExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L302)</sub>

??? example "Details"

    **Signature**

    `_feeRateForAtomicExchange(struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getAmountsForAtomicExchangeMinusFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L316)</sub>

??? example "Details"

    **Signature**

    `_getAmountsForAtomicExchangeMinusFees(uint256 sourceAmount, struct IDirectIntegrationManager.ParameterIntegrationSettings sourceSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings destinationSettings, struct IDirectIntegrationManager.ParameterIntegrationSettings usdSettings) view returns (uint256 amountReceived, uint256 fee, uint256 exchangeFeeRate, uint256 systemConvertedAmount, uint256 systemSourceRate, uint256 systemDestinationRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_virtualSynthMastercopy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L124)</sub>

??? example "Details"

    **Signature**

    `_virtualSynthMastercopy() view returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Events

### `VirtualSynthCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ExchangerWithFeeRecAlternatives.sol#L342)</sub>

**Signature**: `VirtualSynthCreated(address synth, address recipient, address vSynth, bytes32 currencyKey, uint256 amount)`
