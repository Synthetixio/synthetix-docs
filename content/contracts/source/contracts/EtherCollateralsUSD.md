# EtherCollateralsUSD

## Description

**Source:** [contracts/EtherCollateralsUSD.sol](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol)

## Structs

### `SynthLoanStruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L87)</sub>

| Field                 | Type              | Description |
| --------------------- | ----------------- | ----------- |
| `account`             | `address payable` | TBA         |
| `collateralAmount`    | `uint256`         | TBA         |
| `loanAmount`          | `uint256`         | TBA         |
| `mintingFee`          | `uint256`         | TBA         |
| `timeCreated`         | `uint256`         | TBA         |
| `loanID`              | `uint256`         | TBA         |
| `timeClosed`          | `uint256`         | TBA         |
| `loanInterestRate`    | `uint256`         | TBA         |
| `accruedInterest`     | `uint256`         | TBA         |
| `lastInterestAccrued` | `uint40`          | TBA         |

## Variables

### `COLLATERAL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L40)</sub>

**Type:** `bytes32`

### `accountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L61)</sub>

**Type:** `uint256`

### `accountOpenLoanCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L114)</sub>

**Type:** `mapping(address => uint256)`

### `accountsSynthLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L111)</sub>

**Type:** `mapping(address => struct EtherCollateralsUSD.SynthLoanStruct[])`

### `collateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L45)</sub>

**Type:** `uint256`

### `interestPerSecond`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L49)</sub>

**Type:** `uint256`

### `interestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L48)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L52)</sub>

**Type:** `uint256`

### `issueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L55)</sub>

**Type:** `uint256`

### `liquidationDeadline`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L67)</sub>

**Type:** `uint256`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L73)</sub>

**Type:** `uint256`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L70)</sub>

**Type:** `uint256`

### `loanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L64)</sub>

**Type:** `bool`

### `minLoanCollateralSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L58)</sub>

**Type:** `uint256`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L78)</sub>

**Type:** `uint256`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L81)</sub>

**Type:** `uint256`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L84)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L124)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `setAccountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L160)</sub>

??? example "Details"

    **Signature**

    `setAccountLoanLimit(uint256 _loanLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Owner cannot set higher than ACCOUNT_LOAN_LIMIT_CAP")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L161)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountLoanLimitUpdated](#accountloanlimitupdated)

### `setCollateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L130)</sub>

??? example "Details"

    **Signature**

    `setCollateralizationRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Too high")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L131)

    * [require(..., "Too low")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L132)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralizationRatioUpdated](#collateralizationratioupdated)

### `setInterestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L137)</sub>

??? example "Details"

    **Signature**

    `setInterestRate(uint256 _interestRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Interest rate cannot be less that the SECONDS_IN_A_YEAR")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L138)

    * [require(..., "Interest cannot be more than 100% APR")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L139)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InterestRateUpdated](#interestrateupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L145)</sub>

??? example "Details"

    **Signature**

    `setIssueFeeRate(uint256 _issueFeeRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)

### `setIssueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L150)</sub>

??? example "Details"

    **Signature**

    `setIssueLimit(uint256 _issueLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueLimitUpdated](#issuelimitupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L172)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Ratio less than 100%")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L173)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setLoanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L166)</sub>

??? example "Details"

    **Signature**

    `setLoanLiquidationOpen(bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Before liquidation deadline")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L167)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LoanLiquidationOpenUpdated](#loanliquidationopenupdated)

### `setMinLoanCollateralSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L155)</sub>

??? example "Details"

    **Signature**

    `setMinLoanCollateralSize(uint256 _minLoanCollateralSize)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinLoanCollateralSizeUpdated](#minloancollateralsizeupdated)

## Internal Functions

### `_checkLoanIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L823)</sub>

??? example "Details"

    **Signature**

    `_checkLoanIsOpen(struct EtherCollateralsUSD.SynthLoanStruct _synthLoan) pure`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Loan does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L824)

    * [require(..., "Loan already closed")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L825)

### `_loanCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L350)</sub>

??? example "Details"

    **Signature**

    `_loanCollateralRatio(struct EtherCollateralsUSD.SynthLoanStruct _loan) view returns (uint256 loanCollateralRatio, uint256 collateralValue, uint256 interestAmount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_processInterestAndLoanPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L650)</sub>

??? example "Details"

    **Signature**

    `_processInterestAndLoanPayment(uint256 interestPaid, uint256 loanAmountPaid)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_splitInterestLoanPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L617)</sub>

??? example "Details"

    **Signature**

    `_splitInterestLoanPayment(uint256 _paymentAmount, uint256 _accruedInterest, uint256 _loanAmount) pure returns (uint256 interestPaid, uint256 loanAmountPaid, uint256 accruedInterestAfter, uint256 loanAmountAfter)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L838)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L842)</sub>

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L834)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L830)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `accruedInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L251)</sub>

??? example "Details"

    **Signature**

    `accruedInterestOnLoan(uint256 _loanAmount, uint256 _seconds) view returns (uint256 interestAmount)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `calculateAmountToLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L283)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToLiquidate(uint256 debtBalance, uint256 collateral) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L449)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

### `collateralAmountForLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L233)</sub>

