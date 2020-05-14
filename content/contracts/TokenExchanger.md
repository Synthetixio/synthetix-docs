# TokenExchanger

**Source:** [contracts/test-helpers/TokenExchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    TokenExchanger[TokenExchanger] --> Owned[Owned]
```

---

## Variables

---

### `integrationProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L13)</sub>

**Type:** `address`

---

### `synthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L14)</sub>

**Type:** `address`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L16)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _integrationProxy) public`

    **Modifiers**

    * [Owned](#owned)

---

### `setSynthetixProxy`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L20)</sub>

??? example "Details"

    **Signature**

    `setSynthetixProxy(address _integrationProxy) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `setSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L24)</sub>

??? example "Details"

    **Signature**

    `setSynthetix(address _synthetix) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `checkBalance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L28)</sub>

??? example "Details"

    **Signature**

    `checkBalance(address account) public`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)

---

### `checkAllowance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L32)</sub>

??? example "Details"

    **Signature**

    `checkAllowance(address tokenOwner, address spender) public`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)

---

### `checkBalanceSNXDirect`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L36)</sub>

??? example "Details"

    **Signature**

    `checkBalanceSNXDirect(address account) public`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)

---

### `getDecimals`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L40)</sub>

??? example "Details"

    **Signature**

    `getDecimals(address tokenAddress) public`

---

### `doTokenSpend`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L44)</sub>

??? example "Details"

    **Signature**

    `doTokenSpend(address fromAccount, address toAccount, uint256 amount) public`

    **Modifiers**

    * [synthetixProxyIsSet](#synthetixproxyisset)

---

## Modifiers

---

### `synthetixProxyIsSet`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L62)</sub>

---

## Events

---

### `LogString`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L67)</sub>

- `(string name, string value)`

---

### `LogInt`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L68)</sub>

- `(string name, uint256 value)`

---

### `LogAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L69)</sub>

- `(string name, address value)`

---

### `LogBytes`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/test-helpers/TokenExchanger.sol#L70)</sub>

- `(string name, bytes4 value)`

---

