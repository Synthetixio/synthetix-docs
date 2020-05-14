# ISynthetix

**Source:** [contracts/interfaces/ISynthetix.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol)

## Functions

---

### `availableCurrencyKeys`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L8)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() external`

---

### `availableSynthCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L10)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() external`

---

### `collateral`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L12)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) external`

---

### `collateralisationRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L14)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address issuer) external`

---

### `debtBalanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L16)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address issuer, bytes32 currencyKey) external`

---

### `debtBalanceOfAndTotalDebt`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L18)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOfAndTotalDebt(address issuer, bytes32 currencyKey) external`

---

### `isWaitingPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L23)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) external`

---

### `maxIssuableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L25)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address issuer) external`

---

### `remainingIssuableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L27)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address issuer) external`

---

### `synths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L36)</sub>

??? example "Details"

    **Signature**

    `synths(bytes32 currencyKey) external`

---

### `synthsByAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L38)</sub>

??? example "Details"

    **Signature**

    `synthsByAddress(address synthAddress) external`

---

### `totalIssuedSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L40)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) external`

---

### `totalIssuedSynthsExcludeEtherCollateral`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L42)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) external`

---

### `transferableSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L44)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) external`

---

### `burnSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L47)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount) external`

---

### `burnSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L49)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount) external`

---

### `burnSynthsToTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L51)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget() external`

---

### `burnSynthsToTargetOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L53)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress) external`

---

### `exchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L55)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`

---

### `exchangeOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L61)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`

---

### `issueMaxSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L68)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths() external`

---

### `issueMaxSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L70)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress) external`

---

### `issueSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L72)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount) external`

---

### `issueSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L74)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount) external`

---

### `mint`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L76)</sub>

??? example "Details"

    **Signature**

    `mint() external`

---

### `settle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/interfaces/ISynthetix.sol#L78)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) external`

---

