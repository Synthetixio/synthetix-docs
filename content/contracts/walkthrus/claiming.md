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

- [`claimFees()`](../../FeePool#claimfees)
- [`claimOnBehalf(address user)`](../../FeePool#claimonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

| name                                          | emitted on  | `address from`                              | `address to` | `uint value`       |
| --------------------------------------------- | ----------- | ------------------------------------------- | ------------ | ------------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `ProxysUSD` | [`FEE_ADDRESS`](../../FeePool/#fee_address) | to `0x0`     | `amount` of `sUSD` |

| name                           | emitted on  | `address account`                           | `uint value` |
| ------------------------------ | ----------- | ------------------------------------------- | ------------ |
| [`Burned`](../../Synth#burned) | `ProxysUSD` | [`FEE_ADDRESS`](../../FeePool/#fee_address) | `amount`     |

| name                                          | emitted on  | `address from` | `address to`             | `uint value`       |
| --------------------------------------------- | ----------- | -------------- | ------------------------ | ------------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `ProxysUSD` | `0x0`          | `msg.sender` (or `user`) | `amount` of `sUSD` |

| name                           | emitted on  | `address account`        | `uint value`       |
| ------------------------------ | ----------- | ------------------------ | ------------------ |
| [`Issued`](../../Synth#issued) | `ProxysUSD` | `msg.sender` (or `user`) | `amount` of `sUSD` |

| name                                                            | emitted on     | `address beneficiary`         | `uint time` | `uint value`              |
| --------------------------------------------------------------- | -------------- | ----------------------------- | ----------- | ------------------------- |
| [`VestingEntryCreated`](../../RewardEscrow#vestingentrycreated) | `RewardEscrow` | `msg.sender`<br />(or `user`) | `now`       | `amount` of `SNX` rewards |

| name                                       | emitted on     | `address account`        | `uint sUSDAmount` | `uint snxRewards` |
| ------------------------------------------ | -------------- | ------------------------ | ----------------- | ----------------- |
| [`FeesClaimed`](../../FeePool#feesclaimed) | `ProxyFeePool` | `msg.sender` (or `user`) | `sUSDAmount`      | `snxRewards`      |

### Examples from Mainnet

- `ProxyFeePool.claimFees()` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xa49256e412c7ede6c81eeeaa6c111a5ffc051fe8dd103123cc75e6bb96761fec#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

- `ProxyFeePool.claimOnBehalf(0xa16de11)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x2ba1bcd89c2c6178660afa6fa25674d7573cd58eb63f03416b40c053671879e8#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

### Code Snippets

!!! example "Claiming"

    === "SynthetixJs"
        ```javascript hl_lines="12"
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

    === "Vanilla JavaScript"
        ```javascript hl_lines="28"
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

    === "Solidity"
        ```solidity hl_lines="22 31"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/IFeePool.sol";

        contract MyContract {

            // This should be instantiated with our ReadProxyAddressResolver
            // it's a ReadProxy that won't change, so safe to code it here without a setter
            // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
            IAddressResolver public synthetixResolver;

            constructor(IAddressResolver _snxResolver) public {
                synthetixResolver = _snxResolver;
            }

            function synthetixClaim() external {
              IFeePool feePool = synthetixResolver.getAddress("FeePool");
              require(feePool != address(0), "FeePool is missing from Synthetix resolver");

              // Claim as msg.sender = address(MyContractd)
              feePool.claimFees();
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
