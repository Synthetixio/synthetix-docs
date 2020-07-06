# BinaryOptionMarketFactory

## Description

This contract is strictly responsible for instantiating new
[`BinaryOptionMarket`](BinaryOptionMarket.md) instances on behalf of
the [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md).

Market instantiation is delegated to this factory contract because,
as the deploying contract must contain the entire construction bytecode
of the contract to be deployed, the manager would be too large to
deploy ([EIP 170](https://eips.ethereum.org/EIPS/eip-170)).

Additionally, separating out the construction of markets into
a factory contract allows the manager and the markets to be upgraded
independently of one another.

??? example "Related Contracts"

    - [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md): The manager is the only contract permitted to create contracts from the factory.
    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The factory creates market instances with the provided parameters.
    - [`AddressResolver`](AddressResolver.md): The factory uses the address resolver to retrieve the address of its manager, so if the manager is upgraded, this factory must be synchronised.

**Source:** [contracts/BinaryOptionMarketFactory.sol](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketFactory.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> SelfDestructible[SelfDestructible]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> MixinResolver[MixinResolver]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketFactory.sol#L23)</sub>

The constructor simply initialises the inherited classes.

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Internal Functions

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketFactory.sol#L34)</sub>

Returns the cached address of the
[`BinaryOptionMarketManager`](BinaryOptionMarketManager.md) instance
from the [`AddressResolver`](AddressResolver.md).

??? example "Details"

    **Signature**

    `_manager() returns (address)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `createMarket`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketFactory.sol#L40)</sub>

Simply creates a new [`BinaryOptionMarket`](BinaryOptionMarket.md) instance
with the given parameters.

As this is only intended to be called from
[`BinaryOptionMarketManager.createMarket`](BinaryOptionMarketManager.md#createmarket),
the transaction reverts if the message sender is not the [manager](#_manager).
See that function's documentation for further details.

Initial timestamps should be provided in the order `[biddingEnd, maturity, expiry]`, initial bids as
`[longBid, shortBid]`, and fees as `[poolFee, creatorFee, refundFee]`.

??? example "Details"

    **Signature**

    `createMarket(address creator, uint256[2] creatorLimits, bytes32 oracleKey, uint256 strikePrice, uint256[3] times, uint256[2] bids, uint256[3] fees) returns (contract BinaryOptionMarket)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Only permitted by the manager.)](https://github.com/Synthetixio/synthetix/tree/v2.24.0/contracts/BinaryOptionMarketFactory.sol#L50)
