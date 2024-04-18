# ProxyPerpsV2

## Description

**Source:** [contracts/ProxyPerpsV2.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol)

## Structs

### `Route`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L22)</sub>

| Field            | Type      | Description |
| ---------------- | --------- | ----------- |
| `selector`       | `bytes4`  | TBA         |
| `implementation` | `address` | TBA         |
| `isView`         | `bool`    | TBA         |

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L36)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `getAllTargets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L163)</sub>

??? example "Details"

    **Signature**

    `getAllTargets() view returns (address[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRoute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L132)</sub>

??? example "Details"

    **Signature**

    `getRoute(bytes4 selector) view returns (struct ProxyPerpsV2.Route)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRoutesLength`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L139)</sub>

??? example "Details"

    **Signature**

    `getRoutesLength() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getRoutesPage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L143)</sub>

??? example "Details"

    **Signature**

    `getRoutesPage(uint256 index, uint256 pageSize) view returns (struct ProxyPerpsV2.Route[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `_emit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L170)</sub>

??? example "Details"

    **Signature**

    `_emit(bytes callData, uint256 numTopics, bytes32 topic1, bytes32 topic2, bytes32 topic3, bytes32 topic4)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyTargets](#onlytargets)

### `addRoute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L69)</sub>

??? example "Details"

    **Signature**

    `addRoute(bytes4 selector, address implementation, bool isView)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid nil selector")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L74)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RouteUpdated](#routeupdated)

### `removeRoute`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L108)</sub>

??? example "Details"

    **Signature**

    `removeRoute(bytes4 selector)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Selector not in set.")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L109)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [RouteRemoved](#routeremoved)

## Internal Functions

### `_contains`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L39)</sub>

??? example "Details"

    **Signature**

    `_contains(bytes4 selector) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeTargetReference`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L47)</sub>

??? example "Details"

    **Signature**

    `_removeTargetReference(address implementation)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Target not referenced.")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L48)

## Modifiers

### `onlyTargets`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L249)</sub>

## Events

### `RouteRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L256)</sub>

**Signature**: `RouteRemoved(bytes4 route)`

### `RouteUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L254)</sub>

**Signature**: `RouteUpdated(bytes4 route, address implementation, bool isView)`

### `TargetedRouteAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L258)</sub>

**Signature**: `TargetedRouteAdded(address targetedRoute)`

### `TargetedRouteRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/ProxyPerpsV2.sol#L260)</sub>

**Signature**: `TargetedRouteRemoved(address targetedRoute)`
