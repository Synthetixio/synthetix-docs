# Synthetix

## Description

**Source:** [contracts/Synthetix.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Synthetix[Synthetix] --> ExternStateToken[ExternStateToken]
    Synthetix[Synthetix] --> MixinResolver[MixinResolver]
    ExternStateToken[ExternStateToken] --> SelfDestructible[SelfDestructible]
    ExternStateToken[ExternStateToken] --> Proxyable[Proxyable]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Proxyable[Proxyable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

<centered-image>
    ![Synthetix architture graph](/img/graphs/Synthetix-architecture.svg)
</centered-image>

??? example "Details"

    - [`Depot`](Depot.md): The depot trades SNX and therefore knows the Synthetix address.
    - [`Exchanger`](Exchanger.md) The helper contract that performs the heavy lifting for `exchange()` and `settle()`.
    - [`ExchangeRates`](ExchangeRates.md): The Synthetix contract fetches prices from the exchange rates contract to facilitate synth exchange and to determine the value of various quantities of synths.
    - [`FeePool`](FeePool.md): The Synthetix contract remits exchange fees as sUSD to the fee pool, and also uses it to keep track of historical issuance records for each issuer.
    - [`Issuer`](Issuer.md) The helper contract that performs the heavy lifting for `issueSynths()`, `issueMaxSynths()` and `burnSynths()`.
    - [`Proxy`](Proxy.md): The Synthetix contract, which is [`Proxyable`](Proxyable.md), exists behind a `CALL`-style proxy for upgradeability.
    - [`RewardEscrow`](RewardEscrow.md): This is similar to the SynthetixEscrow contract, but it is where the SNX inflationary supply is kept before it is released to Synth issuers.
    - [`RewardsDistribution`](RewardsDistribution): This contract works closely with RewardEscrow to release portions of the inflationary supply to different recipients.
    - [`SupplySchedule`](SupplySchedule.md): The supply schedule determines the rate at which SNX are released from the inflationary supply.
    - [`Synth`](Synth.md): Synthetix manages the supply of synths. It keeps track of which ones exist, and they are all issued and burnt from the Synthetix contract. The Synthetix contract is also responsible for exchange between different synth flavours.
    - [`SynthetixEscrow`](SynthetixEscrow.md): The escrow contract keeps track of SNX owed to participants in the initial token sale, and releases them according to specified vesting schedules.
    - [`SynthetixState`](SynthetixState.md): This state contract stores the debt ledger and the current issuance information for synth issuers.

## Constants

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L35)</sub>

A constant used to initialise the ERC20 [`ExternStateToken.decimals`](ExternStateToken.md#decimals) field upon construction.

**Value:** `18`

**Type:** `uint8`

### `TOKEN_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L33)</sub>

A constant used to initialise the ERC20 [`ExternStateToken.name`](ExternStateToken.md#name) field upon construction.

**Value:** `"Synthetix Network Token"`

**Type:** `string`

### `TOKEN_SYMBOL`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L34)</sub>

A constant used to initialise the ERC20 [`ExternStateToken.symbol`](ExternStateToken.md#symbol) field upon construction.

**Value:** `"SNX"`

**Type:** `string`

### `sUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L36)</sub>

**Type:** `bytes32`

## Variables

### `availableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L29)</sub>

List of the active [`Synths`](Synth.md). Used to compute the total value of issued synths.

**Type:** `contract ISynth[]`

### `synths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L30)</sub>

A mapping from currency keys (`bytes32`) to [`Synth`](Synth.md) token contract addresses.

**Type:** `mapping(bytes32 => contract ISynth)`

### `synthsByAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L31)</sub>

A reverse mapping from a synth's address to its `bytes32` currency key

**Type:** `mapping(address => bytes32)`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L66)</sub>

??? example "Details"

    **Signature**

    `(address payable _proxy, contract TokenState _tokenState, address _owner, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `availableCurrencyKeys`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L168)</sub>

Returns the [currency key](Synth.md#currencykey) for each synth in [`availableSynths`](#availablesynths).

??? example "Details"

    **Signature**

    `availableCurrencyKeys()`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `availableSynthCount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L178)</sub>

Returns the number of synths in the system, that is [`availableSynths.length`](#availablesynths).

??? example "Details"

    **Signature**

    `availableSynthCount()`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `collateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L494)</sub>

Returns the total SNX owned by the given account, locked and unlocked, escrowed and unescrowed. This is the quantity of SNX synths can be issued against.

This is computed as the sum of [`Synthetix.balanceOf(account)`](TokenState.md#balanceof), [`SynthetixEscrow.balanceOf(account)`](SynthetixEscrow.md#balanceof), and [`RewardEscrow.balanceOf(account)`](RewardEscrow.md#balanceof); so an account may issue synths against both its active balance and its unclaimed escrow funds.

??? example "Details"

    **Signature**

    `collateral(address account)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `collateralisationRatio`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L396)</sub>

The ratio between value of synths that an account has issued and the value of the collateral they control. That is, this is just [`debtBalanceOf(issuer, "SNX") /`](#debtbalanceof) [`collateral(issuer)`](#collateral).

Ideally, issuers should maintain their collateralisation ratio at a level less than the [global issuance ratio](SynthetixState.md#issuanceratio), and they are incentivised to do this by the [fees they can claim](FeePool.md#claim) if they do so.

??? example "Details"

    **Signature**

    `collateralisationRatio(address _issuer)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `debtBalanceOf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L410)</sub>

Reports the quantity of a given currency required to free up all SNX locked in given account.

If $\mathrm{X}$ is the [total value of all issued synths](#totalissuedsynths), and $\check{\omega}$ is fraction of that value currently accounted for by this account's locked SNX, then the result is simply:

$$
\check{\omega} \ \mathrm{X}
$$

In order to account for fluctuations in synth prices and supply, the current ownership fraction is computed as the adjusted value:

$$
\check{\omega} = \omega \frac{\Delta_\text{last}}{\Delta_\text{entry}}
$$

Where $\omega$ is the account's debt ownership fraction at the time it [last issued or burnt](SynthetixState.md#issuancedata) synths, which produced the $\Delta_\text{entry}$ item in the [debt ledger](SynthetixState.md#debtledger). $\Delta_\text{last}$ is the latest value on the ledger. This logic is much the same as that found in [`FeePool._effectiveDebtRatioForPeriod`](FeePool.md#_effectivedebtratioforperiod). The actual value of $\omega$ is set in [`_addToDebtRegister`](#_addtodebtregister) and [`_removeFromDebtRegister`](#_removefromdebtregister).

??? example "Details"

    **Signature**

    `debtBalanceOf(address _issuer, bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `debtBalanceOfAndTotalDebt`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L430)</sub>

??? example "Details"

    **Signature**

    `debtBalanceOfAndTotalDebt(address _issuer, bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `isWaitingPeriod`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L182)</sub>

Whether or not the waiting period is ongoing for the given synth. If so, no exchanges into this synth will be allowed, nor will that synth be able to be transferred.

??? example "Details"

    **Signature**

    `isWaitingPeriod(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `view`

### `maxIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L372)</sub>

The maximum number of a given synth that is issuable against the issuer's collateral. This is simply [`issuanceRatio *`](SynthetixState.md#issuanceratio) [`collateral(issuer)`](#collateral), priced in the requested currency.

??? example "Details"

    **Signature**

    `maxIssuableSynths(address _issuer)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `remainingIssuableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L468)</sub>

The remaining sUSD synths this account can issue.

If $\text{maxIssuable}$ is [`maxIssuableSynths(issuer)`](#maxissuablesynths) and $\text{debt}$ is [`debtBalanceOf(issuer, currencyKey)`](#debtbalanceof), then the result of this function is $max(0, \text{maxIssuable} - \text{debt})$.

If prices fluctuate then the account's issued synth debt may exceed its current maximum issuable synths, in which case it may not issue any more synths until more collateral is added.

??? example "Details"

    **Signature**

    `remainingIssuableSynths(address _issuer)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L156)</sub>

Returns the total value of Synths in the system, priced in terms of a given currency.

This value is equivalent to:

$$
\frac{1}{\pi_d}\sum_{s \in \text{synths}}{\sigma_s \pi_s}
$$

Where $\sigma_s$ and $\pi_s$ are the total supply and price of synth $s$, and $\pi_d$ is the price of the denominating synth flavour.

??? example "Details"

    **Signature**

    `totalIssuedSynths(bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `totalIssuedSynthsExcludeEtherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L164)</sub>

??? example "Details"

    **Signature**

    `totalIssuedSynthsExcludeEtherCollateral(bytes32 currencyKey)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `transferableSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L514)</sub>

The quantity of SNX this account can transfer given that a portion of it may be locked due to issuance.

If $\text{balance}$ is [`balanceOf(account)`](TokenState.md#balanceof), and $\text{lockedSnx}$ is [`debtBalanceOf(account, "SNX") / SynthetixState.issuanceRatio`](#debtbalanceof), the function returns $max(0, \text{balance} - \text{lockedSnx})$. Escrowed tokens are not taken into account in this computation, so unescrowed tokens are locked immediately.

???+ info "A Note on Price Motion"

    The value of $\text{lockedSnx}$ depends on the current ($\pi$) and previous ($\pi'$) prices being reported by the oracle, and the issuance ratio ($\rho$).

    If we consider a situation where the synth supply has not changed in the time period under consideration, then ownership fractions do not change even if prices do. Further assuming that there is only a single synth circulating, debt balances correspond to the same number of synths, although perhaps not the same value.

    In such a situation, we can think of each user having issued a particular quantity of synths. This quantity depends on the prices of synths and SNX at the time of issuance.

    $$
    Q_s = \rho \ \frac{\pi'_c}{\pi'_s} \ Q_c
    $$

    Whose value at the present time priced [in terms of SNX](#effectivevalue), which is what [`debtBalanceOf(account, "SNX")`](#debtbalanceof) returns, is:

    $$
    {V_s}^{c} = \rho \ \frac{\pi'_c}{\pi'_s} \ \pi_c \ Q_c
    $$

    Note that this computation has a factor of $\rho$ in it, and this must be divided out in order to ascertain the quantity of SNX which are presently locked.

    $$
    \text{lockedSnx} = \frac{{V_s}^{c}}{\rho} = \frac{\pi'_c}{\pi'_s} \ \pi_c \ Q_c
    $$

    Which is to say that the quantity of SNX locked in this situation depends on the price.

    !!! todo "Extend this to the multicurrency case"

        Consider a two synth system, one primary synth and a secondary one which represents the price/supply of all other synths. Use the total issued value function to derive the behaviour for multiple currencies, and then examine a single currency as a special case.

??? example "Details"

    **Signature**

    `transferableSynthetix(address account)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

## Restricted Functions

### `addSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L192)</sub>

Allows the owner to add a new [`Synth`](Synth.md) to the system, inserting it into [`availableSynths`](#availablesynths) and [`synths`](#synths). The new synth's [currency key](Synth.md#currencykey) must be unique.

??? example "Details"

    **Signature**

    `addSynth(contract ISynth synth)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth already exists)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L195)

    * [require(..., Synth address already exists)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L196)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

### `emitExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L642)</sub>

??? example "Details"

    **Signature**

    `emitExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `emitExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L631)</sub>

??? example "Details"

    **Signature**

    `emitExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `emitSynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L610)</sub>

??? example "Details"

    **Signature**

    `emitSynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyExchanger](#onlyexchanger)

### `removeSynth`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L207)</sub>

Allows the owner to remove a [`Synth`](Synth.md) from the system.
Upon removal it is also deleted from [`availableSynths`](#availablesynths) and [`synths`](#synths), which frees that currency key to be reused.

A Synth cannot be removed if it has outstanding issued tokens.

??? example "Details"

    **Signature**

    `removeSynth(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Synth does not exist)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L208)

    * [require(..., Synth supply exists)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L209)

    * [require(..., Cannot remove synth)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L210)

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

## Internal Functions

### `_totalIssuedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L125)</sub>

??? example "Details"

    **Signature**

    `_totalIssuedSynths(bytes32 currencyKey, bool excludeEtherCollateral)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., Rates are stale)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L131)

### `etherCollateral`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L88)</sub>

??? example "Details"

    **Signature**

    `etherCollateral()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L100)</sub>

