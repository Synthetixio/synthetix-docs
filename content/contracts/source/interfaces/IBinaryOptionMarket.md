# IBinaryOptionMarket

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol)

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L85)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidOrRefundForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L70)</sub>

??? example "Details"

    **Signature**

    `bidOrRefundForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L77)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L60)</sub>

??? example "Details"

    **Signature**

    `canResolve() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBalancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L81)</sub>

??? example "Details"

    **Signature**

    `claimableBalancesOf(address account) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L50)</sub>

??? example "Details"

    **Signature**

    `creator() view returns (address)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creatorLimits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L46)</sub>

??? example "Details"

    **Signature**

    `creatorLimits() view returns (uint256 capitalRequirement, uint256 skewLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L48)</sub>

??? example "Details"

    **Signature**

    `deposited() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `exercisableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L89)</sub>

??? example "Details"

    **Signature**

    `exercisableDeposits() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L37)</sub>

??? example "Details"

    **Signature**

    `fees() view returns (uint256 poolFee, uint256 creatorFee, uint256 refundFee)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L15)</sub>

??? example "Details"

    **Signature**

    `options() view returns (contract IBinaryOption long, contract IBinaryOption short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L28)</sub>

??? example "Details"

    **Signature**

    `oracleDetails() view returns (bytes32 key, uint256 strikePrice, uint256 finalPrice)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L58)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp() view returns (uint256 price, uint256 updatedAt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L56)</sub>

??? example "Details"

    **Signature**

    `phase() view returns (enum IBinaryOptionMarket.Phase)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L17)</sub>

??? example "Details"

    **Signature**

    `prices() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBidOrRefund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L64)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBidOrRefund(enum IBinaryOptionMarket.Side side, uint256 value, bool refund) view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `refundsEnabled`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L54)</sub>

??? example "Details"

    **Signature**

    `refundsEnabled() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L52)</sub>

??? example "Details"

    **Signature**

    `resolved() view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L62)</sub>

??? example "Details"

    **Signature**

    `result() view returns (enum IBinaryOptionMarket.Side)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L19)</sub>

??? example "Details"

    **Signature**

    `times() view returns (uint256 biddingEnd, uint256 maturity, uint256 destructino)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L79)</sub>

??? example "Details"

    **Signature**

    `totalBids() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimableSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L83)</sub>

??? example "Details"

    **Signature**

    `totalClaimableSupplies() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L87)</sub>

??? example "Details"

    **Signature**

    `totalSupplies() view returns (uint256 long, uint256 short)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L93)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L97)</sub>

??? example "Details"

    **Signature**

    `claimOptions() returns (uint256 longClaimed, uint256 shortClaimed)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L99)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    ``

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.46.0-ovm/contracts/interfaces/IBinaryOptionMarket.sol#L95)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value) returns (uint256 refundMinusFee)`

    **Visibility**

    `external`

    **State Mutability**

    ``
