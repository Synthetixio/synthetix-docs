# EtherCollateralsUSD

## Description

**Source:** [contracts/EtherCollateralsUSD.sol](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint256`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint256`

### Inheritance Graph

```mermaid
graph TD
    EtherCollateralsUSD[EtherCollateralsUSD] --> Pausable[Pausable]
    EtherCollateralsUSD[EtherCollateralsUSD] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

## Structs

### `SynthLoanStruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L87)</sub>

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

## Constants

### `COLLATERAL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L40)</sub>

**Type:** `bytes32`

## Variables

### `accountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L61)</sub>

**Type:** `uint256`

### `accountOpenLoanCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L114)</sub>

**Type:** `mapping(address => uint256)`

### `accountsSynthLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L111)</sub>

**Type:** `mapping(address => struct EtherCollateralsUSD.SynthLoanStruct[])`

### `collateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L45)</sub>

**Type:** `uint256`

### `interestPerSecond`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L49)</sub>

**Type:** `uint256`

### `interestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L48)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L52)</sub>

**Type:** `uint256`

### `issueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L55)</sub>

**Type:** `uint256`

### `liquidationDeadline`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L67)</sub>

**Type:** `uint256`

### `liquidationPenalty`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L73)</sub>

**Type:** `uint256`

### `liquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L70)</sub>

**Type:** `uint256`

### `loanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L64)</sub>

**Type:** `bool`

### `minLoanCollateralSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L58)</sub>

**Type:** `uint256`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L78)</sub>

**Type:** `uint256`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L81)</sub>

**Type:** `uint256`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L84)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L126)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `accruedInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L251)</sub>

??? example "Details"

    **Signature**

    `accruedInterestOnLoan(uint256 _loanAmount, uint256 _seconds) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateAmountToLiquidate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L283)</sub>

??? example "Details"

    **Signature**

    `calculateAmountToLiquidate(uint256 debtBalance, uint256 collateral) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `collateralAmountForLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L233)</sub>

??? example "Details"

    **Signature**

    `collateralAmountForLoan(uint256 loanAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L241)</sub>

??? example "Details"

    **Signature**

    `currentInterestOnLoan(address _account, uint256 _loanID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getContractInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L187)</sub>

??? example "Details"

    **Signature**

    `getContractInfo() returns (uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, uint256, bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L316)</sub>

??? example "Details"

    **Signature**

    `getLoan(address _account, uint256 _loanID) returns (address, uint256, uint256, uint256, uint256, uint256, uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLoanCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L343)</sub>

??? example "Details"

    **Signature**

    `getLoanCollateralRatio(address _account, uint256 _loanID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L270)</sub>

??? example "Details"

    **Signature**

    `getMintingFee(address _account, uint256 _loanID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L223)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `loanAmountFromCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L228)</sub>

??? example "Details"

    **Signature**

    `loanAmountFromCollateral(uint256 collateralAmount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `openLoanIDsByAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L293)</sub>

??? example "Details"

    **Signature**

    `openLoanIDsByAccount(address _account) returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `timeSinceInterestAccrualOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L369)</sub>

??? example "Details"

    **Signature**

    `timeSinceInterestAccrualOnLoan(address _account, uint256 _loanID) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `totalFeesOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L257)</sub>

??? example "Details"

    **Signature**

    `totalFeesOnLoan(address _account, uint256 _loanID) returns (uint256, uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setAccountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L167)</sub>

??? example "Details"

    **Signature**

    `setAccountLoanLimit(uint256 _loanLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner cannot set higher than ACCOUNT_LOAN_LIMIT_CAP)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L168)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountLoanLimitUpdated](#accountloanlimitupdated)

### `setCollateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L137)</sub>

??? example "Details"

    **Signature**

    `setCollateralizationRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Too high)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L138)

    * [require(..., Too low)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L139)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralizationRatioUpdated](#collateralizationratioupdated)

### `setInterestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L144)</sub>

??? example "Details"

    **Signature**

    `setInterestRate(uint256 _interestRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Interest rate cannot be less that the SECONDS_IN_A_YEAR)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L145)

    * [require(..., Interest cannot be more than 100% APR)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L146)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InterestRateUpdated](#interestrateupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L152)</sub>

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

### `setIssueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L157)</sub>

??? example "Details"

    **Signature**

    `setIssueLimit(uint256 _issueLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueLimitUpdated](#issuelimitupdated)

### `setLiquidationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L179)</sub>

??? example "Details"

    **Signature**

    `setLiquidationRatio(uint256 _liquidationRatio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Ratio less than 100%)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L180)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LiquidationRatioUpdated](#liquidationratioupdated)

### `setLoanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L173)</sub>

??? example "Details"

    **Signature**

    `setLoanLiquidationOpen(bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Before liquidation deadline)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L174)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LoanLiquidationOpenUpdated](#loanliquidationopenupdated)

### `setMinLoanCollateralSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L162)</sub>

