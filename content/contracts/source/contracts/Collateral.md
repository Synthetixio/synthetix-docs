# Collateral

## Description

**Source:** [contracts/Collateral.sol](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol)

## Variables

### `canOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L71)</sub>

**Type:** `bool`

### `collateralKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L37)</sub>

**Type:** `bytes32`

### `interactionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L69)</sub>

**Type:** `uint256`

### `issueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L62)</sub>

**Type:** `uint256`

### `manager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L42)</sub>

**Type:** `contract ICollateralManager`

### `maxLoansPerAccount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L65)</sub>

**Type:** `uint256`

### `minCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L59)</sub>

**Type:** `uint256`

### `minCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L56)</sub>

**Type:** `uint256`

### `shortingRewards`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L51)</sub>

**Type:** `mapping(bytes32 => address)`

### `state`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L40)</sub>

**Type:** `contract CollateralState`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L45)</sub>

**Type:** `bytes32[]`

### `synthsByKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L48)</sub>

**Type:** `mapping(bytes32 => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L84)</sub>

??? example "Details"

    **Signature**

    `constructor(contract CollateralState _state, address _owner, contract ICollateralManager _manager, address _resolver, bytes32 _collateralKey, uint256 _minCratio, uint256 _minCollateral)`

    **Visibility**

    `public`

    **State Mutability**

    ``

## Views

### `areSynthsAndCurrenciesSet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L158)</sub>

??? example "Details"

    **Signature**

    `areSynthsAndCurrenciesSet(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys) view returns (bool)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateralRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L149)</sub>

??? example "Details"

    **Signature**

    `collateralRatio(struct ICollateralLoan.Loan loan) view returns (uint256 cratio)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `maxLoan`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L154)</sub>

??? example "Details"

    **Signature**

    `maxLoan(uint256 amount, bytes32 currency) view returns (uint256 max)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L102)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `addRewardsContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L220)</sub>

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

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L205)</sub>

??? example "Details"

    **Signature**

    `addSynths(bytes32[] _synthNamesInResolver, bytes32[] _synthKeys)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Array length mismatch")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L206)

    **Modifiers**

    * [onlyOwner](#onlyowner)

### `setCanOpenLoans`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L248)</sub>

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

### `setInteractionDelay`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L237)</sub>

??? example "Details"

    **Signature**

    `setInteractionDelay(uint256 _interactionDelay)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Max 1 hour")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L238)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [InteractionDelayUpdated](#interactiondelayupdated)

### `setIssueFeeRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L232)</sub>

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

### `setManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L243)</sub>

??? example "Details"

    **Signature**

    `setManager(contract ICollateralManager _newManager)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [ManagerUpdated](#managerupdated)

### `setMinCratio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L226)</sub>

??? example "Details"

    **Signature**

    `setMinCratio(uint256 _minCratio)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cratio must be above 1")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L227)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinCratioRatioUpdated](#mincratioratioupdated)

## Internal Functions

### `_checkLoanAvailable`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L192)</sub>

??? example "Details"

    **Signature**

    `_checkLoanAvailable(struct ICollateralLoan.Loan _loan) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Loan does not exist")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L193)

    * [require(..., "Recently interacted")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L194)

### `_checkSynthBalance`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L183)</sub>

??? example "Details"

    **Signature**

    `_checkSynthBalance(address payer, bytes32 key, uint256 amount) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Not enough balance")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L188)

### `_collateralUtil`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L143)</sub>

??? example "Details"

    **Signature**

    `_collateralUtil() view returns (contract ICollateralUtil)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_exchangeRates() view returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L135)</sub>

??? example "Details"

    **Signature**

    `_exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L139)</sub>

??? example "Details"

    **Signature**

    `_feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_payFees`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L766)</sub>

??? example "Details"

    **Signature**

    `_payFees(uint256 amount, bytes32 synth)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_processPayment`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L737)</sub>

??? example "Details"

    **Signature**

    `_processPayment(struct ICollateralLoan.Loan loanBefore, uint256 payment) returns (struct ICollateralLoan.Loan loanAfter)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_synth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L123)</sub>

??? example "Details"

    **Signature**

    `_synth(bytes32 synthName) view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L127)</sub>

??? example "Details"

    **Signature**

    `_synthsUSD() view returns (contract ISynth)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L119)</sub>

??? example "Details"

    **Signature**

    `_systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `accrueInterest`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L704)</sub>

??? example "Details"

    **Signature**

    `accrueInterest(struct ICollateralLoan.Loan loan) returns (struct ICollateralLoan.Loan loanAfter)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Invalid rates")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L716)

### `closeByLiquidationInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L387)</sub>

??? example "Details"

    **Signature**

    `closeByLiquidationInternal(address borrower, address liquidator, struct ICollateralLoan.Loan loan) returns (uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Waiting or owing")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L402)

    **Emits**

    * [LoanClosedByLiquidation](#loanclosedbyliquidation)

### `closeInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L335)</sub>

