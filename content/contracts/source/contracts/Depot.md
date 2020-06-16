# Depot

## Description

Allows anyone with sUSD to deposit their sUSD and users to exchange ETH for sUSD.

sUSD Deposits are put into a FIFO queue which will the depositor will recieve ETH at the ETH rate at the time of the exchange.

Throughout, the contract assumes that sUSD is always worth exactly US\$1. So: a) this will only work with `sUSD`. b) there's a profit opportunity if the `sUSD` is off its peg.

!!! SNX exchange functionality has been deprecated on MAINNET and is now used as a SNX faucet on the testnets only.

**Source:** [contracts/Depot.sol](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol)

## Architecture

### Libraries

- [SafeMath](/contracts/source/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/contracts/source/libraries/SafeDecimalMath) for `uint`

### Inheritance Graph

```mermaid
graph TD
    Depot[Depot] --> SelfDestructible[SelfDestructible]
    Depot[Depot] --> Pausable[Pausable]
    Depot[Depot] --> MixinResolver[MixinResolver]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]

```

### Related Contracts

- [Synthetix](Synthetix.md)
- [Synth](Synth.md)
- [ExchangeRates](ExchangeRates.md)
- [AddressResolver](AddressResolver.md)

## Structs

### `SynthDepositEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L35)</sub>

Stores an individual Synth deposit on sale.

| Field    | Type              | Description                     |
| -------- | ----------------- | ------------------------------- |
| `user`   | `address payable` | The depositor.                  |
| `amount` | `uint256`         | The quantity of sUSD deposited. |

## Variables

### `depositEndIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L57)</sub>

The index one past the last deposit in the [`deposits`](#deposits) queue.

**Type:** `uint256`

### `depositStartIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L55)</sub>

The index of the next deposit to be processed in the [`deposits`](#deposits) queue.

**Type:** `uint256`

### `deposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L53)</sub>

Users can deposit sUSD to be sold on the depot. This variable holds the queue of open deposits, which are sold in the order they were deposited.

This queue is stored as an "array" within a mapping: the keys are array indices. Deposits are stored by a contiguous block of keys between [`depositStartIndex`](#depositstartindex) (inclusive) and [`depositEndIndex`](#depositendindex) (exclusive).

A mapping is used instead of an array in order to avoid having to copy entries around when deposits are deleted, which saves on gas. When a deposit is made it is added to the end of the list, and when a deposit is filled, it is removed from the start of the list. Thus over time the list of deposits slides down the set of array indexes, but the address space of the mapping is large enough that it will never be filled.

**Type:** `mapping(uint256 => struct Depot.SynthDepositEntry)`

### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L32)</sub>

The address where ether and synths raised by selling SNX are sent.

It is also where ether is sent if the proceeds of a sale of synths could not be transferred because the recipient is a non-payable contract.

**Type:** `address payable`

### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L68)</sub>

**Type:** `uint256`

### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L65)</sub>

The minimum sUSD quantity required for a deposit to be added to the queue. Initialised to 50.0.

**Type:** `uint256`

### `smallDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L73)</sub>

Deposits of less than [`minimumDepositAmount`](#minimumdepositamount) sUSD are not placed on the [`deposits`](#deposits) queue. Instead, they are kept here so that the depositor can withdraw them.

**Type:** `mapping(address => uint256)`

### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L62)</sub>

The total quantity of sUSD currently in the [`deposits`](#deposits) queue to be purchased.

**Type:** `uint256`

## Constructor

### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L85)</sub>

Initialises the various addresses this contract knows, along with the inherited [`SelfDestructible`](SelfDestructible.md) and [`Pausable`](Pausable.md) instances.

??? example "Details"

    **Signature**

    `(address _owner, address payable _fundsWallet, address _resolver)`

    **Visibility**

    `public`

    **State Mutability**

    `nonpayable`

## Views

### `synthetixReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L484)</sub>

Computes the quantity of SNX received in exchange for a given quantity of Ether at current prices. This is equivalent to:

$$
Q_\text{SNX} = Q_\text{ETH} \times \frac{\pi_\text{ETH}}{\pi_\text{SNX}}
$$

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synthetixReceivedForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L474)</sub>

Computes the quantity of SNX received in exchange for a given quantity of sUSD at current prices, assuming sUSD are worth \$1. This is equivalent to:

$$
Q_\text{SNX} = Q_\text{sUSD} \times \frac{1}{\pi_\text{SNX}}
$$

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L497)</sub>

Computes the quantity of sUSD received in exchange for a given quantity of ETH at current prices. This is equivalent to:

$$
Q_\text{sUSD} = Q_\text{ETH} \times \pi_\text{SNX}
$$

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) returns (uint256)`

    **Visibility**

    `public`

    **State Mutability**

    `view`

## Restricted Functions

### `setFundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L104)</sub>

Allows the owner to set the [`fundsWallet`](#fundswallet) address.

??? example "Details"

    **Signature**

    `setFundsWallet(address payable _fundsWallet)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FundsWalletUpdated](#fundswalletupdated)

### `setMaxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L95)</sub>

??? example "Details"

    **Signature**

    `setMaxEthPurchase(uint256 _maxEthPurchase)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEthPurchaseUpdated](#maxethpurchaseupdated)

### `setMinimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L113)</sub>

