# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Issuer[Issuer] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![Synthetix architture graph](/img/graphs/Issuer-architecture.svg)
</centered-image>

??? example "Details"

    - [`FeePool`](FeePool.md): The Synthetix contract remits exchange fees as sUSD to the fee pool, and also uses it to keep track of historical issuance records for each issuer.
    - [`SynthetixState`](SynthetixState.md): This state contract stores the debt ledger and the current issuance information for synth issuers.

<!--
If any, see:

<centered-image>
    ![Synthetix architture graph](/img/graphs/Synthetix-architecture.svg)
</centered-image>
--->

## Constants

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L47)</sub>

**Type:** `bytes32`

## Variables

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L35)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L36)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L37)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L85)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L365)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L357)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L361)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSNXIssuedDebtForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L456)</sub>

??? example "Details"

    **Signature**

    `cachedSNXIssuedDebtForCurrencies(bytes32[] currencyKeys) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `cachedSNXIssuedDebtInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L476)</sub>

??? example "Details"

    **Signature**

    `cachedSNXIssuedDebtInfo() returns (uint256, uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L353)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L389)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L377)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L381)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSNXIssuedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L464)</sub>

??? example "Details"

    **Signature**

    `currentSNXIssuedDebt() returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentSNXIssuedDebtForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L447)</sub>

??? example "Details"

    **Signature**

    `currentSNXIssuedDebtForCurrencies(bytes32[] currencyKeys) returns (uint256[], bool)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L393)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtCacheIsStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L490)</sub>

??? example "Details"

    **Signature**

    `debtCacheIsStale() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtSnapshotStaleTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L147)</sub>

??? example "Details"

    **Signature**

    `debtSnapshotStaleTime() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L143)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L373)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L417)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L349)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L405)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L369)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L422)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L508)</sub>

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireSynthDoesNotExist](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L510)

    * [require(..., Synth address already exists)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L511)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthAdded](#synthadded)

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L581)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L585)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L590)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L594)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L598)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L599)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L563)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L576)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L577)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L559)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L567)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L572)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L603)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., sUSD needs to be settled)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L609)

    * [require(..., Account not open for liquidation)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L612)

    * [require(..., Not enough sUSD)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L615)

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L622)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `purgeDebtCacheForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L503)</sub>

??? example "Details"

    **Signature**

    `purgeDebtCacheForSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireSynthDoesNotExist](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L504)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L525)</sub>

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L527)

    * [require(..., Synth supply exists)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L528)

    * [require(..., Cannot remove synth)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L529)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthRemoved](#synthremoved)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L839)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L832)</sub>

??? example "Details"

    **Signature**

    `_appendAccountIssuanceRecord(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L151)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L761)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_cacheIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L197)</sub>

??? example "Details"

    **Signature**

    `_cacheIsInvalid(contract IFlexibleStorage store) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_cachedSNXIssuedDebtAndTimestamp`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L188)</sub>

??? example "Details"

    **Signature**

    `_cachedSNXIssuedDebtAndTimestamp(contract IFlexibleStorage store) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L276)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_changeDebtCacheValidityIfNeeded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L921)</sub>

??? example "Details"

    **Signature**

    `_changeDebtCacheValidityIfNeeded(contract IFlexibleStorage store, bool currentlyInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L335)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L324)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L238)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(address _issuer, bytes32 currencyKey) returns (uint256, uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L731)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L737)

### `_issuedSynthValues`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L165)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthValues(bytes32[] currencyKeys, uint256[] rates) returns (uint256[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L280)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L315)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L980)</sub>

??? example "Details"

    **Signature**

    `_onlySynthetix()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Issuer: Only the synthetix contract can perform this action)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L981)

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L285)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) returns (uint256, uint256, uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L879)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L727)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L728)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L723)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L724)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L719)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L720)

### `_requireSynthDoesNotExist`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L498)</sub>

??? example "Details"

    **Signature**

    `_requireSynthDoesNotExist(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Synth exists)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L499)

### `_requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L989)</sub>

??? example "Details"

    **Signature**

    `_requireSystemActiveIfNotOwner()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L823)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L307)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L201)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_updateSNXIssuedDebtForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L929)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtForCurrencies(bytes32[] currencyKeys, uint256[] currentRates, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input array lengths differ)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L935)

### `_updateSNXIssuedDebtForSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L970)</sub>

??? example "Details"

    **Signature**

    `_updateSNXIssuedDebtForSynth(bytes32 currencyKey, uint256 currencyRate)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L311)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L790)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L807)

    * [require(..., No debt to forgive)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L808)

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L122)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L126)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L130)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L102)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L98)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L110)</sub>

??? example "Details"

    **Signature**

    `feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L114)</sub>

??? example "Details"

    **Signature**

    `liquidations() returns (contract ILiquidations)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L135)</sub>

??? example "Details"

    **Signature**

    `rewardEscrow() returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L139)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L106)</sub>

??? example "Details"

    **Signature**

    `synthetixState() returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L118)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `cacheSNXIssuedDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L662)</sub>

??? example "Details"

    **Signature**

    `cacheSNXIssuedDebt()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

    **Emits**

    * [DebtCacheUpdated](#debtcacheupdated)

    * [DebtCacheSynchronised](#debtcachesynchronised)

### `updateSNXIssuedDebtForCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L689)</sub>

??? example "Details"

    **Signature**

    `updateSNXIssuedDebtForCurrencies(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [requireSystemActiveIfNotOwner](#requiresystemactiveifnotowner)

### `updateSNXIssuedDebtOnExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L694)</sub>

??? example "Details"

    **Signature**

    `updateSNXIssuedDebtOnExchange(bytes32[2] currencyKeys, uint256[2] currencyRates)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Sender is not Exchanger)](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L695)

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L984)</sub>

### `requireSystemActiveIfNotOwner`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L995)</sub>

## Events

### `DebtCacheSynchronised`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L1005)</sub>

**Signature**: `DebtCacheSynchronised(uint256 timestamp)`

### `DebtCacheUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L1004)</sub>

**Signature**: `DebtCacheUpdated(uint256 cachedDebt)`

### `DebtCacheValidityChanged`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L1006)</sub>

**Signature**: `DebtCacheValidityChanged(bool isInvalid)`

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L1002)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.30.1/contracts/Issuer.sol#L1003)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
