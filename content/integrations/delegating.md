# Delegating

Stakers and traders can delegate the following actions to other accounts

- Burning (unstaking)
- Claiming
- Issuance (staking)
- Trading (exchanging)
- (All of the above)

## Adding Approval API

### Contract

**Contract (address & ABI):** [`DelegateApprovals`](https://contracts.synthetix.io/DelegateApprovals)

### Methods

- [`approveAllDelegatePowers(address delegate)`](/contracts/source/contracts/DelegateApprovals/#approvealldelegatepowers)
- [`approveIssueOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals/#approveissueonbehalf)
- [`approveBurnOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals/#approveburnonbehalf)
- [`approveClaimOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals/#approveclaimonbehalf)
- [`approveExchangeOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals/#approveexchangeonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

| name                                                                 | emitted on          | `address authoriser` | `address delegate` | `bytes32 action`                                                                          |
| -------------------------------------------------------------------- | ------------------- | -------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| [`Approval`](/contracts/source/contracts/DelegateApprovals#approval) | `DelegateApprovals` | `msg.sender`         | `delegate`         | One of `ApproveAll, BurnForAddress, ClaimForAddress, IssueForAddress, ExchangeForAddress` |

### Examples from Mainnet

- `DelegateApprovals.approveAllDelegatePowers(0xf70c)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0xb2ab6174ad66e36d1b7809ad511ece7972254bc2b18d6a8f166664c317e80ce6/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0xb2ab6174ad66e36d1b7809ad511ece7972254bc2b18d6a8f166664c317e80ce6#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>
- `DelegateApprovals.approveClaimOnBehalf(0xa2979)` <a target=_blank href="https://dashboard.tenderly.co/tx/main/0x03d059b35adace6a26f67f2e6427b7cdcd7de674afdc63eed700670902b3a90e/logs"><img src="https://tenderly.co/icons/icon-48x48.png" width=24 /></a> <a target=_blank href="https://etherscan.io/tx/0x03d059b35adace6a26f67f2e6427b7cdcd7de674afdc63eed700670902b3a90e#eventlog"><img src="https://etherscan.io/images/favicon2.ico" width=24 /></a>

## Withdrawing Approval API

### Contract

**Contract (address & ABI):** [`DelegateApprovals`](https://contracts.synthetix.io/DelegateApprovals)

### Methods

- [`removeAllDelegatePowers(address delegate)`](/contracts/source/contracts/DelegateApprovals#removealldelegatepowers)
- [`removeIssueOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals#removeissueonbehalf)
- [`removeBurnOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals#removeburnonbehalf)
- [`removeClaimOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals#removeclaimonbehalf)
- [`removeExchangeOnBehalf(address delegate)`](/contracts/source/contracts/DelegateApprovals#removeexchangeonbehalf)

### Events Emitted

On a successful transaction, the following events occur:

| name                                                                                 | emitted on          | `address authoriser` | `address delegate` | `bytes32 action`                                                                          |
| ------------------------------------------------------------------------------------ | ------------------- | -------------------- | ------------------ | ----------------------------------------------------------------------------------------- |
| [`WithdrawApproval`](/contracts/source/contracts/DelegateApprovals#withdrawapproval) | `DelegateApprovals` | `msg.sender`         | `delegate`         | One of `ApproveAll, BurnForAddress, ClaimForAddress, IssueForAddress, ExchangeForAddress` |

---

## Code Snippets

!!! example "Delegating"

    === "SynthetixJs"
        ```javascript hl_lines="14"
        const { SynthetixJs } = require('synthetix-js');
        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously

        // parameters: default provider, default networkId, private key as a string
        const networkId = 11155111; // sepolia, (use 1 for mainnet)
        const signer = new SynthetixJs.signers.PrivateKey(null, networkId, privateKey);
        const snxjs = new SynthetixJs({ signer, networkId });

        (async () => {
          try {
            const contractAddress = '0x0000000000000000000000000000000000000000';

            // send transaction
            const txn = await snxjs.DelegateApprovals.approveAllDelegatePowers(contractAddress);

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
        ```javascript hl_lines="24"
        const synthetix = require('synthetix'); // nodejs
        const ethers = require('ethers'); // nodejs
        // or using ES modules:
        // import synthetix from 'synthetix';
        // import ethers from 'ethers';

        const network = 'sepolia';
        const provider = ethers.getDefaultProvider(network === 'mainnet' ? 'homestead' : network);

        const { abi } = synthetix.getSource({ network, contract: 'DelegateApprovals' });
        const { address } = synthetix.getTarget({ network, contract: 'DelegateApprovals' });

        const privateKey = '0x' + '1'.repeat(64); // don't actually put a private key in code obviously
        const signer = new ethers.Wallet(privateKey).connect(provider);

        // see https://docs.ethers.io/ethers.js/html/api-contract.html#connecting-to-existing-contracts
        const DelegateApprovals = new ethers.Contract(address, abi, signer);

        (async () => {
          try {
            const contractAddress = '0x0000000000000000000000000000000000000000';

            // send transaction
            const txn = await DelegateApprovals.approveAllDelegatePowers();
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

        !!! warning "No delegation in Solidity directly"

            Note: due to how calling works in Solidity, users must invoke these delegation functions themselves directly with the address of your contracts - the calling of these functions cannot be delegated themselves inside of Solidity. This is similar to how `ERC20` approvals work (users must approve a contract to be able to transfer their tokens).
