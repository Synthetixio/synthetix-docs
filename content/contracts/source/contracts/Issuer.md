# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L61)</sub>

**Type:** `bytes32`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L64)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L65)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L66)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L101)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allNetworksDebtInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L169)</sub>

??? example "Details"

    **Signature**

    `allNetworksDebtInfo() view returns (uint256 debt, uint256 sharesSupply, bool isStale)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L390)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L382)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L386)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L378)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L414)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L402)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L406)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L418)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L470)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L193)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L398)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L488)</sub>

??? example "Details"

    **Signature**

    `liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 initialDebtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L440)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L374)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L428)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L104)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L394)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeOtherCollateral) view returns (uint256 totalIssued)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L445)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L515)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L523)</sub>

??? example "Details"

    **Signature**

    `addSynths(contract ISynth[] synthsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `burnAndIssueSynthsWithoutDebtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L651)</sub>

??? example "Details"

    **Signature**

    `burnAndIssueSynthsWithoutDebtCache(address account, bytes32 currencyKey, uint256 amountOfSynth, uint256 amountInsUSD)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlySynthRedeemer](#onlysynthredeemer)

### `burnForRedemption`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L731)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L709)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L713)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L718)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L722)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L726)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L727)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L622)</sub>

??? example "Details"

    **Signature**

    `burnSynthsWithoutDebt(bytes32 currencyKey, address from, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L627)

    * [require(..., "cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L628)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L691)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L704)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L705)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L685)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L686)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L695)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L700)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L600)</sub>

??? example "Details"

    **Signature**

    `issueSynthsWithoutDebt(bytes32 currencyKey, address to, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L605)

    * [require(..., "cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L606)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `liquidateAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L748)</sub>

??? example "Details"

    **Signature**

    `liquidateAccount(address account, bool isSelfLiquidation) returns (uint256 totalRedeemed, uint256 debtRemoved, uint256 escrowToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Not open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L757)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `modifyDebtSharesForMigration`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L675)</sub>

??? example "Details"

    **Signature**

    `modifyDebtSharesForMigration(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyTrustedMigrators](#onlytrustedmigrators)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L575)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L585)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L503)</sub>

??? example "Details"

    **Signature**

    `_addSynth(contract ISynth synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L505)

    * [require(..., "Synth address already exists")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L506)

    **Emits**

    * [SynthAdded](#synthadded)

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1001)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L243)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L926)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt) returns (uint256 amountBurnt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L307)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L370)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L359)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L282)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(uint256 debtShareBalance, bytes32 currencyKey) view returns (uint256 debtBalance, uint256 totalSystemValue, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtForShares`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L226)</sub>

??? example "Details"

    **Signature**

    `_debtForShares(uint256 sharesAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtShareBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L231)</sub>

??? example "Details"

    **Signature**

    `_debtShareBalanceOf(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getMinValue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L867)</sub>

??? example "Details"

    **Signature**

    `_getMinValue(uint256 x, uint256 y) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L895)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L905)

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L311)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_latestRoundData`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L201)</sub>

??? example "Details"

    **Signature**

    `_latestRoundData(address aggregator) view returns (uint80, int256, uint256, uint256, uint80)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L776)</sub>

??? example "Details"

    **Signature**

    `_liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 debtBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L792)

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L346)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1068)</sub>

??? example "Details"

    **Signature**

    `_onlySynthRedeemer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Only SynthRedeemer")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1069)

### `_rateAndInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L197)</sub>

??? example "Details"

    **Signature**

    `_rateAndInvalid(bytes32 currencyKey) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_rawDebtRatioAndUpdatedAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L215)</sub>

??? example "Details"

    **Signature**

    `_rawDebtRatioAndUpdatedAt() view returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_redeemableCollateralForTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L848)</sub>

??? example "Details"

    **Signature**

    `_redeemableCollateralForTarget(address account, uint256 redeemTarget, uint256 rewardsSum) view returns (uint256 totalRedeemed, uint256 escrowToLiquidate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L316)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1017)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L533)</sub>

??? example "Details"

    **Signature**

    `_removeSynth(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L535)

    * [require(..., "Cannot remove synth")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L536)

    **Emits**

    * [SynthRemoved](#synthremoved)

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L891)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L892)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L887)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L888)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L883)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "A synth or SNX rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L884)

### `_rewardEscrowBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L239)</sub>

??? example "Details"

    **Signature**

    `_rewardEscrowBalanceOf(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L992)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_sharesForDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L221)</sub>

??? example "Details"

    **Signature**

    `_sharesForDebt(uint256 debtAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_snxBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L235)</sub>

??? example "Details"

    **Signature**

    `_snxBalanceOf(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L338)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L259)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeCollateral) view returns (uint256 totalIssued, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L342)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_verifyCircuitBreakers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1038)</sub>

??? example "Details"

    **Signature**

    `_verifyCircuitBreakers() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L955)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L976)

    * [require(..., "No debt to forgive")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L977)

### `circuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L137)</sub>

??? example "Details"

    **Signature**

    `circuitBreaker() view returns (contract ICircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L161)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IIssuerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L153)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L133)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L129)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L145)</sub>

??? example "Details"

    **Signature**

    `liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L149)</sub>

??? example "Details"

    **Signature**

    `liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L157)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L165)</sub>

??? example "Details"

    **Signature**

    `synthRedeemer() view returns (contract ISynthRedeemer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L141)</sub>

??? example "Details"

    **Signature**

    `synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L125)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `setCurrentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L871)</sub>

??? example "Details"

    **Signature**

    `setCurrentPeriodId(uint128 periodId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be fee pool")](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L872)

## Modifiers

### `onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1075)</sub>

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1047)</sub>

### `onlyTrustedMigrators`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1060)</sub>

### `onlyTrustedMinters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1052)</sub>

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1082)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.102.0/contracts/Issuer.sol#L1083)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
