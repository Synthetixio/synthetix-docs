# Depot: Exchanging `ETH` for `sUSD`

The Depot is a place to deposit any excess `sUSD` for others to purchase it with `ETH`. On [testnets](../../integrations/testnets.md) it also allows you to exchange testnet `ETH` for `SNX`.

!!! Warning "Notice"

    The Depot also supports exchanging `SNX` for `ETH` via any `SNX` the contract holds, however it will send all proceeds to the contract's `fundsWalet`, so
    it's only used on testnets to allow developers to purchase testnet `SNX` (see [testnets](../../integrations/testnets.md))

> Note: while the depositing of sUSD can be done in Mintr, the exchanging of ETH for sUSD has no corresponding controls in the Synthetix dApps (it is however used in third parties aggregators).

## Exchange ETH for sUSD API

### Contract

**Destination contract (address & ABI):** [`Depot`](https://contracts.synthetix.io/Depot)

### Methods

- [`exchangeEtherForSynths()`](../../Depot#exchangeetherforsynths)
- (sending `ETH` to the contract)

### Events Emitted

On a successful transaction, the following events occur:

For each deposit paid through, the following two events are emitted:

| name                                           | emitted on | `address fromAddress` | `address toAddress`                | `uint fromETHAmount`                              | `uint toAmount`                                    | `uint depositIndex`                                   |
| ---------------------------------------------- | ---------- | --------------------- | ---------------------------------- | ------------------------------------------------- | -------------------------------------------------- | ----------------------------------------------------- |
| [`ClearedDeposit`](../../Depot#cleareddeposit) | `Depot`    | `msg.sender`          | the current depositor in the queue | the amount of `ETH` the `toAddress` has been paid | the amont of `sUSD` the `msg.sender` will received | the `depositIndex` that was accessed in this exchange |

| name                                          | emitted on  | `address from` | `address to` | `uint value`          |
| --------------------------------------------- | ----------- | -------------- | ------------ | --------------------- |
| [`Transfer`](../../ExternStateToken#transfer) | `ProxysUSD` | `Depot`        | `msg.sender` | an `amount` of `sUSD` |

Following all deposits paid though, emits the following event:

| name                               | emitted on | `string fromCurrency` | `uint fromAmount`                          | `string toCurrency` | `uint toAmount`                          |
| ---------------------------------- | ---------- | --------------------- | ------------------------------------------ | ------------------- | ---------------------------------------- |
| [`Exchange`](../../Depot#exchange) | `Depot`    | `ETH`                 | `fromAmount` of `ETH` sent by `msg.sender` | `sUSD`              | `toAmount` of `sUSD` the sender was sent |

### Example Transactions on Mainnet

- `Depot.exchangeEtherForSynths()` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0x37b921d27fe21f9a97f3c059b54fb81ba8c0297b14d2577a84d8237121c59ff9/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x37b921d27fe21f9a97f3c059b54fb81ba8c0297b14d2577a84d8237121c59ff9#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a single deposit accessed)
- sending ETH to `Depot` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0xf92bbafd873463d2880d5e6beab2bc46a10d6f6ceea417e235a3ef7828766c79/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xf92bbafd873463d2880d5e6beab2bc46a10d6f6ceea417e235a3ef7828766c79#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with two deposits accessed)

---

### Code Snippets

#### Exchanging in JavaScript (ropsten)

```javascript
const { SynthetixJs } = require('synthetix-js');
const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

// parameters: default provider, default networkId, private key as a string
const networkId = 3; // ropsten, (use 1 for mainnet)
const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
const snxjs = new SynthetixJs({ signer, networkId });

(async () => {
	try {
		// send transaction
		const txn = await snxjs.Depot.exchangeEtherForSynths({
			value: snxjs.utils.parseEther('0.01'), // Send 0.01 ETH
		});

		console.log('hash is mining', txn.hash);

		// wait for mining
		await txn.wait();

		// fetch logs of transaction
		const { logs } = await signer.provider.getTransactionReceipt(txn.hash);

		// show them
		console.log(JSON.stringify(logs, null, '\t'));
	} catch (err) {
		console.log('Error', err);
	}
})();
```

??? Info "In JavaScript without SynthetixJs (ropsten)"

    ```javascript
    const synthetix = require('synthetix'); // nodejs
    const ethers = require('ethers'); // nodejs
    // or using ES modules:
    // import synthetix from 'synthetix';
    // import ethers from 'ethers';

    const network = 'ropsten';
    const provider = ethers.getDefaultProvider(network === 'mainnet' ? 'homestead' : network);

    const contract = 'Depot';

    const { abi } = synthetix.getSource({ network, contract });
    const { address } = synthetix.getTarget({ network, contract });

    const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
    const signer = new ethers.Wallet(privateKey).connect(provider);

    // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
    const Depot = new ethers.Contract(address, abi, signer);

    (async () => {
      try {
        // send transaction
        const txn = await Depot.exchangeEtherForSynths({
          value: ethers.utils.parseEther('0.01')
        });
        // wait for mining
        await txn.wait();
        // fetch logs of transaction
        const { logs } = await provider.getTransactionReceipt(txn.hash);
        // display
        console.log(JSON.stringify(logs, null, '\t'));
      } catch (err) {
        console.log('Error', err);
      }
    })();
    ```

#### Exchanging in Solidity

```solidity
pragma solidity 0.5.16;

// import "synthetix/contracts/interfaces/IAddressResolver.sol";
interface IAddressResolver {
  function getAddress(bytes32 name) external view returns (address);
}

// import "synthetix/contracts/interfaces/IDepot.sol";
interface IDepot {
  function exchangeEtherForSynths() external payable returns (uint);
}


contract MyContract {

    IAddressResolver public synthetixResolver;

    // Add a setter here as the synthetix resolver may change in the future
    // Note: work is underway to create a permanent address resolver so this setter
    // will no longer be required
    function setSynthetixResolver(IAddressResolver resolver) external onlyOwner {
        synthetixResolver = resolver;
    }

    function synthetixExchangeETHForSynths() external {
      IDepot depot = synthetixResolver.getAddress("Depot");
      require(depot != address(0), "Depot is missing from Synthetix resolver");

      uint etherAmount = 1e15; // 0.001 ETH

      // Either
      depot.exchangeEtherForSynths.value(etherAmount)();

      // or simply
      depot.transfer(etherAmount);
    }

}
```
