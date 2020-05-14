# Proxyable

**Source:** [contracts/Proxyable.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Proxyable[Proxyable] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `proxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L15)</sub>

**Type:** `contract Proxy`

---

### `integrationProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L16)</sub>

**Type:** `contract Proxy`

---

### `messageSender`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L21)</sub>

**Type:** `address`

## Functions

---

### `setProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L31)</sub>

??? example "Details"

    **Signature**

    `setProxy(address payable _proxy) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ProxyUpdated](#proxyupdated)

---

### `setIntegrationProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L36)</sub>

??? example "Details"

    **Signature**

    `setIntegrationProxy(address payable _integrationProxy) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `setMessageSender`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L40)</sub>

??? example "Details"

    **Signature**

    `setMessageSender(address sender) external`

    **Modifiers**

    * [onlyProxy](#onlyproxy)

---

## Modifiers

---

### `onlyProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L44)</sub>

---

### `optionalProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L49)</sub>

---

### `optionalProxy_onlyOwner`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L56)</sub>

---

## Events

---

### `ProxyUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Proxyable.sol#L64)</sub>

- `(address proxyAddress)`

---

