# PurgeableSynth

**Source:** [contracts/PurgeableSynth.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    PurgeableSynth[PurgeableSynth] --> Synth[Synth]
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

## Variables

---

### `maxSupplyToPurgeInUSD`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol#L18)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol#L24)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address payable _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver) public`

    **Modifiers**

    * [Synth](#synth)

---

### `purge`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol#L49)</sub>

??? example "Details"

    **Signature**

    `purge(address[] addresses) external`

    **Requires**

    * [require(..., Cannot purge as total supply is above threshold and rate is not frozen.)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol#L55)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

## Events

---

### `Purged`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/PurgeableSynth.sol#L73)</sub>

- `(address account, uint256 value)`

---

