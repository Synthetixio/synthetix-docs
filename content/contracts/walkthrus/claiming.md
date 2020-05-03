# Claiming Rewards

`SNX` stakers (aka minters, aka issuers) get staking rewards each week, in the form of `sUSD` trading fees and `SNX` inflationary rewards ([see incentives](../../incentives.md#sources-of-value) for more information).

In Mintr, this is how they perform the task:

<img src="/img/misc/events-claim.png" width=300 />

Via the contracts, the process is as follows:

## API

### Contract

!!! warning "Use the Proxies"

    Note: The transaction's `to` parameter can be to either the proxy or the underlying, however two things are worth noting:

    1. the underlying is subject to change (and does most releases); and
    2. the events will always be emitted on the proxy, regardless of the `to` parameter in the transaction.

    For best results, always interact with the proxy using the ABI of the underlying.

**Destination contract (address):** [`ProxyFeePool`](https://contracts.synthetix.io/ProxyFeePool)

**Underlying contract (ABI):** [`FeePool`](https://contracts.synthetix.io/FeePool)

### Methods

- `claimFees()`
- `claimOnBehalf(address user)`

### Events Emitted

On a successful transaction, the following events occur:

1.  [`Transfer`](../../ExternStateToken#transfer) the `amount` of `sUSD` fees from the fee address to `0x0` emitted on `ProxysUSD`

    | `address`                                        | `address` | `uint`             |
    | ------------------------------------------------ | --------- | ------------------ |
    | from [`FEE_ADDRESS`](../../FeePool/#fee_address) | to `0x0`  | `amount` of `sUSD` |

2.  [`Burned`](../../Synth/#burned) the `amount` of `sUSD` fees emitted on `ProxysUSD`

    | `uint`   | `address`                                        |
    | -------- | ------------------------------------------------ |
    | `amount` | from [`FEE_ADDRESS`](../../FeePool/#fee_address) |

3.  [`Transfer`](../../ExternStateToken/#transfer) the `amount` of `sUSD` fees from `0x0` to the user emitted on `ProxysUSD`

    | `address` | `address`                                     | `uint`             |
    | --------- | --------------------------------------------- | ------------------ |
    | `0x0`     | to `msg.sender` or `user` for `claimOnBehalf` | `amount` of `sUSD` |

4.  [`Issued`](../../Synth/#issued) the `amount` of `sUSD` fees on `ProxysUSD`

    | `uint`   | `address`                                     |
    | -------- | --------------------------------------------- |
    | `amount` | to `msg.sender` or `user` for `claimOnBehalf` |

5.  [`VestingEntryCreated`](../../RewardEscrow#vestingentrycreated) for `amount` of `SNX` inflationary rewards emitted on `RewardEscrow`

    | `address`                                  | `uint` | `uint`                    |
    | ------------------------------------------ | ------ | ------------------------- |
    | `msg.sender` or `user` for `claimOnBehalf` | `now`  | `amount` of `SNX` rewards |

6.  [`FeesClaimed`](../../FeePool#feesclaimed) amount of `sUSDAmount` of fees and amount of `snxRewards` emitted on `ProxyFeePool`

    | `address`                                  | `uint`       | `uint`       |
    | ------------------------------------------ | ------------ | ------------ |
    | `msg.sender` or `user` for `claimOnBehalf` | `sUSDAmount` | `snxRewards` |

### Examples from Mainnet

- `ProxyFeePool.claimFees()` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

- `ProxyFeePool.claimOnBehalf(0xa16de11)` <a target=_blank href="https://dashboard.tenderly.dev/tx/main/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8/logs"><img src="https://tenderly.dev/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

### Code Snippets

#### Claiming in JavaScript (on ropsten)

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
		const txn = await snxjs.FeePool.claimFees();

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

    const { abi } = synthetix.getSource({
      network,
      contract: 'FeePool',
    });
    const { address } = synthetix.getTarget({
      network,
      contract: 'ProxyFeePool',
    });

    const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
    const signer = new ethers.Wallet(privateKey).connect(provider);

    // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
    const FeePool = new ethers.Contract(address, abi, signer);

    (async () => {
      try {
        // send transaction
        const txn = await FeePool.claimFees();
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

#### Claiming in Solidity

```solidity
pragma solidity 0.5.16;

// import "synthetix/contracts/interfaces/IAddressResolver.sol";
interface IAddressResolver {
  function getAddress(bytes32 name) external view returns (address);
}

// import "synthetix/contracts/interfaces/IFeePool.sol";
interface IFeePool {
    function claimFees() external returns (bool);
    function claimOnBehalf(address claimingForAddress) external returns (bool);
}

// This contract should be treated like an abstract contract
contract MyContract {

    IAddressResolver public synthetixResolver;

    // Add a setter here as the synthetix resolver may change in the future
    // Note: work is underway to create a permanent address resolver so this setter
    // will no longer be required
    function setSynthetixResolver(IAddressResolver resolver) external onlyOwner {
        synthetixResolver = resolver;
    }

    function synthetixClaim() external {
      IFeePool feePool = synthetixResolver.getAddress("FeePool");
      require(feePool != address(0), "FeePool is missing from Synthetix resolver");
      // Now claim as this contract
      feePool.claimFees();

      // Note: the above will claim for msg.sender = address(MyContract). If instead you wish
      // to claim on behalf of a user, have them invoke
    }

    function synthetixClaimOnBehalf(address user) external {
        IFeePool feePool = synthetixResolver.getAddress("FeePool");
        require(feePool != address(0), "FeePool is missing from Synthetix resolver");

        // Note: this will fail if `DelegateApprovals.approveClaimOnBehalf(address(MyContract))` has
        // not yet been invoked by the `user`
        feePool.claimOnBehalf(user);
    }
}
```
