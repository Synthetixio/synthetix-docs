# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol)

## Variables

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L66)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L39)</sub>

**Type:** `bytes32`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L64)</sub>

**Type:** `uint256`

### `loans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L42)</sub>

**Type:** `mapping(uint256 => struct ICollateralLoan.Loan)`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L44)</sub>

**Type:** `contract ICollateralManager`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L61)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L58)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L53)</sub>

**Type:** `mapping(bytes32 => address)`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L47)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L50)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L79)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L157)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L142)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(uint256 id) view returns (uint256 cratio)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L147)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(uint256 id) view returns (uint256 liqAmount)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L153)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) view returns (uint256 max)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L95)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L236)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L221)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L222)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L191)</sub>

??? example "Details"

    **Signature**

    `setCanOpenLoans(bool _canOpenLoans)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CanOpenLoansUpdated](#canopenloansupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L186)</sub>

??? example "Details"

    **Signature**

    `setIssueFeeRate(uint256 _issueFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)

### `setMinCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L181)</sub>

??? example "Details"

    **Signature**

    `setMinCollateral(uint256 _minCollateral)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCollateralUpdated](#mincollateralupdated)

## Internal Functions

### `_accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L549)</sub>

??? example "Details"

    **Signature**

    `_accrueInterest(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L208)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Recently interacted")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L210)

### `_checkLoanRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L619)</sub>

??? example "Details"

    **Signature**

    `_checkLoanRatio(struct ICollateralLoan.Loan loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cratio too low")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L623)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L199)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not enough balance")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L204)

### `_close`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L314)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L328)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L339)</sub>

??? example "Details"

    **Signature**

    `_closeLoan(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256 amount, uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_collateralUtil`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L136)</sub>

??? example "Details"

    **Signature**

    `_collateralUtil() view returns (contract ICollateralUtil)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_deposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L377)</sub>

??? example "Details"

    **Signature**

    `_deposit(address account, uint256 id, uint256 amount) returns (uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Deposit must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L383)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `_draw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L504)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L124)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L128)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L132)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_getLoanAndAccrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L608)</sub>

??? example "Details"

    **Signature**

    `_getLoanAndAccrueInterest(uint256 id, address owner) returns (struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Must be borrower")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L614)

### `_isLoanOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L213)</sub>

??? example "Details"

    **Signature**

    `_isLoanOpen(uint256 interestIndex) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., "Loan is closed")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L214)

### `_liquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L420)</sub>

??? example "Details"

    **Signature**

    `_liquidate(address borrower, uint256 id, uint256 payment) returns (uint256 collateralLiquidated)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L425)

    * [require(..., "Cratio above liq ratio")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L435)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `_open`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L242)</sub>

??? example "Details"

    **Signature**

    `_open(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256 id)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Open disabled")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L249)

    * [require(..., "Not allowed to issue")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L252)

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L255)

    * [require(..., "Not enough collateral")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L258)

    * [require(..., "Debt limit or invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L264)

    * [require(..., "Exceed max borrow power")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L267)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    * [issuanceIsActive](#issuanceisactive)

    **Emits**

    * [LoanCreated](#loancreated)

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L590)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L561)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loan, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L562)

### `_recordLoanAsClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L600)</sub>

??? example "Details"

    **Signature**

    `_recordLoanAsClosed(struct ICollateralLoan.Loan loan)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_repay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L469)</sub>

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

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L116)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L120)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L112)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_withdraw`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L404)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L637)</sub>

### `rateIsValid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L628)</sub>

## Events

### `CanOpenLoansUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L651)</sub>

**Signature**: `CanOpenLoansUpdated(bool canOpenLoans)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L656)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L657)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L650)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L655)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L667)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanClosedByRepayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L674)</sub>

**Signature**: `LoanClosedByRepayment(address account, uint256 id, uint256 amountRepaid, uint256 collateralAfter)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L654)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L659)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L660)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L658)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`

### `MinCollateralUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Collateral.sol#L649)</sub>

**Signature**: `MinCollateralUpdated(uint256 minCollateral)`
