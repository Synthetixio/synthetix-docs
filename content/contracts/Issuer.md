# Issuer

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Issuer[Issuer] --> MixinResolver[MixinResolver]
    Issuer[Issuer] --> IIssuer[IIssuer]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Variables

---

### `LAST_ISSUE_EVENT`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L26)</sub>

**Type:** `bytes32`

---

### `MAX_MINIMUM_STAKING_TIME`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L29)</sub>

**Type:** `uint256`

---

### `minimumStakeTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L31)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L51)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver) public`

    **Modifiers**

    * [Owned](#owned)

    * [MixinResolver](#mixinresolver)

---

### `canBurnSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L83)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) public`

---

### `lastIssueEvent`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L87)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) public`

---

### `setMinimumStakeTime`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `setMinimumStakeTime(uint256 _seconds) external`

    **Requires**

    * [require(..., stake time exceed maximum 1 week)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L96)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumStakeTimeUpdated](#minimumstaketimeupdated)

---

### `issueSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L107)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount) external`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L112)

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L115)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `issueMaxSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L119)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from) external`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L120)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `issueSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L126)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount) external`

    **Requires**

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L129)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `issueMaxSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L134)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from) external`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `burnSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L161)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount) external`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L166)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `burnSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L170)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount) external`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `burnSynthsToTargetOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L195)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from) external`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L196)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

### `burnSynthsToTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L200)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from) external`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

---

## Modifiers

---

### `onlySynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L359)</sub>

---

## Events

---

### `MinimumStakeTimeUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Issuer.sol#L366)</sub>

- `(uint256 minimumStakeTime)`

---

