# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L61)</sub>

**Type:** `bytes32`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L64)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L65)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L66)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L98)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `allNetworksDebtInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L170)</sub>

??? example "Details"

    **Signature**

    `allNetworksDebtInfo() view returns (uint256 debt, uint256 sharesSupply, bool isStale)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L368)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L360)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L364)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L356)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L392)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L380)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L384)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L396)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L450)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L194)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L376)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `liquidationAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L468)</sub>

??? example "Details"

    **Signature**

    `liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 initialDebtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L420)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L352)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L408)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L372)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeOtherCollateral) view returns (uint256 totalIssued)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L425)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L495)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L503)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L685)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L663)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L667)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L672)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L676)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L680)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L681)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L602)</sub>

??? example "Details"

    **Signature**

    `burnSynthsWithoutDebt(bytes32 currencyKey, address from, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L607)

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L608)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L645)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L658)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L659)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L639)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L640)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L649)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L654)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsWithoutDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L580)</sub>

??? example "Details"

    **Signature**

    `issueSynthsWithoutDebt(bytes32 currencyKey, address to, uint256 amount) returns (bool rateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L585)

    * [require(..., "Issuer: cannot issue 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L586)

    **Modifiers**

    * [onlyTrustedMinters](#onlytrustedminters)

### `liquidateAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L702)</sub>

??? example "Details"

    **Signature**

    `liquidateAccount(address account, bool isSelfLiquidation) returns (uint256 totalRedeemed, uint256 debtRemoved, uint256 escrowToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Not open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L711)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L555)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L565)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `upgradeCollateralShort`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L628)</sub>

??? example "Details"

    **Signature**

    `upgradeCollateralShort(address short, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Issuer: invalid address")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L629)

    * [require(..., "Issuer: wrong short address")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L630)

    * [require(..., "Issuer: synth doesn't exist")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L631)

    * [require(..., "Issuer: cannot burn 0 synths")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L632)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L483)</sub>

??? example "Details"

    **Signature**

    `_addSynth(contract ISynth synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L485)

    * [require(..., "Synth address already exists")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L486)

    **Emits**

    * [SynthAdded](#synthadded)

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L957)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L214)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L881)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt) returns (uint256 amountBurnt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L280)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L343)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L331)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L255)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(uint256 debtShareBalance, bytes32 currencyKey) view returns (uint256 debtBalance, uint256 totalSystemValue, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_debtForShares`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L209)</sub>

??? example "Details"

    **Signature**

    `_debtForShares(uint256 sharesAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L850)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L860)

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L284)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidationAmounts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L727)</sub>

??? example "Details"

    **Signature**

    `_liquidationAmounts(address account, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 debtToRemove, uint256 escrowToLiquidate, uint256 debtBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L751)

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L322)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1016)</sub>

??? example "Details"

    **Signature**

    `_onlySynthRedeemer() view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Issuer: Only SynthRedeemer")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1017)

### `_rawDebtRatioAndUpdatedAt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L198)</sub>

??? example "Details"

    **Signature**

    `_rawDebtRatioAndUpdatedAt() view returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_redeemableCollateralForTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L795)</sub>

??? example "Details"

    **Signature**

    `_redeemableCollateralForTarget(address account, uint256 redeemTarget, bool isSelfLiquidation) view returns (uint256 totalRedeemed, uint256 escrowToLiquidate)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L289)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L973)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L513)</sub>

??? example "Details"

    **Signature**

    `_removeSynth(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Synth does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L515)

    * [require(..., "Cannot remove synth")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L516)

    **Emits**

    * [SynthRemoved](#synthremoved)

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L846)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L847)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L842)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L843)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L838)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "A synth or SNX rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L839)

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L948)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_sharesForDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L204)</sub>

??? example "Details"

    **Signature**

    `_sharesForDebt(uint256 debtAmount) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L314)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L230)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeCollateral) view returns (uint256 totalIssued, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L318)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `_verifyCircuitBreakers`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L994)</sub>

??? example "Details"

    **Signature**

    `_verifyCircuitBreakers() returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L910)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L932)

    * [require(..., "No debt to forgive")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L933)

### `circuitBreaker`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L134)</sub>

??? example "Details"

    **Signature**

    `circuitBreaker() view returns (contract ICircuitBreaker)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L162)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IIssuerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L150)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L130)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L126)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidator`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L142)</sub>

??? example "Details"

    **Signature**

    `liquidator() view returns (contract ILiquidator)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidatorRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L146)</sub>

??? example "Details"

    **Signature**

    `liquidatorRewards() view returns (contract ILiquidatorRewards)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L154)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L166)</sub>

??? example "Details"

    **Signature**

    `synthRedeemer() view returns (contract ISynthRedeemer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixDebtShare`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L138)</sub>

??? example "Details"

    **Signature**

    `synthetixDebtShare() view returns (contract ISynthetixDebtShare)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixERC20`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L122)</sub>

??? example "Details"

    **Signature**

    `synthetixERC20() view returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L158)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `setCurrentPeriodId`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L826)</sub>

??? example "Details"

    **Signature**

    `setCurrentPeriodId(uint128 periodId)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be fee pool")](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L827)

## Modifiers

### `onlySynthRedeemer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1020)</sub>

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1003)</sub>

### `onlyTrustedMinters`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1008)</sub>

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1027)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.77.0-alpha/contracts/Issuer.sol#L1028)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