??? example "Details"

    **Signature**

    `closeInternal(address borrower, uint256 id) returns (uint256 collateral)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Waiting or owing")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L355)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanClosed](#loanclosed)

### `depositInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L431)</sub>

??? example "Details"

    **Signature**

    `depositInternal(address account, uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Deposit must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L440)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [CollateralDeposited](#collateraldeposited)

### `drawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L652)</sub>

??? example "Details"

    **Signature**

    `drawInternal(uint256 id, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cannot draw this much")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L669)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanDrawnDown](#loandrawndown)

### `issuanceRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L197)</sub>

??? example "Details"

    **Signature**

    `issuanceRatio() view returns (uint256 ratio)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `liquidateInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L496)</sub>

??? example "Details"

    **Signature**

    `liquidateInternal(address borrower, uint256 id, uint256 payment) returns (uint256 collateralLiquidated)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L505)

    * [require(..., "Cratio above liq ratio")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L521)

    * [require(..., "Waiting or owing")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L548)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanPartiallyLiquidated](#loanpartiallyliquidated)

### `openInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L255)</sub>

??? example "Details"

    **Signature**

    `openInternal(uint256 collateral, uint256 amount, bytes32 currency, bool short) returns (uint256 id)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Open disabled")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L264)

    * [require(..., "Not allowed to issue")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L267)

    * [require(..., "Invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L270)

    * [require(..., "Not enough collateral")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L273)

    * [require(..., "Max loans exceeded")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L276)

    * [require(..., "Debt limit or invalid rate")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L281)

    * [require(..., "Exceed max borrow power")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L284)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanCreated](#loancreated)

### `repayInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L558)</sub>

??? example "Details"

    **Signature**

    `repayInternal(address borrower, address repayer, uint256 id, uint256 payment)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L568)

    * [require(..., "Waiting or owing")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L589)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `repayWithCollateralInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L599)</sub>

??? example "Details"

    **Signature**

    `repayWithCollateralInternal(address borrower, address repayer, uint256 id, uint256 payment, bool payInterest)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Payment must be above 0")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L610)

    * [require(..., "Must be borrower")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L619)

    * [require(..., "Payment too high")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L630)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [LoanRepaymentMade](#loanrepaymentmade)

### `withdrawInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L464)</sub>

??? example "Details"

    **Signature**

    `withdrawInternal(uint256 id, uint256 amount) returns (uint256 withdraw)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "Cratio too low")](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L484)

    **Modifiers**

    * [rateIsValid](#rateisvalid)

    **Emits**

    * [CollateralWithdrawn](#collateralwithdrawn)

## Modifiers

### `rateIsValid`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L778)</sub>

## Events

### `CanOpenLoansUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L795)</sub>

**Signature**: `CanOpenLoansUpdated(bool canOpenLoans)`

### `CollateralDeposited`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L800)</sub>

**Signature**: `CollateralDeposited(address account, uint256 id, uint256 amountDeposited, uint256 collateralAfter)`

### `CollateralWithdrawn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L801)</sub>

**Signature**: `CollateralWithdrawn(address account, uint256 id, uint256 amountWithdrawn, uint256 collateralAfter)`

### `InteractionDelayUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L793)</sub>

**Signature**: `InteractionDelayUpdated(uint256 interactionDelay)`

### `IssueFeeRateUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L791)</sub>

**Signature**: `IssueFeeRateUpdated(uint256 issueFeeRate)`

### `LoanClosed`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L799)</sub>

**Signature**: `LoanClosed(address account, uint256 id)`

### `LoanClosedByLiquidation`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L811)</sub>

**Signature**: `LoanClosedByLiquidation(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanCreated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L798)</sub>

**Signature**: `LoanCreated(address account, uint256 id, uint256 amount, uint256 collateral, bytes32 currency, uint256 issuanceFee)`

### `LoanDrawnDown`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L803)</sub>

**Signature**: `LoanDrawnDown(address account, uint256 id, uint256 amount)`

### `LoanPartiallyLiquidated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L804)</sub>

**Signature**: `LoanPartiallyLiquidated(address account, uint256 id, address liquidator, uint256 amountLiquidated, uint256 collateralLiquidated)`

### `LoanRepaymentMade`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L802)</sub>

**Signature**: `LoanRepaymentMade(address account, address repayer, uint256 id, uint256 amountRepaid, uint256 amountAfter)`

### `ManagerUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L794)</sub>

**Signature**: `ManagerUpdated(contract ICollateralManager manager)`

### `MaxLoansPerAccountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L792)</sub>

**Signature**: `MaxLoansPerAccountUpdated(uint256 maxLoansPerAccount)`

### `MinCollateralUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L790)</sub>

**Signature**: `MinCollateralUpdated(uint256 minCollateral)`

### `MinCratioRatioUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.49.0-alpha/contracts/Collateral.sol#L789)</sub>

**Signature**: `MinCratioRatioUpdated(uint256 minCratio)`
