# Exchanger

**Source:** [contracts/Exchanger.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Exchanger[Exchanger] --> MixinResolver[MixinResolver]
    Exchanger[Exchanger] --> IExchanger[IExchanger]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Variables

---

### `waitingPeriodSecs`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L53)</sub>

**Type:** `uint256`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L73)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver) public`

    **Modifiers**

    * [Owned](#owned)

    * [MixinResolver](#mixinresolver)

---

### `maxSecsLeftInWaitingPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L103)</sub>

??? example "Details"

    **Signature**

    `maxSecsLeftInWaitingPeriod(address account, bytes32 currencyKey) public`

---

### `feeRateForExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L108)</sub>

??? example "Details"

    **Signature**

    `feeRateForExchange(bytes32 , bytes32 ) public`

---

### `settlementOwing`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L118)</sub>

??? example "Details"

    **Signature**

    `settlementOwing(address account, bytes32 currencyKey) public`

---

### `setWaitingPeriodSecs`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L168)</sub>

??? example "Details"

    **Signature**

    `setWaitingPeriodSecs(uint256 _waitingPeriodSecs) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `calculateAmountAfterSettlement`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L172)</sub>

??? example "Details"

    **Signature**

    `calculateAmountAfterSettlement(address from, bytes32 currencyKey, uint256 amount, uint256 refunded) public`

---

### `exchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L195)</sub>

??? example "Details"

    **Signature**

    `exchange(address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey, address destinationAddress) external`

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

---

### `exchangeOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L205)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, address from, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L212)

    **Modifiers**

    * [onlySynthetixorSynth](#onlysynthetixorsynth)

---

### `settle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L304)</sub>

??? example "Details"

    **Signature**

    `settle(address from, bytes32 currencyKey) external`

---

## Modifiers

---

### `onlySynthetixorSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Exchanger.sol#L445)</sub>

---

