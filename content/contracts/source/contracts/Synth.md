# Synth

## Description

This contract is the basis of all Synth flavours.
It exposes sufficient functionality for the [`Synthetix`](Synthetix.md) and [`FeePool`](FeePool.md) contracts to manage its supply. Otherwise Synths are fairly vanilla ERC20 tokens; the [`PurgeableSynth`](PurgeableSynth.md) contract extends this basic functionality to allow the owner to liquidate a Synth if its total value is low enough.

See the [main synth notes](../../synths) for more information about how Synths function in practice.

??? note "A Historical Note on Conversion Fees"

    Since transfer conversion is not operating, the following is recorded only to be kept in mind in case it is ever reactivated. At present there is no way for users to set a preferred currency.

    The Synthetix system has implements both [exchange](FeePool.md#exchangefeerate) and [transfer](FeePool.md#transferfeerate) fees on Synths. Although they should be distinct, the preferred currency auto conversion on transfer only charges the transfer fee, and not the exchange fee.
    As a result, it is possible to convert Synths more cheaply whenever the transfer fee is less than the conversion fee.

    Given that the transfer fee is currently nil, if a user was able to set a preferred currency for themselves, it would be possible by this means to perform free Synth conversions. This would
    undercut fee revenue for the system to incentivise participants with. If markets had priced in the conversion fee, but were unaware of the exploit, then there would be a profit cycle available for someone exploiting this.

    In particular:

    Let $\phi_\kappa, \ \phi_\tau \in [0,1]$ be the conversion and transfer fee rates, respectively.
    Let $\pi_A, \ \pi_B$ be the prices of synths $A$ and $B$ in terms of some implicit common currency.
    $Q_A$ will be the starting quantity of synth $A$.

    Then to convert from $A$ to $B$, quantities

    $$
    Q^\kappa_B = Q_A\frac{\pi_A}{\pi_B}(1 - \phi_\kappa) \\
    Q^\tau_B = Q_A\frac{\pi_A}{\pi_B}(1 - \phi_\tau)
    $$

    are received if the user performs a standard conversion or a transfer conversion, respectively.
    The profit of performing a transfer conversion relative to a standard one is then:

    $$
    Q^\tau_B - Q^\kappa_B = Q_A\frac{\pi_A}{\pi_B}(\phi_\kappa - \phi_\tau)
    $$

    That is, the relative profit is simply $(\phi_\kappa - \phi_\tau)$. With no transfer fee, this is $\phi_\kappa$, as expected.

**Source:** [contracts/Synth.sol](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol)

## Variables

### `CONTRACT_NAME`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L19)</sub>

**Type:** `bytes32`

### `DECIMALS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L26)</sub>

The number of decimal places this token uses. Fixed at $18$.

**Value:** `18`

**Type:** `uint8`

### `FEE_ADDRESS`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L29)</sub>

**Type:** `address`

### `currencyKey`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L24)</sub>

The [identifier](Synthetix.md#synths) of this Synth within the Synthetix ecosystem. The currency key could in principle be distinct from this token's [ERC20 symbol](ExternStateToken.md#symbol).

**Type:** `bytes32`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L41)</sub>

Initialises the [`feePool`](#feepool) and [`synthetix`](#synthetix) addresses, this Synth's [`currencyKey`](#currencyKey), and the inherited [`ExternStateToken`](ExternStateToken.md) instance.

The precision in every Synth's fixed point representation is fixed at 18 so they are all conveniently [interconvertible](ExchangeRates.md#effectivevalue). The total supply of all new Synths is initialised to 0 since they must be created by the [`Synthetix`](Synthetix.md) contract when [issuing](Synthetix.md#issuesynths) or [converting between](Synthetix.md#exchange) Synths, or by the [`FeePool`](FeePool.md) when users [claim fees](FeePool.md#claimfees).

??? example "Details"

    **Signature**

    `constructor(address payable _proxy, contract TokenState _tokenState, string _tokenName, string _tokenSymbol, address _owner, bytes32 _currencyKey, uint256 _totalSupply, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Requires**

    * [require(..., "_proxy cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L55)

    * [require(..., "_owner cannot be 0")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L56)

## Views

### `resolverAddressesRequired`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L191)</sub>

??? example "Details"

    **Signature**

    `resolverAddressesRequired() view returns (bytes32[] addresses)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `transferableSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L226)</sub>

??? example "Details"

    **Signature**

    `transferableSynths(address account) view returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `burn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L163)</sub>

Allows the [`Synthetix`](Synthetix.md) contract to burn existing Synths of this flavour. This is used whenever Synths are [exchanged](Synthetix.md#_internalexchange) or [burnt directly](Synthetix.md#burnSynths). This is also used to burn Synths involved in oracle frontrunning as part of the [protection circuit](Synthetix.md#protectioncircuit). This is also used by the [`FeePool`](FeePool.md) to [burn sUSD when fees are paid out](FeePool.md#_payfees).

??? example "Details"

    **Signature**

    `burn(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

### `issue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L159)</sub>

Allows the [`Synthetix`](Synthetix.md) contract to issue new Synths of this flavour. This is used whenever Synths are [exchanged](Synthetix.md#_internalexchange) or [issued directly](Synthetix.md#issuesynths). This is also used by the [`FeePool`](FeePool.md) to [pay fees out](FeePool.md#_payfees).

??? example "Details"

    **Signature**

    `issue(address account, uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyInternalContracts](#onlyinternalcontracts)

### `setTotalSupply`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L184)</sub>

This allows the owner to set the total supply directly for upgrades, where the [`tokenState`](ExternStateToken.md#tokenstate) is retained, but the total supply figure must be migrated.

For example, just such a migration is performed by [this script](https://github.com/Synthetixio/synthetix/blob/master/publish/src/commands/replace-synths.js).

??? example "Details"

    **Signature**

    `setTotalSupply(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    ``

    **Modifiers**

    * [optionalProxy_onlyOwner](#optionalproxy_onlyowner)

### `transfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L63)</sub>

This is a pair of ERC20 transfer function.

Implemented based on [`ExternStateToken._transfer_byProxy`](ExternStateToken#_transfer_byproxy).

!!! Warning "Warning"

    Due to [SIP-37 Fee Reclamation](https://sips.synthetix.io/sips/sip-37), this will always fail if there are any exchanges awaiting settlement for this synth. To prevent failues, please use [`transferAndSettle()`](#transferandsettle) below or invoke [`Exchanger.settle()`](/contracts/exchanger/#settle) prior to `transfer()`.

??? example "Details"

    **Signature**

    `transfer(address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

### `transferAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L79)</sub>

Settles any outstanding fee reclaims and rebates from [SIP-37](https://sips.synthetix.io/sips/sip-37) and then performs the `transfer` functionality. If there is insufficient balance to transfer `value` after any reclaims, the `amount` will be reduced to the remaining balance of the sender.

Implemented based on [`ExternStateToken._transfer_byProxy`](ExternStateToken#_transfer_byproxy).

??? example "Details"

    **Signature**

    `transferAndSettle(address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

### `transferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L96)</sub>

This is a ERC20 transferFrom function.

Implemented based on [`ExternStateToken._transferFrom_byProxy`](ExternStateToken#_transferfrom_byproxy).

!!! Warning "Warning"

    Due to [SIP-37 Fee Reclamation](https://sips.synthetix.io/sips/sip-37), this will always fail if there are any exchanges awaiting settlement for this synth. To prevent failues, please use [`transferFromAndSettle()`](#transferfromandsettle) below or invoke [`Exchanger.settle()`](/contracts/exchanger/#settle) prior to `transferFrom()`.

??? example "Details"

    **Signature**

    `transferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

### `transferFromAndSettle`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L106)</sub>

Settles any outstanding fee reclaims and rebates from [SIP-37](https://sips.synthetix.io/sips/sip-37) and then performs the `transferFrom` functionality. If there is insufficient balance to transfer `value` after any reclaims, the `amount` will be reduced to the remaining balance of the `from` address.

Implemented based on [`ExternStateToken._transferFrom_byProxy`](ExternStateToken#_transferfrom_byproxy).

!!! Warning "Warning"

    Due to [SIP-37 Fee Reclamation](https://sips.synthetix.io/sips/sip-37), this will always fail if there are any exchanges awaiting settlement for this synth. To prevent failues, please use [`transferFromAndSettle()`](#transferfromandsettle) below or invoke [`Exchanger.settle()`](/contracts/exchanger/#settle) prior to `transferFrom()`.

??? example "Details"

    **Signature**

    `transferFromAndSettle(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `public`

    **State Mutability**

    ``

    **Modifiers**

    * [onlyProxyOrInternal](#onlyproxyorinternal)

## Internal Functions

### `_ensureCanTransfer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L220)</sub>

??? example "Details"

    **Signature**

    `_ensureCanTransfer(address from, uint256 value) view`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

    **Requires**

    * [require(..., "Cannot transfer during waiting period")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L221)

    * [require(..., "Insufficient balance after any settlement owing")](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L222)

### `_internalBurn`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L174)</sub>

??? example "Details"

    **Signature**

    `_internalBurn(address account, uint256 amount) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_internalIssue`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L167)</sub>

??? example "Details"

    **Signature**

    `_internalIssue(address account, uint256 amount)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_internalTransferFrom`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L243)</sub>

??? example "Details"

    **Signature**

    `_internalTransferFrom(address from, address to, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_isInternalContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L260)</sub>

??? example "Details"

    **Signature**

    `_isInternalContract(address account) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_isInternalTransferCaller`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L292)</sub>

??? example "Details"

    **Signature**

    `_isInternalTransferCaller(address caller) view returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `_onlyProxyOrInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L278)</sub>

??? example "Details"

    **Signature**

    `_onlyProxyOrInternal()`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `_transferToFeeAddress`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L131)</sub>

??? example "Details"

    **Signature**

    `_transferToFeeAddress(address to, uint256 value) returns (bool)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitBurned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L319)</sub>

??? example "Details"

    **Signature**

    `emitBurned(address account, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `emitIssued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L311)</sub>

??? example "Details"

    **Signature**

    `emitIssued(address account, uint256 value)`

    **Visibility**

    `internal`

    **State Mutability**

    ``

### `exchanger`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L208)</sub>

??? example "Details"

    **Signature**

    `exchanger() view returns (contract IExchanger)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `feePool`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L204)</sub>

The address of the [`FeePool`](FeePool.md) contract.

**Type:** `FeePool public`

??? example "Details"

    **Signature**

    `feePool() view returns (contract IFeePool)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `futuresMarketManager`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L216)</sub>

??? example "Details"

    **Signature**

    `futuresMarketManager() view returns (contract IFuturesMarketManager)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `issuer`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L212)</sub>

??? example "Details"

    **Signature**

    `issuer() view returns (contract IIssuer)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `systemStatus`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L200)</sub>

??? example "Details"

    **Signature**

    `systemStatus() view returns (contract ISystemStatus)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## Modifiers

### `onlyInternalContracts`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L268)</sub>

### `onlyProxyOrInternal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L273)</sub>

## Events

### `Burned`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L315)</sub>

Records that a quantity of this Synth was [burned](#burn).

This event is emitted from the Synths's [proxy](Proxy.md#_emit) with the `emitBurned` function.

**Signature**: `Burned(address account, uint256 value)`

### `Issued`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.101.2/contracts/Synth.sol#L307)</sub>

Records that a quantity of this Synth was newly [issued](#issue).

This event is emitted from the Synths's [proxy](Proxy.md#_emit) with the `emitIssued` function.

**Signature**: `Issued(address account, uint256 value)`
