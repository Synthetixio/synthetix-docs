# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol)

## Architecture

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

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L60)</sub>

**Type:** `bytes32`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L63)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L64)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L65)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L91)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L318)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L310)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L314)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L306)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L342)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L330)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L334)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L346)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L400)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L155)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L326)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L370)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L302)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L358)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L322)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeOtherCollateral) view returns (uint256 totalIssued)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L375)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L425)</sub>

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L433)</sub>

??? example "Details"

    **Signature**

    `addSynths(contract ISynth[] synthsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `burnForRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L556)</sub>

??? example "Details"

    **Signature**

    `burnForRedemption(address deprecatedSynthProxy, address account, uint256 balance)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthRedeemer](#onlysynthredeemer)

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L534)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L538)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L543)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L547)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L551)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L552)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L516)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L529)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L530)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L510)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L511)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L520)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L525)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L564)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "sUSD needs to be settled")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L570)

    * [require(..., "Account not open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L573)

    * [require(..., "Not enough sUSD")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L576)

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L583)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L485)</sub>

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L495)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L413)</sub>

??? example "Details"

    **Signature**

    `_addSynth(contract ISynth synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L415)

    * [require(..., "Synth address already exists")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L416)

    **Emits**

    * [SynthAdded](#synthadded)

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L740)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L167)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L672)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued) returns (uint256 amountBurnt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L229)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L288)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L277)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L208)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(uint256 debtShareBalance, bytes32 currencyKey) view returns (uint256 debtBalance, uint256 totalSystemValue, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtSharesToIssuedSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L159)</sub>

??? example "Details"

    **Signature**

    `_debtSharesToIssuedSynth(uint256 debtAmount, uint256 totalSystemValue, uint256 totalDebtShares) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L645)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L651)

### `_issuedSynthToDebtShares`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L163)</sub>

??? example "Details"

    **Signature**

    `_issuedSynthToDebtShares(uint256 sharesAmount, uint256 totalSystemValue, uint256 totalDebtShares) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L233)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L268)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L787)</sub>

??? example "Details"

    **Signature**

    `_onlySynthRedeemer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuer: Only the SynthRedeemer contract can perform this action")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L788)

### `_onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L778)</sub>

??? example "Details"

    **Signature**

    `_onlySynthetix() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuer: Only the synthetix contract can perform this action")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L779)

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L238)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L757)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L443)</sub>

??? example "Details"

    **Signature**

    `_removeSynth(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L445)

    * [require(..., "Cannot remove synth")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L446)

    **Emits**

    * [SynthRemoved](#synthremoved)

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L641)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L642)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L637)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L638)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L633)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "A synth or SNX rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L634)

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L731)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L260)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeCollateral) view returns (uint256 totalIssued, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L264)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L698)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L715)

    * [require(..., "No debt to forgive")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L716)

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L147)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IIssuerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L135)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L119)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L115)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L127)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L131)</sub>

??? example "Details"

    **Signature**

    `liquidations() view returns (contract ILiquidations)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L139)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L151)</sub>

??? example "Details"

    **Signature**

    `synthRedeemer() view returns (contract ISynthRedeemer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L111)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L123)</sub>

??? example "Details"

    **Signature**

    `synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L143)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `setCurrentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L621)</sub>

??? example "Details"

    **Signature**

    `setCurrentPeriodId(uint128 periodId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be fee pool")](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L622)

## Modifiers

### `onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L791)</sub>

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L782)</sub>

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L798)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.60.0/contracts/Issuer.sol#L799)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
