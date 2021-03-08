# EtherCollateral

## Description

Implemented in [SIP 35: Skinny Ether Collateral](https://sips.synthetix.io/sips/sip-35)

Beyond the fact that many people in the Ethereum community asked for ETH to be introduced as collateral, there are many positive implications for adding it to the system. Firstly, it makes it easier for a newcomer to start trading on Synthetix.Exchange. If they have ETH, they can try it out without selling their ETH for Synths.

Adding Ether as collateral also contributes to the Synth supply, and thus trading fees, while diversifying the collateral. This increases the system’s scalability while also protecting it from potential SNX price shocks, without diluting the value of SNX.

This was an understandable concern from SNX stakers once the community began discussing adding ETH — that it would need to be implemented in a way that didn’t dilute the value of SNX. in this model, ETH stakers don’t receive fees or rewards as they take no risk for the debt pool.

By locking collateral, ETH stakers will create a debt they need to repay if they want to withdraw their ETH and leave the system. This is similar to the debt that SNX stakers create when they lock their SNX as collateral, but the difference is that ETH stakers will not take on risk of debt pool fluctuations. In other words, ETH stakers are not participating in the ‘pooled debt’ aspect of the system — their debt will be denominated in ETH, and will be the same when they leave as when they enter.

For example, if Alice locks 150 ETH as collateral, she can borrow 100 sETH. Even if she uses that sETH to make a series of trades that allow her to increase that 100 sETH to 200 sETH, she only needs to pay back 100 sETH to unstake her 150 ETH. That profit is instead added to the SNX stakers’ pooled debt (see page 2 of the litepaper for more details). Of course, because they do not take on the same risk as SNX stakers, ETH stakers do not receive sUSD trading fees or SNX staking rewards.

The final few details you should know are that the minting fee and interest rate paid by ETH stakers is also paid to SNX stakers and the minimum position size is 1 ETH. At the end of the three month trial period, all outstanding loans must be paid back. There will be a one week grace period, after which anyone will be able to send sETH to close the position and claim the outstanding ETH.

**Source:** [contracts/EtherCollateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol)

## Architecture

### Related Contracts

- [MultiCollateralSynth](MultiCollateralSynth.md)

## Structs

### `SynthLoanStruct`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L75)</sub>

| Field              | Type      | Description                          |
| ------------------ | --------- | ------------------------------------ |
| `account`          | `address` | Address of the loan creator          |
| `collateralAmount` | `uint256` | Amount of ETH locked as collateral   |
| `loanAmount`       | `uint256` | Amount of sETH issued for the loan   |
| `timeCreated`      | `uint256` | Timestamp of the loan creation       |
| `loanID`           | `uint256` | Unique ID number of the loan         |
| `timeClosed`       | `uint256` | Timestamp of when the loan is closed |

## Variables

### `accountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L55)</sub>

**Type:** `uint256`

### `accountOpenLoanCounter`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L94)</sub>

**Type:** `mapping(address => uint256)`

### `accountsSynthLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L91)</sub>

**Type:** `mapping(address => struct EtherCollateral.SynthLoanStruct[])`

### `collateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L39)</sub>

**Type:** `uint256`

### `interestPerSecond`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L43)</sub>

**Type:** `uint256`

### `interestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L42)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L46)</sub>

**Type:** `uint256`

### `issueLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L49)</sub>

**Type:** `uint256`

### `liquidationDeadline`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L61)</sub>

**Type:** `uint256`

### `loanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L58)</sub>

**Type:** `bool`

### `minLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L52)</sub>

**Type:** `uint256`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L66)</sub>

**Type:** `uint256`

### `totalLoansCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L69)</sub>

**Type:** `uint256`

### `totalOpenLoanCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L72)</sub>

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L105)</sub>

??? example "Details"

    **Signature**

    `constructor(address _owner, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `setAccountLoanLimit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L141)</sub>

??? example "Details"

    **Signature**

    `setAccountLoanLimit(uint256 _loanLimit)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Owner cannot set higher than HARD_CAP")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L143)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [AccountLoanLimitUpdated](#accountloanlimitupdated)

### `setCollateralizationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L111)</sub>

??? example "Details"

    **Signature**

    `setCollateralizationRatio(uint256 ratio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Too high")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L112)

    * [require(..., "Too low")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L113)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CollateralizationRatioUpdated](#collateralizationratioupdated)

### `setInterestRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L118)</sub>

??? example "Details"

    **Signature**

    `setInterestRate(uint256 _interestRate)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Interest rate cannot be less that the SECONDS_IN_A_YEAR")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L119)

    * [require(..., "Interest cannot be more than 100% APR")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L120)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InterestRateUpdated](#interestrateupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L126)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L131)</sub>

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

### `setLoanLiquidationOpen`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L148)</sub>

??? example "Details"

    **Signature**

    `setLoanLiquidationOpen(bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Before liquidation deadline")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L149)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [LoanLiquidationOpenUpdated](#loanliquidationopenupdated)

### `setMinLoanSize`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L136)</sub>

??? example "Details"

    **Signature**

    `setMinLoanSize(uint256 _minLoanSize)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinLoanSizeUpdated](#minloansizeupdated)

## Internal Functions

### `depot`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L450)</sub>

??? example "Details"

    **Signature**

    `depot() view returns (contract IDepot)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L454)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthsETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L442)</sub>

