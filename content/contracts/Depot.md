# Depot

## Description

Allows anyone with sUSD to deposit their sUSD and users to exchange ETH for sUSD.

sUSD Deposits are put into a FIFO queue which will the depositor will recieve ETH at the ETH rate at the time of the exchange.

Throughout, the contract assumes that sUSD is always worth exactly US\$1. So: a) this will only work with `sUSD`. b) there's a profit opportunity if the `sUSD` is off its peg.

!!! SNX exchange functionality has been deprecated on MAINNET and is now used as a SNX faucet on the testnets only.

**Source:** [contracts/Depot.sol](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol)

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

### SynthDepositEntry
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L30)</sub>

| Field | Type | Description |
| ------ | ------ | ------ |
| user | address payable | The depositor |
| amount | uint256 | The quantity of sUSD deposited |

---

## Variables

---

### `SNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L19)</sub>

**Type:** `bytes32`

**Visibility:** `internal`

---

### `ETH`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L20)</sub>

**Type:** `bytes32`

**Visibility:** `internal`

---

### `fundsWallet`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L27)</sub>

The address where ether and synths raised by selling SNX are sent.

It is also where ether is sent if the proceeds of a sale of synths could not be transferred because the recipient is a non-payable contract.

**Type:** `address payable`

**Visibility:** `public`

---

### `deposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L48)</sub>

**Type:** `mapping(uint256 => struct Depot.SynthDepositEntry)`

**Visibility:** `public`

---

### `depositStartIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L50)</sub>

**Type:** `uint256`

**Visibility:** `public`

---

### `depositEndIndex`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L52)</sub>

**Type:** `uint256`

**Visibility:** `public`

---

### `totalSellableDeposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L57)</sub>

**Type:** `uint256`

**Visibility:** `public`

---

### `minimumDepositAmount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L60)</sub>

**Type:** `uint256`

**Visibility:** `public`

---

### `maxEthPurchase`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L63)</sub>

**Type:** `uint256`

**Visibility:** `public`

---

### `smallDeposits`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L68)</sub>

**Type:** `mapping(address => uint256)`

**Visibility:** `public`

---

### `CONTRACT_SYNTHSUSD`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L72)</sub>

**Type:** `bytes32`

**Visibility:** `private`

---

### `CONTRACT_EXRATES`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L73)</sub>

**Type:** `bytes32`

**Visibility:** `private`

---

### `CONTRACT_SYNTHETIX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L74)</sub>

**Type:** `bytes32`

**Visibility:** `private`

---

### `addressesToCache`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L76)</sub>

**Type:** `bytes32[24]`

**Visibility:** `private`

---

## Functions

---

### `constructor`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L80)</sub>

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
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L90)</sub>

??? example "Details"

    **Signature**

    `setMaxEthPurchase(uint256 _maxEthPurchase) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MaxEthPurchaseUpdated](#maxethpurchaseupdated)

---

### `setFundsWallet`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L99)</sub>

@notice Set the funds wallet where ETH raised is held
@param _fundsWallet The new address to forward ETH and Synths to

??? example "Details"

    **Signature**

    `setFundsWallet(address payable _fundsWallet) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [FundsWalletUpdated](#fundswalletupdated)

---

### `setMinimumDepositAmount`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L108)</sub>

@notice Set the minimum deposit amount required to depoist sUSD into the FIFO queue
@param _amount The new new minimum number of sUSD required to deposit

??? example "Details"

    **Signature**

    `setMinimumDepositAmount(uint256 _amount) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

    **Emits**

    * [MinimumDepositAmountUpdated](#minimumdepositamountupdated)

---

### `fallback`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L120)</sub>

@notice Fallback function (exchanges ETH to sUSD)

??? example "Details"

    **Signature**

    `() external`

---

### `exchangeEtherForSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L128)</sub>

@notice Exchange ETH to sUSD.