Allows the owner to set the [minimum deposit amount](#minimumdepositamount).

??? example "Details"

    **Signature**

    `setMinimumDepositAmount(uint256 _amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Minimum deposit amount must be greater than UNIT)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L115)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumDepositAmountUpdated](#minimumdepositamountupdated)

### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L389)</sub>

- `withdrawSynthetix(uint amount)`: Only callable by the contract owner. Allows the owner to transfer SNX out of the Depot to themselves.

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Internal Functions

### `_exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L278)</sub>

??? example "Details"

    **Signature**

    `_exchangeEtherForSNX() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Exchange](#exchange)

### `_exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L146)</sub>

??? example "Details"

    **Signature**

    `_exchangeEtherForSynths() returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., ETH amount above maxEthPurchase limit)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L147)

### `_exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L334)</sub>

??? example "Details"

    **Signature**

    `_exchangeSynthsForSNX(uint256 synthAmount) returns (uint256)`

    **Visibility**

    `internal`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Exchange](#exchange)

### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L512)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() returns (contract IExchangeRates)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L508)</sub>

The address of the main [`Synthetix`](Synthetix.md) contract; the depot contains SNX.

**Type:** `Synthetix public`

??? example "Details"

    **Signature**

    `synthetix() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L504)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() returns (contract IERC20)`

    **Visibility**

    `internal`

    **State Mutability**

    `view`

## External Functions

### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L442)</sub>

- `depositSynths(uint amount)`: Just an alias to `synth.transferFrom(msg.sender, this, amount)`. This requires the sender to have approved the deposit.

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L296)</sub>

- `exchangeEtherForSNX() returns (uint)`: Requires that the contract is not paused, and that the prices are not stale. Converts the received ether to a quantity of SNX with `synthetixReceivedForEther`. Sends the ether to `fundsWallet`, sends the converted quantity of SNX to the message sender from the contract's own reserves. Returns the SNX quantity sent. If the contract has insufficient SNX, then the transfer will fail and the transaction will revert.

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L315)</sub>

- `exchangeEtherForSNXAtRate(uint guaranteedEtherRate, uint guaranteedSynthetixRate) returns (uint)`: As `exchangeEtherForSynthsAtRate` is to `exchangeEtherForSynths`, this is to `exchangeEtherForSNX`.

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedEtherRate, uint256 guaranteedSynthetixRate) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Guaranteed ether rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L325)

    * [require(..., Guaranteed synthetix rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L326)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L133)</sub>

