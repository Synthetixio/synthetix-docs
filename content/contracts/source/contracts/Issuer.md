# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L34)</sub>

**Type:** `bytes32`

### `LAST_ISSUE_EVENT`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L35)</sub>

**Type:** `bytes32`

## Variables

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L38)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L39)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L40)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L70)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L313)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L305)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L309)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L301)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L339)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L327)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L331)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L343)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L127)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L323)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L367)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L297)</sub>

??? example "Details"

    **Signature**

    `minimumStakeTime() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L355)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) returns (uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L319)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L371)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) returns (uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L398)</sub>

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth already exists)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L401)

    * [require(..., Synth address already exists)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L402)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthAdded](#synthadded)

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L502)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L493)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L498)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L576)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L571)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L572)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L484)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L488)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L461)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L462)

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L468)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L473)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L477)

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L479)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L443)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not approved to act on behalf)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L448)

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L454)

    * [require(..., Amount too large)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L456)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L628)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., sUSD needs to be settled)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L634)

    * [require(..., Account not open for liquidation)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L638)

    * [require(..., Not enough sUSD)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L641)

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L653)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L411)</sub>

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L412)

    * [require(..., Synth supply exists)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L413)

    * [require(..., Cannot remove synth)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L414)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [SynthRemoved](#synthremoved)

## Internal Functions

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L707)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L699)</sub>

??? example "Details"

    **Signature**

    `_appendAccountIssuanceRecord(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L528)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address from, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Minimum stake time not reached)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L529)

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L537)

    * [require(..., No debt to forgive)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L539)

### `_burnSynthsForLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L552)</sub>

??? example "Details"

    **Signature**

    `_burnSynthsForLiquidation(address burnForAddress, address liquidator, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L582)</sub>

??? example "Details"

    **Signature**

    `_burnSynthsToTarget(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., A synth or SNX rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L586)

    * [require(..., No debt to forgive)](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L588)

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L233)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L281)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L270)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(address _issuer, bytes32 currencyKey) returns (uint256, uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_internalBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L599)</sub>

??? example "Details"

    **Signature**

    `_internalBurnSynths(address from, uint256 amount, uint256 existingDebt, uint256 totalSystemValue, uint256 maxIssuableSynthsForAccount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_internalIssueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L508)</sub>

??? example "Details"

    **Signature**

    `_internalIssueSynths(address from, uint256 amount, uint256 existingDebt, uint256 totalSystemDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L237)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L262)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L242)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) returns (uint256, uint256, uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L749)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L690)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L145)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L106)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L110)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L114)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L90)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L86)</sub>

??? example "Details"

    **Signature**

    `exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L98)</sub>

??? example "Details"

    **Signature**

    `feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L102)</sub>

??? example "Details"

    **Signature**

    `liquidations() returns (contract ILiquidations)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L119)</sub>

??? example "Details"

    **Signature**

    `rewardEscrow() returns (contract IRewardEscrow)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L78)</sub>

??? example "Details"

    **Signature**

    `synthetix() returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L82)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L123)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `synthetixState() returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L795)</sub>

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L802)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.28.4/contracts/Issuer.sol#L803)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
