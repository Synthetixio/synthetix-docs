# PerpsV2ExchangeRate

## Description

**Source:** [contracts/PerpsV2ExchangeRate.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L19)</sub>

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L27)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `associatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L67)</sub>

??? example "Details"

    **Signature**

    `associatedContracts() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `offchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L73)</sub>

??? example "Details"

    **Signature**

    `offchainOracle() view returns (contract IPyth)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `offchainPriceFeedId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L77)</sub>

??? example "Details"

    **Signature**

    `offchainPriceFeedId(bytes32 assetId) view returns (bytes32)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolveAndGetLatestPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L117)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetLatestPrice(bytes32 assetId) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "No price feed found for asset")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L119)

### `resolveAndGetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L109)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetPrice(bytes32 assetId, uint256 maxAge) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "No price feed found for asset")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L111)

## Restricted Functions

### `addAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L48)</sub>

??? example "Details"

    **Signature**

    `addAssociatedContracts(address[] associatedContracts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L58)</sub>

??? example "Details"

    **Signature**

    `removeAssociatedContracts(address[] associatedContracts)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setOffchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L31)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L36)</sub>

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

### `updatePythPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L87)</sub>

??? example "Details"

    **Signature**

    `updatePythPrice(address sender, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., "Not enough eth for paying the fee")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L95)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [onlyAssociatedContracts](#onlyassociatedcontracts)

## Internal Functions

### `_calculatePrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L124)</sub>

??? example "Details"

    **Signature**

    `_calculatePrice(struct PythStructs.Price retrievedPrice) view returns (uint256 price)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getPythPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L150)</sub>

??? example "Details"

    **Signature**

    `_getPythPrice(bytes32 priceFeedId, uint256 maxAge) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getPythPriceUnsafe`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L142)</sub>

??? example "Details"

    **Signature**

    `_getPythPriceUnsafe(bytes32 priceFeedId) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyAssociatedContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L160)</sub>

## Events

### `AssociatedContractAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L167)</sub>

**Signature**: `AssociatedContractAdded(address associatedContract)`

### `AssociatedContractRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L168)</sub>

**Signature**: `AssociatedContractRemoved(address associatedContract)`

### `OffchainOracleUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L170)</sub>

**Signature**: `OffchainOracleUpdated(address offchainOracle)`

### `OffchainPriceFeedIdUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/PerpsV2ExchangeRate.sol#L171)</sub>

**Signature**: `OffchainPriceFeedIdUpdated(bytes32 assetId, bytes32 priceFeedId)`