Sells sUSD to callers who send ether. The synths are sold from the [`deposits`](#deposits) queue in the order they were deposited.

Purchased quantity: msg.value \* usdToEthPrice

Each deposit is sold in turn until the full
This function if invoked with a

Requires that the contract is not paused, and that the prices are not stale.

Returns the number of sUSD exchanged. Converts any ether sent to the contract to a quantity of synths at current prices. Fulfils this quantity by iterating through the deposit queue until the entire quantity is found. If a given deposit is insufficient to cover the entire requested amount, it is exhausted and removed from the queue. For each deposit found, the proper quantity of ether is sent to the depositor. If the quantity could not be sent because the target is a non-payable contract, then it is remitted to `fundsWallet`. Then send the Synths to the recipient. If the whole quantity could not be fulfilled, then the remaining ether is refunded to the purchaser.

- `exchangeEtherForSynths() returns (uint)`:

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L264)</sub>

- `exchangeEtherForSynthsAtRate(uint guaranteedRate) returns (uint)`: Allows the caller to specify the current price, and then calls to `exchangeEtherForSynths`. Reverts if the current price does not match the price provided as an argument. This is intended as a protection against front-running by the contract owner, or otherwise a case where a price update is in flight at the invocation time.

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L273)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L355)</sub>

- `exchangeSynthsForSNX(uint synthAmount) returns (uint)`: Identical to `exchangeEtherForSNX`, but perform the price conversion with `synthetixReceivedForSynths`. The amount of synths to send is provided as a function argument, and then transferred to `fundsWallet` with `transferFrom`, so this function requires the caller to have approved the depot contract to make such a withdrawal. Note that this assumes that sUSD is worth exactly one dollar.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `exchangeSynthsForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L372)</sub>

- `exchangeSynthsForSNXAtRate(uint synthAmount, uint guaranteedRate) returns (uint)`: As per `exchangeEtherForSNXAtRate`.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate) returns (uint256)`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L380)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L405)</sub>

- `withdrawMyDepositedSynths()`: Withdraws all Synths deposited by the message sender. Iterates through the entire deposit queue; if for a given entry the message sender is the depositor, delete that deposit and and add the deposited quantity of tokens to the pile to be remitted. Then transfer this quantity back to the message sender, along with any tokens in `smallDeposits`.

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **Visibility**

    `external`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., You have no deposits to withdraw.)](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L430)

    **Emits**

    * [SynthWithdrawal](#synthwithdrawal)

## Fallback Function

### `() (fallback function)`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L125)</sub>

This simply calls [`exchangeEtherForSynths`](#exchangeetherforsynths.) so that if ether is sent to the contract, it is automatically exchanged for synths.

??? example "Details"

    **Signature**

    `()`

    **Visibility**

    `external`

    **State Mutability**

    `payable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

## Modifiers

### `rateNotStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L518)</sub>

**Signature**: `rateNotStale(bytes32 currencyKey)`

## Events

### `ClearedDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L534)</sub>

**Signature**: `ClearedDeposit(address fromAddress, address toAddress, uint256 fromETHAmount, uint256 toAmount, uint256 depositIndex)`

### `Exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L527)</sub>

**Signature**: `Exchange(string fromCurrency, uint256 fromAmount, string toCurrency, uint256 toAmount)`

### `FundsWalletUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L526)</sub>

**Signature**: `FundsWalletUpdated(address newFundsWallet)`

### `MaxEthPurchaseUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L525)</sub>

**Signature**: `MaxEthPurchaseUpdated(uint256 amount)`

### `MinimumDepositAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L532)</sub>

**Signature**: `MinimumDepositAmountUpdated(uint256 amount)`

### `NonPayableContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L533)</sub>

**Signature**: `NonPayableContract(address receiver, uint256 amount)`

### `SynthDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L529)</sub>

**Signature**: `SynthDeposit(address user, uint256 amount, uint256 depositIndex)`

### `SynthDepositNotAccepted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L531)</sub>

**Signature**: `SynthDepositNotAccepted(address user, uint256 amount, uint256 minimum)`

### `SynthDepositRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L530)</sub>

**Signature**: `SynthDepositRemoved(address user, uint256 amount, uint256 depositIndex)`

### `SynthWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.22.4/contracts/Depot.sol#L528)</sub>

**Signature**: `SynthWithdrawal(address user, uint256 amount)`
