# EtherCollateral

**Source:** [EtherCollateral.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/EtherCollateral.sol)


!!! todo "Work in Progress"


```
This needs filling in
```

## Description

... todo.



**Source:** [contracts/EtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol)

## Architecture

... todo.


<!--centered-image>
    ![Architecture Graph](../img/graphs/todo-architecture.svg)
</centered-image-->




---
### Inheritance Graph

```mermaid
graph TD
    EtherCollateral[EtherCollateral] --> Pausable[Pausable]
    EtherCollateral[EtherCollateral] --> ReentrancyGuard[ReentrancyGuard]
    EtherCollateral[EtherCollateral] --> MixinResolver[MixinResolver]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```


---
### Related Contracts

- ?

## Constants

## Variables


---
### `ONE_THOUSAND`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L27)</sub>





**Type:** `uint256`


---
### `ONE_HUNDRED`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L28)</sub>





**Type:** `uint256`


---
### `SECONDS_IN_A_YEAR`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L30)</sub>





**Type:** `uint256`


---
### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L33)</sub>





**Type:** `address`


---
### `collateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L38)</sub>





**Type:** `uint256`


---
### `interestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L41)</sub>





**Type:** `uint256`


---
### `interestPerSecond`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L42)</sub>





**Type:** `uint256`


---
### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L45)</sub>





**Type:** `uint256`


---
### `issueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L48)</sub>





**Type:** `uint256`


---
### `minLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L51)</sub>





**Type:** `uint256`


---
### `accountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L54)</sub>





**Type:** `uint256`


---
### `loanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L57)</sub>





**Type:** `bool`


---
### `liquidationDeadline`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L60)</sub>





**Type:** `uint256`


---
### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L65)</sub>





**Type:** `uint256`


---
### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L68)</sub>





**Type:** `uint256`


---
### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L71)</sub>





**Type:** `uint256`


---
### `accountsSynthLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L90)</sub>





**Type:** `mapping(address => struct EtherCollateral.SynthLoanStruct[])`


---
### `accountOpenLoanCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L93)</sub>





**Type:** `mapping(address => uint256)`

## Views

## Public Mutative Functions

## Owner Mutative Functions

## Internal & Restricted Mutative Functions

## Events

--



---
### `CollateralizationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L452)</sub>



- `(uint256 ratio)`


---
### `InterestRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L453)</sub>



- `(uint256 interestRate)`


---
### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L454)</sub>



- `(uint256 issueFeeRate)`


---
### `IssueLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L455)</sub>



- `(uint256 issueLimit)`


---
### `MinLoanSizeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L456)</sub>



- `(uint256 minLoanSize)`


---
### `AccountLoanLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L457)</sub>



- `(uint256 loanLimit)`


---
### `LoanLiquidationOpenUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L458)</sub>



- `(bool loanLiquidationOpen)`


---
### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L459)</sub>



- `(address account, uint256 loanID, uint256 amount)`


---
### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L460)</sub>



- `(address account, uint256 loanID, uint256 feesPaid)`


---
### `LoanLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L461)</sub>



- `(address account, uint256 loanID, address liquidator)`

## Structs


---
### `SynthLoanStruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L74)</sub>



| Field | Type |
| ------ | ------ |
| account | address |
| collateralAmount | uint256 |
| loanAmount | uint256 |
| timeCreated | uint256 |
| loanID | uint256 |
| timeClosed | uint256 |


## Functions


---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L105)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address _resolver) public`

    **Modifiers**

    * [Owned](#owned)

    * [Pausable](#pausable)

    * [MixinResolver](#mixinresolver)


---
### `setCollateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L116)</sub>



??? example "Details"

    **Signature**

    `setCollateralizationRatio(uint256 ratio) external`

    **Requires**

    * [require(..., Too high)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L117)

    * [require(..., Too low)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L118)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralizationRatioUpdated](#collateralizationratioupdated)


---
### `setInterestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L123)</sub>



??? example "Details"

    **Signature**

    `setInterestRate(uint256 _interestRate) external`

    **Requires**

    * [require(..., Interest rate cannot be less that the SECONDS_IN_A_YEAR)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L124)

    * [require(..., Interest cannot be more than 100% APR)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L125)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InterestRateUpdated](#interestrateupdated)


---
### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L131)</sub>



??? example "Details"

    **Signature**

    `setIssueFeeRate(uint256 _issueFeeRate) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueFeeRateUpdated](#issuefeerateupdated)


---
### `setIssueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L136)</sub>



