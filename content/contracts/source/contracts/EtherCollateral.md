# EtherCollateral

## Description

... todo.

**Source:** [contracts/EtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint256`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint256`

### Inheritance Graph

```mermaid
graph TD
    EtherCollateral[EtherCollateral] --> Pausable[Pausable]
    EtherCollateral[EtherCollateral] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

- ?

## Structs

### `SynthLoanStruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L74)</sub>

| Field              | Type      | Description |
| ------------------ | --------- | ----------- |
| `account`          | `address` | TBA         |
| `collateralAmount` | `uint256` | TBA         |
| `loanAmount`       | `uint256` | TBA         |
| `timeCreated`      | `uint256` | TBA         |
| `loanID`           | `uint256` | TBA         |
| `timeClosed`       | `uint256` | TBA         |

## Variables

### `accountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L54)</sub>

**Type:** `uint256`

### `accountOpenLoanCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L93)</sub>

**Type:** `mapping(address => uint256)`

### `accountsSynthLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L90)</sub>

**Type:** `mapping(address => struct EtherCollateral.SynthLoanStruct[])`

### `collateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L38)</sub>

**Type:** `uint256`

### `interestPerSecond`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L42)</sub>

**Type:** `uint256`

### `interestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L41)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L45)</sub>

**Type:** `uint256`

### `issueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L48)</sub>

**Type:** `uint256`

### `liquidationDeadline`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L60)</sub>

**Type:** `uint256`

### `loanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L57)</sub>

**Type:** `bool`

### `minLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L51)</sub>

**Type:** `uint256`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L65)</sub>

**Type:** `uint256`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L68)</sub>

**Type:** `uint256`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L71)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L105)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `accruedInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L219)</sub>

??? example "Details"

    **Signature**

    `accruedInterestOnLoan(uint256 _loanAmount, uint256 _seconds)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `calculateMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L225)</sub>

??? example "Details"

    **Signature**

    `calculateMintingFee(address _account, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralAmountForLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L208)</sub>

??? example "Details"

    **Signature**

    `collateralAmountForLoan(uint256 loanAmount)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `currentInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L212)</sub>

??? example "Details"

    **Signature**

    `currentInterestOnLoan(address _account, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getContractInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L161)</sub>

??? example "Details"

    **Signature**

    `getContractInfo()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L254)</sub>

??? example "Details"

    **Signature**

    `getLoan(address _account, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L198)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio()`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `loanAmountFromCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L204)</sub>

??? example "Details"

    **Signature**

    `loanAmountFromCollateral(uint256 collateralAmount)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `loanLifeSpan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L279)</sub>

??? example "Details"

    **Signature**

    `loanLifeSpan(address _account, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `openLoanIDsByAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L231)</sub>

??? example "Details"

    **Signature**

    `openLoanIDsByAccount(address _account)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

## Restricted Functions

### `setAccountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L146)</sub>

??? example "Details"

    **Signature**

    `setAccountLoanLimit(uint256 _loanLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Owner cannot set higher than HARD_CAP)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L148)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountLoanLimitUpdated](#accountloanlimitupdated)

### `setCollateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L116)</sub>

??? example "Details"

    **Signature**

    `setCollateralizationRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Too high)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L117)

    * [require(..., Too low)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L118)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralizationRatioUpdated](#collateralizationratioupdated)

### `setInterestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L123)</sub>

??? example "Details"

    **Signature**

    `setInterestRate(uint256 _interestRate)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Interest rate cannot be less that the SECONDS_IN_A_YEAR)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L124)

    * [require(..., Interest cannot be more than 100% APR)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L125)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InterestRateUpdated](#interestrateupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L131)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L136)</sub>

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

### `setLoanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L153)</sub>

??? example "Details"

    **Signature**

    `setLoanLiquidationOpen(bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Before liquidation deadline)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L154)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LoanLiquidationOpenUpdated](#loanliquidationopenupdated)

### `setMinLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L141)</sub>

??? example "Details"

    **Signature**

    `setMinLoanSize(uint256 _minLoanSize)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinLoanSizeUpdated](#minloansizeupdated)

## Internal Functions

### `depot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L446)</sub>

??? example "Details"

    **Signature**

    `depot()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L438)</sub>

??? example "Details"

    **Signature**

    `synthsETH()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L442)</sub>

??? example "Details"

    **Signature**

    `synthsUSD()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L434)</sub>

??? example "Details"

    **Signature**

    `systemStatus()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L330)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L335)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Liquidation is not open)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L336)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    **Emits**

    * [LoanLiquidated](#loanliquidated)

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L286)</sub>

??? example "Details"

    **Signature**

    `openLoan()`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Not enough ETH to create this loan. Please see the minLoanSize)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L290)

    * [require(..., Loans are now being liquidated)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L293)

    * [require(..., Each account is limted to 50 loans)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L296)

    * [require(..., Loan Amount exceeds the supply cap.)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L302)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    **Emits**

    * [LoanCreated](#loancreated)

## Events

### `AccountLoanLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L457)</sub>

**Signature**: `AccountLoanLimitUpdated(uint256 loanLimit)`

### `CollateralizationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L452)</sub>

**Signature**: `CollateralizationRatioUpdated(uint256 ratio)`

### `InterestRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L453)</sub>

**Signature**: `InterestRateUpdated(uint256 interestRate)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L454)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `IssueLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L455)</sub>

**Signature**: `IssueLimitUpdated(uint256 issueLimit)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L460)</sub>

**Signature**: `LoanClosed(address account, uint256 loanID, uint256 feesPaid)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L459)</sub>

**Signature**: `LoanCreated(address account, uint256 loanID, uint256 amount)`

### `LoanLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L461)</sub>

**Signature**: `LoanLiquidated(address account, uint256 loanID, address liquidator)`

### `LoanLiquidationOpenUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L458)</sub>

**Signature**: `LoanLiquidationOpenUpdated(bool loanLiquidationOpen)`

### `MinLoanSizeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/EtherCollateral.sol#L456)</sub>

**Signature**: `MinLoanSizeUpdated(uint256 minLoanSize)`
