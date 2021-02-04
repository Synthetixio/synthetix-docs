# IBinaryOptionMarket

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol)

## External Functions

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L86)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L94)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L71)</sub>

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L78)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L61)</sub>

??? example "Details"

    **Signature**

    `canResolve() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L98)</sub>

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256 longClaimed, uint256 shortClaimed)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L82)</sub>

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L51)</sub>

??? example "Details"

    **Signature**

    `creator() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L47)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() view returns (uint256 capitalRequirement, uint256 skewLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L49)</sub>

??? example "Details"

    **Signature**

    `deposited() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L90)</sub>

??? example "Details"

    **Signature**

    `exercisableDeposits() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L100)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L38)</sub>

??? example "Details"

    **Signature**

    `fees() view returns (uint256 poolFee, uint256 creatorFee, uint256 refundFee)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L16)</sub>

??? example "Details"

    **Signature**

    `options() view returns (contract IBinaryOption long, contract IBinaryOption short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L29)</sub>

??? example "Details"

    **Signature**

    `oracleDetails() view returns (bytes32 key, uint256 strikePrice, uint256 finalPrice)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L59)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() view returns (uint256 price, uint256 updatedAt)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L57)</sub>

??? example "Details"

    **Signature**

    `phase() view returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L18)</sub>

??? example "Details"

    **Signature**

    `prices() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L65)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L96)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256 refundMinusFee)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `refundsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L55)</sub>

??? example "Details"

    **Signature**

    `refundsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L53)</sub>

??? example "Details"

    **Signature**

    `resolved() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L63)</sub>

??? example "Details"

    **Signature**

    `result() view returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L20)</sub>

??? example "Details"

    **Signature**

    `times() view returns (uint256 biddingEnd, uint256 maturity, uint256 destructino)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L80)</sub>

??? example "Details"

    **Signature**

    `totalBids() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L84)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupplies() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/interfaces/IBinaryOptionMarket.sol#L88)</sub>

??? example "Details"

    **Signature**

    `totalSupplies() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`
