# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol)

## Variables

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L63)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L39)</sub>

**Type:** `bytes32`

### `loans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L42)</sub>

**Type:** `mapping(uint256 => struct ICollateralLoan.Loan)`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L44)</sub>

**Type:** `contract ICollateralManager`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L61)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L58)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L53)</sub>

**Type:** `mapping(bytes32 => address)`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L47)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L50)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L76)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L154)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L139)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(uint256 id) view returns (uint256 cratio)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L144)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(uint256 id) view returns (uint256 liqAmount)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L150)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) view returns (uint256 max)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L92)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L220)</sub>

??? example "Details"

    **Signature**

    `addRewardsContracts(address rewardsContract, bytes32 synth)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L205)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L206)

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L589)</sub>

??? example "Details"

    **Signature**

    `_accrueInterest(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L188)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Recently interacted")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L190)

### `_checkLoanRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L659)</sub>

??? example "Details"

    **Signature**

    `_checkLoanRatio(struct ICollateralLoan.Loan loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cratio too low")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L663)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L179)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not enough balance")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L184)

### `_close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L298)</sub>

??? example "Details"

    **Signature**

    `_close(address borrower, uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanClosed](#loanclosed)

### `_closeByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L312)</sub>

??? example "Details"

    **Signature**

    `_closeByLiquidation(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [LoanClosedByLiquidation](#loanclosedbyliquidation)

### `_closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L323)</sub>

??? example "Details"

    **Signature**

    `_closeLoan(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_closeLoanByRepayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L361)</sub>

??? example "Details"

    **Signature**

    `_closeLoanByRepayment(address borrower, uint256 id) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Emits**

    * [LoanClosedByRepayment](#loanclosedbyrepayment)

### `_collateralUtil`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L133)</sub>

??? example "Details"

    **Signature**

    `_collateralUtil() view returns (contract ICollateralUtil)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L380)</sub>

??? example "Details"

    **Signature**

    `_deposit(address account, uint256 id, uint256 amount) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Deposit must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L386)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `_draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L544)</sub>

??? example "Details"

    **Signature**

    `_draw(uint256 id, uint256 amount) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanDrawnDown](#loandrawndown)

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L129)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getLoanAndAccrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L648)</sub>

??? example "Details"

    **Signature**

    `_getLoanAndAccrueInterest(uint256 id, address owner) returns (struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be borrower")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L654)

### `_isLoanOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L193)</sub>

??? example "Details"

    **Signature**

    `_isLoanOpen(uint256 interestIndex) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "Loan is closed")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L194)

### `_issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L197)</sub>

??? example "Details"

    **Signature**

    `_issuanceRatio() view returns (uint256 ratio)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L423)</sub>

??? example "Details"

    **Signature**

    `_liquidate(address borrower, uint256 id, uint256 payment) returns (uint256 collateralLiquidated)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L428)

    * [require(..., "Cratio above liq ratio")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L438)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `_open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L226)</sub>

??? example "Details"

    **Signature**

    `_open(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256 id)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Open disabled")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L233)

    * [require(..., "Not allowed to issue")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L236)

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L239)

    * [require(..., "Not enough collateral")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L242)

    * [require(..., "Debt limit or invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L248)

    * [require(..., "Exceed max borrow power")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L251)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanCreated](#loancreated)

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L630)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L601)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loan, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L602)

### `_recordLoanAsClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L640)</sub>

??? example "Details"

    **Signature**

    `_recordLoanAsClosed(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L472)</sub>

??? example "Details"

    **Signature**

    `_repay(address borrower, address repayer, uint256 id, uint256 payment) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `_repayWithCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L507)</sub>

??? example "Details"

    **Signature**

    `_repayWithCollateral(address borrower, uint256 id, uint256 payment) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment too high")](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L522)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L113)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L117)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L109)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L407)</sub>

??? example "Details"

    **Signature**

    `_withdraw(uint256 id, uint256 amount) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Modifiers

### `issuanceIsActive`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L677)</sub>

### `rateIsValid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L668)</sub>

## Events

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L691)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L692)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L690)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L702)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanClosedByRepayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L709)</sub>

**Signature**: `LoanClosedByRepayment(address account, uint256 id, uint256 amountRepaid, uint256 collateralAfter)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L689)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L694)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L695)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.50.0-ovm-alpha/contracts/Collateral.sol#L693)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`
