# Depot

## Description

Allows anyone with sUSD to deposit their sUSD and users to exchange ETH for sUSD.

sUSD Deposits are put into a FIFO queue which will the depositor will recieve ETH at the ETH rate at the time of the exchange.

Throughout, the contract assumes that sUSD is always worth exactly US\$1. So: a) this will only work with `sUSD`. b) there's a profit opportunity if the `sUSD` is off its peg.

!!! SNX exchange functionality has been deprecated on MAINNET and is now used as a SNX faucet on the testnets only.

**Source:** [Depot.sol](https://github.com/Synthetixio/synthetix/blob/master/contracts/Depot.sol)

## Architecture

---

### Inheritance Graph

<centered-image>
    ![Depot inheritance graph](../img/graphs/Depot.svg)
</centered-image>

---

### Related Contracts

- [Synthetix](Synthetix.md)
- [Synth](Synth.md)
- [ExchangeRates](ExchangeRates.md)
- [AddressResolver](AddressResolver.md)

---

### Libraries

- [`SafeMath`](SafeMath.md) for `uint`
- [`SafeDecimalMath`](SafeDecimalMath.md) for `uint`

---

## Structs

---

### `SynthDeposit`

Stores an individual Synth deposit on sale.

| Field  | Type      | Description                     |
| ------ | --------- | ------------------------------- |
| user   | `address` | The depositor.                  |
| amount | `uint`    | The quantity of sUSD deposited. |

---

## Variables

---

### `synthetix`

The address of the main [`Synthetix`](Synthetix.md) contract; the depot contains SNX.

**Type:** `Synthetix public`

---

### `synth`

The address of the sUSD [`Synth`](Synth.md), which are the synth held in the depot.

**Type:** `Synth public`

---

### `fundsWallet`

The address where ether and synths raised by selling SNX are sent.

It is also where ether is sent if the proceeds of a sale of synths could not be transferred because the recipient is a non-payable contract.

**Type:** `address public`

---

### `deposits`

Users can deposit sUSD to be sold on the depot. This variable holds the queue of open deposits, which are sold in the order they were deposited.

This queue is stored as an "array" within a mapping: the keys are array indices. Deposits are stored by a contiguous block of keys between [`depositStartIndex`](#depositstartindex) (inclusive) and [`depositEndIndex`](#depositendindex) (exclusive).

A mapping is used instead of an array in order to avoid having to copy entries around when deposits are deleted, which saves on gas. When a deposit is made it is added to the end of the list, and when a deposit is filled, it is removed from the start of the list. Thus over time the list of deposits slides down the set of array indexes, but the address space of the mapping is large enough that it will never be filled.

**Type:** `mapping(uint => synthDeposit) public`

---

### `depositStartIndex`

The index of the next deposit to be processed in the [`deposits`](#deposits) queue.

**Type:** `uint public`

---

### `depositEndIndex`

The index one past the last deposit in the [`deposits`](#deposits) queue.

**Type:** `uint public`

---

### `totalSellableDeposits`

The total quantity of sUSD currently in the [`deposits`](#deposits) queue to be purchased.

**Type:** `uint public` ([18 decimals](SafeDecimalMath.md))

---

### `minimumDepositAmount`

The minimum sUSD quantity required for a deposit to be added to the queue. Initialised to 50.0.

**Type:** `uint public` ([18 decimals](SafeDecimalMath.md))

---

### `smallDeposits`

Deposits of less than [`minimumDepositAmount`](#minimumdepositamount) sUSD are not placed on the [`deposits`](#deposits) queue. Instead, they are kept here so that the depositor can withdraw them.

**Type:** `mapping(address => uint) public` ([18 decimals](SafeDecimalMath.md))

---

## Functions

---

### `constructor`

Initialises the various addresses this contract knows, along with the inherited [`SelfDestructible`](SelfDestructible.md) and [`Pausable`](Pausable.md) instances.

??? example "Details"

    **Signature**

    `constructor(address _owner, address _fundsWallet, address _resolver) public`

    **Superconstructors**

    * [`SelfDestructible(_owner)`](SelfDestructible.md)
    * [`Pausable(_owner)`](Pausable.md)

---

### `setFundsWallet`

Allows the owner to set the [`fundsWallet`](#fundswallet) address.

??? example "Details"

    **Signature**

    `setFundsWallet(address _fundsWallet) external`

    **Modifiers**

    * [`Owned.onlyOwner`](Owned.md#onlyowner)

    **Emits**

    * [`FundsWalletUpdated(_fundsWallet)`](#fundswalletupdated)

---


### `setMinimumDepositAmount`

Allows the owner to set the [minimum deposit amount](#minimumdepositamount).

??? example "Details"

    **Signature**

    `setMinimumDepositAmount(uint _amount)`

    **Modifiers**

    * [`Owned.onlyOwner`](Owned.md#onlyowner)

    **Preconditions**

    * `_amount` must be greater than `UNIT`.

    **Emits**

    * [`MinimumDepositAmountUpdated(minimumDepositAmount)`](#minimumdepositamountupdated)

---

### `() (fallback function)`

This simply calls [`exchangeEtherForSynths`](#exchangeetherforsynths.) so that if ether is sent to the contract, it is automatically exchanged for synths.

??? example "Details"

    **Signature**

    `() external payable`

---

### `exchangeEtherForSynths`

Sells sUSD to callers who send ether. The synths are sold from the [`deposits`](#deposits) queue in the order they were deposited.

Purchased quantity: msg.value \* usdToEthPrice

Each deposit is sold in turn until the full
This function if invoked with a

Requires that the contract is not paused, and that the prices are not stale.

Returns the number of sUSD exchanged. Converts any ether sent to the contract to a quantity of synths at current prices. Fulfils this quantity by iterating through the deposit queue until the entire quantity is found. If a given deposit is insufficient to cover the entire requested amount, it is exhausted and removed from the queue. For each deposit found, the proper quantity of ether is sent to the depositor. If the quantity could not be sent because the target is a non-payable contract, then it is remitted to `fundsWallet`. Then send the Synths to the recipient. If the whole quantity could not be fulfilled, then the remaining ether is refunded to the purchaser.

- `exchangeEtherForSynths() returns (uint)`:

---

### `exchangeEtherForSynthsAtRate`

- `exchangeEtherForSynthsAtRate(uint guaranteedRate) returns (uint)`: Allows the caller to specify the current price, and then calls to `exchangeEtherForSynths`. Reverts if the current price does not match the price provided as an argument. This is intended as a protection against front-running by the contract owner, or otherwise a case where a price update is in flight at the invocation time.

---

### `exchangeEtherForSNX`

- `exchangeEtherForSNX() returns (uint)`: Requires that the contract is not paused, and that the prices are not stale. Converts the received ether to a quantity of SNX with `synthetixReceivedForEther`. Sends the ether to `fundsWallet`, sends the converted quantity of SNX to the message sender from the contract's own reserves. Returns the SNX quantity sent. If the contract has insufficient SNX, then the transfer will fail and the transaction will revert.

---

### `exchangeEtherForSNXAtRate`

- `exchangeEtherForSNXAtRate(uint guaranteedEtherRate, uint guaranteedSynthetixRate) returns (uint)`: As `exchangeEtherForSynthsAtRate` is to `exchangeEtherForSynths`, this is to `exchangeEtherForSNX`.

---

### `exchangeSynthsForSNX`

- `exchangeSynthsForSNX(uint synthAmount) returns (uint)`: Identical to `exchangeEtherForSNX`, but perform the price conversion with `synthetixReceivedForSynths`. The amount of synths to send is provided as a function argument, and then transferred to `fundsWallet` with `transferFrom`, so this function requires the caller to have approved the depot contract to make such a withdrawal. Note that this assumes that sUSD is worth exactly one dollar.

---

### `exchangeSynthsForSNXAtRate`

- `exchangeSynthsForSNXAtRate(uint synthAmount, uint guaranteedRate) returns (uint)`: As per `exchangeEtherForSNXAtRate`.

---

### `withdrawSynthetix`

- `withdrawSynthetix(uint amount)`: Only callable by the contract owner. Allows the owner to transfer SNX out of the Depot to themselves.

---

### `withdrawMyDepositedSynths`

- `withdrawMyDepositedSynths()`: Withdraws all Synths deposited by the message sender. Iterates through the entire deposit queue; if for a given entry the message sender is the depositor, delete that deposit and and add the deposited quantity of tokens to the pile to be remitted. Then transfer this quantity back to the message sender, along with any tokens in `smallDeposits`.

---

### `depositSynths`

- `depositSynths(uint amount)`: Just an alias to `synth.transferFrom(msg.sender, this, amount)`. This requires the sender to have approved the deposit.

---

### `tokenFallback`

- `tokenFallback(address from, uint amount, bytes data) returns (bool)`: Only callable by the `synth` contract. Handles the actual deposit flow whenever synths are sent to this contract. If the transferred quantity is smaller than the minimum deposit amount, add it to the sender's small deposit balance. Otherwise, "append" the deposit to the deposit queue/mapping and update total sellable deposit quantity.

---

### `synthetixReceivedForSynths`

Computes the quantity of SNX received in exchange for a given quantity of sUSD at current prices, assuming sUSD are worth \$1. This is equivalent to:

$$
Q_\text{SNX} = Q_\text{sUSD} \times \frac{1}{\pi_\text{SNX}}
$$

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint amount) public view returns (uint)`

---

### `synthetixReceivedForEther`

Computes the quantity of SNX received in exchange for a given quantity of Ether at current prices. This is equivalent to:

$$
Q_\text{SNX} = Q_\text{ETH} \times \frac{\pi_\text{ETH}}{\pi_\text{SNX}}
$$

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint amount) public view returns (uint)`

---

### `synthsReceivedForEther`

Computes the quantity of sUSD received in exchange for a given quantity of ETH at current prices. This is equivalent to:

$$
Q_\text{sUSD} = Q_\text{ETH} \times \pi_\text{SNX}
$$

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint amount) public view returns (uint)`

---

## Modifiers

---

### `onlySynth`

Reverts the transaction if `msg.sender` is not the [`synth`](#synth) address.


---

## Events

---

### `FundsWalletUpdated`

- `FundsWalletUpdated(address newFundsWallet)`

---

### `SynthUpdated`

- `SynthUpdated(Synth newSynthContract)`

---

### `SynthetixUpdated`

- `SynthetixUpdated(Synthetix newSynthetixContract)`

---

### `Exchange`

- `Exchange(string fromCurrency, uint fromAmount, string toCurrency, uint toAmount)`

---

### `SynthWithdrawal`

- `SynthWithdrawal(address user, uint amount)`

---

### `SynthDeposit`

- `SynthDeposit(address indexed user, uint amount, uint indexed depositIndex)`

---

### `SynthDepositRemoved`

- `SynthDepositRemoved(address indexed user, uint amount, uint indexed depositIndex)`

---

### `SynthDepositNotAccepted`

- `SynthDepositNotAccepted(address user, uint amount, uint minimum)`

---

### `SynthDepositAmountUpdated`

- `MinimumDepositAmountUpdated(uint amount)`

---

### `NonPayableContract`

- `NonPayableContract(address indexed receiver, uint amount)`

---

### `ClearedDeposit`

- `ClearedDeposit(address indexed fromAddress, address indexed toAddress, uint fromETHAmount, uint toAmount, uint indexed depositIndex)`

---
