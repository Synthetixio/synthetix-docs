# IssuanceEternalStorage

**Source:** [contracts/IssuanceEternalStorage.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/IssuanceEternalStorage.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    IssuanceEternalStorage[IssuanceEternalStorage] --> EternalStorage[EternalStorage]
    EternalStorage[EternalStorage] --> State[State]
    State[State] --> Owned[Owned]
```

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/IssuanceEternalStorage.sol#L11)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _issuer) public`

    **Modifiers**

    * [EternalStorage](#eternalstorage)

---

