# IPerpsV2ExchangeRate

## Description

**Source:** [contracts/interfaces/IPerpsV2ExchangeRate.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol)

## Views

### `offchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L14)</sub>

??? example "Details"

    **Signature**

    `offchainOracle() view returns (contract IPyth)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `offchainPriceFeedId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L16)</sub>

??? example "Details"

    **Signature**

    `offchainPriceFeedId(bytes32 assetId) view returns (bytes32)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolveAndGetLatestPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L26)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetLatestPrice(bytes32 assetId) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolveAndGetPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L23)</sub>

??? example "Details"

    **Signature**

    `resolveAndGetPrice(bytes32 assetId, uint256 maxAge) view returns (uint256 price, uint256 publishTime)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `setOffchainOracle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L8)</sub>

??? example "Details"

    **Signature**

    `setOffchainOracle(contract IPyth _offchainOracle)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `setOffchainPriceFeedId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L10)</sub>

??? example "Details"

    **Signature**

    `setOffchainPriceFeedId(bytes32 assetId, bytes32 priceFeedId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `updatePythPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/interfaces/IPerpsV2ExchangeRate.sol#L20)</sub>

??? example "Details"

    **Signature**

    `updatePythPrice(address sender, bytes[] priceUpdateData) payable`

    **Visibility**

    `external`

    **State Mutability**

    `payable`
