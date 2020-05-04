# Trading: Exchanging Synths

To exchange any synth into `sUSD` in Mintr, a user does:

<img src="/img/misc/events-trade.png" width=200 />

Alternatively, to exchange one synth for another in Synthetix.Exchange, a user does:

<img src="/img/misc/events-exchange.png" width=200 />

Via the contracts, the process is as follows:

## Exchanging API

### Contract

!!! warning "Use the Proxies"

    Note: The transaction's `to` parameter can be to either the proxy or the underlying, however two things are worth noting:

    1. the underlying is subject to change (and does most releases); and
    2. the events will always be emitted on the proxy, regardless of the `to` parameter in the transaction.

    For best results, always interact with the proxy using the ABI of the underlying.

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integrations/guide/#proxy-deprecation))

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

### Methods

- [`exchange(bytes32 src, uint256 fromAmount, bytes32 dest)`](../../Synthetix#exchange)
- [`exchangeOnBehalf(address user, bytes32 src, uint256 fromAmount, bytes32 dest)`](../../Synthetix#exchangeonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

**If any fees are owing or owed, these events will come first. See [trade settlement](../settlement/#events-emitted) for information.**

Following any reclaims or rebates, the following events then occur:

| name                                          | emitted on   | `address from`           | `address to` | `uint value` |
| --------------------------------------------- | ------------ | ------------------------ | ------------ | ------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `Proxy<src>` | `msg.sender` (or `user`) | `0x0`        | `fromAmount` |

| name                           | emitted on   | `address account`        | `uint value` |
| ------------------------------ | ------------ | ------------------------ | ------------ |
| [`Burned`](../../Synth#burned) | `Proxy<src>` | `msg.sender` (or `user`) | `fromAmount` |

| name                                          | emitted on    | `address from` | `address to`             | `uint value`     |
| --------------------------------------------- | ------------- | -------------- | ------------------------ | ---------------- |
| [`Transfer`](../../ExternStateToken#transfer) | `Proxy<dest>` | `0x0`          | `msg.sender` (or `user`) | `toAmount - fee` |

| name                           | emitted on    | `address account`        | `uint value`     |
| ------------------------------ | ------------- | ------------------------ | ---------------- |
| [`Issued`](../../Synth#issued) | `Proxy<dest>` | `msg.sender` (or `user`) | `toAmount - fee` |

| name                                          | emitted on  | `address from` | `address to`                                | `uint value` |
| --------------------------------------------- | ----------- | -------------- | ------------------------------------------- | ------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `ProxysUSD` | `0x0`          | [`FEE_ADDRESS`](../../FeePool/#fee_address) | `fee`        |

| name                           | emitted on  | `address account`                           | `uint value` |
| ------------------------------ | ----------- | ------------------------------------------- | ------------ |
| [`Issued`](../../Synth#issued) | `ProxysUSD` | [`FEE_ADDRESS`](../../FeePool/#fee_address) | `fee`        |

| name                                             | emitted on       | `address account`             | `bytes32 src` | `uint fromAmount` | `bytes32 dest` | `uint toAmount`  | `address toAddress`           |
| ------------------------------------------------ | ---------------- | ----------------------------- | ------------- | ----------------- | -------------- | ---------------- | ----------------------------- |
| [`SynthExchange`](../../Synthetix#synthexchange) | `ProxySynthetix` | `msg.sender`<br />(or `user`) | `src`         | `fromAmount`      | `dest`         | `toAmount - fee` | `msg.sender`<br />(or `user`) |

### Examples from Mainnet

- `ProxySynthetix.exchange(sETH, 100e18, iETH)` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0xe85969d5c65e68968f4a55721ffa30b4da564f74f73af6a0ed1470cbd3935877/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xe85969d5c65e68968f4a55721ffa30b4da564f74f73af6a0ed1470cbd3935877#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>
- `ProxySynthetix.exchange(iETH, 0.22e18, sUSD)` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0x2e0b807336fcd7aed23adfac923eb19a6fdfc73eae41335a229681c10e615c56/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x2e0b807336fcd7aed23adfac923eb19a6fdfc73eae41335a229681c10e615c56#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a Reclaim)
- `ProxySynthetix.exchange(sETH, 5e18, sUSD)` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0x0d7ac5ca424b3a7dcd0a641e1ed614158426d6229445a079dd0f21b8b0876919/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x0d7ac5ca424b3a7dcd0a641e1ed614158426d6229445a079dd0f21b8b0876919#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a> (with a Rebate)

---

### Code Snippets

#### Exchanging in JavaScript (on ropsten)

```javascript
const { SynthetixJs } = require('synthetix-js');
const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

// parameters: default provider, default networkId, private key as a string
const networkId = 3; // ropsten, (use 1 for mainnet)
const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
const snxjs = new SynthetixJs({ signer, networkId });

const { toUtf8Bytes32, parseEther } = snxjs.utils;

(async () => {
	try {
		// send transaction
		const txn = await snxjs.Synthetix.exchange(toUtf8Bytes32('sUSD'), parseEther('0.001'), toUtf8Bytes32('iETH'));

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

??? Info "In JavaScript without SynthetixJs"

    ```javascript
    const synthetix = require('synthetix'); // nodejs
    const ethers = require('ethers'); // nodejs
    // or using ES modules:
    // import synthetix from 'synthetix';
    // import ethers from 'ethers';

    const network = 'ropsten';
    const provider = ethers.getDefaultProvider(network === 'mainnet' ? 'homestead' : network);

    const { address } = synthetix.getTarget({ network, contract: 'ProxyERC20' });
    const { abi } = synthetix.getSource({ network, contract: 'Synthetix' });

    const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
    const signer = new ethers.Wallet(privateKey).connect(provider);

    // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
    const Synthetix = new ethers.Contract(address, abi, signer);
    const { toBytes32 } = synthetix;

    (async () => {
      try {
        // send transaction
        const txn = await Synthetix.exchange(toBytes32('sUSD'), ethers.utils.parseEther('0.001'), toBytes32('iETH'));

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

// import "synthetix/contracts/interfaces/ISynthetix.sol";
interface ISynthetix {

    function exchange(
        bytes32 sourceCurrencyKey,
        uint sourceAmount,
        bytes32 destinationCurrencyKey
    ) external returns (uint amountReceived);

    // For this "on behalf" method to succeed, the exchangeForAddress must have already invoked
    // DelegateApprovals.approveExchangeOnBehalf(address(MyContract))
    function exchangeOnBehalf(
        address exchangeForAddress,
        bytes32 sourceCurrencyKey,
        uint sourceAmount,
        bytes32 destinationCurrencyKey
    ) external returns (uint amountReceived);

    // view
    function isWaitingPeriod(bytes32 currencyKey) external view returns (bool);
}


contract MyContract {

    IAddressResolver public synthetixResolver;

    // Add a setter here as the synthetix resolver may change in the future
    // Note: work is underway to create a permanent address resolver so this setter
    // will no longer be required
    function setSynthetixResolver(IAddressResolver resolver) external onlyOwner {
        synthetixResolver = resolver;
    }

    function synthetixExchange(bytes32 src, uint amount, bytes32 dest) external {)
      ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
      require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

      // This check is what synthetix.exchange() will perform, added here for explicitness
      require(!synthetix.isWaitingPeriod(src), "Cannot exchange during the waiting period");

      // Exchange for msg.sender = address(MyContract)
      synthetix.exchange(src, amount, dest);

      // Note: due to Fee Reclamation in SIP-37, the following actions will fail if attempted in the
      // same block (the waiting period for the "to" synth must first expire)
        // synthetixResolver.getAddress(dest).transfer(address(0), 1e12)
        // synthetix.exchange(dest, 1e12, "sBTC");
        // synthetix.settle(dest);
    }

    function synthetixExchangeOnBehalf(address user, bytes32 src, uint amount, bytes32 dest) external {
        ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
        require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

        // This check is what synthetix.exchange() will perform, added here for explicitness
        require(!synthetix.isWaitingPeriod(src), "Cannot exchange during the waiting period");

        // Note: this will fail if `DelegateApprovals.approveExchangeOnBehalf(address(MyContract))` has
        // not yet been invoked by the user
        synthetix.exchangeOnBehalf(user, src, amount, dest);

        // Note: due to Fee Reclamation in SIP-37, the following actions will fail if attempted in the
        // same block (the waiting period for dest must first expire)
          // synthetixResolver.getAddress(dest).transferFrom(user, address(0), 1e12)
          // synthetix.exchangeOnBehalf(user, dest, 1e12, "sBTC");
          // synthetixResolver.getAddress("Exchanger").settle(user, dest)
    }
}
```
