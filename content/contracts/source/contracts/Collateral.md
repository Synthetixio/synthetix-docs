# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Collateral[Collateral] --> Owned[Owned]
    Collateral[Collateral] --> MixinSystemSettings[MixinSystemSettings]
    MixinSystemSettings[MixinSystemSettings] --> MixinResolver[MixinResolver]

```

## Variables

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L71)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L37)</sub>

**Type:** `bytes32`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L69)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L62)</sub>

**Type:** `uint256`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L42)</sub>

**Type:** `address`

### `maxLoansPerAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L65)</sub>

**Type:** `uint256`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L59)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L56)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L51)</sub>

**Type:** `mapping(bytes32 => address)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L40)</sub>

**Type:** `contract CollateralState`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L45)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L48)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L83)</sub>

??? example "Details"

    **Signature**

    `(contract CollateralState _state, address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L189)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L147)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `collateralRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L182)</sub>

??? example "Details"

    **Signature**

    `collateralRedeemed(bytes32 currency, uint256 amount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L167)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L154)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L251)</sub>

??? example "Details"

    **Signature**

    `addRewardsContracts(address rewardsContract, bytes32 synth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L236)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Input array length mismatch)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L237)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L279)</sub>

??? example "Details"

    **Signature**

    `setCanOpenLoans(bool _canOpenLoans)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CanOpenLoansUpdated](#canopenloansupdated)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L268)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Max 1 hour)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L269)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L263)</sub>

??? example "Details"

    **Signature**

    `setIssueFeeRate(uint256 _issueFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)

### `setManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L274)</sub>

??? example "Details"

    **Signature**

    `setManager(address _newManager)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ManagerUpdated](#managerupdated)

### `setMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L257)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must be greater than 1)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L258)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

## Internal Functions

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L223)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan _loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Loan does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L224)

    * [require(..., Loan recently interacted with)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L225)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L214)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Not enough synth balance)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L219)

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L129)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L133)</sub>

??? example "Details"

    **Signature**

    `_exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_manager() returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L769)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L740)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loanBefore, uint256 payment) returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L117)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L704)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(struct ICollateralLoan.Loan loan) returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Rates are invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L717)

### `closeByLiquidationInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L426)</sub>

??? example "Details"

    **Signature**

    `closeByLiquidationInternal(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L441)

    **Emits**

    * [LoanClosedByLiquidation](#loanclosedbyliquidation)

### `closeInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L368)</sub>

??? example "Details"

    **Signature**

    `closeInternal(address borrower, uint256 id) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L373)

    * [require(..., Waiting secs or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L391)

    **Emits**

    * [LoanClosed](#loanclosed)

### `depositInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L470)</sub>

??? example "Details"

    **Signature**

    `depositInternal(address account, uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L479)

    * [require(..., Deposit must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L482)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `drawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L649)</sub>

??? example "Details"

    **Signature**

    `drawInternal(uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L654)

    * [require(..., Cannot draw this much)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L669)

    **Emits**

    * [LoanDrawnDown](#loandrawndown)

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L228)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidateInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L541)</sub>

??? example "Details"

    **Signature**

    `liquidateInternal(address borrower, uint256 id, uint256 payment) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L550)

    * [require(..., Payment must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L553)

    * [require(..., Cratio above liquidation ratio)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L568)

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L595)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `openInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L286)</sub>

??? example "Details"

    **Signature**

    `openInternal(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Opening is disabled)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L295)

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L298)

    * [require(..., Not allowed to issue this synth)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L301)

    * [require(..., Currency rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L304)

    * [require(..., Not enough collateral to open)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L307)

    * [require(..., Max loans exceeded)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L310)

    * [require(..., Debt limit or invalid rate)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L315)

    * [require(..., Exceeds max borrowing power)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L318)

    **Emits**

    * [LoanCreated](#loancreated)

### `repayInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L605)</sub>

??? example "Details"

    **Signature**

    `repayInternal(address borrower, address repayer, uint256 id, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L615)

    * [require(..., Payment must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L618)

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L639)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `withdrawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L506)</sub>

??? example "Details"

    **Signature**

    `withdrawInternal(uint256 id, uint256 amount) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L511)

    * [require(..., Cratio too low)](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L529)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Events

### `CanOpenLoansUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L787)</sub>

**Signature**: `CanOpenLoansUpdated(bool canOpenLoans)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L792)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L793)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L785)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L783)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L791)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L803)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L790)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L795)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L796)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L794)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`

### `ManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L786)</sub>

**Signature**: `ManagerUpdated(address manager)`

### `MaxLoansPerAccountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L784)</sub>

**Signature**: `MaxLoansPerAccountUpdated(uint256 maxLoansPerAccount)`

### `MinCollateralUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L782)</sub>

**Signature**: `MinCollateralUpdated(uint256 minCollateral)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.4/contracts/Collateral.sol#L781)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`