??? example "Details"

    **Signature**

    `collateralAmountForLoan(uint256 loanAmount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L241)</sub>

??? example "Details"

    **Signature**

    `currentInterestOnLoan(address _account, uint256 _loanID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `depositCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L454)</sub>

??? example "Details"

    **Signature**

    `depositCollateral(address account, uint256 loanID) payable`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Deposit amount must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L455)

    * [require(..., "Loans are now being liquidated")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L460)

    **Modifiers**

    * [notPaused](#notpaused)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `getContractInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L187)</sub>

??? example "Details"

    **Signature**

    `getContractInfo() view returns (uint256 _collateralizationRatio, uint256 _issuanceRatio, uint256 _interestRate, uint256 _interestPerSecond, uint256 _issueFeeRate, uint256 _issueLimit, uint256 _minLoanCollateralSize, uint256 _totalIssuedSynths, uint256 _totalLoansCreated, uint256 _totalOpenLoanCount, uint256 _ethBalance, uint256 _liquidationDeadline, bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L316)</sub>

??? example "Details"

    **Signature**

    `getLoan(address _account, uint256 _loanID) view returns (address account, uint256 collateralAmount, uint256 loanAmount, uint256 timeCreated, uint256 loanID, uint256 timeClosed, uint256 accruedInterest, uint256 totalFees)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLoanCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L343)</sub>

??? example "Details"

    **Signature**

    `getLoanCollateralRatio(address _account, uint256 _loanID) view returns (uint256 loanCollateralRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L270)</sub>

??? example "Details"

    **Signature**

    `getMintingFee(address _account, uint256 _loanID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L223)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `liquidateLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L550)</sub>

??? example "Details"

    **Signature**

    `liquidateLoan(address _loanCreatorsAddress, uint256 _loanID, uint256 _debtToCover)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough sUSD balance")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L558)

    * [require(..., "Collateral ratio above liquidation ratio")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L567)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L664)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Liquidation is not open")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L665)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanLiquidated](#loanliquidated)

### `loanAmountFromCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L228)</sub>

??? example "Details"

    **Signature**

    `loanAmountFromCollateral(uint256 collateralAmount) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L378)</sub>

??? example "Details"

    **Signature**

    `openLoan(uint256 _loanAmount) payable returns (uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough ETH to create this loan. Please see the minLoanCollateralSize")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L389)

    * [require(..., "Loans are now being liquidated")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L395)

    * [require(..., "Each account is limited to 50 loans")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L398)

    * [require(..., "Loan amount exceeds max borrowing power")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L405)

    * [require(..., "Loan Amount exceeds the supply cap.")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L411)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanCreated](#loancreated)

### `openLoanIDsByAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L293)</sub>

??? example "Details"

    **Signature**

    `openLoanIDsByAccount(address _account) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `repayLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L507)</sub>

??? example "Details"

    **Signature**

    `repayLoan(address _loanCreatorsAddress, uint256 _loanID, uint256 _repayAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough sUSD balance")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L515)

    **Modifiers**

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanRepaid](#loanrepaid)

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L179)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `timeSinceInterestAccrualOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L369)</sub>

??? example "Details"

    **Signature**

    `timeSinceInterestAccrualOnLoan(address _account, uint256 _loanID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `totalFeesOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L257)</sub>

??? example "Details"

    **Signature**

    `totalFeesOnLoan(address _account, uint256 _loanID) view returns (uint256 interestAmount, uint256 mintingFee)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `withdrawCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L477)</sub>

??? example "Details"

    **Signature**

    `withdrawCollateral(uint256 loanID, uint256 withdrawAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Amount to withdraw must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L478)

    * [require(..., "Loans are now being liquidated")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L483)

    * [require(..., "Collateral ratio below liquidation after withdraw")](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L498)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Modifiers

### `ETHRateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L848)</sub>

## Events

### `AccountLoanLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L861)</sub>

**Signature**: `AccountLoanLimitUpdated(uint256 loanLimit)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L873)</sub>

**Signature**: `CollateralDeposited(address account, uint256 loanID, uint256 collateralAmount, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L874)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 loanID, uint256 amountWithdrawn, uint256 collateralAfter)`

### `CollateralizationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L855)</sub>

**Signature**: `CollateralizationRatioUpdated(uint256 ratio)`

### `InterestRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L857)</sub>

**Signature**: `InterestRateUpdated(uint256 interestRate)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L858)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `IssueLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L859)</sub>

**Signature**: `IssueLimitUpdated(uint256 issueLimit)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L856)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 ratio)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L864)</sub>

**Signature**: `LoanClosed(address account, uint256 loanID, uint256 feesPaid)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L863)</sub>

**Signature**: `LoanCreated(address account, uint256 loanID, uint256 amount)`

### `LoanLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L865)</sub>

**Signature**: `LoanLiquidated(address account, uint256 loanID, address liquidator)`

### `LoanLiquidationOpenUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L862)</sub>

**Signature**: `LoanLiquidationOpenUpdated(bool loanLiquidationOpen)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L866)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 loanID, address liquidator, uint256 liquidatedAmount, uint256 liquidatedCollateral)`

### `LoanRepaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L875)</sub>

**Signature**: `LoanRepaid(address account, uint256 loanID, uint256 repaidAmount, uint256 newLoanAmount)`

### `MinLoanCollateralSizeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.38.0/contracts/EtherCollateralsUSD.sol#L860)</sub>

**Signature**: `MinLoanCollateralSizeUpdated(uint256 minLoanCollateralSize)`
