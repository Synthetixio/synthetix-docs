# Synth

**Source:** [contracts/Synth.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Synth[Synth] --> IERC20[IERC20]
    Synth[Synth] --> ExternStateToken[ExternStateToken]
    Synth[Synth] --> MixinResolver[MixinResolver]
    Synth[Synth] --> ISynth[ISynth]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Structs

## Variables

---

### `currencyKey`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L22)</sub>

**Type:** `bytes32`

---

### `DECIMALS`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L24)</sub>

**Type:** `uint8`

---

### `FEE_ADDRESS`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L27)</sub>

**Type:** `address`

---

### `addressesToCache`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L37)</sub>

**Type:** `bytes32[24]`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L47)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver) public`

    **Modifiers**

    * [ExternStateToken](#externstatetoken)

    * [MixinResolver](#mixinresolver)

---

### `transfer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L69)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) public`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `transferAndSettle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L85)</sub>

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value) public`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `transferFrom`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L103)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) public`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `transferFromAndSettle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L113)</sub>

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value) public`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `issue`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L159)</sub>

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount) external`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

---

### `burn`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L165)</sub>

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount) external`

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

---

### `setTotalSupply`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L186)</sub>

??? example "Details"

    **Signature**

    `setTotalSupply(uint256 amount) external`

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `transferableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L217)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account) public`

---

## Modifiers

---

### `onlyInternalContracts`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L251)</sub>

---

## Events

---

### `Issued`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L265)</sub>

- `(address account, uint256 value)`

---

### `Burned`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synth.sol#L272)</sub>

- `(address account, uint256 value)`

---

