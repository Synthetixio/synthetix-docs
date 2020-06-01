# ISynthetix

## Description

**Source:** [contracts/interfaces/ISynthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol)

## Constants

## Variables

## Functions

---

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L8)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys()`

    **State Mutability**

    `view`

---

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L10)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount()`

    **State Mutability**

    `view`

---

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L47)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **State Mutability**

    `nonpayable`

---

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L49)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **State Mutability**

    `nonpayable`

---

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **State Mutability**

    `nonpayable`

---

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **State Mutability**

    `nonpayable`

---

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L12)</sub>

??? example "Details"

    **Signature**

    `collateral(address account)`

    **State Mutability**

    `view`

---

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L14)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer)`

    **State Mutability**

    `view`

---

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L16)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L18)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOfAndTotalDebt(address issuer, bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L55)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `nonpayable`

---

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L61)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **State Mutability**

    `nonpayable`

---

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L68)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **State Mutability**

    `nonpayable`

---

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L70)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **State Mutability**

    `nonpayable`

---

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L72)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **State Mutability**

    `nonpayable`

---

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L74)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **State Mutability**

    `nonpayable`

---

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L23)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L25)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer)`

    **State Mutability**

    `view`

---

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L76)</sub>

??? example "Details"

    **Signature**

    `mint()`

    **State Mutability**

    `nonpayable`

---

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer)`

    **State Mutability**

    `view`

---

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L78)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey)`

    **State Mutability**

    `nonpayable`

---

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress)`

    **State Mutability**

    `view`

---

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L42)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey)`

    **State Mutability**

    `view`

---

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/interfaces/ISynthetix.sol#L44)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account)`

    **State Mutability**

    `view`