??? example "Details"

    **Signature**

    `setIssueLimit(uint256 _issueLimit) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [IssueLimitUpdated](#issuelimitupdated)


---
### `setMinLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L141)</sub>



??? example "Details"

    **Signature**

    `setMinLoanSize(uint256 _minLoanSize) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinLoanSizeUpdated](#minloansizeupdated)


---
### `setAccountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L146)</sub>



??? example "Details"

    **Signature**

    `setAccountLoanLimit(uint256 _loanLimit) external`

    **Requires**

    * [require(..., Owner cannot set higher than HARD_CAP)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L148)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountLoanLimitUpdated](#accountloanlimitupdated)


---
### `setLoanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L153)</sub>



??? example "Details"

    **Signature**

    `setLoanLiquidationOpen(bool _loanLiquidationOpen) external`

    **Requires**

    * [require(..., Before liquidation deadline)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L154)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LoanLiquidationOpenUpdated](#loanliquidationopenupdated)


---
### `getContractInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L161)</sub>



??? example "Details"

    **Signature**

    `getContractInfo() external`


---
### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L198)</sub>



??? example "Details"

    **Signature**

    `issuanceRatio() public`


---
### `loanAmountFromCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L204)</sub>



??? example "Details"

    **Signature**

    `loanAmountFromCollateral(uint256 collateralAmount) public`


---
### `collateralAmountForLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L208)</sub>



??? example "Details"

    **Signature**

    `collateralAmountForLoan(uint256 loanAmount) external`


---
### `currentInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L212)</sub>



??? example "Details"

    **Signature**

    `currentInterestOnLoan(address _account, uint256 _loanID) external`


---
### `accruedInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L219)</sub>



??? example "Details"

    **Signature**

    `accruedInterestOnLoan(uint256 _loanAmount, uint256 _seconds) public`


---
### `calculateMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L225)</sub>



??? example "Details"

    **Signature**

    `calculateMintingFee(address _account, uint256 _loanID) external`


---
### `openLoanIDsByAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L231)</sub>



??? example "Details"

    **Signature**

    `openLoanIDsByAccount(address _account) external`


---
### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L254)</sub>



??? example "Details"

    **Signature**

    `getLoan(address _account, uint256 _loanID) external`


---
### `loanLifeSpan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L279)</sub>



??? example "Details"

    **Signature**

    `loanLifeSpan(address _account, uint256 _loanID) external`


---
### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L286)</sub>



??? example "Details"

    **Signature**

    `openLoan() external`

    **Requires**

    * [require(..., Not enough ETH to create this loan. Please see the minLoanSize)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L290)

    * [require(..., Loans are now being liquidated)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L293)

    * [require(..., Each account is limted to 50 loans)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L296)

    * [require(..., Loan Amount exceeds the supply cap.)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L302)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    **Emits**

    * [LoanCreated](#loancreated)


---
### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L330)</sub>



??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID) external`

    **Modifiers**

    * [nonReentrant](#nonreentrant)


---
### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L335)</sub>



??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID) external`

    **Requires**

    * [require(..., Liquidation is not open)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L336)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    **Emits**

    * [LoanLiquidated](#loanliquidated)


---
### `_closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L345)</sub>



??? example "Details"

    **Signature**

    `_closeLoan(address account, uint256 loanID) private`

    **Requires**

    * [require(..., Loan does not exist)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L351)

    * [require(..., Loan already closed)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L352)

    * [require(..., You do not have the required Synth balance to close this loan.)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L353)

    * [require(..., The sUSD Depot does not have enough sUSD to buy for fees)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L373)

    **Emits**

    * [LoanClosed](#loanclosed)


---
### `_getLoanFromStorage`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L389)</sub>



??? example "Details"

    **Signature**

    `_getLoanFromStorage(address account, uint256 loanID) private`


---
### `_recordLoanClosure`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L398)</sub>



??? example "Details"

    **Signature**

    `_recordLoanClosure(struct EtherCollateral.SynthLoanStruct synthLoan) private`


---
### `_incrementTotalLoansCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L412)</sub>



??? example "Details"

    **Signature**

    `_incrementTotalLoansCounter() private`


---
### `_calculateMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L421)</sub>



??? example "Details"

    **Signature**

    `_calculateMintingFee(struct EtherCollateral.SynthLoanStruct synthLoan) private`


---
### `_loanLifeSpan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/EtherCollateral.sol#L425)</sub>



??? example "Details"

    **Signature**

    `_loanLifeSpan(struct EtherCollateral.SynthLoanStruct synthLoan) private`

