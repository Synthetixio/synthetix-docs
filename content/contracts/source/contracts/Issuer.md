# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol)

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

### `CIRCUIT_BREAKER_SUSPENSION_REASON`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L67)</sub>

**Type:** `uint256`

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L64)</sub>

**Type:** `bytes32`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L70)</sub>

**Type:** `contract ISynth[]`

### `lastDebtRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L74)</sub>

**Type:** `uint256`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L71)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L72)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L107)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allNetworksDebtInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L183)</sub>

??? example "Details"

    **Signature**

    `allNetworksDebtInfo() view returns (uint256 debt, uint256 sharesSupply, bool isStale)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L390)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L382)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L386)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L378)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L414)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L402)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L406)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L418)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L472)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L209)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L398)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L442)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L374)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L430)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L110)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L394)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeOtherCollateral) view returns (uint256 totalIssued)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L447)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L497)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L505)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L687)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L665)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L669)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L674)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L678)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L682)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L683)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L604)</sub>

??? example "Details"

    **Signature**

    `burnSynthsWithoutDebt(bytes32 currencyKey, address from, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L609)

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L610)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L647)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L660)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L661)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L641)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L642)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L651)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L656)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L582)</sub>

??? example "Details"

    **Signature**

    `issueSynthsWithoutDebt(bytes32 currencyKey, address to, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L587)

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L588)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `liquidateAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L701)</sub>

??? example "Details"

    **Signature**

    `liquidateAccount(address account, bool isSelfLiquidation) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Not open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L706)

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L717)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L557)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L567)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setLastDebtRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L763)</sub>

??? example "Details"

    **Signature**

    `setLastDebtRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `upgradeCollateralShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L630)</sub>

??? example "Details"

    **Signature**

    `upgradeCollateralShort(address short, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: invalid address")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L631)

    * [require(..., "Issuer: wrong short address")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L632)

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L633)

    * [require(..., "Issuer: cannot burn 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L634)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L485)</sub>

??? example "Details"

    **Signature**

    `_addSynth(contract ISynth synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L487)

    * [require(..., "Synth address already exists")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L488)

    **Emits**

    * [SynthAdded](#synthadded)

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L891)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L227)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L813)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt) returns (uint256 amountBurnt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_calculateDeviation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L942)</sub>

??? example "Details"

    **Signature**

    `_calculateDeviation(uint256 last, uint256 fresh) pure returns (uint256 deviation)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L293)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L356)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L344)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L268)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(uint256 debtShareBalance, bytes32 currencyKey) view returns (uint256 debtBalance, uint256 totalSystemValue, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtForShares`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_debtForShares(uint256 sharesAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L781)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L792)

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L297)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L335)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L968)</sub>

??? example "Details"

    **Signature**

    `_onlySynthRedeemer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuer: Only the SynthRedeemer contract can perform this action")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L969)

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L302)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L907)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L515)</sub>

??? example "Details"

    **Signature**

    `_removeSynth(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L517)

    * [require(..., "Cannot remove synth")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L518)

    **Emits**

    * [SynthRemoved](#synthremoved)

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L777)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L778)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L773)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L774)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L769)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "A synth or SNX rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L770)

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L882)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_sharesForDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L213)</sub>

??? example "Details"

    **Signature**

    `_sharesForDebt(uint256 debtAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L327)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L243)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeCollateral) view returns (uint256 totalIssued, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L331)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_verifyCircuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L927)</sub>

??? example "Details"

    **Signature**

    `_verifyCircuitBreaker() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L843)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L866)

    * [require(..., "No debt to forgive")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L867)

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L171)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IIssuerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L159)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L139)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L135)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L147)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L151)</sub>

??? example "Details"

    **Signature**

    `liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L155)</sub>

??? example "Details"

    **Signature**

    `liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L163)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L175)</sub>

??? example "Details"

    **Signature**

    `synthRedeemer() view returns (contract ISynthRedeemer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L131)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L143)</sub>

??? example "Details"

    **Signature**

    `synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L167)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L179)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `setCurrentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L753)</sub>

??? example "Details"

    **Signature**

    `setCurrentPeriodId(uint128 periodId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be fee pool")](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L754)

## Modifiers

### `issuanceActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L977)</sub>

### `onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L972)</sub>

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L955)</sub>

### `onlyTrustedMinters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L960)</sub>

### `synthActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L986)</sub>

**Signature**: `synthActive(bytes32 currencyKey)`

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L997)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.75.2/contracts/Issuer.sol#L998)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
