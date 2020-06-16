# Staking: Open a Position

`SNX` stakers (aka minting, aka issuing) lock their `SNX` into the `Synthetix` protocol and take on a debt position (that is, a percentage) in the shared pool of the combined `USD` value of all synths (`Synthetix.totalIssuedSynthsExcludingEtherCollateral()`). Upon staking, they are issued `sUSD` that represents their current debt position in `USD`. However, as prices of underlying synths fluctuate with oracle updates, the size of the debt pool fluctuates, meaning that the staker's debt decouples from the amount of `sUSD` that was issued.

To account for the risk stakers take on by being exposed to a shared debt pool, they are rewarded each week in the form of `sUSD` trading fees and `SNX` inflationary rewards ([see incentives](/incentives#sources-of-value) for more information).

Via the contracts, the process is as follows:

## Issuance API

To issue `sUSD` in Mintr, this is how they perform the task:

<img src="/img/misc/events-mint.png" width=300 />

### Contract

!!! warning "Use the Proxies"

    Note: The transaction's `to` parameter can be to either the proxy or the underlying, however two things are worth noting:

    1. the underlying is subject to change (and does most releases); and
    2. the events will always be emitted on the proxy, regardless of the `to` parameter in the transaction.

    For best results, always interact with the proxy using the ABI of the underlying.

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20) (preferred) or [`ProxySynthetix`](https://contracts.synthetix.io/ProxySynthetix) (deprecated, [see this notice](/integrations/guide/#proxy-deprecation))

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

### Methods

- [`issueSynths(uint256 amount)`](../../Synthetix#issuesynths)
- [`issueSynthsOnBehalf(address user, uint256)`](../../Synthetix#issuesynthsonbehalf)
- [`issueMaxSynths()`](../../Synthetix#issuemaxsynths)
- [`issueMaxSynthsOnBehalf(address user)`](../../Synthetix#issuemaxsynthsonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

| name                                          | emitted on  | `address from` | `address to`             | `uint value`       |
| --------------------------------------------- | ----------- | -------------- | ------------------------ | ------------------ |
| [`Transfer`](../../ExternStateToken#transfer) | `ProxysUSD` | `0x0`          | `msg.sender` (or `user`) | `amount` of `sUSD` |

| name                           | emitted on  | `address account`        | `uint value` |
| ------------------------------ | ----------- | ------------------------ | ------------ |
| [`Issued`](../../Synth#issued) | `ProxysUSD` | `msg.sender` (or `user`) | `amount`     |

| name                                                             | emitted on | `address account`        | `uint debtRatio` | `uint debtEntryIndex` | `uint feePeriodStartingDebtIndex` |
| ---------------------------------------------------------------- | ---------- | ------------------------ | ---------------- | --------------------- | --------------------------------- |
| [`IssuanceDebtRatioEntry`](../../FeePool#issuancedebtratioentry) | `FeePool`  | `msg.sender` (or `user`) | `debtRatio`      | `debtEntryIndex`      | `feePeriodStartingDebtIndex`      |

### Examples from Mainnet

- `ProxySynthetix.issueSynths(1e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x5df667fa499772621745a3af169fed477f78e11434fed227588de928a5793f30/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x5df667fa499772621745a3af169fed477f78e11434fed227588de928a5793f30#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>
- `ProxySynthetix.issueMaxSynths()` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x40672a3965d1028891011c672118d99de21b709189b00c60e09c3561d604e571/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x40672a3965d1028891011c672118d99de21b709189b00c60e09c3561d604e571#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

### Code Snippets

!!! example "Staking (Minting/Issuing)"

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
            const txn = await snxjs.Synthetix.issueMaxSynths();

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
        ```javascript hl_lines="22"
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

        (async () => {
          try {
            // send transaction
            const txn = await Synthetix.issueMaxSynths();
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
        ```solidity hl_lines="23 32"
        pragma solidity 0.5.16;

        import "synthetix/contracts/interfaces/IAddressResolver.sol";
        import "synthetix/contracts/interfaces/ISynthetix.sol";


        contract MyContract {

            // This should be instantiated with our ReadProxyAddressResolver
            // it's a ReadProxy that won't change, so safe to code it here without a setter
            // see https://docs.synthetix.io/addresses for addresses in mainnet and testnets
            IAddressResolver public synthetixResolver;

            constructor(IAddressResolver _snxResolver) public {
                synthetixResolver = _snxResolver;
            }

            function synthetixIssue() external {
              ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
              require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

              // Issue for msg.sender = address(MyContract)
              synthetix.issueMaxSynths();
            }

            function synthetixIssueOnBehalf(address user) external {
                ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
                require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

                // Note: this will fail if `DelegateApprovals.approveIssueOnBehalf(address(MyContract))` has
                // not yet been invoked by the `user`
                synthetix.issueMaxSynthsOnBehalf(user);
            }
        }
        ```
