# Depot

## Description

Allows anyone with sUSD to deposit their sUSD and users to exchange ETH for sUSD.


sUSD Deposits are put into a FIFO queue which will the depositor will recieve ETH at the ETH rate at the time of the exchange.


Throughout, the contract assumes that sUSD is always worth exactly US\$1. So: a) this will only work with `sUSD`. b) there's a profit opportunity if the `sUSD` is off its peg.


!!! SNX exchange functionality has been deprecated on MAINNET and is now used as a SNX faucet on the testnets only.



**Source:** [contracts/Depot.sol](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol)

## Architecture

---
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

---
### Related Contracts

- [Synthetix](Synthetix.md)
- [Synth](Synth.md)
- [ExchangeRates](ExchangeRates.md)
- [AddressResolver](AddressResolver.md)

---
### Libraries

- [SafeMath](/libraries/SafeMath) for `uint`
- [SafeDecimalMath](/libraries/SafeDecimalMath) for `uint`

## Constants

---
### `CONTRACT_EXRATES`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L78)</sub>





**Type:** `bytes32`

---
### `CONTRACT_SYNTHETIX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L79)</sub>





**Type:** `bytes32`

---
### `CONTRACT_SYNTHSUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L77)</sub>





**Type:** `bytes32`

---
### `ETH`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L25)</sub>





**Type:** `bytes32`

---
### `SNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L24)</sub>





**Type:** `bytes32`

## Variables

---
### `addressesToCache`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L81)</sub>





**Type:** `bytes32[24]`

---
### `depositEndIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L57)</sub>