??? example "Details"

    **Signature**

    `exchangeRates()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L84)</sub>

??? example "Details"

    **Signature**

    `exchanger()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L92)</sub>

??? example "Details"

    **Signature**

    `issuer()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L108)</sub>

??? example "Details"

    **Signature**

    `rewardEscrow()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `rewardsDistribution`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L116)</sub>

??? example "Details"

    **Signature**

    `rewardsDistribution()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `supplySchedule`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L104)</sub>

??? example "Details"

    **Signature**

    `supplySchedule()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixEscrow`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L112)</sub>

??? example "Details"

    **Signature**

    `synthetixEscrow()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetixState`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L96)</sub>

??? example "Details"

    **Signature**

    `synthetixState()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L80)</sub>

??? example "Details"

    **Signature**

    `systemStatus()`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `burnSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L298)</sub>

[Burns](Synth.md#burn) a quantity of `sUSD` in the calling address, in order to free up its locked SNX supply.

If the caller attempts to burn more synths than their SNX debt is worth, this function will only burn sufficiently many tokens to cover the debt and leave the rest untouched.

The new debt position of the caller is recorded with [`_appendAccountIssuanceRecord`](#appendaccountissuancerecord), and the adjustment to global debt recorded with [`_removeFromDebtRegister`](#_removefromdebtregister).

See [`Issuer`](Issuer.md#issueSynths) for further details.

??? example "Details"

    **Signature**

    `burnSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `burnSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L304)</sub>

??? example "Details"

    **Signature**

    `burnSynthsOnBehalf(address burnForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTarget`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L310)</sub>

[Burns](Synth.md#burn) enough sUSD to get the user's [collaterisation ratio](#collateralisationratio) back to the target [issuance ratio](SynthetixState.md#issuanceratio).

??? example "Details"

    **Signature**

    `burnSynthsToTarget()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `burnSynthsToTargetOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L316)</sub>

??? example "Details"

    **Signature**

    `burnSynthsToTargetOnBehalf(address burnForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L322)</sub>

Exchanges one synth flavour for an equivalent value of another at current [exchange rates](ExchangeRates.md) and transfers the converted quantity to a destination address. An [exchange fee](FeePool.md#exchangefeerate) is charged on the way.

See [`Exchanger`](Exchanger.md#exchange) for further details.

??? example "Details"

    **Signature**

    `exchange(bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `exchangeOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L334)</sub>

??? example "Details"

    **Signature**

    `exchangeOnBehalf(address exchangeForAddress, bytes32 sourceCurrencyKey, uint256 sourceAmount, bytes32 destinationCurrencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `issueMaxSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L286)</sub>

Issues the [maximum quantity](#remainingissuablesynths) `sUSD` issuable by the caller of a particular synth flavour. Otherwise, this operates exactly as [`issueSynths`](#issuesynths) does.

See [`Issuer`](Issuer.md#issueSynths) for further details.

??? example "Details"

    **Signature**

    `issueMaxSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `issueMaxSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L292)</sub>

??? example "Details"

    **Signature**

    `issueMaxSynthsOnBehalf(address issueForAddress)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `issueSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L274)</sub>

[Issues](Synth.md#issue) a new quantity of `sUSD` into the calling address. The new debt issuance is recorded with [`_addToDebtRegister`](#_addtodebtregister), and the account's issuance records are updated with [`_appendAccountIssuanceRecord`](#_appendaccountissuancerecord).

See [`Issuer`](Issuer.md#issueSynths) for further details.

??? example "Details"

    **Signature**

    `issueSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `issueSynthsOnBehalf`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L280)</sub>

??? example "Details"

    **Signature**

    `issueSynthsOnBehalf(address issueForAddress, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `mint`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L545)</sub>

This function is responsible for creating the inflationary SNX supply. It is a public function, so any address can ensure new tokens are released on schedule. When a new quantity is minted, the calling address is rewarded with a small incentive of SNX tokens, defined by [`SupplySchedule.minterReward`](SupplySchedule.md#minterreward).

The supply is released according to the schedule defined in [`SupplySchedule.schedules`](SupplySchedule.md#schedules), being sent to the [`RewardsDistribution`](RewardsDistribution.md#distributerewards) contract for distribution and escrow. The total supply SNX supply is thus increased by the quantity specified by the schedule.

This function always returns true if the transaction did not revert.

??? example "Details"

    **Signature**

    `mint()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., RewardsDistribution not set)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L546)

    * [require(..., No supply is mintable)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L554)

### `settle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L354)</sub>

Settles any amounts oustanding for previous exchanges into the given synth.

See [`Exchanger`](Exchanger.md#exchange) for further details.

??? example "Details"

    **Signature**

    `settle(bytes32 currencyKey)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L244)</sub>

This is a ERC20 transfer functions.

A successful transfer requires the message sender to have sufficient balance, accounting for [locked SNX](#transferablesynthetix).

Implemented based on [`ExternStateToken._transfer_byProxy`](ExternStateToken#_transfer_byproxy).

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot transfer staked or escrowed SNX)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L248)

    **Modifiers**

    * [optionalProxy](#optionalproxy)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L259)</sub>

This is a ERC20 transferFrom functions.

A successful transfer requires the token owner to have sufficient balance, accounting for [locked SNX](#transferablesynthetix).

Implemented based on [`ExternStateToken._transferFrom_byProxy`](ExternStateToken#_transferfrom_byproxy).

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Cannot transfer staked or escrowed SNX)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L267)

    **Modifiers**

    * [optionalProxy](#optionalproxy)

## Modifiers

### `onlyExchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L591)</sub>

### `rateNotStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L586)</sub>

The transaction is reverted if the given currency's latest exchange rate [is stale](ExchangeRates.md#rateisstale). This will also revert if the currency key is unknown to the exchange rates contract.

**Signature**: `rateNotStale(bytes32 currencyKey)`

## Events

### `ExchangeRebate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L639)</sub>

!!! tip "Fee Rebates"

    See [SIP-37](https://sips.synthetix.io/sips/sip-37) on Fee Reclamation & Rebates.

Records that an `amount` of the synth denoted by `currencyKey` has been rebated (i.e. issued) by the system to the `account`.

The amount is the total net amount from all unsettled exchanges into the given synth

**Signature**: `ExchangeRebate(address account, bytes32 currencyKey, uint256 amount)`

### `ExchangeReclaim`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L628)</sub>

!!! tip "Fee Reclaims"

    See [SIP-37](https://sips.synthetix.io/sips/sip-37) on Fee Reclamation & Rebates.

Records that an `amount` of the synth denoted by `currencyKey` has been reclaimed (i.e. burned) from the `account` to the system.

The amount is the total net amount from all unsettled exchanges into the given synth

**Signature**: `ExchangeReclaim(address account, bytes32 currencyKey, uint256 amount)`

### `SynthExchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Synthetix.sol#L598)</sub>

Records that an [exchange](#exchange) between two flavours of synths occurred.

This event is emitted from the Synthetix [proxy](Proxy.md#_emit) with the `emitSynthExchange` function.

**Signature**: `SynthExchange(address account, bytes32 fromCurrencyKey, uint256 fromAmount, bytes32 toCurrencyKey, uint256 toAmount, address toAddress)`