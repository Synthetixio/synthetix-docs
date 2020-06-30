# IBinaryOptionMarket

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol)

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L37)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L31)</sub>

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L33)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L27)</sub>

??? example "Details"

    **Signature**

    `canResolve() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L35)</sub>

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L22)</sub>

??? example "Details"

    **Signature**

    `creator() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L19)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L21)</sub>

??? example "Details"

    **Signature**

    `deposited() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L39)</sub>

??? example "Details"

    **Signature**

    `exercisableDeposits() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L18)</sub>

??? example "Details"

    **Signature**

    `fees() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L14)</sub>

??? example "Details"

    **Signature**

    `options() returns (contract IBinaryOption, contract IBinaryOption)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L17)</sub>

??? example "Details"

    **Signature**

    `oracleDetails() returns (bytes32, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L26)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L25)</sub>

??? example "Details"

    **Signature**

    `phase() returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L15)</sub>

??? example "Details"

    **Signature**

    `prices() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L30)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L23)</sub>

??? example "Details"

    **Signature**

    `resolved() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L28)</sub>

??? example "Details"

    **Signature**

    `result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L16)</sub>

??? example "Details"

    **Signature**

    `times() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L34)</sub>

??? example "Details"

    **Signature**

    `totalBids() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L36)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L38)</sub>

??? example "Details"

    **Signature**

    `totalSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L43)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L46)</sub>

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L47)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.23.3/contracts/interfaces/IBinaryOptionMarket.sol#L44)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