??? example "Details"

    **Signature**

    `synthsETH() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L446)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L438)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

## External Functions

### `accruedInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L223)</sub>

??? example "Details"

    **Signature**

    `accruedInterestOnLoan(uint256 _loanAmount, uint256 _seconds) view returns (uint256 interestAmount)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `calculateMintingFee`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L229)</sub>

??? example "Details"

    **Signature**

    `calculateMintingFee(address _account, uint256 _loanID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `closeLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L334)</sub>

??? example "Details"

    **Signature**

    `closeLoan(uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [sETHRateNotInvalid](#sethratenotinvalid)

### `collateralAmountForLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L212)</sub>

??? example "Details"

    **Signature**

    `collateralAmountForLoan(uint256 loanAmount) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `currentInterestOnLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L216)</sub>

??? example "Details"

    **Signature**

    `currentInterestOnLoan(address _account, uint256 _loanID) view returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getContractInfo`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L165)</sub>

??? example "Details"

    **Signature**

    `getContractInfo() view returns (uint256 _collateralizationRatio, uint256 _issuanceRatio, uint256 _interestRate, uint256 _interestPerSecond, uint256 _issueFeeRate, uint256 _issueLimit, uint256 _minLoanSize, uint256 _totalIssuedSynths, uint256 _totalLoansCreated, uint256 _totalOpenLoanCount, uint256 _ethBalance, uint256 _liquidationDeadline, bool _loanLiquidationOpen)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `getLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L258)</sub>

??? example "Details"

    **Signature**

    `getLoan(address _account, uint256 _loanID) view returns (address account, uint256 collateralAmount, uint256 loanAmount, uint256 timeCreated, uint256 loanID, uint256 timeClosed, uint256 interest, uint256 totalFees)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L202)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `liquidateUnclosedLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L339)</sub>

??? example "Details"

    **Signature**

    `liquidateUnclosedLoan(address _loanCreatorsAddress, uint256 _loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Liquidation is not open")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L340)

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [sETHRateNotInvalid](#sethratenotinvalid)

    **Emits**

    * [LoanLiquidated](#loanliquidated)

### `loanAmountFromCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L208)</sub>

??? example "Details"

    **Signature**

    `loanAmountFromCollateral(uint256 collateralAmount) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `loanLifeSpan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L283)</sub>

??? example "Details"

    **Signature**

    `loanLifeSpan(address _account, uint256 _loanID) view returns (uint256 loanLifeSpanResult)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `openLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L290)</sub>

??? example "Details"

    **Signature**

    `openLoan() payable returns (uint256 loanID)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough ETH to create this loan. Please see the minLoanSize")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L294)

    * [require(..., "Loans are now being liquidated")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L297)

    * [require(..., "Each account is limted to 50 loans")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L300)

    * [require(..., "Loan Amount exceeds the supply cap.")](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L306)

    **Modifiers**

    * [notPaused](#notpaused)

    * [nonReentrant](#nonreentrant)

    * [sETHRateNotInvalid](#sethratenotinvalid)

    **Emits**

    * [LoanCreated](#loancreated)

### `openLoanIDsByAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L235)</sub>

??? example "Details"

    **Signature**

    `openLoanIDsByAccount(address _account) view returns (uint256[])`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L156)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `sETHRateNotInvalid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L460)</sub>

## Events

### `AccountLoanLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L472)</sub>

**Signature**: `AccountLoanLimitUpdated(uint256 loanLimit)`

### `CollateralizationRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L467)</sub>

**Signature**: `CollateralizationRatioUpdated(uint256 ratio)`

### `InterestRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L468)</sub>

**Signature**: `InterestRateUpdated(uint256 interestRate)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L469)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `IssueLimitUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L470)</sub>

**Signature**: `IssueLimitUpdated(uint256 issueLimit)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L475)</sub>

**Signature**: `LoanClosed(address account, uint256 loanID, uint256 feesPaid)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L474)</sub>

**Signature**: `LoanCreated(address account, uint256 loanID, uint256 amount)`

### `LoanLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L476)</sub>

**Signature**: `LoanLiquidated(address account, uint256 loanID, address liquidator)`

### `LoanLiquidationOpenUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L473)</sub>

**Signature**: `LoanLiquidationOpenUpdated(bool loanLiquidationOpen)`

### `MinLoanSizeUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.4/contracts/EtherCollateral.sol#L471)</sub>

**Signature**: `MinLoanSizeUpdated(uint256 minLoanSize)`
