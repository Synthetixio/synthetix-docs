# IBinaryOptionMarket

## Description

**Source:** [contracts/interfaces/IBinaryOptionMarket.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol)

## Views

### `balancesOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L38)</sub>

??? example "Details"

    **Signature**

    `balancesOf(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidForPrice`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L32)</sub>

??? example "Details"

    **Signature**

    `bidForPrice(enum IBinaryOptionMarket.Side bidSide, enum IBinaryOptionMarket.Side priceSide, uint256 price, bool refund)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `bidsOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L34)</sub>

??? example "Details"

    **Signature**

    `bidsOf(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canResolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L27)</sub>

??? example "Details"

    **Signature**

    `canResolve()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `capitalRequirement`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L22)</sub>

??? example "Details"

    **Signature**

    `capitalRequirement()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `claimableBy`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L36)</sub>

??? example "Details"

    **Signature**

    `claimableBy(address account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `creator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L21)</sub>

??? example "Details"

    **Signature**

    `creator()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `deposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L20)</sub>

??? example "Details"

    **Signature**

    `deposited()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `destructionReward`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L29)</sub>

??? example "Details"

    **Signature**

    `destructionReward()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `fees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L18)</sub>

??? example "Details"

    **Signature**

    `fees()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `options`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L14)</sub>

??? example "Details"

    **Signature**

    `options()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oracleDetails`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L17)</sub>

??? example "Details"

    **Signature**

    `oracleDetails()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `oraclePriceAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L26)</sub>

??? example "Details"

    **Signature**

    `oraclePriceAndTimestamp()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `phase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L25)</sub>

??? example "Details"

    **Signature**

    `phase()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `prices`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L15)</sub>

??? example "Details"

    **Signature**

    `prices()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `pricesAfterBid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L31)</sub>

??? example "Details"

    **Signature**

    `pricesAfterBid(enum IBinaryOptionMarket.Side side, uint256 value, bool refund)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L23)</sub>

??? example "Details"

    **Signature**

    `resolved()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `result`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L28)</sub>

??? example "Details"

    **Signature**

    `result()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `times`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L16)</sub>

??? example "Details"

    **Signature**

    `times()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalBids`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L35)</sub>

??? example "Details"

    **Signature**

    `totalBids()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalClaimable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L37)</sub>

??? example "Details"

    **Signature**

    `totalClaimable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalExercisable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalExercisable()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalSupplies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L39)</sub>

??? example "Details"

    **Signature**

    `totalSupplies()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## External Functions

### `bid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L44)</sub>

??? example "Details"

    **Signature**

    `bid(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `claimOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L48)</sub>

??? example "Details"

    **Signature**

    `claimOptions()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exerciseOptions`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L49)</sub>

??? example "Details"

    **Signature**

    `exerciseOptions()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `refund`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L45)</sub>

??? example "Details"

    **Signature**

    `refund(enum IBinaryOptionMarket.Side side, uint256 value)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `resolve`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L47)</sub>

??? example "Details"

    **Signature**

    `resolve()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `selfDestruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/interfaces/IBinaryOptionMarket.sol#L51)</sub>

??? example "Details"

    **Signature**

    `selfDestruct(address payable beneficiary)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`
