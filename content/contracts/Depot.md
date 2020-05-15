# Depot

## Description


Allows anyone with sUSD to deposit their sUSD and users to exchange ETH for sUSD.


sUSD Deposits are put into a FIFO queue which will the depositor will recieve ETH at the ETH rate at the time of the exchange.


Throughout, the contract assumes that sUSD is always worth exactly US\$1. So: a) this will only work with `sUSD`. b) there's a profit opportunity if the `sUSD` is off its peg.


!!! SNX exchange functionality has been deprecated on MAINNET and is now used as a SNX faucet on the testnets only.


**Source:** [contracts/Depot.sol](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol)

## Architecture

### Inheritance Graph

```mermaid
graph TD
    Depot[Depot] --> SelfDestructible[SelfDestructible]
    Depot[Depot] --> Pausable[Pausable]
    Depot[Depot] --> ReentrancyGuard[ReentrancyGuard]
    Depot[Depot] --> MixinResolver[MixinResolver]
    SelfDestructible[SelfDestructible] --> Owned[Owned]
    Pausable[Pausable] --> Owned[Owned]
    MixinResolver[MixinResolver] --> Owned[Owned]
```

---

### Some Title



Some description


---

### Related Contracts


 - [`AddressResolver`](AddressResolver.md)
    


---

### Libraries


 - [`SafeMath`](SafeMath.md)
    


---

## Structs

---

### SynthDepositEntry
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L35)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| user | address payable | The depositor |
| amount | uint256 | The quantity of sUSD deposited |

---

## Variables

---

### `SNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L24)</sub>

**Type:** `bytes32`

---

### `ETH`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L25)</sub>

**Type:** `bytes32`

---

### `fundsWallet`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L32)</sub>


The address where ether and synths raised by selling SNX are sent.


It is also where ether is sent if the proceeds of a sale of synths could not be transferred because the recipient is a non-payable contract.


**Type:** `address payable`

---

### `deposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L53)</sub>

**Type:** `mapping(uint256 => struct Depot.SynthDepositEntry)`

---

### `depositStartIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L55)</sub>

**Type:** `uint256`

---

### `depositEndIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L57)</sub>

**Type:** `uint256`

---

### `totalSellableDeposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L62)</sub>

**Type:** `uint256`

---

### `minimumDepositAmount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L65)</sub>

**Type:** `uint256`

---

### `maxEthPurchase`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L68)</sub>

**Type:** `uint256`

---

### `smallDeposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L73)</sub>

**Type:** `mapping(address => uint256)`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L85)</sub>

??? example "Details"

    **Signature**

    `(address _owner, address payable _fundsWallet, address _resolver) public`

    **Modifiers**

    * [Owned](#owned)

    * [SelfDestructible](#selfdestructible)

    * [Pausable](#pausable)

    * [MixinResolver](#mixinresolver)

---

### `setMaxEthPurchase`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L95)</sub>

??? example "Details"

    **Signature**

    `setMaxEthPurchase(uint256 _maxEthPurchase) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEthPurchaseUpdated](#maxethpurchaseupdated)

---

### `setFundsWallet`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L104)</sub>

??? example "Details"

    **Signature**

    `setFundsWallet(address payable _fundsWallet) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FundsWalletUpdated](#fundswalletupdated)

---

### `setMinimumDepositAmount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L113)</sub>

??? example "Details"

    **Signature**

    `setMinimumDepositAmount(uint256 _amount) external`

    **Requires**

    * [require(..., Minimum deposit amount must be greater than UNIT)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L115)

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumDepositAmountUpdated](#minimumdepositamountupdated)

---

### `fallback`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L125)</sub>

??? example "Details"

    **Signature**

    `() external`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L133)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() external`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSynthsAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L264)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) external`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L273)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L296)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() external`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSNXAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L315)</sub>

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedEtherRate, uint256 guaranteedSynthetixRate) external`

    **Requires**

    * [require(..., Guaranteed ether rate would not be received)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L325)

    * [require(..., Guaranteed synthetix rate would not be received)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L326)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeSynthsForSNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L355)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) external`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeSynthsForSNXAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L372)</sub>

??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate) external`

    **Requires**

    * [require(..., Guaranteed rate would not be received)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L380)

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `withdrawSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L389)</sub>

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `withdrawMyDepositedSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L405)</sub>

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths() external`

    **Requires**

    * [require(..., You have no deposits to withdraw.)](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L430)

    **Emits**

    * [SynthWithdrawal](#synthwithdrawal)

---

### `depositSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L442)</sub>

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount) external`

---

### `synthetixReceivedForSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L474)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) public`

---

### `synthetixReceivedForEther`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L484)</sub>

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) public`

---

### `synthsReceivedForEther`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L497)</sub>

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) public`

---

## Modifiers

---

### `rateNotStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L518)</sub>

---

## Events

---

### `MaxEthPurchaseUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L525)</sub>

- `(uint256 amount)`

---

### `FundsWalletUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L526)</sub>

- `(address newFundsWallet)`

---

### `Exchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L527)</sub>

- `(string fromCurrency, uint256 fromAmount, string toCurrency, uint256 toAmount)`

---

### `SynthWithdrawal`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L528)</sub>

- `(address user, uint256 amount)`

---

### `SynthDeposit`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L529)</sub>

- `(address user, uint256 amount, uint256 depositIndex)`

---

### `SynthDepositRemoved`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L530)</sub>

- `(address user, uint256 amount, uint256 depositIndex)`

---

### `SynthDepositNotAccepted`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L531)</sub>

- `(address user, uint256 amount, uint256 minimum)`

---

### `MinimumDepositAmountUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L532)</sub>

- `(uint256 amount)`

---

### `NonPayableContract`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L533)</sub>

- `(address receiver, uint256 amount)`

---

### `ClearedDeposit`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/develop/contracts/Depot.sol#L534)</sub>

- `(address fromAddress, address toAddress, uint256 fromETHAmount, uint256 toAmount, uint256 depositIndex)`

---

