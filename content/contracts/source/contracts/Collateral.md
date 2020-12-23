# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol)

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L71)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L37)</sub>

**Type:** `bytes32`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L69)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L62)</sub>

**Type:** `uint256`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L42)</sub>

**Type:** `address`

### `maxLoansPerAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L65)</sub>

**Type:** `uint256`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L59)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L56)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L51)</sub>

**Type:** `mapping(bytes32 => address)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L40)</sub>

**Type:** `contract CollateralState`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L45)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L48)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L83)</sub>

??? example "Details"

    **Signature**

    `(contract CollateralState _state, address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L147)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `collateralRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L180)</sub>

??? example "Details"

    **Signature**

    `collateralRedeemed(bytes32 currency, uint256 amount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L165)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L154)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() returns (bytes32[])`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L228)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L212)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNames)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L257)</sub>

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

    * [ManagerUpdated](#managerupdated)

### `setCurrencies`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L219)</sub>

??? example "Details"

    **Signature**

    `setCurrencies()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L246)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Max 1 hour)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L247)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L240)</sub>

??? example "Details"

    **Signature**

    `setIssueFeeRate(uint256 _issueFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must be greater than or equal to 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L241)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)

### `setManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L252)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L234)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Must be greater than 1)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L235)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

## Internal Functions

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L199)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan _loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Loan does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L200)

    * [require(..., Loan recently interacted with)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L201)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L190)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Not enough synth balance)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L195)

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L129)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L133)</sub>

??? example "Details"

    **Signature**

    `_exchanger() returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_manager() returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L747)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L718)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loanBefore, uint256 payment) returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L117)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L682)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(struct ICollateralLoan.Loan loan) returns (struct ICollateralLoan.Loan)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Rates are invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L695)

### `closeByLiquidationInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L404)</sub>

??? example "Details"

    **Signature**

    `closeByLiquidationInternal(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L419)

    **Emits**

    * [LoanClosedByLiquidation](#loanclosedbyliquidation)

### `closeInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L346)</sub>

??? example "Details"

    **Signature**

    `closeInternal(address borrower, uint256 id) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L351)

    * [require(..., Waiting period or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L369)

    **Emits**

    * [LoanClosed](#loanclosed)

### `depositInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L448)</sub>

??? example "Details"

    **Signature**

    `depositInternal(address account, uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L457)

    * [require(..., Deposit must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L460)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `drawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L627)</sub>

??? example "Details"

    **Signature**

    `drawInternal(uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L632)

    * [require(..., Cannot draw this much)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L647)

    **Emits**

    * [LoanDrawnDown](#loandrawndown)

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L204)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidateInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L519)</sub>

??? example "Details"

    **Signature**

    `liquidateInternal(address borrower, uint256 id, uint256 payment) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L528)

    * [require(..., Payment must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L531)

    * [require(..., Cratio above liquidation ratio)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L546)

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L573)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `openInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L264)</sub>

??? example "Details"

    **Signature**

    `openInternal(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Opening is disabled)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L273)

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L276)

    * [require(..., Not allowed to issue this synth)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L279)

    * [require(..., Currency rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L282)

    * [require(..., Not enough collateral to create a loan)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L285)

    * [require(..., Max loans exceeded)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L288)

    * [require(..., Debt limit or invalid rate)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L293)

    * [require(..., Exceeds max borrowing power)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L296)

    **Emits**

    * [LoanCreated](#loancreated)

### `repayInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L583)</sub>

??? example "Details"

    **Signature**

    `repayInternal(address borrower, address repayer, uint256 id, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L593)

    * [require(..., Payment must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L596)

    * [require(..., Waiting or settlement owing)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L617)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `withdrawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L484)</sub>

??? example "Details"

    **Signature**

    `withdrawInternal(uint256 id, uint256 amount) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Collateral rate is invalid)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L489)

    * [require(..., Cratio too low)](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L507)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Events

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L769)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L770)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L763)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L761)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L768)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L780)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L767)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L772)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L773)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L771)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`

### `ManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L764)</sub>

**Signature**: `ManagerUpdated(address manager)`

### `MaxLoansPerAccountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L762)</sub>

**Signature**: `MaxLoansPerAccountUpdated(uint256 maxLoansPerAccount)`

### `MinCollateralUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L760)</sub>

**Signature**: `MinCollateralUpdated(uint256 minCollateral)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.35.1-beta/contracts/Collateral.sol#L759)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`
