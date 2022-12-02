# PerpsV2ExchangeRate

## Description

**Source:** [contracts/PerpsV2ExchangeRate.sol](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L16)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L22)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `offchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L42)</sub>

??? example "Details"

    **Signature**

    `offchainOracle() view returns (contract IPyth)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainPriceFeedId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L46)</sub>

??? example "Details"

    **Signature**

    `offchainPriceFeedId(bytes32 assetId) view returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolveAndGetLatestPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L81)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetLatestPrice(bytes32 assetId) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "No price feed found for asset")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L83)

### `resolveAndGetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L73)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetPrice(bytes32 assetId, uint256 maxAge) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "No price feed found for asset")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L75)

## Restricted Functions

### `setOffchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L26)</sub>

??? example "Details"

    **Signature**

    `setOffchainOracle(address offchainOracle)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OffchainOracleUpdated](#offchainoracleupdated)

### `setOffchainPriceFeedId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L31)</sub>

??? example "Details"

    **Signature**

    `setOffchainPriceFeedId(bytes32 assetId, bytes32 priceFeedId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [OffchainPriceFeedIdUpdated](#offchainpricefeedidupdated)

## Internal Functions

### `_calculatePrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L88)</sub>

??? example "Details"

    **Signature**

    `_calculatePrice(struct PythStructs.Price retrievedPrice) view returns (uint256 price)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getPythPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L116)</sub>

??? example "Details"

    **Signature**

    `_getPythPrice(bytes32 priceFeedId, uint256 maxAge) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getPythPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L107)</sub>

??? example "Details"

    **Signature**

    `_getPythPriceUnsafe(bytes32 priceFeedId) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `updatePythPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L56)</sub>

??? example "Details"

    **Signature**

    `updatePythPrice(address sender, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., "Not enough eth for paying the fee")](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L59)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

## Events

### `OffchainOracleUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L125)</sub>

**Signature**: `OffchainOracleUpdated(address offchainOracle)`

### `OffchainPriceFeedIdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.80.0-alpha/contracts/PerpsV2ExchangeRate.sol#L126)</sub>

**Signature**: `OffchainPriceFeedIdUpdated(bytes32 assetId, bytes32 priceFeedId)`