??? example "Details"

    **Signature**

    `setMinLoanCollateralSize(uint256 _minLoanCollateralSize)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinLoanCollateralSizeUpdated](#minloancollateralsizeupdated)

## Internal Functions

### `_checkLoanIsOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L823)</sub>

??? example "Details"

    **Signature**

    `_checkLoanIsOpen(struct EtherCollateralsUSD.SynthLoanStruct _synthLoan)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

    **Requires**

    * [require(..., Loan does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L824)

    * [require(..., Loan already closed)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L825)

### `_loanCollateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L350)</sub>

??? example "Details"

    **Signature**

    `_loanCollateralRatio(struct EtherCollateralsUSD.SynthLoanStruct _loan) returns (uint256, uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_processInterestAndLoanPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L650)</sub>

??? example "Details"

    **Signature**

    `_processInterestAndLoanPayment(uint256 interestPaid, uint256 loanAmountPaid)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

### `_splitInterestLoanPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L617)</sub>

??? example "Details"

    **Signature**

    `_splitInterestLoanPayment(uint256 _paymentAmount, uint256 _accruedInterest, uint256 _loanAmount) returns (uint256, uint256, uint256, uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `pure`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L838)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L842)</sub>

??? example "Details"

    **Signature**

    `feePool() returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L834)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L830)</sub>

??? example "Details"

    **Signature**

    `systemStatus() returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L449)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

### `depositCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L454)</sub>

??? example "Details"

    **Signature**

    `depositCollateral(address account, uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Deposit amount must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L455)

    * [require(..., Loans are now being liquidated)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L460)

    **Modifiers**

    * [notPaused](#notpaused)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `liquidateLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L550)</sub>

??? example "Details"

    **Signature**

    `liquidateLoan(address _loanCreatorsAddress, uint256 _loanID, uint256 _debtToCover)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not enough sUSD balance)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L558)

    * [require(..., Collateral ratio above liquidation ratio)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L567)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L664)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Liquidation is not open)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L665)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanLiquidated](#loanliquidated)

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L378)</sub>

??? example "Details"

    **Signature**

    `openLoan(uint256 _loanAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Not enough ETH to create this loan. Please see the minLoanCollateralSize)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L389)

    * [require(..., Loans are now being liquidated)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L395)

    * [require(..., Each account is limited to 50 loans)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L398)

    * [require(..., Loan amount exceeds max borrowing power)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L405)

    * [require(..., Loan Amount exceeds the supply cap.)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L411)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanCreated](#loancreated)

### `repayLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L507)</sub>

??? example "Details"

    **Signature**

    `repayLoan(address _loanCreatorsAddress, uint256 _loanID, uint256 _repayAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Not enough sUSD balance)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L515)

    **Modifiers**

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [LoanRepaid](#loanrepaid)

### `withdrawCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L477)</sub>

??? example "Details"

    **Signature**

    `withdrawCollateral(uint256 loanID, uint256 withdrawAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Amount to withdraw must be greater than 0)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L478)

    * [require(..., Loans are now being liquidated)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L483)

    * [require(..., Collateral ratio below liquidation after withdraw)](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L498)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    * [ETHRateNotInvalid](#ethratenotinvalid)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Modifiers

### `ETHRateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L848)</sub>

## Events

### `AccountLoanLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L861)</sub>

**Signature**: `AccountLoanLimitUpdated(uint256 loanLimit)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L873)</sub>

**Signature**: `CollateralDeposited(address account, uint256 loanID, uint256 collateralAmount, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L874)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 loanID, uint256 amountWithdrawn, uint256 collateralAfter)`

### `CollateralizationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L855)</sub>

**Signature**: `CollateralizationRatioUpdated(uint256 ratio)`

### `InterestRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L857)</sub>

**Signature**: `InterestRateUpdated(uint256 interestRate)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L858)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `IssueLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L859)</sub>

**Signature**: `IssueLimitUpdated(uint256 issueLimit)`

### `LiquidationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L856)</sub>

**Signature**: `LiquidationRatioUpdated(uint256 ratio)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L864)</sub>

**Signature**: `LoanClosed(address account, uint256 loanID, uint256 feesPaid)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L863)</sub>

**Signature**: `LoanCreated(address account, uint256 loanID, uint256 amount)`

### `LoanLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L865)</sub>

**Signature**: `LoanLiquidated(address account, uint256 loanID, address liquidator)`

### `LoanLiquidationOpenUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L862)</sub>

**Signature**: `LoanLiquidationOpenUpdated(bool loanLiquidationOpen)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L866)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 loanID, address liquidator, uint256 liquidatedAmount, uint256 liquidatedCollateral)`

### `LoanRepaid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L875)</sub>

**Signature**: `LoanRepaid(address account, uint256 loanID, uint256 repaidAmount, uint256 newLoanAmount)`

### `MinLoanCollateralSizeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.34.1-ovm/contracts/EtherCollateralsUSD.sol#L860)</sub>

**Signature**: `MinLoanCollateralSizeUpdated(uint256 minLoanCollateralSize)`
