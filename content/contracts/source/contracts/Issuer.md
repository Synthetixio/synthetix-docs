# Issuer

## Description

This contract does all the heavy lifting of issuing and burning `sUSD`. It's used primarily to reduce the size of the `Synthetix` contract

**Source:** [contracts/Issuer.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L72)</sub>

**Type:** `bytes32`

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L60)</sub>

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L61)</sub>

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L62)</sub>

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L91)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L452)</sub>

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L460)</sub>

??? example "Details"

    **Signature**

    `addSynths(contract ISynth[] synthsToAdd)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L547)</sub>

??? example "Details"

    **Signature**

    `burnSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L551)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L556)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L560)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTarget(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L564)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireCanBurnOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L565)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L529)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynths(address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L542)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress, address from)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L543)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L525)</sub>

??? example "Details"

    **Signature**

    `issueSynths(address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L533)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, address from, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireCanIssueOnBehalf](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L538)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `liquidateDelinquentAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L569)</sub>

??? example "Details"

    **Signature**

    `liquidateDelinquentAccount(address account, uint256 susdAmount, address liquidator) returns (uint256 totalRedeemed, uint256 amountToLiquidate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "sUSD needs to be settled")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L575)

    * [require(..., "Account not open for liquidation")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L578)

    * [require(..., "Not enough sUSD")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L581)

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L588)

    **Modifiers**

    * [onlySynthetix](#onlysynthetix)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L500)</sub>

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `removeSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L510)</sub>

??? example "Details"

    **Signature**

    `removeSynths(bytes32[] currencyKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L440)</sub>

??? example "Details"

    **Signature**

    `_addSynth(contract ISynth synth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth exists")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L442)

    * [require(..., "Synth address already exists")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L443)

    **Emits**

    * [SynthAdded](#synthadded)

### `_addToDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L750)</sub>

??? example "Details"

    **Signature**

    `_addToDebtRegister(address from, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_appendAccountIssuanceRecord`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L743)</sub>

??? example "Details"

    **Signature**

    `_appendAccountIssuanceRecord(address from)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_availableCurrencyKeysWithOptionalSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L169)</sub>

??? example "Details"

    **Signature**

    `_availableCurrencyKeysWithOptionalSNX(bool withSNX) view returns (bytes32[])`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L672)</sub>

??? example "Details"

    **Signature**

    `_burnSynths(address debtAccount, address burnAccount, uint256 amount, uint256 existingDebt, uint256 totalDebtIssued) returns (uint256 amountBurnt)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L256)</sub>

??? example "Details"

    **Signature**

    `_canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L315)</sub>

??? example "Details"

    **Signature**

    `_collateral(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L304)</sub>

??? example "Details"

    **Signature**

    `_collateralisationRatio(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L218)</sub>

??? example "Details"

    **Signature**

    `_debtBalanceOfAndTotalDebt(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance, uint256 totalSystemValue, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L642)</sub>

??? example "Details"

    **Signature**

    `_issueSynths(address from, uint256 amount, bool issueMax)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L648)

### `_lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L260)</sub>

??? example "Details"

    **Signature**

    `_lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L295)</sub>

??? example "Details"

    **Signature**

    `_maxIssuableSynths(address _issuer) view returns (uint256, bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L834)</sub>

??? example "Details"

    **Signature**

    `_onlySynthetix() view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Issuer: Only the synthetix contract can perform this action")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L835)

### `_remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L265)</sub>

??? example "Details"

    **Signature**

    `_remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_removeFromDebtRegister`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L790)</sub>

??? example "Details"

    **Signature**

    `_removeFromDebtRegister(address from, uint256 debtToRemove, uint256 existingDebt, uint256 totalDebtIssued)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L470)</sub>

??? example "Details"

    **Signature**

    `_removeSynth(bytes32 currencyKey)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Synth does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L472)

    * [require(..., "Synth supply exists")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L473)

    * [require(..., "Cannot remove synth")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L474)

    **Emits**

    * [SynthRemoved](#synthremoved)

### `_requireCanBurnOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L638)</sub>

??? example "Details"

    **Signature**

    `_requireCanBurnOnBehalf(address burnForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L639)

### `_requireCanIssueOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L634)</sub>

??? example "Details"

    **Signature**

    `_requireCanIssueOnBehalf(address issueForAddress, address from) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not approved to act on behalf")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L635)

### `_requireRatesNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L630)</sub>

