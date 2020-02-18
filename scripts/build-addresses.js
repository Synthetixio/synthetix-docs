'use strict';

const fs = require('fs');
const path = require('path');
const snx = require('synthetix');

const snxPackageJSON = path.join(
  __dirname,
  '..',
  'node_modules',
  'synthetix',
  'package.json'
);

const snxVersion = JSON.parse(fs.readFileSync(snxPackageJSON)).version;
const snxDate = fs.statSync(snxPackageJSON).mtime;

// This function generates the latest addresses for all environments
const generateAddresses = () => {
  const outputPath = path.join(__dirname, '..', 'content', 'addresses.md');

  let headerContent = `Here is the list of all contracts within the current Synthetix system.\n\n**Version**: ${snxVersion}\n\n**Docs Built**: ${snxDate}\n\n`;

  headerContent +=
    '!!! info "Naming Conventions"\n\tWithin the developer ecosystem, the names of Synthetix contracts are referred to by their `source` Solidity file.' +
    'If the same source is used for multiple instances of contracts with different constructor arguments - such as `Synth.sol`, `TokenState.sol` and `ProxyERC20.sol`' +
    ' - then the convention is to suffix the name of the differing feature to the end - be in the proxy target e.g. ProxyFeePool or ProxySynthetix or the synth\'s currencyKey eg: `sETH`, `iCEX`, etc';

  headerContent +=
    '\n\n!!! tip "Handy Contract Links"\n\tAll of the below contracts can be accessed by our contract linker utility. Simply suffix the contract name to the end of' +
    ' https://contracts.synthetix.io to get a link that will always redirect to the latest version of the contract on Etherscan.\n\n\tFor example, try https://contracts.synthetix.io/Synthetix to get linked to the latest Synthetix underlying.' +
    '\n\n\tFor testnets, insert the testnet name before the contract, as in https://contracts.synthetix.io/kovan/ArbRewarder';

  const contractContent = ['mainnet', 'ropsten', 'rinkeby', 'kovan']
    .map(network => {
      const targets = snx.getTarget({ network });

      const header = `\n## ${network.toUpperCase()} Contracts\n`;
      return (
        header +
        '<table><tr><th>Name</th><th>Source</th><th>ABI</th><th>Address</th></tr>' +
        Object.keys(targets)
          .sort()
          .map(targetContract => {
            const { address, source } = targets[targetContract];
            return `
              <tr>
                <td>${targetContract}</td>
                <td><a target="_blank" href="https://github.com/Synthetixio/synthetix/blob/master/contracts/${source}.sol">${source}.sol</a></td>
                <td><a target="_blank" href="https://raw.githubusercontent.com/Synthetixio/synthetix-js/master/lib/abis/${network.toLowerCase()}/${source}.json">${source}.json</a></td>
                <td><a target="_blank" href="https://${
        network !== 'mainnet' ? network + '.' : ''
        }etherscan.io/address/${address}">${address}</a>
                </td>
              </tr>`;
          })
          .join('') +
        '</table>'
      );
    })
    .join('\n');

  const content = `${headerContent}\n\n ${contractContent}`;

  fs.writeFileSync(outputPath, content);
};

generateAddresses();
