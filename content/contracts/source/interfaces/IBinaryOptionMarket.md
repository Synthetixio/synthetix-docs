# IBinaryOptionMarket

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol)

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L86)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L71)</sub>

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L78)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L61)</sub>

??? example "Details"

    **Signature**

    `canResolve() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L82)</sub>

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L51)</sub>

??? example "Details"

    **Signature**

    `creator() returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L47)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L49)</sub>

??? example "Details"

    **Signature**

    `deposited() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L90)</sub>

??? example "Details"

    **Signature**

    `exercisableDeposits() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L38)</sub>

??? example "Details"

    **Signature**

    `fees() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L16)</sub>

??? example "Details"

    **Signature**

    `options() returns (contract IBinaryOption, contract IBinaryOption)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L29)</sub>

??? example "Details"

    **Signature**

    `oracleDetails() returns (bytes32, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L59)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L57)</sub>

??? example "Details"

    **Signature**

    `phase() returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L18)</sub>

??? example "Details"

    **Signature**

    `prices() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L65)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `refundsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L55)</sub>

??? example "Details"

    **Signature**

    `refundsEnabled() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolved() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L63)</sub>

??? example "Details"

    **Signature**

    `result() returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L20)</sub>

??? example "Details"

    **Signature**

    `times() returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L80)</sub>

??? example "Details"

    **Signature**

    `totalBids() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L84)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L88)</sub>

??? example "Details"

    **Signature**

    `totalSupplies() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L94)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L98)</sub>

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L100)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-alpha/contracts/interfaces/IBinaryOptionMarket.sol#L96)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