??? example "Details"

    **Signature**

    `exchangeEtherForSynths() public`

    **Modifiers**

    * [nonReentrant](#nonreentrant)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSynthsAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L255)</sub>

@notice Exchange ETH to sUSD while insisting on a particular rate. This allows a user to
        exchange while protecting against frontrunning by the contract owner on the exchange rate.
@param guaranteedRate The exchange rate (ether price) which must be honored or the call will revert.

??? example "Details"

    **Signature**

    `exchangeEtherForSynthsAtRate(uint256 guaranteedRate) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeEtherForSNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L272)</sub>

@notice Exchange ETH to SNX.

??? example "Details"

    **Signature**

    `exchangeEtherForSNX() public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

    **Emits**

    * [Exchange](#exchange)

---

### `exchangeEtherForSNXAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L302)</sub>

@notice Exchange ETH to SNX while insisting on a particular set of rates. This allows a user to
        exchange while protecting against frontrunning by the contract owner on the exchange rates.
@param guaranteedEtherRate The ether exchange rate which must be honored or the call will revert.
@param guaranteedSynthetixRate The synthetix exchange rate which must be honored or the call will revert.

??? example "Details"

    **Signature**

    `exchangeEtherForSNXAtRate(uint256 guaranteedEtherRate, uint256 guaranteedSynthetixRate) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `exchangeSynthsForSNX`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L325)</sub>

@notice Exchange sUSD for SNX
@param synthAmount The amount of synths the user wishes to exchange.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNX(uint256 synthAmount) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

    **Emits**

    * [Exchange](#exchange)

---

### `exchangeSynthsForSNXAtRate`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L355)</sub>

@notice Exchange sUSD for SNX while insisting on a particular rate. This allows a user to
        exchange while protecting against frontrunning by the contract owner on the exchange rate.
@param synthAmount The amount of synths the user wishes to exchange.
@param guaranteedRate A rate (synthetix price) the caller wishes to insist upon.

??? example "Details"

    **Signature**

    `exchangeSynthsForSNXAtRate(uint256 synthAmount, uint256 guaranteedRate) public`

    **Modifiers**

    * [rateNotStale](#ratenotstale)

    * [notPaused](#notpaused)

---

### `withdrawSynthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L372)</sub>

@notice Allows the owner to withdraw SNX from this contract if needed.
@param amount The amount of SNX to attempt to withdraw (in 18 decimal places).

??? example "Details"

    **Signature**

    `withdrawSynthetix(uint256 amount) external`

    **Modifiers**

    * [onlyOwner](#onlyowner)

---

### `withdrawMyDepositedSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L388)</sub>

@notice Allows a user to withdraw all of their previously deposited synths from this contract if needed.
        Developer note: We could keep an index of address to deposits to make this operation more efficient
        but then all the other operations on the queue become less efficient. It's expected that this
        function will be very rarely used, so placing the inefficiency here is intentional. The usual
        use case does not involve a withdrawal.

??? example "Details"

    **Signature**

    `withdrawMyDepositedSynths() external`

    **Emits**

    * [SynthWithdrawal](#synthwithdrawal)

---

### `depositSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L425)</sub>

@notice depositSynths: Allows users to deposit synths via the approve / transferFrom workflow
@param amount The amount of sUSD you wish to deposit (must have been approved first)

??? example "Details"

    **Signature**

    `depositSynths(uint256 amount) external`

---

### `synthetixReceivedForSynths`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L457)</sub>

@notice Calculate how many SNX you will receive if you transfer
        an amount of synths.
@param amount The amount of synths (in 18 decimal places) you want to ask about

??? example "Details"

    **Signature**

    `synthetixReceivedForSynths(uint256 amount) public`

---

### `synthetixReceivedForEther`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L467)</sub>

@notice Calculate how many SNX you will receive if you transfer
        an amount of ether.
@param amount The amount of ether (in wei) you want to ask about

??? example "Details"

    **Signature**

    `synthetixReceivedForEther(uint256 amount) public`

---

### `synthsReceivedForEther`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L480)</sub>

@notice Calculate how many synths you will receive if you transfer
        an amount of ether.
@param amount The amount of ether (in wei) you want to ask about

??? example "Details"

    **Signature**

    `synthsReceivedForEther(uint256 amount) public`

---

### `synthsUSD`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L487)</sub>

??? example "Details"

    **Signature**

    `synthsUSD() internal`

---

### `synthetix`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L491)</sub>

??? example "Details"

    **Signature**

    `synthetix() internal`

---

### `exchangeRates`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L495)</sub>

??? example "Details"

    **Signature**

    `exchangeRates() internal`

---

## Modifiers

---

### `rateNotStale`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L501)</sub>

---

## Events

---

### `MaxEthPurchaseUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L508)</sub>

- `(uint256 amount)`

---

### `FundsWalletUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L509)</sub>

- `(address newFundsWallet)`

---

### `Exchange`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L510)</sub>

- `(string fromCurrency, uint256 fromAmount, string toCurrency, uint256 toAmount)`

---

### `SynthWithdrawal`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L511)</sub>

- `(address user, uint256 amount)`

---

### `SynthDeposit`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L512)</sub>

- `(address user, uint256 amount, uint256 depositIndex)`

---

### `SynthDepositRemoved`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L513)</sub>

- `(address user, uint256 amount, uint256 depositIndex)`

---

### `SynthDepositNotAccepted`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L514)</sub>

- `(address user, uint256 amount, uint256 minimum)`

---

### `MinimumDepositAmountUpdated`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L515)</sub>

- `(uint256 amount)`

---

### `NonPayableContract`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L516)</sub>

- `(address receiver, uint256 amount)`

---

### `ClearedDeposit`
<sub>[Source](https://github.com/Synthetixio/synthetix/tree/gas-reports-for-buidler/contracts/Depot.sol#L517)</sub>

- `(address fromAddress, address toAddress, uint256 fromETHAmount, uint256 toAmount, uint256 depositIndex)`

---