The index one past the last deposit in the [`deposits`](#deposits) queue.




**Type:** `uint256`

---
### `deposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L53)</sub>



Users can deposit sUSD to be sold on the depot. This variable holds the queue of open deposits, which are sold in the order they were deposited.


This queue is stored as an "array" within a mapping: the keys are array indices. Deposits are stored by a contiguous block of keys between [`depositStartIndex`](#depositstartindex) (inclusive) and [`depositEndIndex`](#depositendindex) (exclusive).


A mapping is used instead of an array in order to avoid having to copy entries around when deposits are deleted, which saves on gas. When a deposit is made it is added to the end of the list, and when a deposit is filled, it is removed from the start of the list. Thus over time the list of deposits slides down the set of array indexes, but the address space of the mapping is large enough that it will never be filled.




**Type:** `mapping(uint256 => struct Depot.SynthDepositEntry)`

---
### `depositStartIndex`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L55)</sub>



The index of the next deposit to be processed in the [`deposits`](#deposits) queue.




**Type:** `uint256`

---
### `fundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L32)</sub>



The address where ether and synths raised by selling SNX are sent.


It is also where ether is sent if the proceeds of a sale of synths could not be transferred because the recipient is a non-payable contract.




**Type:** `address payable`

---
### `maxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L68)</sub>





**Type:** `uint256`

---
### `minimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L65)</sub>



The minimum sUSD quantity required for a deposit to be added to the queue. Initialised to 50.0.




**Type:** `uint256`

---
### `smallDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L73)</sub>



Deposits of less than [`minimumDepositAmount`](#minimumdepositamount) sUSD are not placed on the [`deposits`](#deposits) queue. Instead, they are kept here so that the depositor can withdraw them.




**Type:** `mapping(address => uint256)`

---
### `totalSellableDeposits`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L62)</sub>



The total quantity of sUSD currently in the [`deposits`](#deposits) queue to be purchased.




**Type:** `uint256`

## Structs

---
### `SynthDepositEntry`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L35)</sub>



| Field | Type | Description |
| ------ | ------ | ------ |
| user | address payable | TBA |
| amount | uint256 | TBA |


## Modifiers

---
### `onlySynth`

Reverts the transaction if `msg.sender` is not the [`synth`](#synth) address.


---
### `rateNotStale`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L518)</sub>



## Function (Constructor)

---
### `constructor`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L85)</sub>



??? example "Details"

    **Signature**

    `(address _owner, address payable _fundsWallet, address _resolver)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [Pausable](#pausable)

    * [MixinResolver](#mixinresolver)

## Function (Fallback)

---
### `() (fallback function)`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L125)</sub>



??? example "Details"

    **Signature**

    `()`

    **State Mutability**

    `payable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

## Functions

---
### `depositSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L442)</sub>



- `depositSynths(uint amount)`: Just an alias to `synth.transferFrom(msg.sender, this, amount)`. This requires the sender to have approved the deposit.

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount)`

    **State Mutability**

    `nonpayable`

---
### `exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L296)</sub>



- `exchangeEtherForSNX() returns (uint)`: Requires that the contract is not paused, and that the prices are not stale. Converts the received ether to a quantity of SNX with `synthetixReceivedForEther`. Sends the ether to `fundsWallet`, sends the converted quantity of SNX to the message sender from the contract's own reserves. Returns the SNX quantity sent. If the contract has insufficient SNX, then the transfer will fail and the transaction will revert.

??? example "Details"

    **Signature**

    `exchangeEtherForSNX()`

    **State Mutability**

    `payable`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `exchangeEtherForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L315)</sub>



- `exchangeEtherForSNXAtRate(uint guaranteedEtherRate, uint guaranteedSynthetixRate) returns (uint)`: As `exchangeEtherForSynthsAtRate` is to `exchangeEtherForSynths`, this is to `exchangeEtherForSNX`.

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedEtherRate, uint256 guaranteedSynthetixRate)`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Guaranteed ether rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L325)

    * [require(..., Guaranteed synthetix rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L326)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L133)</sub>



Sells sUSD to callers who send ether. The synths are sold from the [`deposits`](#deposits) queue in the order they were deposited.


Purchased quantity: msg.value \* usdToEthPrice


Each deposit is sold in turn until the full
This function if invoked with a


Requires that the contract is not paused, and that the prices are not stale.


Returns the number of sUSD exchanged. Converts any ether sent to the contract to a quantity of synths at current prices. Fulfils this quantity by iterating through the deposit queue until the entire quantity is found. If a given deposit is insufficient to cover the entire requested amount, it is exhausted and removed from the queue. For each deposit found, the proper quantity of ether is sent to the depositor. If the quantity could not be sent because the target is a non-payable contract, then it is remitted to `fundsWallet`. Then send the Synths to the recipient. If the whole quantity could not be fulfilled, then the remaining ether is refunded to the purchaser.


- `exchangeEtherForSynths() returns (uint)`:

??? example "Details"

    **Signature**

    `exchangeEtherForSynths()`

    **State Mutability**

    `payable`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `exchangeEtherForSynthsAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L264)</sub>



- `exchangeEtherForSynthsAtRate(uint guaranteedRate) returns (uint)`: Allows the caller to specify the current price, and then calls to `exchangeEtherForSynths`. Reverts if the current price does not match the price provided as an argument. This is intended as a protection against front-running by the contract owner, or otherwise a case where a price update is in flight at the invocation time.

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate)`

    **State Mutability**

    `payable`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L273)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L355)</sub>



- `exchangeSynthsForSNX(uint synthAmount) returns (uint)`: Identical to `exchangeEtherForSNX`, but perform the price conversion with `synthetixReceivedForSynths`. The amount of synths to send is provided as a function argument, and then transferred to `fundsWallet` with `transferFrom`, so this function requires the caller to have approved the depot contract to make such a withdrawal. Note that this assumes that sUSD is worth exactly one dollar.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `exchangeSynthsForSNXAtRate`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L372)</sub>



- `exchangeSynthsForSNXAtRate(uint synthAmount, uint guaranteedRate) returns (uint)`: As per `exchangeEtherForSNXAtRate`.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L380)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---
### `synthetixReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L484)</sub>



Computes the quantity of SNX received in exchange for a given quantity of Ether at current prices. This is equivalent to:


$$
Q_\text{SNX} = Q_\text{ETH} \times \frac{\pi_\text{ETH}}{\pi_\text{SNX}}
$$


??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount)`

    **State Mutability**

    `view`

---
### `synthetixReceivedForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L474)</sub>



Computes the quantity of SNX received in exchange for a given quantity of sUSD at current prices, assuming sUSD are worth \$1. This is equivalent to:


$$
Q_\text{SNX} = Q_\text{sUSD} \times \frac{1}{\pi_\text{SNX}}
$$


??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount)`

    **State Mutability**

    `view`

---
### `synthsReceivedForEther`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L497)</sub>



Computes the quantity of sUSD received in exchange for a given quantity of ETH at current prices. This is equivalent to:


$$
Q_\text{sUSD} = Q_\text{ETH} \times \pi_\text{SNX}
$$


??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount)`

    **State Mutability**

    `view`

