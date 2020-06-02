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

## Architecture

---

### Inheritance Graph

```mermaid
graph TD
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> Owned[Owned]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> SelfDestructible[SelfDestructible]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> MixinResolver[MixinResolver]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

### Related Contracts

```mermaid
graph TD
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> BinaryOptionMarketManager[BinaryOptionMarketManager]
    BinaryOptionMarketManager[BinaryOptionMarketManager] --> BinaryOptionMarketFactory[BinaryOptionMarketFactory]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> BinaryOptionMarket[BinaryOptionMarket]
    BinaryOptionMarketFactory[BinaryOptionMarketFactory] --> AddressResolver[AddressResolver]
```

??? example "Details"

    - [`BinaryOptionMarketManager`](BinaryOptionMarketManager.md): The manager is the only contract permitted to create contracts from the factory.
    - [`BinaryOptionMarket`](BinaryOptionMarket.md): The factory creates market instances with the provided parameters.
    - [`AddressResolver`](AddressResolver.md): The factory uses the address resolver to retrieve the address of its manager, so if the manager is upgraded, this factory must be synchronised.

---

## Constructor

The constructor simply initialises the inherited classes.

??? example "Details"
    **Signature**
    
    `constructor(address _owner, address _resolver) public`
    
    **Superconstructors**
    
    * [`Owned`](Owned.md)
    * [`SelfDestructible`](SelfDestructible.md)
    * [`MixinResolver`](MixinResolver.md)

## Views (Internal)

---

### `_manager`

Returns the cached address of the
[`BinaryOptionMarketManager`](BinaryOptionMarketManager.md) instance
from the [`AddressResolver`](AddressResolver.md).


??? example "Details"
    **Signature**
    
    `function _manager() returns (address)`
    
    **State Mutability**
    
    `internal view`

## Functions
    
---

### `createMarket`

Simply creates a new [`BinaryOptionMarket`](BinaryOptionMarket.md) instance
with the given parameters.

As this is only intended to be called from
[`BinaryOptionMarketManager.createMarket`](BinaryOptionMarketManager.md#createmarket),
the transaction reverts if the message sender is not the [manager](#_manager).
See that function's documentation for further details.

??? example "Details"
    **Signature**

    ```
    function createMarket(address creator,
        uint capitalRequirement,
        bytes32 oracleKey, uint targetPrice,
        uint[3] calldata times, // [biddingEnd, maturity, destruction]
        uint[2] calldata bids, // [longBid, shortBid]
        uint[3] calldata fees // [poolFee, creatorFee, refundFee]
    )
        external
        returns (BinaryOptionMarket)
    ```
    
    **State Mutability**
    
    `external`
    
