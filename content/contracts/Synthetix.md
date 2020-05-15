# Synthetix

**Source:** [contracts/Synthetix.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Synthetix[Synthetix] --> ExternStateToken[ExternStateToken]
    Synthetix[Synthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

## Variables

---

### `availableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L29)</sub>

**Type:** `contract ISynth[]`

---

### `synths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L30)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

---

### `synthsByAddress`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L31)</sub>

**Type:** `mapping(address => bytes32)`

---

### `TOKEN_NAME`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L33)</sub>

**Type:** `string`

---

### `TOKEN_SYMBOL`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L34)</sub>

**Type:** `string`

---

### `DECIMALS`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L35)</sub>

**Type:** `uint8`

---

### `sUSD`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L36)</sub>

**Type:** `bytes32`

---

### `SYNTHEXCHANGE_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L606)</sub>

**Type:** `bytes32`

---

### `EXCHANGERECLAIM_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L629)</sub>

**Type:** `bytes32`

---

### `EXCHANGEREBATE_SIG`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L640)</sub>

**Type:** `bytes32`

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L66)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver) public`

    **Modifiers**

    * [ExternStateToken](#externstatetoken)

    * [MixinResolver](#mixinresolver)

---

### `totalIssuedSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L156)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey) public`

---

### `totalIssuedSynthsExcludeEtherCollateral`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L164)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey) public`

---

### `availableCurrencyKeys`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L168)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() public`

---

### `availableSynthCount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L178)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() external`

---

### `isWaitingPeriod`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L182)</sub>

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey) external`

---

### `addSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L192)</sub>

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth) external`

    **Requires**

    * [require(..., Synth already exists)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L195)

    * [require(..., Synth address already exists)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L196)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `removeSynth`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L207)</sub>

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey) external`

    **Requires**

    * [require(..., Synth does not exist)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L208)

    * [require(..., Synth supply exists)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L209)

    * [require(..., Cannot remove synth)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L210)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

---

### `transfer`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L244)</sub>

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) public`

    **Requires**

    * [require(..., Cannot transfer staked or escrowed SNX)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L248)

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `transferFrom`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L259)</sub>

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) public`

    **Requires**

    * [require(..., Cannot transfer staked or escrowed SNX)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L267)

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `issueSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L274)</sub>

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `issueSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L280)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `issueMaxSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L286)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths() external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `issueMaxSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L292)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `burnSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L298)</sub>

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `burnSynthsOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L304)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `burnSynthsToTarget`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L310)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget() external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `burnSynthsToTargetOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L316)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `exchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L322)</sub>

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `exchangeOnBehalf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L334)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `settle`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L354)</sub>

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey) external`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

---

### `maxIssuableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L372)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) public`

---

### `collateralisationRatio`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L396)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) public`

---

### `debtBalanceOf`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L410)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) public`

---

### `debtBalanceOfAndTotalDebt`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L430)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOfAndTotalDebt(address _issuer, bytes32 currencyKey) public`

---

### `remainingIssuableSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L468)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) public`

---

### `collateral`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L494)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) public`

---

### `transferableSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L514)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetix(address account) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

---

### `mint`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L545)</sub>

??? example "Details"

    **Signature**

    `mint() external`

    **Requires**

    * [require(..., RewardsDistribution not set)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L546)

    * [require(..., No supply is mintable)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L554)

---

### `emitSynthExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L610)</sub>

??? example "Details"

    **Signature**

    `emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress) external`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

---

### `emitExchangeReclaim`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L631)</sub>

??? example "Details"

    **Signature**

    `emitExchangeReclaim(address account, bytes32 currencyKey, uint256 amount) external`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

---

### `emitExchangeRebate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L642)</sub>

??? example "Details"

    **Signature**

    `emitExchangeRebate(address account, bytes32 currencyKey, uint256 amount) external`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

---

## Modifiers

---

### `rateNotStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L586)</sub>

---

### `onlyExchanger`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L591)</sub>

---

## Events

---

### `SynthExchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L598)</sub>

- `(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`

---

### `ExchangeReclaim`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L628)</sub>

- `(address account, bytes32 currencyKey, uint256 amount)`

---

### `ExchangeRebate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Synthetix.sol#L639)</sub>

- `(address account, bytes32 currencyKey, uint256 amount)`

---