??? example "Details"

    **Signature**

    `_requireRatesNotInvalid(bool anyRateIsInvalid) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "A synth or SNX rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L631)

### `_setLastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L734)</sub>

??? example "Details"

    **Signature**

    `_setLastIssueEvent(address account)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_snxToUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L287)</sub>

??? example "Details"

    **Signature**

    `_snxToUSD(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeCollateral) view returns (uint256 totalIssued, bool anyRateIsInvalid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_usdToSnx`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L291)</sub>

??? example "Details"

    **Signature**

    `_usdToSnx(uint256 amount, uint256 snxRate) pure returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_voluntaryBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L701)</sub>

??? example "Details"

    **Signature**

    `_voluntaryBurnSynths(address from, uint256 amount, bool burnToTarget)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [_requireRatesNotInvalid](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L718)

    * [require(..., "No debt to forgive")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L719)

### `collateralManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L149)</sub>

??? example "Details"

    **Signature**

    `collateralManager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `debtCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L161)</sub>

??? example "Details"

    **Signature**

    `debtCache() view returns (contract IIssuerInternalDebtCache)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `delegateApprovals`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L137)</sub>

??? example "Details"

    **Signature**

    `delegateApprovals() view returns (contract IDelegateApprovals)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L141)</sub>

??? example "Details"

    **Signature**

    `etherCollateral() view returns (contract IEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `etherCollateralsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L145)</sub>

??? example "Details"

    **Signature**

    `etherCollateralsUSD() view returns (contract IEtherCollateralsUSD)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L121)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L117)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L129)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `liquidations`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L133)</sub>

??? example "Details"

    **Signature**

    `liquidations() view returns (contract ILiquidations)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `rewardEscrowV2`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L153)</sub>

??? example "Details"

    **Signature**

    `rewardEscrowV2() view returns (contract IRewardEscrowV2)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L113)</sub>

??? example "Details"

    **Signature**

    `synthetix() view returns (contract ISynthetix)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L157)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow() view returns (contract IHasBalance)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L125)</sub>

??? example "Details"

    **Signature**

    `synthetixState() view returns (contract ISynthetixState)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `anySynthOrSNXRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L345)</sub>

??? example "Details"

    **Signature**

    `anySynthOrSNXRateIsInvalid() view returns (bool anyRateInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L337)</sub>

??? example "Details"

    **Signature**

    `availableCurrencyKeys() view returns (bytes32[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L341)</sub>

??? example "Details"

    **Signature**

    `availableSynthCount() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `canBurnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L333)</sub>

??? example "Details"

    **Signature**

    `canBurnSynths(address account) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L369)</sub>

??? example "Details"

    **Signature**

    `collateral(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L357)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer) view returns (uint256 cratio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralisationRatioAndAnyRatesInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L361)</sub>

??? example "Details"

    **Signature**

    `collateralisationRatioAndAnyRatesInvalid(address _issuer) view returns (uint256 cratio, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L373)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey) view returns (uint256 debtBalance)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L427)</sub>

??? example "Details"

    **Signature**

    `getSynths(bytes32[] currencyKeys) view returns (contract ISynth[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L165)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `lastIssueEvent`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L353)</sub>

??? example "Details"

    **Signature**

    `lastIssueEvent(address account) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L397)</sub>

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `minimumStakeTime`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L329)</sub>

**Type:** `uint256`

??? example "Details"

    **Signature**

    `minimumStakeTime() view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L385)</sub>

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer) view returns (uint256 maxIssuable, uint256 alreadyIssued, uint256 totalSystemDebt)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L94)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L349)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral) view returns (uint256 totalIssued)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `transferableSynthetixAndAnyRateIsInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L402)</sub>

??? example "Details"

    **Signature**

    `transferableSynthetixAndAnyRateIsInvalid(address account, uint256 balance) view returns (uint256 transferable, bool anyRateIsInvalid)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

## Modifiers

### `onlySynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L838)</sub>

## Events

### `SynthAdded`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L845)</sub>

**Signature**: `SynthAdded(bytes32 currencyKey, address synth)`

### `SynthRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Issuer.sol#L846)</sub>

**Signature**: `SynthRemoved(bytes32 currencyKey, address synth)`
