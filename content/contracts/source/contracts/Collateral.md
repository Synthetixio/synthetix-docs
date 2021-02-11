# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol)

## Variables

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L71)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L37)</sub>

**Type:** `bytes32`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L69)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L62)</sub>

**Type:** `uint256`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L42)</sub>

**Type:** `address`

### `maxLoansPerAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L65)</sub>

**Type:** `uint256`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L59)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L56)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L51)</sub>

**Type:** `mapping(bytes32 => address)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L40)</sub>

**Type:** `contract CollateralState`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L45)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L48)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L83)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralState _state, address _owner, address _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L251)</sub>

??? example "Details"

    **Signature**

    `addRewardsContracts(address rewardsContract, bytes32 synth)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `addSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L236)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Input array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L237)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L279)</sub>

??? example "Details"

    **Signature**

    `setCanOpenLoans(bool _canOpenLoans)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [CanOpenLoansUpdated](#canopenloansupdated)

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L268)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L269)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L263)</sub>

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

### `setManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L274)</sub>

??? example "Details"

    **Signature**

    `setManager(address _newManager)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ManagerUpdated](#managerupdated)

### `setMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L257)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Must be greater than 1")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L258)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

## Internal Functions

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L223)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan _loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Loan does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L224)

    * [require(..., "Loan recently interacted with")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L225)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L214)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount) view`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Not enough synth balance")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L219)

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L129)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L133)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L137)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L141)</sub>

??? example "Details"

    **Signature**

    `_manager() view returns (contract ICollateralManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L748)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L719)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loanBefore, uint256 payment) returns (struct ICollateralLoan.Loan loanAfter)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L121)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L117)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L683)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(struct ICollateralLoan.Loan loan) returns (struct ICollateralLoan.Loan loanAfter)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Rates are invalid")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L696)

### `closeByLiquidationInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L420)</sub>

??? example "Details"

    **Signature**

    `closeByLiquidationInternal(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Waiting or settlement owing")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L435)

    **Emits**

    * [LoanClosedByLiquidation](#loanclosedbyliquidation)

### `closeInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L365)</sub>

??? example "Details"

    **Signature**

    `closeInternal(address borrower, uint256 id) returns (uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Waiting secs or settlement owing")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L385)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanClosed](#loanclosed)

### `depositInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L464)</sub>

??? example "Details"

    **Signature**

    `depositInternal(address account, uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Deposit must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L473)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `drawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L631)</sub>

??? example "Details"

    **Signature**

    `drawInternal(uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cannot draw this much")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L648)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanDrawnDown](#loandrawndown)

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L228)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256 ratio)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

### `liquidateInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L529)</sub>

??? example "Details"

    **Signature**

    `liquidateInternal(address borrower, uint256 id, uint256 payment) returns (uint256 collateralLiquidated)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Payment must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L538)

    * [require(..., "Cratio above liquidation ratio")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L553)

    * [require(..., "Waiting or settlement owing")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L580)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `openInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L286)</sub>

??? example "Details"

    **Signature**

    `openInternal(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256 id)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Opening is disabled")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L295)

    * [require(..., "Not allowed to issue this synth")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L298)

    * [require(..., "Currency rate is invalid")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L301)

    * [require(..., "Not enough collateral to open")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L304)

    * [require(..., "Max loans exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L307)

    * [require(..., "Debt limit or invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L312)

    * [require(..., "Exceeds max borrowing power")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L315)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanCreated](#loancreated)

### `repayInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L590)</sub>

??? example "Details"

    **Signature**

    `repayInternal(address borrower, address repayer, uint256 id, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Payment must be greater than 0")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L600)

    * [require(..., "Waiting or settlement owing")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L621)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `withdrawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L497)</sub>

??? example "Details"

    **Signature**

    `withdrawInternal(uint256 id, uint256 amount) returns (uint256 withdraw)`

    **Visibility**

    `internal`

    **State Mutability**

    `undefined`

    **Requires**

    * [require(..., "Cratio too low")](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L517)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## External Functions

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L189)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `undefined`

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L147)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(struct ICollateralLoan.Loan loan) view returns (uint256 cratio)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `collateralRedeemed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L182)</sub>

??? example "Details"

    **Signature**

    `collateralRedeemed(bytes32 currency, uint256 amount) view returns (uint256 collateral)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `liquidationAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L167)</sub>

??? example "Details"

    **Signature**

    `liquidationAmount(struct ICollateralLoan.Loan loan) view returns (uint256 amount)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L154)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) view returns (uint256 max)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L101)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `undefined`

## Modifiers

### `rateIsValid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L760)</sub>

## Events

### `CanOpenLoansUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L777)</sub>

**Signature**: `CanOpenLoansUpdated(bool canOpenLoans)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L782)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L783)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L775)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L773)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L781)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L793)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L780)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L785)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L786)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L784)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`

### `ManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L776)</sub>

**Signature**: `ManagerUpdated(address manager)`

### `MaxLoansPerAccountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L774)</sub>

**Signature**: `MaxLoansPerAccountUpdated(uint256 maxLoansPerAccount)`

### `MinCollateralUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L772)</sub>

**Signature**: `MinCollateralUpdated(uint256 minCollateral)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.39.1/contracts/Collateral.sol#L771)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`