---
### `withdrawMyDepositedSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L405)</sub>



- `withdrawMyDepositedSynths()`: Withdraws all Synths deposited by the message sender. Iterates through the entire deposit queue; if for a given entry the message sender is the depositor, delete that deposit and and add the deposited quantity of tokens to the pile to be remitted. Then transfer this quantity back to the message sender, along with any tokens in `smallDeposits`.

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., You have no deposits to withdraw.)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L430)

    **Emits**

    * [SynthWithdrawal](#synthwithdrawal)

## Functions (Internal)

---
### `_exchangeEtherForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L278)</sub>



??? example "Details"

    **Signature**

    `_exchangeEtherForSNX()`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Exchange](#exchange)

---
### `_exchangeEtherForSynths`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L146)</sub>



??? example "Details"

    **Signature**

    `_exchangeEtherForSynths()`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., ETH amount above maxEthPurchase limit)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L147)

---
### `_exchangeSynthsForSNX`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L334)</sub>



??? example "Details"

    **Signature**

    `_exchangeSynthsForSNX(uint256 synthAmount)`

    **State Mutability**

    `nonpayable`

    **Emits**

    * [Exchange](#exchange)

---
### `exchangeRates`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L512)</sub>



??? example "Details"

    **Signature**

    `exchangeRates()`

    **State Mutability**

    `view`

---
### `synthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L508)</sub>



??? example "Details"

    **Signature**

    `synthetix()`

    **State Mutability**

    `view`

---
### `synthsUSD`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L504)</sub>



??? example "Details"

    **Signature**

    `synthsUSD()`

    **State Mutability**

    `view`

## Functions (onlyOwner)

---
### `setFundsWallet`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L104)</sub>



??? example "Details"

    **Signature**

    `setFundsWallet(address payable _fundsWallet)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FundsWalletUpdated](#fundswalletupdated)

---
### `setMaxEthPurchase`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L95)</sub>



??? example "Details"

    **Signature**

    `setMaxEthPurchase(uint256 _maxEthPurchase)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEthPurchaseUpdated](#maxethpurchaseupdated)

---
### `setMinimumDepositAmount`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L113)</sub>



??? example "Details"

    **Signature**

    `setMinimumDepositAmount(uint256 _amount)`

    **State Mutability**

    `nonpayable`

    **Requires**

    * [require(..., Minimum deposit amount must be greater than UNIT)](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L115)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumDepositAmountUpdated](#minimumdepositamountupdated)

---
### `withdrawSynthetix`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L389)</sub>



??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount)`

    **State Mutability**

    `nonpayable`

    **Modifiers**

    * [onlyOwner](#onlyowner)

## Events

---
### `ClearedDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L534)</sub>



- `(address fromAddress, address toAddress, uint256 fromETHAmount, uint256 toAmount, uint256 depositIndex)`

---
### `Exchange`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L527)</sub>



- `(string fromCurrency, uint256 fromAmount, string toCurrency, uint256 toAmount)`

---
### `FundsWalletUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L526)</sub>



- `(address newFundsWallet)`

---
### `MaxEthPurchaseUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L525)</sub>



- `(uint256 amount)`

---
### `MinimumDepositAmountUpdated`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L532)</sub>



- `(uint256 amount)`

---
### `NonPayableContract`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L533)</sub>



- `(address receiver, uint256 amount)`

---
### `SynthDeposit`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L529)</sub>



- `(address user, uint256 amount, uint256 depositIndex)`

---
### `SynthDepositAmountUpdated`

- `MinimumDepositAmountUpdated(uint amount)`

---
### `SynthDepositNotAccepted`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L531)</sub>



- `(address user, uint256 amount, uint256 minimum)`

---
### `SynthDepositRemoved`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L530)</sub>



- `(address user, uint256 amount, uint256 depositIndex)`

---
### `SynthetixUpdated`

- `SynthetixUpdated(Synthetix newSynthetixContract)`

---
### `SynthUpdated`

- `SynthUpdated(Synth newSynthContract)`

---
### `SynthWithdrawal`

<sub>[Source](https://github.com/Synthetixio/synthetix/tree/v2.21.15/contracts/Depot.sol#L528)</sub>



- `(address user, uint256 amount)`

