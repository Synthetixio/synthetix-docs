# Unstaking: Closing a Position

In order to close their position, `SNX` stakers need to burn enough `sUSD` to cover their debt position (`Synthetix.debtBalanceOf(user, "sUSD")`).

## Burning API

### Contract

**Destination contract (address):** [`ProxyERC20`](https://contracts.synthetix.io/ProxyERC20)

**Target contract (ABI):** [`Synthetix`](https://contracts.synthetix.io/Synthetix)

> **Note:** Synthetix uses a proxy system. The ABI of the underlying Synthetix `ProxyERC20` contract you need is [`Synthetix`](https://contracts.synthetix.io/Synthetix). Learn more about how proxies work by visiting the [overview page](/integrations/#proxies).

### Methods

- [`burnSynths(uint256 amount)`](/contracts/source/contracts/Synthetix/#burnsynths)
- [`burnSynthsOnBehalf(address user, uint256 amount)`](/contracts/source/contracts/Synthetix/#burnsynthsonbehalf)
- [`burnSynthsToTarget()`](/contracts/source/contracts/Synthetix/#burnsynthstotarget)
- [`burnSynthsToTargetOnBehalf(address user)`](/contracts/source/contracts/Synthetix/#burnsynthstotargetonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

| name                                                                | emitted on  | `address from`           | `address to` | `uint value`       |
| ------------------------------------------------------------------- | ----------- | ------------------------ | ------------ | ------------------ |
| [`Transfer`](/contracts/source/contracts/ExternStateToken#transfer) | `ProxysUSD` | `msg.sender` (or `user`) | `0x0`        | `amount` of `sUSD` |

| name                                                 | emitted on  | `address account`        | `uint value` |
| ---------------------------------------------------- | ----------- | ------------------------ | ------------ |
| [`Burned`](/contracts/source/contracts/Synth#burned) | `ProxysUSD` | `msg.sender` (or `user`) | `amount`     |

| name                                                                                   | emitted on | `address account`        | `uint debtRatio` | `uint debtEntryIndex` | `uint feePeriodStartingDebtIndex` |
| -------------------------------------------------------------------------------------- | ---------- | ------------------------ | ---------------- | --------------------- | --------------------------------- |
| [`IssuanceDebtRatioEntry`](/contracts/source/contracts/FeePool#issuancedebtratioentry) | `FeePool`  | `msg.sender` (or `user`) | `debtRatio`      | `debtEntryIndex`      | `feePeriodStartingDebtIndex`      |

### Examples from Mainnet

- `ProxySynthetix.burnSynths(3e18)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xc781ddb16ca1e3fed5cf2acb1749e26a1b125057b6f9bfd23235c71381749843/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xc781ddb16ca1e3fed5cf2acb1749e26a1b125057b6f9bfd23235c71381749843#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

- `ProxySynthetix.burnSynthsToTargetOnBehalf(0x3bf10de)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x53eb0cc3509726b02ba53fe869583d964b6ccdc48099c6fbab62d46b4774a01f/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x53eb0cc3509726b02ba53fe869583d964b6ccdc48099c6fbab62d46b4774a01f#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

---

### Code Snippets

!!! example "Unstaking (burning)"

    === "SynthetixJs"
        ```javascript hl_lines="15"
        const { SynthetixJs } = require('synthetix-js');
        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

        // parameters: default provider, default networkId, private key as a string
        const networkId = 11155111; // sepolia, (use 1 for mainnet)
        const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
        const snxjs = new SynthetixJs({ signer, networkId });

        (async () => {
            try {
                // get debt owing
                const debt = await snxjs.Synthetix.debtBalanceOf(signer.address, snxjs.utils.toUtf8Bytes32('sUSD'));

                // burn all debt owing
                const txn = await snxjs.Synthetix.burnSynths(debt);

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
        ```javascript hl_lines="25"
        const synthetix = require('synthetix'); // nodejs
        const ethers = require('ethers'); // nodejs
        // or using ES modules:
        // import synthetix from 'synthetix';
        // import ethers from 'ethers';

        const network = 'sepolia';
        const provider = ethers.getDefaultProvider(network === 'mainnet' ? 'homestead' : network);

        const { address } = synthetix.getTarget({ network, contract: 'ProxyERC20' });
        const { abi } = synthetix.getSource({ network, contract: 'Synthetix' });

        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
        const signer = new ethers.Wallet(privateKey).connect(provider);

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const Synthetix = new ethers.Contract(address, abi, signer);

        (async () => {
        try {

            const debt = await Synthetix.debtBalanceOf(signer.address, synthetix.toBytes32('sUSD'));

            // burn all debt owing
            const txn = await Synthetix.burnSynths(debt);

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
        ```solidity hl_lines="25 36"
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

            function synthetixBurn() external {
                ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
                require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

                uint debt = synthetix.debtBalanceOf(msg.sender, "sUSD");

                // Burn for msg.sender = address(MyContract)
                synthetix.burnSynths(debt);
            }

            function synthetixBurnOnBehalf(address user) external {
                ISynthetix synthetix = synthetixResolver.getAddress("Synthetix");
                require(synthetix != address(0), "Synthetix is missing from Synthetix resolver");

                uint debt = synthetix.debtBalanceOf(user, "sUSD");

                // Note: this will fail if `DelegateApprovals.approveBurnOnBehalf(address(MyContract))` has
                // not yet been invoked by the `user`
                synthetix.burnSynthsOnBehalf(user, debt);
            }
        }
        ```
