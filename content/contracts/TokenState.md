# TokenState

**Source:** [contracts/TokenState.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    TokenState[TokenState] --> State[State]
    State[State] --> Owned[Owned]
```

---

## Variables

---

### `balanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol#L11)</sub>

**Type:** `mapping(address => uint256)`

---

### `allowance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol#L12)</sub>

**Type:** `mapping(address => mapping(address => uint256))`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol#L14)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _associatedContract) public`

    **Modifiers**

    * [Owned](#owned)

    * [State](#state)

---

### `setAllowance`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol#L26)</sub>

??? example "Details"

    **Signature**

    `setAllowance(address tokenOwner, address spender, uint256 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

### `setBalanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/TokenState.sol#L40)</sub>

??? example "Details"

    **Signature**

    `setBalanceOf(address account, uint256 value) external`

    **Modifiers**

    * [onlyAssociatedContract](#onlyassociatedcontract)

---

