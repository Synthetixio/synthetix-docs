# MixinResolver

**Source:** [contracts/MixinResolver.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Variables

---

### `resolver`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L12)</sub>

**Type:** `contract AddressResolver`

---

### `resolverAddressesRequired`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L16)</sub>

**Type:** `bytes32[]`

---

### `MAX_ADDRESSES_FROM_RESOLVER`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L18)</sub>

**Type:** `uint256`

## Functions

---

### `setResolverAndSyncCache`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L38)</sub>

??? example "Details"

    **Signature**

    `setResolverAndSyncCache(contract AddressResolver _resolver) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `isResolverCached`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L58)</sub>

??? example "Details"

    **Signature**

    `isResolverCached(contract AddressResolver _resolver) external`

---

### `getResolverAddressesRequired`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/MixinResolver.sol#L76)</sub>

??? example "Details"

    **Signature**

    `getResolverAddressesRequired() external`

---

